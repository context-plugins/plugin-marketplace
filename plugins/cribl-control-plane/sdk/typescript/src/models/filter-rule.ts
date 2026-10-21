import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilterRule = {
  /** JavaScript expression applied to pods objects. Return 'true' to include it. */
  filter: string;
  /** Optional description of this rule's purpose */
  description?: string;
};

export const filterRuleSchema: Schema<FilterRule> = s.object<FilterRule>({
  filter: s.string(),
  description: s.optional(s.string()),
});
