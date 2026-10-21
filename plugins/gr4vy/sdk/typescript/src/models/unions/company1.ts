import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The optional name of the company or organisation to add to the address. */
export type Company1 = string;

export const company1Schema: Schema<Company1> = s.of<Company1>(s.union([s.string()]));
