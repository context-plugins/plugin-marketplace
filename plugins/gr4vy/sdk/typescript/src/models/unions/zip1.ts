import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The postal code or zip code for the address. */
export type Zip1 = string;

export const zip1Schema: Schema<Zip1> = s.of<Zip1>(s.union([s.string()]));
