import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eligibilitySchema, type Eligibility } from "./eligibility.js";
import { priceSourceSchema, type PriceSource } from "./price-source.js";
import { shippingPriceSchema, type ShippingPrice } from "./shipping-price.js";

export type ShippingRate = {
  carrierCode: string;
  serviceName: string;
  serviceCode: string;
  serviceGroup: string | null;
  tracking: boolean;
  estimatedDeliveryMinHours: number | null;
  estimatedDeliveryMaxHours: number | null;
  includedCoverage: string | null;
  /**
   * True when this applicable service has the shortest maximum delivery window. Ties are allowed.
   */
  fastest: boolean;
  discountedPrice: ShippingPrice | null;
  retailPrice: ShippingPrice;
  effectivePrice: ShippingPrice;
  priceSource: PriceSource;
  savingsPercent: number | null;
  eligibility: Eligibility;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shippingRateProperties: s.Shape<ShippingRate> = {
  carrierCode: s.string(),
  serviceName: s.string(),
  serviceCode: s.string(),
  serviceGroup: s.nullable(s.string()),
  tracking: s.boolean(),
  estimatedDeliveryMinHours: s.nullable(s.int()),
  estimatedDeliveryMaxHours: s.nullable(s.int()),
  includedCoverage: s.nullable(s.string()),
  fastest: s.boolean(),
  discountedPrice: s.nullable(s.lazy(() => shippingPriceSchema)),
  retailPrice: shippingPriceSchema,
  effectivePrice: shippingPriceSchema,
  priceSource: priceSourceSchema,
  savingsPercent: s.nullable(s.int()),
  eligibility: eligibilitySchema,
};

export const shippingRateInternalSchema: Schema<ShippingRate> = s.object<ShippingRate>(
  shippingRateProperties,
  { additionalProperties: s.json() },
);

export const shippingRateSchema: Schema<ShippingRate> = s.lazySchema(() =>
  s.object<ShippingRate>(
    {
      ...shippingRateProperties,
      savingsPercent: s.nullable(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
