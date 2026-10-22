import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { caseExpressionSchema, type CaseExpression } from "../case-expression.js";
import { valuefrom1Schema, type Valuefrom1 } from "./valuefrom1.js";

/**
 * Expression that computes the value. Supported expression forms: (1) JMESPath string (default for
 * plain strings), (2) typed JMESPath object {"type":"jp"|"jmespath","expression":"..."}, or (3)
 * typed CEL object {"type":"cel","expression":"..."}. Mutually exclusive with value.
 */
export type Valuefrom = Valuefrom1 | CaseExpression | string;

export const valuefromSchema: Schema<Valuefrom> = s.of<Valuefrom>(
  s.union([s.lazy(() => valuefrom1Schema), s.lazy(() => caseExpressionSchema), s.string()]),
);
