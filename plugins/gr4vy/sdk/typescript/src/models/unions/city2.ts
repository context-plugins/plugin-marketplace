import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** City of the beneficiary's address. */
export type City2 = string;

export const city2Schema: Schema<City2> = s.of<City2>(s.union([s.string()]));
