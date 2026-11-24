import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featureDataPointSchema, type FeatureDataPoint } from "./feature-data-point.js";

export type ResultWithFeatureData = {
  evaluations: FeatureDataPoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultWithFeatureDataSchema: Schema<ResultWithFeatureData> = s.object<ResultWithFeatureData>(
  {
    evaluations: s.array(s.lazy(() => featureDataPointSchema)),
  },
  { additionalProperties: s.json() },
);
