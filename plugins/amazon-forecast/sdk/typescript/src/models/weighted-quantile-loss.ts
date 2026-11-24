import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WeightedQuantileLoss = {
  /**
   * The quantile. Quantiles divide a probability distribution into regions of equal probability.
   * For example, if the distribution was divided into 5 regions of equal probability, the quantiles
   * would be 0.2, 0.4, 0.6, and 0.8.
   */
  quantile?: number;
  /**
   * The difference between the predicted value and the actual value over the quantile, weighted
   * (normalized) by dividing by the sum over all quantiles.
   */
  lossValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const weightedQuantileLossSchema: Schema<WeightedQuantileLoss> = s.object<WeightedQuantileLoss>(
  {
    quantile: s.optional(s.float64()),
    lossValue: s.optional(s.float64()),
    _keysMap: {
      quantile: "Quantile",
      lossValue: "LossValue",
    },
  },
  { additionalProperties: s.json() },
);
