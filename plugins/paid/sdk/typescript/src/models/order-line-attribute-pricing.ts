import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingFrequencySchema, type BillingFrequency } from "./billing-frequency.js";
import { chargeTypeSchema, type ChargeType } from "./charge-type.js";
import { pricePointSchema, type PricePoint } from "./price-point.js";
import { pricingModelTypeSchema, type PricingModelType } from "./pricing-model-type.js";

export type OrderLineAttributePricing = {
  eventName?: string;
  chargeType?: ChargeType;
  pricePoint?: PricePoint;
  pricingModel?: PricingModelType;
  billingFrequency?: BillingFrequency;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderLineAttributePricingSchema: Schema<OrderLineAttributePricing> =
  s.object<OrderLineAttributePricing>(
    {
      eventName: s.optional(s.string()),
      chargeType: s.optional(s.lazy(() => chargeTypeSchema)),
      pricePoint: s.optional(s.lazy(() => pricePointSchema)),
      pricingModel: s.optional(s.lazy(() => pricingModelTypeSchema)),
      billingFrequency: s.optional(s.lazy(() => billingFrequencySchema)),
    },
    { additionalProperties: s.json() },
  );
