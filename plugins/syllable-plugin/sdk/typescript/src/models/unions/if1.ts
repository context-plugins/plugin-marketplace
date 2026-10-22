import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { celExpressionSchema, type CelExpression } from "../cel-expression.js";
import { jmesPathExpressionSchema, type JmesPathExpression } from "../jmes-path-expression.js";

export type If1 =
  | (CelExpression & { type: "cel" })
  | (JmesPathExpression & { type: "jmespath" })
  | (JmesPathExpression & { type: "jp" });

export const if1Schema: Schema<If1> = s.discriminatedUnion<If1>("type", {
  cel: celExpressionSchema,
  jmespath: jmesPathExpressionSchema,
  jp: jmesPathExpressionSchema,
});
