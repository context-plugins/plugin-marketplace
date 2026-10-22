import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { caseExpressionSchema, type CaseExpression } from "../case-expression.js";
import { expression1Schema, type Expression1 } from "./expression1.js";

/**
 * Expression for task output/logic. Supported expression forms: (1) JMESPath string (default for
 * plain strings), (2) typed JMESPath object {"type":"jp"|"jmespath","expression":"..."}, or (3)
 * typed CEL object {"type":"cel","expression":"..."}.
 */
export type Expression = Expression1 | CaseExpression | string;

export const expressionSchema: Schema<Expression> = s.of<Expression>(
  s.union([s.lazy(() => expression1Schema), s.lazy(() => caseExpressionSchema), s.string()]),
);
