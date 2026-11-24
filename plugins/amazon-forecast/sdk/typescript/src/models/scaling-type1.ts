import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values: Auto
 * Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter. Linear
 * Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.
 * Logarithmic Hyperparameter tuning searches the values in the hyperparameter range by using a
 * logarithmic scale. Logarithmic scaling works only for ranges that have values greater than 0.
 * ReverseLogarithmic Not supported for IntegerParameterRange. Reverse logarithmic scaling works
 * only for ranges that are entirely w
 */
export const ScalingType1 = {
  Auto: "Auto",
  Linear: "Linear",
  Logarithmic: "Logarithmic",
  ReverseLogarithmic: "ReverseLogarithmic",
} as const;
export type ScalingType1 = (typeof ScalingType1)[keyof typeof ScalingType1] | (string & {});

export const scalingType1Schema: EnumSchema<ScalingType1> = s.enumOf<ScalingType1>(ScalingType1);
