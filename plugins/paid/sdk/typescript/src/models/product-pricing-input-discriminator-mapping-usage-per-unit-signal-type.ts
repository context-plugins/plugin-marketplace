import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType =
  | (typeof ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType)[keyof typeof ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsagePerUnitSignalTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType>(
    ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType,
  );
