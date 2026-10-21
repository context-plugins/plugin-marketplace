import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Arrival airport code of leg. 3-letter ISO code according to IATA official directory. */
export type ArrivalAirport = string;

export const arrivalAirportSchema: Schema<ArrivalAirport> = s.of<ArrivalAirport>(s.union([s.string()]));
