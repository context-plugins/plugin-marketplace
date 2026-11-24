import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { failedSpanInfoSchema, type FailedSpanInfo } from "./failed-span-info.js";
import { envLogsSchema, type EnvLogs } from "./unions/env-logs.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import { errorSource1Schema, type ErrorSource1 } from "./unions/error-source1.js";
import { errorSchema, type Error } from "./unions/error.js";
import { evaluationResultSchema, type EvaluationResult } from "./unions/evaluation-result.js";
import { jobIdSchema, type JobId } from "./unions/job-id.js";
import {
  promptHudPlatformTracesApiSchema,
  type PromptHudPlatformTracesApi,
} from "./unions/prompt-hud-platform-traces-api.js";
import { registryIdSchema, type RegistryId } from "./unions/registry-id.js";
import { rewardSchema, type Reward } from "./unions/reward.js";
import { scenarioCodeSchema, type ScenarioCode } from "./unions/scenario-code.js";
import { scenarioNameSchema, type ScenarioName } from "./unions/scenario-name.js";
import { spansSchema, type Spans } from "./unions/spans.js";
import { taskExternalIdSchema, type TaskExternalId } from "./unions/task-external-id.js";
import {
  taskIdHudPlatformTracesApiSchema,
  type TaskIdHudPlatformTracesApi,
} from "./unions/task-id-hud-platform-traces-api.js";
import { taskNameSchema, type TaskName } from "./unions/task-name.js";
import { taskVersionIdSchema, type TaskVersionId } from "./unions/task-version-id.js";
import { workerLogsSchema, type WorkerLogs } from "./unions/worker-logs.js";

/** Aggregate read for analysis envs; spans carry presigned artifact URLs. */
export type TraceAnalysisContextResponse = {
  traceId: string;
  jobId?: JobId;
  taskId?: TaskIdHudPlatformTracesApi;
  taskVersionId?: TaskVersionId;
  taskExternalId?: TaskExternalId;
  taskName?: TaskName;
  status: string;
  reward?: Reward;
  error?: Error;
  errorCode?: ErrorCode;
  errorSource?: ErrorSource1;
  prompt?: PromptHudPlatformTracesApi;
  scenarioName?: ScenarioName;
  scenarioArgs?: Record<string, unknown>;
  scenarioCode?: ScenarioCode;
  registryId?: RegistryId;
  evaluationResult?: EvaluationResult;
  metadata?: Record<string, unknown>;
  spans?: Spans;
  /** @default 0 */
  spansCount?: number;
  failedSpans?: FailedSpanInfo[];
  envLogs?: EnvLogs;
  workerLogs?: WorkerLogs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceAnalysisContextResponseSchema: Schema<TraceAnalysisContextResponse> =
  s.object<TraceAnalysisContextResponse>(
    {
      traceId: s.string(),
      jobId: s.optional(s.lazy(() => jobIdSchema)),
      taskId: s.optional(s.lazy(() => taskIdHudPlatformTracesApiSchema)),
      taskVersionId: s.optional(s.lazy(() => taskVersionIdSchema)),
      taskExternalId: s.optional(s.lazy(() => taskExternalIdSchema)),
      taskName: s.optional(s.lazy(() => taskNameSchema)),
      status: s.string(),
      reward: s.optional(s.lazy(() => rewardSchema)),
      error: s.optional(s.lazy(() => errorSchema)),
      errorCode: s.optional(s.lazy(() => errorCodeSchema)),
      errorSource: s.optional(s.lazy(() => errorSource1Schema)),
      prompt: s.optional(s.lazy(() => promptHudPlatformTracesApiSchema)),
      scenarioName: s.optional(s.lazy(() => scenarioNameSchema)),
      scenarioArgs: s.optional(s.record(s.string(), s.unknown())),
      scenarioCode: s.optional(s.lazy(() => scenarioCodeSchema)),
      registryId: s.optional(s.lazy(() => registryIdSchema)),
      evaluationResult: s.optional(s.lazy(() => evaluationResultSchema)),
      metadata: s.optional(s.record(s.string(), s.unknown())),
      spans: s.optional(s.lazy(() => spansSchema)),
      spansCount: s.defaulted(s.int(), 0),
      failedSpans: s.optional(s.array(s.lazy(() => failedSpanInfoSchema))),
      envLogs: s.optional(s.lazy(() => envLogsSchema)),
      workerLogs: s.optional(s.lazy(() => workerLogsSchema)),
      _keysMap: {
        traceId: "trace_id",
        jobId: "job_id",
        taskId: "task_id",
        taskVersionId: "task_version_id",
        taskExternalId: "task_external_id",
        taskName: "task_name",
        errorCode: "error_code",
        errorSource: "error_source",
        scenarioName: "scenario_name",
        scenarioArgs: "scenario_args",
        scenarioCode: "scenario_code",
        registryId: "registry_id",
        evaluationResult: "evaluation_result",
        spansCount: "spans_count",
        failedSpans: "failed_spans",
        envLogs: "env_logs",
        workerLogs: "worker_logs",
      },
    },
    { additionalProperties: s.json() },
  );
