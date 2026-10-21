import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  accountsReceivablesReportSpecSchema,
  type AccountsReceivablesReportSpec,
} from "../accounts-receivables-report-spec.js";
import { aiInsightsReportSpecSchema, type AiInsightsReportSpec } from "../ai-insights-report-spec.js";
import {
  detailedSettlementReportSpecSchema,
  type DetailedSettlementReportSpec,
} from "../detailed-settlement-report-spec.js";
import {
  transactionRetriesReportSpecSchema,
  type TransactionRetriesReportSpec,
} from "../transaction-retries-report-spec.js";
import { transactionsReportSpecSchema, type TransactionsReportSpec } from "../transactions-report-spec.js";

/** The report specification. */
export type Spec =
  | (AccountsReceivablesReportSpec & { model: "accounts_receivables" })
  | (AiInsightsReportSpec & { model: "ai_insights" })
  | (DetailedSettlementReportSpec & { model: "detailed_settlement" })
  | (TransactionRetriesReportSpec & { model: "transaction_retries" })
  | (TransactionsReportSpec & { model: "transactions" });

export const specSchema: Schema<Spec> = s.discriminatedUnion<Spec>("model", {
  accounts_receivables: accountsReceivablesReportSpecSchema,
  ai_insights: aiInsightsReportSpecSchema,
  detailed_settlement: detailedSettlementReportSpecSchema,
  transaction_retries: transactionRetriesReportSpecSchema,
  transactions: transactionsReportSpecSchema,
});
