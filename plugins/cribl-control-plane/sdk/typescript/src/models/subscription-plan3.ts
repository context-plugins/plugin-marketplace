import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Microsoft 365 subscription plan for your organization, typically Microsoft 365 Enterprise */
export const SubscriptionPlan3 = {
  EnterpriseGcc: "enterprise_gcc",
  Gcc: "gcc",
  GccHigh: "gcc_high",
  Dod: "dod",
  China: "china",
} as const;
export type SubscriptionPlan3 = (typeof SubscriptionPlan3)[keyof typeof SubscriptionPlan3] | (string & {});

export const subscriptionPlan3Schema: EnumSchema<SubscriptionPlan3> =
  s.enumOf<SubscriptionPlan3>(SubscriptionPlan3);
