import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingOneTimePerUnitBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType>(
    ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType,
  );
