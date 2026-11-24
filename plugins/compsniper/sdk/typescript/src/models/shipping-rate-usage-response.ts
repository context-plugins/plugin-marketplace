import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShippingRateUsageResponse = {
  plan: string;
  status: string;
  quota: number;
  used: number;
  remaining: number;
  rateLimitPerMinute: number;
  periodStart?: Date;
  periodEnd?: Date;
  subscriptionUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shippingRateUsageResponseProperties: s.Shape<ShippingRateUsageResponse> = {
  plan: s.string(),
  status: s.string(),
  quota: s.int(),
  used: s.int(),
  remaining: s.int(),
  rateLimitPerMinute: s.int(),
  periodStart: s.optional(s.dateTime()),
  periodEnd: s.optional(s.dateTime()),
  subscriptionUrl: s.string(),
};

export const shippingRateUsageResponseInternalSchema: Schema<ShippingRateUsageResponse> =
  s.object<ShippingRateUsageResponse>(shippingRateUsageResponseProperties, {
    additionalProperties: s.json(),
  });

export const shippingRateUsageResponseSchema: Schema<ShippingRateUsageResponse> = s.lazySchema(() =>
  s.object<ShippingRateUsageResponse>(
    {
      ...shippingRateUsageResponseProperties,
      quota: s.int().check(s.gte(0)),
      used: s.int().check(s.gte(0)),
      remaining: s.int().check(s.gte(0)),
      rateLimitPerMinute: s.int().check(s.gte(0)),
      subscriptionUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
