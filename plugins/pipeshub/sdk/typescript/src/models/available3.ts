import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateFilters2Schema, type DateFilters2 } from "./date-filters2.js";
import { messageFilters1Schema, type MessageFilters1 } from "./message-filters1.js";
import { minMessages1Schema, type MinMessages1 } from "./min-messages1.js";
import { pagination7Schema, type Pagination7 } from "./pagination7.js";
import { searchSchema, type Search } from "./search.js";
import { shared1Schema, type Shared1 } from "./shared1.js";
import { sortingMessages2Schema, type SortingMessages2 } from "./sorting-messages2.js";
import { sorting2Schema, type Sorting2 } from "./sorting2.js";
import { tags1Schema, type Tags1 } from "./tags1.js";

/** Describes filters supported by this endpoint and their current values */
export type Available3 = {
  shared?: Shared1;
  tags?: Tags1;
  minMessages?: MinMessages1;
  search?: Search;
  pagination?: Pagination7;
  sorting?: Sorting2;
  dateFilters?: DateFilters2;
  messageFilters?: MessageFilters1;
  sortingMessages?: SortingMessages2;
};

export const available3Schema: Schema<Available3> = s.object<Available3>({
  shared: s.optional(s.lazy(() => shared1Schema)),
  tags: s.optional(s.lazy(() => tags1Schema)),
  minMessages: s.optional(s.lazy(() => minMessages1Schema)),
  search: s.optional(s.lazy(() => searchSchema)),
  pagination: s.optional(s.lazy(() => pagination7Schema)),
  sorting: s.optional(s.lazy(() => sorting2Schema)),
  dateFilters: s.optional(s.lazy(() => dateFilters2Schema)),
  messageFilters: s.optional(s.lazy(() => messageFilters1Schema)),
  sortingMessages: s.optional(s.lazy(() => sortingMessages2Schema)),
});
