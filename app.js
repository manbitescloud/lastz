const OUTER_MUD = [
  { x: 482, y: 465 },
  { x: 517, y: 465 },
  { x: 535, y: 500 },
  { x: 517, y: 535 },
  { x: 482, y: 535 },
  { x: 465, y: 500 },
];

const BLOCKED_CAPITAL = [
  { x: 491, y: 483 },
  { x: 508, y: 483 },
  { x: 517, y: 500 },
  { x: 508, y: 517 },
  { x: 491, y: 517 },
  { x: 483, y: 500 },
];

const EXTRA_FORBIDDEN = [
  [489, 485],
  [489, 484],
  [489, 483],
  [490, 482],
  [490, 481],
  [491, 481],
  [493, 481],
  [489, 515],
];

const HQ_SPACING = 2;
const MAP_CENTER = { x: 500, y: 500 };
const TILE_RADIUS = 0.58;
const TILE_WIDTH = Math.sqrt(3) * TILE_RADIUS;
const TILE_ROW_HEIGHT = 1.5 * TILE_RADIUS;

const ALLIANCE_COLORS = [
  "#b6f055",
  "#73d8d0",
  "#f2b84b",
  "#ef6a57",
  "#8fb4ff",
  "#e684ff",
  "#72e58c",
  "#f58cb2",
  "#f0df6b",
  "#9ae6ff",
];

const storageKey = "last-z-mudfiller-v2";
const forbiddenSet = new Set(EXTRA_FORBIDDEN.map(([x, y]) => pointKey({ x, y })));
const maxPlan = buildMaxPlan();

const defaultState = {
  server: "",
  alliances: [
    { id: makeId(), name: "Main Alliance", count: 20 },
    { id: makeId(), name: "Second Alliance", count: 10 },
  ],
};

let state = loadState();
let assignments = allocatePlan();

const allianceList = document.querySelector("#alliance-list");
const statGrid = document.querySelector("#stat-grid");
const mudLayer = document.querySelector("#mud-layer");
const legend = document.querySelector("#legend");
const assignmentTable = document.querySelector("#assignment-table");
const serverNumber = document.querySelector("#server-number");
const toast = document.querySelector("#toast");
const capitalImage = document.querySelector("#capital-image");

capitalImage.addEventListener("error", () => {
  capitalImage.hidden = true;
});

if (capitalImage.complete && !capitalImage.naturalWidth) {
  capitalImage.hidden = true;
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (!stored || !Array.isArray(stored.alliances)) return structuredClone(defaultState);
    return {
      server: stored.server || "",
      alliances: stored.alliances.length
        ? stored.alliances.map((alliance) => ({ ...alliance, id: alliance.id || makeId() }))
        : structuredClone(defaultState.alliances),
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function pointKey(point) {
  return `${point.x},${point.y}`;
}

function polygonText(points) {
  return points
    .map((point) => {
      const projected = projectCoordinate(point);
      return `${projected.x.toFixed(2)},${projected.y.toFixed(2)}`;
    })
    .join(" ");
}

function pointOnSegment(point, start, end) {
  const cross = (point.y - start.y) * (end.x - start.x) - (point.x - start.x) * (end.y - start.y);
  if (Math.abs(cross) > 0.001) return false;

  return (
    point.x >= Math.min(start.x, end.x) &&
    point.x <= Math.max(start.x, end.x) &&
    point.y >= Math.min(start.y, end.y) &&
    point.y <= Math.max(start.y, end.y)
  );
}

function isInsidePolygon(point, polygon) {
  if (polygon.some((vertex, index) => pointOnSegment(point, vertex, polygon[(index + 1) % polygon.length]))) {
    return true;
  }

  let inside = false;
  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index++) {
    const currentPoint = polygon[index];
    const previousPoint = polygon[previous];
    const crosses = currentPoint.y > point.y !== previousPoint.y > point.y;
    const xAtY =
      ((previousPoint.x - currentPoint.x) * (point.y - currentPoint.y)) /
        (previousPoint.y - currentPoint.y) +
      currentPoint.x;

    if (crosses && point.x < xAtY) inside = !inside;
  }

  return inside;
}

function isValidMudCell(point) {
  return (
    isInsidePolygon(point, OUTER_MUD) &&
    !isInsidePolygon(point, BLOCKED_CAPITAL) &&
    !forbiddenSet.has(pointKey(point))
  );
}

function buildFootprint(anchor) {
  const capX = isOddRow(anchor.y) ? anchor.x : anchor.x - 1;

  return [
    { key: "Top Left", x: capX, y: anchor.y - 1 },
    { key: "Top Right", x: capX + 1, y: anchor.y - 1 },
    { key: "Middle Left", x: anchor.x - 1, y: anchor.y },
    { key: "Anchor", x: anchor.x, y: anchor.y },
    { key: "Middle Right", x: anchor.x + 1, y: anchor.y },
    { key: "Bottom Left", x: capX, y: anchor.y + 1 },
    { key: "Bottom Right", x: capX + 1, y: anchor.y + 1 },
  ];
}

function buildCandidate(anchor) {
  const cells = buildFootprint(anchor);
  const buffer = buildBuffer(cells, HQ_SPACING);
  const center = cells.reduce(
    (sum, cell) => ({ x: sum.x + cell.x / cells.length, y: sum.y + cell.y / cells.length }),
    { x: 0, y: 0 },
  );
  const distance = Math.hypot((center.x - 500) * 1.7, center.y - 500);
  const angle = Math.atan2(center.y - 500, center.x - 500);

  return {
    id: pointKey(anchor),
    anchor,
    cells,
    buffer,
    center,
    distance,
    angle,
  };
}

function buildBuffer(cells, distance) {
  const buffer = new Map();

  cells.forEach((cell) => {
    for (let dy = -distance; dy <= distance; dy += 1) {
      for (let dx = -distance; dx <= distance; dx += 1) {
        const point = { x: cell.x + dx, y: cell.y + dy };
        if (hexDistance(cell, point) <= distance) {
          buffer.set(pointKey(point), point);
        }
      }
    }
  });

  return [...buffer.values()];
}

function hexDistance(start, end) {
  const a = offsetToAxial(start);
  const b = offsetToAxial(end);
  return (
    Math.abs(a.q - b.q) +
    Math.abs(a.q + a.r - b.q - b.r) +
    Math.abs(a.r - b.r)
  ) / 2;
}

function offsetToAxial(point) {
  return {
    q: point.x - (point.y - Math.abs(point.y % 2)) / 2,
    r: point.y,
  };
}

function isOddRow(y) {
  return Math.abs(y % 2) === 1;
}

function buildMaxPlan() {
  const candidates = [];
  for (let y = 464; y <= 536; y += 1) {
    for (let x = 463; x <= 536; x += 1) {
      const candidate = buildCandidate({ x, y });
      if (candidate.cells.every(isValidMudCell) && candidate.buffer.every(isValidCapitalBufferCell)) {
        candidates.push(candidate);
      }
    }
  }

  const sorters = [
    (a, b) => a.distance - b.distance || a.angle - b.angle || a.anchor.y - b.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => a.anchor.y - b.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => a.anchor.x - b.anchor.x || a.anchor.y - b.anchor.y,
    (a, b) => b.anchor.y - a.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => b.anchor.x - a.anchor.x || a.anchor.y - b.anchor.y,
    (a, b) => a.angle - b.angle || a.distance - b.distance,
    (a, b) => b.distance - a.distance || a.angle - b.angle,
  ];

  const bestPlan = sorters
    .map((sorter) => buildGreedyPlan([...candidates].sort(sorter)))
    .sort((a, b) => b.length - a.length || averageDistance(a) - averageDistance(b))[0];

  return bestPlan.sort(
    (a, b) =>
      a.distance - b.distance ||
      a.angle - b.angle ||
      a.anchor.y - b.anchor.y ||
      a.anchor.x - b.anchor.x,
  );
}

function buildGreedyPlan(candidates) {
  const occupied = new Set();
  const plan = [];

  candidates.forEach((candidate) => {
    if (candidate.cells.some((cell) => occupied.has(pointKey(cell)))) return;
    plan.push(candidate);
    candidate.buffer.forEach((cell) => occupied.add(pointKey(cell)));
  });

  return plan;
}

function averageDistance(plan) {
  if (!plan.length) return Number.POSITIVE_INFINITY;
  return plan.reduce((total, placement) => total + placement.distance, 0) / plan.length;
}

function isValidCapitalBufferCell(point) {
  return !isInsidePolygon(point, BLOCKED_CAPITAL) && !forbiddenSet.has(pointKey(point));
}

function cleanAllianceRows() {
  state.alliances = state.alliances.map((alliance) => ({
    ...alliance,
    id: alliance.id || makeId(),
    name: alliance.name.trim(),
    count: Math.max(0, Number(alliance.count) || 0),
  }));

  if (!state.alliances.length) {
    state.alliances.push({ id: makeId(), name: "", count: 1 });
  }
}

function allocatePlan() {
  cleanAllianceRows();
  const allocations = [];
  const used = new Set();
  const activeAlliances = state.alliances.filter((alliance) => alliance.count > 0);
  const activeMeta = activeAlliances.map((alliance, index) => ({
    alliance,
    targetAngle: targetAngleFor(index, activeAlliances.length),
    placements: [],
  }));

  activeMeta.forEach((meta) => {
    meta.placements = takeExpandedLanePlacements(meta, activeAlliances.length, used);
    meta.placements.forEach((placement) => used.add(placement.id));
  });

  state.alliances.forEach((alliance, allianceIndex) => {
    const color = ALLIANCE_COLORS[allianceIndex % ALLIANCE_COLORS.length];
    const placements = activeMeta.find((meta) => meta.alliance.id === alliance.id)?.placements || [];

    placements.forEach((placement, index) => {
      allocations.push({
        ...placement,
        alliance,
        allianceIndex,
        color,
        number: index + 1,
      });
    });

    for (let index = placements.length; index < alliance.count; index += 1) {
      allocations.push({
        alliance,
        allianceIndex,
        color,
        shortfall: true,
        number: index + 1,
      });
    }
  });

  return allocations;
}

function takeExpandedLanePlacements(meta, allianceCount, used) {
  const baseHalfWidth = Math.PI / Math.max(1, allianceCount);
  let halfWidth = baseHalfWidth * 0.72;
  let candidates = [];

  while (halfWidth <= Math.PI + 0.001) {
    candidates = maxPlan
      .filter((placement) => !used.has(placement.id))
      .filter((placement) => angleDifference(placement.angle, meta.targetAngle) <= halfWidth)
      .sort((a, b) => allianceLaneScore(a, meta.targetAngle) - allianceLaneScore(b, meta.targetAngle));

    if (candidates.length >= meta.alliance.count) break;
    halfWidth += baseHalfWidth * 0.22;
  }

  return candidates.slice(0, meta.alliance.count);
}

function allianceLaneScore(placement, targetAngle) {
  const lane = laneMetrics(placement, targetAngle);
  return lane.behindPenalty + lane.radial * 1.6 + lane.lateral * 3;
}

function laneMetrics(placement, targetAngle) {
  const projected = projectCoordinate(placement.anchor);
  const direction = {
    x: Math.cos(targetAngle),
    y: Math.sin(targetAngle),
  };
  const radial = projected.x * direction.x + projected.y * direction.y;
  const lateral = Math.abs(projected.x * direction.y - projected.y * direction.x);

  return {
    radial: Math.abs(radial),
    lateral,
    behindPenalty: radial < 0 ? 200 : 0,
  };
}

function removeBestPlacement(available, scorePlacement) {
  let bestIndex = -1;
  let bestScore = Number.POSITIVE_INFINITY;

  available.forEach((placement, index) => {
    const score = scorePlacement(placement);
    if (score < bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });

  if (bestIndex < 0) return null;
  return available.splice(bestIndex, 1)[0];
}

function targetAngleFor(index, total) {
  if (total <= 0) return 0;
  return -Math.PI / 2 + (index * Math.PI * 2) / total;
}

function angleDifference(a, b) {
  const diff = Math.abs(a - b) % (Math.PI * 2);
  return Math.min(diff, Math.PI * 2 - diff);
}

function renderAll() {
  serverNumber.value = state.server;
  assignments = allocatePlan();
  renderAllianceInputs();
  renderStats();
  renderMap();
  renderLegend();
  renderAssignmentTable();
  saveState();
}

function renderAllianceInputs() {
  allianceList.innerHTML = state.alliances
    .map(
      (alliance, index) => `
        <article class="alliance-row" data-id="${alliance.id}">
          <span class="color-swatch" style="--swatch:${ALLIANCE_COLORS[index % ALLIANCE_COLORS.length]}"></span>
          <label>
            Alliance
            <input data-field="name" maxlength="28" value="${escapeHtml(alliance.name)}" placeholder="Alliance name" />
          </label>
          <label>
            HQs
            <input data-field="count" type="number" inputmode="numeric" min="0" max="${maxPlan.length}" value="${alliance.count}" />
          </label>
          <button class="icon-button remove-alliance" type="button" title="Remove alliance" aria-label="Remove alliance">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </article>
      `,
    )
    .join("");
}

function renderStats() {
  const assigned = assignments.filter((assignment) => !assignment.shortfall).length;
  const requested = state.alliances.reduce((sum, alliance) => sum + alliance.count, 0);
  const shortfall = Math.max(0, requested - assigned);
  const stats = [
    ["Capacity", maxPlan.length.toLocaleString()],
    ["Requested", requested.toLocaleString()],
    ["Assigned", assigned.toLocaleString()],
    ["Open", Math.max(0, maxPlan.length - assigned).toLocaleString()],
    ["Spacing", `${HQ_SPACING} coords`],
    ["Short", shortfall ? shortfall.toLocaleString() : "0"],
  ];

  statGrid.innerHTML = stats
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
}

function renderMap() {
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  setMapViewBox();

  const mudTiles = buildMudTileUnderlay()
    .map((cell) => `<polygon class="mud-tile" points="${hexPoints(cell.x, cell.y, TILE_RADIUS * 0.94)}"></polygon>`)
    .join("");

  const tiles = activeAssignments
    .flatMap((assignment) =>
      assignment.cells.map(
        (cell) => `
          <polygon
            class="hq-cell"
            points="${hexPoints(cell.x, cell.y, TILE_RADIUS * 0.94)}"
            fill="${assignment.color}"
            data-alliance="${escapeHtml(assignment.alliance.name || `Alliance ${assignment.allianceIndex + 1}`)}"
          ></polygon>
        `,
      ),
    )
    .join("");

  const forbiddenTiles = [...forbiddenSet]
    .map((key) => {
      const [x, y] = key.split(",").map(Number);
      return `<polygon class="forbidden-cell" points="${hexPoints(x, y, TILE_RADIUS * 0.84)}"></polygon>`;
    })
    .join("");

  const capitalCenter = projectCoordinate(MAP_CENTER);

  mudLayer.innerHTML = `
    <polygon class="mud-area" points="${polygonText(OUTER_MUD)}"></polygon>
    ${mudTiles}
    <polygon class="blocked-area" points="${polygonText(BLOCKED_CAPITAL)}"></polygon>
    ${forbiddenTiles}
    ${tiles}
    <circle class="capital-dot" cx="${capitalCenter.x.toFixed(2)}" cy="${capitalCenter.y.toFixed(2)}" r="${(TILE_RADIUS * 1.28).toFixed(2)}"></circle>
  `;
}

function buildMudTileUnderlay() {
  const cells = [];
  for (let y = 464; y <= 536; y += 1) {
    for (let x = 463; x <= 536; x += 1) {
      const point = { x, y };
      if (isValidMudCell(point)) cells.push(point);
    }
  }
  return cells;
}

function setMapViewBox() {
  const projectedTiles = buildMudTileUnderlay().flatMap((cell) =>
    hexPointList(cell.x, cell.y, TILE_RADIUS).map((point) => ({
      x: Number(point.split(",")[0]),
      y: Number(point.split(",")[1]),
    })),
  );
  const xs = projectedTiles.map((point) => point.x);
  const ys = projectedTiles.map((point) => point.y);
  const padding = TILE_RADIUS * 2;
  const minX = Math.min(...xs) - padding;
  const minY = Math.min(...ys) - padding;
  const width = Math.max(...xs) - Math.min(...xs) + padding * 2;
  const height = Math.max(...ys) - Math.min(...ys) + padding * 2;
  document.querySelector("#mud-svg").setAttribute("viewBox", `${minX} ${minY} ${width} ${height}`);
}

function renderLegend() {
  legend.innerHTML = state.alliances
    .map(
      (alliance, index) => `
        <span class="legend-item">
          <i style="--swatch:${ALLIANCE_COLORS[index % ALLIANCE_COLORS.length]}"></i>
          ${escapeHtml(alliance.name || `Alliance ${index + 1}`)}
        </span>
      `,
    )
    .join("");
}

function renderAssignmentTable() {
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  const shortfall = assignments.filter((assignment) => assignment.shortfall).length;

  if (!activeAssignments.length) {
    assignmentTable.innerHTML = `<div class="empty-state">No headquarters requested yet.</div>`;
    return;
  }

  assignmentTable.innerHTML = `
    ${shortfall ? `<div class="warning">${shortfall} requested HQs could not fit in the current mud shape.</div>` : ""}
    <div class="table-head">
      <span>#</span>
      <span>Alliance</span>
      <span>Coordinates</span>
      <span>Copy</span>
    </div>
    ${activeAssignments
      .map(
        (assignment, index) => {
          const coordinate = formatEmptyLand(assignment.anchor);
          return `
          <article class="table-row">
            <span>${index + 1}</span>
            <strong>${escapeHtml(assignment.alliance.name || `Alliance ${assignment.allianceIndex + 1}`)} ${assignment.number}</strong>
            <span>${escapeHtml(coordinate)}</span>
            <button class="icon-button row-copy" type="button" data-coordinate="${escapeHtml(coordinate)}" title="Copy coordinate" aria-label="Copy coordinate">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M8 8h10v12H8z"></path>
                <path d="M6 16H4V4h12v2"></path>
              </svg>
            </button>
          </article>
        `;
        },
      )
      .join("")}
  `;
}

function hexPoints(x, y, radius) {
  return hexPointList(x, y, radius).join(" ");
}

function hexPointList(x, y, radius) {
  const center = projectCoordinate({ x, y });
  return Array.from({ length: 6 }, (_, index) => {
    const angle = (Math.PI / 180) * (60 * index - 30);
    return `${(center.x + Math.cos(angle) * radius).toFixed(2)},${(center.y + Math.sin(angle) * radius).toFixed(2)}`;
  });
}

function projectCoordinate(point) {
  return {
    x: (point.x - MAP_CENTER.x + (isOddRow(point.y) ? 0.5 : 0)) * TILE_WIDTH,
    y: (point.y - MAP_CENTER.y) * TILE_ROW_HEIGHT,
  };
}

function buildCoordinateText(compact = false) {
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  const serverText = state.server ? `Server ${state.server}` : "Server";
  const title = compact ? `${serverText} Mud Filler` : `${serverText} Mud Filler Coordinates`;

  const rows = activeAssignments.map((assignment, index) => {
    const allianceName = assignment.alliance.name || `Alliance ${assignment.allianceIndex + 1}`;
    const coordinate = formatEmptyLand(assignment.anchor);
    return compact
      ? `${index + 1}. ${allianceName} HQ ${assignment.number}: ${coordinate}`
      : `${index + 1}\t${allianceName} HQ ${assignment.number}\t${coordinate}`;
  });

  return [title, ...rows].join("\n");
}

function formatEmptyLand(point) {
  const server = state.server || "SVR";
  return `Empty Land [#:${server} X:${point.x} Y:${point.y}]`;
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.append(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }
  showToast(message);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function makeId() {
  return `alliance-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

serverNumber.addEventListener("input", () => {
  state.server = serverNumber.value.trim();
  renderAll();
});

allianceList.addEventListener("input", (event) => {
  const row = event.target.closest("[data-id]");
  const field = event.target.dataset.field;
  if (!row || !field) return;

  const alliance = state.alliances.find((item) => item.id === row.dataset.id);
  if (!alliance) return;

  alliance[field] = field === "count" ? Math.max(0, Number(event.target.value) || 0) : event.target.value;
  assignments = allocatePlan();
  renderStats();
  renderMap();
  renderLegend();
  renderAssignmentTable();
  saveState();
});

allianceList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-alliance");
  if (!removeButton) return;

  const row = removeButton.closest("[data-id]");
  state.alliances = state.alliances.filter((alliance) => alliance.id !== row.dataset.id);
  renderAll();
});

document.querySelector("#add-alliance").addEventListener("click", () => {
  state.alliances.push({ id: makeId(), name: "", count: 1 });
  renderAll();
  allianceList.querySelector(".alliance-row:last-child input")?.focus();
});

document.querySelector("#generate-plan").addEventListener("click", () => {
  renderAll();
  showToast("Fill map generated");
});

assignmentTable.addEventListener("click", (event) => {
  const copyButton = event.target.closest(".row-copy");
  if (!copyButton) return;
  copyText(copyButton.dataset.coordinate, "Coordinate copied");
});

document.querySelector("#copy-coords").addEventListener("click", () => {
  copyText(buildCoordinateText(false), "Coordinates copied");
});

document.querySelector("#copy-discord").addEventListener("click", () => {
  copyText(buildCoordinateText(true), "Message copied");
});

document.querySelector("#reset-button").addEventListener("click", () => {
  state = structuredClone(defaultState);
  localStorage.removeItem(storageKey);
  renderAll();
  showToast("Planner reset");
});

renderAll();
