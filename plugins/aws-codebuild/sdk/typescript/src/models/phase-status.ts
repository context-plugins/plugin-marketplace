import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the sandbox phase. Valid values include: FAILED The sandbox phase failed.
 * FAULT The sandbox phase faulted. IN_PROGRESS The sandbox phase is still in progress. STOPPED The
 * sandbox phase stopped. SUCCEEDED The sandbox phase succeeded. TIMED_OUT The sandbox phase timed
 * out.
 */
export const PhaseStatus = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Fault: "FAULT",
  TimedOut: "TIMED_OUT",
  InProgress: "IN_PROGRESS",
  Stopped: "STOPPED",
} as const;
export type PhaseStatus = (typeof PhaseStatus)[keyof typeof PhaseStatus] | (string & {});

export const phaseStatusSchema: EnumSchema<PhaseStatus> = s.enumOf<PhaseStatus>(PhaseStatus);
