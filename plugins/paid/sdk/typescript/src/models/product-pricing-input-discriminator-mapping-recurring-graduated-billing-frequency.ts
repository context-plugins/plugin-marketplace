import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency>(
    ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency,
  );
