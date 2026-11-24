import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provides the status of your transcription job. If the status is COMPLETED, the job is finished
 * and you can find the results at the location specified in TranscriptFileUri (or
 * RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED,
 * FailureReason provides details on why your transcription job failed.
 */
export const TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const transcriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi>(
    TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi,
  );
