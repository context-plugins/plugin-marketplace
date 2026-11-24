import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageCostPlusBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency>(
    ProductPricingInputDiscriminatorMappingUsageCostPlusBillingFrequency,
  );
