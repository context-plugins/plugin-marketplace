import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionIntent = {
  Authorize: "authorize",
  Capture: "capture",
} as const;
export type TransactionIntent = (typeof TransactionIntent)[keyof typeof TransactionIntent] | (string & {});

export const transactionIntentSchema: EnumSchema<TransactionIntent> =
  s.enumOf<TransactionIntent>(TransactionIntent);
