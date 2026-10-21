import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditorBankAccountResponse2Schema,
  type CreditorBankAccountResponse2,
} from "./creditor-bank-account-response2.js";
import { modeSchema, type Mode } from "./mode.js";
import { verificationResult1Schema, type VerificationResult1 } from "./verification-result1.js";

/**
 * The Verification of Payee response object. Contains the result of verifying the creditor's
 * account holder name against the records held by the receiving bank.
 */
export type VerificationOfPayeeResponse = {
  /**
   * Indicates the response contains a payee verification object. Will always contain the string
   * `business-account-payee-verification` for this endpoint.
   */
  resource: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /** The bank account details of the creditor that were verified. */
  creditorBankAccount: CreditorBankAccountResponse2;
  verificationResult: VerificationResult1;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
};

export const verificationOfPayeeResponseSchema: Schema<VerificationOfPayeeResponse> =
  s.object<VerificationOfPayeeResponse>({
    resource: s.string(),
    mode: modeSchema,
    creditorBankAccount: creditorBankAccountResponse2Schema,
    verificationResult: verificationResult1Schema,
    createdAt: s.string(),
  });
