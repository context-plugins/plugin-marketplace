import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { noteSchema, type Note } from "./note.js";
import { pageInfoSchema, type PageInfo } from "./page-info.js";

export type PaginatedResponseNote = {
  /** Information about a page returned in a paginated response. */
  pageInfo: PageInfo;
  data: Note[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseNoteSchema: Schema<PaginatedResponseNote> = s.object<PaginatedResponseNote>(
  {
    pageInfo: pageInfoSchema,
    data: s.array(s.lazy(() => noteSchema)),
    _keysMap: {
      pageInfo: "page_info",
    },
  },
  { additionalProperties: s.json() },
);
