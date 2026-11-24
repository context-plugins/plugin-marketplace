import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  qaCheckFindingV1InternalSchema,
  qaCheckFindingV1Schema,
  type QaCheckFindingV1,
} from "./qa-check-finding-v1.js";
import {
  executionErrorInternalSchema,
  executionErrorSchema,
  type ExecutionError,
} from "./unions/execution-error.js";
import { summarySchema, type Summary } from "./unions/summary.js";
import { verdictSchema, type Verdict } from "./verdict.js";

/**
 * The result every QA check yields.
 *
 * A check fails on a confirmed problem and otherwise passes; ``unknown`` remains for results
 * recorded before ``execution_error``. A check whose input leaves nothing to judge passes and names
 * that stage in ``execution_error``. A failure a rerun may fix, such as input that did not load or
 * an answer that did not parse, ends the run with an error instead of yielding a result.
 */
export type QaCheckResultV1 = {
  /** @default "qa_agent_result.v1" */
  schemaVersion?: "qa_agent_result.v1";
  verdict: Verdict;
  findings: QaCheckFindingV1[];
  summary?: Summary;
  metadata?: Record<string, unknown>;
  executionError?: ExecutionError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qaCheckResultV1Properties: s.Shape<QaCheckResultV1> = {
  schemaVersion: s.defaulted(s.literal("qa_agent_result.v1"), "qa_agent_result.v1"),
  verdict: verdictSchema,
  findings: s.array(s.lazy(() => qaCheckFindingV1InternalSchema)),
  summary: s.optional(s.lazy(() => summarySchema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  executionError: s.optional(s.lazy(() => executionErrorInternalSchema)),
  _keysMap: {
    schemaVersion: "schema_version",
    executionError: "execution_error",
  },
};

export const qaCheckResultV1InternalSchema: Schema<QaCheckResultV1> = s.object<QaCheckResultV1>(
  qaCheckResultV1Properties,
  { additionalProperties: s.json() },
);

export const qaCheckResultV1Schema: Schema<QaCheckResultV1> = s.lazySchema(() =>
  s.object<QaCheckResultV1>(
    {
      ...qaCheckResultV1Properties,
      findings: s.array(s.lazy(() => qaCheckFindingV1Schema)),
      executionError: s.optional(s.lazy(() => executionErrorSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
