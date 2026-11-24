import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Either STOP_REQUESTED if the job is currently running, or STOPPED if the job was previously
 * stopped with the StopEntitiesDetectionJob operation.
 */
export const JobStatus28 = {
  Submitted: "SUBMITTED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
} as const;
export type JobStatus28 = (typeof JobStatus28)[keyof typeof JobStatus28] | (string & {});

export const jobStatus28Schema: EnumSchema<JobStatus28> = s.enumOf<JobStatus28>(JobStatus28);
