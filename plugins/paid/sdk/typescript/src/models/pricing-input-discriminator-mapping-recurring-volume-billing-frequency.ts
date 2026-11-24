import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingRecurringVolumeBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency>(
    PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency,
  );
