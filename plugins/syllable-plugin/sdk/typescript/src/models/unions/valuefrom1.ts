import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { celExpressionSchema, type CelExpression } from "../cel-expression.js";
import { jmesPathExpressionSchema, type JmesPathExpression } from "../jmes-path-expression.js";

export type Valuefrom1 =
  | (CelExpression & { type: "cel" })
  | (JmesPathExpression & { type: "jmespath" })
  | (JmesPathExpression & { type: "jp" });

export const valuefrom1Schema: Schema<Valuefrom1> = s.discriminatedUnion<Valuefrom1>("type", {
  cel: celExpressionSchema,
  jmespath: jmesPathExpressionSchema,
  jp: jmesPathExpressionSchema,
});
