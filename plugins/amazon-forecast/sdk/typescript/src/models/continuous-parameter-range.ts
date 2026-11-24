import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scalingTypeSchema, type ScalingType } from "./scaling-type.js";

export type ContinuousParameterRange = {
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
   * than 0. ReverseLogarithmic hyperparameter tuning searches the values in the hyperparameter
   * range by using a reverse logarithmic scale. Re
   */
  scalingType?: ScalingType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const continuousParameterRangeSchema: Schema<ContinuousParameterRange> =
  s.object<ContinuousParameterRange>(
    {
      name: s.string(),
      maxValue: s.float64(),
      minValue: s.float64(),
      scalingType: s.optional(s.lazy(() => scalingTypeSchema)),
      _keysMap: {
        name: "Name",
        maxValue: "MaxValue",
        minValue: "MinValue",
        scalingType: "ScalingType",
      },
    },
    { additionalProperties: s.json() },
  );
