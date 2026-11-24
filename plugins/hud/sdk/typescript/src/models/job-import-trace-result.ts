import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusHudPlatformJobsApiSchema,
  type StatusHudPlatformJobsApi,
} from "./status-hud-platform-jobs-api.js";
import { endTimeSchema, type EndTime } from "./unions/end-time.js";
import {
  errorHudPlatformJobsApiInternalSchema,
  errorHudPlatformJobsApiSchema,
  type ErrorHudPlatformJobsApi,
} from "./unions/error-hud-platform-jobs-api.js";
import { evaluationResultSchema, type EvaluationResult } from "./unions/evaluation-result.js";
import { rewardSchema, type Reward } from "./unions/reward.js";
import { startTimeSchema, type StartTime } from "./unions/start-time.js";

/**
 * Outcome of one imported run.
 *
 * In ``error`` and ``evaluation_result``, characters Postgres cannot store become U+FFFD and
 * non-finite numbers become null. A non-finite ``reward`` is refused.
 */
export type JobImportTraceResult = {
  status: StatusHudPlatformJobsApi;
  reward?: Reward;
  evaluationResult?: EvaluationResult;
  error?: ErrorHudPlatformJobsApi;
  startTime?: StartTime;
  endTime?: EndTime;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobImportTraceResultProperties: s.Shape<JobImportTraceResult> = {
  status: statusHudPlatformJobsApiSchema,
  reward: s.optional(s.lazy(() => rewardSchema)),
  evaluationResult: s.optional(s.lazy(() => evaluationResultSchema)),
  error: s.optional(s.lazy(() => errorHudPlatformJobsApiInternalSchema)),
  startTime: s.optional(s.lazy(() => startTimeSchema)),
  endTime: s.optional(s.lazy(() => endTimeSchema)),
  _keysMap: {
    evaluationResult: "evaluation_result",
    startTime: "start_time",
    endTime: "end_time",
  },
};

export const jobImportTraceResultInternalSchema: Schema<JobImportTraceResult> =
  s.object<JobImportTraceResult>(jobImportTraceResultProperties, { additionalProperties: s.json() });

export const jobImportTraceResultSchema: Schema<JobImportTraceResult> = s.lazySchema(() =>
  s.object<JobImportTraceResult>(
    {
      ...jobImportTraceResultProperties,
      error: s.optional(s.lazy(() => errorHudPlatformJobsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
