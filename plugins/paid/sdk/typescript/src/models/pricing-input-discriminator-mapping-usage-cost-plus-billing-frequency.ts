import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageCostPlusBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency>(
    PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency,
  );
