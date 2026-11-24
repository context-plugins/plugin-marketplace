import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Location filter object used in prospecting requests */
export type V3Location = {
  city?: string;
  state?: string;
  country?: string;
  continent?: string;
  countryGrouping?: string;
  region?: string;
  countryIso2?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3LocationSchema: Schema<V3Location> = s.object<V3Location>(
  {
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    continent: s.optional(s.string()),
    countryGrouping: s.optional(s.string()),
    region: s.optional(s.string()),
    countryIso2: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
