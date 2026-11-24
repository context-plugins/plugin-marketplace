import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency>(
    ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency,
  );
