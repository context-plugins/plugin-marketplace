import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ThreeDSecureStatus = {
  SetupError: "setup_error",
  Error: "error",
  Declined: "declined",
  Cancelled: "cancelled",
  Complete: "complete",
} as const;
export type ThreeDSecureStatus = (typeof ThreeDSecureStatus)[keyof typeof ThreeDSecureStatus] | (string & {});

export const threeDSecureStatusSchema: EnumSchema<ThreeDSecureStatus> =
  s.enumOf<ThreeDSecureStatus>(ThreeDSecureStatus);
