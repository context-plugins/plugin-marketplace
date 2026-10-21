import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { payoutRequestSchema, type PayoutRequest } from "../models/payout-request.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Payouts API
 */
export class PayoutsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel payout
   *
   * @remarks
   * Cancel a payout. A payout can only be canceled while it has the status `requested`. Once the
   * payout moves to `initiated`, it is too late to cancel.
   *
   * The canceled payout object is returned with the status set to `canceled`.
   *
   * @returns The canceled payout object.
   *
   * @throws {@link PayoutsApi.CancelPayoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelPayout(
    request: PayoutsApi.CancelPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PayoutsApi.CancelPayoutError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/payouts/{payoutId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken),
        pathParams: [{ name: "payoutId", value: request.payoutId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PayoutsApi.CancelPayoutError,
      },
      options,
    );
  }

  /**
   * Create payout
   *
   * @remarks
   * Request a payout from one of your balances to the balance's configured bank account.
   *
   * The payout will be executed on the next scheduled business day. If no `amount` is specified,
   * the full available balance minus any configured balance reserve is paid out.
   *
   * Once the payout is created with status `requested`, you can cancel it via the [Cancel
   * payout](cancel-payout) endpoint, up until the payout moves to `initiated`.
   *
   * Creating a payout via the API automatically sets the balance's `transferFrequency` to `never`,
   * pausing any previously configured automatic settlement schedule. To resume automatic
   * settlements, update the transfer frequency via the dashboard.
   *
   * ### Webhooks
   *
   * Subscribe to the following webhook events to track payout status changes. See the [Webhook
   * Subscriptions API](list-webhooks) for details on subscribing.
   *
   * | Event | Description |
   * |---|---|
   * | `payout.initiated` | The payout is being executed and funds are reserved. |
   * | `payout.processing-at-bank` | The payout has been submitted to the bank. |
   * | `payout.completed` | The payout has been sent to the destination bank account. |
   * | `payout.canceled` | The payout was canceled via the API before being submitted to the bank. |
   * | `payout.failed` | The payout failed after creation, including bank rejections and post-submission cancellations. |
   *
   * ### Payout failure reasons
   *
   * A payout request may fail immediately if one of the following conditions applies:
   *
   * - A payout is already scheduled for the next business day for this balance.
   * - The balance has insufficient funds.
   * - The balance is not active.
   * - Payouts are blocked for this organization.
   * - The balance has queued refunds.
   * - One of the organization's balances is below the negative balance threshold.
   * - The payout destination (bank account) is invalid or not configured.
   *
   * @returns The newly created payout object.
   *
   * @throws {@link PayoutsApi.CreatePayoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPayout(
    request: PayoutsApi.CreatePayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PayoutsApi.CreatePayoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/payouts"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: payoutRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: PayoutsApi.CreatePayoutError,
      },
      options,
    );
  }

  /**
   * Get payout
   *
   * @remarks
   * Retrieve a single payout by its ID.
   *
   * @returns The payout object.
   *
   * @throws {@link PayoutsApi.GetPayoutError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayout(
    request: PayoutsApi.GetPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PayoutsApi.GetPayoutError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payouts/{payoutId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken),
        pathParams: [{ name: "payoutId", value: request.payoutId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PayoutsApi.GetPayoutError,
      },
      options,
    );
  }

  /**
   * List payouts
   *
   * @remarks
   * Retrieve a list of all payouts for your organization, including payouts initiated automatically
   * by the balance's payout schedule and payouts requested via the API or dashboard.
   *
   * Only payouts created on or after April 1st, 2026 are returned.
   *
   * The results are paginated. Use the `from` query parameter together with `_links.next` to
   * iterate through the full result set.
   *
   * @returns A list of payout objects. For a complete reference of the payout object, refer to the
   * [Get payout endpoint](get-payout) documentation.
   *
   * @throws {@link PayoutsApi.ListPayoutsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPayouts(
    request: PayoutsApi.ListPayoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PayoutsApi.ListPayoutsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payouts"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken),
        pathParams: [],
        query: [
          { name: "balanceId", value: request.balanceId, schema: s.optionalNullable(s.string()) },
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PayoutsApi.ListPayoutsError,
      },
      options,
    );
  }
}

export namespace PayoutsApi {
  export type CancelPayoutRequest = {
    /** Provide the ID of the payout. */
    payoutId: string;
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

  export class CancelPayoutError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelPayoutError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreatePayoutRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body: PayoutRequest;
  };

  export class CreatePayoutError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreatePayoutError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetPayoutRequest = {
    /** Provide the ID of the payout. */
    payoutId: string;
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

  export class GetPayoutError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetPayoutError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListPayoutsRequest = {
    /**
     * Return only payouts for the balance with the given ID. The value must be a valid balance
     * token in the format `bal_*`.
     */
    balanceId?: string | null;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
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

  export class ListPayoutsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListPayoutsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
