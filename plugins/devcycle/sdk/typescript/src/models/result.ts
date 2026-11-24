import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataPointSchema, type DataPoint } from "./data-point.js";
import { variationResultSchema, type VariationResult } from "./variation-result.js";

export type Result = {
  dataSeries: DataPoint[];
  variations: VariationResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    dataSeries: s.array(s.lazy(() => dataPointSchema)),
    variations: s.array(s.lazy(() => variationResultSchema)),
  },
  { additionalProperties: s.json() },
);
