export const PROCESS_COLORS = [
  "#6366f1",
  "#ec4899",
  "#14b8a6",
  "#f59e0b",
  "#8b5cf6",
  "#ef4444",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#a855f7",
];

export function getProcessColor(processId, allIds) {
  const index = allIds.indexOf(processId);
  return PROCESS_COLORS[index % PROCESS_COLORS.length];
}

export const ALGORITHM_COLORS = {
  fcfs: { bg: "#dbeafe", text: "#1d4ed8", border: "#93c5fd" },
  sjf: { bg: "#dcfce7", text: "#15803d", border: "#86efac" },
  priority: { bg: "#fce7f3", text: "#be185d", border: "#f9a8d4" },
  roundRobin: { bg: "#fef3c7", text: "#b45309", border: "#fcd34d" },
};
