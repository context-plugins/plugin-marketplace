import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskRequestSchema, type TaskRequest } from "./task-request.js";

export type TasksSubtasksRequest = {
  data?: TaskRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksSubtasksRequestSchema: Schema<TasksSubtasksRequest> = s.object<TasksSubtasksRequest>(
  {
    data: s.optional(s.lazy(() => taskRequestSchema)),
  },
  { additionalProperties: s.json() },
);
