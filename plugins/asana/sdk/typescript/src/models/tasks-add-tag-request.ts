import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskAddTagRequestSchema, type TaskAddTagRequest } from "./task-add-tag-request.js";

export type TasksAddTagRequest = {
  data?: TaskAddTagRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksAddTagRequestSchema: Schema<TasksAddTagRequest> = s.object<TasksAddTagRequest>(
  {
    data: s.optional(s.lazy(() => taskAddTagRequestSchema)),
  },
  { additionalProperties: s.json() },
);
