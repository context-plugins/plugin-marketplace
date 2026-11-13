import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { noteSyncViewSchema, type NoteSyncView } from "./note-sync-view.js";

export type PaginatedList6 = {
  /** Objects in the current page of results. */
  results: NoteSyncView[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList6Schema: Schema<PaginatedList6> = s.object<PaginatedList6>(
  {
    results: s.array(s.lazy(() => noteSyncViewSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
