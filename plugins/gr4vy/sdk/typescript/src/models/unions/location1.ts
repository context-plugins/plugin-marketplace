import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The address object that can be parsed. */
export type Location1 = string;

export const location1Schema: Schema<Location1> = s.of<Location1>(s.union([s.string()]));
