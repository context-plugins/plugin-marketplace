import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionIntentSchema, type TransactionIntent } from "../transaction-intent.js";

/**
 * Defines the intent to apply to transactions created via this checkout session. This determines
 * the desired initial state of the transaction.
 */
export type Intent1 = TransactionIntent;

export const intent1Schema: Schema<Intent1> = s.of<Intent1>(s.union([s.lazy(() => transactionIntentSchema)]));
