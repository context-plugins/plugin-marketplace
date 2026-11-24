import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appSummarySchema, type AppSummary } from "./app-summary.js";
import {
  applicationEnvironmentInfoSchema,
  type ApplicationEnvironmentInfo,
} from "./application-environment-info.js";
import { applicationInfoSchema, type ApplicationInfo } from "./application-info.js";
import { executorStageSummarySchema, type ExecutorStageSummary } from "./executor-stage-summary.js";
import { executorSummarySchema, type ExecutorSummary } from "./executor-summary.js";
import { jobDataSchema, type JobData } from "./job-data.js";
import { nativeBuildInfoUiData1Schema, type NativeBuildInfoUiData1 } from "./native-build-info-ui-data1.js";
import {
  nativeSqlExecutionUiData3Schema,
  type NativeSqlExecutionUiData3,
} from "./native-sql-execution-ui-data3.js";
import { poolDataSchema, type PoolData } from "./pool-data.js";
import { processSummarySchema, type ProcessSummary } from "./process-summary.js";
import { rddOperationGraphSchema, type RddOperationGraph } from "./rdd-operation-graph.js";
import { rddStorageInfoSchema, type RddStorageInfo } from "./rdd-storage-info.js";
import { resourceProfileInfoSchema, type ResourceProfileInfo } from "./resource-profile-info.js";
import {
  sparkConnectExecutionInfo1Schema,
  type SparkConnectExecutionInfo1,
} from "./spark-connect-execution-info1.js";
import {
  sparkConnectSessionInfo1Schema,
  type SparkConnectSessionInfo1,
} from "./spark-connect-session-info1.js";
import { sparkPlanGraphSchema, type SparkPlanGraph } from "./spark-plan-graph.js";
import { speculationStageSummarySchema, type SpeculationStageSummary } from "./speculation-stage-summary.js";
import { sqlExecutionUiDataSchema, type SqlExecutionUiData } from "./sql-execution-ui-data.js";
import { stageDataSchema, type StageData } from "./stage-data.js";
import { streamBlockDataSchema, type StreamBlockData } from "./stream-block-data.js";
import { streamingQueryDataSchema, type StreamingQueryData } from "./streaming-query-data.js";
import { streamingQueryProgressSchema, type StreamingQueryProgress } from "./streaming-query-progress.js";
import { taskDataSchema, type TaskData } from "./task-data.js";

/**
 * Outer message that contains the data obtained from spark listener, packaged with information that
 * is required to process it.
 */
export type SparkWrapperObject = {
  appSummary?: AppSummary;
  /** Graph representing RDD dependencies. Consists of edges and a root cluster. */
  rddOperationGraph?: RddOperationGraph;
  /** Details about executors used by the application. */
  executorSummary?: ExecutorSummary;
  /** Spark Connect Execution Info */
  sparkConnectExecutionInfo?: SparkConnectExecutionInfo1;
  /** Native SQL Execution Info */
  nativeSqlExecutionUiData?: NativeSqlExecutionUiData3;
  /** Details about the Environment that the application is running in. */
  applicationEnvironmentInfo?: ApplicationEnvironmentInfo;
  /** Stream Block Data. */
  streamBlockData?: StreamBlockData;
  streamingQueryProgress?: StreamingQueryProgress;
  /** Details of the speculation task when speculative execution is enabled. */
  speculationStageSummary?: SpeculationStageSummary;
  /** Process Summary */
  processSummary?: ProcessSummary;
  /** Spark Connect Session Info */
  sparkConnectSessionInfo?: SparkConnectSessionInfo1;
  /** Native Build Info */
  nativeBuildInfoUiData?: NativeBuildInfoUiData1;
  /** Executor resources consumed by a stage. */
  executorStageSummary?: ExecutorStageSummary;
  /** Data corresponding to a spark job. */
  jobData?: JobData;
  /** Data corresponding to a stage. */
  stageData?: StageData;
  /** Overall data about RDD storage. */
  rddStorageInfo?: RddStorageInfo;
  /** A graph used for storing information of an executionPlan of DataFrame. */
  sparkPlanGraph?: SparkPlanGraph;
  /** Data corresponding to tasks created by spark. */
  taskData?: TaskData;
  /** Application Id created by Spark. */
  applicationId?: string;
  /** High level information corresponding to an application. */
  applicationInfo?: ApplicationInfo;
  /** SQL Execution Data */
  sqlExecutionUiData?: SqlExecutionUiData;
  /** Streaming */
  streamingQueryData?: StreamingQueryData;
  /**
   * Resource profile that contains information about all the resources required by executors and
   * tasks.
   */
  resourceProfileInfo?: ResourceProfileInfo;
  /** VM Timestamp associated with the data object. */
  eventTimestamp?: string;
  /** Pool Data */
  poolData?: PoolData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkWrapperObjectSchema: Schema<SparkWrapperObject> = s.object<SparkWrapperObject>(
  {
    appSummary: s.optional(s.lazy(() => appSummarySchema)),
    rddOperationGraph: s.optional(s.lazy(() => rddOperationGraphSchema)),
    executorSummary: s.optional(s.lazy(() => executorSummarySchema)),
    sparkConnectExecutionInfo: s.optional(s.lazy(() => sparkConnectExecutionInfo1Schema)),
    nativeSqlExecutionUiData: s.optional(s.lazy(() => nativeSqlExecutionUiData3Schema)),
    applicationEnvironmentInfo: s.optional(s.lazy(() => applicationEnvironmentInfoSchema)),
    streamBlockData: s.optional(s.lazy(() => streamBlockDataSchema)),
    streamingQueryProgress: s.optional(s.lazy(() => streamingQueryProgressSchema)),
    speculationStageSummary: s.optional(s.lazy(() => speculationStageSummarySchema)),
    processSummary: s.optional(s.lazy(() => processSummarySchema)),
    sparkConnectSessionInfo: s.optional(s.lazy(() => sparkConnectSessionInfo1Schema)),
    nativeBuildInfoUiData: s.optional(s.lazy(() => nativeBuildInfoUiData1Schema)),
    executorStageSummary: s.optional(s.lazy(() => executorStageSummarySchema)),
    jobData: s.optional(s.lazy(() => jobDataSchema)),
    stageData: s.optional(s.lazy(() => stageDataSchema)),
    rddStorageInfo: s.optional(s.lazy(() => rddStorageInfoSchema)),
    sparkPlanGraph: s.optional(s.lazy(() => sparkPlanGraphSchema)),
    taskData: s.optional(s.lazy(() => taskDataSchema)),
    applicationId: s.optional(s.string()),
    applicationInfo: s.optional(s.lazy(() => applicationInfoSchema)),
    sqlExecutionUiData: s.optional(s.lazy(() => sqlExecutionUiDataSchema)),
    streamingQueryData: s.optional(s.lazy(() => streamingQueryDataSchema)),
    resourceProfileInfo: s.optional(s.lazy(() => resourceProfileInfoSchema)),
    eventTimestamp: s.optional(s.string()),
    poolData: s.optional(s.lazy(() => poolDataSchema)),
  },
  { additionalProperties: s.json() },
);
