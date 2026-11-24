import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusParallelAiTasksApiSchema,
  type StatusParallelAiTasksApi,
} from "./status-parallel-ai-tasks-api.js";
import { createdAtSchema, type CreatedAt } from "./unions/created-at.js";
import {
  errorParallelAiTasksApiSchema,
  type ErrorParallelAiTasksApi,
} from "./unions/error-parallel-ai-tasks-api.js";
import { metadata2Schema, type Metadata2 } from "./unions/metadata2.js";
import { modifiedAt1Schema, type ModifiedAt1 } from "./unions/modified-at1.js";
import { taskgroupIdSchema, type TaskgroupId } from "./unions/taskgroup-id.js";
import {
  warningsParallelAiTasksApiSchema,
  type WarningsParallelAiTasksApi,
} from "./unions/warnings-parallel-ai-tasks-api.js";

/** Status of a task run. */
export type TaskRun = {
  /** ID of the task run. */
  runId: string;
  /**
   * Identifier for this interaction. Pass this value as `previous_interaction_id` to reuse context
   * for a future request.
   */
  interactionId: string;
  /** Status of the run. */
  status: StatusParallelAiTasksApi;
  /**
   * Whether the run is currently active, i.e. status is one of {'cancelling', 'queued', 'running'}.
   */
  isActive: boolean;
  /** Warnings for the run, if any. */
  warnings?: WarningsParallelAiTasksApi;
  /** Error for the run, present only if status is 'failed'. */
  error?: ErrorParallelAiTasksApi;
  /** Processor used for the run. */
  processor: string;
  /** User-provided metadata stored with the run. */
  metadata?: Metadata2;
  /** ID of the taskgroup to which the run belongs. */
  taskgroupId?: TaskgroupId;
  /** Timestamp of the creation of the task, as an RFC 3339 string. */
  createdAt: CreatedAt;
  /** Timestamp of the last modification to the task, as an RFC 3339 string. */
  modifiedAt: ModifiedAt1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRunSchema: Schema<TaskRun> = s.object<TaskRun>(
  {
    runId: s.string(),
    interactionId: s.string(),
    status: statusParallelAiTasksApiSchema,
    isActive: s.boolean(),
    warnings: s.optional(s.lazy(() => warningsParallelAiTasksApiSchema)),
    error: s.optional(s.lazy(() => errorParallelAiTasksApiSchema)),
    processor: s.string(),
    metadata: s.optional(s.lazy(() => metadata2Schema)),
    taskgroupId: s.optional(s.lazy(() => taskgroupIdSchema)),
    createdAt: createdAtSchema,
    modifiedAt: modifiedAt1Schema,
    _keysMap: {
      runId: "run_id",
      interactionId: "interaction_id",
      isActive: "is_active",
      taskgroupId: "taskgroup_id",
      createdAt: "created_at",
      modifiedAt: "modified_at",
    },
  },
  { additionalProperties: s.json() },
);
