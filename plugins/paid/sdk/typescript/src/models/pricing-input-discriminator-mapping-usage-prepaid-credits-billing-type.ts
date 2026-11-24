import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType =
  | (typeof PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType)[keyof typeof PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType>(
    PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType,
  );
