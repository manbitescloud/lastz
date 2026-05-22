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
  [492, 481],
  [493, 481],
  [494, 482],
  [489, 515],
  [489, 516],
  [489, 517],
  [490, 518],
  [490, 519],
  [491, 519],
  [492, 519],
  [493, 519],
  [494, 518],
  [516, 496],
  [517, 496],
  [517, 497],
  [518, 498],
  [518, 499],
  [518, 500],
  [517, 501],
  [517, 502],
];

const FIXED_SPACING = 1;
const CANDIDATE_PADDING = 3;
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
const defaultState = {
  server: "",
  spacing: FIXED_SPACING,
  alliances: [
    { id: makeId(), name: "Main Alliance", count: 20 },
    { id: makeId(), name: "Second Alliance", count: 10 },
  ],
};

let state = loadState();
let enemyCandidateCount = 0;
let enemyOpenCount = 0;
let maxPlan = buildMaxPlan();
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
      spacing: FIXED_SPACING,
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

function normalizeSpacing(value) {
  return FIXED_SPACING;
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
    !isBlockedCell(point)
  );
}

function isBlockedCell(point) {
  return isInsidePolygon(point, BLOCKED_CAPITAL) || forbiddenSet.has(pointKey(point));
}

function isValidDefensePlacement(candidate) {
  return (
    candidate.cells.every(isValidMudCell) &&
    candidate.buffer.every((cell) => isInsidePolygon(cell, OUTER_MUD) || isBlockedCell(cell))
  );
}

function isValidEnemyOpening(candidate) {
  return candidate.cells.every(isValidMudCell);
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

function buildCandidate(anchor, spacing = state.spacing) {
  const cells = buildFootprint(anchor);
  const buffer = buildBuffer(cells, spacing);
  const center = cells.reduce(
    (sum, cell) => ({ x: sum.x + cell.x / cells.length, y: sum.y + cell.y / cells.length }),
    { x: 0, y: 0 },
  );
  const distance = Math.hypot((center.x - 500) * 1.7, center.y - 500);
  const angle = Math.atan2(center.y - 500, center.x - 500);
  const innerDistance = distanceToInnerWall(cells);

  return {
    id: pointKey(anchor),
    anchor,
    cells,
    buffer,
    cellKeys: cells.map(pointKey),
    bufferKeys: buffer.map(pointKey),
    center,
    distance,
    angle,
    innerDistance,
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

function distanceToInnerWall(cells) {
  return cells.reduce((closest, cell) => {
    const cellDistance = Math.hypot((cell.x - MAP_CENTER.x) * 1.7, cell.y - MAP_CENTER.y);
    return Math.min(closest, cellDistance);
  }, Number.POSITIVE_INFINITY);
}

function coordinateBounds(points, padding = 0) {
  return {
    minX: Math.min(...points.map((point) => point.x)) - padding,
    maxX: Math.max(...points.map((point) => point.x)) + padding,
    minY: Math.min(...points.map((point) => point.y)) - padding,
    maxY: Math.max(...points.map((point) => point.y)) + padding,
  };
}

function buildMaxPlan() {
  const defenderCandidates = buildPlacementCandidates(state.spacing, "defense");
  const enemyCandidates = buildPlacementCandidates(0, "enemy");
  enemyCandidateCount = enemyCandidates.length;

  const variants = buildPlanVariants(defenderCandidates, enemyCandidates);

  const bestPlan = variants
    .map((plan) => buildSealedPlan(plan, state.spacing, enemyCandidates))
    .map((plan) => ({ plan, enemyOpen: countEnemyOpeningsForPlacements(plan, enemyCandidates) }))
    .sort(
    (a, b) =>
      a.enemyOpen - b.enemyOpen ||
      a.plan.length - b.plan.length ||
      averagePlanDistance(a.plan) - averagePlanDistance(b.plan),
  )[0].plan;

  return sortFillOrder(bestPlan);
}

function buildPlacementCandidates(spacing, placementType = "defense") {
  const candidates = [];
  const bounds = coordinateBounds(OUTER_MUD, CANDIDATE_PADDING);

  for (let y = bounds.minY; y <= bounds.maxY; y += 1) {
    for (let x = bounds.minX; x <= bounds.maxX; x += 1) {
      const candidate = buildCandidate({ x, y }, spacing);
      const isValid =
        placementType === "enemy" ? isValidEnemyOpening(candidate) : isValidDefensePlacement(candidate);
      if (isValid) {
        candidates.push(candidate);
      }
    }
  }

  return candidates;
}

function buildCoveragePlan(defenderCandidates, enemyCandidates) {
  const reserved = new Set();
  const selected = new Set();
  const plan = [];
  const remainingEnemyIds = new Set(enemyCandidates.map((candidate) => candidate.id));
  const enemyByCell = new Map();

  enemyCandidates.forEach((enemyCandidate) => {
    enemyCandidate.cellKeys.forEach((key) => {
      if (!enemyByCell.has(key)) enemyByCell.set(key, []);
      enemyByCell.get(key).push(enemyCandidate.id);
    });
  });

  while (true) {
    let bestCandidate = null;
    let bestBlockedIds = null;

    defenderCandidates.forEach((candidate) => {
      if (selected.has(candidate.id)) return;
      if (candidate.cellKeys.some((key) => reserved.has(key))) return;

      const blockedIds = blockedEnemyIdsFor(candidate, enemyByCell, remainingEnemyIds);
      if (!bestCandidate || isBetterCoverageCandidate(candidate, blockedIds, bestCandidate, bestBlockedIds, remainingEnemyIds.size)) {
        bestCandidate = candidate;
        bestBlockedIds = blockedIds;
      }
    });

    if (!bestCandidate) break;

    plan.push(bestCandidate);
    selected.add(bestCandidate.id);
    bestCandidate.bufferKeys.forEach((key) => reserved.add(key));
    bestBlockedIds.forEach((id) => remainingEnemyIds.delete(id));
  }

  return plan;
}

function buildPlanVariants(defenderCandidates, enemyCandidates) {
  const sorters = [
    (a, b) => (isPlacementBefore(a, b) ? -1 : isPlacementBefore(b, a) ? 1 : 0),
    (a, b) => a.distance - b.distance || a.angle - b.angle || a.anchor.y - b.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => b.distance - a.distance || a.angle - b.angle || a.anchor.y - b.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => a.anchor.y - b.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => a.anchor.x - b.anchor.x || a.anchor.y - b.anchor.y,
    (a, b) => b.anchor.y - a.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => b.anchor.x - a.anchor.x || a.anchor.y - b.anchor.y,
    (a, b) => a.angle - b.angle || a.distance - b.distance,
  ];

  return [
    buildCoveragePlan(defenderCandidates, enemyCandidates),
    ...sorters.map((sorter) => buildSpacedPlan([...defenderCandidates].sort(sorter))),
  ];
}

function buildSpacedPlan(candidates) {
  const reserved = new Set();
  const plan = [];

  candidates.forEach((candidate) => {
    if (candidate.cellKeys.some((key) => reserved.has(key))) return;
    plan.push(candidate);
    candidate.bufferKeys.forEach((key) => reserved.add(key));
  });

  return plan;
}

function sortFillOrder(plan) {
  return [...plan].sort((a, b) => (isPlacementBefore(a, b) ? -1 : isPlacementBefore(b, a) ? 1 : 0));
}

function buildSealedPlan(startingPlan, preferredSpacing, enemyCandidates) {
  const plan = [...startingPlan];
  const enemyByCell = enemyCellIndex(enemyCandidates);

  for (let spacing = preferredSpacing - 1; spacing >= 0; spacing -= 1) {
    const candidates = buildPlacementCandidates(spacing, "defense");
    let openEnemyIds = openEnemyIdsForPlacements(plan, enemyCandidates);

    while (openEnemyIds.size) {
      const reserved = reservedKeysForPlacements(plan, spacing);
      const selectedIds = new Set(plan.map((placement) => placement.id));
      let bestCandidate = null;
      let bestBlockedIds = null;

      candidates.forEach((candidate) => {
        if (selectedIds.has(candidate.id)) return;
        if (candidate.cellKeys.some((key) => reserved.has(key))) return;

        const blockedIds = blockedEnemyIdsFor(candidate, enemyByCell, openEnemyIds);
        if (!blockedIds.size) return;
        if (!bestCandidate || isBetterCoverageCandidate(candidate, blockedIds, bestCandidate, bestBlockedIds, openEnemyIds.size)) {
          bestCandidate = candidate;
          bestBlockedIds = blockedIds;
        }
      });

      if (!bestCandidate) break;

      plan.push(bestCandidate);
      bestBlockedIds.forEach((id) => openEnemyIds.delete(id));
      openEnemyIds = openEnemyIdsForPlacements(plan, enemyCandidates);
    }

    if (!openEnemyIdsForPlacements(plan, enemyCandidates).size) break;
  }

  return plan;
}

function reservedKeysForPlacements(placements, spacing) {
  const reserved = new Set();

  placements.forEach((placement) => {
    buildCandidate(placement.anchor, spacing).bufferKeys.forEach((key) => reserved.add(key));
  });

  return reserved;
}

function openEnemyIdsForPlacements(placements, enemyCandidates) {
  const occupied = new Set();
  const openEnemyIds = new Set();

  placements.forEach((placement) => placement.cellKeys.forEach((key) => occupied.add(key)));
  enemyCandidates.forEach((candidate) => {
    if (candidate.cellKeys.every((key) => !occupied.has(key))) openEnemyIds.add(candidate.id);
  });

  return openEnemyIds;
}

function enemyCellIndex(enemyCandidates) {
  const enemyByCell = new Map();

  enemyCandidates.forEach((enemyCandidate) => {
    enemyCandidate.cellKeys.forEach((key) => {
      if (!enemyByCell.has(key)) enemyByCell.set(key, []);
      enemyByCell.get(key).push(enemyCandidate.id);
    });
  });

  return enemyByCell;
}

function blockedEnemyIdsFor(candidate, enemyByCell, remainingEnemyIds) {
  const blockedIds = new Set();

  candidate.cellKeys.forEach((key) => {
    const matchingEnemies = enemyByCell.get(key) || [];
    matchingEnemies.forEach((enemyId) => {
      if (remainingEnemyIds.has(enemyId)) blockedIds.add(enemyId);
    });
  });

  return blockedIds;
}

function isBetterCoverageCandidate(candidate, blockedIds, bestCandidate, bestBlockedIds, remainingEnemyCount) {
  if (remainingEnemyCount > 0 && blockedIds.size !== bestBlockedIds.size) {
    return blockedIds.size > bestBlockedIds.size;
  }

  return (
    candidate.innerDistance < bestCandidate.innerDistance ||
    (candidate.innerDistance === bestCandidate.innerDistance && candidate.distance < bestCandidate.distance) ||
    (candidate.innerDistance === bestCandidate.innerDistance &&
      candidate.distance === bestCandidate.distance &&
      candidate.angle < bestCandidate.angle) ||
    (candidate.innerDistance === bestCandidate.innerDistance &&
      candidate.distance === bestCandidate.distance &&
      candidate.angle === bestCandidate.angle &&
      candidate.anchor.y < bestCandidate.anchor.y) ||
    (candidate.innerDistance === bestCandidate.innerDistance &&
      candidate.distance === bestCandidate.distance &&
      candidate.angle === bestCandidate.angle &&
      candidate.anchor.y === bestCandidate.anchor.y &&
      candidate.anchor.x < bestCandidate.anchor.x)
  );
}

function isPlacementBefore(a, b) {
  return (
    a.innerDistance < b.innerDistance ||
    (a.innerDistance === b.innerDistance && a.distance < b.distance) ||
    (a.innerDistance === b.innerDistance && a.distance === b.distance && a.angle < b.angle) ||
    (a.innerDistance === b.innerDistance &&
      a.distance === b.distance &&
      a.angle === b.angle &&
      a.anchor.y < b.anchor.y) ||
    (a.innerDistance === b.innerDistance &&
      a.distance === b.distance &&
      a.angle === b.angle &&
      a.anchor.y === b.anchor.y &&
      a.anchor.x < b.anchor.x)
  );
}

function countEnemyOpenings(currentAssignments) {
  return countEnemyOpeningsForPlacements(
    currentAssignments.filter((assignment) => !assignment.shortfall),
    buildPlacementCandidates(0, "enemy"),
  );
}

function countEnemyOpeningsForPlacements(placements, enemyCandidates) {
  const occupied = new Set();

  placements.forEach((placement) => placement.cellKeys.forEach((key) => occupied.add(key)));

  const openEnemyCandidates = enemyCandidates.filter((enemyCandidate) =>
    enemyCandidate.cellKeys.every((key) => !occupied.has(key)),
  );

  return buildBestEnemyPack(openEnemyCandidates).length;
}

function buildBestEnemyPack(enemyCandidates) {
  const sorters = [
    (a, b) => (isPlacementBefore(a, b) ? -1 : isPlacementBefore(b, a) ? 1 : 0),
    (a, b) => a.anchor.y - b.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => a.anchor.x - b.anchor.x || a.anchor.y - b.anchor.y,
    (a, b) => b.anchor.y - a.anchor.y || a.anchor.x - b.anchor.x,
    (a, b) => b.anchor.x - a.anchor.x || a.anchor.y - b.anchor.y,
    (a, b) => a.angle - b.angle || a.distance - b.distance,
    (a, b) => b.distance - a.distance || a.angle - b.angle,
  ];

  return sorters
    .map((sorter) => buildNonOverlappingEnemyPlan([...enemyCandidates].sort(sorter)))
    .sort((a, b) => b.length - a.length || averagePlanDistance(a) - averagePlanDistance(b))[0];
}

function buildNonOverlappingEnemyPlan(enemyCandidates) {
  const occupied = new Set();
  const plan = [];

  enemyCandidates.forEach((candidate) => {
    if (candidate.cellKeys.some((key) => occupied.has(key))) return;
    plan.push(candidate);
    candidate.cellKeys.forEach((key) => occupied.add(key));
  });

  return plan;
}

function averagePlanDistance(plan) {
  if (!plan.length) return Number.POSITIVE_INFINITY;
  return plan.reduce((total, placement) => total + placement.distance, 0) / plan.length;
}

function countOpenDefenseSlots(currentAssignments) {
  const assigned = currentAssignments.filter((assignment) => !assignment.shortfall).length;
  return Math.max(0, maxPlan.length - assigned);
}

function hasTrueEnemyOpenings() {
  return enemyOpenCount > 0;
}

function enemyOpeningLabel() {
  return enemyOpenCount === 1 ? "enemy HQ" : "enemy HQs";
}

function defenseSlotLabel(openSlots) {
  return openSlots === 1 ? "defense slot" : "defense slots";
}

function formatEnemyWarning(openDefenseSlots) {
  if (!enemyOpenCount) return "";
  if (openDefenseSlots) {
    return `${enemyOpenCount.toLocaleString()} zero-spacing ${enemyOpeningLabel()} can still fit between defenders, and ${openDefenseSlots.toLocaleString()} ${defenseSlotLabel(openDefenseSlots)} remain unassigned.`;
  }

  return `${enemyOpenCount.toLocaleString()} zero-spacing ${enemyOpeningLabel()} can still fit between defenders even with every defender slot placed. Review the blocked cells or fill rules.`;
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
  const activeAlliances = state.alliances.filter((alliance) => alliance.count > 0);
  const requested = activeAlliances.reduce((sum, alliance) => sum + alliance.count, 0);
  const selectedPlacements = maxPlan.slice(0, requested).map((placement) => ({ ...placement }));
  const activeMeta = assignContiguousAllianceLanes(activeAlliances, selectedPlacements);

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

function assignContiguousAllianceLanes(activeAlliances, placements) {
  const activeMeta = buildAllianceLaneMeta(activeAlliances);
  const sortedPlacements = [...placements].sort(
    (a, b) =>
      laneOrderValue(a) - laneOrderValue(b) ||
      a.innerDistance - b.innerDistance ||
      a.distance - b.distance,
  );
  let cursor = 0;

  activeMeta.forEach((meta) => {
    meta.placements = sortedPlacements
      .slice(cursor, cursor + meta.alliance.count)
      .sort((a, b) => (isPlacementBefore(a, b) ? -1 : isPlacementBefore(b, a) ? 1 : 0));
    cursor += meta.alliance.count;
  });

  return activeMeta;
}

function laneOrderValue(placement) {
  const startAngle = -Math.PI / 2;
  let value = placement.angle - startAngle;
  while (value < 0) value += Math.PI * 2;
  while (value >= Math.PI * 2) value -= Math.PI * 2;
  return value;
}

function buildAllianceLaneMeta(activeAlliances) {
  const totalRequested = activeAlliances.reduce((sum, alliance) => sum + alliance.count, 0);
  let cursor = -Math.PI / 2;

  return activeAlliances.map((alliance) => {
    const width = (Math.PI * 2 * alliance.count) / Math.max(1, totalRequested);
    const targetAngle = normalizeAngle(cursor + width / 2);
    const meta = {
      alliance,
      targetAngle,
      halfWidth: width / 2,
      placements: [],
    };

    cursor += width;
    return meta;
  });
}

function allianceLaneScore(placement, meta) {
  const lane = laneMetrics(placement, meta.targetAngle);
  const angleGap = angleDifference(placement.angle, meta.targetAngle);
  const overflow = Math.max(0, angleGap - meta.halfWidth);
  return overflow * 10000 + angleGap * 100 + lane.behindPenalty + lane.lateral * 0.8 + lane.radial * 0.2;
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

function angleDifference(a, b) {
  const diff = Math.abs(a - b) % (Math.PI * 2);
  return Math.min(diff, Math.PI * 2 - diff);
}

function normalizeAngle(angle) {
  let normalized = angle;
  while (normalized <= -Math.PI) normalized += Math.PI * 2;
  while (normalized > Math.PI) normalized -= Math.PI * 2;
  return normalized;
}

function renderAll() {
  state.spacing = normalizeSpacing(state.spacing);
  maxPlan = buildMaxPlan();
  serverNumber.value = state.server;
  assignments = allocatePlan();
  enemyOpenCount = countEnemyOpenings(assignments);
  renderAllianceInputs();
  renderStats();
  renderMap();
  renderLegend();
  renderAssignmentTable();
  saveState();
}

function syncStateFromForm() {
  state.server = serverNumber.value.trim();
  state.spacing = FIXED_SPACING;
  state.alliances = [...allianceList.querySelectorAll("[data-id]")].map((row) => {
    const nameInput = row.querySelector('[data-field="name"]');
    const countInput = row.querySelector('[data-field="count"]');

    return {
      id: row.dataset.id || makeId(),
      name: nameInput ? nameInput.value : "",
      count: countInput ? Math.max(0, Number(countInput.value) || 0) : 0,
    };
  });

  cleanAllianceRows();
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
    ["Defender Slots", maxPlan.length.toLocaleString()],
    ["Requested", requested.toLocaleString()],
    ["Placed", assigned.toLocaleString()],
    ["Enemy HQs Fit", enemyOpenCount.toLocaleString()],
    ["Spacing", `${FIXED_SPACING} fixed`],
    ["Seal Status", enemyOpenCount ? "Open" : "Sealed"],
  ];

  statGrid.innerHTML = stats
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
}

function renderMap() {
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  setMapViewBox(activeAssignments);

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

function setMapViewBox(activeAssignments = []) {
  const renderedCells = [
    ...buildMudTileUnderlay(),
    ...activeAssignments.flatMap((assignment) => assignment.cells),
  ];
  const projectedTiles = renderedCells.flatMap((cell) =>
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
    .map((alliance, index) => {
      const activeCount = assignments.filter((assignment) => !assignment.shortfall && assignment.alliance.id === alliance.id).length;
      return `
        <span class="legend-item" data-alliance-id="${escapeHtml(alliance.id)}">
          <i style="--swatch:${ALLIANCE_COLORS[index % ALLIANCE_COLORS.length]}"></i>
          <span>${escapeHtml(alliance.name || `Alliance ${index + 1}`)}</span>
          <button class="icon-button alliance-copy" type="button" title="Copy alliance coordinates" aria-label="Copy ${escapeHtml(alliance.name || `Alliance ${index + 1}`)} coordinates" ${activeCount ? "" : "disabled"}>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M8 8h10v12H8z"></path>
              <path d="M6 16H4V4h12v2"></path>
            </svg>
          </button>
        </span>
      `;
    })
    .join("");
}

function renderAssignmentTable() {
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  const shortfall = assignments.filter((assignment) => assignment.shortfall).length;
  const openDefenseSlots = countOpenDefenseSlots(assignments);
  const enemyWarning = formatEnemyWarning(openDefenseSlots);

  if (!activeAssignments.length) {
    assignmentTable.innerHTML = `<div class="empty-state">No headquarters requested yet.</div>`;
    return;
  }

  assignmentTable.innerHTML = `
    ${shortfall ? `<div class="warning">${shortfall} requested HQs could not fit in the current mud shape.</div>` : ""}
    ${hasTrueEnemyOpenings() ? `<div class="warning">${enemyWarning}</div>` : ""}
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

function buildAllianceCoordinateText(allianceId) {
  const activeAssignments = assignments.filter(
    (assignment) => !assignment.shortfall && assignment.alliance.id === allianceId,
  );
  if (!activeAssignments.length) return "";

  const firstAssignment = activeAssignments[0];
  const allianceName = firstAssignment.alliance.name || `Alliance ${firstAssignment.allianceIndex + 1}`;
  const serverText = state.server ? `Server ${state.server}` : "Server";
  const rows = activeAssignments.map(
    (assignment) => `${allianceName} HQ ${assignment.number}: ${formatEmptyLand(assignment.anchor)}`,
  );

  return [`${serverText} Mud Filler - ${allianceName}`, ...rows].join("\n");
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
  if (state.server) serverNumber.classList.remove("input-error");
  saveState();
});

allianceList.addEventListener("input", (event) => {
  const row = event.target.closest("[data-id]");
  const field = event.target.dataset.field;
  if (!row || !field) return;

  const alliance = state.alliances.find((item) => item.id === row.dataset.id);
  if (!alliance) return;

  alliance[field] = field === "count" ? Math.max(0, Number(event.target.value) || 0) : event.target.value;
  saveState();
});

allianceList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-alliance");
  if (!removeButton) return;

  const row = removeButton.closest("[data-id]");
  state.alliances = state.alliances.filter((alliance) => alliance.id !== row.dataset.id);
  renderAllianceInputs();
  saveState();
});

document.querySelector("#add-alliance").addEventListener("click", () => {
  state.alliances.push({ id: makeId(), name: "", count: 1 });
  renderAllianceInputs();
  saveState();
  allianceList.querySelector(".alliance-row:last-child input")?.focus();
});

document.querySelector("#generate-plan").addEventListener("click", () => {
  if (!serverNumber.value.trim()) {
    serverNumber.classList.add("input-error");
    serverNumber.focus();
    showToast("Server is required");
    return;
  }

  serverNumber.classList.remove("input-error");
  syncStateFromForm();
  renderAll();
  showToast("Fill map generated");
});

assignmentTable.addEventListener("click", (event) => {
  const copyButton = event.target.closest(".row-copy");
  if (!copyButton) return;
  copyText(copyButton.dataset.coordinate, "Coordinate copied");
});

legend.addEventListener("click", (event) => {
  const copyButton = event.target.closest(".alliance-copy");
  if (!copyButton) return;

  const legendItem = copyButton.closest("[data-alliance-id]");
  const text = buildAllianceCoordinateText(legendItem?.dataset.allianceId);
  if (!text) return;

  copyText(text, "Alliance coordinates copied");
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
