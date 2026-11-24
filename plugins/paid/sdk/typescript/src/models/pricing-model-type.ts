import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingModelType = {
  PerUnit: "PerUnit",
  VolumePricing: "VolumePricing",
  GraduatedPricing: "GraduatedPricing",
  PrepaidCredits: "PrepaidCredits",
} as const;
export type PricingModelType = (typeof PricingModelType)[keyof typeof PricingModelType] | (string & {});

export const pricingModelTypeSchema: EnumSchema<PricingModelType> =
  s.enumOf<PricingModelType>(PricingModelType);
