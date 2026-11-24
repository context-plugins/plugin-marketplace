import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether its a buy or sell order */
export const TransactionType = {
  Buy: "BUY",
  Sell: "SELL",
} as const;
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType] | (string & {});

export const transactionTypeSchema: EnumSchema<TransactionType> = s.enumOf<TransactionType>(TransactionType);
