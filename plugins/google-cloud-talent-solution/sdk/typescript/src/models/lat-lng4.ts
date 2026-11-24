import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An object representing a latitude/longitude pair. */
export type LatLng4 = {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const latLng4Schema: Schema<LatLng4> = s.object<LatLng4>(
  {
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
