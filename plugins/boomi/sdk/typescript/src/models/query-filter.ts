import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { expressionSchema, type Expression } from "./expression.js";

/** Filter expression for narrowing query results. */
export type QueryFilter = {
  /** Filter expression with operator and arguments. */
  expression?: Expression;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryFilterSchema: Schema<QueryFilter> = s.object<QueryFilter>(
  {
    expression: s.optional(s.lazy(() => expressionSchema)),
  },
  { additionalProperties: s.json() },
);
