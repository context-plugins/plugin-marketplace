import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateFilters1Schema, type DateFilters1 } from "./date-filters1.js";
import { messageFilters1Schema, type MessageFilters1 } from "./message-filters1.js";
import { minMessages2Schema, type MinMessages2 } from "./min-messages2.js";
import { pagination7Schema, type Pagination7 } from "./pagination7.js";
import { searchSchema, type Search } from "./search.js";
import { shared2Schema, type Shared2 } from "./shared2.js";
import { sortingMessages3Schema, type SortingMessages3 } from "./sorting-messages3.js";
import { sorting3Schema, type Sorting3 } from "./sorting3.js";
import { tags2Schema, type Tags2 } from "./tags2.js";

export type Available4 = {
  shared?: Shared2;
  /** Advertised in the `available` catalog but not currently applied as a filter by the server. */
  tags?: Tags2;
  /** Advertised in the `available` catalog but not currently applied as a filter by the server. */
  minMessages?: MinMessages2;
  search?: Search;
  pagination?: Pagination7;
  /**
   * Sort applied to the conversation list. Field set echoes back the original list-endpoint sort
   * options even though this endpoint returns a single conversation.
   */
  sorting?: Sorting3;
  dateFilters?: DateFilters1;
  messageFilters?: MessageFilters1;
  /**
   * Sort applied to messages within the conversation (separate from the conversation-list `sorting`
   * block).
   */
  sortingMessages?: SortingMessages3;
};

export const available4Schema: Schema<Available4> = s.object<Available4>({
  shared: s.optional(s.lazy(() => shared2Schema)),
  tags: s.optional(s.lazy(() => tags2Schema)),
  minMessages: s.optional(s.lazy(() => minMessages2Schema)),
  search: s.optional(s.lazy(() => searchSchema)),
  pagination: s.optional(s.lazy(() => pagination7Schema)),
  sorting: s.optional(s.lazy(() => sorting3Schema)),
  dateFilters: s.optional(s.lazy(() => dateFilters1Schema)),
  messageFilters: s.optional(s.lazy(() => messageFilters1Schema)),
  sortingMessages: s.optional(s.lazy(() => sortingMessages3Schema)),
});
