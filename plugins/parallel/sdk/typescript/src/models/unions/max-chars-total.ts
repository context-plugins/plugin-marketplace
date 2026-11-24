import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Upper bound on total characters across excerpts from all extracted results., Upper bound on total
 * characters across excerpts from all results.
 */
export type MaxCharsTotal = number;

export const maxCharsTotalSchema: Schema<MaxCharsTotal> = s.of<MaxCharsTotal>(s.union([s.int()]));
