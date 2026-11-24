import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The accuracy metric used to optimize the predictor. */
export const OptimizationMetric = {
  Wape: "WAPE",
  Rmse: "RMSE",
  AverageWeightedQuantileLoss: "AverageWeightedQuantileLoss",
  Mase: "MASE",
  Mape: "MAPE",
} as const;
export type OptimizationMetric = (typeof OptimizationMetric)[keyof typeof OptimizationMetric] | (string & {});

export const optimizationMetricSchema: EnumSchema<OptimizationMetric> =
  s.enumOf<OptimizationMetric>(OptimizationMetric);
