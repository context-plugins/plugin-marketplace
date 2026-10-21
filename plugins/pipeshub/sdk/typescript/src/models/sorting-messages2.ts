import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortBy6Schema, type SortBy6 } from "./sort-by6.js";
import { sortOrder10Schema, type SortOrder10 } from "./sort-order10.js";

export type SortingMessages2 = {
  sortBy?: SortBy6;
  sortOrder?: SortOrder10;
};

export const sortingMessages2Schema: Schema<SortingMessages2> = s.object<SortingMessages2>({
  sortBy: s.optional(s.lazy(() => sortBy6Schema)),
  sortOrder: s.optional(s.lazy(() => sortOrder10Schema)),
});
