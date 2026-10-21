import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The country for the address in ISO 3166 format. The country name sent to Riskified is derived
 * from this value.
 */
export type CountryCode1 = string;

export const countryCode1Schema: Schema<CountryCode1> = s.of<CountryCode1>(s.union([s.string()]));
