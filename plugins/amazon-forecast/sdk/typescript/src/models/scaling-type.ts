import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values: Auto
 * Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter. Linear
 * Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.
 * Logarithmic Hyperparameter tuning searches the values in the hyperparameter range by using a
 * logarithmic scale. Logarithmic scaling works only for ranges that have values greater than 0.
 * ReverseLogarithmic hyperparameter tuning searches the values in the hyperparameter range by using
 * a reverse logarithmic scale. Re
 */
export const ScalingType = {
  Auto: "Auto",
  Linear: "Linear",
  Logarithmic: "Logarithmic",
  ReverseLogarithmic: "ReverseLogarithmic",
} as const;
export type ScalingType = (typeof ScalingType)[keyof typeof ScalingType] | (string & {});

export const scalingTypeSchema: EnumSchema<ScalingType> = s.enumOf<ScalingType>(ScalingType);
