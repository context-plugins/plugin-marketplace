import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order to sort the results in. The results are sorted by build number, not the build
 * identifier. If this is not specified, the results are sorted in descending order. Valid values
 * include: ASCENDING: List the build identifiers in ascending order, by build number. DESCENDING:
 * List the build identifiers in descending order, by build number. If the project has more than 100
 * builds, setting the sort order will result in an error.
 */
export const SortOrder3 = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder3 = (typeof SortOrder3)[keyof typeof SortOrder3] | (string & {});

export const sortOrder3Schema: EnumSchema<SortOrder3> = s.enumOf<SortOrder3>(SortOrder3);
