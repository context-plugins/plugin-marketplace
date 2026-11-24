import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterExpressionSchema, type FilterExpression } from "./filter-expression.js";

/** A list of filter expressions. */
export type FilterExpressionList = {
  /** A list of filter expressions. */
  expressions?: FilterExpression[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterExpressionListSchema: Schema<FilterExpressionList> = s.object<FilterExpressionList>(
  {
    expressions: s.optional(s.array(s.lazy(() => filterExpressionSchema))),
  },
  { additionalProperties: s.json() },
);
