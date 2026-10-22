import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScanningRuleset = {
  /** The ID of the ruleset to use for the scan */
  rulesetId: string;
  /**
   * A JavaScript expression or literal to replace the matching content. Capturing groups can be
   * referenced as g1, g2, and so on, and event fields as event.<fieldName>.
   */
  replaceExpr: string;
  /** If <code>true</code>, disable this rule so that it is not applied during scanning. */
  disabled?: boolean;
};

export const scanningRulesetSchema: Schema<ScanningRuleset> = s.object<ScanningRuleset>({
  rulesetId: s.string(),
  replaceExpr: s.string(),
  disabled: s.optional(s.boolean()),
});
