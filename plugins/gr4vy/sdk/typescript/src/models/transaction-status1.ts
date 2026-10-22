import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 3DS result. */
export const TransactionStatus1 = {
  Y: "Y",
  N: "N",
  Timeout: "timeout",
} as const;
export type TransactionStatus1 = (typeof TransactionStatus1)[keyof typeof TransactionStatus1] | (string & {});

export const transactionStatus1Schema: EnumSchema<TransactionStatus1> =
  s.enumOf<TransactionStatus1>(TransactionStatus1);
