import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  categoricalParameterRangeSchema,
  type CategoricalParameterRange,
} from "./categorical-parameter-range.js";
import {
  continuousParameterRangeSchema,
  type ContinuousParameterRange,
} from "./continuous-parameter-range.js";
import { integerParameterRangeSchema, type IntegerParameterRange } from "./integer-parameter-range.js";

export type ParameterRanges = {
  /** Specifies the tunable range for each categorical hyperparameter. */
  categoricalParameterRanges?: CategoricalParameterRange[];
  /** Specifies the tunable range for each continuous hyperparameter. */
  continuousParameterRanges?: ContinuousParameterRange[];
  /** Specifies the tunable range for each integer hyperparameter. */
  integerParameterRanges?: IntegerParameterRange[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const parameterRangesSchema: Schema<ParameterRanges> = s.object<ParameterRanges>(
  {
    categoricalParameterRanges: s.optional(s.array(s.lazy(() => categoricalParameterRangeSchema))),
    continuousParameterRanges: s.optional(s.array(s.lazy(() => continuousParameterRangeSchema))),
    integerParameterRanges: s.optional(s.array(s.lazy(() => integerParameterRangeSchema))),
    _keysMap: {
      categoricalParameterRanges: "CategoricalParameterRanges",
      continuousParameterRanges: "ContinuousParameterRanges",
      integerParameterRanges: "IntegerParameterRanges",
    },
  },
  { additionalProperties: s.json() },
);
