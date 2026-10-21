import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Email address of the beneficiary. */
export type Email2 = string;

export const email2Schema: Schema<Email2> = s.of<Email2>(s.union([s.string()]));
