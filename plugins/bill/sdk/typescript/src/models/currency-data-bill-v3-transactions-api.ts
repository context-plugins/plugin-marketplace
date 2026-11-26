import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** CurrencyData class for Spend \& Expense Transactions. */
export type CurrencyDataBillV3TransactionsApi = {
  /** Exchange rate for currency conversion */
  exchangeRate?: number;
  /** Number of decimal places in the currency format */
  exponent?: number;
  /** Transaction amount in the original currency before conversion */
  originalCurrencyAmount?: string;
  /** Three-letter ISO currency code of the original currency */
  originalCurrencyCode?: string;
  /** Currency symbol for display purposes (e.g. $, €, £) */
  symbol?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currencyDataBillV3TransactionsApiSchema: Schema<CurrencyDataBillV3TransactionsApi> =
  s.object<CurrencyDataBillV3TransactionsApi>(
    {
      exchangeRate: s.optional(s.float64()),
      exponent: s.optional(s.int()),
      originalCurrencyAmount: s.optional(s.string()),
      originalCurrencyCode: s.optional(s.string()),
      symbol: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
