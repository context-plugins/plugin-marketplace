import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Pricing model used for consumption-based charges. */
export const ConsumptionPricingType = {
  ConsumptionPricingTypeUnspecified: "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
  FixedPerUnit: "FIXED_PER_UNIT",
  Banded: "BANDED",
  Tiered: "TIERED",
  Stairstep: "STAIRSTEP",
} as const;
export type ConsumptionPricingType =
  | (typeof ConsumptionPricingType)[keyof typeof ConsumptionPricingType]
  | (string & {});

export const consumptionPricingTypeSchema: EnumSchema<ConsumptionPricingType> =
  s.enumOf<ConsumptionPricingType>(ConsumptionPricingType);
