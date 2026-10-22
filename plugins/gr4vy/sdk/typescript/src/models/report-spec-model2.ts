import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The report model type. */
export const ReportSpecModel2 = {
  Transactions: "transactions",
  TransactionRetries: "transaction_retries",
  DetailedSettlement: "detailed_settlement",
  AccountsReceivables: "accounts_receivables",
  AiInsights: "ai_insights",
} as const;
export type ReportSpecModel2 = (typeof ReportSpecModel2)[keyof typeof ReportSpecModel2] | (string & {});

export const reportSpecModel2Schema: EnumSchema<ReportSpecModel2> =
  s.enumOf<ReportSpecModel2>(ReportSpecModel2);
