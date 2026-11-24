import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType =
  | (typeof ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType)[keyof typeof ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageGraduatedSignalTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType>(
    ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType,
  );
