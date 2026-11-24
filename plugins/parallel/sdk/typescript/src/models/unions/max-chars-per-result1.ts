import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional limit on the number of characters to include in the full content for each url. Full
 * content always starts at the beginning of the page and is truncated at the limit if necessary.
 */
export type MaxCharsPerResult1 = number;

export const maxCharsPerResult1Schema: Schema<MaxCharsPerResult1> = s.of<MaxCharsPerResult1>(
  s.union([s.int()]),
);
