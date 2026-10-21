import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { analyzedAtSchema, type AnalyzedAt } from "./unions/analyzed-at.js";
import { errorMessage2Schema, type ErrorMessage2 } from "./unions/error-message2.js";
import { filenameSchema, type Filename } from "./unions/filename.js";

/**
 * One uploaded file under a workflow: its execution status plus the insight results, grouped by
 * tool name and then by ``insight_key`` in the ``results`` dict.
 *
 * A file that is still pending, processing, or failed has an empty ``results`` dict; ``status`` and
 * ``error_message`` say why.
 */
export type WorkflowFileRow = {
  /** Upload file ID */
  uploadFileId: number;
  /** Name of the uploaded file; null only when the file is entirely deleted */
  filename?: Filename;
  /**
   * When the workflow execution started processing this file; null while the row is still PENDING
   */
  analyzedAt?: AnalyzedAt;
  /** When the file was queued for this workflow */
  queuedAt: Date;
  /** Execution status of this file under the workflow */
  status: string;
  /** Error message from the last processing attempt, if any */
  errorMessage?: ErrorMessage2;
  /**
   * Results per tool, keyed by tool name then insight_key. Each insight_key holds a list of values:
   * a single value comes back as a one-item list.
   */
  results?: Record<string, Record<string, unknown>>;
};

export const workflowFileRowSchema: Schema<WorkflowFileRow> = s.object<WorkflowFileRow>({
  uploadFileId: s.int(),
  filename: s.optional(s.lazy(() => filenameSchema)),
  analyzedAt: s.optional(s.lazy(() => analyzedAtSchema)),
  queuedAt: s.dateTime(),
  status: s.string(),
  errorMessage: s.optional(s.lazy(() => errorMessage2Schema)),
  results: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  _keysMap: {
    uploadFileId: "upload_file_id",
    analyzedAt: "analyzed_at",
    queuedAt: "queued_at",
    errorMessage: "error_message",
  },
});
