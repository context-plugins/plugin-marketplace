import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PlanetpositionsRequest = {
  /** The date to get planetary position data for (MM-DD-YYYY) */
  date?: string;
  /**
   * The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided
   */
  time?: string;
  /** The latitude of the observer */
  lat: number;
  /** The longitude of the observer */
  lon: number;
  /** The altitude of the observer in meters */
  alt?: number;
  /** The planet to get position data for */
  planet: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PlanetpositionsRequestSchema: Schema<V1PlanetpositionsRequest> =
  s.object<V1PlanetpositionsRequest>(
    {
      date: s.optional(s.string()),
      time: s.optional(s.string()),
      lat: s.float64(),
      lon: s.float64(),
      alt: s.optional(s.float64()),
      planet: s.string(),
    },
    { additionalProperties: s.json() },
  );
