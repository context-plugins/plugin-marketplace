import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency>(
    ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency,
  );
