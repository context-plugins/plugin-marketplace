import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageVolumeSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type PricingInputDiscriminatorMappingUsageVolumeSignalType =
  | (typeof PricingInputDiscriminatorMappingUsageVolumeSignalType)[keyof typeof PricingInputDiscriminatorMappingUsageVolumeSignalType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageVolumeSignalTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsageVolumeSignalType> =
  s.enumOf<PricingInputDiscriminatorMappingUsageVolumeSignalType>(
    PricingInputDiscriminatorMappingUsageVolumeSignalType,
  );
