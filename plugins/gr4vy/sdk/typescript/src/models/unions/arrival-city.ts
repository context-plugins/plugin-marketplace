import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Arrival city name. */
export type ArrivalCity = string;

export const arrivalCitySchema: Schema<ArrivalCity> = s.of<ArrivalCity>(s.union([s.string()]));
