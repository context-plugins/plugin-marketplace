import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { includeAsanaTasksApiSchema, type IncludeAsanaTasksApi } from "./include-asana-tasks-api.js";

export type TaskDuplicateRequest = {
  /** The name of the new task. */
  name?: string;
  /** The fields that will be duplicated to the new task. */
  include?: IncludeAsanaTasksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskDuplicateRequestSchema: Schema<TaskDuplicateRequest> = s.object<TaskDuplicateRequest>(
  {
    name: s.optional(s.string()),
    include: s.optional(s.lazy(() => includeAsanaTasksApiSchema)),
  },
  { additionalProperties: s.json() },
);
