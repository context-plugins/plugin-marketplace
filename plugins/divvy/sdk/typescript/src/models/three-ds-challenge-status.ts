import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the status of a 3D Secure (3DS) challenge. */
export const ThreeDsChallengeStatus = {
  Skipped: "SKIPPED",
  Pending: "PENDING",
  Sent: "SENT",
  Accepted: "ACCEPTED",
  Rejected: "REJECTED",
  Cancelled: "CANCELLED",
  TimedOut: "TIMED_OUT",
  Failed: "FAILED",
  Undefined: "UNDEFINED",
} as const;
export type ThreeDsChallengeStatus =
  | (typeof ThreeDsChallengeStatus)[keyof typeof ThreeDsChallengeStatus]
  | (string & {});

export const threeDsChallengeStatusSchema: EnumSchema<ThreeDsChallengeStatus> =
  s.enumOf<ThreeDsChallengeStatus>(ThreeDsChallengeStatus);
