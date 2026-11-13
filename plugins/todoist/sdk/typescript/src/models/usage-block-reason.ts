import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Why a new run cannot start, or `null` when it can. `temporarily_unavailable` means existing holds
 * are the only blocker; `insufficient_credit` means the settled balance is at or below the
 * configured floor; `plan_required` means the user has no Pro, and the credit waits until they do;
 * `billing_paused` means the compute subscription was cancelled, and the credit waits for the next
 * top-up.
 */
export const UsageBlockReason = {
  TemporarilyUnavailable: "temporarily_unavailable",
  InsufficientCredit: "insufficient_credit",
  PlanRequired: "plan_required",
  BillingPaused: "billing_paused",
} as const;
export type UsageBlockReason = (typeof UsageBlockReason)[keyof typeof UsageBlockReason] | (string & {});

export const usageBlockReasonSchema: EnumSchema<UsageBlockReason> =
  s.enumOf<UsageBlockReason>(UsageBlockReason);
