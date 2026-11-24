import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageVolumeBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingUsageVolumeBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingUsageVolumeBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingUsageVolumeBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageVolumeBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingUsageVolumeBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingUsageVolumeBillingFrequency>(
    PricingInputDiscriminatorMappingUsageVolumeBillingFrequency,
  );
