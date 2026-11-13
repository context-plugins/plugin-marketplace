import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sectionSyncViewSchema, type SectionSyncView } from "./section-sync-view.js";

export type PaginatedList10 = {
  /** Objects in the current page of results. */
  results: SectionSyncView[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList10Schema: Schema<PaginatedList10> = s.object<PaginatedList10>(
  {
    results: s.array(s.lazy(() => sectionSyncViewSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
