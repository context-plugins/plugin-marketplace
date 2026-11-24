import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType>(
    ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType,
  );
