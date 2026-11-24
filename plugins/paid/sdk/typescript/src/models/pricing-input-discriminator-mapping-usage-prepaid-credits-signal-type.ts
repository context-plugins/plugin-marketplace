import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType =
  | (typeof PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType)[keyof typeof PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType> =
  s.enumOf<PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType>(
    PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType,
  );
