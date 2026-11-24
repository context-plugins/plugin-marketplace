import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType =
  | (typeof ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType)[keyof typeof ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType>(
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType,
  );
