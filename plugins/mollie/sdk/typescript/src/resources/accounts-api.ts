import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { creditDebitIndicatorSchema, type CreditDebitIndicator } from "../models/credit-debit-indicator.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Accounts API
 */
export class AccountsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get business account
   *
   * @remarks
   * > 🔒 Restricted access > > This API is currently only available to Mollie's authorized partners
   * via OAuth. Direct access for individual businesses isn't available yet, but it's on our roadmap
   * — check back here for updates.
   *
   * Retrieve a single business account object by its account ID. This allows you to check the
   * current status, balance, and account details.
   *
   * @returns The business account object.
   *
   * @throws {@link AccountsApi.GetBusinessAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBusinessAccount(
    request: AccountsApi.GetBusinessAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AccountsApi.GetBusinessAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/business-accounts/accounts/{businessAccountId}"),
        auth: this.#auth.oAuth,
        pathParams: [{ name: "businessAccountId", value: request.businessAccountId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AccountsApi.GetBusinessAccountError,
      },
      options,
    );
  }

  /**
   * Get transaction
   *
   * @remarks
   * > 🔒 Restricted access > > This API is currently only available to Mollie's authorized partners
   * via OAuth. Direct access for individual businesses isn't available yet, but it's on our roadmap
   * — check back here for updates.
   *
   * Retrieve a single transaction object by its transaction ID. This allows you to check the
   * details, amount, counterparty, and balance impact of a specific transaction.
   *
   * @returns The transaction object.
   *
   * @throws {@link AccountsApi.GetBusinessAccountTransactionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBusinessAccountTransaction(
    request: AccountsApi.GetBusinessAccountTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AccountsApi.GetBusinessAccountTransactionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/business-accounts/accounts/{businessAccountId}/transactions/{transactionId}",
        ),
        auth: this.#auth.oAuth,
        pathParams: [
          { name: "businessAccountId", value: request.businessAccountId, schema: s.string() },
          { name: "transactionId", value: request.transactionId, schema: s.string() },
        ],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AccountsApi.GetBusinessAccountTransactionError,
      },
      options,
    );
  }

  /**
   * List transactions
   *
   * @remarks
   * > 🔒 Restricted access > > This API is currently only available to Mollie's authorized partners
   * via OAuth. Direct access for individual businesses isn't available yet, but it's on our roadmap
   * — check back here for updates.
   *
   * Retrieve all transactions for a specific business account.
   *
   * The results are paginated.
   *
   * @returns A list of transaction objects.
   *
   * @throws {@link AccountsApi.ListBusinessAccountTransactionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBusinessAccountTransactions(
    request: AccountsApi.ListBusinessAccountTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AccountsApi.ListBusinessAccountTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/business-accounts/accounts/{businessAccountId}/transactions"),
        auth: this.#auth.oAuth,
        pathParams: [{ name: "businessAccountId", value: request.businessAccountId, schema: s.string() }],
        query: [
          {
            name: "creditDebitIndicator",
            value: request.creditDebitIndicator,
            schema: s.optional(s.lazy(() => creditDebitIndicatorSchema)),
          },
          { name: "processedAfter", value: request.processedAfter, schema: s.optional(s.dateTime()) },
          { name: "processedBefore", value: request.processedBefore, schema: s.optional(s.dateTime()) },
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AccountsApi.ListBusinessAccountTransactionsError,
      },
      options,
    );
  }

  /**
   * List business accounts
   *
   * @remarks
   * > 🔒 Restricted access > > This API is currently only available to Mollie's authorized partners
   * via OAuth. Direct access for individual businesses isn't available yet, but it's on our roadmap
   * — check back here for updates.
   *
   * Retrieve all business accounts for the authenticated organization.
   *
   * The results are paginated.
   *
   * @returns A list of business account objects.
   *
   * @throws {@link AccountsApi.ListBusinessAccountsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBusinessAccounts(
    request: AccountsApi.ListBusinessAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AccountsApi.ListBusinessAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/business-accounts/accounts"),
        auth: this.#auth.oAuth,
        pathParams: [],
        query: [
          { name: "iban", value: request.iban, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AccountsApi.ListBusinessAccountsError,
      },
      options,
    );
  }
}

export namespace AccountsApi {
  export type GetBusinessAccountRequest = {
    /** Provide the ID of the related business account. */
    businessAccountId: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetBusinessAccountError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetBusinessAccountError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetBusinessAccountTransactionRequest = {
    /** Provide the ID of the related business account. */
    businessAccountId: string;
    /** Provide the ID of the related transaction. */
    transactionId: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetBusinessAccountTransactionError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetBusinessAccountTransactionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListBusinessAccountTransactionsRequest = {
    /** Provide the ID of the related business account. */
    businessAccountId: string;
    /** Filter the transactions by whether they credited or debited the account balance. */
    creditDebitIndicator?: CreditDebitIndicator;
    /**
     * Filter the transactions to only include those processed on or after this date and time.
     * Filters on the `processedAt` property.
     *
     * Cannot be combined with `from`.
     */
    processedAfter?: Date;
    /**
     * Filter the transactions to only include those processed on or before this date and time.
     * Filters on the `processedAt` property.
     *
     * Cannot be combined with `from`.
     */
    processedBefore?: Date;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     *
     * Cannot be combined with `processedAfter` or `processedBefore`.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListBusinessAccountTransactionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBusinessAccountTransactionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListBusinessAccountsRequest = {
    /** Filter the results by IBAN. Only the business account with an exact match is returned. */
    iban?: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListBusinessAccountsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBusinessAccountsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
