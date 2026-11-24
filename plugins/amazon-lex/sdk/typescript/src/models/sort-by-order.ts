import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order so sort the list. */
export const SortByOrder = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortByOrder = (typeof SortByOrder)[keyof typeof SortByOrder] | (string & {});

export const sortByOrderSchema: EnumSchema<SortByOrder> = s.enumOf<SortByOrder>(SortByOrder);
