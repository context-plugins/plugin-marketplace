import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executorMetricsSchema, type ExecutorMetrics } from "./executor-metrics.js";

/** Executor resources consumed by a stage. */
export type ExecutorStageSummary = {
  shuffleRead?: string;
  shuffleWriteRecords?: string;
  shuffleWrite?: string;
  executorId?: string;
  outputBytes?: string;
  failedTasks?: number;
  succeededTasks?: number;
  memoryBytesSpilled?: string;
  stageAttemptId?: number;
  stageId?: string;
  shuffleReadRecords?: string;
  isExcludedForStage?: boolean;
  diskBytesSpilled?: string;
  inputRecords?: string;
  inputBytes?: string;
  taskTimeMillis?: string;
  killedTasks?: number;
  peakMemoryMetrics?: ExecutorMetrics;
  outputRecords?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executorStageSummarySchema: Schema<ExecutorStageSummary> = s.object<ExecutorStageSummary>(
  {
    shuffleRead: s.optional(s.string()),
    shuffleWriteRecords: s.optional(s.string()),
    shuffleWrite: s.optional(s.string()),
    executorId: s.optional(s.string()),
    outputBytes: s.optional(s.string()),
    failedTasks: s.optional(s.int()),
    succeededTasks: s.optional(s.int()),
    memoryBytesSpilled: s.optional(s.string()),
    stageAttemptId: s.optional(s.int()),
    stageId: s.optional(s.string()),
    shuffleReadRecords: s.optional(s.string()),
    isExcludedForStage: s.optional(s.boolean()),
    diskBytesSpilled: s.optional(s.string()),
    inputRecords: s.optional(s.string()),
    inputBytes: s.optional(s.string()),
    taskTimeMillis: s.optional(s.string()),
    killedTasks: s.optional(s.int()),
    peakMemoryMetrics: s.optional(s.lazy(() => executorMetricsSchema)),
    outputRecords: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
