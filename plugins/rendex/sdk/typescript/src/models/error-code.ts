import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Structured failure reason; null until/unless the run fails. Branch on this instead of parsing
 * error.
 */
export const ErrorCode = {
  Blocked: "blocked",
  Timeout: "timeout",
  Selector: "selector",
  HttpError: "http_error",
  Network: "network",
  Storage: "storage",
  Unknown: "unknown",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
