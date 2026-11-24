import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType>(
    ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType,
  );
