import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { durationMetricsSchema, type DurationMetrics } from "./duration-metrics.js";

/** Job metrics */
export type Metrics = {
  /** Total number of runs */
  totalRuns?: number;
  /** Number of successful runs */
  successfulRuns?: number;
  /** Number of failed runs */
  failedRuns?: number;
  /** Success rate as a decimal */
  successRate?: number;
  /** Duration statistics */
  durationMetrics?: DurationMetrics;
  /** Total credits consumed */
  totalCreditsUsed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricsSchema: Schema<Metrics> = s.object<Metrics>(
  {
    totalRuns: s.optional(s.int()),
    successfulRuns: s.optional(s.int()),
    failedRuns: s.optional(s.int()),
    successRate: s.optional(s.float64()),
    durationMetrics: s.optional(s.lazy(() => durationMetricsSchema)),
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
