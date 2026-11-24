import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterExpressionSchema, type FilterExpression } from "./filter-expression.js";

/** The FilterExpressions in and_group have an AND relationship. */
export type FilterExpressionList2 = {
  /** A list of filter expressions. */
  expressions?: FilterExpression[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterExpressionList2Schema: Schema<FilterExpressionList2> = s.object<FilterExpressionList2>(
  {
    expressions: s.optional(s.array(s.lazy(() => filterExpressionSchema))),
  },
  { additionalProperties: s.json() },
);
