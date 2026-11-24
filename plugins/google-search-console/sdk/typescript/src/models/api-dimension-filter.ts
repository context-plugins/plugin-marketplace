import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { operatorSchema, type Operator } from "./operator.js";

/**
 * A filter test to be applied to each row in the data set, where a match can return the row.
 * Filters are string comparisons, and values and dimension names are not case-sensitive. Individual
 * filters are either AND'ed or OR'ed within their parent filter group, according to the group's
 * group type. You do not need to group by a specified dimension to filter against it.
 */
export type ApiDimensionFilter = {
  dimension?: Dimension;
  expression?: string;
  operator?: Operator;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiDimensionFilterSchema: Schema<ApiDimensionFilter> = s.object<ApiDimensionFilter>(
  {
    dimension: s.optional(s.lazy(() => dimensionSchema)),
    expression: s.optional(s.string()),
    operator: s.optional(s.lazy(() => operatorSchema)),
  },
  { additionalProperties: s.json() },
);
