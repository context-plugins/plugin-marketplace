import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency>(
    ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency,
  );
