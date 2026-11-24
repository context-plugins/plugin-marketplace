import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency>(
    ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency,
  );
