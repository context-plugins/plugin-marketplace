import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional parameter to set the tier for this subscription. */
export const SubscriptionsPutRequestSubscriptionsItemTier1 = {
  Free: "free",
  Premium: "premium",
} as const;
export type SubscriptionsPutRequestSubscriptionsItemTier1 =
  | (typeof SubscriptionsPutRequestSubscriptionsItemTier1)[keyof typeof SubscriptionsPutRequestSubscriptionsItemTier1]
  | (string & {});

export const subscriptionsPutRequestSubscriptionsItemTier1Schema: EnumSchema<SubscriptionsPutRequestSubscriptionsItemTier1> =
  s.enumOf<SubscriptionsPutRequestSubscriptionsItemTier1>(SubscriptionsPutRequestSubscriptionsItemTier1);
