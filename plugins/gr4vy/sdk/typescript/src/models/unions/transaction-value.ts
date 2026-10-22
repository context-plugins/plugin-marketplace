import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeTransactionValueSchema, type PazeTransactionValue } from "../paze-transaction-value.js";

/** Currency and amount of the transaction. Required when intent is EXPRESS_CHECKOUT. */
export type TransactionValue = PazeTransactionValue;

export const transactionValueSchema: Schema<TransactionValue> = s.of<TransactionValue>(
  s.union([s.lazy(() => pazeTransactionValueSchema)]),
);
