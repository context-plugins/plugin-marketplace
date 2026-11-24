import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency>(
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency,
  );
