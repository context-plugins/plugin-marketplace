import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency>(
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency,
  );
