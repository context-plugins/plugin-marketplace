import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Street address of the company */
export type CompiledCompanyAddress1 = {
  /** Description of the company location */
  description?: string;
  /** Street of the company address */
  street?: string;
  /** City of the company address */
  city?: string;
  /** Region of the company address */
  region?: string;
  /** Region code of the company address */
  regionCode?: string;
  /** Postal code of the company address */
  postalCode?: string;
  /** Country of the company address */
  country?: string;
  /** Country code of the company address */
  countryCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compiledCompanyAddress1Schema: Schema<CompiledCompanyAddress1> =
  s.object<CompiledCompanyAddress1>(
    {
      description: s.optional(s.string()),
      street: s.optional(s.string()),
      city: s.optional(s.string()),
      region: s.optional(s.string()),
      regionCode: s.optional(s.string()),
      postalCode: s.optional(s.string()),
      country: s.optional(s.string()),
      countryCode: s.optional(s.string()),
      _keysMap: {
        regionCode: "region_code",
        postalCode: "postal_code",
        countryCode: "country_code",
      },
    },
    { additionalProperties: s.json() },
  );
