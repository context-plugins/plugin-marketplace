import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType>(
    ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType,
  );
