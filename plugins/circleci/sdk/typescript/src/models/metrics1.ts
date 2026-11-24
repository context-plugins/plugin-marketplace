import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { durationMetrics1Schema, type DurationMetrics1 } from "./duration-metrics1.js";

/** Workflow metrics */
export type Metrics1 = {
  /** Total number of runs */
  totalRuns?: number;
  /** Number of successful runs */
  successfulRuns?: number;
  /** Number of failed runs */
  failedRuns?: number;
  /** Success rate as a decimal */
  successRate?: number;
  /** Duration statistics */
  durationMetrics?: DurationMetrics1;
  /** Total credits consumed */
  totalCreditsUsed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metrics1Schema: Schema<Metrics1> = s.object<Metrics1>(
  {
    totalRuns: s.optional(s.int()),
    successfulRuns: s.optional(s.int()),
    failedRuns: s.optional(s.int()),
    successRate: s.optional(s.float64()),
    durationMetrics: s.optional(s.lazy(() => durationMetrics1Schema)),
    totalCreditsUsed: s.optional(s.int()),
    _keysMap: {
      totalRuns: "total_runs",
      successfulRuns: "successful_runs",
      failedRuns: "failed_runs",
      successRate: "success_rate",
      durationMetrics: "duration_metrics",
      totalCreditsUsed: "total_credits_used",
    },
  },
  { additionalProperties: s.json() },
);
