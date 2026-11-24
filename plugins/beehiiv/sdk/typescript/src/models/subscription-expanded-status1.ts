import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the subscription.<br>`validating` - The email address is being
 * validated.<br>`invalid` - The email address is invalid.<br>`pending` - The email address is
 * valid, but the subscription is pending double opt-in.<br>`active` - The email was valid and the
 * subscription is active.<br>`inactive` - The subscription was made inactive, possibly due to an
 * unsubscribe.<br>`needs_attention` - The subscription requires approval or denial.
 */
export const SubscriptionExpandedStatus1 = {
  Validating: "validating",
  Invalid: "invalid",
  Pending: "pending",
  Active: "active",
  Inactive: "inactive",
  NeedsAttention: "needs_attention",
  Paused: "paused",
} as const;
export type SubscriptionExpandedStatus1 =
  | (typeof SubscriptionExpandedStatus1)[keyof typeof SubscriptionExpandedStatus1]
  | (string & {});

export const subscriptionExpandedStatus1Schema: EnumSchema<SubscriptionExpandedStatus1> =
  s.enumOf<SubscriptionExpandedStatus1>(SubscriptionExpandedStatus1);
