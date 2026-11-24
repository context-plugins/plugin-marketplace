import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the
 * metric's value. For example if pivots = {{"browser", "Chrome"}} and metric_name = "Sessions",
 * then the rows will be sorted based on Sessions in Chrome.
 * ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari |
 * Safari ---------|----------|----------------|----------|---------------- Country | Sessions |
 * Pages/Sessions | Sessions | Pages/Sessions
 * ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1
 * ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1
 * ---------|----------|----------------|----------|----------------
 */
export type PivotSelection = {
  /** Order by only when the named dimension is this value. */
  dimensionValue?: string;
  /** Must be a dimension name from the request. */
  dimensionName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pivotSelectionSchema: Schema<PivotSelection> = s.object<PivotSelection>(
  {
    dimensionValue: s.optional(s.string()),
    dimensionName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
