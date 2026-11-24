import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scalingType1Schema, type ScalingType1 } from "./scaling-type1.js";

export type IntegerParameterRange = {
  /** The name of the hyperparameter to tune. */
  name: string;
  /** The maximum tunable value of the hyperparameter. */
  maxValue: number;
  /** The minimum tunable value of the hyperparameter. */
  minValue: number;
  /**
   * The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values:
   * Auto Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.
   * Linear Hyperparameter tuning searches the values in the hyperparameter range by using a linear
   * scale. Logarithmic Hyperparameter tuning searches the values in the hyperparameter range by
   * using a logarithmic scale. Logarithmic scaling works only for ranges that have values greater
   * than 0. ReverseLogarithmic Not supported for IntegerParameterRange. Reverse logarithmic scaling
   * works only for ranges that are entirely w
   */
  scalingType?: ScalingType1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const integerParameterRangeSchema: Schema<IntegerParameterRange> = s.object<IntegerParameterRange>(
  {
    name: s.string(),
    maxValue: s.int(),
    minValue: s.int(),
    scalingType: s.optional(s.lazy(() => scalingType1Schema)),
    _keysMap: {
      name: "Name",
      maxValue: "MaxValue",
      minValue: "MinValue",
      scalingType: "ScalingType",
    },
  },
  { additionalProperties: s.json() },
);
