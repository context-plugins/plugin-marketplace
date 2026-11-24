import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current tier of the subscription. */
export const SubscriptionExpandedSubscriptionTier = {
  Free: "free",
  Premium: "premium",
} as const;
export type SubscriptionExpandedSubscriptionTier =
  | (typeof SubscriptionExpandedSubscriptionTier)[keyof typeof SubscriptionExpandedSubscriptionTier]
  | (string & {});

export const subscriptionExpandedSubscriptionTierSchema: EnumSchema<SubscriptionExpandedSubscriptionTier> =
  s.enumOf<SubscriptionExpandedSubscriptionTier>(SubscriptionExpandedSubscriptionTier);
