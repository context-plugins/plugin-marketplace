import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { baselineMetricSchema, type BaselineMetric } from "./baseline-metric.js";

export type PredictorBaseline = {
  /**
   * The initial accuracy metrics for the predictor. Use these metrics as a baseline for comparison
   * purposes as you use your predictor and the metrics change.
   */
  baselineMetrics?: BaselineMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const predictorBaselineSchema: Schema<PredictorBaseline> = s.object<PredictorBaseline>(
  {
    baselineMetrics: s.optional(s.array(s.lazy(() => baselineMetricSchema))),
    _keysMap: {
      baselineMetrics: "BaselineMetrics",
    },
  },
  { additionalProperties: s.json() },
);
