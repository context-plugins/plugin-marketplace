import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executorMetricsSchema, type ExecutorMetrics } from "./executor-metrics.js";

export type ExecutorPeakMetricsDistributions = {
  quantiles?: number[];
  executorMetrics?: ExecutorMetrics[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executorPeakMetricsDistributionsSchema: Schema<ExecutorPeakMetricsDistributions> =
  s.object<ExecutorPeakMetricsDistributions>(
    {
      quantiles: s.optional(s.array(s.float64())),
      executorMetrics: s.optional(s.array(s.lazy(() => executorMetricsSchema))),
    },
    { additionalProperties: s.json() },
  );
