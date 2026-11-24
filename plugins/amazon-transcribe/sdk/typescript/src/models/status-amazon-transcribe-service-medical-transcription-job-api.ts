import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Returns only medical transcription jobs with the specified status. Jobs are ordered by creation
 * date, with the newest job first. If you do not include Status, all medical transcription jobs are
 * returned.
 */
export const StatusAmazonTranscribeServiceMedicalTranscriptionJobApi = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type StatusAmazonTranscribeServiceMedicalTranscriptionJobApi =
  | (typeof StatusAmazonTranscribeServiceMedicalTranscriptionJobApi)[keyof typeof StatusAmazonTranscribeServiceMedicalTranscriptionJobApi]
  | (string & {});

export const statusAmazonTranscribeServiceMedicalTranscriptionJobApiSchema: EnumSchema<StatusAmazonTranscribeServiceMedicalTranscriptionJobApi> =
  s.enumOf<StatusAmazonTranscribeServiceMedicalTranscriptionJobApi>(
    StatusAmazonTranscribeServiceMedicalTranscriptionJobApi,
  );
