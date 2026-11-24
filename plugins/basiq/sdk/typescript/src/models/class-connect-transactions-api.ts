import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes the class(type) of transaction. */
export const ClassConnectTransactionsApi = {
  BankFee: "bank-fee",
  Payment: "payment",
  CashWithdrawal: "cash-withdrawal",
  Transfer: "transfer",
  LoanInterest: "loan-interest",
  Refund: "refund",
  DirectCredit: "direct-credit",
  Interest: "interest",
  LoanRepayment: "loan-repayment",
} as const;
export type ClassConnectTransactionsApi =
  | (typeof ClassConnectTransactionsApi)[keyof typeof ClassConnectTransactionsApi]
  | (string & {});

export const classConnectTransactionsApiSchema: EnumSchema<ClassConnectTransactionsApi> =
  s.enumOf<ClassConnectTransactionsApi>(ClassConnectTransactionsApi);
