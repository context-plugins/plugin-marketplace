import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemSyncViewSchema, type ItemSyncView } from "./item-sync-view.js";

export type TasksCompletedDateResponse = {
  /** Completed tasks in the current page. */
  items?: ItemSyncView[];
  /**
   * Cursor for the next page of completed tasks, when more results are available. Omitted when
   * there is no next page.
   */
  nextCursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksCompletedDateResponseSchema: Schema<TasksCompletedDateResponse> =
  s.object<TasksCompletedDateResponse>(
    {
      items: s.optional(s.array(s.lazy(() => itemSyncViewSchema))),
      nextCursor: s.optional(s.string()),
      _keysMap: {
        nextCursor: "next_cursor",
      },
    },
    { additionalProperties: s.json() },
  );
