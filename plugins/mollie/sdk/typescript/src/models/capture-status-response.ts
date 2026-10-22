import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The capture's status. */
export const CaptureStatusResponse = {
  Pending: "pending",
  Succeeded: "succeeded",
  Failed: "failed",
} as const;
export type CaptureStatusResponse =
  | (typeof CaptureStatusResponse)[keyof typeof CaptureStatusResponse]
  | (string & {});

export const captureStatusResponseSchema: EnumSchema<CaptureStatusResponse> =
  s.enumOf<CaptureStatusResponse>(CaptureStatusResponse);
