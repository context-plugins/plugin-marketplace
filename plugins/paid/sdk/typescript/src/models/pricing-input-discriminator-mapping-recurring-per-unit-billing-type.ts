import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingRecurringPerUnitBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingRecurringPerUnitBillingType =
  | (typeof PricingInputDiscriminatorMappingRecurringPerUnitBillingType)[keyof typeof PricingInputDiscriminatorMappingRecurringPerUnitBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingRecurringPerUnitBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingRecurringPerUnitBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingRecurringPerUnitBillingType>(
    PricingInputDiscriminatorMappingRecurringPerUnitBillingType,
  );
