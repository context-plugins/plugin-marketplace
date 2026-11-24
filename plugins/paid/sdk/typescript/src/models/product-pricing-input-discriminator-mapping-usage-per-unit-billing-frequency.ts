import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsagePerUnitBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency>(
    ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency,
  );
