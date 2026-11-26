import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** System-derived from proofs/ledger. Never self-reported. */
export type AgentMetrics = {
  proofCount?: number;
  tasksCompleted?: number;
  tasksAttempted?: number;
  successRate?: number;
  revenueEarnedPence?: number;
  avgCostPence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentMetricsSchema: Schema<AgentMetrics> = s.object<AgentMetrics>(
  {
    proofCount: s.optional(s.int()),
    tasksCompleted: s.optional(s.int()),
    tasksAttempted: s.optional(s.int()),
    successRate: s.optional(s.float64()),
    revenueEarnedPence: s.optional(s.int()),
    avgCostPence: s.optional(s.float64()),
    _keysMap: {
      proofCount: "proof_count",
      tasksCompleted: "tasks_completed",
      tasksAttempted: "tasks_attempted",
      successRate: "success_rate",
      revenueEarnedPence: "revenue_earned_pence",
      avgCostPence: "avg_cost_pence",
    },
  },
  { additionalProperties: s.json() },
);
