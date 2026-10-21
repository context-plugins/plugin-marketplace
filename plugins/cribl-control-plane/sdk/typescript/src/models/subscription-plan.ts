import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Microsoft 365 subscription plan for your organization, typically Microsoft 365 Enterprise */
export const SubscriptionPlan = {
  EnterpriseGcc: "enterprise_gcc",
  Gcc: "gcc",
  GccHigh: "gcc_high",
  Dod: "dod",
} as const;
export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan] | (string & {});

export const subscriptionPlanSchema: EnumSchema<SubscriptionPlan> =
  s.enumOf<SubscriptionPlan>(SubscriptionPlan);
