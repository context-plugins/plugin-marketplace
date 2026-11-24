import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency>(
    PricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency,
  );
