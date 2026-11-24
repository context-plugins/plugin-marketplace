import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LatLong = {
  latitude?: number;
  longitude?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const latLongSchema: Schema<LatLong> = s.object<LatLong>(
  {
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
