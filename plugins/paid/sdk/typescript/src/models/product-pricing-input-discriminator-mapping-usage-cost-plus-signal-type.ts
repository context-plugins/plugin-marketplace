import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType =
  | (typeof ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType)[keyof typeof ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageCostPlusSignalTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType>(
    ProductPricingInputDiscriminatorMappingUsageCostPlusSignalType,
  );
