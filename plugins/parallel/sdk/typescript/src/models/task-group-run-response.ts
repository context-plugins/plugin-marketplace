import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskGroupStatus3Schema, type TaskGroupStatus3 } from "./task-group-status3.js";
import { eventCursorSchema, type EventCursor } from "./unions/event-cursor.js";
import { runCursorSchema, type RunCursor } from "./unions/run-cursor.js";

/** Response from adding new task runs to a task group. */
export type TaskGroupRunResponse = {
  /** Status of the group. */
  status: TaskGroupStatus3;
  /** IDs of the newly created runs. */
  runIds: string[];
  /**
   * Cursor for these runs in the run stream at taskgroup/runs?last_event_id=<run_cursor>. Empty for
   * the first runs in the group.
   */
  runCursor: RunCursor;
  /**
   * Cursor for these runs in the event stream at taskgroup/events?last_event_id=<event_cursor>.
   * Empty for the first runs in the group.
   */
  eventCursor: EventCursor;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskGroupRunResponseSchema: Schema<TaskGroupRunResponse> = s.object<TaskGroupRunResponse>(
  {
    status: taskGroupStatus3Schema,
    runIds: s.array(s.string()),
    runCursor: runCursorSchema,
    eventCursor: eventCursorSchema,
    _keysMap: {
      runIds: "run_ids",
      runCursor: "run_cursor",
      eventCursor: "event_cursor",
    },
  },
  { additionalProperties: s.json() },
);
