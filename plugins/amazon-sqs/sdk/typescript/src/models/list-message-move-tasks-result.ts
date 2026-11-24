import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listMessageMoveTasksResultEntrySchema,
  type ListMessageMoveTasksResultEntry,
} from "./list-message-move-tasks-result-entry.js";

export type ListMessageMoveTasksResult = {
  /** A list of message movement tasks and their attributes. */
  results?: ListMessageMoveTasksResultEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMessageMoveTasksResultSchema: Schema<ListMessageMoveTasksResult> =
  s.object<ListMessageMoveTasksResult>(
    {
      results: s.optional(s.array(s.lazy(() => listMessageMoveTasksResultEntrySchema))),
      _keysMap: {
        results: "Results",
      },
    },
    { additionalProperties: s.json() },
  );
