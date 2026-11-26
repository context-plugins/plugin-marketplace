import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** CurrencyData class for Spend \& Expense Transactions. */
export type CurrencyData = {
  exchangeRate?: number;
  exponent?: number;
  originalCurrencyAmount?: string;
  originalCurrencyCode?: string;
  symbol?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currencyDataSchema: Schema<CurrencyData> = s.object<CurrencyData>(
  {
    exchangeRate: s.optional(s.float64()),
    exponent: s.optional(s.int()),
    originalCurrencyAmount: s.optional(s.string()),
    originalCurrencyCode: s.optional(s.string()),
    symbol: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
