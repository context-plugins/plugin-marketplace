import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountingIntegrationTransactionSchema,
  type AccountingIntegrationTransaction,
} from "./accounting-integration-transaction.js";
import { cardTypeSchema, type CardType } from "./card-type.js";
import { currencyData1Schema, type CurrencyData1 } from "./currency-data1.js";
import { customFieldDtoSchema, type CustomFieldDto } from "./custom-field-dto.js";
import { disputeStatusTypeSchema, type DisputeStatusType } from "./dispute-status-type.js";
import { merchantLocationSchema, type MerchantLocation } from "./merchant-location.js";
import { programNetworkTypeSchema, type ProgramNetworkType } from "./program-network-type.js";
import { receiptImageInternalSchema, receiptImageSchema, type ReceiptImage } from "./receipt-image.js";
import {
  receiptStatusTypeBillV3TransactionsApiSchema,
  type ReceiptStatusTypeBillV3TransactionsApi,
} from "./receipt-status-type-bill-v3-transactions-api.js";
import { receiptSyncStatusTypeSchema, type ReceiptSyncStatusType } from "./receipt-sync-status-type.js";
import { reviewSchema, type Review } from "./review.js";
import { reviewerSchema, type Reviewer } from "./reviewer.js";
import {
  transactionStatusTagTypeSchema,
  type TransactionStatusTagType,
} from "./transaction-status-tag-type.js";
import {
  transactionTypeBillV3TransactionsApiSchema,
  type TransactionTypeBillV3TransactionsApi,
} from "./transaction-type-bill-v3-transactions-api.js";

/** Transactions response. */
export type TransactionResponseDto = {
  /**
   * BILL-generated ID of the transaction
   *
   * @deprecated
   */
  id?: string;
  /** BILL-generated UUID of the transaction */
  uuid?: string;
  /**
   * BILL-generated IDs of child transactions associated with the current transaction
   *
   * @deprecated
   */
  childTransactionIds?: string[];
  /** BILL-generated IDs of child transactions associated with the current transaction */
  childTransactionUuids?: string[];
  /** Set as `true` if the transaction is locked */
  isLocked?: boolean;
  /** Set as `true` if the transaction is reconciled */
  isReconciled?: boolean;
  transactionType?: TransactionTypeBillV3TransactionsApi;
  /**
   * BILL-generated ID of the parent transaction. This field is set on child transactions when a
   * parent transaction is split.
   *
   * @deprecated
   */
  parentTransactionId?: string;
  /**
   * BILL-generated ID of the user who created the transaction
   *
   * @deprecated
   */
  userId?: string;
  /** BILL-generated UUID of the user who created the transaction */
  userUuid?: string;
  /** Display name of the user who created the transaction */
  userName?: string;
  /** Raw merchant name for the transaction */
  rawMerchantName?: string;
  /** Readable (cleaned) merchant name for the transaction */
  merchantName?: string;
  /**
   * BILL-generated ID of the budget linked with the transaction
   *
   * @deprecated
   */
  budgetId?: string;
  /** BILL-generated UUID of the budget linked with the transaction */
  budgetUuid?: string;
  /** Name of the budget linked with the transaction */
  budgetName?: string;
  /** BILL-generated UUID of the parent budget linked with the transaction */
  parentBudgetUuid?: string;
  /**
   * BILL-generated ID of the originating authorization transaction
   *
   * @deprecated
   */
  originalAuthTransactionId?: string;
  /**
   * BILL-generated UUID of the originating authorization transaction.
   *
   * After a transaction is authorized, it is set as cleared when it is complete. The
   * `originalAuthTransactionUuid` ties the cleared transaction to the authorized transaction. The
   * value is `null` when the transaction is not authorized.
   */
  originalAuthTransactionUuid?: string;
  /** Set as `true` if the transaction is a credit */
  isCredit?: boolean;
  currencyData?: CurrencyData1;
  /** Set as `true` if a receipt is required to complete the transaction */
  receiptRequired?: boolean;
  /** Set as `true` if a review is required to complete the transaction */
  reviewRequired?: boolean;
  status?: TransactionStatusTagType;
  /** Created date and time */
  occurredTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Transaction authorized date and time */
  authorizedTime?: Date;
  /** Set as `true` if the transaction has all the required fields completed */
  complete?: boolean;
  /**
   * Points awarded for the transaction. This value is `0` until the transaction is cleared.
   *
   * **Note**: Only `ADMIN` users can view any awarded points.
   */
  pointsAwarded?: number;
  /** Transaction custom fields information */
  customFields?: CustomFieldDto[];
  /** List of receipts attached to the transaction */
  receipts?: ReceiptImage[];
  network?: ProgramNetworkType;
  /** Set as `true` if the transaction is the parent of another transaction */
  isParent?: boolean;
  /** Transaction review information */
  reviews?: Review[];
  /**
   * Transaction amount including fees.
   *
   * When `amount` is negative, the transaction is a reversal or refund.
   * * **Reversal**: For a reversal (cancel before funds are settled), `transactionType` is set as
   *   `AUTHORIZATION` and `amount` is a negative value.
   * * **Refund**: For a refund (cancel after funds are settled), `transactionType` is set as
   *   `CLEAR` and `amount` is a negative value.
   */
  amount?: number;
  /** Transaction amount not including fees */
  transactedAmount?: number;
  /** Sum of transaction fees (including `foreignExchangeFee`) */
  fees?: number;
  /** Foreign exchange fee for the transaction (if any) */
  foreignExchangeFee?: number;
  receiptStatus?: ReceiptStatusTypeBillV3TransactionsApi;
  /**
   * BILL-generated ID of the cleared transaction. Use this ID to identify the transaction after it
   * is cleared.
   *
   * @deprecated
   */
  matchedClearTransactionId?: string;
  /**
   * BILL-generated UUID of the cleared transaction. Use this ID to identify the transaction after
   * it is cleared.
   */
  matchedClearTransactionUuid?: string;
  /** Accounting system integration information */
  accountingIntegrationTransactions?: AccountingIntegrationTransaction[];
  /** Transaction reviewers information */
  reviewers?: Reviewer[];
  /**
   * BILL-generated ID of the card used to make the transaction
   *
   * @deprecated
   */
  cardId?: string;
  /** BILL-generated UUID of the card used to make the transaction */
  cardUuid?: string;
  /** Last four digits of the card number used to make the transaction */
  cardLastFour?: string;
  cardType?: CardType;
  receiptSyncStatus?: ReceiptSyncStatusType;
  /** Merchant category code */
  merchantCategoryCode?: string;
  /**
   * Human-readable transaction decline reason. This field is available when `transactionType` is
   * set as `DECLINE`.
   */
  declineReason?: string;
  /**
   * Transaction decline reason code. This field is available when `transactionType` is set as
   * `DECLINE`.
   */
  declineInternalReasonCode?: string;
  /** Set as `true` if a physical card was present for the transaction */
  cardPresent?: boolean;
  merchantLocation?: MerchantLocation;
  disputeStatus?: DisputeStatusType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionResponseDtoProperties: s.Shape<TransactionResponseDto> = {
  id: s.optional(s.string()),
  uuid: s.optional(s.string()),
  childTransactionIds: s.optional(s.array(s.string())),
  childTransactionUuids: s.optional(s.array(s.string())),
  isLocked: s.optional(s.boolean()),
  isReconciled: s.optional(s.boolean()),
  transactionType: s.optional(s.lazy(() => transactionTypeBillV3TransactionsApiSchema)),
  parentTransactionId: s.optional(s.string()),
  userId: s.optional(s.string()),
  userUuid: s.optional(s.string()),
  userName: s.optional(s.string()),
  rawMerchantName: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  budgetId: s.optional(s.string()),
  budgetUuid: s.optional(s.string()),
  budgetName: s.optional(s.string()),
  parentBudgetUuid: s.optional(s.string()),
  originalAuthTransactionId: s.optional(s.string()),
  originalAuthTransactionUuid: s.optional(s.string()),
  isCredit: s.optional(s.boolean()),
  currencyData: s.optional(s.lazy(() => currencyData1Schema)),
  receiptRequired: s.optional(s.boolean()),
  reviewRequired: s.optional(s.boolean()),
  status: s.optional(s.lazy(() => transactionStatusTagTypeSchema)),
  occurredTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
  authorizedTime: s.optional(s.dateTime()),
  complete: s.optional(s.boolean()),
  pointsAwarded: s.optional(s.int()),
  customFields: s.optional(s.array(s.lazy(() => customFieldDtoSchema))),
  receipts: s.optional(s.array(s.lazy(() => receiptImageInternalSchema))),
  network: s.optional(s.lazy(() => programNetworkTypeSchema)),
  isParent: s.optional(s.boolean()),
  reviews: s.optional(s.array(s.lazy(() => reviewSchema))),
  amount: s.optional(s.float64()),
  transactedAmount: s.optional(s.float64()),
  fees: s.optional(s.float64()),
  foreignExchangeFee: s.optional(s.float64()),
  receiptStatus: s.optional(s.lazy(() => receiptStatusTypeBillV3TransactionsApiSchema)),
  matchedClearTransactionId: s.optional(s.string()),
  matchedClearTransactionUuid: s.optional(s.string()),
  accountingIntegrationTransactions: s.optional(
    s.array(s.lazy(() => accountingIntegrationTransactionSchema)),
  ),
  reviewers: s.optional(s.array(s.lazy(() => reviewerSchema))),
  cardId: s.optional(s.string()),
  cardUuid: s.optional(s.string()),
  cardLastFour: s.optional(s.string()),
  cardType: s.optional(s.lazy(() => cardTypeSchema)),
  receiptSyncStatus: s.optional(s.lazy(() => receiptSyncStatusTypeSchema)),
  merchantCategoryCode: s.optional(s.string()),
  declineReason: s.optional(s.string()),
  declineInternalReasonCode: s.optional(s.string()),
  cardPresent: s.optional(s.boolean()),
  merchantLocation: s.optional(s.lazy(() => merchantLocationSchema)),
  disputeStatus: s.optional(s.lazy(() => disputeStatusTypeSchema)),
};

export const transactionResponseDtoInternalSchema: Schema<TransactionResponseDto> =
  s.object<TransactionResponseDto>(transactionResponseDtoProperties, { additionalProperties: s.json() });

export const transactionResponseDtoSchema: Schema<TransactionResponseDto> = s.lazySchema(() =>
  s.object<TransactionResponseDto>(
    {
      ...transactionResponseDtoProperties,
      receipts: s.optional(s.array(s.lazy(() => receiptImageSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
