import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  planPricingBillingFrequencySchema,
  type PlanPricingBillingFrequency,
} from "./plan-pricing-billing-frequency.js";
import { pricePointSchema, type PricePoint } from "./price-point.js";

/** The pricing configuration for a plan. Uses the same PricePoints structure as product pricing. */
export type PlanPricing = {
  /** Price points keyed by currency code (e.g., "USD", "EUR") */
  pricePoints: Record<string, PricePoint>;
  /** The billing frequency for the plan */
  billingFrequency: PlanPricingBillingFrequency;
  /** Custom billing frequency in months (when billingFrequency is "custom") */
  billingFrequencyCustomMonths?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planPricingSchema: Schema<PlanPricing> = s.object<PlanPricing>(
  {
    pricePoints: s.record(
      s.string(),
      s.lazy(() => pricePointSchema),
    ),
    billingFrequency: planPricingBillingFrequencySchema,
    billingFrequencyCustomMonths: s.optional(s.float64()),
    _keysMap: {
      pricePoints: "PricePoints",
    },
  },
  { additionalProperties: s.json() },
);
