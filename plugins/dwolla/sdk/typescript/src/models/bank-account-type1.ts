import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of bank account */
export const BankAccountType1 = {
  Checking: "checking",
  Savings: "savings",
  GeneralLedger: "general-ledger",
  Loan: "loan",
} as const;
export type BankAccountType1 = (typeof BankAccountType1)[keyof typeof BankAccountType1] | (string & {});

export const bankAccountType1Schema: EnumSchema<BankAccountType1> =
  s.enumOf<BankAccountType1>(BankAccountType1);
