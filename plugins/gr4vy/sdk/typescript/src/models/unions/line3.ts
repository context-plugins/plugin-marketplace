import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Line 3 of the address. */
export type Line3 = string;

export const line3Schema: Schema<Line3> = s.of<Line3>(s.union([s.string()]));
