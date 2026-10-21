import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The first name(s) or given name for the buyer. */
export type FirstName2 = string;

export const firstName2Schema: Schema<FirstName2> = s.of<FirstName2>(s.union([s.string()]));
