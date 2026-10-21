import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the capture. */
export const CaptureStatus3 = {
  Succeeded: "succeeded",
  Pending: "pending",
  Declined: "declined",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type CaptureStatus3 = (typeof CaptureStatus3)[keyof typeof CaptureStatus3] | (string & {});

export const captureStatus3Schema: EnumSchema<CaptureStatus3> = s.enumOf<CaptureStatus3>(CaptureStatus3);
