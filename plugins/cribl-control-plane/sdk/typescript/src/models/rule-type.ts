import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of event-breaking rule to apply when creating a new inline ruleset. */
export const RuleType = {
  Regex: "regex",
} as const;
export type RuleType = (typeof RuleType)[keyof typeof RuleType] | (string & {});

export const ruleTypeSchema: EnumSchema<RuleType> = s.enumOf<RuleType>(RuleType);
