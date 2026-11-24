import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FindStoresRequest = {
  /** The street address of the customer's location. */
  addressLine1?: string;
  /** Additional address information such as apartment or suite number. */
  addressLine2?: string;
  /** The city of the customer's location. */
  city?: string;
  /** The state or province of the customer's location. */
  state?: string;
  /** The postal or ZIP code of the customer's location. */
  postalCode?: string;
  /** The latitude coordinate of the customer's location. */
  latitude?: number;
  /** The longitude coordinate of the customer's location. */
  longitude?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findStoresRequestSchema: Schema<FindStoresRequest> = s.object<FindStoresRequest>(
  {
    addressLine1: s.optional(s.string()),
    addressLine2: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
    _keysMap: {
      addressLine1: "address_line_1",
      addressLine2: "address_line_2",
      postalCode: "postal_code",
    },
  },
  { additionalProperties: s.json() },
);
