import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskResponseSchema, type TaskResponse } from "./task-response.js";

export type TasksSubtasksResponse1 = {
  data?: TaskResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksSubtasksResponse1Schema: Schema<TasksSubtasksResponse1> = s.object<TasksSubtasksResponse1>(
  {
    data: s.optional(s.lazy(() => taskResponseSchema)),
  },
  { additionalProperties: s.json() },
);
