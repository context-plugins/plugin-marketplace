import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines the intent of this API call. This determines the desired initial state of the
 * transaction.
 *
 * * `authorize` - (Default) Optionally approves and then authorizes a transaction but does not
 *   capture the funds.
 * * `capture` - Optionally approves and then authorizes and captures the funds of the transaction.
 */
export const TransactionIntent4 = {
  Authorize: "authorize",
  Capture: "capture",
} as const;
export type TransactionIntent4 = (typeof TransactionIntent4)[keyof typeof TransactionIntent4] | (string & {});

export const transactionIntent4Schema: EnumSchema<TransactionIntent4> =
  s.enumOf<TransactionIntent4>(TransactionIntent4);
