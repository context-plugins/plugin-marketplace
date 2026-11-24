import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorMetricSchema, type ErrorMetric } from "./error-metric.js";
import { weightedQuantileLossSchema, type WeightedQuantileLoss } from "./weighted-quantile-loss.js";

export type Metrics = {
  /** The root-mean-square error (RMSE). */
  rmse?: number;
  /**
   * An array of weighted quantile losses. Quantiles divide a probability distribution into regions
   * of equal probability. The distribution in this case is the loss function.
   */
  weightedQuantileLosses?: WeightedQuantileLoss[];
  /**
   * Provides detailed error metrics for each forecast type. Metrics include root-mean square-error
   * (RMSE), mean absolute percentage error (MAPE), mean absolute scaled error (MASE), and weighted
   * average percentage error (WAPE).
   */
  errorMetrics?: ErrorMetric[];
  /** The average value of all weighted quantile losses. */
  averageWeightedQuantileLoss?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricsSchema: Schema<Metrics> = s.object<Metrics>(
  {
    rmse: s.optional(s.float64()),
    weightedQuantileLosses: s.optional(s.array(s.lazy(() => weightedQuantileLossSchema))),
    errorMetrics: s.optional(s.array(s.lazy(() => errorMetricSchema))),
    averageWeightedQuantileLoss: s.optional(s.float64()),
    _keysMap: {
      rmse: "RMSE",
      weightedQuantileLosses: "WeightedQuantileLosses",
      errorMetrics: "ErrorMetrics",
      averageWeightedQuantileLoss: "AverageWeightedQuantileLoss",
    },
  },
  { additionalProperties: s.json() },
);
