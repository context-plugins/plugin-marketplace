import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that used the specified instrument type. This
 * parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to
 * include transactions that have a null for this field.
 */
export type InstrumentType1 = string[];

export const instrumentType1Schema: Schema<InstrumentType1> = s.of<InstrumentType1>(
  s.union([s.array(s.string())]),
);
