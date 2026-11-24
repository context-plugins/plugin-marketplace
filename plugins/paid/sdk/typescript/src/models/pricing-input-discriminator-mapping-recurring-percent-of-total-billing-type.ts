import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType =
  | (typeof PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType)[keyof typeof PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType>(
    PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType,
  );
