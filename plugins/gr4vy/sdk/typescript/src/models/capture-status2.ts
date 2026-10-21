import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the capture call. */
export const CaptureStatus2 = {
  Succeeded: "succeeded",
  Pending: "pending",
  Declined: "declined",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type CaptureStatus2 = (typeof CaptureStatus2)[keyof typeof CaptureStatus2] | (string & {});

export const captureStatus2Schema: EnumSchema<CaptureStatus2> = s.enumOf<CaptureStatus2>(CaptureStatus2);
