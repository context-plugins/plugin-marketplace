import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 3DS transaction status. */
export const TransactionStatus5 = {
  Y: "Y",
  N: "N",
  A: "A",
  R: "R",
  U: "U",
  C: "C",
  Timeout: "timeout",
} as const;
export type TransactionStatus5 = (typeof TransactionStatus5)[keyof typeof TransactionStatus5] | (string & {});

export const transactionStatus5Schema: EnumSchema<TransactionStatus5> =
  s.enumOf<TransactionStatus5>(TransactionStatus5);
