import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Departure city name. */
export type DepartureCity = string;

export const departureCitySchema: Schema<DepartureCity> = s.of<DepartureCity>(s.union([s.string()]));
