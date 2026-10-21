import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The second line of the address. */
export type Line2 = string;

export const line2Schema: Schema<Line2> = s.of<Line2>(s.union([s.string()]));
