import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request message for deleting a batch of tasks using BatchDeleteTasks. */
export type BatchDeleteTasksRequest = {
  /**
   * Optional. This field will be used to identify the long running operation, avoiding duplication
   * when user retries. If not provided, then a UUID will be generated at server side.
   */
  requestId?: string;
  /**
   * Required. The names of the tasks to delete. A maximum of 1000 tasks can be deleted in a batch.
   * For example: Format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   */
  names?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDeleteTasksRequestSchema: Schema<BatchDeleteTasksRequest> =
  s.object<BatchDeleteTasksRequest>(
    {
      requestId: s.optional(s.string()),
      names: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
