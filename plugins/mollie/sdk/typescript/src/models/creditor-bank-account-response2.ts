import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The bank account details of the creditor that were verified. */
export type CreditorBankAccountResponse2 = {
  /** The full name of the creditor account holder to verify against bank records. */
  accountHolderName: string;
  /** The format of the bank account details provided. @default "iban" */
  format?: "iban";
  /** The bank account details of the creditor. */
  accountNumber: string;
};

export const creditorBankAccountResponse2Schema: Schema<CreditorBankAccountResponse2> =
  s.object<CreditorBankAccountResponse2>({
    accountHolderName: s.string(),
    format: s.defaulted(s.literal("iban"), "iban"),
    accountNumber: s.string(),
  });
