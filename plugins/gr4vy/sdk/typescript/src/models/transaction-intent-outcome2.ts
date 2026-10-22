import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The outcome of the original intent of a transaction. This allows you to understand if the intent
 * of the transaction (e.g. `capture` or `authorize`) has been achieved when dealing with multiple
 * payment instruments.
 */
export const TransactionIntentOutcome2 = {
  Pending: "pending",
  Succeeded: "succeeded",
  Failed: "failed",
} as const;
export type TransactionIntentOutcome2 =
  | (typeof TransactionIntentOutcome2)[keyof typeof TransactionIntentOutcome2]
  | (string & {});

export const transactionIntentOutcome2Schema: EnumSchema<TransactionIntentOutcome2> =
  s.enumOf<TransactionIntentOutcome2>(TransactionIntentOutcome2);
