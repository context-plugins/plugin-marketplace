import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageGraduatedBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingUsageGraduatedBillingType =
  | (typeof PricingInputDiscriminatorMappingUsageGraduatedBillingType)[keyof typeof PricingInputDiscriminatorMappingUsageGraduatedBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageGraduatedBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsageGraduatedBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingUsageGraduatedBillingType>(
    PricingInputDiscriminatorMappingUsageGraduatedBillingType,
  );
