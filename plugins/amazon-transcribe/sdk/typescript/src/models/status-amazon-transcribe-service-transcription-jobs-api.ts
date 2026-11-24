import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Returns only transcription jobs with the specified status. Jobs are ordered by creation date,
 * with the newest job first. If you do not include Status, all transcription jobs are returned.
 */
export const StatusAmazonTranscribeServiceTranscriptionJobsApi = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type StatusAmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof StatusAmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof StatusAmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const statusAmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<StatusAmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<StatusAmazonTranscribeServiceTranscriptionJobsApi>(
    StatusAmazonTranscribeServiceTranscriptionJobsApi,
  );
