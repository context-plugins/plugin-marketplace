import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  balanceReportGroupingSchema,
  type BalanceReportGrouping,
} from "../models/balance-report-grouping.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Balances API
 */
export class BalancesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get balance
   *
   * @remarks
   * When processing payments with Mollie, we put all pending funds — usually minus Mollie fees — on
   * a balance. Once you have linked a bank account to your Mollie account, we can pay out your
   * balance towards this bank account.
   *
   * With the Balances API you can retrieve your current balance. The response includes two amounts:
   *
   * * The *pending amount*. These are payments that have been marked as `paid`, but are not yet
   *   available on your balance.
   * * The *available amount*. This is the amount that you can get paid out to your bank account, or
   *   use for refunds.
   *
   * With instant payment methods like iDEAL, payments are moved to the available balance instantly.
   * With slower payment methods, like credit card for example, it can take a few days before the
   * funds are available on your balance. These funds will be shown under the *pending amount* in
   * the meanwhile.
   *
   * @returns The balance object.
   *
   * @throws {@link BalancesApi.GetBalanceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalance(
    request: BalancesApi.GetBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BalancesApi.GetBalanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/balances/{balanceId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "balanceId", value: request.balanceId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BalancesApi.GetBalanceError,
      },
      options,
    );
  }

  /**
   * Get balance report
   *
   * @remarks
   * Retrieve a summarized report for all transactions on a given balance within a given timeframe.
   *
   * The API also provides a detailed report on all 'prepayments' for Mollie fees that were deducted
   * from your balance during the reported period, ahead of your Mollie invoice.
   *
   * The alias `primary` can be used instead of the balance ID to refer to the organization's
   * primary balance.
   *
   * @returns The balance report object.
   *
   * @throws {@link BalancesApi.GetBalanceReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceReport(
    request: BalancesApi.GetBalanceReportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BalancesApi.GetBalanceReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/balances/{balanceId}/report"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "balanceId", value: request.balanceId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.string() },
          { name: "until", value: request.until, schema: s.string() },
          {
            name: "grouping",
            value: request.grouping,
            schema: s.optional(s.lazy(() => balanceReportGroupingSchema)),
          },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BalancesApi.GetBalanceReportError,
      },
      options,
    );
  }

  /**
   * Get primary balance
   *
   * @remarks
   * Retrieve the primary balance. This is the balance of your account's primary currency, where all
   * payments are settled to by default.
   *
   * This endpoint is a convenient alias of the [Get balance](get-balance) endpoint.
   *
   * @returns The primary balance object.
   *
   * @throws {@link BalancesApi.GetPrimaryBalanceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPrimaryBalance(
    request: BalancesApi.GetPrimaryBalanceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BalancesApi.GetPrimaryBalanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/balances/primary"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BalancesApi.GetPrimaryBalanceError,
      },
      options,
    );
  }

  /**
   * List balance transactions
   *
   * @remarks
   * Retrieve a list of all balance transactions. Transactions include for example payments,
   * refunds, chargebacks, and settlements.
   *
   * For an aggregated report of these balance transactions, refer to the [Get balance
   * report](get-balance-report) endpoint.
   *
   * The alias `primary` can be used instead of the balance ID to refer to the organization's
   * primary balance.
   *
   * The results are paginated.
   *
   * @returns A list of balance transaction objects.
   *
   * @throws {@link BalancesApi.ListBalanceTransactionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBalanceTransactions(
    request: BalancesApi.ListBalanceTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BalancesApi.ListBalanceTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/balances/{balanceId}/transactions"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "balanceId", value: request.balanceId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BalancesApi.ListBalanceTransactionsError,
      },
      options,
    );
  }

  /**
   * List balances
   *
   * @remarks
   * Retrieve a list of the organization's balances, including the primary balance.
   *
   * The results are paginated.
   *
   * @returns A list of balance objects. For a complete reference of the balance object, refer to
   * the [Get balance endpoint](get-balance) documentation.
   *
   * @throws {@link BalancesApi.ListBalancesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBalances(
    request: BalancesApi.ListBalancesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BalancesApi.ListBalancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/balances"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "currency", value: request.currency, schema: s.optionalNullable(s.string()) },
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BalancesApi.ListBalancesError,
      },
      options,
    );
  }
}

export namespace BalancesApi {
  export type GetBalanceRequest = {
    /** Provide the ID of the related balance. */
    balanceId: string;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetBalanceError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetBalanceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetBalanceReportRequest = {
    /** Provide the ID of the related balance. */
    balanceId: string;
    /**
     * The start date of the report, in `YYYY-MM-DD` format. The from date is 'inclusive', and in
     * Central European Time. This means a report with for example `from=2024-01-01` will include
     * transactions from 2024-01-01 0:00:00 CET and onwards.
     */
    from: string;
    /**
     * The end date of the report, in `YYYY-MM-DD` format. The until date is 'exclusive', and in
     * Central European Time. This means a report with for example `until=2024-02-01` will include
     * transactions up until 2024-01-31 23:59:59 CET.
     */
    until: string;
    /**
     * You can retrieve reports in two different formats. With the `status-balances` format,
     * transactions are grouped by status (e.g. `pending`, `available`), then by transaction type,
     * and then by other sub-groupings where available (e.g. payment method).
     *
     * With the `transaction-categories` format, transactions are grouped by transaction type, then
     * by status, and then again by other sub-groupings where available.
     */
    grouping?: BalanceReportGrouping;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetBalanceReportError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBalanceReportError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetPrimaryBalanceRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetPrimaryBalanceError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetPrimaryBalanceError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListBalanceTransactionsRequest = {
    /** Provide the ID of the related balance. */
    balanceId: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListBalanceTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBalanceTransactionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListBalancesRequest = {
    /** Optionally only return balances with the given currency. For example: `EUR`. */
    currency?: string | null;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListBalancesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBalancesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
