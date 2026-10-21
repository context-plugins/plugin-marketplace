import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The country for the address in ISO 3166 format. */
export type Country = string;

export const countrySchema: Schema<Country> = s.of<Country>(s.union([s.string()]));
