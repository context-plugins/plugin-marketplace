import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order in which to list shared report groups. Valid values include: ASCENDING: List in
 * ascending order. DESCENDING: List in descending order.
 */
export const SortOrder7 = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder7 = (typeof SortOrder7)[keyof typeof SortOrder7] | (string & {});

export const sortOrder7Schema: EnumSchema<SortOrder7> = s.enumOf<SortOrder7>(SortOrder7);
