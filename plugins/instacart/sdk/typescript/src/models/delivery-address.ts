import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The delivery address for the order. */
export type DeliveryAddress = {
  /** The street address. */
  addressLine1?: string;
  /** Additional address information. */
  addressLine2?: string;
  /** The city. */
  city?: string;
  /** The state or province. */
  state?: string;
  /** The postal or ZIP code. */
  postalCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deliveryAddressSchema: Schema<DeliveryAddress> = s.object<DeliveryAddress>(
  {
    addressLine1: s.optional(s.string()),
    addressLine2: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    _keysMap: {
      addressLine1: "address_line_1",
      addressLine2: "address_line_2",
      postalCode: "postal_code",
    },
  },
  { additionalProperties: s.json() },
);
