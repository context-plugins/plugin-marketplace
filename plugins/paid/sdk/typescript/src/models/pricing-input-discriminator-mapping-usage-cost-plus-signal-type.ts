import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageCostPlusSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type PricingInputDiscriminatorMappingUsageCostPlusSignalType =
  | (typeof PricingInputDiscriminatorMappingUsageCostPlusSignalType)[keyof typeof PricingInputDiscriminatorMappingUsageCostPlusSignalType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageCostPlusSignalTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsageCostPlusSignalType> =
  s.enumOf<PricingInputDiscriminatorMappingUsageCostPlusSignalType>(
    PricingInputDiscriminatorMappingUsageCostPlusSignalType,
  );
