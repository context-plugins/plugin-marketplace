import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { celExpressionSchema, type CelExpression } from "../cel-expression.js";
import { jmesPathExpressionSchema, type JmesPathExpression } from "../jmes-path-expression.js";

export type From1 =
  | (CelExpression & { type: "cel" })
  | (JmesPathExpression & { type: "jmespath" })
  | (JmesPathExpression & { type: "jp" });

export const from1Schema: Schema<From1> = s.discriminatedUnion<From1>("type", {
  cel: celExpressionSchema,
  jmespath: jmesPathExpressionSchema,
  jp: jmesPathExpressionSchema,
});
