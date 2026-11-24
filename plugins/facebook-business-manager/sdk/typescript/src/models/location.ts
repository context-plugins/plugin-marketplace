import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Location = {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  latitude?: number;
  longitude?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSchema: Schema<Location> = s.object<Location>(
  {
    street: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    zip: s.optional(s.string()),
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
