import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { evaluateField3Schema, type EvaluateField3 } from "./evaluate-field3.js";
import { maskingRuleSchema, type MaskingRule } from "./masking-rule.js";

export type FunctionConfSchemaMask = {
  /**
   * List of masking rules, each specifying a regex to match and an expression to replace matched
   * content.
   */
  rules?: MaskingRule[];
  /**
   * Fields on which to apply the masking rules. Supports * wildcards, except when used on internal
   * fields.
   */
  fields?: string[];
  /** Depth to which the Mask Function will search for fields to mask */
  depth?: number;
  /** Fields to evaluate if one or more masking rules are matched */
  flags?: EvaluateField3[];
};

export const functionConfSchemaMaskSchema: Schema<FunctionConfSchemaMask> = s.object<FunctionConfSchemaMask>({
  rules: s.optional(s.array(s.lazy(() => maskingRuleSchema))),
  fields: s.optional(s.array(s.string())),
  depth: s.optional(s.int()),
  flags: s.optional(s.array(s.lazy(() => evaluateField3Schema))),
});
