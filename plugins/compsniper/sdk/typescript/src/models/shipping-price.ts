import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShippingPrice = {
  min: string;
  max: string | null;
  currency: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shippingPriceSchema: Schema<ShippingPrice> = s.object<ShippingPrice>(
  {
    min: s.string(),
    max: s.nullable(s.string()),
    currency: s.string(),
  },
  { additionalProperties: s.json() },
);
