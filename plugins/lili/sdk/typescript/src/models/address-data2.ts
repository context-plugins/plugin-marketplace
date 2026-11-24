import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The physical (operational) address where the business operates day-to-day. Must be a US address.
 * Used as the address in the Beneficial Ownership file.
 */
export type AddressData2 = {
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

const addressData2Properties: s.Shape<AddressData2> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
};

export const addressData2InternalSchema: Schema<AddressData2> = s.object<AddressData2>(
  addressData2Properties,
  { additionalProperties: s.json() },
);

export const addressData2Schema: Schema<AddressData2> = s.lazySchema(() =>
  s.object<AddressData2>(
    {
      ...addressData2Properties,
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(30))),
    },
    { additionalProperties: s.json() },
  ),
);
