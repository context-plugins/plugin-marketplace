import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShippingAddressResponse = {
  /** Name of city, municipality, or village. */
  city: string | null;
  /** Building name, apartment number. */
  address: string | null;
  /** Postal code. */
  zip: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shippingAddressResponseSchema: Schema<ShippingAddressResponse> =
  s.object<ShippingAddressResponse>(
    {
      city: s.nullable(s.string()),
      address: s.nullable(s.string()),
      zip: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
