import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Returns whether or not the tier has any active prices. */
export const SubscriptionTierInfoStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type SubscriptionTierInfoStatus =
  | (typeof SubscriptionTierInfoStatus)[keyof typeof SubscriptionTierInfoStatus]
  | (string & {});

export const subscriptionTierInfoStatusSchema: EnumSchema<SubscriptionTierInfoStatus> =
  s.enumOf<SubscriptionTierInfoStatus>(SubscriptionTierInfoStatus);
