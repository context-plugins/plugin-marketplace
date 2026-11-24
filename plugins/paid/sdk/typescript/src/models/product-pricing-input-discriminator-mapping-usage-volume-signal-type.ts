import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingInputDiscriminatorMappingUsageVolumeSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type ProductPricingInputDiscriminatorMappingUsageVolumeSignalType =
  | (typeof ProductPricingInputDiscriminatorMappingUsageVolumeSignalType)[keyof typeof ProductPricingInputDiscriminatorMappingUsageVolumeSignalType]
  | (string & {});

export const productPricingInputDiscriminatorMappingUsageVolumeSignalTypeSchema: EnumSchema<ProductPricingInputDiscriminatorMappingUsageVolumeSignalType> =
  s.enumOf<ProductPricingInputDiscriminatorMappingUsageVolumeSignalType>(
    ProductPricingInputDiscriminatorMappingUsageVolumeSignalType,
  );
