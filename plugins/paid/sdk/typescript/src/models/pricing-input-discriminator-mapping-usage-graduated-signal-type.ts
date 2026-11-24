import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageGraduatedSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type PricingInputDiscriminatorMappingUsageGraduatedSignalType =
  | (typeof PricingInputDiscriminatorMappingUsageGraduatedSignalType)[keyof typeof PricingInputDiscriminatorMappingUsageGraduatedSignalType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageGraduatedSignalTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsageGraduatedSignalType> =
  s.enumOf<PricingInputDiscriminatorMappingUsageGraduatedSignalType>(
    PricingInputDiscriminatorMappingUsageGraduatedSignalType,
  );
