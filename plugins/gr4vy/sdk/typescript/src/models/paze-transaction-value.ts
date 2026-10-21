import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PazeTransactionValue = {
  /** ISO 4217 currency code of the transaction. */
  transactionCurrency: string;
  /** Amount of the transaction including dollar and cents, e.g. '99.95'. */
  transactionAmount: string;
};

export const pazeTransactionValueSchema: Schema<PazeTransactionValue> = s.object<PazeTransactionValue>({
  transactionCurrency: s.string(),
  transactionAmount: s.string(),
});
