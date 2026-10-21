import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that underwent 3DS authentication with the
 * specified method. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that didn't
 * undergo 3DS authentication.
 */
export type ThreeDSecureMethod = string[];

export const threeDSecureMethodSchema: Schema<ThreeDSecureMethod> = s.of<ThreeDSecureMethod>(
  s.union([s.array(s.string())]),
);
