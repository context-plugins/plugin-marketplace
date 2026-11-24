import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency>(
    ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency,
  );
