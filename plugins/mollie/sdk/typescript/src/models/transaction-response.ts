import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { afterBalanceSchema, type AfterBalance } from "./after-balance.js";
import { amount53Schema, type Amount53 } from "./amount53.js";
import { counterparty1Schema, type Counterparty1 } from "./counterparty1.js";
import { creditDebitIndicatorSchema, type CreditDebitIndicator } from "./credit-debit-indicator.js";
import { modeSchema, type Mode } from "./mode.js";
import { transactionTypeSchema, type TransactionType } from "./transaction-type.js";

export type TransactionResponse = {
  /**
   * Indicates the response contains a business account transaction object. Will always contain the
   * string `business-account-transaction` for this endpoint.
   */
  resource: string;
  /**
   * The identifier uniquely referring to this transaction. Mollie assigns this identifier at
   * transaction creation time.
   */
  id: string;
  /** The identifier of the business account this transaction belongs to. */
  businessAccountId: string;
  /**
   * Indicates whether the entry is a credit or debit from the perspective of the account holder.
   */
  creditDebitIndicator: CreditDebitIndicator;
  /**
   * Indicates what kind of transaction this is.
   *
   * We may introduce new transaction types as we expand the product. We recommend building your
   * integration to handle unexpected values gracefully, so nothing breaks when that happens.
   */
  type: TransactionType;
  /** The amount of the transaction, e.g. `{"currency":"EUR", "value":"100.00"}`. */
  amount: Amount53;
  /** A short description of the transaction. */
  description?: string | null;
  /** The counterparty involved in this transaction. */
  counterparty?: Counterparty1;
  /** The balance of the business account after this transaction was processed. */
  afterBalance?: AfterBalance;
  /** The date and time when the transaction was processed, in ISO 8601 format. */
  processedAt?: string | null;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
};

export const transactionResponseSchema: Schema<TransactionResponse> = s.object<TransactionResponse>({
  resource: s.string(),
  id: s.string(),
  businessAccountId: s.string(),
  creditDebitIndicator: creditDebitIndicatorSchema,
  type: transactionTypeSchema,
  amount: amount53Schema,
  description: s.optionalNullable(s.string()),
  counterparty: s.optional(s.lazy(() => counterparty1Schema)),
  afterBalance: s.optional(s.lazy(() => afterBalanceSchema)),
  processedAt: s.optionalNullable(s.string()),
  mode: modeSchema,
  createdAt: s.string(),
});
