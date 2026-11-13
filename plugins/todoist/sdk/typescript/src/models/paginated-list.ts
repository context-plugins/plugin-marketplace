import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityEventsSchema, type ActivityEvents } from "./activity-events.js";

export type PaginatedList = {
  /** Objects in the current page of results. */
  results: ActivityEvents[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedListSchema: Schema<PaginatedList> = s.object<PaginatedList>(
  {
    results: s.array(s.lazy(() => activityEventsSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
