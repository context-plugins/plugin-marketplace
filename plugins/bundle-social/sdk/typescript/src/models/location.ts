import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Physical location metadata */
export type Location = {
  city?: string | null;
  country?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  state?: string | null;
  street?: string | null;
  zip?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSchema: Schema<Location> = s.object<Location>(
  {
    city: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    latitude: s.optionalNullable(s.float64()),
    longitude: s.optionalNullable(s.float64()),
    state: s.optionalNullable(s.string()),
    street: s.optionalNullable(s.string()),
    zip: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
