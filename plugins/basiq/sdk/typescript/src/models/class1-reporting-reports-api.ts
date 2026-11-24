import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes the class(type) of transaction. */
export const Class1ReportingReportsApi = {
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
export type Class1ReportingReportsApi =
  | (typeof Class1ReportingReportsApi)[keyof typeof Class1ReportingReportsApi]
  | (string & {});

export const class1ReportingReportsApiSchema: EnumSchema<Class1ReportingReportsApi> =
  s.enumOf<Class1ReportingReportsApi>(Class1ReportingReportsApi);
