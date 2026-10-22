import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the Verification of Payee check. */
export const VerificationResult = {
  Match: "match",
  NoMatch: "no-match",
  CloseMatch: "close-match",
  NotAvailable: "not-available",
} as const;
export type VerificationResult = (typeof VerificationResult)[keyof typeof VerificationResult] | (string & {});

export const verificationResultSchema: EnumSchema<VerificationResult> =
  s.enumOf<VerificationResult>(VerificationResult);
