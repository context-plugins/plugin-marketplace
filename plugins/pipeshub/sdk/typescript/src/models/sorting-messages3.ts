import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortBy6Schema, type SortBy6 } from "./sort-by6.js";
import { sortOrder7Schema, type SortOrder7 } from "./sort-order7.js";

/**
 * Sort applied to messages within the conversation (separate from the conversation-list `sorting`
 * block).
 */
export type SortingMessages3 = {
  sortBy?: SortBy6;
  sortOrder?: SortOrder7;
};

export const sortingMessages3Schema: Schema<SortingMessages3> = s.object<SortingMessages3>({
  sortBy: s.optional(s.lazy(() => sortBy6Schema)),
  sortOrder: s.optional(s.lazy(() => sortOrder7Schema)),
});
