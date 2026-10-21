import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortBy6Schema, type SortBy6 } from "./sort-by6.js";
import { sortOrder7Schema, type SortOrder7 } from "./sort-order7.js";

export type SortingMessages1 = {
  sortBy?: SortBy6;
  sortOrder?: SortOrder7;
};

export const sortingMessages1Schema: Schema<SortingMessages1> = s.object<SortingMessages1>({
  sortBy: s.optional(s.lazy(() => sortBy6Schema)),
  sortOrder: s.optional(s.lazy(() => sortOrder7Schema)),
});
