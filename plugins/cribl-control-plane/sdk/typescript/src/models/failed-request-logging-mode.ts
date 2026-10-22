import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Data to log when a request fails. All headers are redacted by default, unless listed as safe
 * headers below.
 */
export const FailedRequestLoggingMode = {
  Payload: "payload",
  PayloadAndHeaders: "payloadAndHeaders",
  None: "none",
} as const;
export type FailedRequestLoggingMode =
  | (typeof FailedRequestLoggingMode)[keyof typeof FailedRequestLoggingMode]
  | (string & {});

export const failedRequestLoggingModeSchema: EnumSchema<FailedRequestLoggingMode> =
  s.enumOf<FailedRequestLoggingMode>(FailedRequestLoggingMode);
