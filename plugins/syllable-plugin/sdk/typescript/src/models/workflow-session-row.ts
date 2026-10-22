import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { analyzedAt1Schema, type AnalyzedAt1 } from "./unions/analyzed-at1.js";
import { errorMessage2Schema, type ErrorMessage2 } from "./unions/error-message2.js";

/**
 * One session under a workflow: its execution status plus the insight results, grouped by tool name
 * and then by ``insight_key`` in the ``results`` dict.
 *
 * A session that is still pending, processing, or failed has an empty ``results`` dict; ``status``
 * and ``error_message`` say why.
 */
export type WorkflowSessionRow = {
  /** Session ID */
  sessionId: number;
  /**
   * When the workflow execution started processing this session; null while the row is still
   * PENDING
   */
  analyzedAt?: AnalyzedAt1;
  /** When the session was queued for this workflow */
  queuedAt: Date;
  /** Execution status of this session under the workflow */
  status: string;
  /** Error message from the last processing attempt, if any */
  errorMessage?: ErrorMessage2;
  /**
   * Results per tool, keyed by tool name then insight_key. Each insight_key holds a list of values:
   * a single value comes back as a one-item list.
   */
  results?: Record<string, Record<string, unknown>>;
};

export const workflowSessionRowSchema: Schema<WorkflowSessionRow> = s.object<WorkflowSessionRow>({
  sessionId: s.int(),
  analyzedAt: s.optional(s.lazy(() => analyzedAt1Schema)),
  queuedAt: s.dateTime(),
  status: s.string(),
  errorMessage: s.optional(s.lazy(() => errorMessage2Schema)),
  results: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  _keysMap: {
    sessionId: "session_id",
    analyzedAt: "analyzed_at",
    queuedAt: "queued_at",
    errorMessage: "error_message",
  },
});
