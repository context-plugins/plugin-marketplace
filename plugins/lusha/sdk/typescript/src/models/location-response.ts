import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LocationResponse = {
  /** The country where the person is located. */
  country: string;
  /** The ISO 3166-1 alpha-2 country code of the person. */
  countryIso2: string;
  /** The ISO 3166-1 alpha-2 country code of the person. */
  countryIso22?: string;
  /** The continent where the person is located. */
  continent: string;
  /** The detailed address. */
  rawLocation: string;
  /** The region where the person is located. */
  region?: string;
  /** The city where the person is located. */
  city?: string;
  /** The ID of the city where the person is located. */
  cityId?: number;
  /** The state where the person is located. */
  state?: string;
  /** The state code of the person. */
  stateCode?: string;
  /** The state code of the person. */
  stateCode2?: string;
  /** The street where the person is located. */
  street?: string;
  /** The coordinates of the person. */
  locationCoordinates?: number[];
  /** Indicates whether the person is in the EU. */
  isEuContact?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationResponseSchema: Schema<LocationResponse> = s.object<LocationResponse>(
  {
    country: s.string(),
    countryIso2: s.string(),
    countryIso22: s.optional(s.string()),
    continent: s.string(),
    rawLocation: s.string(),
    region: s.optional(s.string()),
    city: s.optional(s.string()),
    cityId: s.optional(s.float64()),
    state: s.optional(s.string()),
    stateCode: s.optional(s.string()),
    stateCode2: s.optional(s.string()),
    street: s.optional(s.string()),
    locationCoordinates: s.optional(s.array(s.float64())),
    isEuContact: s.optional(s.boolean()),
    _keysMap: {
      countryIso22: "country_iso2",
      stateCode2: "state_code",
    },
  },
  { additionalProperties: s.json() },
);
