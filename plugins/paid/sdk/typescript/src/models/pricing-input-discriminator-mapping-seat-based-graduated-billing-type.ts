import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType =
  | (typeof PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType)[keyof typeof PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType>(
    PricingInputDiscriminatorMappingSeatBasedGraduatedBillingType,
  );
