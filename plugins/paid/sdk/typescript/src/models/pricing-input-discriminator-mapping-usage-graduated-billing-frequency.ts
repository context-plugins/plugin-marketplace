import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageGraduatedBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency>(
    PricingInputDiscriminatorMappingUsageGraduatedBillingFrequency,
  );
