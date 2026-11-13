import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaginatedList11 = {
  /** Objects in the current page of results. */
  results: string[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList11Schema: Schema<PaginatedList11> = s.object<PaginatedList11>(
  {
    results: s.array(s.string()),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
