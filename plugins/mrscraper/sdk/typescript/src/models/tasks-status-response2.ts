import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskTaskQueuedResponseSchema, type TaskTaskQueuedResponse } from "./task-task-queued-response.js";

export type TasksStatusResponse2 = {
  data?: TaskTaskQueuedResponse;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksStatusResponse2Schema: Schema<TasksStatusResponse2> = s.object<TasksStatusResponse2>(
  {
    data: s.optional(s.lazy(() => taskTaskQueuedResponseSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
