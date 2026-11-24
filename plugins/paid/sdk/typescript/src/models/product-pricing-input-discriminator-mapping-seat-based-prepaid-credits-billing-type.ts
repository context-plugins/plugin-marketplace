import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType>(
    ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType,
  );
