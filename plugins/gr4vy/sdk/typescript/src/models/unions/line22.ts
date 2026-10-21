import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Line 2 of the address. */
export type Line22 = string;

export const line22Schema: Schema<Line22> = s.of<Line22>(s.union([s.string()]));
