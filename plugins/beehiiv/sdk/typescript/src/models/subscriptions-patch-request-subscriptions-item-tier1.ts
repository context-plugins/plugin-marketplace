import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional parameter to set the tier for this subscription. */
export const SubscriptionsPatchRequestSubscriptionsItemTier1 = {
  Free: "free",
  Premium: "premium",
} as const;
export type SubscriptionsPatchRequestSubscriptionsItemTier1 =
  | (typeof SubscriptionsPatchRequestSubscriptionsItemTier1)[keyof typeof SubscriptionsPatchRequestSubscriptionsItemTier1]
  | (string & {});

export const subscriptionsPatchRequestSubscriptionsItemTier1Schema: EnumSchema<SubscriptionsPatchRequestSubscriptionsItemTier1> =
  s.enumOf<SubscriptionsPatchRequestSubscriptionsItemTier1>(SubscriptionsPatchRequestSubscriptionsItemTier1);
