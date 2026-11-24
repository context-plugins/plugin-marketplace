import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageGraduatedBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType>(
    ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType,
  );
