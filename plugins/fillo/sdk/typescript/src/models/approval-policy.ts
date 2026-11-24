import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `ask` sends every outward action to a human approval link first; `auto` runs Tier B directly.
 * Destructive actions always need the link.
 */
export const ApprovalPolicy = {
  Ask: "ask",
  Auto: "auto",
} as const;
export type ApprovalPolicy = (typeof ApprovalPolicy)[keyof typeof ApprovalPolicy] | (string & {});

export const approvalPolicySchema: EnumSchema<ApprovalPolicy> = s.enumOf<ApprovalPolicy>(ApprovalPolicy);
