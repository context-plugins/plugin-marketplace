import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType =
  | (typeof PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType)[keyof typeof PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType>(
    PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType,
  );
