import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accumulableInfoSchema, type AccumulableInfo } from "./accumulable-info.js";
import {
  executorMetricsDistributionsSchema,
  type ExecutorMetricsDistributions,
} from "./executor-metrics-distributions.js";
import { executorMetricsSchema, type ExecutorMetrics } from "./executor-metrics.js";
import { executorStageSummarySchema, type ExecutorStageSummary } from "./executor-stage-summary.js";
import { speculationStageSummarySchema, type SpeculationStageSummary } from "./speculation-stage-summary.js";
import { stageMetricsSchema, type StageMetrics } from "./stage-metrics.js";
import { status2Schema, type Status2 } from "./status2.js";
import { taskDataSchema, type TaskData } from "./task-data.js";
import { taskQuantileMetrics2Schema, type TaskQuantileMetrics2 } from "./task-quantile-metrics2.js";

/** Data corresponding to a stage. */
export type StageData = {
  numKilledTasks?: number;
  stageAttemptId?: number;
  schedulingPool?: string;
  killedTasksSummary?: Record<string, number>;
  submissionTime?: string;
  numFailedTasks?: number;
  rddIds?: string[];
  firstTaskLaunchedTime?: string;
  locality?: Record<string, string>;
  stageId?: string;
  tasks?: Record<string, TaskData>;
  description?: string;
  parentStageIds?: string[];
  /** Details of the speculation task when speculative execution is enabled. */
  speculationSummary?: SpeculationStageSummary;
  failureReason?: string;
  peakExecutorMetrics?: ExecutorMetrics;
  shuffleMergersCount?: number;
  /**
   * Summary metrics fields. These are included in response only if present in summary_metrics_mask
   * field in request
   */
  taskQuantileMetrics?: TaskQuantileMetrics2;
  details?: string;
  status?: Status2;
  completionTime?: string;
  /** Stage Level Aggregated Metrics */
  stageMetrics?: StageMetrics;
  resourceProfileId?: number;
  numCompleteTasks?: number;
  accumulatorUpdates?: AccumulableInfo[];
  numTasks?: number;
  executorSummary?: Record<string, ExecutorStageSummary>;
  isShufflePushEnabled?: boolean;
  jobIds?: string[];
  name?: string;
  numCompletedIndices?: number;
  numActiveTasks?: number;
  executorMetricsDistributions?: ExecutorMetricsDistributions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageDataSchema: Schema<StageData> = s.object<StageData>(
  {
    numKilledTasks: s.optional(s.int()),
    stageAttemptId: s.optional(s.int()),
    schedulingPool: s.optional(s.string()),
    killedTasksSummary: s.optional(s.record(s.string(), s.int())),
    submissionTime: s.optional(s.string()),
    numFailedTasks: s.optional(s.int()),
    rddIds: s.optional(s.array(s.string())),
    firstTaskLaunchedTime: s.optional(s.string()),
    locality: s.optional(s.record(s.string(), s.string())),
    stageId: s.optional(s.string()),
    tasks: s.optional(
      s.record(
        s.string(),
        s.lazy(() => taskDataSchema),
      ),
    ),
    description: s.optional(s.string()),
    parentStageIds: s.optional(s.array(s.string())),
    speculationSummary: s.optional(s.lazy(() => speculationStageSummarySchema)),
    failureReason: s.optional(s.string()),
    peakExecutorMetrics: s.optional(s.lazy(() => executorMetricsSchema)),
    shuffleMergersCount: s.optional(s.int()),
    taskQuantileMetrics: s.optional(s.lazy(() => taskQuantileMetrics2Schema)),
    details: s.optional(s.string()),
    status: s.optional(s.lazy(() => status2Schema)),
    completionTime: s.optional(s.string()),
    stageMetrics: s.optional(s.lazy(() => stageMetricsSchema)),
    resourceProfileId: s.optional(s.int()),
    numCompleteTasks: s.optional(s.int()),
    accumulatorUpdates: s.optional(s.array(s.lazy(() => accumulableInfoSchema))),
    numTasks: s.optional(s.int()),
    executorSummary: s.optional(
      s.record(
        s.string(),
        s.lazy(() => executorStageSummarySchema),
      ),
    ),
    isShufflePushEnabled: s.optional(s.boolean()),
    jobIds: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
    numCompletedIndices: s.optional(s.int()),
    numActiveTasks: s.optional(s.int()),
    executorMetricsDistributions: s.optional(s.lazy(() => executorMetricsDistributionsSchema)),
  },
  { additionalProperties: s.json() },
);
