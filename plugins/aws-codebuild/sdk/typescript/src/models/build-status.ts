import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the build. Valid values include: FAILED: The build failed. FAULT: The build
 * faulted. IN_PROGRESS: The build is still in progress. STOPPED: The build stopped. SUCCEEDED: The
 * build succeeded. TIMED_OUT: The build timed out.
 */
export const BuildStatus = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Fault: "FAULT",
  TimedOut: "TIMED_OUT",
  InProgress: "IN_PROGRESS",
  Stopped: "STOPPED",
} as const;
export type BuildStatus = (typeof BuildStatus)[keyof typeof BuildStatus] | (string & {});

export const buildStatusSchema: EnumSchema<BuildStatus> = s.enumOf<BuildStatus>(BuildStatus);
