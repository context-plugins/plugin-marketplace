import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required. The latitude and longitude of the location to calculate the commute time from. */
export type LatLng2 = {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const latLng2Schema: Schema<LatLng2> = s.object<LatLng2>(
  {
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
