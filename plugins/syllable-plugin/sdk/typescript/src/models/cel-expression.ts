import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type2, type2Schema } from "./type2.js";

/**
 * Google CEL expression object.
 *
 * Use this object form when you want CEL syntax: {"type": "cel", "expression": "inputs.count + 1"}
 * See https://github.com/google/cel-spec/blob/master/doc/langdef.md
 */
export type CelExpression = {
  /** CEL expression string. */
  expression: string;
  /**
   * CEL expression language selector. Use with object form {"type":"cel","expression":"..."}.
   *
   * @default Type2.Cel
   */
  type?: Type2;
};

export const celExpressionSchema: Schema<CelExpression> = s.object<CelExpression>({
  expression: s.string(),
  type: s.defaulted(type2Schema, Type2.Cel),
});
