import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { celExpressionSchema, type CelExpression } from "../cel-expression.js";
import { jmesPathExpressionSchema, type JmesPathExpression } from "../jmes-path-expression.js";

export type Expression1 =
  | (CelExpression & { type: "cel" })
  | (JmesPathExpression & { type: "jmespath" })
  | (JmesPathExpression & { type: "jp" });

export const expression1Schema: Schema<Expression1> = s.discriminatedUnion<Expression1>("type", {
  cel: celExpressionSchema,
  jmespath: jmesPathExpressionSchema,
  jp: jmesPathExpressionSchema,
});
