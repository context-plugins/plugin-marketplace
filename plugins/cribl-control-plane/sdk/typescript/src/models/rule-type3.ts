import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of event-breaking rule to apply when creating a new inline ruleset. */
export const RuleType3 = {
  Header: "header",
} as const;
export type RuleType3 = (typeof RuleType3)[keyof typeof RuleType3] | (string & {});

export const ruleType3Schema: EnumSchema<RuleType3> = s.enumOf<RuleType3>(RuleType3);
