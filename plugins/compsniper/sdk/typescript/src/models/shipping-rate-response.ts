import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shippingRateInternalSchema, shippingRateSchema, type ShippingRate } from "./shipping-rate.js";

export type ShippingRateResponse = {
  /** @default "ebay_shipping_calculator" */
  source?: "ebay_shipping_calculator";
  /** @default "estimate" */
  rateType?: "estimate";
  currency: string;
  /** Services currently applicable to the submitted package and content declarations. */
  totalRates: number;
  /** Additional services requiring specific carrier packaging or eligible contents. */
  totalConditionalRates: number;
  fetchedAt: Date;
  validUntil: Date;
  requestId: string;
  rates: ShippingRate[];
  conditionalRates: ShippingRate[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shippingRateResponseProperties: s.Shape<ShippingRateResponse> = {
  source: s.defaulted(s.literal("ebay_shipping_calculator"), "ebay_shipping_calculator"),
  rateType: s.defaulted(s.literal("estimate"), "estimate"),
  currency: s.string(),
  totalRates: s.int(),
  totalConditionalRates: s.int(),
  fetchedAt: s.dateTime(),
  validUntil: s.dateTime(),
  requestId: s.string(),
  rates: s.array(s.lazy(() => shippingRateInternalSchema)),
  conditionalRates: s.array(s.lazy(() => shippingRateInternalSchema)),
};

export const shippingRateResponseInternalSchema: Schema<ShippingRateResponse> =
  s.object<ShippingRateResponse>(shippingRateResponseProperties, { additionalProperties: s.json() });

export const shippingRateResponseSchema: Schema<ShippingRateResponse> = s.lazySchema(() =>
  s.object<ShippingRateResponse>(
    {
      ...shippingRateResponseProperties,
      totalRates: s.int().check(s.gte(1)),
      totalConditionalRates: s.int().check(s.gte(0)),
      rates: s.array(s.lazy(() => shippingRateSchema)).check(s.minLength(1)),
      conditionalRates: s.array(s.lazy(() => shippingRateSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
