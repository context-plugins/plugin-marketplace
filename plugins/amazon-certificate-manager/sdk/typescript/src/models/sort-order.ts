import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the order of sorted results. If you specify SortOrder, you must also specify SortBy.
 */
export const SortOrder = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder] | (string & {});

export const sortOrderSchema: EnumSchema<SortOrder> = s.enumOf<SortOrder>(SortOrder);
