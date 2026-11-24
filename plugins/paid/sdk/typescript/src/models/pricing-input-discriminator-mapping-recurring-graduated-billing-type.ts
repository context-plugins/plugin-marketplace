import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingRecurringGraduatedBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingRecurringGraduatedBillingType =
  | (typeof PricingInputDiscriminatorMappingRecurringGraduatedBillingType)[keyof typeof PricingInputDiscriminatorMappingRecurringGraduatedBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingRecurringGraduatedBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingRecurringGraduatedBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingRecurringGraduatedBillingType>(
    PricingInputDiscriminatorMappingRecurringGraduatedBillingType,
  );
