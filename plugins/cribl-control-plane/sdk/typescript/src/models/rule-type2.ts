import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of event-breaking rule to apply when creating a new inline ruleset. */
export const RuleType2 = {
  JsonArray: "json_array",
} as const;
export type RuleType2 = (typeof RuleType2)[keyof typeof RuleType2] | (string & {});

export const ruleType2Schema: EnumSchema<RuleType2> = s.enumOf<RuleType2>(RuleType2);
