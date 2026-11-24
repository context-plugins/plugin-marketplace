import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType>(
    ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType,
  );
