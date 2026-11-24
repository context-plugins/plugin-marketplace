import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsagePerUnitBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType>(
    ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType,
  );
