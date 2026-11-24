import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShippingPrice = {
  port?: string;
  price?: number;
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shippingPriceSchema: Schema<ShippingPrice> = s.object<ShippingPrice>(
  {
    port: s.optional(s.string()),
    price: s.optional(s.float64()),
    currency: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
