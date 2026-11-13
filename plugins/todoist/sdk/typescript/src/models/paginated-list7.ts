import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  notificationLocationSyncViewSchema,
  type NotificationLocationSyncView,
} from "./notification-location-sync-view.js";

export type PaginatedList7 = {
  /** Objects in the current page of results. */
  results: NotificationLocationSyncView[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList7Schema: Schema<PaginatedList7> = s.object<PaginatedList7>(
  {
    results: s.array(s.lazy(() => notificationLocationSyncViewSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
