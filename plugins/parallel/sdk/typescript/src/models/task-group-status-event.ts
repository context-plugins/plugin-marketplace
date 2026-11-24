import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskGroupStatus2Schema, type TaskGroupStatus2 } from "./task-group-status2.js";

/** Event indicating an update to group status. */
export type TaskGroupStatusEvent = {
  /** Event type; always 'task_group_status'. @default "task_group_status" */
  type?: "task_group_status";
  /** Cursor to resume the event stream. */
  eventId: string;
  /** Task group status object. */
  status: TaskGroupStatus2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskGroupStatusEventSchema: Schema<TaskGroupStatusEvent> = s.object<TaskGroupStatusEvent>(
  {
    type: s.defaulted(s.literal("task_group_status"), "task_group_status"),
    eventId: s.string(),
    status: taskGroupStatus2Schema,
    _keysMap: {
      eventId: "event_id",
    },
  },
  { additionalProperties: s.json() },
);
