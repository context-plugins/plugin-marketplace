import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency>(
    PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency,
  );
