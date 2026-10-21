import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The transaction intent for the payment link. */
export const TransactionIntent1 = {
  Authorize: "authorize",
  Capture: "capture",
} as const;
export type TransactionIntent1 = (typeof TransactionIntent1)[keyof typeof TransactionIntent1] | (string & {});

export const transactionIntent1Schema: EnumSchema<TransactionIntent1> =
  s.enumOf<TransactionIntent1>(TransactionIntent1);
