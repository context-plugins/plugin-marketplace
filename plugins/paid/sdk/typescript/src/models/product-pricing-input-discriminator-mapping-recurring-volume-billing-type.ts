import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingRecurringVolumeBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType>(
    ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType,
  );
