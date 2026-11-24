import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the subscription. */
export const SubscriptionDataStatus = {
  Validating: "validating",
  Invalid: "invalid",
  Pending: "pending",
  Active: "active",
  Inactive: "inactive",
  NeedsAttention: "needs_attention",
} as const;
export type SubscriptionDataStatus =
  | (typeof SubscriptionDataStatus)[keyof typeof SubscriptionDataStatus]
  | (string & {});

export const subscriptionDataStatusSchema: EnumSchema<SubscriptionDataStatus> =
  s.enumOf<SubscriptionDataStatus>(SubscriptionDataStatus);
