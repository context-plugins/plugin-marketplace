import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpLocation = {
  continentCode?: string;
  continentName?: string;
  countryCode2?: string;
  countryCode3?: string;
  countryName?: string;
  countryNameOfficial?: string;
  countryCapital?: string;
  stateProv?: string;
  stateCode?: string;
  district?: string;
  city?: string;
  locality?: string;
  accuracyRadius?: string;
  confidence?: string;
  zipcode?: string;
  latitude?: string;
  longitude?: string;
  isEu?: boolean;
  geonameId?: string;
  countryEmoji?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipLocationSchema: Schema<IpLocation> = s.object<IpLocation>(
  {
    continentCode: s.optional(s.string()),
    continentName: s.optional(s.string()),
    countryCode2: s.optional(s.string()),
    countryCode3: s.optional(s.string()),
    countryName: s.optional(s.string()),
    countryNameOfficial: s.optional(s.string()),
    countryCapital: s.optional(s.string()),
    stateProv: s.optional(s.string()),
    stateCode: s.optional(s.string()),
    district: s.optional(s.string()),
    city: s.optional(s.string()),
    locality: s.optional(s.string()),
    accuracyRadius: s.optional(s.string()),
    confidence: s.optional(s.string()),
    zipcode: s.optional(s.string()),
    latitude: s.optional(s.string()),
    longitude: s.optional(s.string()),
    isEu: s.optional(s.boolean()),
    geonameId: s.optional(s.string()),
    countryEmoji: s.optional(s.string()),
    _keysMap: {
      continentCode: "continent_code",
      continentName: "continent_name",
      countryCode2: "country_code2",
      countryCode3: "country_code3",
      countryName: "country_name",
      countryNameOfficial: "country_name_official",
      countryCapital: "country_capital",
      stateProv: "state_prov",
      stateCode: "state_code",
      accuracyRadius: "accuracy_radius",
      isEu: "is_eu",
      geonameId: "geoname_id",
      countryEmoji: "country_emoji",
    },
  },
  { additionalProperties: s.json() },
);
