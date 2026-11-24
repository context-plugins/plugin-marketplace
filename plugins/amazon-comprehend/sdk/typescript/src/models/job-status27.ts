import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously
 * stopped with the StopDominantLanguageDetectionJob operation.
 */
export const JobStatus27 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus27 = (typeof JobStatus27)[keyof typeof JobStatus27] | (string & {});

export const jobStatus27Schema: EnumSchema<JobStatus27> = s.enumOf<JobStatus27>(JobStatus27);
