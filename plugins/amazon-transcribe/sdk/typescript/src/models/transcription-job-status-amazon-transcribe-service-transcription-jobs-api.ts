import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provides the status of the specified transcription job. If the status is COMPLETED, the job is
 * finished and you can find the results at the location specified in TranscriptFileUri (or
 * RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED,
 * FailureReason provides details on why your transcription job failed.
 */
export const TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const transcriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi>(
    TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi,
  );
