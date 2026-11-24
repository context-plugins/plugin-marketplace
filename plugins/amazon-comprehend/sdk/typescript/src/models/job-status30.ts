import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously
 * stopped with the StopKeyPhrasesDetectionJob operation.
 */
export const JobStatus30 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus30 = (typeof JobStatus30)[keyof typeof JobStatus30] | (string & {});

export const jobStatus30Schema: EnumSchema<JobStatus30> = s.enumOf<JobStatus30>(JobStatus30);
