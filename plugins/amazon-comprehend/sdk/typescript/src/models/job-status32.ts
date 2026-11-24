import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously
 * stopped with the StopSentimentDetectionJob operation.
 */
export const JobStatus32 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus32 = (typeof JobStatus32)[keyof typeof JobStatus32] | (string & {});

export const jobStatus32Schema: EnumSchema<JobStatus32> = s.enumOf<JobStatus32>(JobStatus32);
