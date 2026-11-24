import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency>(
    PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency,
  );
