import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IncomeStatement = {
  date?: string;
  symbol?: string;
  period?: string;
  revenue?: number;
  costOfRevenue?: number;
  grossProfit?: number;
  operatingIncome?: number;
  netIncome?: number;
  eps?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incomeStatementSchema: Schema<IncomeStatement> = s.object<IncomeStatement>(
  {
    date: s.optional(s.dateOnly()),
    symbol: s.optional(s.string()),
    period: s.optional(s.string()),
    revenue: s.optional(s.float64()),
    costOfRevenue: s.optional(s.float64()),
    grossProfit: s.optional(s.float64()),
    operatingIncome: s.optional(s.float64()),
    netIncome: s.optional(s.float64()),
    eps: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
