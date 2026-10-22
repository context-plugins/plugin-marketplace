import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The first line of the address. */
export type Line1 = string;

export const line1Schema: Schema<Line1> = s.of<Line1>(s.union([s.string()]));
