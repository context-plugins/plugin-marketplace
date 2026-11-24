import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingSeatBasedVolumeBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingSeatBasedVolumeBillingType =
  | (typeof PricingInputDiscriminatorMappingSeatBasedVolumeBillingType)[keyof typeof PricingInputDiscriminatorMappingSeatBasedVolumeBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingSeatBasedVolumeBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingSeatBasedVolumeBillingType>(
    PricingInputDiscriminatorMappingSeatBasedVolumeBillingType,
  );
