import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  transactionAuthorizationIncrementCreateSchema,
  type TransactionAuthorizationIncrementCreate,
} from "../models/transaction-authorization-increment-create.js";
import {
  transactionAuthorizationIncrementSchema,
  type TransactionAuthorizationIncrement,
} from "../models/transaction-authorization-increment.js";
import { transactionCancelSchema, type TransactionCancel } from "../models/transaction-cancel.js";
import {
  transactionCaptureCreateSchema,
  type TransactionCaptureCreate,
} from "../models/transaction-capture-create.js";
import { transactionCreateSchema, type TransactionCreate } from "../models/transaction-create.js";
import { transactionEventsSchema, type TransactionEvents } from "../models/transaction-events.js";
import { transactionSummariesSchema, type TransactionSummaries } from "../models/transaction-summaries.js";
import { transactionUpdateSchema, type TransactionUpdate } from "../models/transaction-update.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import { amountEqSchema, type AmountEq } from "../models/unions/amount-eq.js";
import { amountGteSchema, type AmountGte } from "../models/unions/amount-gte.js";
import { amountLteSchema, type AmountLte } from "../models/unions/amount-lte.js";
import { buyerEmailAddressSchema, type BuyerEmailAddress } from "../models/unions/buyer-email-address.js";
import {
  buyerExternalIdentifier24Schema,
  type BuyerExternalIdentifier24,
} from "../models/unions/buyer-external-identifier24.js";
import { buyerId27Schema, type BuyerId27 } from "../models/unions/buyer-id27.js";
import { buyerSearchSchema, type BuyerSearch } from "../models/unions/buyer-search.js";
import { checkoutSessionId2Schema, type CheckoutSessionId2 } from "../models/unions/checkout-session-id2.js";
import { country14Schema, type Country14 } from "../models/unions/country14.js";
import { createdAtGteSchema, type CreatedAtGte } from "../models/unions/created-at-gte.js";
import { createdAtLteSchema, type CreatedAtLte } from "../models/unions/created-at-lte.js";
import { currency15Schema, type Currency15 } from "../models/unions/currency15.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import { disputedSchema, type Disputed } from "../models/unions/disputed.js";
import { errorCode6Schema, type ErrorCode6 } from "../models/unions/error-code6.js";
import {
  externalIdentifier42Schema,
  type ExternalIdentifier42,
} from "../models/unions/external-identifier42.js";
import { giftCardIdSchema, type GiftCardId } from "../models/unions/gift-card-id.js";
import { giftCardLast4Schema, type GiftCardLast4 } from "../models/unions/gift-card-last4.js";
import {
  hasGiftCardRedemptionsSchema,
  type HasGiftCardRedemptions,
} from "../models/unions/has-gift-card-redemptions.js";
import { hasRefundsSchema, type HasRefunds } from "../models/unions/has-refunds.js";
import { hasSettlementsSchema, type HasSettlements } from "../models/unions/has-settlements.js";
import { id11Schema, type Id11 } from "../models/unions/id11.js";
import { idempotencyKey2Schema, type IdempotencyKey2 } from "../models/unions/idempotency-key2.js";
import { ipAddressSchema, type IpAddress } from "../models/unions/ip-address.js";
import {
  isSubsequentPayment2Schema,
  type IsSubsequentPayment2,
} from "../models/unions/is-subsequent-payment2.js";
import { merchantInitiated2Schema, type MerchantInitiated2 } from "../models/unions/merchant-initiated2.js";
import { metadata12Schema, type Metadata12 } from "../models/unions/metadata12.js";
import { method11Schema, type Method11 } from "../models/unions/method11.js";
import { paymentLinkIdSchema, type PaymentLinkId } from "../models/unions/payment-link-id.js";
import { paymentMethodBin3Schema, type PaymentMethodBin3 } from "../models/unions/payment-method-bin3.js";
import {
  paymentMethodCountry1Schema,
  type PaymentMethodCountry1,
} from "../models/unions/payment-method-country1.js";
import {
  paymentMethodFingerprintSchema,
  type PaymentMethodFingerprint,
} from "../models/unions/payment-method-fingerprint.js";
import { paymentMethodIdSchema, type PaymentMethodId } from "../models/unions/payment-method-id.js";
import { paymentMethodLabelSchema, type PaymentMethodLabel } from "../models/unions/payment-method-label.js";
import {
  paymentMethodScheme3Schema,
  type PaymentMethodScheme3,
} from "../models/unions/payment-method-scheme3.js";
import { paymentServiceId9Schema, type PaymentServiceId9 } from "../models/unions/payment-service-id9.js";
import {
  paymentServiceTransactionId2Schema,
  type PaymentServiceTransactionId2,
} from "../models/unions/payment-service-transaction-id2.js";
import { paymentSource1Schema, type PaymentSource1 } from "../models/unions/payment-source1.js";
import { pendingReviewSchema, type PendingReview } from "../models/unions/pending-review.js";
import { preferSchema, type Prefer } from "../models/unions/prefer.js";
import {
  reauthorizedFromTransactionId2Schema,
  type ReauthorizedFromTransactionId2,
} from "../models/unions/reauthorized-from-transaction-id2.js";
import { reconciliationId1Schema, type ReconciliationId1 } from "../models/unions/reconciliation-id1.js";
import {
  response200CaptureTransactionSchema,
  type Response200CaptureTransaction,
} from "../models/unions/response200-capture-transaction.js";
import {
  response200VoidTransactionSchema,
  type Response200VoidTransaction,
} from "../models/unions/response200-void-transaction.js";
import { search1Schema, type Search1 } from "../models/unions/search1.js";
import { status3Schema, type Status3 } from "../models/unions/status3.js";
import { updatedAtGteSchema, type UpdatedAtGte } from "../models/unions/updated-at-gte.js";
import { updatedAtLteSchema, type UpdatedAtLte } from "../models/unions/updated-at-lte.js";
import { used3DsSchema, type Used3Ds } from "../models/unions/used3-ds.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage transaction.
 */
export class Transactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel transaction
   *
   * @remarks
   * Cancels a pending transaction. If the transaction was successfully authorized, or was already
   * captured, the cancel will not be processed.
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.CancelTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelTransaction(
    request: Transactions.CancelTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionCancel, Transactions.CancelTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/cancel"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionCancelSchema },
        errorFactory: Transactions.CancelTransactionError,
      },
      options,
    );
  }

  /**
   * Capture transaction
   *
   * @remarks
   * Captures a previously authorized transaction. You can capture the full or a partial amount, as
   * long as it does not exceed the authorized amount (unless over-capture is enabled).
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.CaptureTransactionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  captureTransaction(
    request: Transactions.CaptureTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<Response200CaptureTransaction, Transactions.CaptureTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/capture"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "prefer", value: request.prefer, schema: s.optional(s.lazy(() => preferSchema)) },
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          {
            name: "idempotency-key",
            value: request.idempotencyKey,
            schema: s.optional(s.lazy(() => idempotencyKey2Schema)),
          },
        ],
        body: { kind: "json", value: request.body, schema: transactionCaptureCreateSchema },
      },
      {
        success: { kind: "json", schema: response200CaptureTransactionSchema },
        errorFactory: Transactions.CaptureTransactionError,
      },
      options,
    );
  }

  /**
   * Create transaction
   *
   * @remarks
   * Create a new transaction using a supported payment method. If additional buyer authorization is
   * required, an approval URL will be returned. Duplicated gift card numbers are not supported.
   *
   * @returns Returns the created transaction.
   *
   * @throws {@link Transactions.CreateTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTransaction(
    request: Transactions.CreateTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction, Transactions.CreateTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          {
            name: "idempotency-key",
            value: request.idempotencyKey,
            schema: s.optional(s.lazy(() => idempotencyKey2Schema)),
          },
        ],
        body: { kind: "json", value: request.body, schema: transactionCreateSchema },
      },
      {
        success: { kind: "json", schema: transactionSchema },
        errorFactory: Transactions.CreateTransactionError,
      },
      options,
    );
  }

  /**
   * Get transaction
   *
   * @remarks
   * Retrieve the details of a transaction by its unique identifier.
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.GetTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransaction(
    request: Transactions.GetTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction, Transactions.GetTransactionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionSchema },
        errorFactory: Transactions.GetTransactionError,
      },
      options,
    );
  }

  /**
   * Increment transaction authorization
   *
   * @remarks
   * Increment the transaction authorization amount of a given transaction_id.
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.IncrementTransactionAuthorizationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  incrementTransactionAuthorization(
    request: Transactions.IncrementTransactionAuthorizationRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionAuthorizationIncrement, Transactions.IncrementTransactionAuthorizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/authorization/increment"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          {
            name: "idempotency-key",
            value: request.idempotencyKey,
            schema: s.optional(s.lazy(() => idempotencyKey2Schema)),
          },
        ],
        body: { kind: "json", value: request.body, schema: transactionAuthorizationIncrementCreateSchema },
      },
      {
        success: { kind: "json", schema: transactionAuthorizationIncrementSchema },
        errorFactory: Transactions.IncrementTransactionAuthorizationError,
      },
      options,
    );
  }

  /**
   * List transaction events
   *
   * @remarks
   * Retrieve a paginated list of events related to processing a transaction, including status
   * changes, API requests, and webhook delivery attempts. Events are listed in chronological order,
   * with the most recent events first.
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.ListTransactionEventsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransactionEvents(
    request: Transactions.ListTransactionEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionEvents, Transactions.ListTransactionEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/events"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionEventsSchema },
        errorFactory: Transactions.ListTransactionEventsError,
      },
      options,
    );
  }

  /**
   * List transactions
   *
   * @remarks
   * Returns a paginated list of transactions for the merchant account, sorted by most recently
   * updated. You can filter, sort, and search transactions using query parameters.
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.ListTransactionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransactions(
    request: Transactions.ListTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionSummaries, Transactions.ListTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          {
            name: "created_at_lte",
            value: request.createdAtLte,
            schema: s.optional(s.lazy(() => createdAtLteSchema)),
          },
          {
            name: "created_at_gte",
            value: request.createdAtGte,
            schema: s.optional(s.lazy(() => createdAtGteSchema)),
          },
          {
            name: "updated_at_lte",
            value: request.updatedAtLte,
            schema: s.optional(s.lazy(() => updatedAtLteSchema)),
          },
          {
            name: "updated_at_gte",
            value: request.updatedAtGte,
            schema: s.optional(s.lazy(() => updatedAtGteSchema)),
          },
          { name: "search", value: request.search, schema: s.optional(s.lazy(() => search1Schema)) },
          {
            name: "buyer_external_identifier",
            value: request.buyerExternalIdentifier,
            schema: s.optional(s.lazy(() => buyerExternalIdentifier24Schema)),
          },
          { name: "buyer_id", value: request.buyerId, schema: s.optional(s.lazy(() => buyerId27Schema)) },
          {
            name: "buyer_email_address",
            value: request.buyerEmailAddress,
            schema: s.optional(s.lazy(() => buyerEmailAddressSchema)),
          },
          { name: "ip_address", value: request.ipAddress, schema: s.optional(s.lazy(() => ipAddressSchema)) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status3Schema)) },
          { name: "id", value: request.id, schema: s.optional(s.lazy(() => id11Schema)) },
          {
            name: "payment_service_transaction_id",
            value: request.paymentServiceTransactionId,
            schema: s.optional(s.lazy(() => paymentServiceTransactionId2Schema)),
          },
          {
            name: "external_identifier",
            value: request.externalIdentifier,
            schema: s.optional(s.lazy(() => externalIdentifier42Schema)),
          },
          { name: "metadata", value: request.metadata, schema: s.optional(s.lazy(() => metadata12Schema)) },
          { name: "amount_eq", value: request.amountEq, schema: s.optional(s.lazy(() => amountEqSchema)) },
          { name: "amount_lte", value: request.amountLte, schema: s.optional(s.lazy(() => amountLteSchema)) },
          { name: "amount_gte", value: request.amountGte, schema: s.optional(s.lazy(() => amountGteSchema)) },
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currency15Schema)) },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => country14Schema)) },
          {
            name: "payment_service_id",
            value: request.paymentServiceId,
            schema: s.optional(s.lazy(() => paymentServiceId9Schema)),
          },
          {
            name: "payment_method_id",
            value: request.paymentMethodId,
            schema: s.optional(s.lazy(() => paymentMethodIdSchema)),
          },
          {
            name: "payment_method_label",
            value: request.paymentMethodLabel,
            schema: s.optional(s.lazy(() => paymentMethodLabelSchema)),
          },
          {
            name: "payment_method_scheme",
            value: request.paymentMethodScheme,
            schema: s.optional(s.lazy(() => paymentMethodScheme3Schema)),
          },
          {
            name: "payment_method_country",
            value: request.paymentMethodCountry,
            schema: s.optional(s.lazy(() => paymentMethodCountry1Schema)),
          },
          {
            name: "payment_method_fingerprint",
            value: request.paymentMethodFingerprint,
            schema: s.optional(s.lazy(() => paymentMethodFingerprintSchema)),
          },
          { name: "method", value: request.method, schema: s.optional(s.lazy(() => method11Schema)) },
          {
            name: "error_code",
            value: request.errorCode,
            schema: s.optional(s.lazy(() => errorCode6Schema)),
          },
          {
            name: "has_refunds",
            value: request.hasRefunds,
            schema: s.optional(s.lazy(() => hasRefundsSchema)),
          },
          {
            name: "pending_review",
            value: request.pendingReview,
            schema: s.optional(s.lazy(() => pendingReviewSchema)),
          },
          {
            name: "checkout_session_id",
            value: request.checkoutSessionId,
            schema: s.optional(s.lazy(() => checkoutSessionId2Schema)),
          },
          {
            name: "payment_link_id",
            value: request.paymentLinkId,
            schema: s.optional(s.lazy(() => paymentLinkIdSchema)),
          },
          {
            name: "reconciliation_id",
            value: request.reconciliationId,
            schema: s.optional(s.lazy(() => reconciliationId1Schema)),
          },
          {
            name: "has_gift_card_redemptions",
            value: request.hasGiftCardRedemptions,
            schema: s.optional(s.lazy(() => hasGiftCardRedemptionsSchema)),
          },
          {
            name: "gift_card_id",
            value: request.giftCardId,
            schema: s.optional(s.lazy(() => giftCardIdSchema)),
          },
          {
            name: "gift_card_last4",
            value: request.giftCardLast4,
            schema: s.optional(s.lazy(() => giftCardLast4Schema)),
          },
          {
            name: "has_settlements",
            value: request.hasSettlements,
            schema: s.optional(s.lazy(() => hasSettlementsSchema)),
          },
          {
            name: "payment_method_bin",
            value: request.paymentMethodBin,
            schema: s.optional(s.lazy(() => paymentMethodBin3Schema)),
          },
          {
            name: "payment_source",
            value: request.paymentSource,
            schema: s.optional(s.lazy(() => paymentSource1Schema)),
          },
          {
            name: "is_subsequent_payment",
            value: request.isSubsequentPayment,
            schema: s.optional(s.lazy(() => isSubsequentPayment2Schema)),
          },
          {
            name: "merchant_initiated",
            value: request.merchantInitiated,
            schema: s.optional(s.lazy(() => merchantInitiated2Schema)),
          },
          { name: "used_3ds", value: request.used3Ds, schema: s.optional(s.lazy(() => used3DsSchema)) },
          { name: "disputed", value: request.disputed, schema: s.optional(s.lazy(() => disputedSchema)) },
          {
            name: "reauthorized_from_transaction_id",
            value: request.reauthorizedFromTransactionId,
            schema: s.optional(s.lazy(() => reauthorizedFromTransactionId2Schema)),
          },
          {
            name: "buyer_search",
            value: request.buyerSearch,
            schema: s.optional(s.lazy(() => buyerSearchSchema)),
          },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionSummariesSchema },
        errorFactory: Transactions.ListTransactionsError,
      },
      options,
    );
  }

  /**
   * Sync transaction
   *
   * @remarks
   * Synchronizes the status of a transaction with the underlying payment service provider. This is
   * useful for transactions in a pending state to check if they've been completed or failed. Only
   * available for some payment service providers.
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.SyncTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  syncTransaction(
    request: Transactions.SyncTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction, Transactions.SyncTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/sync"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionSchema },
        errorFactory: Transactions.SyncTransactionError,
      },
      options,
    );
  }

  /**
   * Manually update a transaction
   *
   * @remarks
   * Manually updates a transaction.
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.UpdateTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTransaction(
    request: Transactions.UpdateTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction, Transactions.UpdateTransactionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: transactionUpdateSchema },
      },
      {
        success: { kind: "json", schema: transactionSchema },
        errorFactory: Transactions.UpdateTransactionError,
      },
      options,
    );
  }

  /**
   * Void transaction
   *
   * @remarks
   * Voids a previously authorized transaction. If the transaction was not yet successfully
   * authorized, or was already captured, the void will not be processed. This operation releases
   * the hold on the buyer's funds. Captured transactions can be refunded instead.
   *
   * @returns Successful Response
   *
   * @throws {@link Transactions.VoidTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  voidTransaction(
    request: Transactions.VoidTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<Response200VoidTransaction, Transactions.VoidTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/void"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "prefer", value: request.prefer, schema: s.optional(s.lazy(() => preferSchema)) },
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          {
            name: "idempotency-key",
            value: request.idempotencyKey,
            schema: s.optional(s.lazy(() => idempotencyKey2Schema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: response200VoidTransactionSchema },
        errorFactory: Transactions.VoidTransactionError,
      },
      options,
    );
  }
}

export namespace Transactions {
  export type CancelTransactionRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class CancelTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelTransactionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CaptureTransactionRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The preferred resource type in the response. */
    prefer?: Prefer;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    /**
     * A unique key that identifies this request. Providing this header will make this an idempotent
     * request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid
     * collisions.
     */
    idempotencyKey?: IdempotencyKey2;
    body: TransactionCaptureCreate;
  };

  export class CaptureTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CaptureTransactionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CreateTransactionRequest = {
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    /**
     * A unique key that identifies this request. Providing this header will make this an idempotent
     * request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid
     * collisions.
     */
    idempotencyKey?: IdempotencyKey2;
    body: TransactionCreate;
  };

  export class CreateTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTransactionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetTransactionRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTransactionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type IncrementTransactionAuthorizationRequest = {
    /** The unique identifier of the transaction. */
    transactionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    /**
     * A unique key that identifies this request. Providing this header will make this an idempotent
     * request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid
     * collisions.
     */
    idempotencyKey?: IdempotencyKey2;
    body: TransactionAuthorizationIncrementCreate;
  };

  export class IncrementTransactionAuthorizationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<IncrementTransactionAuthorizationError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListTransactionEventsRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are at returned. @default 100 */
    limit?: number;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListTransactionEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTransactionEventsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListTransactionsRequest = {
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are at returned. @default 20 */
    limit?: number;
    /**
     * Filters the results to only transactions created before this ISO date-time string. The time
     * zone must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    createdAtLte?: CreatedAtLte;
    /**
     * Filters the results to only transactions created after this ISO date-time string. The time
     * zone must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    createdAtGte?: CreatedAtGte;
    /**
     * Filters the results to only transactions updated before this ISO date-time string. The time
     * zone must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    updatedAtLte?: UpdatedAtLte;
    /**
     * Filters the results to only transactions updated after this ISO date-time string. The time
     * zone must be included. Ensure that the date-time string is URL encoded, e.g.
     * `2022-01-01T12:00:00+08:00` must be encoded as `2022-01-01T12%3A00%3A00%2B08%3A00`.
     */
    updatedAtGte?: UpdatedAtGte;
    search?: Search1;
    buyerExternalIdentifier?: BuyerExternalIdentifier24;
    buyerId?: BuyerId27;
    /**
     * Deprecated. Filters the results to only the items for which the `buyer` has an
     * `email_address` that matches this value. This filter can be slow and is not recommended for
     * use in automated systems. Use `buyer_search`, `buyer_external_identifier` or `buyer_id`
     * instead.
     *
     * @deprecated
     */
    buyerEmailAddress?: BuyerEmailAddress;
    ipAddress?: IpAddress;
    /**
     * Filters the results to only the transactions that have a `status` that matches with any of
     * the provided status values.
     */
    status?: Status3;
    id?: Id11;
    paymentServiceTransactionId?: PaymentServiceTransactionId2;
    externalIdentifier?: ExternalIdentifier42;
    /**
     * Filters for transactions where their `metadata` values contain all of the provided `metadata`
     * keys. The value sent for `metadata` must be formatted as a JSON string, and all keys and
     * values must be strings. This value should also be URL encoded.
     */
    metadata?: Metadata12;
    /**
     * Filters for transactions that have an `amount` that is equal to the provided `amount_eq`
     * value. For best performance, combine it with `created_at_gte` and `created_at_lte`.
     */
    amountEq?: AmountEq;
    /**
     * Filters for transactions that have an `amount` that is less than or equal to the `amount_lte`
     * value. For best performance, combine it with `created_at_gte` and `created_at_lte`.
     */
    amountLte?: AmountLte;
    /**
     * Filters for transactions that have an `amount` that is greater than or equal to the
     * `amount_gte` value. For best performance, combine it with `created_at_gte` and
     * `created_at_lte`.
     */
    amountGte?: AmountGte;
    /**
     * Filters for transactions that have matching `currency` values. The `currency` values provided
     * must be formatted as 3-letter ISO currency code. For best performance, combine it with
     * `created_at_gte` and `created_at_lte`.
     */
    currency?: Currency15;
    /**
     * Filters for transactions that have matching `country` values. For best performance, combine
     * it with `created_at_gte` and `created_at_lte`.
     */
    country?: Country14;
    /** Filters for transactions that were processed by the provided `payment_service_id` values. */
    paymentServiceId?: PaymentServiceId9;
    paymentMethodId?: PaymentMethodId;
    paymentMethodLabel?: PaymentMethodLabel;
    /**
     * Filters for transactions where the `payment_method_scheme` matches one of the provided
     * values. For best performance, combine it with `created_at_gte` and `created_at_lte`.
     */
    paymentMethodScheme?: PaymentMethodScheme3;
    /**
     * Filters for transactions that have a payment method with a country that matches with the
     * provided value. For best performance, combine it with `created_at_gte` and `created_at_lte`.
     */
    paymentMethodCountry?: PaymentMethodCountry1;
    paymentMethodFingerprint?: PaymentMethodFingerprint;
    /**
     * Filters for transactions that have matching `method` values. For best performance, combine it
     * with `created_at_gte` and `created_at_lte`.
     */
    method?: Method11;
    /** Filters for transactions where the `error_code` matches one for the provided values. */
    errorCode?: ErrorCode6;
    /** Filters for transactions with refunds. */
    hasRefunds?: HasRefunds;
    /** Filters for transactions with a pending manual anti-fraud review. */
    pendingReview?: PendingReview;
    /** Filters for transactions where the `checkout_session_id` matches the provided value. */
    checkoutSessionId?: CheckoutSessionId2;
    /** Filters for transactions where the `payment_link_id` matches the provided value. */
    paymentLinkId?: PaymentLinkId;
    /** Filters for transactions where the `reconciliation_id` matches the provided value. */
    reconciliationId?: ReconciliationId1;
    /** Filters for transactions with gift card redemptions. */
    hasGiftCardRedemptions?: HasGiftCardRedemptions;
    /**
     * Filters for transactions where a gift card used has an `id` that matches the provided value.
     */
    giftCardId?: GiftCardId;
    /**
     * Deprecated. Filters for transactions that have at least one gift card redemption where the
     * last 4 digits of its gift card number matches exactly with the provided value. This filter
     * can be slow and is not recommended for use in automated systems. Use `gift_card_id` instead.
     *
     * @deprecated
     */
    giftCardLast4?: GiftCardLast4;
    /**
     * Filters for transactions that have at least one associated settlement record. When filtering
     * on `false`, combine it with `created_at_gte` and `created_at_lte` for best performance.
     */
    hasSettlements?: HasSettlements;
    /**
     * Filter for transactions that have a card with a BIN that matches exactly with the provided
     * value.
     */
    paymentMethodBin?: PaymentMethodBin3;
    /**
     * Filters the results to only the transactions that have a payment source that matches with any
     * of the provided values. For best performance, combine it with `created_at_gte` and
     * `created_at_lte`.
     */
    paymentSource?: PaymentSource1;
    /**
     * Filters for transactions where the `is_subsequent_payment` matches the provided value. For
     * best performance, combine it with `created_at_gte` and `created_at_lte`.
     */
    isSubsequentPayment?: IsSubsequentPayment2;
    /**
     * Filters for transactions where the `merchant_initiated` matches the provided value. For best
     * performance, combine it with `created_at_gte` and `created_at_lte`.
     */
    merchantInitiated?: MerchantInitiated2;
    /**
     * Filters for transactions that attempted 3DS authentication or not. For best performance,
     * combine it with `created_at_gte` and `created_at_lte`.
     */
    used3Ds?: Used3Ds;
    /** Filters for transactions that have been disputed. */
    disputed?: Disputed;
    /**
     * Filters for transactions that were reauthorized from the transaction with the provided ID.
     */
    reauthorizedFromTransactionId?: ReauthorizedFromTransactionId2;
    /**
     * Filters the results to only get the items for which some of the buyer data contains exactly
     * the provided `buyer_search` values.
     */
    buyerSearch?: BuyerSearch;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTransactionsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type SyncTransactionRequest = {
    transactionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class SyncTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SyncTransactionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateTransactionRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: TransactionUpdate;
  };

  export class UpdateTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTransactionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type VoidTransactionRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The preferred resource type in the response. */
    prefer?: Prefer;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    /**
     * A unique key that identifies this request. Providing this header will make this an idempotent
     * request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid
     * collisions.
     */
    idempotencyKey?: IdempotencyKey2;
  };

  export class VoidTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<VoidTransactionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
