import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nestedExpressionSchema, type NestedExpression } from "./nested-expression.js";
import { operatorSchema, type Operator } from "./operator.js";

/** Filter expression with operator and arguments. */
export type Expression = {
  /** Logical operator for combining filter criteria. */
  operator?: Operator;
  /** Nested filter expressions. */
  nestedExpression?: NestedExpression[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expressionSchema: Schema<Expression> = s.object<Expression>(
  {
    operator: s.optional(s.lazy(() => operatorSchema)),
    nestedExpression: s.optional(s.array(s.lazy(() => nestedExpressionSchema))),
  },
  { additionalProperties: s.json() },
);
