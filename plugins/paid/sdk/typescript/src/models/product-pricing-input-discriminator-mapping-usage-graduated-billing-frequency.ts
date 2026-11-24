import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageGraduatedBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency>(
    ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency,
  );
