import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MaskingRule = {
  /** Pattern to replace. Use /g to replace all matches. */
  matchRegex: string;
  /**
   * A JavaScript expression or literal to replace the matching content. Capturing groups can be
   * referenced as g1, g2, and so on, and event fields as event.<fieldName>.
   */
  replaceExpr: string;
  /** Set to No to disable the evaluation of an individual rule */
  disabled?: boolean;
};

export const maskingRuleSchema: Schema<MaskingRule> = s.object<MaskingRule>({
  matchRegex: s.string(),
  replaceExpr: s.string(),
  disabled: s.optional(s.boolean()),
});
