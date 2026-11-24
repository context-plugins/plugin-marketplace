import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency>(
    PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency,
  );
