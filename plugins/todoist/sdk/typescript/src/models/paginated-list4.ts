import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemSyncViewSchema, type ItemSyncView } from "./item-sync-view.js";

export type PaginatedList4 = {
  /** Objects in the current page of results. */
  results: ItemSyncView[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList4Schema: Schema<PaginatedList4> = s.object<PaginatedList4>(
  {
    results: s.array(s.lazy(() => itemSyncViewSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
