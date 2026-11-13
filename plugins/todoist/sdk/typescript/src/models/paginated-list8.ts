import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationSyncViewSchema, type NotificationSyncView } from "./notification-sync-view.js";

export type PaginatedList8 = {
  /** Objects in the current page of results. */
  results: NotificationSyncView[];
  /** Cursor for the next page of results, or `null` when there are no more results. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedList8Schema: Schema<PaginatedList8> = s.object<PaginatedList8>(
  {
    results: s.array(s.lazy(() => notificationSyncViewSchema)),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
