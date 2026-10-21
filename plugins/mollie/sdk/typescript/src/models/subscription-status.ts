import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subscription's current status is directly related to the status of the underlying customer or
 * mandate that is enabling the subscription.
 */
export const SubscriptionStatus = {
  Pending: "pending",
  Active: "active",
  Canceled: "canceled",
  Suspended: "suspended",
  Completed: "completed",
} as const;
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus] | (string & {});

export const subscriptionStatusSchema: EnumSchema<SubscriptionStatus> =
  s.enumOf<SubscriptionStatus>(SubscriptionStatus);
