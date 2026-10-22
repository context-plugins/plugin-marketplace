import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldOverrideSchema, type FieldOverride } from "./field-override.js";
import { inlineRuleSchema, type InlineRule } from "./inline-rule.js";

/**
 * Instance-level tuning applied after the rule set is merged. Managed by Cribl Security; not
 * intended for direct editing.
 */
export type LocalOverrides = {
  /** Rule IDs to silence entirely. */
  disabled?: string[];
  /** Patch scalar fields of a rule without copying its full definition. */
  fieldOverrides?: FieldOverride[];
  /** Full rule definitions authored here rather than delivered with the corpus. */
  inlineRules?: InlineRule[];
};

export const localOverridesSchema: Schema<LocalOverrides> = s.object<LocalOverrides>({
  disabled: s.optional(s.array(s.string())),
  fieldOverrides: s.optional(s.array(s.lazy(() => fieldOverrideSchema))),
  inlineRules: s.optional(s.array(s.lazy(() => inlineRuleSchema))),
});
