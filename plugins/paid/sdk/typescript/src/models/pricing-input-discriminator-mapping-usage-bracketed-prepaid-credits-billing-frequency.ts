import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency>(
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency,
  );
