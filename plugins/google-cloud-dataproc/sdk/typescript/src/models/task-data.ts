import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accumulableInfoSchema, type AccumulableInfo } from "./accumulable-info.js";
import { taskMetricsSchema, type TaskMetrics } from "./task-metrics.js";

/** Data corresponding to tasks created by spark. */
export type TaskData = {
  partitionId?: number;
  taskId?: string;
  launchTime?: string;
  host?: string;
  resultFetchStart?: string;
  status?: string;
  stageAttemptId?: number;
  taskLocality?: string;
  /** Executor Task Metrics */
  taskMetrics?: TaskMetrics;
  gettingResultTimeMillis?: string;
  executorLogs?: Record<string, string>;
  index?: number;
  schedulerDelayMillis?: string;
  accumulatorUpdates?: AccumulableInfo[];
  durationMillis?: string;
  errorMessage?: string;
  stageId?: string;
  speculative?: boolean;
  hasMetrics?: boolean;
  attempt?: number;
  executorId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskDataSchema: Schema<TaskData> = s.object<TaskData>(
  {
    partitionId: s.optional(s.int()),
    taskId: s.optional(s.string()),
    launchTime: s.optional(s.string()),
    host: s.optional(s.string()),
    resultFetchStart: s.optional(s.string()),
    status: s.optional(s.string()),
    stageAttemptId: s.optional(s.int()),
    taskLocality: s.optional(s.string()),
    taskMetrics: s.optional(s.lazy(() => taskMetricsSchema)),
    gettingResultTimeMillis: s.optional(s.string()),
    executorLogs: s.optional(s.record(s.string(), s.string())),
    index: s.optional(s.int()),
    schedulerDelayMillis: s.optional(s.string()),
    accumulatorUpdates: s.optional(s.array(s.lazy(() => accumulableInfoSchema))),
    durationMillis: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
    stageId: s.optional(s.string()),
    speculative: s.optional(s.boolean()),
    hasMetrics: s.optional(s.boolean()),
    attempt: s.optional(s.int()),
    executorId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
