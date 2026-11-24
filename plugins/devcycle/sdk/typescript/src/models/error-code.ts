import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OpenFeature compatible error code. See https://openfeature.dev/specification/types#error-code */
export const ErrorCode = {
  ParseError: "PARSE_ERROR",
  TargetingKeyMissing: "TARGETING_KEY_MISSING",
  InvalidContext: "INVALID_CONTEXT",
  General: "GENERAL",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
