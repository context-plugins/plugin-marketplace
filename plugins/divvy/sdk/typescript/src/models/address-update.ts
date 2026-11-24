import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";

/** The type Address Update dto. */
export type AddressUpdate = {
  /** Address line 1 */
  line1?: string;
  /** Address line 2 */
  line2?: string;
  /** Address city */
  city?: string;
  /** State or province */
  stateOrProvince?: string;
  /** Zip or postal code */
  zipOrPostalCode?: string;
  country?: CountryCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addressUpdateProperties: s.Shape<AddressUpdate> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  city: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  zipOrPostalCode: s.optional(s.string()),
  country: s.optional(s.lazy(() => countryCodeSchema)),
};

export const addressUpdateInternalSchema: Schema<AddressUpdate> = s.object<AddressUpdate>(
  addressUpdateProperties,
  { additionalProperties: s.json() },
);

export const addressUpdateSchema: Schema<AddressUpdate> = s.lazySchema(() =>
  s.object<AddressUpdate>(
    {
      ...addressUpdateProperties,
      line1: s.optional(s.string().check(s.pattern("^.{0,1000}$"))),
      line2: s.optional(s.string().check(s.pattern("^.{0,100}$"))),
      city: s.optional(s.string().check(s.pattern("^.{0,100}$"))),
      stateOrProvince: s.optional(s.string().check(s.pattern("^.{0,100}$"))),
      zipOrPostalCode: s.optional(s.string().check(s.pattern("^.{0,30}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
