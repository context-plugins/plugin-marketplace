import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the batch build. */
export const BuildBatchStatus = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Fault: "FAULT",
  TimedOut: "TIMED_OUT",
  InProgress: "IN_PROGRESS",
  Stopped: "STOPPED",
} as const;
export type BuildBatchStatus = (typeof BuildBatchStatus)[keyof typeof BuildBatchStatus] | (string & {});

export const buildBatchStatusSchema: EnumSchema<BuildBatchStatus> =
  s.enumOf<BuildBatchStatus>(BuildBatchStatus);
