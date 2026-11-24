import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { predictorBaselineSchema, type PredictorBaseline } from "./predictor-baseline.js";

export type Baseline = {
  predictorBaseline?: PredictorBaseline;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baselineSchema: Schema<Baseline> = s.object<Baseline>(
  {
    predictorBaseline: s.optional(s.lazy(() => predictorBaselineSchema)),
    _keysMap: {
      predictorBaseline: "PredictorBaseline",
    },
  },
  { additionalProperties: s.json() },
);
