import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageVolumeBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency>(
    ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency,
  );
