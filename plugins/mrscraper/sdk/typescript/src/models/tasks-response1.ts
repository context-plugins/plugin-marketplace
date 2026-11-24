import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskTaskSchema, type TaskTask } from "./task-task.js";

export type TasksResponse1 = {
  data?: TaskTask;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksResponse1Schema: Schema<TasksResponse1> = s.object<TasksResponse1>(
  {
    data: s.optional(s.lazy(() => taskTaskSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
