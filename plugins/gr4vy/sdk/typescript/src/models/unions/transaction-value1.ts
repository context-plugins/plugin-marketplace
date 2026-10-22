import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeTransactionValueSchema, type PazeTransactionValue } from "../paze-transaction-value.js";

/**
 * Required when `transactionType` is PURCHASE or BOTH. Must be omitted when `transactionType` is
 * CARD_ON_FILE.
 */
export type TransactionValue1 = PazeTransactionValue;

export const transactionValue1Schema: Schema<TransactionValue1> = s.of<TransactionValue1>(
  s.union([s.lazy(() => pazeTransactionValueSchema)]),
);
