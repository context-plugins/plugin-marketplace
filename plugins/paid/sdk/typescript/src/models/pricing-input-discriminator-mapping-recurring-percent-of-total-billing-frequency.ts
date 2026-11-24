import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency>(
    PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency,
  );
