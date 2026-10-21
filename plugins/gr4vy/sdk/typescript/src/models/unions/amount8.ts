import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The amount used for 3DS authentication. */
export type Amount8 = number;

export const amount8Schema: Schema<Amount8> = s.of<Amount8>(s.union([s.int()]));
