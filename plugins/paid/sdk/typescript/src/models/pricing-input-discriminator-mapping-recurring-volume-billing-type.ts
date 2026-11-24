import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingRecurringVolumeBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingRecurringVolumeBillingType =
  | (typeof PricingInputDiscriminatorMappingRecurringVolumeBillingType)[keyof typeof PricingInputDiscriminatorMappingRecurringVolumeBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingRecurringVolumeBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingRecurringVolumeBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingRecurringVolumeBillingType>(
    PricingInputDiscriminatorMappingRecurringVolumeBillingType,
  );
