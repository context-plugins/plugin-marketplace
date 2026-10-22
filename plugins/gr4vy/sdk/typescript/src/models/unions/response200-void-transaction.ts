import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionVoidSchema, type TransactionVoid } from "../transaction-void.js";
import { transactionSchema, type Transaction } from "../transaction.js";

export type Response200VoidTransaction = Transaction | TransactionVoid;

export const response200VoidTransactionSchema: Schema<Response200VoidTransaction> =
  s.of<Response200VoidTransaction>(
    s.union([s.lazy(() => transactionSchema), s.lazy(() => transactionVoidSchema)]),
  );
