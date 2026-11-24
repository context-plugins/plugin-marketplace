import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What applies before the step's action: none, gate (check_gate for `action`), approval
 * (request_approval) or review (request_review). none when omitted
 */
export const Rule = {
  None: "none",
  Gate: "gate",
  Approval: "approval",
  Review: "review",
} as const;
export type Rule = (typeof Rule)[keyof typeof Rule] | (string & {});

export const ruleSchema: EnumSchema<Rule> = s.enumOf<Rule>(Rule);
