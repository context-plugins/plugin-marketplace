import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType =
  | (typeof PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType)[keyof typeof PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType>(
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType,
  );
