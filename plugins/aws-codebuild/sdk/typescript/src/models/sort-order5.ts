import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Use to specify whether the results are returned in ascending or descending order. */
export const SortOrder5 = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder5 = (typeof SortOrder5)[keyof typeof SortOrder5] | (string & {});

export const sortOrder5Schema: EnumSchema<SortOrder5> = s.enumOf<SortOrder5>(SortOrder5);
