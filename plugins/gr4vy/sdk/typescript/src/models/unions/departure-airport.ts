import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Departure airport code of leg. 3-letter ISO code according to IATA official directory. */
export type DepartureAirport = string;

export const departureAirportSchema: Schema<DepartureAirport> = s.of<DepartureAirport>(s.union([s.string()]));
