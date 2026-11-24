import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createTaskRequestSchema, type CreateTaskRequest } from "./create-task-request.js";

/** Request message for [BatchCreateTasks]. */
export type BatchCreateTasksRequest = {
  /**
   * Required. The list of requests to create tasks. The queue specified in parent field of each
   * CreateTaskRequest will be the same. This validation happens on the client side as well as in
   * the handler. BatchCreateTasksRequest.parent will also be the same value as the individual
   * `CreateTaskRequest.parent`. The maximum number of requests is 100.
   */
  requests?: CreateTaskRequest[];
  /**
   * Optional. This field will be used to identify the long running operation, avoiding duplication
   * when user retries. If not provided, then a UUID will be generated at server side.
   */
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchCreateTasksRequestSchema: Schema<BatchCreateTasksRequest> =
  s.object<BatchCreateTasksRequest>(
    {
      requests: s.optional(s.array(s.lazy(() => createTaskRequestSchema))),
      requestId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
