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
const ALLIANCE_EXTRA_FLEX = Number.POSITIVE_INFINITY;
const ALLIANCE_TRIM_FLEX = Number.POSITIVE_INFINITY;
const REQUESTED_TOTAL_FLEX = 10;
const MAX_CONTACT_CLUSTER_SIZE = 2;
const PLAN_SPACING_OPTIONS = [1];
const KNOWN_STRONG_GENERATION_SEEDS = [
  909051780,
  908071838,
  908422642,
  909031229,
  909630031,
];
const KNOWN_SEALED_BLUEPRINT_ANCHORS = [
  "467,495",
  "467,500",
  "469,502",
  "470,494",
  "470,498",
  "470,506",
  "470,510",
  "472,490",
  "472,503",
  "472,511",
  "473,495",
  "473,500",
  "473,507",
  "474,486",
  "474,515",
  "474,518",
  "475,491",
  "476,482",
  "476,499",
  "476,503",
  "476,511",
  "477,487",
  "477,495",
  "477,507",
  "477,520",
  "478,478",
  "478,516",
  "478,524",
  "479,483",
  "479,491",
  "480,471",
  "480,475",
  "480,500",
  "480,512",
  "480,519",
  "480,523",
  "480,527",
  "480,530",
  "481,480",
  "481,488",
  "481,496",
  "481,504",
  "481,508",
  "482,515",
  "483,468",
  "483,477",
  "483,485",
  "483,493",
  "483,511",
  "483,525",
  "483,529",
  "483,533",
  "484,473",
  "484,481",
  "484,489",
  "484,507",
  "484,520",
  "486,466",
  "486,469",
  "486,516",
  "486,523",
  "486,527",
  "486,531",
  "487,478",
  "487,486",
  "487,512",
  "487,534",
  "488,474",
  "488,482",
  "488,518",
  "489,467",
  "490,471",
  "490,479",
  "490,521",
  "490,525",
  "490,529",
  "490,533",
  "491,475",
  "493,467",
  "493,531",
  "494,471",
  "494,479",
  "494,523",
  "494,527",
  "495,474",
  "495,534",
  "497,467",
  "497,481",
  "497,520",
  "497,525",
  "497,530",
  "498,471",
  "498,476",
  "499,519",
  "499,533",
  "500,523",
  "500,528",
  "501,466",
  "501,475",
  "501,479",
  "502,470",
  "503,481",
  "503,519",
  "503,527",
  "503,532",
  "504,523",
  "505,467",
  "505,472",
  "505,477",
  "505,533",
  "506,529",
  "507,480",
  "507,520",
  "507,525",
  "508,465",
  "508,470",
  "509,474",
  "509,531",
  "510,467",
  "510,478",
  "510,482",
  "510,518",
  "510,522",
  "510,527",
  "510,534",
  "511,471",
  "512,475",
  "513,479",
  "513,484",
  "513,488",
  "513,511",
  "513,515",
  "513,524",
  "513,532",
  "514,467",
  "514,520",
  "514,528",
  "515,472",
  "516,465",
  "516,476",
  "516,482",
  "516,486",
  "516,490",
  "516,494",
  "516,525",
  "517,469",
  "517,504",
  "517,508",
  "517,512",
  "517,516",
  "517,521",
  "517,530",
  "517,534",
  "518,473",
  "518,479",
  "519,483",
  "519,488",
  "519,492",
  "519,496",
  "519,501",
  "519,527",
  "520,506",
  "520,510",
  "520,514",
  "520,518",
  "520,523",
  "521,476",
  "522,480",
  "522,486",
  "522,490",
  "522,494",
  "522,498",
  "522,503",
  "523,508",
  "523,512",
  "523,520",
  "524,483",
  "524,516",
  "525,487",
  "525,492",
  "525,496",
  "525,500",
  "525,505",
  "526,514",
  "527,510",
  "528,490",
  "528,494",
  "528,498",
  "528,502",
  "528,507",
  "530,491",
  "531,496",
  "531,504",
  "532,500",
];
const KNOWN_GOOD_STANDALONE_ANCHORS = [
  { x: 467, y: 499 },
  { x: 468, y: 503 },
  { x: 469, y: 495 },
  { x: 531, y: 496 },
  { x: 470, y: 507 },
  { x: 530, y: 504 },
  { x: 471, y: 491 },
  { x: 529, y: 492 },
  { x: 472, y: 511 },
  { x: 473, y: 487 },
  { x: 527, y: 488 },
  { x: 475, y: 517 },
  { x: 475, y: 483 },
  { x: 524, y: 482 },
  { x: 519, y: 529 },
  { x: 483, y: 533 },
  { x: 483, y: 467 },
  { x: 478, y: 523 },
  { x: 522, y: 478 },
  { x: 518, y: 470 },
  { x: 516, y: 532 },
  { x: 487, y: 467 },
  { x: 511, y: 467 },
  { x: 485, y: 529 },
  { x: 485, y: 471 },
  { x: 491, y: 533 },
  { x: 491, y: 467 },
  { x: 507, y: 467 },
  { x: 485, y: 525 },
];
const STRATEGIC_GROUP_STARTS = [
  { x: 486, y: 486 },
  { x: 524, y: 512 },
  { x: 496, y: 532 },
  { x: 515, y: 525 },
  { x: 512, y: 475 },
  { x: 476, y: 502 },
];
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
const outerMudCellCache = new Map();
const placementContactKeyCache = new Map();
const favorableScoreCache = new Map();
const defaultState = {
  server: "",
  spacing: FIXED_SPACING,
  alliances: [
    { id: makeId(), name: "Main Alliance", count: 20 },
    { id: makeId(), name: "Second Alliance", count: 10 },
  ],
  hqNames: {},
};

let state = loadState();
let generationSeed = 1;
let enemyCandidateCount = 0;
let enemyOpenCount = 0;
let outerSupportPlan = [];
let maxPlan = buildMaxPlan();
let assignments = allocatePlan();
let baseMapViewBox = null;
let currentMapViewBox = null;
const mapPointers = new Map();
let mapGesture = null;
let lastMapTap = 0;
let lastTouchTap = 0;
let usingTouchGesture = false;
let mapInteractionArmed = false;
let showEnemyPlacements = false;

const allianceList = document.querySelector("#alliance-list");
const statGrid = document.querySelector("#stat-grid");
const mapFrame = document.querySelector(".map-frame");
const mudSvg = document.querySelector("#mud-svg");
const mudLayer = document.querySelector("#mud-layer");
const legend = document.querySelector("#legend");
const assignmentTable = document.querySelector("#assignment-table");
const serverNumber = document.querySelector("#server-number");
const toast = document.querySelector("#toast");
const capitalImage = document.querySelector("#capital-image");
const configFileInput = document.querySelector("#config-file");
const downloadFallback = document.querySelector("#download-fallback");
const generatePlanButton = document.querySelector("#generate-plan");
const generateLabel = document.querySelector("#generate-label");
const optimizeFurtherButton = document.querySelector("#optimize-further");
const optimizeLabel = document.querySelector("#optimize-label");
const fillGapsButton = document.querySelector("#fill-gaps");
const fillGapsLabel = document.querySelector("#fill-gaps-label");
let downloadFallbackUrl = "";

function setGenerateButtonText(text) {
  const liveLabel = document.querySelector("#generate-label");
  if (liveLabel) {
    liveLabel.textContent = text;
    return;
  }

  if (generatePlanButton) {
    generatePlanButton.textContent = text;
  }
}

function setOptimizeButtonText(text) {
  const liveLabel = document.querySelector("#optimize-label");
  if (liveLabel) {
    liveLabel.textContent = text;
    return;
  }

  if (optimizeFurtherButton) {
    optimizeFurtherButton.textContent = text;
  }
}

function setFillGapsButtonText(text) {
  const liveLabel = document.querySelector("#fill-gaps-label");
  if (liveLabel) {
    liveLabel.textContent = text;
    return;
  }

  if (fillGapsButton) {
    fillGapsButton.textContent = text;
  }
}

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
      hqNames: stored.hqNames && typeof stored.hqNames === "object" ? stored.hqNames : {},
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

function isOuterMudCell(point) {
  const key = pointKey(point);
  if (outerMudCellCache.has(key)) return outerMudCellCache.get(key);

  const isMud = isInsidePolygon(point, OUTER_MUD) || tileIntersectsPolygon(point, OUTER_MUD);
  outerMudCellCache.set(key, isMud);
  return isMud;
}

function tileIntersectsPolygon(point, polygon) {
  const tile = projectedHexVertices(point);
  const projectedPolygon = polygon.map(projectCoordinate);

  return polygonsIntersect(tile, projectedPolygon);
}

function projectedHexVertices(point) {
  const center = projectCoordinate(point);
  return Array.from({ length: 6 }, (_, index) => {
    const angle = (Math.PI / 180) * (60 * index - 30);
    return {
      x: center.x + Math.cos(angle) * TILE_RADIUS,
      y: center.y + Math.sin(angle) * TILE_RADIUS,
    };
  });
}

function polygonsIntersect(a, b) {
  if (a.some((point) => isInsidePolygon(point, b)) || b.some((point) => isInsidePolygon(point, a))) {
    return true;
  }

  return a.some((startA, indexA) => {
    const endA = a[(indexA + 1) % a.length];
    return b.some((startB, indexB) => segmentsIntersect(startA, endA, startB, b[(indexB + 1) % b.length]));
  });
}

function segmentsIntersect(a, b, c, d) {
  const direction = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
  const d1 = direction(a, b, c);
  const d2 = direction(a, b, d);
  const d3 = direction(c, d, a);
  const d4 = direction(c, d, b);

  if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
    return true;
  }

  return pointOnSegment(c, a, b) || pointOnSegment(d, a, b) || pointOnSegment(a, c, d) || pointOnSegment(b, c, d);
}

function isValidMudCell(point) {
  return isOuterMudCell(point) && !isBlockedCell(point);
}

function isBlockedCell(point) {
  return isInsidePolygon(point, BLOCKED_CAPITAL) || forbiddenSet.has(pointKey(point));
}

function isValidDefensePlacement(candidate) {
  return (
    candidate.cells.every(isValidMudCell) &&
    candidate.buffer.every((cell) => isOuterMudCell(cell) || isBlockedCell(cell))
  );
}

function isValidOuterOverlapDefensePlacement(candidate) {
  const supportCells = outerSupportCellKeys();
  const hasMudCell = candidate.cells.some(isValidMudCell);
  const hasSupportCell = candidate.cells.some((cell) => supportCells.has(pointKey(cell)));

  return (
    hasMudCell &&
    hasSupportCell &&
    candidate.cells.every((cell) => isValidMudCell(cell) || supportCells.has(pointKey(cell)))
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
  const laneOrder = angleOrderValue(angle);

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
    laneOrder,
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

function hexNeighbors(point) {
  const neighbors = [];

  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      if (dx === 0 && dy === 0) continue;
      const neighbor = { x: point.x + dx, y: point.y + dy };
      if (hexDistance(point, neighbor) === 1) neighbors.push(neighbor);
    }
  }

  return neighbors;
}

function placementContactKeys(placement) {
  if (placementContactKeyCache.has(placement.id)) return placementContactKeyCache.get(placement.id);

  const ownCells = new Set(placement.cellKeys || placement.cells.map(pointKey));
  const contactKeys = new Set();

  placement.cells.forEach((cell) => {
    hexNeighbors(cell).forEach((neighbor) => {
      const key = pointKey(neighbor);
      if (!ownCells.has(key)) contactKeys.add(key);
    });
  });

  placementContactKeyCache.set(placement.id, contactKeys);
  return contactKeys;
}

function placementsShareEdge(a, b) {
  const contactKeys = placementContactKeys(a);
  return b.cellKeys.some((key) => contactKeys.has(key));
}

function placementCellIndex(placements) {
  const index = new Map();

  placements.forEach((placement) => {
    placement.cellKeys.forEach((key) => index.set(key, placement));
  });

  return index;
}

function overlappingPlacements(candidate, placements, cellIndex = placementCellIndex(placements)) {
  const overlaps = new Map();

  candidate.cellKeys.forEach((key) => {
    const placement = cellIndex.get(key);
    if (placement) overlaps.set(placement.id, placement);
  });

  return [...overlaps.values()];
}

function touchedPlacements(candidate, placements, cellIndex = placementCellIndex(placements)) {
  const candidateContactKeys = placementContactKeys(candidate);
  const touched = new Map();

  candidateContactKeys.forEach((key) => {
    const placement = cellIndex.get(key);
    if (placement) touched.set(placement.id, placement);
  });

  return [...touched.values()];
}

function contactCountsForPlacements(placements) {
  const counts = new Map(placements.map((placement) => [placement.id, 0]));

  placements.forEach((placement, index) => {
    for (let otherIndex = index + 1; otherIndex < placements.length; otherIndex += 1) {
      const other = placements[otherIndex];
      if (!placementsShareEdge(placement, other)) continue;
      counts.set(placement.id, (counts.get(placement.id) || 0) + 1);
      counts.set(other.id, (counts.get(other.id) || 0) + 1);
    }
  });

  return counts;
}

function wouldExceedContactCluster(
  candidate,
  placements,
  maxClusterSize = MAX_CONTACT_CLUSTER_SIZE,
  contactCounts = contactCountsForPlacements(placements),
  cellIndex = placementCellIndex(placements),
) {
  const touched = touchedPlacements(candidate, placements, cellIndex);
  if (!touched.length) return false;
  if (maxClusterSize <= 1) return true;

  if (touched.length >= maxClusterSize) return true;
  return touched.some((placement) => (contactCounts.get(placement.id) || 0) > 0);
}

function contactClusterStats(placements, maxClusterSize = MAX_CONTACT_CLUSTER_SIZE) {
  const visited = new Set();
  let largest = 0;
  let excess = 0;

  placements.forEach((placement) => {
    if (visited.has(placement.id)) return;

    const queue = [placement];
    visited.add(placement.id);
    let size = 0;

    while (queue.length) {
      const current = queue.shift();
      size += 1;

      placements.forEach((other) => {
        if (visited.has(other.id) || !placementsShareEdge(current, other)) return;
        visited.add(other.id);
        queue.push(other);
      });
    }

    largest = Math.max(largest, size);
    excess += Math.max(0, size - maxClusterSize);
  });

  return { largest, excess };
}

function contactClusters(placements) {
  const visited = new Set();
  const clusters = [];

  placements.forEach((placement) => {
    if (visited.has(placement.id)) return;

    const queue = [placement];
    const members = [];
    visited.add(placement.id);

    while (queue.length) {
      const current = queue.shift();
      members.push(current);

      placements.forEach((other) => {
        if (visited.has(other.id) || !placementsShareEdge(current, other)) return;
        visited.add(other.id);
        queue.push(other);
      });
    }

    if (members.length > 1) {
      clusters.push({
        members,
        edgeCount: contactEdgeCount(members),
        center: averageAnchor(members),
      });
    }
  });

  return clusters.sort(
    (a, b) =>
      b.edgeCount - a.edgeCount ||
      b.members.length - a.members.length ||
      a.center.y - b.center.y ||
      a.center.x - b.center.x,
  );
}

function averageAnchor(placements) {
  if (!placements.length) return MAP_CENTER;
  const total = placements.reduce(
    (sum, placement) => ({ x: sum.x + placement.anchor.x, y: sum.y + placement.anchor.y }),
    { x: 0, y: 0 },
  );
  return {
    x: total.x / placements.length,
    y: total.y / placements.length,
  };
}

function contactEdgeCount(placements) {
  let count = 0;

  placements.forEach((placement, index) => {
    for (let otherIndex = index + 1; otherIndex < placements.length; otherIndex += 1) {
      if (placementsShareEdge(placement, placements[otherIndex])) count += 1;
    }
  });

  return count;
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
  outerSupportPlan = buildOuterSupportHqs();
  const enemyCandidates = buildPlacementCandidates(0, "enemy");
  enemyCandidateCount = enemyCandidates.length;

  const plans = PLAN_SPACING_OPTIONS.flatMap((spacing) => {
    const defenderCandidates = buildPlacementCandidates(spacing, "defense");
    const variants = buildPlanVariants(defenderCandidates, enemyCandidates);

    return variants
      .map((plan) => buildSealedPlan(plan, spacing, enemyCandidates))
      .map((plan) => pruneSealedPlan(plan, enemyCandidates))
      .map((plan) => improveSealedPlanLayout(plan, enemyCandidates, defenderCandidates))
      .map((plan) => pruneSealedPlan(plan, enemyCandidates))
      .map((plan) => improveSealedPlanLayout(plan, enemyCandidates, defenderCandidates))
      .map((plan) => {
        const contact = contactClusterStats(plan);
        return {
          plan,
          spacing,
          contact,
          enemyOpen: countEnemyOpeningsForPlacements(plan, enemyCandidates),
          quality: planLayoutPenalty(plan),
        };
      });
  });

  const bestPlan = plans.sort(
    (a, b) =>
      a.contact.excess - b.contact.excess ||
      a.enemyOpen - b.enemyOpen ||
      a.plan.length - b.plan.length ||
      a.contact.largest - b.contact.largest ||
      a.quality - b.quality ||
      b.spacing - a.spacing ||
      averagePlanDistance(a.plan) - averagePlanDistance(b.plan),
  )[0].plan;

  const repairCandidates = buildPlacementCandidates(FIXED_SPACING, "defense");
  const outerOverlapCandidates = buildPlacementCandidates(FIXED_SPACING, "outer-defense");
  const extendedRepairCandidates = uniqueCandidates(repairCandidates, outerOverlapCandidates);
  const slidPlan = repairEnemyOpeningsBySliding(bestPlan, enemyCandidates, repairCandidates, {
      passes: 7,
      maxMoveDistance: 4,
    });
  const reinforcedPlan = addEnemyBlockingPlacements(slidPlan, enemyCandidates, repairCandidates, { maxAdds: 28 });
  const outerReinforcedPlan = addEnemyBlockingPlacements(reinforcedPlan, enemyCandidates, extendedRepairCandidates, {
    maxAdds: 18,
    preferOuterOverlap: true,
  });

  return sortFillOrder(
    repairEnemyOpeningsBySliding(outerReinforcedPlan, enemyCandidates, extendedRepairCandidates, {
      passes: 4,
      maxMoveDistance: 5,
    }),
  );
}

function buildPlacementCandidates(spacing, placementType = "defense") {
  const candidates = [];
  const bounds = coordinateBounds(OUTER_MUD, placementType === "outer-defense" ? CANDIDATE_PADDING + 5 : CANDIDATE_PADDING);
  const supportCells = placementType === "defense" ? outerSupportCellKeys() : new Set();

  for (let y = bounds.minY; y <= bounds.maxY; y += 1) {
    for (let x = bounds.minX; x <= bounds.maxX; x += 1) {
      const candidate = buildCandidate({ x, y }, spacing);
      const isValid =
        placementType === "enemy"
          ? isValidEnemyOpening(candidate)
          : placementType === "outer-defense"
            ? isValidOuterOverlapDefensePlacement(candidate)
            : isValidDefensePlacement(candidate);
      if (isValid && !candidate.cellKeys.some((key) => supportCells.has(key))) {
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
      if (!bestCandidate || isBetterCoverageCandidate(candidate, blockedIds, bestCandidate, bestBlockedIds, remainingEnemyIds.size, plan)) {
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

function uniqueCandidates(...candidateLists) {
  const byId = new Map();
  candidateLists.flat().forEach((candidate) => {
    if (!byId.has(candidate.id)) byId.set(candidate.id, candidate);
  });
  return [...byId.values()];
}

function buildPlanVariants(defenderCandidates, enemyCandidates) {
  const sorters = [
    (a, b) => (isPlacementBefore(a, b) ? -1 : isPlacementBefore(b, a) ? 1 : 0),
    (a, b) =>
      favorablePlacementScore(a) - favorablePlacementScore(b) ||
      a.innerDistance - b.innerDistance ||
      a.laneOrder - b.laneOrder ||
      a.distance - b.distance ||
      seededPlacementJitter(a) - seededPlacementJitter(b),
    (a, b) =>
      a.distance - b.distance ||
      a.angle - b.angle ||
      seededPlacementJitter(a) - seededPlacementJitter(b) ||
      a.anchor.y - b.anchor.y ||
      a.anchor.x - b.anchor.x,
    (a, b) => a.anchor.y - b.anchor.y || seededPlacementJitter(a) - seededPlacementJitter(b) || a.anchor.x - b.anchor.x,
    (a, b) => a.angle - b.angle || a.distance - b.distance || seededPlacementJitter(a) - seededPlacementJitter(b),
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
      const contactCounts = contactCountsForPlacements(plan);
      const cellIndex = placementCellIndex(plan);
      let bestCandidate = null;
      let bestBlockedIds = null;

      candidates.forEach((candidate) => {
        if (selectedIds.has(candidate.id)) return;
        if (candidate.cellKeys.some((key) => reserved.has(key))) return;
        if (wouldExceedContactCluster(candidate, plan, MAX_CONTACT_CLUSTER_SIZE, contactCounts, cellIndex)) return;

        const blockedIds = blockedEnemyIdsFor(candidate, enemyByCell, openEnemyIds);
        if (!blockedIds.size) return;
        if (!bestCandidate || isBetterCoverageCandidate(candidate, blockedIds, bestCandidate, bestBlockedIds, openEnemyIds.size, plan)) {
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

function improveSealedPlanLayout(plan, enemyCandidates, defenderCandidates) {
  if (openEnemyIdsForPlacements(plan, enemyCandidates).size) return plan;

  let improved = [...plan];
  let currentPenalty = planLayoutPenalty(improved);

  for (let pass = 0; pass < 2; pass += 1) {
    let changed = false;
    const worstPlacements = [...improved]
      .map((placement) => ({
        placement,
        penalty: sealedPlanClumpPenalty(
          placement,
          improved.filter((item) => item.id !== placement.id),
        ) + innerCleanlinessWeight(placement) * 120,
      }))
      .sort((a, b) => b.penalty - a.penalty)
      .slice(0, 18);

    for (const { placement: target } of worstPlacements) {
      const withoutTarget = improved.filter((placement) => placement.id !== target.id);
      const reserved = reservedKeysForPlacements(withoutTarget, state.spacing);
      const selectedIds = new Set(withoutTarget.map((placement) => placement.id));
      const contactCounts = contactCountsForPlacements(withoutTarget);
      const cellIndex = placementCellIndex(withoutTarget);
      const options = defenderCandidates
        .filter((candidate) => candidate.id !== target.id && !selectedIds.has(candidate.id))
        .filter((candidate) => !candidate.cellKeys.some((key) => reserved.has(key)))
        .filter((candidate) =>
          !wouldExceedContactCluster(candidate, withoutTarget, MAX_CONTACT_CLUSTER_SIZE, contactCounts, cellIndex)
        )
        .sort((a, b) => coverageCandidateScore(a, withoutTarget) - coverageCandidateScore(b, withoutTarget))
        .slice(0, 90);

      for (const option of options) {
        const proposal = [...withoutTarget, option];
        if (openEnemyIdsForPlacements(proposal, enemyCandidates).size) continue;

        const proposalPenalty = planLayoutPenalty(proposal);
        if (proposalPenalty < currentPenalty - 0.001) {
          improved = proposal;
          currentPenalty = proposalPenalty;
          changed = true;
          break;
        }
      }

      if (changed) break;
    }

    if (!changed) break;
  }

  return improved;
}

function repairEnemyOpeningsBySliding(
  plan,
  enemyCandidates,
  defenderCandidates,
  { passes = 5, maxMoveDistance = 4, maxClusterSize = MAX_CONTACT_CLUSTER_SIZE } = {},
) {
  let repaired = [...plan];
  let baselineOpen = countEnemyOpeningsForPlacements(repaired, enemyCandidates);
  let baselineEdges = contactEdgeCount(repaired);

  for (let pass = 0; pass < passes && baselineOpen > 0; pass += 1) {
    const visibleEnemyPack = enemyPlacementPackForPlacements(repaired, enemyCandidates);
    if (!visibleEnemyPack.length) break;

    const enemyCells = new Set(visibleEnemyPack.flatMap((enemy) => enemy.cellKeys));
    const currentContactCounts = contactCountsForPlacements(repaired);
    const movers = [...repaired]
      .map((placement) => ({
        placement,
        enemyDistance: nearestDistanceToGroup(placement, visibleEnemyPack),
        contactCount: currentContactCounts.get(placement.id) || 0,
      }))
      .filter(({ enemyDistance }) => enemyDistance <= 9)
      .sort(
        (a, b) =>
          a.enemyDistance - b.enemyDistance ||
          b.contactCount - a.contactCount ||
          innerCleanlinessWeight(b.placement) - innerCleanlinessWeight(a.placement) ||
          seededPlacementJitter(a.placement) - seededPlacementJitter(b.placement),
      )
      .slice(0, 70);
    let changed = false;

    for (const { placement: target } of movers) {
      const withoutTarget = repaired.filter((placement) => placement.id !== target.id);
      const occupied = new Set(withoutTarget.flatMap((placement) => placement.cellKeys));
      const contactCounts = contactCountsForPlacements(withoutTarget);
      const cellIndex = placementCellIndex(withoutTarget);
      const options = defenderCandidates
        .filter((candidate) => candidate.id !== target.id)
        .filter((candidate) => hexDistance(candidate.anchor, target.anchor) <= maxMoveDistance)
        .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
        .filter((candidate) =>
          !wouldExceedContactCluster(candidate, withoutTarget, maxClusterSize, contactCounts, cellIndex)
        )
        .map((candidate) => ({
          candidate,
          blocksVisible: candidate.cellKeys.filter((key) => enemyCells.has(key)).length,
        }))
        .filter((option) => option.blocksVisible)
        .sort(
          (a, b) =>
            b.blocksVisible - a.blocksVisible ||
            hexDistance(a.candidate.anchor, target.anchor) - hexDistance(b.candidate.anchor, target.anchor) ||
            coverageCandidateScore(a.candidate, withoutTarget) - coverageCandidateScore(b.candidate, withoutTarget),
        )
        .slice(0, 28);

      for (const { candidate } of options) {
        const proposal = [...withoutTarget, { ...target, ...candidate, flexAdjusted: true, slideRepair: true }];
        const nextContact = contactClusterStats(proposal, maxClusterSize);
        if (nextContact.excess) continue;

        const nextOpen = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
        const nextEdges = contactEdgeCount(proposal);
        const improvesOpen = nextOpen < baselineOpen;
        const improvesEdges = nextOpen === baselineOpen && nextEdges < baselineEdges;
        if (!improvesOpen && !improvesEdges) continue;

        repaired = proposal;
        baselineOpen = nextOpen;
        baselineEdges = nextEdges;
        changed = true;
        break;
      }

      if (changed) break;
    }

    if (!changed) break;
  }

  return repaired;
}

async function repairEnemyOpeningsByFocusedSlides(
  plan,
  enemyCandidates,
  defenderCandidates,
  {
    passes = 4,
    maxMoveDistance = 1,
    maxClusterSize = MAX_CONTACT_CLUSTER_SIZE,
    maxGroupSize = 2,
    acceptTargetOnly = true,
    requireOpenImprovement = false,
    deadline = Number.POSITIVE_INFINITY,
    yieldIfNeeded = async () => {},
  } = {},
) {
  let repaired = [...plan];
  let baselineOpen = countEnemyOpeningsForPlacements(repaired, enemyCandidates);
  let baselineEdges = contactEdgeCount(repaired);

  for (let pass = 0; pass < passes && baselineOpen > 0 && Date.now() < deadline; pass += 1) {
    await yieldIfNeeded();
    const visibleEnemyPack = enemyPlacementPackForPlacements(repaired, enemyCandidates);
    if (!visibleEnemyPack.length) break;

    let best = null;

    for (const enemy of visibleEnemyPack) {
      if (Date.now() >= deadline) break;
      await yieldIfNeeded();

      const enemyCellKeys = new Set(enemy.cellKeys);
      const movers = repaired
        .map((placement) => ({
          placement,
          distance: nearestDistanceToGroup(placement, [enemy]),
          overlap: placement.cellKeys.filter((key) => enemyCellKeys.has(key)).length,
        }))
        .filter(({ distance }) => distance <= 9)
        .sort(
          (a, b) =>
            a.distance - b.distance ||
            b.overlap - a.overlap ||
            innerCleanlinessWeight(b.placement) - innerCleanlinessWeight(a.placement),
        )
        .slice(0, 14);

      const optionsByPlacement = new Map();
      for (const { placement } of movers) {
        const options = focusedSlideOptionsForPlacement(
          placement,
          repaired.filter((item) => item.id !== placement.id),
          defenderCandidates,
          enemyCellKeys,
          { maxMoveDistance, maxClusterSize },
        );
        if (options.length) optionsByPlacement.set(placement.id, options);
      }

      for (const { placement } of movers) {
        const options = optionsByPlacement.get(placement.id) || [];
        for (const option of options) {
          const proposal = buildFocusedSlideProposal(repaired, [{ target: placement, candidate: option.candidate }], maxClusterSize);
          const scored = scoreFocusedSlideProposal(proposal, enemyCandidates, baselineOpen, baselineEdges, enemy, {
            acceptTargetOnly,
            requireOpenImprovement,
          });
          if (!scored) continue;
          if (!best || scored.score < best.score) best = scored;
        }
      }

      const pairMovers = movers.filter(({ placement }) => optionsByPlacement.has(placement.id)).slice(0, 10);
      for (let groupSize = 2; groupSize <= maxGroupSize; groupSize += 1) {
        for (const moverGroup of combinations(pairMovers, groupSize)) {
          if (Date.now() >= deadline) break;
          const targets = moverGroup.map(({ placement }) => placement);
          const targetIds = new Set(targets.map((target) => target.id));
          const fixedGroupPlacements = repaired.filter((placement) => !targetIds.has(placement.id));
          const optionGroups = targets.map((target) =>
            focusedSlideOptionsForPlacement(target, fixedGroupPlacements, defenderCandidates, enemyCellKeys, {
              maxMoveDistance,
              maxClusterSize,
            }).slice(0, groupSize === 3 ? 5 : 7),
          );
          if (optionGroups.some((options) => !options.length)) continue;

          for (const optionCombo of cartesianProduct(optionGroups)) {
            const proposal = buildFocusedSlideProposal(
              repaired,
              targets.map((target, index) => ({ target, candidate: optionCombo[index].candidate })),
              maxClusterSize,
            );
            const scored = scoreFocusedSlideProposal(proposal, enemyCandidates, baselineOpen, baselineEdges, enemy, {
              acceptTargetOnly,
              requireOpenImprovement,
            });
            if (!scored) continue;
            if (!best || scored.score < best.score) best = scored;
          }
        }
      }
    }

    if (!best) break;
    repaired = best.plan;
    baselineOpen = best.open;
    baselineEdges = best.edges;
  }

  return repaired;
}

function focusedSlideOptionsForPlacement(
  target,
  fixedPlacements,
  defenderCandidates,
  enemyCellKeys,
  { maxMoveDistance, maxClusterSize },
) {
  const occupied = new Set(fixedPlacements.flatMap((placement) => placement.cellKeys));
  const contactCounts = contactCountsForPlacements(fixedPlacements);
  const cellIndex = placementCellIndex(fixedPlacements);

  return defenderCandidates
    .filter((candidate) => candidate.id !== target.id)
    .filter((candidate) => hexDistance(candidate.anchor, target.anchor) <= maxMoveDistance)
    .filter((candidate) => candidate.cellKeys.some((key) => enemyCellKeys.has(key)))
    .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
    .filter((candidate) => !wouldExceedContactCluster(candidate, fixedPlacements, maxClusterSize, contactCounts, cellIndex))
    .map((candidate) => ({
      candidate,
      blockedCells: candidate.cellKeys.filter((key) => enemyCellKeys.has(key)).length,
      distance: hexDistance(candidate.anchor, target.anchor),
    }))
    .sort(
      (a, b) =>
        b.blockedCells - a.blockedCells ||
        a.distance - b.distance ||
        favorablePlacementScore(a.candidate) - favorablePlacementScore(b.candidate) ||
        coverageCandidateScore(a.candidate, fixedPlacements) - coverageCandidateScore(b.candidate, fixedPlacements),
    )
    .slice(0, 10);
}

function buildFocusedSlideProposal(activePlacements, moves, maxClusterSize) {
  const movedIds = new Set(moves.map((move) => move.target.id));
  const fixedPlacements = activePlacements.filter((placement) => !movedIds.has(placement.id));
  const proposal = [...fixedPlacements];
  const occupied = new Set(fixedPlacements.flatMap((placement) => placement.cellKeys));

  for (const move of moves) {
    if (move.candidate.cellKeys.some((key) => occupied.has(key))) return null;
    const moved = { ...move.target, ...move.candidate, flexAdjusted: true, focusedSlide: true };
    proposal.push(moved);
    moved.cellKeys.forEach((key) => occupied.add(key));
  }

  const contact = contactClusterStats(proposal, maxClusterSize);
  if (contact.excess) return null;
  return proposal;
}

function scoreFocusedSlideProposal(
  proposal,
  enemyCandidates,
  baselineOpen,
  baselineEdges,
  targetEnemy = null,
  { acceptTargetOnly = true, requireOpenImprovement = false } = {},
) {
  if (!proposal) return null;

  const nextOpen = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
  const nextEdges = contactEdgeCount(proposal);
  const targetBlocked = targetEnemy ? isEnemyCandidateBlocked(targetEnemy, proposal) : false;
  const improvesOpen = nextOpen < baselineOpen;
  const improvesEdges = nextOpen === baselineOpen && nextEdges < baselineEdges;
  const removesVisibleEnemy = acceptTargetOnly && targetBlocked && nextOpen <= baselineOpen;
  if (requireOpenImprovement && !improvesOpen) return null;
  if (!improvesOpen && !improvesEdges && !removesVisibleEnemy) return null;

  return {
    plan: proposal,
    open: nextOpen,
    edges: nextEdges,
    score: nextOpen * 10000000 + nextEdges * 80000 - Number(targetBlocked) * 650000 + planLayoutPenalty(proposal),
  };
}

function combinations(items, size) {
  const result = [];
  const picked = [];

  function visit(start) {
    if (picked.length === size) {
      result.push([...picked]);
      return;
    }

    for (let index = start; index <= items.length - (size - picked.length); index += 1) {
      picked.push(items[index]);
      visit(index + 1);
      picked.pop();
    }
  }

  visit(0);
  return result;
}

function cartesianProduct(groups) {
  return groups.reduce(
    (products, group) => products.flatMap((product) => group.map((item) => [...product, item])),
    [[]],
  );
}

function isEnemyCandidateBlocked(enemyCandidate, placements, supportPlacements = outerSupportPlan) {
  const occupied = new Set();
  [...placements, ...supportPlacements].forEach((placement) => placement.cellKeys.forEach((key) => occupied.add(key)));
  return enemyCandidate.cellKeys.some((key) => occupied.has(key));
}

function placementAnchorSignature(placements) {
  return placements
    .map((placement) => `${placement.id}:${placement.anchor.x},${placement.anchor.y}`)
    .sort()
    .join("|");
}

function isOuterOverlapPlacement(placement) {
  const supportCells = outerSupportCellKeys();
  return placement.cells.some((cell) => supportCells.has(pointKey(cell)));
}

function addEnemyBlockingPlacements(plan, enemyCandidates, defenderCandidates, { maxAdds = 20, preferOuterOverlap = false } = {}) {
  let reinforced = [...plan];
  let baselineOpen = countEnemyOpeningsForPlacements(reinforced, enemyCandidates);

  for (let added = 0; added < maxAdds && baselineOpen > 0; added += 1) {
    const visibleEnemyPack = enemyPlacementPackForPlacements(reinforced, enemyCandidates);
    const enemyCells = new Set(visibleEnemyPack.flatMap((enemy) => enemy.cellKeys));
    const occupied = new Set(reinforced.flatMap((placement) => placement.cellKeys));
    const contactCounts = contactCountsForPlacements(reinforced);
    const cellIndex = placementCellIndex(reinforced);
    const options = defenderCandidates
      .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
      .filter((candidate) =>
        !wouldExceedContactCluster(candidate, reinforced, MAX_CONTACT_CLUSTER_SIZE, contactCounts, cellIndex)
      )
      .map((candidate) => ({
        candidate,
        blocksVisible: candidate.cellKeys.filter((key) => enemyCells.has(key)).length,
        touchCount: touchedPlacements(candidate, reinforced, cellIndex).length,
        outerOverlap: isOuterOverlapPlacement(candidate),
      }))
      .filter((option) => option.blocksVisible)
      .sort(
        (a, b) =>
          b.blocksVisible - a.blocksVisible ||
          (preferOuterOverlap ? Number(b.outerOverlap) - Number(a.outerOverlap) : 0) ||
          a.touchCount - b.touchCount ||
          coverageCandidateScore(a.candidate, reinforced) - coverageCandidateScore(b.candidate, reinforced),
      )
      .slice(0, 90);

    let best = null;

    for (const { candidate } of options) {
      const proposal = [...reinforced, candidate];
      const nextOpen = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
      if (nextOpen >= baselineOpen) continue;

      const nextEdges = contactEdgeCount(proposal);
      const score = nextOpen * 1000000 + nextEdges * 60000 + planLayoutPenalty(proposal);
      if (!best || score < best.score) {
        best = { candidate, nextOpen, score };
      }
    }

    if (!best) break;
    reinforced = [...reinforced, best.candidate];
    baselineOpen = best.nextOpen;
  }

  return reinforced;
}

function pruneSealedPlan(plan, enemyCandidates) {
  if (openEnemyIdsForPlacements(plan, enemyCandidates).size) return plan;

  const sorters = [
    (placements) => [...placements].sort((a, b) => redundancyScore(b, placements) - redundancyScore(a, placements)),
    (placements) => [...placements].sort((a, b) => b.innerDistance - a.innerDistance || b.distance - a.distance),
    (placements) => [...placements].sort((a, b) => b.distance - a.distance || b.innerDistance - a.innerDistance),
    (placements) => [...placements].sort((a, b) => b.anchor.y - a.anchor.y || b.anchor.x - a.anchor.x),
  ];

  return sorters
    .map((sorter) => pruneSealedPlanOnce(plan, enemyCandidates, sorter))
    .sort((a, b) => a.length - b.length || averagePlanDistance(a) - averagePlanDistance(b))[0];
}

function pruneSealedPlanOnce(plan, enemyCandidates, sorter) {
  const pruned = [...plan];
  let changed = true;

  while (changed) {
    changed = false;
    const removalOrder = sorter(pruned);

    for (const placement of removalOrder) {
      const candidate = pruned.filter((item) => item.id !== placement.id);
      if (!openEnemyIdsForPlacements(candidate, enemyCandidates).size) {
        pruned.splice(pruned.findIndex((item) => item.id === placement.id), 1);
        changed = true;
        break;
      }
    }
  }

  return pruned;
}

function redundancyScore(placement, placements) {
  const neighbors = placements.filter((item) => item.id !== placement.id);
  const nearest = neighbors.reduce(
    (closest, item) => Math.min(closest, hexDistance(placement.anchor, item.anchor)),
    Number.POSITIVE_INFINITY,
  );
  const nearbyCount = neighbors.filter((item) => hexDistance(placement.anchor, item.anchor) <= 5).length;
  const nearestPenalty = Number.isFinite(nearest) ? Math.max(0, 7 - nearest) * 16 : 0;

  return nearbyCount * 12 + nearestPenalty + innerCleanlinessWeight(placement) * 18 + placement.innerDistance * 0.2;
}

function reservedKeysForPlacements(placements, spacing) {
  const reserved = new Set();

  placements.forEach((placement) => {
    buildCandidate(placement.anchor, spacing).bufferKeys.forEach((key) => reserved.add(key));
  });

  return reserved;
}

function openEnemyIdsForPlacements(placements, enemyCandidates, supportPlacements = outerSupportPlan) {
  const occupied = new Set();
  const openEnemyIds = new Set();

  [...placements, ...supportPlacements].forEach((placement) => placement.cellKeys.forEach((key) => occupied.add(key)));
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

function isBetterCoverageCandidate(candidate, blockedIds, bestCandidate, bestBlockedIds, remainingEnemyCount, currentPlacements = []) {
  if (remainingEnemyCount > 0 && blockedIds.size !== bestBlockedIds.size) {
    return blockedIds.size > bestBlockedIds.size;
  }

  const candidateScore = coverageCandidateScore(candidate, currentPlacements);
  const bestScore = coverageCandidateScore(bestCandidate, currentPlacements);
  if (candidateScore !== bestScore) return candidateScore < bestScore;

  return (
    candidate.innerDistance < bestCandidate.innerDistance ||
    (candidate.innerDistance === bestCandidate.innerDistance && candidate.distance < bestCandidate.distance) ||
    (candidate.innerDistance === bestCandidate.innerDistance && candidate.distance === bestCandidate.distance && candidate.angle < bestCandidate.angle) ||
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

function coverageCandidateScore(candidate, currentPlacements = []) {
  return (
    candidate.innerDistance * 9 +
    candidate.distance * 0.08 +
    favorablePlacementScore(candidate) * 145 +
    seededPlacementJitter(candidate, 18) +
    sealedPlanClumpPenalty(candidate, currentPlacements)
  );
}

function sealedPlanClumpPenalty(candidate, currentPlacements = []) {
  const weight = innerCleanlinessWeight(candidate);

  return currentPlacements.reduce((penalty, placement) => {
    const distance = hexDistance(candidate.anchor, placement.anchor);
    if (distance > 12) return penalty;
    const otherWeight = innerCleanlinessWeight(placement);
    const combinedWeight = Math.max(weight, otherWeight);
    const bothNearInner = weight > 0.75 && otherWeight > 0.75;
    const innerMultiplier = bothNearInner ? 2.35 : 1;
    const hardPenalty = distance <= 6 ? (7 - distance) * 5200 * combinedWeight * innerMultiplier : 0;
    const softPenalty = (13 - distance) * 760 * combinedWeight * innerMultiplier;
    return penalty + hardPenalty + softPenalty;
  }, 0);
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

function favorablePlacementScore(candidate) {
  if (favorableScoreCache.has(candidate.id)) return favorableScoreCache.get(candidate.id);

  const score = KNOWN_GOOD_STANDALONE_ANCHORS.reduce(
    (best, anchor) => Math.min(best, hexDistance(candidate.anchor, anchor)),
    Number.POSITIVE_INFINITY,
  );

  favorableScoreCache.set(candidate.id, score);
  return score;
}

function countEnemyOpenings(currentAssignments) {
  return countEnemyOpeningsForPlacements(
    currentAssignments.filter((assignment) => !assignment.shortfall),
    buildPlacementCandidates(0, "enemy"),
  );
}

function countEnemyOpeningsForPlacements(placements, enemyCandidates, supportPlacements = outerSupportPlan) {
  return enemyPlacementPackForPlacements(placements, enemyCandidates, supportPlacements).length;
}

function enemyPlacementPackForPlacements(placements, enemyCandidates = buildPlacementCandidates(0, "enemy"), supportPlacements = outerSupportPlan) {
  const occupied = new Set();

  [...placements, ...supportPlacements].forEach((placement) => placement.cellKeys.forEach((key) => occupied.add(key)));

  const openEnemyCandidates = enemyCandidates.filter((enemyCandidate) =>
    enemyCandidate.cellKeys.every((key) => !occupied.has(key)),
  );

  return buildBestEnemyPack(openEnemyCandidates);
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

function planLayoutPenalty(plan) {
  return plan.reduce((total, placement, index) => {
    let penalty = 0;
    for (let otherIndex = index + 1; otherIndex < plan.length; otherIndex += 1) {
      const other = plan[otherIndex];
      const distance = hexDistance(placement.anchor, other.anchor);
      if (distance > 12) continue;
      const innerWeight = Math.max(innerCleanlinessWeight(placement), innerCleanlinessWeight(other));
      const bothNearInner = innerCleanlinessWeight(placement) > 0.75 && innerCleanlinessWeight(other) > 0.75;
      const innerMultiplier = bothNearInner ? 2.2 : 1;
      if (distance <= 5) penalty += (6 - distance) * 1200 * innerWeight * innerMultiplier;
      penalty += (13 - distance) * 180 * innerWeight * innerMultiplier;
    }

    return total + penalty + placement.innerDistance * 0.3;
  }, 0);
}

function sealAssignmentOpenings(currentAssignments) {
  const sealedAssignments = [...currentAssignments];
  const enemyCandidates = buildPlacementCandidates(0, "enemy");
  const activeAlliances = state.alliances.filter((alliance) => alliance.count > 0);
  const laneMeta = buildAllianceLaneMeta(activeAlliances);
  const metaByAllianceId = new Map(laneMeta.map((meta) => [meta.alliance.id, meta]));
  const placementsByAllianceId = new Map();

  sealedAssignments
    .filter((assignment) => !assignment.shortfall)
    .forEach((assignment) => {
      if (!placementsByAllianceId.has(assignment.alliance.id)) placementsByAllianceId.set(assignment.alliance.id, []);
      placementsByAllianceId.get(assignment.alliance.id).push(assignment);
    });

  const placeholders = sealedAssignments
    .map((assignment, index) => ({ assignment, index }))
    .filter(({ assignment }) => assignment.shortfall)
    .sort((a, b) => Number(b.assignment.flexTrim) - Number(a.assignment.flexTrim) || a.assignment.allianceIndex - b.assignment.allianceIndex || a.assignment.number - b.assignment.number);
  const usedIds = new Set(sealedAssignments.filter((assignment) => !assignment.shortfall).map((assignment) => assignment.id));
  const available = maxPlan.filter((placement) => !usedIds.has(placement.id));
  const enemyByCell = enemyCellIndex(enemyCandidates);
  let activePlacements = sealedAssignments.filter((assignment) => !assignment.shortfall);
  let openEnemyIds = openEnemyIdsForPlacements(activePlacements, enemyCandidates);

  while (openEnemyIds.size && available.length) {
    const occupied = new Set(activePlacements.flatMap((placement) => placement.cellKeys));
    let best = null;

    [true, false].some((requireLane) => {
      available.forEach((placement, placementIndex) => {
        if (placement.cellKeys.some((key) => occupied.has(key))) return;
        const blockedIds = blockedEnemyIdsFor(placement, enemyByCell, openEnemyIds);
        if (!blockedIds.size) return;

        const allianceOptions = sealingAllianceOptions(placement, activeAlliances, laneMeta, placementsByAllianceId, placeholders, requireLane);

        allianceOptions.forEach((option) => {
          const picked = placementsByAllianceId.get(option.alliance.id) || [];
          const laneScore = option.meta ? allianceLaneScore(placement, option.meta, picked) : placement.innerDistance;
          const lanePenalty = option.inLane ? 0 : 1800000;
          const fillBalancePenalty = option.placeholder ? 0 : 2800000;
          const score = -blockedIds.size * 10000000 + fillBalancePenalty + lanePenalty + laneScore + option.allianceIndex * 0.01;
          if (!best || score < best.score) {
            best = { ...option, placement, placementIndex, blockedIds, score };
          }
        });
      });

      return Boolean(best);
    });

    if (!best) break;

    const assignment = best.placeholder
      ? sealedAssignments[best.placeholder.index]
      : {
          alliance: best.alliance,
          allianceIndex: best.allianceIndex,
          color: ALLIANCE_COLORS[best.allianceIndex % ALLIANCE_COLORS.length],
          number: (placementsByAllianceId.get(best.alliance.id)?.length || 0) + 1,
          extraFill: true,
          flexAdjusted: true,
        };

    Object.assign(assignment, best.placement);
    assignment.shortfall = false;
    assignment.flexTrim = false;
    assignment.flexAdjusted = assignment.flexAdjusted || !best.placeholder;
    if (!best.placeholder) sealedAssignments.push(assignment);
    if (!placementsByAllianceId.has(assignment.alliance.id)) placementsByAllianceId.set(assignment.alliance.id, []);
    placementsByAllianceId.get(assignment.alliance.id).push(assignment);
    activePlacements.push(assignment);
    available.splice(best.placementIndex, 1);
    if (best.placeholder) placeholders.splice(best.placeholderIndex, 1);
    openEnemyIds = openEnemyIdsForPlacements(activePlacements, enemyCandidates);
  }

  return sealedAssignments;
}

function sealingAllianceOptions(placement, activeAlliances, laneMeta, placementsByAllianceId, placeholders, requireLane) {
  const order = laneOrderValue(placement);
  const options = [];

  activeAlliances.forEach((alliance) => {
    const meta = laneMeta.find((item) => item.alliance.id === alliance.id);
    const currentCount = placementsByAllianceId.get(alliance.id)?.length || 0;
    const overflow = meta ? laneOverflow(order, meta) : Number.POSITIVE_INFINITY;
    const inLane = meta ? overflow <= flexibleLaneOverflow(meta) : false;
    if (requireLane && !inLane) return;
    if (currentCount >= alliance.count + ALLIANCE_EXTRA_FLEX) return;

    const placeholderIndex = placeholders.findIndex((placeholder) => placeholder.assignment.alliance.id === alliance.id);
    const allianceIndex = state.alliances.findIndex((item) => item.id === alliance.id);
    options.push({
      alliance,
      allianceIndex,
      meta,
      inLane,
      placeholder: placeholderIndex >= 0 ? placeholders[placeholderIndex] : null,
      placeholderIndex,
    });
  });

  return options;
}

function reduceCleanSealedAssignments(currentAssignments) {
  const enemyCandidates = buildPlacementCandidates(0, "enemy");
  const defenseCandidates = buildPlacementCandidates(state.spacing, "defense");
  const enemyByCell = enemyCellIndex(enemyCandidates);
  const requested = requestedTotal();
  const minimumPlaced = Math.max(0, requested - ALLIANCE_TRIM_FLEX);
  const reducedAssignments = [...currentAssignments];
  let activePlacements = reducedAssignments.filter((assignment) => !assignment.shortfall);

  if (openEnemyIdsForPlacements(activePlacements, enemyCandidates).size) return currentAssignments;

  while (activePlacements.length > minimumPlaced) {
    const removalOptions = activePlacements
      .map((assignment) => {
        const others = activePlacements.filter((placement) => placement.id !== assignment.id);
        return {
          assignment,
          penalty: sealedPlanClumpPenalty(assignment, others) + innerCleanlinessWeight(assignment) * 450,
        };
      })
      .sort((a, b) => b.penalty - a.penalty);

    let changed = false;

    for (const { assignment } of removalOptions) {
      const proposal = activePlacements.filter((placement) => placement.id !== assignment.id);
      const openAfterRemoval = openEnemyIdsForPlacements(proposal, enemyCandidates);
      const stored = reducedAssignments.find((item) => item === assignment);
      if (!stored) continue;

      if (!openAfterRemoval.size) {
        markAssignmentAsTrimmed(stored);
        changed = true;
        break;
      }

      const move = findSealingMoveAfterRemoval(proposal, openAfterRemoval, enemyCandidates, enemyByCell, defenseCandidates);
      if (!move) continue;

      markAssignmentAsTrimmed(stored);
      Object.assign(move.assignment, move.placement);
      move.assignment.flexAdjusted = true;
      changed = true;
      break;
    }

    if (!changed) break;
    activePlacements = reducedAssignments.filter((assignment) => !assignment.shortfall);
  }

  return reducedAssignments;
}

function markAssignmentAsTrimmed(assignment) {
  assignment.shortfall = true;
  assignment.flexTrim = true;
  assignment.flexAdjusted = true;
}

function findSealingMoveAfterRemoval(activePlacements, openEnemyIds, enemyCandidates, enemyByCell, defenseCandidates) {
  const movers = [...activePlacements]

    .map((assignment) => {
      const others = activePlacements.filter((placement) => placement.id !== assignment.id);
      return {
        assignment,
        penalty: sealedPlanClumpPenalty(assignment, others) + innerCleanlinessWeight(assignment) * 250,
      };
    })
    .sort((a, b) => b.penalty - a.penalty)
    .slice(0, 18);

  for (const { assignment } of movers) {
    const others = activePlacements.filter((placement) => placement.id !== assignment.id);
    const occupied = new Set(others.flatMap((placement) => placement.cellKeys));
    const contactCounts = contactCountsForPlacements(others);
    const cellIndex = placementCellIndex(others);
    const options = defenseCandidates
      .filter((candidate) => candidate.id !== assignment.id)
      .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
      .filter((candidate) =>
        !wouldExceedContactCluster(candidate, others, MAX_CONTACT_CLUSTER_SIZE, contactCounts, cellIndex)
      )
      .map((candidate) => ({
        candidate,
        blocked: blockedEnemyIdsFor(candidate, enemyByCell, openEnemyIds).size,
      }))
      .filter((option) => option.blocked)
      .sort((a, b) => b.blocked - a.blocked || coverageCandidateScore(a.candidate, others) - coverageCandidateScore(b.candidate, others))
      .slice(0, 70);

    for (const { candidate } of options) {
      const moved = { ...assignment, ...candidate, flexAdjusted: true };
      const proposal = [...others, moved];
      if (openEnemyIdsForPlacements(proposal, enemyCandidates).size) continue;
      if (planLayoutPenalty(proposal) > planLayoutPenalty(activePlacements) + 100000) continue;
      return { assignment, placement: candidate };
    }
  }

  return null;
}

function sleep(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function optimizeActivePlacementsFurther(currentAssignments, { durationMs = 30000, onProgress = () => {} } = {}) {
  const deadline = Date.now() + durationMs;
  let lastYield = 0;
  const yieldIfNeeded = async () => {
    const now = Date.now();
    if (now - lastYield < 140) return;
    lastYield = now;
    onProgress(Math.max(0, Math.ceil((deadline - now) / 1000)));
    await sleep(0);
  };

  onProgress(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
  await sleep(0);

  const enemyCandidates = buildPlacementCandidates(0, "enemy");
  await yieldIfNeeded();
  const defenseCandidates = uniqueCandidates(
    buildPlacementCandidates(FIXED_SPACING, "defense"),
    buildPlacementCandidates(FIXED_SPACING, "outer-defense"),
  );
  await yieldIfNeeded();
  let activePlacements = currentAssignments.filter((assignment) => !assignment.shortfall).map((assignment) => ({ ...assignment }));
  let baselineOpen = countEnemyOpeningsForPlacements(activePlacements, enemyCandidates);
  let baselineEdges = contactEdgeCount(activePlacements);

  for (let pass = 0; pass < 20 && (baselineEdges > 0 || baselineOpen > 0) && Date.now() < deadline; pass += 1) {
    await yieldIfNeeded();
    const focusedSlides = await repairEnemyOpeningsByFocusedSlides(activePlacements, enemyCandidates, defenseCandidates, {
      passes: 3,
      maxMoveDistance: 2,
      deadline,
      yieldIfNeeded,
    });
    const focusedChanged = placementAnchorSignature(focusedSlides) !== placementAnchorSignature(activePlacements);
    const focusedOpen = countEnemyOpeningsForPlacements(focusedSlides, enemyCandidates);
    const focusedEdges = contactEdgeCount(focusedSlides);
    if (focusedOpen < baselineOpen || (focusedOpen === baselineOpen && focusedEdges < baselineEdges) || (focusedChanged && focusedOpen <= baselineOpen)) {
      activePlacements = focusedSlides;
      baselineOpen = focusedOpen;
      baselineEdges = focusedEdges;
      continue;
    }

    const rebuilt = await optimizeByRebuildingContactClusters(
      activePlacements,
      enemyCandidates,
      defenseCandidates,
      baselineOpen,
      baselineEdges,
      deadline,
      yieldIfNeeded,
    );
    if (rebuilt) {
      activePlacements = rebuilt.plan;
      baselineOpen = rebuilt.open;
      baselineEdges = rebuilt.edges;
      continue;
    }

    const slidForSeal = repairEnemyOpeningsBySliding(activePlacements, enemyCandidates, defenseCandidates, {
      passes: 2,
      maxMoveDistance: 5,
    });
    const slidOpen = countEnemyOpeningsForPlacements(slidForSeal, enemyCandidates);
    const slidEdges = contactEdgeCount(slidForSeal);
    if (slidOpen < baselineOpen || (slidOpen === baselineOpen && slidEdges < baselineEdges)) {
      activePlacements = slidForSeal;
      baselineOpen = slidOpen;
      baselineEdges = slidEdges;
      continue;
    }

    const contactCounts = contactCountsForPlacements(activePlacements);
    const contactedPlacements = activePlacements.filter((placement) => (contactCounts.get(placement.id) || 0) > 0);
    const movers = [...activePlacements]
      .filter(
        (placement) =>
          (contactCounts.get(placement.id) || 0) > 0 ||
          contactedPlacements.some((contacted) => hexDistance(placement.anchor, contacted.anchor) <= 10),
      )
      .sort(
        (a, b) =>
          (contactCounts.get(b.id) || 0) - (contactCounts.get(a.id) || 0) ||
          nearestContactedDistance(a, contactedPlacements) - nearestContactedDistance(b, contactedPlacements) ||
          innerCleanlinessWeight(b) - innerCleanlinessWeight(a) ||
          b.innerDistance - a.innerDistance,
      );
    let changed = false;

    for (const target of movers) {
      await yieldIfNeeded();
      const withoutTarget = activePlacements.filter((placement) => placement.id !== target.id);
      const occupied = new Set(withoutTarget.flatMap((placement) => placement.cellKeys));
      const withoutContactCounts = contactCountsForPlacements(withoutTarget);
      const withoutCellIndex = placementCellIndex(withoutTarget);
      const targetContactCount = contactCounts.get(target.id) || 0;
      const currentPenalty = planLayoutPenalty(activePlacements);
      const options = defenseCandidates
        .filter((candidate) => candidate.id !== target.id)
        .filter((candidate) => {
          const blockers = overlappingPlacements(candidate, withoutTarget, withoutCellIndex);
          if (!blockers.length) {
            return !wouldExceedContactCluster(candidate, withoutTarget, MAX_CONTACT_CLUSTER_SIZE, withoutContactCounts, withoutCellIndex);
          }

          return targetContactCount > 0 && isStandaloneDisplacementCandidate(target, blockers, contactCounts);
        })
        .sort((a, b) => optimizeFurtherCandidateScore(a, withoutTarget, target) - optimizeFurtherCandidateScore(b, withoutTarget, target))
        .slice(0, 50);

      for (const candidate of options) {
        if (Date.now() >= deadline) break;
        await yieldIfNeeded();
        const proposal = buildOptimizationProposal(
          target,
          candidate,
          withoutTarget,
          withoutCellIndex,
          contactCounts,
          defenseCandidates,
          enemyCandidates,
          baselineOpen,
          deadline,
        );
        if (!proposal) continue;

        const nextOpen = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
        if (nextOpen > baselineOpen) continue;

        const nextContact = contactClusterStats(proposal);
        if (nextContact.excess) continue;

        const nextEdges = contactEdgeCount(proposal);
        const nextPenalty = planLayoutPenalty(proposal);
        const improvesEdges = nextEdges < baselineEdges;
        const improvesLayout = nextEdges === baselineEdges && nextPenalty < currentPenalty - 5000;
        if (!improvesEdges && !improvesLayout) continue;

        activePlacements = proposal;
        baselineOpen = nextOpen;
        baselineEdges = nextEdges;
        changed = true;
        break;
      }

      if (changed) break;
      if (Date.now() >= deadline) break;
    }

    if (!changed) {
      const lastGaspSlide = repairEnemyOpeningsBySliding(activePlacements, enemyCandidates, defenseCandidates, {
        passes: 2,
        maxMoveDistance: 6,
        maxClusterSize: 3,
      });
      const lastGaspOpen = countEnemyOpeningsForPlacements(lastGaspSlide, enemyCandidates);
      const lastGaspEdges = contactEdgeCount(lastGaspSlide);
      const lastGaspContact = contactClusterStats(lastGaspSlide, 3);
      const normalContact = contactClusterStats(lastGaspSlide, MAX_CONTACT_CLUSTER_SIZE);
      const onlyRareCluster = normalContact.excess <= 1 && lastGaspContact.excess === 0;
      if (onlyRareCluster && (lastGaspOpen < baselineOpen || (lastGaspOpen === baselineOpen && lastGaspEdges < baselineEdges))) {
        activePlacements = lastGaspSlide;
        baselineOpen = lastGaspOpen;
        baselineEdges = lastGaspEdges;
        continue;
      }

      break;
    }
  }

  return activePlacements;
}

async function fillActiveGaps(currentAssignments, { durationMs = 30000, onProgress = () => {} } = {}) {
  const deadline = Date.now() + durationMs;
  let lastYield = 0;
  const yieldIfNeeded = async () => {
    const now = Date.now();
    if (now - lastYield < 80) return;
    lastYield = now;
    onProgress(Math.max(0, Math.ceil((deadline - now) / 1000)));
    await sleep(0);
  };

  const enemyCandidates = buildPlacementCandidates(0, "enemy");
  const slideCandidates = uniqueCandidates(
    buildPlacementCandidates(FIXED_SPACING, "defense"),
    buildPlacementCandidates(FIXED_SPACING, "outer-defense"),
  );
  const gapFillCandidates = uniqueCandidates(slideCandidates, buildPlacementCandidates(0, "enemy"));
  let activePlacements = currentAssignments.filter((assignment) => !assignment.shortfall).map((assignment) => ({ ...assignment }));
  let baselineOpen = countEnemyOpeningsForPlacements(activePlacements, enemyCandidates);

  onProgress(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
  await sleep(0);

  for (let pass = 0; pass < 10 && baselineOpen > 0 && Date.now() < deadline; pass += 1) {
    await yieldIfNeeded();
    let changed = false;
    const strictSlides = await repairEnemyOpeningsByFocusedSlides(activePlacements, enemyCandidates, slideCandidates, {
      passes: 2,
      maxMoveDistance: 2,
      maxGroupSize: 3,
      maxClusterSize: MAX_CONTACT_CLUSTER_SIZE,
      acceptTargetOnly: false,
      requireOpenImprovement: true,
      deadline,
      yieldIfNeeded,
    });
    const strictOpen = countEnemyOpeningsForPlacements(strictSlides, enemyCandidates);
    if (strictOpen < baselineOpen) {
      activePlacements = strictSlides;
      baselineOpen = strictOpen;
      changed = true;
    }

    const looseSlides = await repairEnemyOpeningsByFocusedSlides(activePlacements, enemyCandidates, gapFillCandidates, {
      passes: 2,
      maxMoveDistance: 3,
      maxGroupSize: 3,
      maxClusterSize: 3,
      acceptTargetOnly: true,
      requireOpenImprovement: false,
      deadline,
      yieldIfNeeded,
    });
    const looseChanged = placementAnchorSignature(looseSlides) !== placementAnchorSignature(activePlacements);
    const looseOpen = countEnemyOpeningsForPlacements(looseSlides, enemyCandidates);
    if (looseOpen < baselineOpen || (looseChanged && looseOpen <= baselineOpen)) {
      activePlacements = looseSlides;
      baselineOpen = looseOpen;
      changed = true;
    }

    const gapFilled = await addGapFillPlacements(activePlacements, enemyCandidates, gapFillCandidates, {
      maxAdds: 40,
      maxClusterSize: 3,
      deadline,
      yieldIfNeeded,
    });
    const filledOpen = countEnemyOpeningsForPlacements(gapFilled, enemyCandidates);
    if (filledOpen < baselineOpen || placementAnchorSignature(gapFilled) !== placementAnchorSignature(activePlacements)) {
      activePlacements = gapFilled;
      baselineOpen = filledOpen;
      changed = true;
    }

    if (!changed) break;
  }

  if (baselineOpen > 0) {
    const directSlide = await slideRemainingEnemyGapsDirectly(activePlacements, enemyCandidates, gapFillCandidates, {
      maxClusterSize: 4,
      maxMoveDistance: 2,
      deadline: Math.max(deadline, Date.now() + 6000),
      yieldIfNeeded,
    });
    const directSlideOpen = countEnemyOpeningsForPlacements(directSlide, enemyCandidates);
    if (directSlideOpen <= baselineOpen && placementAnchorSignature(directSlide) !== placementAnchorSignature(activePlacements)) {
      activePlacements = directSlide;
      baselineOpen = directSlideOpen;
    }
  }

  if (baselineOpen > 0) {
    const emergencyDeadline = Math.max(deadline, Date.now() + 6000);
    const clusterSafeFill = await forceFillRemainingEnemyGaps(activePlacements, enemyCandidates, gapFillCandidates, {
      maxClusterSize: 3,
      allowOversizedClusters: false,
      deadline: emergencyDeadline,
      yieldIfNeeded,
    });
    const clusterSafeOpen = countEnemyOpeningsForPlacements(clusterSafeFill, enemyCandidates);
    if (clusterSafeOpen < baselineOpen) {
      activePlacements = clusterSafeFill;
      baselineOpen = clusterSafeOpen;
    }
  }

  if (baselineOpen > 0) {
    const cappedFill = await forceFillRemainingEnemyGaps(activePlacements, enemyCandidates, gapFillCandidates, {
      maxClusterSize: 4,
      allowOversizedClusters: false,
      deadline: Math.max(deadline, Date.now() + 6000),
      yieldIfNeeded,
    });
    const cappedOpen = countEnemyOpeningsForPlacements(cappedFill, enemyCandidates);
    if (cappedOpen < baselineOpen) {
      activePlacements = cappedFill;
      baselineOpen = cappedOpen;
    }
  }

  if (baselineOpen > 0) {
    activePlacements = await forceFillRemainingEnemyGaps(activePlacements, enemyCandidates, gapFillCandidates, {
      maxClusterSize: 4,
      allowOversizedClusters: true,
      deadline: Math.max(deadline, Date.now() + 6000),
      yieldIfNeeded,
    });
  }

  activePlacements = await polishFilledGapClusters(activePlacements, enemyCandidates, gapFillCandidates, {
    softClusterSize: 3,
    hardClusterSize: 4,
    deadline: Math.max(deadline, Date.now() + 8000),
    yieldIfNeeded,
  });

  return activePlacements;
}

async function polishFilledGapClusters(
  plan,
  enemyCandidates,
  defenseCandidates,
  {
    softClusterSize = 3,
    hardClusterSize = 4,
    deadline = Number.POSITIVE_INFINITY,
    yieldIfNeeded = async () => {},
  } = {},
) {
  let polished = [...plan];
  if (countEnemyOpeningsForPlacements(polished, enemyCandidates) > 0) return polished;
  const defenseById = new Map(defenseCandidates.map((candidate) => [candidate.id, candidate]));

  for (let pass = 0; pass < 10 && Date.now() < deadline; pass += 1) {
    await yieldIfNeeded();
    const clusters = contactClusters(polished)
      .filter((cluster) => cluster.members.length > 1)
      .sort(
        (a, b) =>
          Number(b.members.length > softClusterSize) - Number(a.members.length > softClusterSize) ||
          b.members.length - a.members.length ||
          b.edgeCount - a.edgeCount,
      );
    if (!clusters.length) break;

    const currentScore = clusterPolishScore(polished, enemyCandidates, softClusterSize, hardClusterSize);
    let best = null;

    for (const cluster of clusters) {
      await yieldIfNeeded();
      const polishedContactCounts = contactCountsForPlacements(polished);
      const members = [...cluster.members].sort(
        (a, b) =>
          Number(Boolean(b.gapFill || b.emergencyGapFill || b.directEnemyBlocker)) -
            Number(Boolean(a.gapFill || a.emergencyGapFill || a.directEnemyBlocker)) ||
          (polishedContactCounts.get(b.id) || 0) - (polishedContactCounts.get(a.id) || 0),
      );

      for (const target of members) {
        if (Date.now() >= deadline) break;
        await yieldIfNeeded();

        const withoutTarget = polished.filter((placement) => placement.id !== target.id);
        const removal = scoreClusterPolishProposal(withoutTarget, enemyCandidates, softClusterSize, hardClusterSize);
        if (removal && removal.score < currentScore && (!best || removal.score < best.score)) {
          best = { proposal: withoutTarget, score: removal.score };
        }

        const occupied = new Set(withoutTarget.flatMap((placement) => placement.cellKeys));
        const contactCounts = contactCountsForPlacements(withoutTarget);
        const cellIndex = placementCellIndex(withoutTarget);
        const localCandidates = nearbyCandidateAnchors(target.anchor, 4)
          .map((anchor) => defenseById.get(pointKey(anchor)))
          .filter(Boolean);
        const options = localCandidates
          .filter((candidate) => candidate.id !== target.id)
          .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
          .filter((candidate) => !wouldExceedContactCluster(candidate, withoutTarget, hardClusterSize, contactCounts, cellIndex))
          .sort(
            (a, b) =>
              touchedPlacements(a, withoutTarget, cellIndex).length - touchedPlacements(b, withoutTarget, cellIndex).length ||
              hexDistance(a.anchor, target.anchor) - hexDistance(b.anchor, target.anchor) ||
              contactEdgeCount([...withoutTarget, a]) - contactEdgeCount([...withoutTarget, b]) ||
              coverageCandidateScore(a, withoutTarget) - coverageCandidateScore(b, withoutTarget),
          )
          .slice(0, 45);

        for (const candidate of options) {
          await yieldIfNeeded();
          let proposal = [...withoutTarget, { ...target, ...candidate, flexAdjusted: true, clusterPolish: true }];
          proposal = await pruneRedundantSealedPlacements(proposal, enemyCandidates, hardClusterSize, yieldIfNeeded);
          const scored = scoreClusterPolishProposal(proposal, enemyCandidates, softClusterSize, hardClusterSize);
          if (!scored || scored.score >= currentScore) continue;
          if (!best || scored.score < best.score) best = { proposal, score: scored.score };
        }
      }
    }

    if (!best) break;
    polished = best.proposal;
  }

  return polished;
}

async function pruneRedundantSealedPlacements(
  placements,
  enemyCandidates,
  hardClusterSize = 4,
  yieldIfNeeded = async () => {},
) {
  let pruned = [...placements];
  let changed = true;

  for (let pass = 0; changed && pass < 8; pass += 1) {
    await yieldIfNeeded();
    changed = false;
    const contactCounts = contactCountsForPlacements(pruned);
    const removalOrder = [...pruned].sort(
      (a, b) =>
        Number(Boolean(b.gapFill || b.emergencyGapFill || b.directEnemyBlocker || b.clusterPolish)) -
          Number(Boolean(a.gapFill || a.emergencyGapFill || a.directEnemyBlocker || a.clusterPolish)) ||
        (contactCounts.get(b.id) || 0) - (contactCounts.get(a.id) || 0),
    );

    for (const placement of removalOrder) {
      await yieldIfNeeded();
      const proposal = pruned.filter((item) => item.id !== placement.id);
      if (countEnemyOpeningsForPlacements(proposal, enemyCandidates) > 0) continue;
      if (contactClusterStats(proposal, hardClusterSize).excess > 0) continue;
      pruned = proposal;
      changed = true;
      break;
    }
  }

  return pruned;
}

async function slideRemainingEnemyGapsDirectly(
  plan,
  enemyCandidates,
  defenseCandidates,
  {
    maxClusterSize = 4,
    maxMoveDistance = 2,
    deadline = Number.POSITIVE_INFINITY,
    yieldIfNeeded = async () => {},
  } = {},
) {
  let repaired = [...plan];
  let baselineOpen = countEnemyOpeningsForPlacements(repaired, enemyCandidates);
  const candidatesById = new Map(defenseCandidates.map((candidate) => [candidate.id, candidate]));

  for (let pass = 0; pass < 8 && baselineOpen > 0 && Date.now() < deadline; pass += 1) {
    await yieldIfNeeded();
    const visibleEnemyPack = enemyPlacementPackForPlacements(repaired, enemyCandidates);
    let best = null;

    for (const enemy of visibleEnemyPack) {
      await yieldIfNeeded();
      const enemyCellKeys = new Set(enemy.cellKeys);
      const repairedContactCounts = contactCountsForPlacements(repaired);
      const movers = repaired
        .map((placement) => ({
          placement,
          distance: nearestDistanceToGroup(placement, [enemy]),
          contactCount: repairedContactCounts.get(placement.id) || 0,
        }))
        .filter(({ distance }) => distance <= 8)
        .sort((a, b) => a.distance - b.distance || b.contactCount - a.contactCount)
        .slice(0, 24);

      for (const { placement } of movers) {
        await yieldIfNeeded();
        const withoutPlacement = repaired.filter((item) => item.id !== placement.id);
        const occupied = new Set(withoutPlacement.flatMap((item) => item.cellKeys));
        const contactCounts = contactCountsForPlacements(withoutPlacement);
        const cellIndex = placementCellIndex(withoutPlacement);
        const options = nearbyCandidateAnchors(placement.anchor, maxMoveDistance)
          .map((anchor) => candidatesById.get(pointKey(anchor)))
          .filter(Boolean)
          .filter((candidate) => candidate.id !== placement.id)
          .filter((candidate) => candidate.cellKeys.some((key) => enemyCellKeys.has(key)))
          .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
          .filter((candidate) => !wouldExceedContactCluster(candidate, withoutPlacement, maxClusterSize, contactCounts, cellIndex));

        for (const candidate of options) {
          await yieldIfNeeded();
          const proposal = [...withoutPlacement, { ...placement, ...candidate, flexAdjusted: true, directGapSlide: true }];
          if (!isEnemyCandidateBlocked(enemy, proposal)) continue;
          const nextOpen = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
          if (nextOpen > baselineOpen) continue;
          const score =
            nextOpen * 10000000 +
            contactClusterStats(proposal, maxClusterSize).largest * 500000 +
            contactEdgeCount(proposal) * 100000 +
            hexDistance(candidate.anchor, placement.anchor) * 1000 +
            planLayoutPenalty(proposal);
          if (!best || score < best.score) best = { proposal, nextOpen, score };
        }
      }
    }

    if (!best) break;
    repaired = best.proposal;
    baselineOpen = best.nextOpen;
  }

  return repaired;
}

function nearbyCandidateAnchors(anchor, maxDistance) {
  const anchors = [];

  for (let y = anchor.y - maxDistance; y <= anchor.y + maxDistance; y += 1) {
    for (let x = anchor.x - maxDistance; x <= anchor.x + maxDistance; x += 1) {
      const candidate = { x, y };
      if (hexDistance(anchor, candidate) <= maxDistance) anchors.push(candidate);
    }
  }

  return anchors;
}

function scoreClusterPolishProposal(proposal, enemyCandidates, softClusterSize, hardClusterSize) {
  if (countEnemyOpeningsForPlacements(proposal, enemyCandidates) > 0) return null;
  return {
    score: clusterPolishScore(proposal, enemyCandidates, softClusterSize, hardClusterSize),
  };
}

function clusterPolishScore(placements, enemyCandidates, softClusterSize, hardClusterSize) {
  const softStats = contactClusterStats(placements, softClusterSize);
  const hardStats = contactClusterStats(placements, hardClusterSize);
  return (
    countEnemyOpeningsForPlacements(placements, enemyCandidates) * 100000000 +
    hardStats.excess * 50000000 +
    Math.max(0, hardStats.largest - hardClusterSize) * 12000000 +
    softStats.excess * 2500000 +
    softStats.largest * 260000 +
    contactEdgeCount(placements) * 120000 +
    placements.length * 45000 +
    planLayoutPenalty(placements)
  );
}

async function forceFillRemainingEnemyGaps(
  plan,
  enemyCandidates,
  defenseCandidates,
  {
    maxClusterSize = 3,
    allowOversizedClusters = false,
    deadline = Number.POSITIVE_INFINITY,
    yieldIfNeeded = async () => {},
  } = {},
) {
  let filled = [...plan];

  for (let added = 0; added < 80 && countEnemyOpeningsForPlacements(filled, enemyCandidates) > 0 && Date.now() < deadline; added += 1) {
    await yieldIfNeeded();
    const visibleEnemyPack = enemyPlacementPackForPlacements(filled, enemyCandidates);
    const occupied = new Set(filled.flatMap((placement) => placement.cellKeys));
    let best = null;

    for (const enemy of visibleEnemyPack) {
      await yieldIfNeeded();
      if (enemy.cellKeys.some((key) => occupied.has(key))) continue;

      let proposal = [...filled, { ...enemy, flexAdjusted: true, gapFill: true, emergencyGapFill: true }];
      let contact = contactClusterStats(proposal, maxClusterSize);

      if (contact.excess && !allowOversizedClusters) {
        proposal = await reduceContactClustersBySliding(proposal, enemyCandidates, defenseCandidates, {
          maxClusterSize,
          maxMoveDistance: 4,
          deadline,
          yieldIfNeeded,
        });
        contact = contactClusterStats(proposal, maxClusterSize);
        if (contact.excess) continue;
      }

      const open = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
      const score = open * 10000000 + contact.excess * 5000000 + contactEdgeCount(proposal) * 100000 + planLayoutPenalty(proposal);
      if (!best || score < best.score) best = { proposal, score };
    }

    if (!best) break;
    filled = best.proposal;
  }

  return filled;
}

async function addGapFillPlacements(
  plan,
  enemyCandidates,
  defenseCandidates,
  { maxAdds = 40, maxClusterSize = 3, deadline = Number.POSITIVE_INFINITY, yieldIfNeeded = async () => {} } = {},
) {
  let filled = [...plan];
  let baselineOpen = countEnemyOpeningsForPlacements(filled, enemyCandidates);
  const enemyByCell = enemyCellIndex(enemyCandidates);

  for (let added = 0; added < maxAdds && baselineOpen > 0 && Date.now() < deadline; added += 1) {
    await yieldIfNeeded();
    const visibleEnemyPack = enemyPlacementPackForPlacements(filled, enemyCandidates);
    const visibleEnemyIds = new Set(visibleEnemyPack.map((enemy) => enemy.id));
    const visibleEnemyCells = new Set(visibleEnemyPack.flatMap((enemy) => enemy.cellKeys));
    const occupied = new Set(filled.flatMap((placement) => placement.cellKeys));
    const contactCounts = contactCountsForPlacements(filled);
    const cellIndex = placementCellIndex(filled);
    const directBlocker = await findDirectEnemyBlockerPlacement(filled, visibleEnemyPack, enemyCandidates, defenseCandidates, {
      maxClusterSize,
      deadline,
      yieldIfNeeded,
    });
    if (directBlocker) {
      filled = directBlocker;
      baselineOpen = countEnemyOpeningsForPlacements(filled, enemyCandidates);
      continue;
    }

    const options = defenseCandidates
      .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
      .map((candidate) => ({
        candidate,
        visibleCells: candidate.cellKeys.filter((key) => visibleEnemyCells.has(key)).length,
        blockedVisible: blockedEnemyIdsFor(candidate, enemyByCell, visibleEnemyIds).size,
        touchCount: touchedPlacements(candidate, filled, cellIndex).length,
      }))
      .filter((option) => option.visibleCells || option.blockedVisible)
      .sort(
        (a, b) =>
          b.blockedVisible - a.blockedVisible ||
          b.visibleCells - a.visibleCells ||
          a.touchCount - b.touchCount ||
          coverageCandidateScore(a.candidate, filled) - coverageCandidateScore(b.candidate, filled),
      )
      .slice(0, 80);

    let best = null;

    for (const { candidate, blockedVisible, visibleCells, touchCount } of options) {
      if (Date.now() >= deadline) break;
      await yieldIfNeeded();
      let proposal = [...filled, { ...candidate, flexAdjusted: true, gapFill: true }];
      let contact = contactClusterStats(proposal, maxClusterSize);
      if (contact.excess) {
        proposal = await reduceContactClustersBySliding(proposal, enemyCandidates, defenseCandidates, {
          maxClusterSize,
          maxMoveDistance: 4,
          deadline,
          yieldIfNeeded,
        });
        contact = contactClusterStats(proposal, maxClusterSize);
        if (contact.excess) continue;
      }

      const nextOpen = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
      const blocksVisibleGap = blockedVisible > 0 && nextOpen <= baselineOpen;
      if (nextOpen >= baselineOpen && !blocksVisibleGap) continue;

      const score =
        nextOpen * 10000000 +
        contactEdgeCount(proposal) * 100000 -
        blockedVisible * 900000 -
        visibleCells * 25000 +
        touchCount * 15000 +
        planLayoutPenalty(proposal);
      if (!best || score < best.score) best = { proposal, nextOpen, score };
    }

    if (!best) break;
    filled = best.proposal;
    baselineOpen = Math.min(baselineOpen, best.nextOpen);

    filled = await repairEnemyOpeningsByFocusedSlides(filled, enemyCandidates, defenseCandidates, {
      passes: 2,
      maxMoveDistance: 3,
      maxGroupSize: 3,
      maxClusterSize,
      acceptTargetOnly: true,
      deadline,
      yieldIfNeeded,
    });
    baselineOpen = countEnemyOpeningsForPlacements(filled, enemyCandidates);
  }

  return filled;
}

async function findDirectEnemyBlockerPlacement(
  filled,
  visibleEnemyPack,
  enemyCandidates,
  defenseCandidates,
  { maxClusterSize, deadline, yieldIfNeeded },
) {
  const occupied = new Set(filled.flatMap((placement) => placement.cellKeys));
  let best = null;

  for (const enemy of visibleEnemyPack) {
    if (Date.now() >= deadline) break;
    await yieldIfNeeded();
    if (enemy.cellKeys.some((key) => occupied.has(key))) continue;

    let proposal = [...filled, { ...enemy, flexAdjusted: true, gapFill: true, directEnemyBlocker: true }];
    let contact = contactClusterStats(proposal, maxClusterSize);
    if (contact.excess) {
      proposal = await reduceContactClustersBySliding(proposal, enemyCandidates, defenseCandidates, {
        maxClusterSize,
        maxMoveDistance: 4,
        deadline,
        yieldIfNeeded,
      });
      contact = contactClusterStats(proposal, maxClusterSize);
      if (contact.excess) continue;
    }

    const nextOpen = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
    const score =
      nextOpen * 10000000 +
      contactEdgeCount(proposal) * 100000 +
      planLayoutPenalty(proposal) -
      enemy.cellKeys.length * 25000;
    if (!best || score < best.score) best = { proposal, score };
  }

  return best?.proposal || null;
}

async function reduceContactClustersBySliding(
  plan,
  enemyCandidates,
  defenseCandidates,
  { maxClusterSize = 3, maxMoveDistance = 4, deadline = Number.POSITIVE_INFINITY, yieldIfNeeded = async () => {} } = {},
) {
  let repaired = [...plan];
  let baselineOpen = countEnemyOpeningsForPlacements(repaired, enemyCandidates);
  const candidatesById = new Map(defenseCandidates.map((candidate) => [candidate.id, candidate]));

  for (let pass = 0; pass < 4 && Date.now() < deadline; pass += 1) {
    await yieldIfNeeded();
    const oversized = contactClusters(repaired).filter((cluster) => cluster.members.length > maxClusterSize);
    if (!oversized.length) break;

    let changed = false;
    for (const cluster of oversized) {
      if (Date.now() >= deadline) break;
      await yieldIfNeeded();

      const repairedContactCounts = contactCountsForPlacements(repaired);
      const movers = [...cluster.members].sort(
        (a, b) =>
          Number(Boolean(b.gapFill || b.directEnemyBlocker)) - Number(Boolean(a.gapFill || a.directEnemyBlocker)) ||
          (repairedContactCounts.get(b.id) || 0) - (repairedContactCounts.get(a.id) || 0),
      );

      for (const target of movers) {
        await yieldIfNeeded();
        const withoutTarget = repaired.filter((placement) => placement.id !== target.id);
        const occupied = new Set(withoutTarget.flatMap((placement) => placement.cellKeys));
        const contactCounts = contactCountsForPlacements(withoutTarget);
        const cellIndex = placementCellIndex(withoutTarget);
        const options = nearbyCandidateAnchors(target.anchor, maxMoveDistance)
          .map((anchor) => candidatesById.get(pointKey(anchor)))
          .filter(Boolean)
          .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
          .filter((candidate) => !wouldExceedContactCluster(candidate, withoutTarget, maxClusterSize, contactCounts, cellIndex))
          .map((candidate) => {
            const proposal = [...withoutTarget, { ...target, ...candidate }];
            return {
              candidate,
              open: countEnemyOpeningsForPlacements(proposal, enemyCandidates),
              distance: hexDistance(candidate.anchor, target.anchor),
              coverage: coverageCandidateScore(candidate, withoutTarget),
            };
          })
          .sort((a, b) => a.open - b.open || a.distance - b.distance || a.coverage - b.coverage)
          .slice(0, 24);

        for (const { candidate } of options) {
          await yieldIfNeeded();
          const proposal = [...withoutTarget, { ...target, ...candidate, flexAdjusted: true, clusterRelief: true }];
          const contact = contactClusterStats(proposal, maxClusterSize);
          if (contact.excess) continue;
          const nextOpen = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
          if (nextOpen > baselineOpen) continue;

          repaired = proposal;
          baselineOpen = nextOpen;
          changed = true;
          break;
        }

        if (changed) break;
      }

      if (changed) break;
    }

    if (!changed) break;
  }

  return repaired;
}

function nearestContactedDistance(placement, contactedPlacements) {
  if (!contactedPlacements.length) return Number.POSITIVE_INFINITY;
  return contactedPlacements.reduce(
    (closest, contacted) => Math.min(closest, hexDistance(placement.anchor, contacted.anchor)),
    Number.POSITIVE_INFINITY,
  );
}

async function optimizeByRebuildingContactClusters(
  activePlacements,
  enemyCandidates,
  defenseCandidates,
  baselineOpen,
  baselineEdges,
  deadline,
  yieldIfNeeded,
) {
  const clusters = contactClusters(activePlacements);

  for (const cluster of clusters) {
    if (Date.now() >= deadline) break;
    await yieldIfNeeded();

    const clusterIds = new Set(cluster.members.map((placement) => placement.id));
    const basePlan = activePlacements.filter((placement) => !clusterIds.has(placement.id));
    const baseOpen = countEnemyOpeningsForPlacements(basePlan, enemyCandidates);
    const baseEdges = contactEdgeCount(basePlan);

    if (baseOpen <= baselineOpen && baseEdges < baselineEdges) {
      return { plan: basePlan, open: baseOpen, edges: baseEdges };
    }

    const rebuilt = await rebuildRemovedCluster(
      basePlan,
      cluster,
      enemyCandidates,
      defenseCandidates,
      baselineOpen,
      baselineEdges,
      deadline,
      yieldIfNeeded,
    );
    if (rebuilt) return rebuilt;
  }

  return null;
}

async function rebuildRemovedCluster(
  basePlan,
  cluster,
  enemyCandidates,
  defenseCandidates,
  baselineOpen,
  baselineEdges,
  deadline,
  yieldIfNeeded,
) {
  let plan = [...basePlan];
  let openIds = openEnemyIdsForPlacements(plan, enemyCandidates);
  let openCount = countEnemyOpeningsForPlacements(plan, enemyCandidates);
  const maxAdds = cluster.members.length;
  const enemyByCell = enemyCellIndex(enemyCandidates);

  for (let added = 0; added < maxAdds && openCount > baselineOpen && Date.now() < deadline; added += 1) {
    await yieldIfNeeded();
    const occupied = new Set(plan.flatMap((placement) => placement.cellKeys));
    const contactCounts = contactCountsForPlacements(plan);
    const cellIndex = placementCellIndex(plan);
    const options = defenseCandidates
      .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
      .filter((candidate) =>
        !wouldExceedContactCluster(candidate, plan, MAX_CONTACT_CLUSTER_SIZE, contactCounts, cellIndex)
      )
      .map((candidate) => ({
        candidate,
        blocked: blockedEnemyIdsFor(candidate, enemyByCell, openIds).size,
        touches: touchedPlacements(candidate, plan, cellIndex).length,
        distance: distanceToCluster(candidate, cluster),
      }))
      .filter((option) => option.blocked)
      .filter((option) => option.distance <= 18 || option.blocked >= 5)
      .sort((a, b) => clusterRepairScore(a, plan, cluster) - clusterRepairScore(b, plan, cluster))
      .slice(0, 90);

    let bestPlan = null;
    let bestOpenIds = null;
    let bestOpenCount = Number.POSITIVE_INFINITY;
    let bestScore = Number.POSITIVE_INFINITY;

    for (const { candidate } of options) {
      if (Date.now() >= deadline) break;
      const proposal = [...plan, { ...candidate, flexAdjusted: true, clusterRebuild: true }];
      const nextOpenIds = openEnemyIdsForPlacements(proposal, enemyCandidates);
      const nextOpenCount = countEnemyOpeningsForPlacements(proposal, enemyCandidates);
      const nextContact = contactClusterStats(proposal);
      if (nextContact.excess) continue;

      const nextEdges = contactEdgeCount(proposal);
      const score = nextOpenCount * 1000000 + nextOpenIds.size * 1800 + nextEdges * 50000 + planLayoutPenalty(proposal);
      if (score < bestScore) {
        bestPlan = proposal;
        bestOpenIds = nextOpenIds;
        bestOpenCount = nextOpenCount;
        bestScore = score;
      }
    }

    if (!bestPlan) break;
    plan = bestPlan;
    openIds = bestOpenIds;
    openCount = bestOpenCount;
  }

  const finalOpen = openCount;
  if (finalOpen > baselineOpen) return null;

  const finalContact = contactClusterStats(plan);
  if (finalContact.excess) return null;

  const finalEdges = contactEdgeCount(plan);
  const removedCount = cluster.members.length;
  const addedCount = plan.length - basePlan.length;
  const reducedEdges = finalEdges < baselineEdges;
  const reducedCount = addedCount < removedCount && finalEdges <= baselineEdges;
  const cleanerLayout = finalEdges === baselineEdges && planLayoutPenalty(plan) < planLayoutPenalty([...basePlan, ...cluster.members]) - 5000;

  if (!reducedEdges && !reducedCount && !cleanerLayout) return null;
  return { plan, open: finalOpen, edges: finalEdges };
}

function distanceToCluster(candidate, cluster) {
  return cluster.members.reduce(
    (closest, placement) => Math.min(closest, hexDistance(candidate.anchor, placement.anchor)),
    Number.POSITIVE_INFINITY,
  );
}

function clusterRepairScore(option, plan, cluster) {
  return (
    -option.blocked * 9000000 +
    option.touches * 1200000 +
    option.distance * 2400 +
    favorablePlacementScore(option.candidate) * 150 +
    coverageCandidateScore(option.candidate, plan) +
    Math.abs(option.candidate.innerDistance - cluster.members[0].innerDistance) * 30
  );
}

function isStandaloneDisplacementCandidate(target, blockers, contactCounts) {
  return (
    blockers.length === 1 &&
    (contactCounts.get(blockers[0].id) || 0) === 0 &&
    hexDistance(target.anchor, blockers[0].anchor) <= 10
  );
}

function buildOptimizationProposal(
  target,
  candidate,
  withoutTarget,
  withoutCellIndex,
  contactCounts,
  defenseCandidates,
  enemyCandidates,
  baselineOpen,
  deadline,
) {
  const blockers = overlappingPlacements(candidate, withoutTarget, withoutCellIndex);

  if (!blockers.length) {
    return [...withoutTarget, { ...target, ...candidate, flexAdjusted: true }];
  }

  if (!isStandaloneDisplacementCandidate(target, blockers, contactCounts)) return null;

  const [blocker] = blockers;
  const withoutTargetAndBlocker = withoutTarget.filter((placement) => placement.id !== blocker.id);
  const movedTarget = { ...target, ...candidate, flexAdjusted: true };
  const targetContactCounts = contactCountsForPlacements(withoutTargetAndBlocker);
  const targetCellIndex = placementCellIndex(withoutTargetAndBlocker);
  if (wouldExceedContactCluster(movedTarget, withoutTargetAndBlocker, MAX_CONTACT_CLUSTER_SIZE, targetContactCounts, targetCellIndex)) {
    return null;
  }

  const relocatedBlocker = findStandaloneRelocation(
    blocker,
    [...withoutTargetAndBlocker, movedTarget],
    defenseCandidates,
    enemyCandidates,
    baselineOpen,
    deadline,
  );
  if (!relocatedBlocker) return null;

  return [...withoutTargetAndBlocker, movedTarget, relocatedBlocker];
}

function findStandaloneRelocation(blocker, fixedPlacements, defenseCandidates, enemyCandidates, baselineOpen, deadline) {
  const occupied = new Set(fixedPlacements.flatMap((placement) => placement.cellKeys));
  const contactCounts = contactCountsForPlacements(fixedPlacements);
  const cellIndex = placementCellIndex(fixedPlacements);
  const options = defenseCandidates
    .filter((candidate) => candidate.id !== blocker.id)
    .filter((candidate) => !candidate.cellKeys.some((key) => occupied.has(key)))
    .filter((candidate) =>
      !wouldExceedContactCluster(candidate, fixedPlacements, MAX_CONTACT_CLUSTER_SIZE, contactCounts, cellIndex)
    )
    .sort(
      (a, b) =>
        touchedPlacements(a, fixedPlacements, cellIndex).length - touchedPlacements(b, fixedPlacements, cellIndex).length ||
        favorablePlacementScore(a) - favorablePlacementScore(b) ||
        hexDistance(a.anchor, blocker.anchor) - hexDistance(b.anchor, blocker.anchor) ||
        coverageCandidateScore(a, fixedPlacements) - coverageCandidateScore(b, fixedPlacements),
    )
    .slice(0, 35);

  for (const candidate of options) {
    if (Date.now() >= deadline) break;
    const movedBlocker = { ...blocker, ...candidate, flexAdjusted: true };
    const proposal = [...fixedPlacements, movedBlocker];
    if (countEnemyOpeningsForPlacements(proposal, enemyCandidates) <= baselineOpen) return movedBlocker;
  }

  return null;
}

function optimizeFurtherCandidateScore(candidate, currentPlacements, target) {
  return (
    touchedPlacements(candidate, currentPlacements).length * 900000 +
    contactEdgeCount([...currentPlacements, candidate]) * 55000 +
    hexDistance(candidate.anchor, target.anchor) * 500 +
    coverageCandidateScore(candidate, currentPlacements) +
    favorablePlacementScore(candidate) * 80
  );
}

function rebalanceAllianceOwnership(currentAssignments) {
  const activePlacements = currentAssignments.filter((assignment) => !assignment.shortfall);
  const activeAlliances = state.alliances.filter((alliance) => alliance.count > 0);
  if (!activePlacements.length || !activeAlliances.length) return currentAssignments;

  const targets = flexibleAllianceTargets(activeAlliances, activePlacements.length);
  const placementsByAlliance = assignStrategicAllianceGroups(activeAlliances, activePlacements, targets);

  const balanced = [];

  state.alliances.forEach((alliance, allianceIndex) => {
    const filledTarget = targets.get(alliance.id) || 0;
    const color = ALLIANCE_COLORS[allianceIndex % ALLIANCE_COLORS.length];
    const placements = (placementsByAlliance.get(alliance.id) || [])
      .sort((a, b) => (isPlacementBefore(a, b) ? -1 : isPlacementBefore(b, a) ? 1 : 0));

    placements.forEach((placement, index) => {
      balanced.push({
        ...placement,
        alliance,
        allianceIndex,
        color,
        number: index + 1,
        shortfall: false,
        flexAdjusted: placement.flexAdjusted || filledTarget !== alliance.count,
        flexTrim: false,
      });
    });

    for (let index = placements.length; index < alliance.count; index += 1) {
      balanced.push({
        alliance,
        allianceIndex,
        color,
        shortfall: true,
        flexTrim: true,
        flexAdjusted: true,
        number: index + 1,
      });
    }
  });

  return balanced;
}

function assignStrategicAllianceGroups(activeAlliances, activePlacements, targets) {
  const available = [...activePlacements];
  const placementsByAlliance = new Map();

  activeAlliances.forEach((alliance, allianceIndex) => {
    const target = targets.get(alliance.id) || 0;
    const picked = [];
    const anchor = strategicGroupStartForAlliance(allianceIndex, activeAlliances.length);

    while (picked.length < target && available.length) {
      const best = removeBestPlacement(available, (candidate) =>
        strategicGroupScore(candidate, picked, anchor, allianceIndex, activeAlliances.length),
      );
      if (!best) break;
      picked.push(best);
    }

    placementsByAlliance.set(alliance.id, picked);
  });

  const mergedGroups = mergeDetachedAllianceComponents(placementsByAlliance, activeAlliances);
  const priorityGroups = rebalancePriorityPlacementCounts(mergedGroups, activeAlliances, targets);
  return mergeDetachedAllianceComponents(priorityGroups, activeAlliances);
}

function rebalancePriorityPlacementCounts(placementsByAlliance, activeAlliances, targets) {
  const groups = activeAlliances.map((alliance, index) => ({
    originalIndex: index,
    placements: placementsByAlliance.get(alliance.id) || [],
  }));
  if (groups.length < 2 || groups.length > 8) return placementsByAlliance;

  let best = null;
  for (const order of permutations(groups)) {
    const score = groupOwnershipScore(order, activeAlliances, targets);
    if (!best || score < best.score) best = { order, score };
  }

  if (!best) return placementsByAlliance;

  const reassigned = new Map();
  activeAlliances.forEach((alliance, index) => {
    reassigned.set(alliance.id, best.order[index].placements);
  });
  return reassigned;
}

function groupOwnershipScore(groupOrder, activeAlliances, targets) {
  let score = 0;

  groupOrder.forEach((group, index) => {
    const alliance = activeAlliances[index];
    const count = group.placements.length;
    const target = targets.get(alliance.id) || 0;
    const request = alliance.count;
    score += Math.abs(count - target) * 25000;
    score += Math.max(0, request - count) * Math.max(1, request) * 1200;
    score += Math.max(0, count - request) * 1800;
    score += Math.abs(group.originalIndex - index) * 75;
  });

  for (let left = 0; left < activeAlliances.length; left += 1) {
    for (let right = 0; right < activeAlliances.length; right += 1) {
      if (left === right || activeAlliances[left].count <= activeAlliances[right].count) continue;
      const leftCount = groupOrder[left].placements.length;
      const rightCount = groupOrder[right].placements.length;
      if (leftCount < rightCount) score += (rightCount - leftCount) * 10000000;
    }
  }

  return score;
}

function permutations(items) {
  if (items.length <= 1) return [items];
  const result = [];

  items.forEach((item, index) => {
    const rest = [...items.slice(0, index), ...items.slice(index + 1)];
    permutations(rest).forEach((permutation) => result.push([item, ...permutation]));
  });

  return result;
}

function mergeDetachedAllianceComponents(placementsByAlliance, activeAlliances) {
  for (let pass = 0; pass < 4; pass += 1) {
    let moved = false;

    activeAlliances.forEach((alliance) => {
      const placements = placementsByAlliance.get(alliance.id) || [];
      const components = alliancePlacementComponents(placements);
      if (components.length <= 1) return;

      const keep = components[0];
      placementsByAlliance.set(alliance.id, keep);

      components.slice(1).forEach((component) => {
        const targetAlliance = nearestAllianceGroupForComponent(component, activeAlliances, placementsByAlliance, alliance.id);
        if (!targetAlliance) {
          keep.push(...component);
          return;
        }

        placementsByAlliance.get(targetAlliance.id).push(...component);
        moved = true;
      });
    });

    if (!moved) break;
  }

  return placementsByAlliance;
}

function trySwapDetachedPlacement(detachedPlacement, sourceAlliance, activeAlliances, placementsByAlliance) {
  const sourceGroup = placementsByAlliance.get(sourceAlliance.id) || [];
  if (!sourceGroup.length) return false;

  const sourceAnchorDistance = nearestDistanceToGroup(detachedPlacement, sourceGroup);
  let bestSwap = null;

  activeAlliances.forEach((targetAlliance) => {
    if (targetAlliance.id === sourceAlliance.id) return;
    const targetGroup = placementsByAlliance.get(targetAlliance.id) || [];
    if (!targetGroup.length) return;

    const detachedToTarget = nearestDistanceToGroup(detachedPlacement, targetGroup);
    if (detachedToTarget >= sourceAnchorDistance) return;

    targetGroup.forEach((targetPlacement) => {
      const targetToSource = nearestDistanceToGroup(targetPlacement, sourceGroup);
      const targetToOwn = nearestDistanceToGroup(
        targetPlacement,
        targetGroup.filter((placement) => placement.id !== targetPlacement.id),
      );
      if (targetToSource >= targetToOwn) return;

      const before = sourceAnchorDistance + targetToOwn;
      const after = detachedToTarget + targetToSource;
      if (after >= before) return;

      const score = after - before;
      if (!bestSwap || score < bestSwap.score) {
        bestSwap = { targetAlliance, targetPlacement, score };
      }
    });
  });

  if (!bestSwap) return false;

  const targetGroup = placementsByAlliance.get(bestSwap.targetAlliance.id);
  placementsByAlliance.set(
    bestSwap.targetAlliance.id,
    targetGroup.filter((placement) => placement.id !== bestSwap.targetPlacement.id).concat(detachedPlacement),
  );
  sourceGroup.push(bestSwap.targetPlacement);
  return true;
}

function nearestDistanceToGroup(placement, group) {
  if (!group.length) return Number.POSITIVE_INFINITY;
  return group.reduce(
    (closest, other) => Math.min(closest, hexDistance(placement.anchor, other.anchor)),
    Number.POSITIVE_INFINITY,
  );
}

function alliancePlacementComponents(placements, maxGap = 8) {
  const visited = new Set();
  const components = [];

  placements.forEach((placement) => {
    if (visited.has(placement.id)) return;

    const queue = [placement];
    const component = [];
    visited.add(placement.id);

    while (queue.length) {
      const current = queue.shift();
      component.push(current);

      placements.forEach((other) => {
        if (visited.has(other.id)) return;
        if (hexDistance(current.anchor, other.anchor) > maxGap) return;
        visited.add(other.id);
        queue.push(other);
      });
    }

    components.push(component);
  });

  return components.sort((a, b) => b.length - a.length);
}

function nearestAllianceGroupForComponent(component, activeAlliances, placementsByAlliance, sourceAllianceId) {
  return activeAlliances
    .filter((alliance) => alliance.id !== sourceAllianceId)
    .map((alliance) => {
      const group = placementsByAlliance.get(alliance.id) || [];
      const nearest = component.reduce(
        (closest, placement) => Math.min(closest, nearestDistanceToGroup(placement, group)),
        Number.POSITIVE_INFINITY,
      );
      const allianceIndex = activeAlliances.findIndex((item) => item.id === alliance.id);
      const anchor = strategicGroupStartForAlliance(allianceIndex, activeAlliances.length);
      const center = averageAnchor(component);
      return {
        alliance,
        score:
          (Number.isFinite(nearest) ? nearest : 80) * 180 +
          hexDistance(center, anchor) * 10 +
          component.length * -2 +
          allianceIndex * 0.001,
      };
    })
    .sort((a, b) => a.score - b.score)[0]?.alliance || null;
}

function nearestAllianceGroupForPlacement(placement, activeAlliances, placementsByAlliance, sourceAllianceId) {
  return activeAlliances
    .filter((alliance) => alliance.id !== sourceAllianceId)
    .map((alliance) => {
      const group = placementsByAlliance.get(alliance.id) || [];
      const nearest = group.reduce(
        (closest, existing) => Math.min(closest, hexDistance(placement.anchor, existing.anchor)),
        Number.POSITIVE_INFINITY,
      );
      const allianceIndex = activeAlliances.findIndex((item) => item.id === alliance.id);
      const anchor = strategicGroupStartForAlliance(allianceIndex, activeAlliances.length);
      return {
        alliance,
        score:
          (Number.isFinite(nearest) ? nearest : 80) * 120 +
          hexDistance(placement.anchor, anchor) * 8 +
          allianceIndex * 0.001,
      };
    })
    .sort((a, b) => a.score - b.score)[0]?.alliance || null;
}

function strategicGroupStartForAlliance(allianceIndex, allianceCount) {
  if (allianceCount <= 1) return MAP_CENTER;
  if (allianceCount === 2) return STRATEGIC_GROUP_STARTS[allianceIndex === 0 ? 1 : 2];

  return STRATEGIC_GROUP_STARTS[allianceIndex % STRATEGIC_GROUP_STARTS.length];
}

function strategicGroupScore(candidate, picked, anchor, allianceIndex, allianceCount) {
  const anchorDistance = hexDistance(candidate.anchor, anchor);
  const nearestPicked = picked.reduce(
    (closest, placement) => Math.min(closest, hexDistance(candidate.anchor, placement.anchor)),
    Number.POSITIVE_INFINITY,
  );
  const cohesion = Number.isFinite(nearestPicked) ? nearestPicked : 0;
  const laneSoftness = allianceCount > 2 ? angleDifference(laneOrderValue(candidate), angleOrderValue(Math.atan2(anchor.y - MAP_CENTER.y, anchor.x - MAP_CENTER.x))) : 0;
  const detachedPenalty = picked.length && cohesion > 8 ? (cohesion - 8) * 14000 : 0;

  return (
    anchorDistance * (picked.length ? 6 : 150) +
    cohesion * (picked.length ? 520 : 0) +
    detachedPenalty +
    laneSoftness * 140 +
    favorablePlacementScore(candidate) * 12 +
    candidate.innerDistance * 0.3 +
    allianceIndex * 0.0001
  );
}

function flexibleAllianceTargets(activeAlliances, filledCount) {
  const targets = new Map(activeAlliances.map((alliance) => [alliance.id, alliance.count]));
  let total = activeAlliances.reduce((sum, alliance) => sum + alliance.count, 0);

  if (total > filledCount) {
    let remaining = total - filledCount;
    for (let index = activeAlliances.length - 1; index >= 0 && remaining > 0; index -= 1) {
      const alliance = activeAlliances[index];
      const current = targets.get(alliance.id) || 0;
      const minimum = Math.max(0, alliance.count - ALLIANCE_TRIM_FLEX);
      const remove = Math.min(remaining, current - minimum);
      targets.set(alliance.id, current - remove);
      remaining -= remove;
    }
  }

  total = [...targets.values()].reduce((sum, count) => sum + count, 0);

  if (total < filledCount) {
    let remaining = filledCount - total;
    while (remaining > 0 && activeAlliances.length) {
      const alliance = activeAlliances
        .map((item, index) => ({
          alliance: item,
          ratio:
            ((targets.get(item.id) || 0) + 1) / Math.max(1, item.count) +
            (index === activeAlliances.length - 1 ? 100 : index * 0.08),
        }))
        .sort((a, b) => a.ratio - b.ratio)[0].alliance;
      const current = targets.get(alliance.id) || 0;
      targets.set(alliance.id, current + 1);
      remaining -= 1;
    }
  }

  enforceAlliancePriorityTargets(activeAlliances, targets);
  return targets;
}

function enforceAlliancePriorityTargets(activeAlliances, targets) {
  let changed = true;

  while (changed) {
    changed = false;

    for (const higher of activeAlliances) {
      for (const lower of activeAlliances) {
        if (higher.id === lower.id || higher.count <= lower.count) continue;

        const higherTarget = targets.get(higher.id) || 0;
        const lowerTarget = targets.get(lower.id) || 0;
        const lowerHasExcess = lowerTarget > lower.count;
        const higherIsShort = higherTarget < higher.count;
        const inverted = higherTarget < lowerTarget;

        if (lowerTarget <= 0 || !inverted || (!lowerHasExcess && !higherIsShort)) continue;

        targets.set(higher.id, higherTarget + 1);
        targets.set(lower.id, lowerTarget - 1);
        changed = true;
      }
    }
  }
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

  return `${enemyOpenCount.toLocaleString()} ${enemyOpeningLabel()} can still fit between defenders. You can try "Generate Fill" again for a lower number, or move on to "Optimize" and then "Fill Gaps".`;
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

function allocatePlan({ allowTrimming = true } = {}) {
  cleanAllianceRows();
  const allocations = [];
  const activeAlliances = state.alliances.filter((alliance) => alliance.count > 0);
  const selectedPlacements = maxPlan.map((placement) => ({ ...placement }));
  const activeMeta = assignContiguousAllianceLanes(activeAlliances, selectedPlacements, { allowTrimming });

  state.alliances.forEach((alliance, allianceIndex) => {
    const color = ALLIANCE_COLORS[allianceIndex % ALLIANCE_COLORS.length];
    const meta = activeMeta.find((item) => item.alliance.id === alliance.id);
    const placements = meta?.placements || [];

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
        flexTrim: Boolean(meta?.trimmedForQuality),
        flexAdjusted: Boolean(meta?.flexAdjusted),
        number: index + 1,
      });
    }
  });

  return allocations;
}

function assignContiguousAllianceLanes(activeAlliances, placements, { allowTrimming = true } = {}) {
  const activeMeta = buildAllianceLaneMeta(activeAlliances);
  const available = [...placements];

  activeMeta.forEach((meta) => {
    const picked = [];
    const requiredMinimum = allowTrimming ? Math.max(0, meta.alliance.count - ALLIANCE_TRIM_FLEX) : meta.alliance.count;

    const targetMaximum = meta.alliance.count;

    while (picked.length < targetMaximum && available.length) {
      const best = findBestLanePlacement(available, meta, (candidate) => allianceLaneScore(candidate, meta, picked));
      if (!best) break;
      if (picked.length >= meta.alliance.count && !shouldAddFlexiblePlacement(best.placement, meta, picked)) {
        meta.flexAdjusted = true;
        break;
      }
      if (picked.length >= requiredMinimum && shouldTrimLanePlacement(best.placement, meta, picked)) {
        meta.trimmedForQuality = true;
        meta.flexAdjusted = true;
        break;
      }
      picked.push(available.splice(best.index, 1)[0]);
    }

    meta.placements = picked.sort((a, b) => (isPlacementBefore(a, b) ? -1 : isPlacementBefore(b, a) ? 1 : 0));
  });

  return activeMeta;
}

function laneOrderValue(placement) {
  return angleOrderValue(placement.angle);
}

function angleOrderValue(angle) {
  const startAngle = -Math.PI / 2;
  let value = angle - startAngle;
  while (value < 0) value += Math.PI * 2;
  while (value >= Math.PI * 2) value -= Math.PI * 2;
  return value;
}

function buildAllianceLaneMeta(activeAlliances) {
  const totalRequested = activeAlliances.reduce((sum, alliance) => sum + alliance.count, 0);
  let cursor = 0;

  return activeAlliances.map((alliance) => {
    const width = (Math.PI * 2 * alliance.count) / Math.max(1, totalRequested);
    const targetOrder = cursor + width / 2;
    const meta = {
      alliance,
      startOrder: cursor,
      endOrder: cursor + width,
      width,
      targetOrder,
      targetAngle: normalizeAngle(-Math.PI / 2 + targetOrder),
      halfWidth: width / 2,
      bandCount: Math.min(14, Math.max(3, Math.ceil(alliance.count / 4))),
      placements: [],
    };

    cursor += width;
    return meta;
  });
}

function allianceLaneScore(placement, meta, picked = []) {
  const lane = laneMetrics(placement, meta.targetAngle);
  const order = laneOrderValue(placement);
  const overflow = laneOverflow(order, meta);
  const orderGap = angleDifference(order, meta.targetOrder);
  const band = laneBandIndex(order, meta);
  const pickedInBand = picked.filter((item) => laneBandIndex(laneOrderValue(item), meta) === band).length;
  const nearestLaneGap = picked.reduce(
    (closest, item) => Math.min(closest, angleDifference(laneOrderValue(item), order)),
    Number.POSITIVE_INFINITY,
  );
  const cleanlinessWeight = innerCleanlinessWeight(placement);
  const closeNeighborPenalty = Number.isFinite(nearestLaneGap)
    ? Math.max(0, meta.width / Math.max(4, meta.bandCount) - nearestLaneGap) * 2400
    : 0;
  const spatialPenalty = spatialClumpPenalty(placement, picked);

  return (
    overflow * laneOverflowPenalty(meta, placement) +
    pickedInBand * 62000 * cleanlinessWeight +
    closeNeighborPenalty * cleanlinessWeight +
    spatialPenalty +
    orderGap * (18 + cleanlinessWeight * 9) +
    placement.innerDistance * 7 +
    lane.lateral * 0.16 +
    placement.distance * 0.06 +
    lane.behindPenalty
  );
}

function spatialClumpPenalty(placement, picked) {
  const weight = innerCleanlinessWeight(placement);
  return picked.reduce((penalty, other) => {
    const distance = hexDistance(placement.anchor, other.anchor);
    if (distance > 10) return penalty;
    const otherWeight = innerCleanlinessWeight(other);
    const combinedWeight = Math.max(weight, otherWeight);
    const bothNearInner = weight > 0.75 && otherWeight > 0.75;
    const innerMultiplier = bothNearInner ? 1.85 : 1;
    const hardPenalty = distance <= 5 ? (6 - distance) * 4200 * combinedWeight * innerMultiplier : 0;
    const softPenalty = (11 - distance) * 650 * combinedWeight * innerMultiplier;
    return penalty + hardPenalty + softPenalty;
  }, 0);
}

function innerCleanlinessWeight(placement) {
  const nearInnerWall = 22;
  const outerRelaxPoint = 46;
  const normalized = Math.min(
    1,
    Math.max(0, (outerRelaxPoint - placement.innerDistance) / (outerRelaxPoint - nearInnerWall)),
  );

  return 0.05 + normalized * normalized * 3;
}

function shouldAddFlexiblePlacement(placement, meta, picked) {
  if (!picked.length) return true;
  const weight = innerCleanlinessWeight(placement);
  if (weight > 0.55) return false;
  return spatialClumpPenalty(placement, picked) < 650;
}

function shouldTrimLanePlacement(placement, meta, picked) {
  if (!picked.length) return false;
  const order = laneOrderValue(placement);
  const band = laneBandIndex(order, meta);
  const pickedInBand = picked.filter((item) => laneBandIndex(laneOrderValue(item), meta) === band).length;
  const nearestLaneGap = picked.reduce(
    (closest, item) => Math.min(closest, angleDifference(laneOrderValue(item), order)),
    Number.POSITIVE_INFINITY,
  );
  const nearestHexDistance = picked.reduce(
    (closest, item) => Math.min(closest, hexDistance(placement.anchor, item.anchor)),
    Number.POSITIVE_INFINITY,
  );
  const minimumCleanGap = meta.width / Math.max(4, meta.bandCount);
  const isInnerPressure = innerCleanlinessWeight(placement) > 0.75;
  const isCrowdingBand = pickedInBand >= Math.max(2, Math.ceil((picked.length + 1) / meta.bandCount));
  const isTooClose = Number.isFinite(nearestLaneGap) && nearestLaneGap < minimumCleanGap;
  const isHexTooClose = Number.isFinite(nearestHexDistance) && nearestHexDistance <= (isInnerPressure ? 8 : 5);
  const isSpatiallyClumped = spatialClumpPenalty(placement, picked) > 2200;

  return isInnerPressure && (isCrowdingBand || isTooClose || isHexTooClose || isSpatiallyClumped);
}

function laneOverflow(order, meta) {
  if (order < meta.startOrder) return meta.startOrder - order;
  if (order >= meta.endOrder) return order - meta.endOrder;
  return 0;
}

function flexibleLaneOverflow(meta) {
  return Math.min(meta.width * 0.28, Math.PI / 10);
}

function laneOverflowPenalty(meta, placement) {
  const innerWeight = innerCleanlinessWeight(placement);
  return 240000 + innerWeight * 185000;
}

function laneBandIndex(order, meta) {
  const relative = Math.min(Math.max(order - meta.startOrder, 0), Math.max(meta.width - 0.0001, 0));
  return Math.min(meta.bandCount - 1, Math.floor((relative / Math.max(meta.width, 0.0001)) * meta.bandCount));
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

function findBestLanePlacement(available, meta, scorePlacement) {
  const flexOverflow = flexibleLaneOverflow(meta);
  const inLaneIndexes = available
    .map((placement, index) => ({ placement, index }))
    .filter(({ placement }) => laneOverflow(laneOrderValue(placement), meta) <= flexOverflow)
    .map(({ index }) => index);
  const indexes = inLaneIndexes.length ? inLaneIndexes : available.map((_, index) => index);
  let best = null;
  let bestScore = Number.POSITIVE_INFINITY;

  indexes.forEach((index) => {
    const score = scorePlacement(available[index]);
    if (score < bestScore) {
      bestScore = score;
      best = { index, placement: available[index], score };
    }
  });

  return best;
}

function removeBestLanePlacement(available, meta, scorePlacement) {
  const best = findBestLanePlacement(available, meta, scorePlacement);
  if (!best) return null;
  return available.splice(best.index, 1)[0];
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
  serverNumber.value = state.server;
  applyGeneratedFillResult(buildGeneratedFillResult(generationSeed), { renderInputs: true });
}

function buildGeneratedFillResult(seed = makeGenerationSeed()) {
  generationSeed = seed;
  maxPlan = buildMaxPlan();
  let candidateAssignments = allocatePlan({ allowTrimming: true });
  candidateAssignments = sealAssignmentOpenings(candidateAssignments);
  candidateAssignments = reduceCleanSealedAssignments(candidateAssignments);
  candidateAssignments = rebalanceAllianceOwnership(candidateAssignments);
  let candidateEnemyOpenCount = countEnemyOpenings(candidateAssignments);

  if (candidateEnemyOpenCount && candidateAssignments.some((assignment) => assignment.flexTrim)) {
    candidateAssignments = allocatePlan({ allowTrimming: false });
    candidateAssignments = sealAssignmentOpenings(candidateAssignments);
    candidateAssignments = reduceCleanSealedAssignments(candidateAssignments);
    candidateAssignments = rebalanceAllianceOwnership(candidateAssignments);
    candidateEnemyOpenCount = countEnemyOpenings(candidateAssignments);
  }

  return {
    seed,
    maxPlan: maxPlan.map((placement) => ({ ...placement })),
    assignments: candidateAssignments.map((assignment) => ({ ...assignment })),
    enemyOpenCount: candidateEnemyOpenCount,
    enemyCandidateCount,
    outerSupportPlan: outerSupportPlan.map((placement) => ({ ...placement })),
  };
}

function buildKnownSealedBlueprintResult() {
  const requestedGap = Math.abs(requestedTotal() - KNOWN_SEALED_BLUEPRINT_ANCHORS.length);
  const closeEnough = requestedGap <= REQUESTED_TOTAL_FLEX;
  if (!closeEnough) return null;

  outerSupportPlan = buildOuterSupportHqs();
  const enemyCandidates = buildPlacementCandidates(0, "enemy");
  enemyCandidateCount = enemyCandidates.length;
  const blueprintCandidates = uniqueCandidates(
    buildPlacementCandidates(FIXED_SPACING, "defense"),
    buildPlacementCandidates(FIXED_SPACING, "outer-defense"),
    buildPlacementCandidates(0, "enemy"),
  );
  const candidateById = new Map(blueprintCandidates.map((candidate) => [candidate.id, candidate]));
  const blueprintPlan = sortFillOrder(
    KNOWN_SEALED_BLUEPRINT_ANCHORS
      .map((id) => candidateById.get(id))
      .filter(Boolean)
      .map((candidate) => ({ ...candidate, optimizedBlueprint: true })),
  );

  if (blueprintPlan.length < KNOWN_SEALED_BLUEPRINT_ANCHORS.length * 0.98) return null;

  maxPlan = blueprintPlan.map((placement) => ({ ...placement }));
  const candidateAssignments = rebalanceAllianceOwnership(blueprintPlan);

  return {
    seed: KNOWN_STRONG_GENERATION_SEEDS[0],
    maxPlan: maxPlan.map((placement) => ({ ...placement })),
    assignments: candidateAssignments.map((assignment) => ({ ...assignment })),
    enemyOpenCount: countEnemyOpenings(candidateAssignments),
    enemyCandidateCount,
    outerSupportPlan: outerSupportPlan.map((placement) => ({ ...placement })),
  };
}

function applyGeneratedFillResult(result, { renderInputs = false } = {}) {
  generationSeed = result.seed;
  maxPlan = result.maxPlan.map((placement) => ({ ...placement }));
  assignments = result.assignments.map((assignment) => ({ ...assignment }));
  enemyOpenCount = result.enemyOpenCount;
  enemyCandidateCount = result.enemyCandidateCount;
  outerSupportPlan = result.outerSupportPlan.map((placement) => ({ ...placement }));

  if (renderInputs) renderAllianceInputs();
  renderStats();
  renderMap();
  renderLegend();
  renderAssignmentTable();
  saveState();
}

async function generateBestFill({ attempts = 3, onProgress = () => {} } = {}) {
  state.hqNames = {};
  let best = null;
  const blueprintResult = buildKnownSealedBlueprintResult();
  const seedCount = blueprintResult ? attempts - 1 : attempts;
  const candidateRuns = [
    ...(blueprintResult ? [() => blueprintResult] : []),
    () => buildGeneratedFillResult(KNOWN_STRONG_GENERATION_SEEDS[0]),
    ...Array.from({ length: Math.max(0, seedCount - 1) }, () => () => buildGeneratedFillResult(makeGenerationSeed())),
  ].slice(0, attempts);

  for (let attempt = 0; attempt < candidateRuns.length; attempt += 1) {
    onProgress(attempt + 1, candidateRuns.length);
    await sleep(0);
    const result = candidateRuns[attempt]();
    if (!best || compareGeneratedFillResults(result, best) < 0) best = result;
    await sleep(0);
  }

  return best;
}

function compareGeneratedFillResults(a, b) {
  return lexicographicCompare(generatedFillScore(a), generatedFillScore(b));
}

function generatedFillScore(result) {
  const activePlacements = result.assignments.filter((assignment) => !assignment.shortfall);
  const contact = contactClusterStats(activePlacements, 4);
  const requestedGap = Math.abs(requestedTotal() - activePlacements.length);
  const outsideRequestedFlex = requestedGap > REQUESTED_TOTAL_FLEX ? 1 : 0;
  const closeToRequested = !outsideRequestedFlex;
  const strongSeedPreference = closeToRequested && KNOWN_STRONG_GENERATION_SEEDS.includes(result.seed) ? 0 : 1;

  return [
    outsideRequestedFlex,
    outsideRequestedFlex ? requestedGap : 0,
    result.enemyOpenCount,
    strongSeedPreference,
    requestedGap,
    activePlacements.length,
    contact.excess,
    contact.largest,
    contactEdgeCount(activePlacements),
    planLayoutPenalty(activePlacements),
  ];
}

function lexicographicCompare(left, right) {
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] < right[index]) return -1;
    if (left[index] > right[index]) return 1;
  }

  return 0;
}

function clearGeneratedFill() {
  assignments = [];
  enemyOpenCount = 0;
  renderStats();
  renderMap();
  renderLegend();
  renderAssignmentTable();
}

function startFreshGeneration() {
  generationSeed = makeGenerationSeed();
  state.hqNames = {};
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
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  const assigned = activeAssignments.length;
  const requested = requestedTotal();
  const stats = [
    ["defender-slots", "Defender Slots", maxPlan.length.toLocaleString()],
    ["requested", "Requested", requested.toLocaleString()],
    ["placed", "Placed", assigned.toLocaleString()],
    ["enemy-hqs-fit", "Enemy HQs Fit", enemyOpenCount.toLocaleString()],
    ["seal-status", "Seal Status", enemyOpenCount ? "Open" : "Sealed"],
    [
      "feedback",
      "Feedback",
      '<a class="feedback-link" href="mailto:lz-mudfiller@gmail.com">Email</a>',
    ],
  ];

  statGrid.innerHTML = stats
    .map(([key, label, value]) => `<div data-stat="${key}"><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
}

function requestedTotal() {
  return state.alliances.reduce((sum, alliance) => sum + (Number(alliance.count) || 0), 0);
}

function requestedTotalFromForm() {
  const rows = [...allianceList.querySelectorAll("[data-id]")];
  if (!rows.length) return requestedTotal();

  return rows.reduce((sum, row) => {
    const countInput = row.querySelector('[data-field="count"]');
    return sum + Math.max(0, Number(countInput?.value) || 0);
  }, 0);
}

function renderRequestedStat() {
  const requestedValue = statGrid.querySelector('[data-stat="requested"] dd');
  if (requestedValue) requestedValue.textContent = requestedTotalFromForm().toLocaleString();
}

function renderMap() {
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  const outerSupportHqs = outerSupportPlan.length ? outerSupportPlan : buildOuterSupportHqs();
  setMapViewBox(activeAssignments, outerSupportHqs);

  const outerSupportTiles = outerSupportHqs
    .flatMap((placement) =>
      placement.cells.map(
        (cell) =>
          '<polygon class="outer-hq-cell" points="' +
          hexPoints(cell.x, cell.y, TILE_RADIUS * 0.94) +
          '"></polygon>',
      ),
    )
    .join("");

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

  const labels = activeAssignments
    .map((assignment) => {
      const labelCenter = projectCoordinate(assignment.anchor);
      return `
        <text
          class="hq-label"
          x="${labelCenter.x.toFixed(2)}"
          y="${labelCenter.y.toFixed(2)}"
          text-anchor="middle"
          dominant-baseline="central"
        >${assignment.number}</text>
      `;
    })
    .join("");

  const enemyPlacements = showEnemyPlacements
    ? enemyPlacementPackForPlacements(activeAssignments, buildPlacementCandidates(0, "enemy"))
    : [];
  const enemyTiles = enemyPlacements
    .flatMap((placement) =>
      placement.cells.map(
        (cell) => `<polygon class="enemy-hq-cell" points="${hexPoints(cell.x, cell.y, TILE_RADIUS * 0.9)}"></polygon>`,
      ),
    )
    .join("");
  const enemyLabels = enemyPlacements
    .map((placement, index) => {
      const labelCenter = projectCoordinate(placement.anchor);
      return `
        <text
          class="enemy-hq-label"
          x="${labelCenter.x.toFixed(2)}"
          y="${labelCenter.y.toFixed(2)}"
          text-anchor="middle"
          dominant-baseline="central"
        >${index + 1}</text>
      `;
    })
    .join("");

  const forbiddenTiles = [...forbiddenSet]
    .map((key) => {
      const [x, y] = key.split(",").map(Number);
      return `<polygon class="forbidden-cell" points="${hexPoints(x, y, TILE_RADIUS * 0.84)}"></polygon>`;
    })
    .join("");

  const capitalCenter = projectCoordinate(MAP_CENTER);

  mudLayer.innerHTML = `
    ${outerSupportTiles}
    <polygon class="mud-area" points="${polygonText(OUTER_MUD)}"></polygon>
    ${mudTiles}
    <polygon class="blocked-area" points="${polygonText(BLOCKED_CAPITAL)}"></polygon>
    ${forbiddenTiles}
    ${tiles}
    ${labels}
    ${enemyTiles}
    ${enemyLabels}
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

function buildOuterSupportHqs() {
  const bounds = coordinateBounds(OUTER_MUD, CANDIDATE_PADDING + 4);
  const candidates = [];

  for (let y = bounds.minY; y <= bounds.maxY; y += 1) {
    for (let x = bounds.minX; x <= bounds.maxX; x += 1) {
      const candidate = buildCandidate({ x, y }, FIXED_SPACING);
      const fullyOutsideMud = candidate.cells.every((cell) => !isOuterMudCell(cell));
      const hugsOuterMud = candidate.buffer.some(isValidMudCell);
      if (fullyOutsideMud && hugsOuterMud && candidate.cells.every((cell) => !isBlockedCell(cell))) {
        candidates.push(candidate);
      }
    }
  }

  return buildSpacedPlan(
    candidates.sort(
      (a, b) =>
        a.innerDistance - b.innerDistance ||
        laneOrderValue(a) - laneOrderValue(b) ||
        a.anchor.y - b.anchor.y ||
        a.anchor.x - b.anchor.x,
    ),
  );
}

function outerSupportCellKeys() {
  return new Set(outerSupportPlan.flatMap((placement) => placement.cellKeys));
}

function setMapViewBox(activeAssignments = [], outerSupportHqs = []) {
  const renderedCells = [
    ...buildMudTileUnderlay(),
    ...outerSupportHqs.flatMap((placement) => placement.cells),
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
  baseMapViewBox = { x: minX, y: minY, width, height };
  currentMapViewBox = { ...baseMapViewBox };
  setMapViewBoxValue(currentMapViewBox);
}

function setMapViewBoxValue(viewBox) {
  mudSvg.setAttribute("viewBox", viewBox.x + " " + viewBox.y + " " + viewBox.width + " " + viewBox.height);
}

function resetMapZoom() {
  if (!baseMapViewBox) return;
  currentMapViewBox = { ...baseMapViewBox };
  setMapViewBoxValue(currentMapViewBox);
}

function clampMapViewBox(viewBox) {
  if (!baseMapViewBox) return viewBox;

  const minWidth = baseMapViewBox.width / 7;
  const minHeight = baseMapViewBox.height / 7;
  const width = Math.min(baseMapViewBox.width, Math.max(minWidth, viewBox.width));
  const height = Math.min(baseMapViewBox.height, Math.max(minHeight, viewBox.height));
  const minX = baseMapViewBox.x;
  const minY = baseMapViewBox.y;
  const maxX = baseMapViewBox.x + baseMapViewBox.width - width;
  const maxY = baseMapViewBox.y + baseMapViewBox.height - height;

  return {
    x: Math.min(Math.max(viewBox.x, minX), maxX),
    y: Math.min(Math.max(viewBox.y, minY), maxY),
    width,
    height,
  };
}

function pointToSvgSpace(clientX, clientY, viewBox = currentMapViewBox) {
  const rect = mudSvg.getBoundingClientRect();
  return {
    x: viewBox.x + ((clientX - rect.left) / rect.width) * viewBox.width,
    y: viewBox.y + ((clientY - rect.top) / rect.height) * viewBox.height,
  };
}

function pointerMidpoint(points) {
  return {
    x: (points[0].clientX + points[1].clientX) / 2,
    y: (points[0].clientY + points[1].clientY) / 2,
  };
}

function pointerDistance(points) {
  return Math.hypot(points[0].clientX - points[1].clientX, points[0].clientY - points[1].clientY);
}

function startMapGesture(points = Array.from(mapPointers.values())) {
  if (!currentMapViewBox) return;

  if (points.length >= 2) {
    const midpoint = pointerMidpoint(points);
    mapGesture = {
      type: "pinch",
      startDistance: pointerDistance(points),
      startViewBox: { ...currentMapViewBox },
      startCenter: pointToSvgSpace(midpoint.x, midpoint.y),
    };
    return;
  }

  if (points.length === 1) {
    mapGesture = {
      type: "pan",
      pointerId: points[0].pointerId,
      startClient: { x: points[0].clientX, y: points[0].clientY },
      startViewBox: { ...currentMapViewBox },
    };
  }
}

function updateMapGesture(points = Array.from(mapPointers.values())) {
  if (!mapGesture || !currentMapViewBox) return;

  if (mapGesture.type === "pinch" && points.length >= 2) {
    const midpoint = pointerMidpoint(points);
    const distance = pointerDistance(points) || mapGesture.startDistance;
    const scale = mapGesture.startDistance / distance;
    const start = mapGesture.startViewBox;
    const nextWidth = start.width * scale;
    const nextHeight = start.height * scale;
    const anchorRatioX = (mapGesture.startCenter.x - start.x) / start.width;
    const anchorRatioY = (mapGesture.startCenter.y - start.y) / start.height;
    const liveCenter = pointToSvgSpace(midpoint.x, midpoint.y, start);

    currentMapViewBox = clampMapViewBox({
      x: liveCenter.x - nextWidth * anchorRatioX,
      y: liveCenter.y - nextHeight * anchorRatioY,
      width: nextWidth,
      height: nextHeight,
    });
    setMapViewBoxValue(currentMapViewBox);
    return;
  }

  if (mapGesture.type === "pan" && points.length === 1) {
    const point = points.find((item) => item.pointerId === mapGesture.pointerId) || points[0];
    const rect = mudSvg.getBoundingClientRect();
    const deltaX = ((point.clientX - mapGesture.startClient.x) / rect.width) * mapGesture.startViewBox.width;
    const deltaY = ((point.clientY - mapGesture.startClient.y) / rect.height) * mapGesture.startViewBox.height;

    currentMapViewBox = clampMapViewBox({
      ...mapGesture.startViewBox,
      x: mapGesture.startViewBox.x - deltaX,
      y: mapGesture.startViewBox.y - deltaY,
    });
    setMapViewBoxValue(currentMapViewBox);
  }
}

function zoomMapAt(clientX, clientY, scale) {
  if (!currentMapViewBox) return;
  const start = currentMapViewBox;
  const anchor = pointToSvgSpace(clientX, clientY, start);
  const nextWidth = start.width * scale;
  const nextHeight = start.height * scale;
  const anchorRatioX = (anchor.x - start.x) / start.width;
  const anchorRatioY = (anchor.y - start.y) / start.height;

  currentMapViewBox = clampMapViewBox({
    x: anchor.x - nextWidth * anchorRatioX,
    y: anchor.y - nextHeight * anchorRatioY,
    width: nextWidth,
    height: nextHeight,
  });
  setMapViewBoxValue(currentMapViewBox);
}

function touchPoints(event) {
  return Array.from(event.touches).map((touch) => ({
    pointerId: touch.identifier,
    clientX: touch.clientX,
    clientY: touch.clientY,
  }));
}

function renderLegend() {
  legend.innerHTML = state.alliances
    .map((alliance, index) => {
      const activeCount = assignments.filter((assignment) => !assignment.shortfall && assignment.alliance.id === alliance.id).length;
      const requestedCount = Number(alliance.count) || 0;
      const allianceName = alliance.name || `Alliance ${index + 1}`;
      return `
        <span class="legend-item" data-alliance-id="${escapeHtml(alliance.id)}">
          <i style="--swatch:${ALLIANCE_COLORS[index % ALLIANCE_COLORS.length]}"></i>
          <span class="legend-name">${escapeHtml(allianceName)}</span>
          <span class="legend-count">${requestedCount}/${activeCount}</span>
          <button class="icon-button alliance-copy" type="button" title="Copy alliance coordinates" aria-label="Copy ${escapeHtml(allianceName)} coordinates" ${activeCount ? "" : "disabled"}>
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

function formatShortfallWarning(shortfall) {
  const qualityTrim = Math.min(shortfall, assignments.filter((assignment) => assignment.shortfall && assignment.flexTrim).length);
  const hqLabel = (count) => (count === 1 ? "requested HQ" : "requested HQs");

  if (qualityTrim) {
    const verb = qualityTrim === 1 ? "was" : "were";
    const additional = shortfall > qualityTrim ? ` ${shortfall - qualityTrim} additional ${hqLabel(shortfall - qualityTrim)} could not fit.` : "";
    return `${qualityTrim} ${hqLabel(qualityTrim)} ${verb} left unplaced to keep HQ spacing cleaner while preserving the seal.${additional}`;
  }

  return `${shortfall} ${hqLabel(shortfall)} could not fit in the current mud shape.`;
}
function renderAssignmentTable() {
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  const shortfall = Math.max(0, requestedTotal() - activeAssignments.length);
  const openDefenseSlots = countOpenDefenseSlots(assignments);
  const enemyWarning = formatEnemyWarning(openDefenseSlots);

  if (!activeAssignments.length) {
    assignmentTable.innerHTML = `<div class="empty-state">No headquarters requested yet.</div>`;
    return;
  }

  const rows = activeAssignments
    .map((assignment, index) => {
      const coordinate = formatEmptyLand(assignment.anchor);
      const allianceLabel = `${assignment.alliance.name || `Alliance ${assignment.allianceIndex + 1}`} ${assignment.number}`;
      const copyLine = formatAssignmentCopyLine(assignment);
      return `
        <article class="table-row">
          <span>${index + 1}</span>
          <strong>${escapeHtml(allianceLabel)}</strong>
          <input class="assignment-name-input" data-name-key="${escapeHtml(assignmentNameKey(assignment))}" maxlength="40" value="${escapeHtml(getAssignmentName(assignment))}" placeholder="Name" />
          <span>${escapeHtml(coordinate)}</span>
          <button class="icon-button row-copy" type="button" data-copy-text="${escapeHtml(copyLine)}" title="Copy coordinate" aria-label="Copy coordinate">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M8 8h10v12H8z"></path>
              <path d="M6 16H4V4h12v2"></path>
            </svg>
          </button>
        </article>
      `;
    })
    .join("");

  assignmentTable.innerHTML = `
    ${shortfall ? `<div class="warning">${formatShortfallWarning(shortfall)}</div>` : ""}
    ${hasTrueEnemyOpenings() ? `<div class="warning">${enemyWarning}</div>` : ""}
    <div class="table-head">
      <span>#</span>
      <span>Alliance</span>
      <span>Name</span>
      <span>Coordinates</span>
      <span>Copy</span>
    </div>
    ${rows}
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

function assignmentNameKey(assignment) {
  return `${assignment.alliance.id}:${assignment.number}`;
}

function getAssignmentName(assignment) {
  return state.hqNames?.[assignmentNameKey(assignment)] || "";
}

function formattedAssignmentLabel(assignment) {
  const allianceName = assignment.alliance.name || `Alliance ${assignment.allianceIndex + 1}`;
  return `${allianceName} HQ ${assignment.number}`;
}

function assignmentCopyName(assignment) {
  return getAssignmentName(assignment).trim();
}

function formatAssignmentCopyLine(assignment, index = null, nameOverride = null) {
  const prefix = index === null ? "" : `${index + 1}, `;
  const copyName = nameOverride === null ? assignmentCopyName(assignment) : String(nameOverride).trim();
  return `${prefix}${formattedAssignmentLabel(assignment)}, ${copyName}, ${formatEmptyLand(assignment.anchor)}`;
}

function buildCoordinateText(compact = false) {
  const activeAssignments = assignments.filter((assignment) => !assignment.shortfall);
  const serverText = state.server ? `Server ${state.server}` : "Server";
  const title = compact ? `${serverText} Mud Filler` : `${serverText} Mud Filler Coordinates`;
  const rows = activeAssignments.map((assignment, index) => formatAssignmentCopyLine(assignment, index));

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
  const rows = activeAssignments.map((assignment) => formatAssignmentCopyLine(assignment));

  return [`${serverText} Mud Filler - ${allianceName}`, ...rows].join("\n");
}
function triggerDownload(filename, href) {
  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  link.rel = "noopener";
  link.style.display = "none";
  document.body.append(link);
  link.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
  link.remove();
}

function downloadBlobFile(filename, content, type) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: type || "application/octet-stream" });
  if (!blob.size) return "";

  const href = URL.createObjectURL(blob);
  setTimeout(() => triggerDownload(filename, href), 0);
  return href;
}

function showDownloadFallback(filename, href, label, previewText = "") {
  if (!downloadFallback || !href) return;
  if (downloadFallbackUrl && downloadFallbackUrl !== href) URL.revokeObjectURL(downloadFallbackUrl);
  downloadFallbackUrl = href;

  const message = document.createElement("p");
  message.textContent = "If the file does not appear in Downloads, use this direct file link.";

  const link = document.createElement("a");
  link.href = href;
  link.download = filename;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = label;

  downloadFallback.replaceChildren(message, link);

  if (previewText) {
    const preview = document.createElement("textarea");
    preview.readOnly = true;
    preview.value = previewText;
    preview.setAttribute("aria-label", "Configuration file preview");
    downloadFallback.append(preview);
  }

  downloadFallback.hidden = false;
}

function fileSafeName(value) {
  return String(value || "lastz")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "lastz";
}

function buildConfiguration() {
  return {
    app: "Last Z Mud Filler",
    version: 1,
    exportedAt: new Date().toISOString(),
    state: {
      server: state.server,
      alliances: state.alliances.map((alliance) => ({
        id: alliance.id,
        name: alliance.name,
        count: Number(alliance.count) || 0,
      })),
      hqNames: { ...(state.hqNames || {}) },
    },
  };
}

function downloadConfiguration() {
  syncStateFromForm();
  saveState();
  const filename = `lastz-mud-filler-${fileSafeName(state.server || "server")}.json`;
  const content = JSON.stringify(buildConfiguration(), null, 2);
  const href = downloadBlobFile(filename, content, "application/json");
  if (href) {
    showDownloadFallback(filename, href, "Open configuration file", content);
    showToast("Configuration download started");
  } else {
    showToast("Could not create configuration file");
  }
}

function normalizeImportedConfiguration(payload) {
  const importedState = payload?.state || payload;
  if (!importedState || !Array.isArray(importedState.alliances)) {
    throw new Error("Invalid Last Z Mud Filler configuration file");
  }

  return {
    server: importedState.server ? String(importedState.server) : "",
    spacing: FIXED_SPACING,
    alliances: importedState.alliances.length
      ? importedState.alliances.map((alliance) => ({
          id: alliance.id || makeId(),
          name: alliance.name ? String(alliance.name) : "",
          count: Math.max(0, Number(alliance.count) || 0),
        }))
      : structuredClone(defaultState.alliances),
    hqNames: importedState.hqNames && typeof importedState.hqNames === "object" ? importedState.hqNames : {},
  };
}

async function importConfigurationFile(file) {
  try {
    const text = await file.text();
    state = normalizeImportedConfiguration(JSON.parse(text));
    cleanAllianceRows();
    renderAll();
    showToast("Configuration loaded");
  } catch (error) {
    showToast(error.message || "Could not load configuration");
  }
}

function mapExportStyles() {
  return `
    .mud-area{fill:rgba(111,73,43,.78);stroke:#f2b84b;stroke-width:.75}
    .mud-tile{fill:rgba(154,102,68,.16);stroke:rgba(242,184,75,.2);stroke-width:.055}
    .blocked-area{fill:rgba(18,22,17,.86);stroke:rgba(239,106,87,.86);stroke-dasharray:1.2 1;stroke-width:.62}
    .forbidden-cell{fill:rgba(239,106,87,.8);stroke:rgba(10,12,9,.85);stroke-width:.1}
    .outer-hq-cell{fill:rgba(128,136,126,.62);stroke:rgba(10,12,9,.78);stroke-width:.1}
    .hq-cell{opacity:.92;stroke:rgba(10,12,9,.9);stroke-width:.11}
    .enemy-hq-cell{fill:#050704;opacity:.9;stroke:rgba(242,245,234,.55);stroke-width:.1}
    .capital-dot{fill:#ef6a57;stroke:#fff1d6;stroke-width:.35}
    .hq-label{fill:#091006;stroke:rgba(255,255,255,.42);stroke-width:.065;paint-order:stroke;font:950 1.42px system-ui,sans-serif;pointer-events:none}
    .enemy-hq-label{fill:#f2f5ea;stroke:rgba(0,0,0,.75);stroke-width:.08;paint-order:stroke;font:950 1.28px system-ui,sans-serif;pointer-events:none}
  `;
}

async function downloadMapJpg() {
  try {
    const clone = mudSvg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    if (baseMapViewBox) {
      clone.setAttribute("viewBox", `${baseMapViewBox.x} ${baseMapViewBox.y} ${baseMapViewBox.width} ${baseMapViewBox.height}`);
    }
    clone.querySelector("defs")?.insertAdjacentHTML("afterbegin", `<style>${mapExportStyles()}</style>`);

    const viewBox = baseMapViewBox || currentMapViewBox || { width: 80, height: 70 };
    const width = 1800;
    const height = Math.max(1200, Math.round(width * (viewBox.height / viewBox.width)));
    clone.setAttribute("width", width);
    clone.setAttribute("height", height);

    const svgText = new XMLSerializer().serializeToString(clone);
    const svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const image = new Image();

    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
      image.src = url;
    });

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.fillStyle = "#0e120d";
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);
    URL.revokeObjectURL(url);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    if (!blob || !blob.size) {
      showToast("Could not create map image");
      return;
    }

    const filename = `lastz-fill-map-${fileSafeName(state.server || "server")}.jpg`;
    const href = downloadBlobFile(filename, blob, "image/jpeg");
    if (!href) {
      showToast("Could not create map image");
      return;
    }
    showDownloadFallback(filename, href, "Open map JPG");
    showToast("Map JPG download started");
  } catch {
    showToast("Could not create map image");
  }
}
function formatEmptyLand(point) {
  const server = state.server || "SVR";
  return `Empty Land [#:${server} X:${point.x} Y:${point.y}]`;
}

function copyText(text, message = "") {
  const value = String(text || "");
  if (!value) {
    showToast("Nothing to copy");
    return;
  }

  const selectionCopied = copyTextWithSelection(value);
  const clipboardWrite = writeClipboard(value);

  if (selectionCopied) {
    if (message) showToast(message);
    return;
  }

  clipboardWrite.then((copied) => {
    if (copied) {
      if (message) showToast(message);
    } else {
      showToast("Copy failed. Select and copy manually.");
    }
  });
}

async function writeClipboard(text) {
  try {
    if (!navigator.clipboard?.writeText) return false;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function copyTextWithSelection(text) {
  const temp = document.createElement("textarea");
  temp.value = text;
  temp.setAttribute("readonly", "");
  temp.style.position = "fixed";
  temp.style.left = "0";
  temp.style.top = "0";
  temp.style.width = "1px";
  temp.style.height = "1px";
  temp.style.opacity = "0";
  temp.style.pointerEvents = "none";
  document.body.append(temp);

  let copyEventFired = false;
  const handleCopy = (event) => {
    event.clipboardData.setData("text/plain", text);
    event.preventDefault();
    copyEventFired = true;
  };

  const previousFocus = document.activeElement;
  document.addEventListener("copy", handleCopy);
  temp.focus({ preventScroll: true });
  temp.select();
  temp.setSelectionRange(0, temp.value.length);

  try {
    document.execCommand("copy");
  } catch {
    copyEventFired = false;
  }

  document.removeEventListener("copy", handleCopy);
  temp.remove();
  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus({ preventScroll: true });
  }

  return copyEventFired;
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

function makeGenerationSeed() {
  return Math.floor(Date.now() % 1000000000) + Math.floor(Math.random() * 1000000);
}

function seededPlacementJitter(candidate, scale = 1) {
  let hash = generationSeed || 1;
  const value = `${candidate.id}:${candidate.anchor.x}:${candidate.anchor.y}`;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) % 2147483647;
  }

  return (hash / 2147483647) * scale;
}

function armMapInteraction() {
  if (mapInteractionArmed) return;
  mapInteractionArmed = true;
  mapFrame.classList.add("map-armed");
  showToast("Map zoom and pan enabled");
}

function disarmMapInteraction() {
  if (!mapInteractionArmed) return;
  mapInteractionArmed = false;
  mapFrame.classList.remove("map-armed");
  mapPointers.clear();
  mapGesture = null;
}

mapFrame.addEventListener("touchstart", (event) => {
  if (!currentMapViewBox || !mapInteractionArmed) return;
  usingTouchGesture = true;
  event.preventDefault();
  const points = touchPoints(event);

  const now = Date.now();
  if (points.length === 1 && now - lastTouchTap < 300) {
    resetMapZoom();
    lastTouchTap = 0;
    return;
  }
  if (points.length === 1) lastTouchTap = now;
  startMapGesture(points);
}, { passive: false });

mapFrame.addEventListener("touchmove", (event) => {
  if (!currentMapViewBox || !mapInteractionArmed) return;
  event.preventDefault();
  updateMapGesture(touchPoints(event));
}, { passive: false });

mapFrame.addEventListener("touchend", (event) => {
  if (!mapInteractionArmed) return;
  event.preventDefault();
  const points = touchPoints(event);
  mapGesture = null;
  if (points.length) {
    startMapGesture(points);
  } else {
    setTimeout(() => {
      usingTouchGesture = false;
    }, 80);
  }
}, { passive: false });

mapFrame.addEventListener("touchcancel", (event) => {
  if (!mapInteractionArmed) return;
  event.preventDefault();
  mapGesture = null;
  usingTouchGesture = false;
}, { passive: false });

mapFrame.addEventListener("wheel", (event) => {
  if (!currentMapViewBox || !mapInteractionArmed) return;
  event.preventDefault();
  zoomMapAt(event.clientX, event.clientY, Math.exp(event.deltaY * 0.001));
}, { passive: false });

mudSvg.addEventListener("click", () => {
  if (!currentMapViewBox || mapInteractionArmed) return;
  armMapInteraction();
});

mudSvg.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch") return;
  if (!currentMapViewBox || usingTouchGesture || !mapInteractionArmed) return;
  event.preventDefault();
  mudSvg.setPointerCapture(event.pointerId);
  mapPointers.set(event.pointerId, event);

  const now = Date.now();
  if (mapPointers.size === 1 && now - lastMapTap < 300) {
    resetMapZoom();
    lastMapTap = 0;
    return;
  }
  lastMapTap = now;
  startMapGesture();
});

mudSvg.addEventListener("pointermove", (event) => {
  if (usingTouchGesture || !mapPointers.has(event.pointerId)) return;
  event.preventDefault();
  mapPointers.set(event.pointerId, event);
  updateMapGesture();
});

["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
  mudSvg.addEventListener(eventName, (event) => {
    if (usingTouchGesture || !mapPointers.has(event.pointerId)) return;
    mapPointers.delete(event.pointerId);
    if (mudSvg.hasPointerCapture(event.pointerId)) {
      mudSvg.releasePointerCapture(event.pointerId);
    }
    mapGesture = null;
    if (mapPointers.size) startMapGesture();
  });
});

serverNumber.addEventListener("input", () => {
  state.server = serverNumber.value.trim();
  if (state.server) serverNumber.classList.remove("input-error");
  saveState();
});

function handleAllianceDraftChange(event) {
  const row = event.target.closest("[data-id]");
  const field = event.target.dataset.field;
  if (!row || !field) return;

  const alliance = state.alliances.find((item) => item.id === row.dataset.id);
  if (!alliance) return;

  const previousCount = Number(alliance.count) || 0;
  alliance[field] = field === "count" ? Math.max(0, Number(event.target.value) || 0) : event.target.value;
  renderRequestedStat();
  if (field === "count" && alliance.count !== previousCount) clearGeneratedFill();
  saveState();
}

allianceList.addEventListener("input", handleAllianceDraftChange);
allianceList.addEventListener("change", handleAllianceDraftChange);

allianceList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-alliance");
  if (!removeButton) return;

  const row = removeButton.closest("[data-id]");
  state.alliances = state.alliances.filter((alliance) => alliance.id !== row.dataset.id);
  renderAllianceInputs();
  renderRequestedStat();
  clearGeneratedFill();
  saveState();
});

document.querySelector("#add-alliance").addEventListener("click", () => {
  state.alliances.push({ id: makeId(), name: "", count: 1 });
  renderAllianceInputs();
  renderRequestedStat();
  clearGeneratedFill();
  saveState();
  allianceList.querySelector(".alliance-row:last-child input")?.focus();
});

generatePlanButton.addEventListener("click", async () => {
  if (generatePlanButton.disabled) return;

  if (!serverNumber.value.trim()) {
    serverNumber.classList.add("input-error");
    serverNumber.focus();
    showToast("Server is required");
    return;
  }

  serverNumber.classList.remove("input-error");
  syncStateFromForm();
  state.spacing = normalizeSpacing(state.spacing);
  serverNumber.value = state.server;
  generatePlanButton.disabled = true;
  if (optimizeFurtherButton) optimizeFurtherButton.disabled = true;
  if (fillGapsButton) fillGapsButton.disabled = true;

  try {
    const best = await generateBestFill({
      attempts: 3,
      onProgress: (attempt, attempts) => setGenerateButtonText(`Generating ${attempt}/${attempts}`),
    });
    applyGeneratedFillResult(best, { renderInputs: true });
    showToast(`Fill map generated: ${best.enemyOpenCount} enemy ${best.enemyOpenCount === 1 ? "HQ fits" : "HQs fit"}`);
  } finally {
    generatePlanButton.disabled = false;
    if (optimizeFurtherButton) optimizeFurtherButton.disabled = false;
    if (fillGapsButton) fillGapsButton.disabled = false;
    setGenerateButtonText("Generate Fill");
  }
});

if (optimizeFurtherButton) optimizeFurtherButton.addEventListener("click", async () => {
  if (optimizeFurtherButton.disabled) return;

  const durationMs = 30000;
  const deadline = Date.now() + durationMs;
  const beforeEdges = contactEdgeCount(assignments.filter((assignment) => !assignment.shortfall));
  const setCountdown = (seconds) => {
    setOptimizeButtonText(`Optimizing ${seconds}s`);
  };
  const refreshCountdown = () => {
    setCountdown(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
  };
  optimizeFurtherButton.disabled = true;
  if (fillGapsButton) fillGapsButton.disabled = true;
  refreshCountdown();
  const countdownTimer = setInterval(refreshCountdown, 250);
  showToast("Deeper optimization started");

  try {
    await sleep(60);
    const optimizedActive = await optimizeActivePlacementsFurther(assignments, {
      durationMs,
      onProgress: setCountdown,
    });
    assignments = rebalanceAllianceOwnership([...optimizedActive, ...assignments.filter((assignment) => assignment.shortfall)]);
    enemyOpenCount = countEnemyOpenings(assignments);
    renderStats();
    renderMap();
    renderLegend();
    renderAssignmentTable();
    saveState();

    const afterEdges = contactEdgeCount(assignments.filter((assignment) => !assignment.shortfall));
    showToast(afterEdges < beforeEdges ? `Reduced edge sharing by ${beforeEdges - afterEdges}` : "No cleaner move found");
  } finally {
    clearInterval(countdownTimer);
    optimizeFurtherButton.disabled = false;
    if (fillGapsButton) fillGapsButton.disabled = false;
    setOptimizeButtonText("Optimize");
  }
});

if (fillGapsButton) fillGapsButton.addEventListener("click", async () => {
  if (fillGapsButton.disabled) return;

  const durationMs = 30000;
  const deadline = Date.now() + durationMs;
  const beforeOpen = countEnemyOpenings(assignments);
  const setCountdown = (seconds) => {
    setFillGapsButtonText(seconds > 0 ? `Filling ${seconds}s` : "Finalizing");
  };
  const refreshCountdown = () => {
    setCountdown(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
  };
  fillGapsButton.disabled = true;
  if (optimizeFurtherButton) optimizeFurtherButton.disabled = true;
  refreshCountdown();
  const countdownTimer = setInterval(refreshCountdown, 250);
  showToast("Gap fill started");

  try {
    await sleep(60);
    const filledActive = await fillActiveGaps(assignments, {
      durationMs,
      onProgress: setCountdown,
    });
    assignments = rebalanceAllianceOwnership([...filledActive, ...assignments.filter((assignment) => assignment.shortfall)]);
    enemyOpenCount = countEnemyOpenings(assignments);
    renderStats();
    renderMap();
    renderLegend();
    renderAssignmentTable();
    saveState();

    const removed = beforeOpen - enemyOpenCount;
    if (!enemyOpenCount) {
      showToast("Mud sealed");
    } else {
      showToast(removed > 0 ? `Filled ${removed} enemy ${removed === 1 ? "gap" : "gaps"}` : "No gap fill found");
    }
  } finally {
    clearInterval(countdownTimer);
    fillGapsButton.disabled = false;
    if (optimizeFurtherButton) optimizeFurtherButton.disabled = false;
    setFillGapsButtonText("Fill Gaps");
  }
});

assignmentTable.addEventListener("input", (event) => {
  const input = event.target.closest(".assignment-name-input");
  if (!input) return;
  state.hqNames = state.hqNames || {};
  if (input.value.trim()) {
    state.hqNames[input.dataset.nameKey] = input.value;
  } else {
    delete state.hqNames[input.dataset.nameKey];
  }
  saveState();
});
assignmentTable.addEventListener("click", (event) => {
  const copyButton = event.target.closest(".row-copy");
  if (!copyButton) return;
  const row = copyButton.closest(".table-row");
  const nameInput = row?.querySelector(".assignment-name-input");
  const nameKey = nameInput?.dataset.nameKey;
  const assignment = assignments.find((item) => !item.shortfall && assignmentNameKey(item) === nameKey);
  const copyLine = assignment ? formatAssignmentCopyLine(assignment, null, nameInput.value) : copyButton.dataset.copyText;
  copyText(copyLine, "Coordinate copied");
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

document.querySelector("#copy-discord")?.addEventListener("click", () => {
  copyText(buildCoordinateText(true));
});

document.querySelector("#download-map").addEventListener("click", () => {
  downloadMapJpg();
});

document.querySelector("#toggle-enemy")?.addEventListener("click", (event) => {
  showEnemyPlacements = !showEnemyPlacements;
  event.currentTarget.textContent = showEnemyPlacements ? "Hide Enemy Placements" : "Show Enemy Placements";
  renderMap();
});

document.querySelector("#download-config").addEventListener("click", () => {
  downloadConfiguration();
});

document.querySelector("#upload-config").addEventListener("click", () => {
  configFileInput.click();
});

configFileInput.addEventListener("change", () => {
  const [file] = configFileInput.files || [];
  if (file) importConfigurationFile(file);
  configFileInput.value = "";
});

document.addEventListener("pointerdown", (event) => {
  if (!mapFrame.contains(event.target)) disarmMapInteraction();
});

document.querySelector("#reset-button").addEventListener("click", () => {
  state = structuredClone(defaultState);
  localStorage.removeItem(storageKey);
  renderAll();
  showToast("Planner reset");
});

renderAll();
