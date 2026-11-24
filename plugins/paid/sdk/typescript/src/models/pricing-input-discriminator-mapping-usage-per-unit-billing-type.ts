import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsagePerUnitBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingUsagePerUnitBillingType =
  | (typeof PricingInputDiscriminatorMappingUsagePerUnitBillingType)[keyof typeof PricingInputDiscriminatorMappingUsagePerUnitBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsagePerUnitBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsagePerUnitBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingUsagePerUnitBillingType>(
    PricingInputDiscriminatorMappingUsagePerUnitBillingType,
  );
