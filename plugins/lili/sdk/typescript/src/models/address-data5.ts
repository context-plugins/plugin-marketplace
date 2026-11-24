import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The UBO address */
export type AddressData5 = {
  /** Line 1 of the address */
  line1?: string;
  /** Line 2 of the address */
  line2?: string;
  /** City */
  city?: string;
  /** State 2 letter code (ISO 3166 format) */
  state?: string;
  /** Postal code */
  postalCode?: string;
  /** Country 2 letter code (ISO 3166 format) */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addressData5Properties: s.Shape<AddressData5> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
};

export const addressData5InternalSchema: Schema<AddressData5> = s.object<AddressData5>(
  addressData5Properties,
  { additionalProperties: s.json() },
);

export const addressData5Schema: Schema<AddressData5> = s.lazySchema(() =>
  s.object<AddressData5>(
    {
      ...addressData5Properties,
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(30))),
    },
    { additionalProperties: s.json() },
  ),
);
