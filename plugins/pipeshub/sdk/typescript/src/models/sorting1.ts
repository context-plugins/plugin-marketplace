import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortBy5Schema, type SortBy5 } from "./sort-by5.js";
import { sortOrder6Schema, type SortOrder6 } from "./sort-order6.js";

export type Sorting1 = {
  sortBy?: SortBy5;
  sortOrder?: SortOrder6;
};

export const sorting1Schema: Schema<Sorting1> = s.object<Sorting1>({
  sortBy: s.optional(s.lazy(() => sortBy5Schema)),
  sortOrder: s.optional(s.lazy(() => sortOrder6Schema)),
});
