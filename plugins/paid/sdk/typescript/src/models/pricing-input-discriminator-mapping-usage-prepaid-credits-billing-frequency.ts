import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency>(
    PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency,
  );
