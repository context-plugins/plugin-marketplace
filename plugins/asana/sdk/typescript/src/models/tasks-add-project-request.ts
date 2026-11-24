import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskAddProjectRequestSchema, type TaskAddProjectRequest } from "./task-add-project-request.js";

export type TasksAddProjectRequest = {
  data?: TaskAddProjectRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksAddProjectRequestSchema: Schema<TasksAddProjectRequest> = s.object<TasksAddProjectRequest>(
  {
    data: s.optional(s.lazy(() => taskAddProjectRequestSchema)),
  },
  { additionalProperties: s.json() },
);
