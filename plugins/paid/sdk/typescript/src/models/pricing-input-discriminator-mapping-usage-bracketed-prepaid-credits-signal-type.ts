import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType =
  | (typeof PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType)[keyof typeof PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType> =
  s.enumOf<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType>(
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType,
  );
