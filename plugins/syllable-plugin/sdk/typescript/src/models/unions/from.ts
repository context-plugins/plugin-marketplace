import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { caseExpressionSchema, type CaseExpression } from "../case-expression.js";
import { from1Schema, type From1 } from "./from1.js";

/**
 * Expression evaluated against the parsed tool response body (the JSON the external tool returned).
 * Supported forms: (1) JMESPath string (default for plain strings) — a bare field name for raw
 * passthrough, or a boolean/computed expression for derived values, (2) typed JMESPath object
 * {"type":"jp"|"jmespath","expression":"..."}, or (3) typed CEL object
 * {"type":"cel","expression":"..."}.
 */
export type From = From1 | CaseExpression | string;

export const fromSchema: Schema<From> = s.of<From>(
  s.union([s.lazy(() => from1Schema), s.lazy(() => caseExpressionSchema), s.string()]),
);
