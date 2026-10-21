import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed using the specified payment
 * method. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null
 * for this field.
 */
export type Method121 = string[];

export const method121Schema: Schema<Method121> = s.of<Method121>(s.union([s.array(s.string())]));
