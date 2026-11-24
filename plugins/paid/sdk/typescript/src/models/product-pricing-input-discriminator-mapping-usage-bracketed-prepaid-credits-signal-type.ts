import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType =
  | (typeof ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType)[keyof typeof ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType>(
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType,
  );
