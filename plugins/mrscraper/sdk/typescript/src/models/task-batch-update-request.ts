import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  taskBatchUpdateTaskSwaggerSchema,
  type TaskBatchUpdateTaskSwagger,
} from "./task-batch-update-task-swagger.js";

/** Batch update request containing an array of task updates */
export type TaskBatchUpdateRequest = {
  data?: TaskBatchUpdateTaskSwagger[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskBatchUpdateRequestSchema: Schema<TaskBatchUpdateRequest> = s.object<TaskBatchUpdateRequest>(
  {
    data: s.optional(s.array(s.lazy(() => taskBatchUpdateTaskSwaggerSchema))),
  },
  { additionalProperties: s.json() },
);
