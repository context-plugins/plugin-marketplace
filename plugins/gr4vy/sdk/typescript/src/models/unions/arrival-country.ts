import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Arrival country code in ISO 3166 format. */
export type ArrivalCountry = string;

export const arrivalCountrySchema: Schema<ArrivalCountry> = s.of<ArrivalCountry>(s.union([s.string()]));
