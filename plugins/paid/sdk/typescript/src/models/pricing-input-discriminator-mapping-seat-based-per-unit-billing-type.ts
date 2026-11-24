import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType =
  | (typeof PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType)[keyof typeof PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType>(
    PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType,
  );
