import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType =
  | (typeof ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType)[keyof typeof ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType>(
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType,
  );
