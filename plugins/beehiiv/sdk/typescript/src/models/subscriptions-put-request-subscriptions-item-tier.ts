import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Tier of the Subscription (not required) */
export const SubscriptionsPutRequestSubscriptionsItemTier = {
  Free: "free",
  Premium: "premium",
} as const;
export type SubscriptionsPutRequestSubscriptionsItemTier =
  | (typeof SubscriptionsPutRequestSubscriptionsItemTier)[keyof typeof SubscriptionsPutRequestSubscriptionsItemTier]
  | (string & {});

export const subscriptionsPutRequestSubscriptionsItemTierSchema: EnumSchema<SubscriptionsPutRequestSubscriptionsItemTier> =
  s.enumOf<SubscriptionsPutRequestSubscriptionsItemTier>(SubscriptionsPutRequestSubscriptionsItemTier);
