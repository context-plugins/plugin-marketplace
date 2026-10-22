import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of event-breaking rule to apply when creating a new inline ruleset. */
export const RuleType4 = {
  Csv: "csv",
} as const;
export type RuleType4 = (typeof RuleType4)[keyof typeof RuleType4] | (string & {});

export const ruleType4Schema: EnumSchema<RuleType4> = s.enumOf<RuleType4>(RuleType4);
