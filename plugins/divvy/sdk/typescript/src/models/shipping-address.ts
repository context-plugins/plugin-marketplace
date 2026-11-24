import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";

export type ShippingAddress = {
  /** Address line 1 */
  line1: string;
  /** Address line 2 */
  line2?: string;
  /** Address city */
  city: string;
  /** State or province */
  stateOrProvince?: string;
  /** Zip or postal code */
  zipOrPostalCode: string;
  country: CountryCode;
  /** Country name. */
  countryName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shippingAddressProperties: s.Shape<ShippingAddress> = {
  line1: s.string(),
  line2: s.optional(s.string()),
  city: s.string(),
  stateOrProvince: s.optional(s.string()),
  zipOrPostalCode: s.string(),
  country: countryCodeSchema,
  countryName: s.optional(s.string()),
};

export const shippingAddressInternalSchema: Schema<ShippingAddress> = s.object<ShippingAddress>(
  shippingAddressProperties,
  { additionalProperties: s.json() },
);

export const shippingAddressSchema: Schema<ShippingAddress> = s.lazySchema(() =>
  s.object<ShippingAddress>(
    {
      ...shippingAddressProperties,
      line1: s.string().check(s.minLength(1), s.pattern("^.{0,1000}$")),
      line2: s.optional(s.string().check(s.pattern("^.{0,100}$"))),
      city: s.string().check(s.minLength(1), s.pattern("^.{0,100}$")),
      stateOrProvince: s.optional(s.string().check(s.pattern("^.{0,100}$"))),
      zipOrPostalCode: s.string().check(s.minLength(1), s.pattern("^.{0,30}$")),
    },
    { additionalProperties: s.json() },
  ),
);
