import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageVolumeBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageVolumeBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingUsageVolumeBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingUsageVolumeBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageVolumeBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageVolumeBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageVolumeBillingType>(
    ProductPricingInputDiscriminatorMappingUsageVolumeBillingType,
  );
