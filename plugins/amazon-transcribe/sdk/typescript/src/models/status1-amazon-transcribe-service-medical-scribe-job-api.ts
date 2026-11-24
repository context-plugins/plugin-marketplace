import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Lists all Medical Scribe jobs that have the status specified in your request. Jobs are ordered by
 * creation date, with the newest job first.
 */
export const Status1AmazonTranscribeServiceMedicalScribeJobApi = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type Status1AmazonTranscribeServiceMedicalScribeJobApi =
  | (typeof Status1AmazonTranscribeServiceMedicalScribeJobApi)[keyof typeof Status1AmazonTranscribeServiceMedicalScribeJobApi]
  | (string & {});

export const status1AmazonTranscribeServiceMedicalScribeJobApiSchema: EnumSchema<Status1AmazonTranscribeServiceMedicalScribeJobApi> =
  s.enumOf<Status1AmazonTranscribeServiceMedicalScribeJobApi>(
    Status1AmazonTranscribeServiceMedicalScribeJobApi,
  );
