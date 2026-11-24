import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** country name or ISO3 (e.g. PHL) */
export type Country = string;

export const countrySchema: Schema<Country> = s.of<Country>(s.union([s.string()]));
