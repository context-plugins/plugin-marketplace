import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyLocation = {
  city?: string;
  continent?: string;
  country?: string;
  countryIso2?: string;
  locationCoordinates?: number[];
  state?: string | null;
  stateCode?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLocationSchema: Schema<CompanyLocation> = s.object<CompanyLocation>(
  {
    city: s.optional(s.string()),
    continent: s.optional(s.string()),
    country: s.optional(s.string()),
    countryIso2: s.optional(s.string()),
    locationCoordinates: s.optional(s.array(s.float64())),
    state: s.optionalNullable(s.string()),
    stateCode: s.optionalNullable(s.string()),
    _keysMap: {
      countryIso2: "country_iso2",
      locationCoordinates: "location_coordinates",
      stateCode: "state_code",
    },
  },
  { additionalProperties: s.json() },
);
