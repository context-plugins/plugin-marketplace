import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endTimeSchema, type EndTime } from "./unions/end-time.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import {
  errorHudPlatformJobsApiInternalSchema,
  errorHudPlatformJobsApiSchema,
  type ErrorHudPlatformJobsApi,
} from "./unions/error-hud-platform-jobs-api.js";
import { errorSource1Schema, type ErrorSource1 } from "./unions/error-source1.js";
import { inferenceLlmModelIdSchema, type InferenceLlmModelId } from "./unions/inference-llm-model-id.js";
import { instanceIdSchema, type InstanceId } from "./unions/instance-id.js";
import { rewardSchema, type Reward } from "./unions/reward.js";
import { startTimeSchema, type StartTime } from "./unions/start-time.js";
import { stopReason1Schema, type StopReason1 } from "./unions/stop-reason1.js";
import { taskSlugSchema, type TaskSlug } from "./unions/task-slug.js";
import { taskVersionIdSchema, type TaskVersionId } from "./unions/task-version-id.js";

export type TraceResponse = {
  id: string;
  jobId: string;
  taskVersionId?: TaskVersionId;
  taskSlug?: TaskSlug;
  instanceId?: InstanceId;
  inferenceLlmModelId?: InferenceLlmModelId;
  status: string;
  reward?: Reward;
  stopReason?: StopReason1;
  /** @default 0 */
  views?: number;
  error?: ErrorHudPlatformJobsApi;
  errorCode?: ErrorCode;
  errorSource?: ErrorSource1;
  metadata?: Record<string, unknown>;
  startTime?: StartTime;
  endTime?: EndTime;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const traceResponseProperties: s.Shape<TraceResponse> = {
  id: s.string(),
  jobId: s.string(),
  taskVersionId: s.optional(s.lazy(() => taskVersionIdSchema)),
  taskSlug: s.optional(s.lazy(() => taskSlugSchema)),
  instanceId: s.optional(s.lazy(() => instanceIdSchema)),
  inferenceLlmModelId: s.optional(s.lazy(() => inferenceLlmModelIdSchema)),
  status: s.string(),
  reward: s.optional(s.lazy(() => rewardSchema)),
  stopReason: s.optional(s.lazy(() => stopReason1Schema)),
  views: s.defaulted(s.int(), 0),
  error: s.optional(s.lazy(() => errorHudPlatformJobsApiInternalSchema)),
  errorCode: s.optional(s.lazy(() => errorCodeSchema)),
  errorSource: s.optional(s.lazy(() => errorSource1Schema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  startTime: s.optional(s.lazy(() => startTimeSchema)),
  endTime: s.optional(s.lazy(() => endTimeSchema)),
  createdAt: s.dateTime(),
  _keysMap: {
    jobId: "job_id",
    taskVersionId: "task_version_id",
    taskSlug: "task_slug",
    instanceId: "instance_id",
    inferenceLlmModelId: "inference_llm_model_id",
    stopReason: "stop_reason",
    errorCode: "error_code",
    errorSource: "error_source",
    startTime: "start_time",
    endTime: "end_time",
    createdAt: "created_at",
  },
};

export const traceResponseInternalSchema: Schema<TraceResponse> = s.object<TraceResponse>(
  traceResponseProperties,
  { additionalProperties: s.json() },
);

export const traceResponseSchema: Schema<TraceResponse> = s.lazySchema(() =>
  s.object<TraceResponse>(
    {
      ...traceResponseProperties,
      error: s.optional(s.lazy(() => errorHudPlatformJobsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
