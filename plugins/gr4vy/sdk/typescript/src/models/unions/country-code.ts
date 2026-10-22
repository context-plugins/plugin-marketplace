import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The country of residence of the passenger */
export type CountryCode = string;

export const countryCodeSchema: Schema<CountryCode> = s.of<CountryCode>(s.union([s.string()]));
