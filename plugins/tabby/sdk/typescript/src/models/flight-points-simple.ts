import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";
import { originSchema, type Origin } from "./origin.js";

export type FlightPointsSimple = {
  /** Origin city and airport */
  origin: Origin;
  /** Destination city and airport */
  destination: Destination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flightPointsSimpleSchema: Schema<FlightPointsSimple> = s.object<FlightPointsSimple>(
  {
    origin: originSchema,
    destination: destinationSchema,
  },
  { additionalProperties: s.json() },
);
