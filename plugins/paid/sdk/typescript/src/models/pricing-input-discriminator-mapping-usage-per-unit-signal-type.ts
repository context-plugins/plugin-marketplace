import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsagePerUnitSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type PricingInputDiscriminatorMappingUsagePerUnitSignalType =
  | (typeof PricingInputDiscriminatorMappingUsagePerUnitSignalType)[keyof typeof PricingInputDiscriminatorMappingUsagePerUnitSignalType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsagePerUnitSignalTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsagePerUnitSignalType> =
  s.enumOf<PricingInputDiscriminatorMappingUsagePerUnitSignalType>(
    PricingInputDiscriminatorMappingUsagePerUnitSignalType,
  );
