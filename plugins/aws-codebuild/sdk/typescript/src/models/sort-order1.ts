import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the sort order of the returned items. Valid values include: ASCENDING: List the batch
 * build identifiers in ascending order by identifier. DESCENDING: List the batch build identifiers
 * in descending order by identifier.
 */
export const SortOrder1 = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder1 = (typeof SortOrder1)[keyof typeof SortOrder1] | (string & {});

export const sortOrder1Schema: EnumSchema<SortOrder1> = s.enumOf<SortOrder1>(SortOrder1);
