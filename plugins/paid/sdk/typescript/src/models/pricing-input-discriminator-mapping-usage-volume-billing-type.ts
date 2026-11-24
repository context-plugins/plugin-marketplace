import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageVolumeBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingUsageVolumeBillingType =
  | (typeof PricingInputDiscriminatorMappingUsageVolumeBillingType)[keyof typeof PricingInputDiscriminatorMappingUsageVolumeBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageVolumeBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsageVolumeBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingUsageVolumeBillingType>(
    PricingInputDiscriminatorMappingUsageVolumeBillingType,
  );
