import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Returns only Medical Scribe jobs with the specified status. Jobs are ordered by creation date,
 * with the newest job first. If you do not include Status, all Medical Scribe jobs are returned.
 */
export const StatusAmazonTranscribeServiceMedicalScribeJobApi = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type StatusAmazonTranscribeServiceMedicalScribeJobApi =
  | (typeof StatusAmazonTranscribeServiceMedicalScribeJobApi)[keyof typeof StatusAmazonTranscribeServiceMedicalScribeJobApi]
  | (string & {});

export const statusAmazonTranscribeServiceMedicalScribeJobApiSchema: EnumSchema<StatusAmazonTranscribeServiceMedicalScribeJobApi> =
  s.enumOf<StatusAmazonTranscribeServiceMedicalScribeJobApi>(
    StatusAmazonTranscribeServiceMedicalScribeJobApi,
  );
