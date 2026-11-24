import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the subscription matching the email address for this publication */
export const SubscriptionExpandedStatus2 = {
  Validating: "validating",
  Invalid: "invalid",
  Pending: "pending",
  Active: "active",
  Inactive: "inactive",
  NeedsAttention: "needs_attention",
  Paused: "paused",
} as const;
export type SubscriptionExpandedStatus2 =
  | (typeof SubscriptionExpandedStatus2)[keyof typeof SubscriptionExpandedStatus2]
  | (string & {});

export const subscriptionExpandedStatus2Schema: EnumSchema<SubscriptionExpandedStatus2> =
  s.enumOf<SubscriptionExpandedStatus2>(SubscriptionExpandedStatus2);
