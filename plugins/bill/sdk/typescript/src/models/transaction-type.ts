import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** TransactionType. */
export const TransactionType = {
  Clear: "CLEAR",
  Decline: "DECLINE",
  Authorization: "AUTHORIZATION",
} as const;
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType] | (string & {});

export const transactionTypeSchema: EnumSchema<TransactionType> = s.enumOf<TransactionType>(TransactionType);
