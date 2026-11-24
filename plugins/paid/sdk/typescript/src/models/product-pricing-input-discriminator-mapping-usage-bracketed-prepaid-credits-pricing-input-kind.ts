import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind = {
  SignalQuantity: "signalQuantity",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind =
  | (typeof ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind)[keyof typeof ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKindSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind>(
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind,
  );
