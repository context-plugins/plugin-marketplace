import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterExpressionSchema, type FilterExpression } from "./filter-expression.js";

/** The FilterExpressions in or_group have an OR relationship. */
export type FilterExpressionList1 = {
  /** A list of filter expressions. */
  expressions?: FilterExpression[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterExpressionList1Schema: Schema<FilterExpressionList1> = s.object<FilterExpressionList1>(
  {
    expressions: s.optional(s.array(s.lazy(() => filterExpressionSchema))),
  },
  { additionalProperties: s.json() },
);
