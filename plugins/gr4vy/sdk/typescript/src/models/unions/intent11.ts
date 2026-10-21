import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionIntentSchema, type TransactionIntent } from "../transaction-intent.js";

/** The transaction intent. */
export type Intent11 = TransactionIntent;

export const intent11Schema: Schema<Intent11> = s.of<Intent11>(
  s.union([s.lazy(() => transactionIntentSchema)]),
);
