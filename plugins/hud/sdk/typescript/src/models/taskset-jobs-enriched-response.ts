import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enrichedJobThumbnailSchema, type EnrichedJobThumbnail } from "./enriched-job-thumbnail.js";
import { tasksetTaskRefSchema, type TasksetTaskRef } from "./taskset-task-ref.js";

export type TasksetJobsEnrichedResponse = {
  jobs: EnrichedJobThumbnail[];
  totalCount: number;
  tasksetTasks?: TasksetTaskRef[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksetJobsEnrichedResponseSchema: Schema<TasksetJobsEnrichedResponse> =
  s.object<TasksetJobsEnrichedResponse>(
    {
      jobs: s.array(s.lazy(() => enrichedJobThumbnailSchema)),
      totalCount: s.int(),
      tasksetTasks: s.optional(s.array(s.lazy(() => tasksetTaskRefSchema))),
      _keysMap: {
        totalCount: "total_count",
        tasksetTasks: "taskset_tasks",
      },
    },
    { additionalProperties: s.json() },
  );
