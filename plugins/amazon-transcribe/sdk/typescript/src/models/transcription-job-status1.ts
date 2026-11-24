import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provides the status of your medical transcription job. If the status is COMPLETED, the job is
 * finished and you can find the results at the location specified in TranscriptFileUri. If the
 * status is FAILED, FailureReason provides details on why your transcription job failed.
 */
export const TranscriptionJobStatus1 = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type TranscriptionJobStatus1 =
  | (typeof TranscriptionJobStatus1)[keyof typeof TranscriptionJobStatus1]
  | (string & {});

export const transcriptionJobStatus1Schema: EnumSchema<TranscriptionJobStatus1> =
  s.enumOf<TranscriptionJobStatus1>(TranscriptionJobStatus1);
