import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How SearchResults are ordered. Valid values are Ascending or Descending. The default is
 * Descending.
 */
export const SearchOrder = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type SearchOrder = (typeof SearchOrder)[keyof typeof SearchOrder] | (string & {});

export const searchOrderSchema: EnumSchema<SearchOrder> = s.enumOf<SearchOrder>(SearchOrder);
