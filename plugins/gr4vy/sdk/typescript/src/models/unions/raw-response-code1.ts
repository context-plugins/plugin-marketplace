import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that received the specified raw response code
 * from the payment service. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null
 * for this field.
 */
export type RawResponseCode1 = string[];

export const rawResponseCode1Schema: Schema<RawResponseCode1> = s.of<RawResponseCode1>(
  s.union([s.array(s.string())]),
);
