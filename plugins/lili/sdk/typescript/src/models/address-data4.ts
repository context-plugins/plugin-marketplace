import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Business mailing address. Optional. Must be in the US, can be a registered agent address. Used as
 * the card shipment address for Non-US applicants when selected.
 */
export type AddressData4 = {
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

const addressData4Properties: s.Shape<AddressData4> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
};

export const addressData4InternalSchema: Schema<AddressData4> = s.object<AddressData4>(
  addressData4Properties,
  { additionalProperties: s.json() },
);

export const addressData4Schema: Schema<AddressData4> = s.lazySchema(() =>
  s.object<AddressData4>(
    {
      ...addressData4Properties,
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(30))),
    },
    { additionalProperties: s.json() },
  ),
);
