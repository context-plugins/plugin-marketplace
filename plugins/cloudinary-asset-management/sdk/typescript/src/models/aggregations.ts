import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { range1Schema, type Range1 } from "./range1.js";
import { valueSchema, type Value } from "./value.js";

/**
 * Aggregation results when the aggregate parameter is used in the request. Only included when
 * aggregations are requested.
 */
export type Aggregations = {
  /**
   * Array of aggregation values when using simple aggregation (e.g., by format, resource_type,
   * etc.)
   */
  values?: Value[];
  /**
   * Array of range-based aggregation results when using range aggregation (e.g., bytes, width,
   * height, etc.)
   */
  ranges?: Range1[];
};

export const aggregationsSchema: Schema<Aggregations> = s.object<Aggregations>({
  values: s.optional(s.array(s.lazy(() => valueSchema))),
  ranges: s.optional(s.array(s.lazy(() => range1Schema))),
});
