import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";

export type Address1BillV3PartnerApi = {
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
  country: CountryCode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const address1BillV3PartnerApiProperties: s.Shape<Address1BillV3PartnerApi> = {
  line1: s.optional(s.string()),
  line2: s.optional(s.string()),
  city: s.optional(s.string()),
  stateOrProvince: s.optional(s.string()),
  zipOrPostalCode: s.optional(s.string()),
  country: countryCodeSchema,
};

export const address1BillV3PartnerApiInternalSchema: Schema<Address1BillV3PartnerApi> =
  s.object<Address1BillV3PartnerApi>(address1BillV3PartnerApiProperties, { additionalProperties: s.json() });

export const address1BillV3PartnerApiSchema: Schema<Address1BillV3PartnerApi> = s.lazySchema(() =>
  s.object<Address1BillV3PartnerApi>(
    {
      ...address1BillV3PartnerApiProperties,
      line1: s.optional(s.string().check(s.pattern("^.{0,1000}$"))),
      line2: s.optional(s.string().check(s.pattern("^.{0,100}$"))),
      city: s.optional(s.string().check(s.pattern("^.{0,100}$"))),
      stateOrProvince: s.optional(s.string().check(s.pattern("^.{0,100}$"))),
      zipOrPostalCode: s.optional(s.string().check(s.pattern("^.{0,30}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
