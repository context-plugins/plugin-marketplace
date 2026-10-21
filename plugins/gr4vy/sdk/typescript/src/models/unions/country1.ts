import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The country code associated with the card. */
export type Country1 = string;

export const country1Schema: Schema<Country1> = s.of<Country1>(s.union([s.string()]));
