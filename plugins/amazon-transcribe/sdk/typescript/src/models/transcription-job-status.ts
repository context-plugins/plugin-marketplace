import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provides the status of the specified medical transcription job. If the status is COMPLETED, the
 * job is finished and you can find the results at the location specified in TranscriptFileUri. If
 * the status is FAILED, FailureReason provides details on why your transcription job failed.
 */
export const TranscriptionJobStatus = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type TranscriptionJobStatus =
  | (typeof TranscriptionJobStatus)[keyof typeof TranscriptionJobStatus]
  | (string & {});

export const transcriptionJobStatusSchema: EnumSchema<TranscriptionJobStatus> =
  s.enumOf<TranscriptionJobStatus>(TranscriptionJobStatus);
