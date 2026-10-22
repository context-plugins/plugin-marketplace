import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { caseExpressionSchema, type CaseExpression } from "../case-expression.js";
import { if1Schema, type If1 } from "./if1.js";

/**
 * Condition to decide whether this item executes. Supported expression forms: (1) JMESPath string
 * (default for plain strings), (2) typed JMESPath object
 * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
 * {"type":"cel","expression":"..."}. Example JMESPath string: "inputs.can_sign_consent == `true`".
 */
export type If = If1 | CaseExpression | string;

export const ifSchema: Schema<If> = s.of<If>(
  s.union([s.lazy(() => if1Schema), s.lazy(() => caseExpressionSchema), s.string()]),
);
