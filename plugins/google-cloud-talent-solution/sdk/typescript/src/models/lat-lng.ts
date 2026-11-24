import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to
 * represent degrees latitude and degrees longitude. Unless specified otherwise, this object must
 * conform to the WGS84 standard. Values must be within normalized ranges.
 */
export type LatLng = {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const latLngSchema: Schema<LatLng> = s.object<LatLng>(
  {
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
