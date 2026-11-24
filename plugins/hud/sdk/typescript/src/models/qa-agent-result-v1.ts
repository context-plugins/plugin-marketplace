import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  qaAgentFindingInternalSchema,
  qaAgentFindingSchema,
  type QaAgentFinding,
} from "./qa-agent-finding.js";
import {
  executionErrorInternalSchema,
  executionErrorSchema,
  type ExecutionError,
} from "./unions/execution-error.js";
import { summarySchema, type Summary } from "./unions/summary.js";
import { verdictSchema, type Verdict } from "./verdict.js";

/** Versioned result every QA agent must emit. */
export type QaAgentResultV1 = {
  /** @default "qa_agent_result.v1" */
  schemaVersion?: "qa_agent_result.v1";
  verdict: Verdict;
  findings: QaAgentFinding[];
  summary?: Summary;
  metadata?: Record<string, unknown>;
  executionError?: ExecutionError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaAgentResultV1Properties: s.Shape<QaAgentResultV1> = {
  schemaVersion: s.defaulted(s.literal("qa_agent_result.v1"), "qa_agent_result.v1"),
  verdict: verdictSchema,
  findings: s.array(s.lazy(() => qaAgentFindingInternalSchema)),
  summary: s.optional(s.lazy(() => summarySchema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  executionError: s.optional(s.lazy(() => executionErrorInternalSchema)),
  _keysMap: {
    schemaVersion: "schema_version",
    executionError: "execution_error",
  },
};

export const qaAgentResultV1InternalSchema: Schema<QaAgentResultV1> = s.object<QaAgentResultV1>(
  qaAgentResultV1Properties,
  { additionalProperties: s.json() },
);

export const qaAgentResultV1Schema: Schema<QaAgentResultV1> = s.lazySchema(() =>
  s.object<QaAgentResultV1>(
    {
      ...qaAgentResultV1Properties,
      findings: s.array(s.lazy(() => qaAgentFindingSchema)),
      executionError: s.optional(s.lazy(() => executionErrorSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
