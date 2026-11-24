import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Tier of the Subscription (not required) */
export const SubscriptionsPatchRequestSubscriptionsItemTier = {
  Free: "free",
  Premium: "premium",
} as const;
export type SubscriptionsPatchRequestSubscriptionsItemTier =
  | (typeof SubscriptionsPatchRequestSubscriptionsItemTier)[keyof typeof SubscriptionsPatchRequestSubscriptionsItemTier]
  | (string & {});

export const subscriptionsPatchRequestSubscriptionsItemTierSchema: EnumSchema<SubscriptionsPatchRequestSubscriptionsItemTier> =
  s.enumOf<SubscriptionsPatchRequestSubscriptionsItemTier>(SubscriptionsPatchRequestSubscriptionsItemTier);
