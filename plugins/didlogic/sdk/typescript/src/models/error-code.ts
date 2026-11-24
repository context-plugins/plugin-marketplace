import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Normalized lookup error code: 000 — OK, 113 — Internal service error, 121 — Invalid phone number
 * length or format, 199 — Unexpected error. null when no result is available yet.
 */
export const ErrorCode = {
  _000: "000",
  _113: "113",
  _121: "121",
  _199: "199",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
