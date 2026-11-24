import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The physical address of the store. */
export type Address1 = {
  /** The street address. */
  addressLine1?: string;
  /** The city. */
  city?: string;
  /** The state or province. */
  state?: string;
  /** The postal or ZIP code. */
  postalCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const address1Schema: Schema<Address1> = s.object<Address1>(
  {
    addressLine1: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    _keysMap: {
      addressLine1: "address_line_1",
      postalCode: "postal_code",
    },
  },
  { additionalProperties: s.json() },
);
