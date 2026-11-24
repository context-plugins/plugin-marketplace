import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskTaskQueuedResponseSchema, type TaskTaskQueuedResponse } from "./task-task-queued-response.js";

export type TasksResponse2 = {
  data?: TaskTaskQueuedResponse;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksResponse2Schema: Schema<TasksResponse2> = s.object<TasksResponse2>(
  {
    data: s.optional(s.lazy(() => taskTaskQueuedResponseSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
