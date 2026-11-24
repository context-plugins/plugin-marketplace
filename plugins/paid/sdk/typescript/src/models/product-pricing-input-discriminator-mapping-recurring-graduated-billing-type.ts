import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingRecurringGraduatedBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType>(
    ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType,
  );
