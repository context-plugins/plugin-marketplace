import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endTimeSchema, type EndTime } from "./unions/end-time.js";
import { errorSchema, type Error } from "./unions/error.js";
import { evaluationResultSchema, type EvaluationResult } from "./unions/evaluation-result.js";
import { importedFromSchema, type ImportedFrom } from "./unions/imported-from.js";
import { inferenceLlmModelIdSchema, type InferenceLlmModelId } from "./unions/inference-llm-model-id.js";
import { jobNameSchema, type JobName } from "./unions/job-name.js";
import {
  modelHudPlatformTasksApiSchema,
  type ModelHudPlatformTasksApi,
} from "./unions/model-hud-platform-tasks-api.js";
import { rewardSchema, type Reward } from "./unions/reward.js";
import { startTimeSchema, type StartTime } from "./unions/start-time.js";
import { stopReason1Schema, type StopReason1 } from "./unions/stop-reason1.js";
import { taskPromptSchema, type TaskPrompt } from "./unions/task-prompt.js";
import { taskSlugSchema, type TaskSlug } from "./unions/task-slug.js";
import { taskVersionIdSchema, type TaskVersionId } from "./unions/task-version-id.js";
import { taskVersionNumberSchema, type TaskVersionNumber } from "./unions/task-version-number.js";
import { thumbnailUrlSchema, type ThumbnailUrl } from "./unions/thumbnail-url.js";
import { userAvatarUrlSchema, type UserAvatarUrl } from "./unions/user-avatar-url.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";

export type TaskTrace = {
  id: string;
  jobId: string;
  jobName?: JobName;
  importedFrom?: ImportedFrom;
  status: string;
  reward?: Reward;
  stopReason?: StopReason1;
  /** @default true */
  isValid?: boolean;
  error?: Error;
  createdAt: Date;
  startTime?: StartTime;
  endTime?: EndTime;
  /** @default 0 */
  views?: number;
  taskVersionId?: TaskVersionId;
  taskSlug?: TaskSlug;
  taskVersionNumber?: TaskVersionNumber;
  taskPrompt?: TaskPrompt;
  thumbnailUrl?: ThumbnailUrl;
  inferenceLlmModelId?: InferenceLlmModelId;
  metadata?: Record<string, unknown>;
  evaluationResult?: EvaluationResult;
  userName?: UserName;
  userAvatarUrl?: UserAvatarUrl;
  model?: ModelHudPlatformTasksApi;
  /** @default false */
  canEdit?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskTraceSchema: Schema<TaskTrace> = s.object<TaskTrace>(
  {
    id: s.string(),
    jobId: s.string(),
    jobName: s.optional(s.lazy(() => jobNameSchema)),
    importedFrom: s.optional(s.lazy(() => importedFromSchema)),
    status: s.string(),
    reward: s.optional(s.lazy(() => rewardSchema)),
    stopReason: s.optional(s.lazy(() => stopReason1Schema)),
    isValid: s.defaulted(s.boolean(), true),
    error: s.optional(s.lazy(() => errorSchema)),
    createdAt: s.dateTime(),
    startTime: s.optional(s.lazy(() => startTimeSchema)),
    endTime: s.optional(s.lazy(() => endTimeSchema)),
    views: s.defaulted(s.int(), 0),
    taskVersionId: s.optional(s.lazy(() => taskVersionIdSchema)),
    taskSlug: s.optional(s.lazy(() => taskSlugSchema)),
    taskVersionNumber: s.optional(s.lazy(() => taskVersionNumberSchema)),
    taskPrompt: s.optional(s.lazy(() => taskPromptSchema)),
    thumbnailUrl: s.optional(s.lazy(() => thumbnailUrlSchema)),
    inferenceLlmModelId: s.optional(s.lazy(() => inferenceLlmModelIdSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    evaluationResult: s.optional(s.lazy(() => evaluationResultSchema)),
    userName: s.optional(s.lazy(() => userNameSchema)),
    userAvatarUrl: s.optional(s.lazy(() => userAvatarUrlSchema)),
    model: s.optional(s.lazy(() => modelHudPlatformTasksApiSchema)),
    canEdit: s.defaulted(s.boolean(), false),
    _keysMap: {
      jobId: "job_id",
      jobName: "job_name",
      importedFrom: "imported_from",
      stopReason: "stop_reason",
      isValid: "is_valid",
      createdAt: "created_at",
      startTime: "start_time",
      endTime: "end_time",
      taskVersionId: "task_version_id",
      taskSlug: "task_slug",
      taskVersionNumber: "task_version_number",
      taskPrompt: "task_prompt",
      thumbnailUrl: "thumbnail_url",
      inferenceLlmModelId: "inference_llm_model_id",
      evaluationResult: "evaluation_result",
      userName: "user_name",
      userAvatarUrl: "user_avatar_url",
      canEdit: "can_edit",
    },
  },
  { additionalProperties: s.json() },
);
