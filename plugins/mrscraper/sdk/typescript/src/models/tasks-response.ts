import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiTPaginationMetaSchema, type ApiTPaginationMeta } from "./api-tpagination-meta.js";
import { taskTaskSchema, type TaskTask } from "./task-task.js";

export type TasksResponse = {
  data?: TaskTask[];
  meta?: ApiTPaginationMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksResponseSchema: Schema<TasksResponse> = s.object<TasksResponse>(
  {
    data: s.optional(s.array(s.lazy(() => taskTaskSchema))),
    meta: s.optional(s.lazy(() => apiTPaginationMetaSchema)),
  },
  { additionalProperties: s.json() },
);
