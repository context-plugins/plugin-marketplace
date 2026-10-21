import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The original `intent` used when the transaction was created. */
export const TransactionIntent3 = {
  Authorize: "authorize",
  Capture: "capture",
} as const;
export type TransactionIntent3 = (typeof TransactionIntent3)[keyof typeof TransactionIntent3] | (string & {});

export const transactionIntent3Schema: EnumSchema<TransactionIntent3> =
  s.enumOf<TransactionIntent3>(TransactionIntent3);
