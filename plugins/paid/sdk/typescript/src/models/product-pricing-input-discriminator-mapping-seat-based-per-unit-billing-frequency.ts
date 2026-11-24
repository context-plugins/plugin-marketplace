import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency>(
    ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency,
  );
