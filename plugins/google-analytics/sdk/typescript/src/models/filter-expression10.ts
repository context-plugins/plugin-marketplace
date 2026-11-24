import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterExpressionList1Schema, type FilterExpressionList1 } from "./filter-expression-list1.js";
import { filterExpressionList2Schema, type FilterExpressionList2 } from "./filter-expression-list2.js";
import { filterExpression1Schema, type FilterExpression1 } from "./filter-expression1.js";
import { filter2Schema, type Filter2 } from "./filter2.js";

/**
 * The filter clause of dimensions. `dimensionFilter` should be the same value as in your
 * `runReport` request.
 */
export type FilterExpression10 = {
  /** The FilterExpressions in or_group have an OR relationship. */
  orGroup?: FilterExpressionList1;
  /** The FilterExpression is NOT of not_expression. */
  notExpression?: FilterExpression1;
  /**
   * A primitive filter. In the same FilterExpression, all of the filter's field names need to be
   * either all dimensions or all metrics.
   */
  filter?: Filter2;
  /** The FilterExpressions in and_group have an AND relationship. */
  andGroup?: FilterExpressionList2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterExpression10Schema: Schema<FilterExpression10> = s.object<FilterExpression10>(
  {
    orGroup: s.optional(s.lazy(() => filterExpressionList1Schema)),
    notExpression: s.optional(s.lazy(() => filterExpression1Schema)),
    filter: s.optional(s.lazy(() => filter2Schema)),
    andGroup: s.optional(s.lazy(() => filterExpressionList2Schema)),
  },
  { additionalProperties: s.json() },
);
