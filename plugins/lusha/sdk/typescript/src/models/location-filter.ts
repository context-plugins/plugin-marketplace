import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LocationFilter = {
  continent?: string;
  country?: string;
  city?: string;
  state?: string;
  countryGrouping?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationFilterSchema: Schema<LocationFilter> = s.object<LocationFilter>(
  {
    continent: s.optional(s.string()),
    country: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    countryGrouping: s.optional(s.string()),
    _keysMap: {
      countryGrouping: "country_grouping",
    },
  },
  { additionalProperties: s.json() },
);
