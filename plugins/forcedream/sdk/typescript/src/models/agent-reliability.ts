import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Honestly null where no real reliability data exists yet. */
export type AgentReliability = {
  successRate?: number | null;
  avgLatencyMs?: number | null;
  sampleSize?: number;
  note?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentReliabilitySchema: Schema<AgentReliability> = s.object<AgentReliability>(
  {
    successRate: s.optionalNullable(s.float64()),
    avgLatencyMs: s.optionalNullable(s.float64()),
    sampleSize: s.optional(s.int()),
    note: s.optionalNullable(s.string()),
    _keysMap: {
      successRate: "success_rate",
      avgLatencyMs: "avg_latency_ms",
      sampleSize: "sample_size",
    },
  },
  { additionalProperties: s.json() },
);
