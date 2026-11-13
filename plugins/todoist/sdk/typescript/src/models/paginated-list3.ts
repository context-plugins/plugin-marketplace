import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { folderSyncViewSchema, type FolderSyncView } from "./folder-sync-view.js";

export type PaginatedList3 = {
  /** Objects in the current page of results. */
  results: FolderSyncView[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList3Schema: Schema<PaginatedList3> = s.object<PaginatedList3>(
  {
    results: s.array(s.lazy(() => folderSyncViewSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
