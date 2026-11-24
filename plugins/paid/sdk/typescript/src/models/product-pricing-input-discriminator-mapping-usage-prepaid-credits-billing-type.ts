import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType>(
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType,
  );
