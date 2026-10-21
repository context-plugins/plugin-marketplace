import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CaptureStatus = {
  Succeeded: "succeeded",
  Pending: "pending",
  Declined: "declined",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type CaptureStatus = (typeof CaptureStatus)[keyof typeof CaptureStatus] | (string & {});

export const captureStatusSchema: EnumSchema<CaptureStatus> = s.enumOf<CaptureStatus>(CaptureStatus);
