import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order in which to list shared build projects. Valid values include: ASCENDING: List in
 * ascending order. DESCENDING: List in descending order.
 */
export const SortOrder6 = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder6 = (typeof SortOrder6)[keyof typeof SortOrder6] | (string & {});

export const sortOrder6Schema: EnumSchema<SortOrder6> = s.enumOf<SortOrder6>(SortOrder6);
