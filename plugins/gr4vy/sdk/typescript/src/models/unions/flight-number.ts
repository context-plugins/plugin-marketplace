import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unique identifier of the flight number. */
export type FlightNumber = string;

export const flightNumberSchema: Schema<FlightNumber> = s.of<FlightNumber>(s.union([s.string()]));
