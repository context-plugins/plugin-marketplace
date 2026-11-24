import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency>(
    PricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency,
  );
