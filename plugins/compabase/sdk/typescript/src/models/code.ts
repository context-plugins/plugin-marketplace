import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Machine-readable domain error code. */
export const Code = {
  InvalidKrs: "INVALID_KRS",
  InvalidNip: "INVALID_NIP",
  InvalidCursor: "INVALID_CURSOR",
  InvalidRange: "INVALID_RANGE",
  InvalidParameter: "INVALID_PARAMETER",
  ConflictingParameters: "CONFLICTING_PARAMETERS",
  InvalidBoolean: "INVALID_BOOLEAN",
  InvalidKeywords: "INVALID_KEYWORDS",
  InvalidApiKey: "INVALID_API_KEY",
  Unauthorized: "UNAUTHORIZED",
  NotFound: "NOT_FOUND",
  QuotaExceeded: "QUOTA_EXCEEDED",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
