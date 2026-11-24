import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingRecurringPerUnitBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType>(
    ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType,
  );
