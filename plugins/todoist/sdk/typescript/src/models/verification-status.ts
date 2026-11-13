import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * User's email verification status. unverified (just signed up), verified (verified email or social
 * login), blocked (failed to verify in 7 days), legacy (signed up before August 2022)
 */
export const VerificationStatus = {
  Unverified: "unverified",
  Verified: "verified",
  Blocked: "blocked",
  Legacy: "legacy",
} as const;
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus] | (string & {});

export const verificationStatusSchema: EnumSchema<VerificationStatus> =
  s.enumOf<VerificationStatus>(VerificationStatus);
