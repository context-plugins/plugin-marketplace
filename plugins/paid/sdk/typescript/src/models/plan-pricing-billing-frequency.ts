import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The billing frequency for the plan */
export const PlanPricingBillingFrequency = {
  Monthly: "monthly",
  Quarterly: "quarterly",
  SemiAnnually: "semi-annually",
  Yearly: "yearly",
  Custom: "custom",
} as const;
export type PlanPricingBillingFrequency =
  | (typeof PlanPricingBillingFrequency)[keyof typeof PlanPricingBillingFrequency]
  | (string & {});

export const planPricingBillingFrequencySchema: EnumSchema<PlanPricingBillingFrequency> =
  s.enumOf<PlanPricingBillingFrequency>(PlanPricingBillingFrequency);
