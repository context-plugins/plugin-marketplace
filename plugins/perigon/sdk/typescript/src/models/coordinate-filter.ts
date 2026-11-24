import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Filter articles from publishers based at specific geographic locations. Uses latitude, longitude,
 * and radius parameters to define a circular search area for publisher locations.
 */
export type CoordinateFilter = {
  lat?: number | null;
  lon?: number | null;
  radius?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coordinateFilterSchema: Schema<CoordinateFilter> = s.object<CoordinateFilter>(
  {
    lat: s.optionalNullable(s.float64()),
    lon: s.optionalNullable(s.float64()),
    radius: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
