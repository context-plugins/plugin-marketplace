import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Geographic coordinates of the place. */
export type Coordinate = {
  /** Latitude in decimal degrees. */
  lat?: number | null;
  /** Longitude in decimal degrees. */
  lon?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coordinateSchema: Schema<Coordinate> = s.object<Coordinate>(
  {
    lat: s.optionalNullable(s.float64()),
    lon: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
