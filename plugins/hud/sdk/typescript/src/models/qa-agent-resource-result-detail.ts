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

export type QaAgentResourceResultDetail = {
  result?: Result;
  canonicalResult?: CanonicalResult;
  canonicalVerdict?: CanonicalVerdict1;
  id: string;
  qaAgentId: string;
  /** Canonical resources a QA agent can analyze. */
  subjectType: QaAgentSubjectType;
  subjectId: string;
  agentName: string;
  status: QaAgentResultStatus;
  error?: Error;
  analysisTraceId: string;
  agentConfigHash: string;
  stale: boolean;
  snapshotHash: string;
  attempt: number;
  batchId?: BatchId;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaAgentResourceResultDetailProperties: s.Shape<QaAgentResourceResultDetail> = {
  result: s.optional(s.lazy(() => resultSchema)),
  canonicalResult: s.optional(s.lazy(() => canonicalResultInternalSchema)),
  canonicalVerdict: s.optional(s.lazy(() => canonicalVerdict1Schema)),
  id: s.string(),
  qaAgentId: s.string(),
  subjectType: qaAgentSubjectTypeSchema,
  subjectId: s.string(),
  agentName: s.string(),
  status: qaAgentResultStatusSchema,
  error: s.optional(s.lazy(() => errorSchema)),
  analysisTraceId: s.string(),
  agentConfigHash: s.string(),
  stale: s.boolean(),
  snapshotHash: s.string(),
  attempt: s.int(),
  batchId: s.optional(s.lazy(() => batchIdSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    canonicalResult: "canonical_result",
    canonicalVerdict: "canonical_verdict",
    qaAgentId: "qa_agent_id",
    subjectType: "subject_type",
    subjectId: "subject_id",
    agentName: "agent_name",
    analysisTraceId: "analysis_trace_id",
    agentConfigHash: "agent_config_hash",
    snapshotHash: "snapshot_hash",
    batchId: "batch_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const qaAgentResourceResultDetailInternalSchema: Schema<QaAgentResourceResultDetail> =
  s.object<QaAgentResourceResultDetail>(qaAgentResourceResultDetailProperties, {
    additionalProperties: s.json(),
  });

export const qaAgentResourceResultDetailSchema: Schema<QaAgentResourceResultDetail> = s.lazySchema(() =>
  s.object<QaAgentResourceResultDetail>(
    {
      ...qaAgentResourceResultDetailProperties,
      canonicalResult: s.optional(s.lazy(() => canonicalResultSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
