import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type3, type3Schema } from "./type3.js";

/**
 * JMESPath expression object.
 *
 * Use this object form to explicitly mark JMESPath syntax: {"type": "jp", "expression":
 * "inputs.can_sign_consent == `true`"} See https://jmespath.org/specification.html#grammar
 */
export type JmesPathExpression = {
  /** JMESPath expression string. */
  expression: string;
  /**
   * JMESPath expression language selector. Use with object form
   * {"type":"jp"|"jmespath","expression":"..."}.
   *
   * @default Type3.Jp
   */
  type?: Type3;
};

export const jmesPathExpressionSchema: Schema<JmesPathExpression> = s.object<JmesPathExpression>({
  expression: s.string(),
  type: s.defaulted(type3Schema, Type3.Jp),
});
