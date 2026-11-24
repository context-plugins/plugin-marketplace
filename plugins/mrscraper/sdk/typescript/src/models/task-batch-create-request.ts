import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskTaskSwaggerSchema, type TaskTaskSwagger } from "./task-task-swagger.js";

/** Batch create request containing array of tasks */
export type TaskBatchCreateRequest = {
  data?: TaskTaskSwagger[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskBatchCreateRequestSchema: Schema<TaskBatchCreateRequest> = s.object<TaskBatchCreateRequest>(
  {
    data: s.optional(s.array(s.lazy(() => taskTaskSwaggerSchema))),
  },
  { additionalProperties: s.json() },
);
