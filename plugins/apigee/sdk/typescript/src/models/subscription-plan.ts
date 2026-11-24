import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Subscription plan that the customer has purchased. Output only. */
export const SubscriptionPlan = {
  SubscriptionPlanUnspecified: "SUBSCRIPTION_PLAN_UNSPECIFIED",
  Subscription2021: "SUBSCRIPTION_2021",
  Subscription2024: "SUBSCRIPTION_2024",
} as const;
export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan] | (string & {});

export const subscriptionPlanSchema: EnumSchema<SubscriptionPlan> =
  s.enumOf<SubscriptionPlan>(SubscriptionPlan);
