import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionValueSchema, type DimensionValue } from "./dimension-value.js";

/** Summarizes dimension values from a row for this pivot. */
export type PivotDimensionHeader = {
  /** Values of multiple dimensions in a pivot. */
  dimensionValues?: DimensionValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pivotDimensionHeaderSchema: Schema<PivotDimensionHeader> = s.object<PivotDimensionHeader>(
  {
    dimensionValues: s.optional(s.array(s.lazy(() => dimensionValueSchema))),
  },
  { additionalProperties: s.json() },
);
