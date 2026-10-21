import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportSpecModel = {
  Transactions: "transactions",
  TransactionRetries: "transaction_retries",
  DetailedSettlement: "detailed_settlement",
  AccountsReceivables: "accounts_receivables",
  AiInsights: "ai_insights",
} as const;
export type ReportSpecModel = (typeof ReportSpecModel)[keyof typeof ReportSpecModel] | (string & {});

export const reportSpecModelSchema: EnumSchema<ReportSpecModel> = s.enumOf<ReportSpecModel>(ReportSpecModel);
