import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { traceExecutionModeSchema, type TraceExecutionMode } from "./trace-execution-mode.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { endTimeSchema, type EndTime } from "./unions/end-time.js";
import {
  environmentHudPlatformTracesApiSchema,
  type EnvironmentHudPlatformTracesApi,
} from "./unions/environment-hud-platform-traces-api.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import { errorSource1Schema, type ErrorSource1 } from "./unions/error-source1.js";
import { errorSchema, type Error } from "./unions/error.js";
import { evaluationResultSchema, type EvaluationResult } from "./unions/evaluation-result.js";
import { importedFromSchema, type ImportedFrom } from "./unions/imported-from.js";
import { inferenceLlmModelIdSchema, type InferenceLlmModelId } from "./unions/inference-llm-model-id.js";
import { instanceIdSchema, type InstanceId } from "./unions/instance-id.js";
import { jobNameSchema, type JobName } from "./unions/job-name.js";
import {
  modelHudPlatformTasksApiSchema,
  type ModelHudPlatformTasksApi,
} from "./unions/model-hud-platform-tasks-api.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";
import { rewardSchema, type Reward } from "./unions/reward.js";
import { runtimeProviderModelSchema, type RuntimeProviderModel } from "./unions/runtime-provider-model.js";
import { startTimeSchema, type StartTime } from "./unions/start-time.js";
import { stopReason1Schema, type StopReason1 } from "./unions/stop-reason1.js";
import {
  taskIdHudPlatformTracesApiSchema,
  type TaskIdHudPlatformTracesApi,
} from "./unions/task-id-hud-platform-traces-api.js";
import { taskNameSchema, type TaskName } from "./unions/task-name.js";
import { taskPromptSchema, type TaskPrompt } from "./unions/task-prompt.js";
import { taskSlugSchema, type TaskSlug } from "./unions/task-slug.js";
import { taskVersionIdSchema, type TaskVersionId } from "./unions/task-version-id.js";
import { taskSchema, type Task } from "./unions/task.js";

export type TraceInfoResponse = {
  id: string;
  jobId: string;
  taskVersionId?: TaskVersionId;
  taskSlug?: TaskSlug;
  taskId?: TaskIdHudPlatformTracesApi;
  instanceId?: InstanceId;
  inferenceLlmModelId?: InferenceLlmModelId;
  status: string;
  reward?: Reward;
  stopReason?: StopReason1;
  /** @default 0 */
  views?: number;
  error?: Error;
  errorCode?: ErrorCode;
  errorSource?: ErrorSource1;
  evaluationResult?: EvaluationResult;
  startTime?: StartTime;
  endTime?: EndTime;
  createdAt: Date;
  taskPrompt?: TaskPrompt;
  taskName?: TaskName;
  name?: NameHudPlatformJobsApi;
  description?: Description;
  metadata?: Record<string, unknown>;
  environment?: EnvironmentHudPlatformTracesApi;
  task?: Task;
  model?: ModelHudPlatformTasksApi;
  jobName?: JobName;
  importedFrom?: ImportedFrom;
  executionMode: TraceExecutionMode;
  runtimeProvider?: RuntimeProviderModel;
  /** @default false */
  public?: boolean;
  /** @default false */
  jobPublic?: boolean;
  /** @default false */
  tracePublic?: boolean;
  /** @default false */
  isOwner?: boolean;
  /** @default false */
  canEdit?: boolean;
  /** @default false */
  canViewJob?: boolean;
  /** @default false */
  canViewTaskset?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceInfoResponseSchema: Schema<TraceInfoResponse> = s.object<TraceInfoResponse>(
  {
    id: s.string(),
    jobId: s.string(),
    taskVersionId: s.optional(s.lazy(() => taskVersionIdSchema)),
    taskSlug: s.optional(s.lazy(() => taskSlugSchema)),
    taskId: s.optional(s.lazy(() => taskIdHudPlatformTracesApiSchema)),
    instanceId: s.optional(s.lazy(() => instanceIdSchema)),
    inferenceLlmModelId: s.optional(s.lazy(() => inferenceLlmModelIdSchema)),
    status: s.string(),
    reward: s.optional(s.lazy(() => rewardSchema)),
    stopReason: s.optional(s.lazy(() => stopReason1Schema)),
    views: s.defaulted(s.int(), 0),
    error: s.optional(s.lazy(() => errorSchema)),
    errorCode: s.optional(s.lazy(() => errorCodeSchema)),
    errorSource: s.optional(s.lazy(() => errorSource1Schema)),
    evaluationResult: s.optional(s.lazy(() => evaluationResultSchema)),
    startTime: s.optional(s.lazy(() => startTimeSchema)),
    endTime: s.optional(s.lazy(() => endTimeSchema)),
    createdAt: s.dateTime(),
    taskPrompt: s.optional(s.lazy(() => taskPromptSchema)),
    taskName: s.optional(s.lazy(() => taskNameSchema)),
    name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
    description: s.optional(s.lazy(() => descriptionSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    environment: s.optional(s.lazy(() => environmentHudPlatformTracesApiSchema)),
    task: s.optional(s.lazy(() => taskSchema)),
    model: s.optional(s.lazy(() => modelHudPlatformTasksApiSchema)),
    jobName: s.optional(s.lazy(() => jobNameSchema)),
    importedFrom: s.optional(s.lazy(() => importedFromSchema)),
    executionMode: traceExecutionModeSchema,
    runtimeProvider: s.optional(s.lazy(() => runtimeProviderModelSchema)),
    public: s.defaulted(s.boolean(), false),
    jobPublic: s.defaulted(s.boolean(), false),
    tracePublic: s.defaulted(s.boolean(), false),
    isOwner: s.defaulted(s.boolean(), false),
    canEdit: s.defaulted(s.boolean(), false),
    canViewJob: s.defaulted(s.boolean(), false),
    canViewTaskset: s.defaulted(s.boolean(), false),
    _keysMap: {
      jobId: "job_id",
      taskVersionId: "task_version_id",
      taskSlug: "task_slug",
      taskId: "task_id",
      instanceId: "instance_id",
      inferenceLlmModelId: "inference_llm_model_id",
      stopReason: "stop_reason",
      errorCode: "error_code",
      errorSource: "error_source",
      evaluationResult: "evaluation_result",
      startTime: "start_time",
      endTime: "end_time",
      createdAt: "created_at",
      taskPrompt: "task_prompt",
      taskName: "task_name",
      jobName: "job_name",
      importedFrom: "imported_from",
      executionMode: "execution_mode",
      runtimeProvider: "runtime_provider",
      jobPublic: "job_public",
      tracePublic: "trace_public",
      isOwner: "is_owner",
      canEdit: "can_edit",
      canViewJob: "can_view_job",
      canViewTaskset: "can_view_taskset",
    },
  },
  { additionalProperties: s.json() },
);
