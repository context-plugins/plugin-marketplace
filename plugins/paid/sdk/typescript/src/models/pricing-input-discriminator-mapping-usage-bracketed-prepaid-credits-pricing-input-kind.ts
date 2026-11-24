import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind = {
  SignalQuantity: "signalQuantity",
} as const;
export type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind =
  | (typeof PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind)[keyof typeof PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKindSchema: EnumSchema<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind> =
  s.enumOf<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind>(
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind,
  );
