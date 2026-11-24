import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Lists all medical transcription jobs that have the status specified in your request. Jobs are
 * ordered by creation date, with the newest job first.
 */
export const Status1AmazonTranscribeServiceMedicalTranscriptionJobApi = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type Status1AmazonTranscribeServiceMedicalTranscriptionJobApi =
  | (typeof Status1AmazonTranscribeServiceMedicalTranscriptionJobApi)[keyof typeof Status1AmazonTranscribeServiceMedicalTranscriptionJobApi]
  | (string & {});

export const status1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema: EnumSchema<Status1AmazonTranscribeServiceMedicalTranscriptionJobApi> =
  s.enumOf<Status1AmazonTranscribeServiceMedicalTranscriptionJobApi>(
    Status1AmazonTranscribeServiceMedicalTranscriptionJobApi,
  );
