import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingInputDiscriminatorMappingUsageCostPlusBillingType = {
  Advance: "Advance",
  Arrears: "Arrears",
} as const;
export type PricingInputDiscriminatorMappingUsageCostPlusBillingType =
  | (typeof PricingInputDiscriminatorMappingUsageCostPlusBillingType)[keyof typeof PricingInputDiscriminatorMappingUsageCostPlusBillingType]
  | (string & {});

export const pricingInputDiscriminatorMappingUsageCostPlusBillingTypeSchema: EnumSchema<PricingInputDiscriminatorMappingUsageCostPlusBillingType> =
  s.enumOf<PricingInputDiscriminatorMappingUsageCostPlusBillingType>(
    PricingInputDiscriminatorMappingUsageCostPlusBillingType,
  );
