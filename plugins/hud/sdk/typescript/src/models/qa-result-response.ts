import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qaResultSourceSchema, type QaResultSource } from "./qa-result-source.js";
import { qaResultStatusSchema, type QaResultStatus } from "./qa-result-status.js";
import { qaSubjectTypeSchema, type QaSubjectType } from "./qa-subject-type.js";
import { analysisTraceIdSchema, type AnalysisTraceId } from "./unions/analysis-trace-id.js";
import { completedAtSchema, type CompletedAt } from "./unions/completed-at.js";
import { errorSchema, type Error } from "./unions/error.js";
import { legacyResultSchema, type LegacyResult } from "./unions/legacy-result.js";
import { noteSchema, type Note } from "./unions/note.js";
import {
  resultHudPlatformQaApiInternalSchema,
  resultHudPlatformQaApiSchema,
  type ResultHudPlatformQaApi,
} from "./unions/result-hud-platform-qa-api.js";
import { runIdSchema, type RunId } from "./unions/run-id.js";
import { subjectTaskIdSchema, type SubjectTaskId } from "./unions/subject-task-id.js";
import { subjectTaskVersionIdSchema, type SubjectTaskVersionId } from "./unions/subject-task-version-id.js";
import { subjectTraceIdSchema, type SubjectTraceId } from "./unions/subject-trace-id.js";
import { verdict1Schema, type Verdict1 } from "./unions/verdict1.js";

/** One result of a check on a subject: a trace, or a version of a task. */
export type QaResultResponse = {
  id: string;
  checkKey: string;
  /** What a check judges: a completed evaluation trace, or a task's current version. */
  subjectType: QaSubjectType;
  subjectTraceId?: SubjectTraceId;
  subjectTaskId?: SubjectTaskId;
  subjectTaskVersionId?: SubjectTaskVersionId;
  /** Where a result's verdict comes from. */
  source: QaResultSource;
  status: QaResultStatus;
  verdict?: Verdict1;
  result?: ResultHudPlatformQaApi;
  legacyResult?: LegacyResult;
  note?: Note;
  error?: Error;
  createdAt: Date;
  completedAt?: CompletedAt;
  runId?: RunId;
  analysisTraceId?: AnalysisTraceId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaResultResponseProperties: s.Shape<QaResultResponse> = {
  id: s.string(),
  checkKey: s.string(),
  subjectType: qaSubjectTypeSchema,
  subjectTraceId: s.optional(s.lazy(() => subjectTraceIdSchema)),
  subjectTaskId: s.optional(s.lazy(() => subjectTaskIdSchema)),
  subjectTaskVersionId: s.optional(s.lazy(() => subjectTaskVersionIdSchema)),
  source: qaResultSourceSchema,
  status: qaResultStatusSchema,
  verdict: s.optional(s.lazy(() => verdict1Schema)),
  result: s.optional(s.lazy(() => resultHudPlatformQaApiInternalSchema)),
  legacyResult: s.optional(s.lazy(() => legacyResultSchema)),
  note: s.optional(s.lazy(() => noteSchema)),
  error: s.optional(s.lazy(() => errorSchema)),
  createdAt: s.dateTime(),
  completedAt: s.optional(s.lazy(() => completedAtSchema)),
  runId: s.optional(s.lazy(() => runIdSchema)),
  analysisTraceId: s.optional(s.lazy(() => analysisTraceIdSchema)),
  _keysMap: {
    checkKey: "check_key",
    subjectType: "subject_type",
    subjectTraceId: "subject_trace_id",
    subjectTaskId: "subject_task_id",
    subjectTaskVersionId: "subject_task_version_id",
    legacyResult: "legacy_result",
    createdAt: "created_at",
    completedAt: "completed_at",
    runId: "run_id",
    analysisTraceId: "analysis_trace_id",
  },
};

export const qaResultResponseInternalSchema: Schema<QaResultResponse> = s.object<QaResultResponse>(
  qaResultResponseProperties,
  { additionalProperties: s.json() },
);

export const qaResultResponseSchema: Schema<QaResultResponse> = s.lazySchema(() =>
  s.object<QaResultResponse>(
    {
      ...qaResultResponseProperties,
      result: s.optional(s.lazy(() => resultHudPlatformQaApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
