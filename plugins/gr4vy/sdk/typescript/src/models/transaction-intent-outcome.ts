import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionIntentOutcome = {
  Pending: "pending",
  Succeeded: "succeeded",
  Failed: "failed",
} as const;
export type TransactionIntentOutcome =
  | (typeof TransactionIntentOutcome)[keyof typeof TransactionIntentOutcome]
  | (string & {});

export const transactionIntentOutcomeSchema: EnumSchema<TransactionIntentOutcome> =
  s.enumOf<TransactionIntentOutcome>(TransactionIntentOutcome);
