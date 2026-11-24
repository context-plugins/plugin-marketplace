import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingUsagePerUnitBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency>(
    PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency,
  );
