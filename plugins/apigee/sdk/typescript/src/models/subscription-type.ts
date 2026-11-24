import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of
 * the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes
 * only) or paid (full subscription has been purchased). See [Apigee
 * pricing](https://cloud.google.com/apigee/pricing/).
 */
export const SubscriptionType = {
  SubscriptionTypeUnspecified: "SUBSCRIPTION_TYPE_UNSPECIFIED",
  Paid: "PAID",
  Trial: "TRIAL",
} as const;
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType] | (string & {});

export const subscriptionTypeSchema: EnumSchema<SubscriptionType> =
  s.enumOf<SubscriptionType>(SubscriptionType);
