import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  taskRemoveProjectRequestSchema,
  type TaskRemoveProjectRequest,
} from "./task-remove-project-request.js";

export type TasksRemoveProjectRequest = {
  data?: TaskRemoveProjectRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksRemoveProjectRequestSchema: Schema<TasksRemoveProjectRequest> =
  s.object<TasksRemoveProjectRequest>(
    {
      data: s.optional(s.lazy(() => taskRemoveProjectRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
