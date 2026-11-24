import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The geographic coordinates of the delivery or pickup address. */
export type Coordinates = {
  /** The latitude coordinate. */
  latitude?: number;
  /** The longitude coordinate. */
  longitude?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coordinatesSchema: Schema<Coordinates> = s.object<Coordinates>(
  {
    latitude: s.optional(s.float64()),
    longitude: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
