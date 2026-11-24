import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** TransactionType. */
export const TransactionTypeBillV3TransactionsApi = {
  Clear: "CLEAR",
  Decline: "DECLINE",
  Authorization: "AUTHORIZATION",
  Other: "OTHER",
} as const;
export type TransactionTypeBillV3TransactionsApi =
  | (typeof TransactionTypeBillV3TransactionsApi)[keyof typeof TransactionTypeBillV3TransactionsApi]
  | (string & {});

export const transactionTypeBillV3TransactionsApiSchema: EnumSchema<TransactionTypeBillV3TransactionsApi> =
  s.enumOf<TransactionTypeBillV3TransactionsApi>(TransactionTypeBillV3TransactionsApi);
