import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageCostPlusBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType>(
    ProductPricingInputDiscriminatorMappingUsageCostPlusBillingType,
  );
