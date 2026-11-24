import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the order was a buy or sell order */
export const TransactionType1 = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type TransactionType1 = (typeof TransactionType1)[keyof typeof TransactionType1] | (string & {});

export const transactionType1Schema: EnumSchema<TransactionType1> =
  s.enumOf<TransactionType1>(TransactionType1);
