import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planPricingPricingTypeSchema, type PlanPricingPricingType } from "./plan-pricing-pricing-type.js";

/** Pricing configuration for a plan attribute. Money amounts are expressed in cents. */
export type PlanPricing1 = {
  pricingType: PlanPricingPricingType;
  chargeType: string;
  pricingModel: string;
  pricePoints: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planPricing1Schema: Schema<PlanPricing1> = s.object<PlanPricing1>(
  {
    pricingType: planPricingPricingTypeSchema,
    chargeType: s.string(),
    pricingModel: s.string(),
    pricePoints: s.array(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
