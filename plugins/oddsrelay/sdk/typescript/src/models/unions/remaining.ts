import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tokens left, `unlimited`, or null when unknown. */
export type Remaining = number | string;

export const remainingSchema: Schema<Remaining> = s.of<Remaining>(s.union([s.int(), s.string()]));
