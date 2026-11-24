import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order to list build IDs. Valid values include: ASCENDING: List the build IDs in ascending
 * order by build ID. DESCENDING: List the build IDs in descending order by build ID.
 */
export const SortOrder = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder] | (string & {});

export const sortOrderSchema: EnumSchema<SortOrder> = s.enumOf<SortOrder>(SortOrder);
