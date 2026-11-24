import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qaAgentResultStatusSchema, type QaAgentResultStatus } from "./qa-agent-result-status.js";
import { qaAgentSubjectTypeSchema, type QaAgentSubjectType } from "./qa-agent-subject-type.js";
import { batchIdSchema, type BatchId } from "./unions/batch-id.js";
import {
  canonicalResultInternalSchema,
  canonicalResultSchema,
  type CanonicalResult,
} from "./unions/canonical-result.js";
import { canonicalVerdict1Schema, type CanonicalVerdict1 } from "./unions/canonical-verdict1.js";
import { errorSchema, type Error } from "./unions/error.js";
import { resultSchema, type Result } from "./unions/result.js";
import { snapshotHashSchema, type SnapshotHash } from "./unions/snapshot-hash.js";
import { subjectSnapshotSchema, type SubjectSnapshot } from "./unions/subject-snapshot.js";
import { subjectTraceIdSchema, type SubjectTraceId } from "./unions/subject-trace-id.js";

export type QaAgentResultResponse = {
  result?: Result;
  canonicalResult?: CanonicalResult;
  canonicalVerdict?: CanonicalVerdict1;
  id: string;
  /** Canonical resources a QA agent can analyze. */
  subjectType?: QaAgentSubjectType;
  subjectId: string;
  subjectTraceId: SubjectTraceId;
  subjectSnapshot?: SubjectSnapshot;
  snapshotHash?: SnapshotHash;
  /** @default 1 */
  attempt?: number;
  qaAgentId: string;
  analysisTraceId: string;
  status: QaAgentResultStatus;
  error?: Error;
  batchId?: BatchId;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaAgentResultResponseProperties: s.Shape<QaAgentResultResponse> = {
  result: s.optional(s.lazy(() => resultSchema)),
  canonicalResult: s.optional(s.lazy(() => canonicalResultInternalSchema)),
  canonicalVerdict: s.optional(s.lazy(() => canonicalVerdict1Schema)),
  id: s.string(),
  subjectType: s.optional(s.lazy(() => qaAgentSubjectTypeSchema)),
  subjectId: s.string(),
  subjectTraceId: subjectTraceIdSchema,
  subjectSnapshot: s.optional(s.lazy(() => subjectSnapshotSchema)),
  snapshotHash: s.optional(s.lazy(() => snapshotHashSchema)),
  attempt: s.defaulted(s.int(), 1),
  qaAgentId: s.string(),
  analysisTraceId: s.string(),
  status: qaAgentResultStatusSchema,
  error: s.optional(s.lazy(() => errorSchema)),
  batchId: s.optional(s.lazy(() => batchIdSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    canonicalResult: "canonical_result",
    canonicalVerdict: "canonical_verdict",
    subjectType: "subject_type",
    subjectId: "subject_id",
    subjectTraceId: "subject_trace_id",
    subjectSnapshot: "subject_snapshot",
    snapshotHash: "snapshot_hash",
    qaAgentId: "qa_agent_id",
    analysisTraceId: "analysis_trace_id",
    batchId: "batch_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const qaAgentResultResponseInternalSchema: Schema<QaAgentResultResponse> =
  s.object<QaAgentResultResponse>(qaAgentResultResponseProperties, { additionalProperties: s.json() });

export const qaAgentResultResponseSchema: Schema<QaAgentResultResponse> = s.lazySchema(() =>
  s.object<QaAgentResultResponse>(
    {
      ...qaAgentResultResponseProperties,
      canonicalResult: s.optional(s.lazy(() => canonicalResultSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
