import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateFilters1Schema, type DateFilters1 } from "./date-filters1.js";
import { messageFilters1Schema, type MessageFilters1 } from "./message-filters1.js";
import { minMessagesSchema, type MinMessages } from "./min-messages.js";
import { pagination7Schema, type Pagination7 } from "./pagination7.js";
import { searchSchema, type Search } from "./search.js";
import { sharedSchema, type Shared } from "./shared.js";
import { sortingMessages1Schema, type SortingMessages1 } from "./sorting-messages1.js";
import { sorting1Schema, type Sorting1 } from "./sorting1.js";
import { tagsSchema, type Tags } from "./tags.js";

export type Available2 = {
  shared: Shared;
  tags: Tags;
  minMessages: MinMessages;
  search: Search;
  pagination: Pagination7;
  sorting: Sorting1;
  dateFilters: DateFilters1;
  messageFilters: MessageFilters1;
  sortingMessages: SortingMessages1;
};

export const available2Schema: Schema<Available2> = s.object<Available2>({
  shared: sharedSchema,
  tags: tagsSchema,
  minMessages: minMessagesSchema,
  search: searchSchema,
  pagination: pagination7Schema,
  sorting: sorting1Schema,
  dateFilters: dateFilters1Schema,
  messageFilters: messageFilters1Schema,
  sortingMessages: sortingMessages1Schema,
});
