import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BusinessAddress = {
  /** The first line of the business address. */
  addressLine1?: string;
  /** Additional information about the business address (optional). */
  addressLine2?: string;
  /** The suburb or locality where the business is located. */
  suburb?: string;
  /** The state or territory where the business is located. */
  state?: string;
  /** The postal code of the business location. */
  postcode?: string;
  /** The country code of the business location. */
  countryCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const businessAddressSchema: Schema<BusinessAddress> = s.object<BusinessAddress>(
  {
    addressLine1: s.optional(s.string()),
    addressLine2: s.optional(s.string()),
    suburb: s.optional(s.string()),
    state: s.optional(s.string()),
    postcode: s.optional(s.string()),
    countryCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
