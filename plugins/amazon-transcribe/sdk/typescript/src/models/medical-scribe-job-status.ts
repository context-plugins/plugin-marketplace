import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is
 * finished and you can find the results at the location specified in MedicalScribeOutput If the
 * status is FAILED, FailureReason provides details on why your Medical Scribe job failed.
 */
export const MedicalScribeJobStatus = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type MedicalScribeJobStatus =
  | (typeof MedicalScribeJobStatus)[keyof typeof MedicalScribeJobStatus]
  | (string & {});

export const medicalScribeJobStatusSchema: EnumSchema<MedicalScribeJobStatus> =
  s.enumOf<MedicalScribeJobStatus>(MedicalScribeJobStatus);
