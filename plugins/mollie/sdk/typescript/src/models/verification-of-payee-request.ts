import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditorBankAccount1Schema, type CreditorBankAccount1 } from "./creditor-bank-account1.js";

/**
 * The request body for performing a Verification of Payee (VoP) check. VoP allows you to verify the
 * account holder name against the records held by the receiving bank before initiating a transfer.
 */
export type VerificationOfPayeeRequest = {
  /** The bank account details of the creditor (recipient) to verify. */
  creditorBankAccount: CreditorBankAccount1;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
};

export const verificationOfPayeeRequestSchema: Schema<VerificationOfPayeeRequest> =
  s.object<VerificationOfPayeeRequest>({
    creditorBankAccount: creditorBankAccount1Schema,
    testmode: s.optionalNullable(s.boolean()),
  });
