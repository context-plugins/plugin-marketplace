import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskRemoveTagRequestSchema, type TaskRemoveTagRequest } from "./task-remove-tag-request.js";

export type TasksRemoveTagRequest = {
  data?: TaskRemoveTagRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksRemoveTagRequestSchema: Schema<TasksRemoveTagRequest> = s.object<TasksRemoveTagRequest>(
  {
    data: s.optional(s.lazy(() => taskRemoveTagRequestSchema)),
  },
  { additionalProperties: s.json() },
);
