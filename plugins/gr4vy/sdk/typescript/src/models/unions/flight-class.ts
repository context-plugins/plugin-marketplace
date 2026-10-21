import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates service class (first class, business class, etc.). */
export type FlightClass = string;

export const flightClassSchema: Schema<FlightClass> = s.of<FlightClass>(s.union([s.string()]));
