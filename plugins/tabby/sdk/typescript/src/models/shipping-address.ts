import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShippingAddress = {
  /** Name of city, municipality, or village. */
  city: string;
  /** Building name, apartment number. */
  address: string;
  /** Postal code. */
  zip: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shippingAddressSchema: Schema<ShippingAddress> = s.object<ShippingAddress>(
  {
    city: s.string(),
    address: s.string(),
    zip: s.string(),
  },
  { additionalProperties: s.json() },
);
