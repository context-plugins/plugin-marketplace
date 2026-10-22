import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortBy5Schema, type SortBy5 } from "./sort-by5.js";
import { sortOrder9Schema, type SortOrder9 } from "./sort-order9.js";

export type Sorting2 = {
  sortBy?: SortBy5;
  sortOrder?: SortOrder9;
};

export const sorting2Schema: Schema<Sorting2> = s.object<Sorting2>({
  sortBy: s.optional(s.lazy(() => sortBy5Schema)),
  sortOrder: s.optional(s.lazy(() => sortOrder9Schema)),
});
