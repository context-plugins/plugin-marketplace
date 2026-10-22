import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationResultSchema, type VerificationResult } from "./verification-result.js";

export type VerificationResult1 = {
  /** The result of the Verification of Payee check. */
  outcome: VerificationResult;
  /** The corrected name if the verification result is `close_match`. */
  accountHolderName?: string;
};

export const verificationResult1Schema: Schema<VerificationResult1> = s.object<VerificationResult1>({
  outcome: verificationResultSchema,
  accountHolderName: s.optional(s.string()),
});
