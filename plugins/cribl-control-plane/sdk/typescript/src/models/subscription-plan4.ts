import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Microsoft 365 subscription plan for your organization, typically Microsoft 365 Enterprise. */
export const SubscriptionPlan4 = {
  EnterpriseGcc: "enterprise_gcc",
  Gcc: "gcc",
  GccHigh: "gcc_high",
  Dod: "dod",
} as const;
export type SubscriptionPlan4 = (typeof SubscriptionPlan4)[keyof typeof SubscriptionPlan4] | (string & {});

export const subscriptionPlan4Schema: EnumSchema<SubscriptionPlan4> =
  s.enumOf<SubscriptionPlan4>(SubscriptionPlan4);
