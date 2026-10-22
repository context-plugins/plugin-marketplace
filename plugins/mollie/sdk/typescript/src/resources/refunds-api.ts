import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { refundRequestSchema, type RefundRequest } from "../models/refund-request.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Refunds API
 */
export class RefundsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel payment refund
   *
   * @remarks
   * Refunds will be executed with a delay of two hours. Until that time, refunds may be canceled
   * manually via the Mollie Dashboard, or by using this endpoint.
   *
   * A refund can only be canceled while its `status` field is either `queued` or `pending`. See the
   * [Get refund endpoint](get-refund) for more information.
   *
   * @returns An empty response if the refund was successfully canceled.
   *
   * @throws {@link RefundsApi.CancelRefundError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelRefund(
    request: RefundsApi.CancelRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RefundsApi.CancelRefundError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/refunds/{refundId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "paymentId", value: request.paymentId, schema: s.string() },
          { name: "refundId", value: request.refundId, schema: s.string() },
        ],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RefundsApi.CancelRefundError,
      },
      options,
    );
  }

  /**
   * Create payment refund
   *
   * @remarks
   * Creates a refund for a specific payment. The refunded amount is credited to your customer
   * usually either via a bank transfer or by refunding the amount to your customer's credit card.
   *
   * @returns The newly created refund object.
   *
   * @throws {@link RefundsApi.CreateRefundError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRefund(
    request: RefundsApi.CreateRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RefundsApi.CreateRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/refunds"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => refundRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: RefundsApi.CreateRefundError,
      },
      options,
    );
  }

  /**
   * Get payment refund
   *
   * @remarks
   * Retrieve a single payment refund by its ID and the ID of its parent payment.
   *
   * @returns The payment object.
   *
   * @throws {@link RefundsApi.GetRefundError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRefund(
    request: RefundsApi.GetRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RefundsApi.GetRefundError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/refunds/{refundId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "paymentId", value: request.paymentId, schema: s.string() },
          { name: "refundId", value: request.refundId, schema: s.string() },
        ],
        query: [
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RefundsApi.GetRefundError,
      },
      options,
    );
  }

  /**
   * List all refunds
   *
   * @remarks
   * Retrieve a list of all of your refunds.
   *
   * The results are paginated.
   *
   * @returns A list of refund objects
   *
   * @throws {@link RefundsApi.ListAllRefundsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllRefunds(
    request: RefundsApi.ListAllRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RefundsApi.ListAllRefundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/refunds"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
          { name: "profileId", value: request.profileId, schema: s.optional(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RefundsApi.ListAllRefundsError,
      },
      options,
    );
  }

  /**
   * List payment refunds
   *
   * @remarks
   * Retrieve a list of all refunds created for a specific payment.
   *
   * The results are paginated.
   *
   * @returns A list of refund objects. For a complete reference of the refund object, refer to the
   * [Get refund endpoint](get-refund) documentation.
   *
   * @throws {@link RefundsApi.ListRefundsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRefunds(
    request: RefundsApi.ListRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RefundsApi.ListRefundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/refunds"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
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
        errorFactory: RefundsApi.ListRefundsError,
      },
      options,
    );
  }
}

export namespace RefundsApi {
  export type CancelRefundRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** Provide the ID of the related refund. */
    refundId: string;
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

  export class CancelRefundError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CancelRefundError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreateRefundRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: RefundRequest;
  };

  export class CreateRefundError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRefundError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetRefundRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** Provide the ID of the related refund. */
    refundId: string;
    /**
     * This endpoint allows embedding related API items by appending the following values via the
     * `embed` query string parameter.
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

  export class GetRefundError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetRefundError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListAllRefundsRequest = {
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
     * This endpoint allows embedding related API items by appending the following values via the
     * `embed` query string parameter.
     */
    embed?: string | null;
    /**
     * The identifier referring to the [profile](get-profile) you wish to retrieve the resources
     * for.
     *
     * Most API credentials are linked to a single profile. In these cases the `profileId` must not
     * be sent. For organization-level credentials such as OAuth access tokens however, the
     * `profileId` parameter is required.
     */
    profileId?: string;
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

  export class ListAllRefundsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListAllRefundsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListRefundsRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
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

  export class ListRefundsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRefundsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
