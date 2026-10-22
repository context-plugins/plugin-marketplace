import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionCaptureSchema, type TransactionCapture } from "../transaction-capture.js";
import { transactionSchema, type Transaction } from "../transaction.js";

export type Response200CaptureTransaction = Transaction | TransactionCapture;

export const response200CaptureTransactionSchema: Schema<Response200CaptureTransaction> =
  s.of<Response200CaptureTransaction>(
    s.union([s.lazy(() => transactionSchema), s.lazy(() => transactionCaptureSchema)]),
  );
