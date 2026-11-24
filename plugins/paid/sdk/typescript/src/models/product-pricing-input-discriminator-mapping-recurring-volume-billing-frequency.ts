import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency =
  | (typeof ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency)[keyof typeof ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency]
  | (string & {});

export const productPricingInputDiscriminatorMappingRecurringVolumeBillingFrequencySchema: EnumSchema<ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency> =
  s.enumOf<ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency>(
    ProductPricingInputDiscriminatorMappingRecurringVolumeBillingFrequency,
  );
