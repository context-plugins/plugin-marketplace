import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The enum partner price plan. */
export const PartnerPricePlanType = {
  PricePlan1: "PricePlan1",
  PricePlan2: "PricePlan2",
  PricePlan3: "PricePlan3",
  PricePlan4: "PricePlan4",
  PricePlan5: "PricePlan5",
} as const;
export type PartnerPricePlanType =
  | (typeof PartnerPricePlanType)[keyof typeof PartnerPricePlanType]
  | (string & {});

export const partnerPricePlanTypeSchema: EnumSchema<PartnerPricePlanType> =
  s.enumOf<PartnerPricePlanType>(PartnerPricePlanType);
