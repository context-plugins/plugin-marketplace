import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddressData = {
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

const addressDataProperties: s.Shape<AddressData> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
};

export const addressDataInternalSchema: Schema<AddressData> = s.object<AddressData>(addressDataProperties, {
  additionalProperties: s.json(),
});

export const addressDataSchema: Schema<AddressData> = s.lazySchema(() =>
  s.object<AddressData>(
    {
      ...addressDataProperties,
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(30))),
    },
    { additionalProperties: s.json() },
  ),
);
