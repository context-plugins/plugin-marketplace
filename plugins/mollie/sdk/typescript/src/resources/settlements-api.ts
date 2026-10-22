import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { currenciesSchema, type Currencies } from "../models/currencies.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Settlements API
 */
export class SettlementsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get next settlement
   *
   * @remarks
   * Retrieve the details of the current settlement, that has not yet been paid out.
   *
   * For a complete reference of the settlement object, refer to the [Get settlement
   * endpoint](get-settlement) documentation.
   *
   * For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or
   * the [balance transactions](list-balance-transactions) endpoint.
   *
   * @returns The next settlement object. For a complete reference of the settlement object, refer
   * to the [Get settlement](get-settlement) endpoint documentation.
   *
   * @throws {@link SettlementsApi.GetNextSettlementError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNextSettlement(
    request: SettlementsApi.GetNextSettlementRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SettlementsApi.GetNextSettlementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/settlements/next"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SettlementsApi.GetNextSettlementError,
      },
      options,
    );
  }

  /**
   * Get open settlement
   *
   * @remarks
   * Retrieve the details of the open balance of the organization. This will return a settlement
   * object representing your organization's balance.
   *
   * For a complete reference of the settlement object, refer to the [Get settlement
   * endpoint](get-settlement) documentation.
   *
   * For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or
   * the [balance transactions](list-balance-transactions) endpoint.
   *
   * @returns A settlement object describing your current balance. For a complete reference of the
   * settlement object, refer to the [Get settlement](get-settlement) endpoint documentation.
   *
   * @throws {@link SettlementsApi.GetOpenSettlementError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOpenSettlement(
    request: SettlementsApi.GetOpenSettlementRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SettlementsApi.GetOpenSettlementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/settlements/open"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SettlementsApi.GetOpenSettlementError,
      },
      options,
    );
  }

  /**
   * Get settlement
   *
   * @remarks
   * Retrieve a single settlement by its ID.
   *
   * To lookup settlements by their bank reference, replace the ID in the URL by a reference. For
   * example: `1234567.2404.03`.
   *
   * A settlement represents a transfer of your balance funds to your external bank account.
   *
   * Settlements will typically include a report that details what balance transactions have taken
   * place between this settlement and the previous one.
   *
   * For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or
   * the [balance transactions](list-balance-transactions) endpoint.
   *
   * @returns The settlement object.
   *
   * @throws {@link SettlementsApi.GetSettlementError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSettlement(
    request: SettlementsApi.GetSettlementRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SettlementsApi.GetSettlementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/settlements/{settlementId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "settlementId", value: request.settlementId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SettlementsApi.GetSettlementError,
      },
      options,
    );
  }

  /**
   * List settlement captures
   *
   * @remarks
   * Retrieve all captures included in the given settlement.
   *
   * The response is in the same format as the response of the [List captures
   * endpoint](list-captures).
   *
   * @returns A list of capture objects.
   *
   * @throws {@link SettlementsApi.ListSettlementCapturesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSettlementCaptures(
    request: SettlementsApi.ListSettlementCapturesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SettlementsApi.ListSettlementCapturesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/settlements/{settlementId}/captures"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "settlementId", value: request.settlementId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SettlementsApi.ListSettlementCapturesError,
      },
      options,
    );
  }

  /**
   * List settlement chargebacks
   *
   * @remarks
   * Retrieve all chargebacks 'deducted' from the given settlement.
   *
   * The response is in the same format as the response of the [List chargebacks
   * endpoint](list-chargebacks).
   *
   * @returns A list of chargeback objects.
   *
   * @throws {@link SettlementsApi.ListSettlementChargebacksError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSettlementChargebacks(
    request: SettlementsApi.ListSettlementChargebacksRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SettlementsApi.ListSettlementChargebacksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/settlements/{settlementId}/chargebacks"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "settlementId", value: request.settlementId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SettlementsApi.ListSettlementChargebacksError,
      },
      options,
    );
  }

  /**
   * List settlement payments
   *
   * @remarks
   * Retrieve all payments included in the given settlement.
   *
   * The response is in the same format as the response of the [List payments
   * endpoint](list-payments).
   *
   * For capture-based payment methods such as Klarna, the payments are not listed here. Refer to
   * the [List captures endpoint](list-captures) endpoint instead.
   *
   * @returns A list of payment objects.
   *
   * @throws {@link SettlementsApi.ListSettlementPaymentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSettlementPayments(
    request: SettlementsApi.ListSettlementPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SettlementsApi.ListSettlementPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/settlements/{settlementId}/payments"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "settlementId", value: request.settlementId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "profileId", value: request.profileId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SettlementsApi.ListSettlementPaymentsError,
      },
      options,
    );
  }

  /**
   * List settlement refunds
   *
   * @remarks
   * Retrieve all refunds 'deducted' from the given settlement.
   *
   * The response is in the same format as the response of the [List refunds
   * endpoint](list-refunds).
   *
   * @returns A list of refund objects.
   *
   * @throws {@link SettlementsApi.ListSettlementRefundsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSettlementRefunds(
    request: SettlementsApi.ListSettlementRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SettlementsApi.ListSettlementRefundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/settlements/{settlementId}/refunds"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "settlementId", value: request.settlementId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SettlementsApi.ListSettlementRefundsError,
      },
      options,
    );
  }

  /**
   * List settlements
   *
   * @remarks
   * Retrieve a list of all your settlements.
   *
   * The results are paginated.
   *
   * @returns A list of settlement objects. For a complete reference of the settlement object, refer
   * to the [Get settlement endpoint](get-settlement) documentation.
   *
   * @throws {@link SettlementsApi.ListSettlementsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSettlements(
    request: SettlementsApi.ListSettlementsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SettlementsApi.ListSettlementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/settlements"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "balanceId", value: request.balanceId, schema: s.optional(s.string()) },
          { name: "year", value: request.year, schema: s.optionalNullable(s.string()) },
          { name: "month", value: request.month, schema: s.optionalNullable(s.string()) },
          {
            name: "currencies",
            value: request.currencies,
            schema: s.optional(s.lazy(() => currenciesSchema)),
          },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SettlementsApi.ListSettlementsError,
      },
      options,
    );
  }
}

export namespace SettlementsApi {
  export type GetNextSettlementRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetNextSettlementError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetNextSettlementError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetOpenSettlementRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetOpenSettlementError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetOpenSettlementError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetSettlementRequest = {
    /** Provide the ID of the related settlement. */
    settlementId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetSettlementError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetSettlementError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSettlementCapturesRequest = {
    /** Provide the ID of the related settlement. */
    settlementId: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * This endpoint allows you to embed additional resources via the `embed` query string
     * parameter.
     */
    embed?: string | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListSettlementCapturesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSettlementCapturesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSettlementChargebacksRequest = {
    /** Provide the ID of the related settlement. */
    settlementId: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * This endpoint allows you to embed additional information via the `embed` query string
     * parameter.
     */
    embed?: string | null;
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

  export class ListSettlementChargebacksError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSettlementChargebacksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSettlementPaymentsRequest = {
    /** Provide the ID of the related settlement. */
    settlementId: string;
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
     * The identifier referring to the [profile](get-profile) you wish to retrieve the resources
     * for.
     *
     * Most API credentials are linked to a single profile. In these cases the `profileId` must not
     * be sent. For organization-level credentials such as OAuth access tokens however, the
     * `profileId` parameter is required.
     */
    profileId?: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListSettlementPaymentsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSettlementPaymentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSettlementRefundsRequest = {
    /** Provide the ID of the related settlement. */
    settlementId: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * This endpoint allows embedding related API items by appending the following values via the
     * `embed` query string parameter.
     */
    embed?: string | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListSettlementRefundsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSettlementRefundsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSettlementsRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Provide the token of the balance to filter the settlements by. This is the balance token that
     * the settlement was settled to.
     */
    balanceId?: string;
    /** Provide the year to query the settlements. Must be used combined with `month` parameter */
    year?: string | null;
    /** Provide the month to query the settlements. Must be used combined with `year` parameter */
    month?: string | null;
    /**
     * Provides the currencies to retrieve the settlements. It accepts multiple currencies in a
     * comma-separated format.
     */
    currencies?: Currencies;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListSettlementsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSettlementsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
