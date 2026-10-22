import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The discount amount in local currency. */
export type AmountLocalCurrency = string;

export const amountLocalCurrencySchema: Schema<AmountLocalCurrency> = s.of<AmountLocalCurrency>(
  s.union([s.string()]),
);
