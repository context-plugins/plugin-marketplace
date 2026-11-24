import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskBatchCreateResponseSchema, type TaskBatchCreateResponse } from "./task-batch-create-response.js";

export type TasksBulkResponse1 = {
  /** Response containing created tasks count and task details */
  data?: TaskBatchCreateResponse;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksBulkResponse1Schema: Schema<TasksBulkResponse1> = s.object<TasksBulkResponse1>(
  {
    data: s.optional(s.lazy(() => taskBatchCreateResponseSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
