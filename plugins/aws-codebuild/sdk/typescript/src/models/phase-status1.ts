import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the build phase. Valid values include: FAILED The build phase failed. FAULT
 * The build phase faulted. IN_PROGRESS The build phase is still in progress. STOPPED The build
 * phase stopped. SUCCEEDED The build phase succeeded. TIMED_OUT The build phase timed out.
 */
export const PhaseStatus1 = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Fault: "FAULT",
  TimedOut: "TIMED_OUT",
  InProgress: "IN_PROGRESS",
  Stopped: "STOPPED",
} as const;
export type PhaseStatus1 = (typeof PhaseStatus1)[keyof typeof PhaseStatus1] | (string & {});

export const phaseStatus1Schema: EnumSchema<PhaseStatus1> = s.enumOf<PhaseStatus1>(PhaseStatus1);
