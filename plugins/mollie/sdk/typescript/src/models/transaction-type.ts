import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates what kind of transaction this is.
 *
 * We may introduce new transaction types as we expand the product. We recommend building your
 * integration to handle unexpected values gracefully, so nothing breaks when that happens.
 */
export const TransactionType = {
  CardPayment: "card-payment",
  BankTransfer: "bank-transfer",
  PspTransfer: "psp-transfer",
  InternalTransfer: "internal-transfer",
  IdealPayment: "ideal-payment",
  Fee: "fee",
  Correction: "correction",
  DirectDebit: "direct-debit",
  DirectDebitRefund: "direct-debit-refund",
  RewardsPayout: "rewards-payout",
} as const;
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType] | (string & {});

export const transactionTypeSchema: EnumSchema<TransactionType> = s.enumOf<TransactionType>(TransactionType);
