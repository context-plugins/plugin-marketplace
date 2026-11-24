import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkExecutorTypeSchema, type CheckExecutorType } from "./check-executor-type.js";
import { checkRunStatusSchema, type CheckRunStatus } from "./check-run-status.js";
import { checkSubjectTypeSchema, type CheckSubjectType } from "./check-subject-type.js";
import { completedAtSchema, type CompletedAt } from "./unions/completed-at.js";
import { errorSchema, type Error } from "./unions/error.js";
import { executionTraceIdSchema, type ExecutionTraceId } from "./unions/execution-trace-id.js";
import { summarySchema, type Summary } from "./unions/summary.js";

/** One immutable check execution and its subject snapshot. */
export type CheckRunResponse = {
  id: string;
  checkKey: string;
  definitionVersion: number;
  definitionSnapshot: Record<string, unknown>;
  definitionHash: string;
  /** Execution mechanisms supported by a check definition. */
  executorType: CheckExecutorType;
  /** Platform resources supported by the check framework. */
  subjectType: CheckSubjectType;
  subjectId: string;
  subjectSnapshot: Record<string, unknown>;
  snapshotHash: string;
  /** Lifecycle states for a platform check run. */
  status: CheckRunStatus;
  result?: Record<string, unknown>;
  summary: Summary;
  error: Error;
  executionTraceId: ExecutionTraceId;
  attempt: number;
  createdAt: Date;
  completedAt: CompletedAt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkRunResponseSchema: Schema<CheckRunResponse> = s.object<CheckRunResponse>(
  {
    id: s.string(),
    checkKey: s.string(),
    definitionVersion: s.int(),
    definitionSnapshot: s.record(s.string(), s.unknown()),
    definitionHash: s.string(),
    executorType: checkExecutorTypeSchema,
    subjectType: checkSubjectTypeSchema,
    subjectId: s.string(),
    subjectSnapshot: s.record(s.string(), s.unknown()),
    snapshotHash: s.string(),
    status: checkRunStatusSchema,
    result: s.optional(s.record(s.string(), s.unknown())),
    summary: summarySchema,
    error: errorSchema,
    executionTraceId: executionTraceIdSchema,
    attempt: s.int(),
    createdAt: s.dateTime(),
    completedAt: completedAtSchema,
    _keysMap: {
      checkKey: "check_key",
      definitionVersion: "definition_version",
      definitionSnapshot: "definition_snapshot",
      definitionHash: "definition_hash",
      executorType: "executor_type",
      subjectType: "subject_type",
      subjectId: "subject_id",
      subjectSnapshot: "subject_snapshot",
      snapshotHash: "snapshot_hash",
      executionTraceId: "execution_trace_id",
      createdAt: "created_at",
      completedAt: "completed_at",
    },
  },
  { additionalProperties: s.json() },
);
