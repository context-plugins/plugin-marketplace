import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OriginalEmailVerificationStatus = {
  Valid: "VALID",
  Invalid: "INVALID",
  Unknown: "UNKNOWN",
  CatchAll: "CATCH-ALL",
} as const;
export type OriginalEmailVerificationStatus =
  | (typeof OriginalEmailVerificationStatus)[keyof typeof OriginalEmailVerificationStatus]
  | (string & {});

export const originalEmailVerificationStatusSchema: EnumSchema<OriginalEmailVerificationStatus> =
  s.enumOf<OriginalEmailVerificationStatus>(OriginalEmailVerificationStatus);
