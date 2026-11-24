import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingOneTimePerUnitBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingOneTimePerUnitBillingType =
  | (typeof PricingInputDiscriminatorMappingOneTimePerUnitBillingType)[keyof typeof PricingInputDiscriminatorMappingOneTimePerUnitBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingOneTimePerUnitBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingOneTimePerUnitBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingOneTimePerUnitBillingType>(
    PricingInputDiscriminatorMappingOneTimePerUnitBillingType,
  );
