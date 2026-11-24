import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Lists all transcription jobs that have the status specified in your request. Jobs are ordered by
 * creation date, with the newest job first.
 */
export const Status1AmazonTranscribeServiceTranscriptionJobsApi = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type Status1AmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof Status1AmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof Status1AmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const status1AmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<Status1AmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<Status1AmazonTranscribeServiceTranscriptionJobsApi>(
    Status1AmazonTranscribeServiceTranscriptionJobsApi,
  );
