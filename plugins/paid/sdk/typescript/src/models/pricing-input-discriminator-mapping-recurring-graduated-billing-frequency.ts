import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency = {
  Monthly: "Monthly",
  Quarterly: "Quarterly",
  SemiAnnually: "Semi-Annually",
  Annual: "Annual",
  Custom: "Custom",
} as const;
export type PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency =
  | (typeof PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency)[keyof typeof PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency]
  | (string & {});

export const pricingInputDiscriminatorMappingRecurringGraduatedBillingFrequencySchema: EnumSchema<PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency> =
  s.enumOf<PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency>(
    PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency,
  );
