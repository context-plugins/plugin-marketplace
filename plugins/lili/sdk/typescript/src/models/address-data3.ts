import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The registered business address (the address the business provided to the state of formation to
 * accept legal process). Can be outside of the US, in case only a registered agent address is
 * available. Used as the billing address and presented on bank statements and invoices.
 */
export type AddressData3 = {
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

const addressData3Properties: s.Shape<AddressData3> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
};

export const addressData3InternalSchema: Schema<AddressData3> = s.object<AddressData3>(
  addressData3Properties,
  { additionalProperties: s.json() },
);

export const addressData3Schema: Schema<AddressData3> = s.lazySchema(() =>
  s.object<AddressData3>(
    {
      ...addressData3Properties,
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(30))),
    },
    { additionalProperties: s.json() },
  ),
);
