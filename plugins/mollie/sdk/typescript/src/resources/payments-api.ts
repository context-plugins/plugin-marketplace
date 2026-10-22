import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { paymentRequestSchema, type PaymentRequest } from "../models/payment-request.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import {
  v2PaymentsReleaseAuthorizationRequestSchema,
  type V2PaymentsReleaseAuthorizationRequest,
} from "../models/v2-payments-release-authorization-request.js";
import { v2PaymentsRequestSchema, type V2PaymentsRequest } from "../models/v2-payments-request.js";
import { v2PaymentsRequest1Schema, type V2PaymentsRequest1 } from "../models/v2-payments-request1.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Payments API
 */
export class PaymentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel payment
   *
   * @remarks
   * Depending on the payment method, you may be able to cancel a payment for a certain amount of
   * time — usually until the next business day or as long as the payment status is open.
   *
   * Payments may also be canceled manually from the Mollie Dashboard.
   *
   * The `isCancelable` property on the [Payment object](get-payment) will indicate if the payment
   * can be canceled.
   *
   * @returns The canceled payment object.
   *
   * @throws {@link PaymentsApi.CancelPaymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelPayment(
    request: PaymentsApi.CancelPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentsApi.CancelPaymentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2PaymentsRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentsApi.CancelPaymentError,
      },
      options,
    );
  }

  /**
   * Create payment
   *
   * @remarks
   * Payment creation is elemental to the Mollie API: this is where most payment implementations
   * start off.
   *
   * Once you have created a payment, you should redirect your customer to the URL in the
   * `_links.checkout` property from the response.
   *
   * To wrap your head around the payment process, an explanation and flow charts can be found in
   * the 'Accepting payments' guide.
   *
   * If you specify the `method` parameter when creating a payment, optional additional parameters
   * may be available for the payment method that are not listed below. Please refer to the guide on
   * [method-specific parameters](extra-payment-parameters).
   *
   * @returns The newly created payment object.
   *
   * @throws {@link PaymentsApi.CreatePaymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPayment(
    request: PaymentsApi.CreatePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentsApi.CreatePaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/payments"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [{ name: "include", value: request.include, schema: s.optionalNullable(s.string()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentsApi.CreatePaymentError,
      },
      options,
    );
  }

  /**
   * Get payment
   *
   * @remarks
   * Retrieve a single payment object by its payment ID.
   *
   * @returns The payment object.
   *
   * @throws {@link PaymentsApi.GetPaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayment(
    request: PaymentsApi.GetPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentsApi.GetPaymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [
          { name: "include", value: request.include, schema: s.optionalNullable(s.string()) },
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentsApi.GetPaymentError,
      },
      options,
    );
  }

  /**
   * List payments
   *
   * @remarks
   * Retrieve all payments created with the current website profile.
   *
   * The results are paginated.
   *
   * @returns A list of payment objects.
   *
   * @throws {@link PaymentsApi.ListPaymentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPayments(
    request: PaymentsApi.ListPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentsApi.ListPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payments"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "profileId", value: request.profileId, schema: s.optional(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentsApi.ListPaymentsError,
      },
      options,
    );
  }

  /**
   * Release payment authorization
   *
   * @remarks
   * Releases the full remaining authorized amount. Call this endpoint when you will not be making
   * any additional captures. Payment authorizations may also be released manually from the Mollie
   * Dashboard.
   *
   * Mollie will do its best to process release requests, but it is not guaranteed that it will
   * succeed. It is up to the issuing bank if and when the hold will be released.
   *
   * If the request does succeed, the payment status will change to `canceled` for payments without
   * captures. If there is a successful capture, the payment will transition to `paid`.
   *
   * @returns The request was accepted and will be processed asynchronously.
   *
   * @throws {@link PaymentsApi.ReleaseAuthorizationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  releaseAuthorization(
    request: PaymentsApi.ReleaseAuthorizationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentsApi.ReleaseAuthorizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/release-authorization"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2PaymentsReleaseAuthorizationRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentsApi.ReleaseAuthorizationError,
      },
      options,
    );
  }

  /**
   * Update payment
   *
   * @remarks
   * Certain details of an existing payment can be updated.
   *
   * Updating the payment details will not result in a webhook call.
   *
   * @returns The updated payment object.
   *
   * @throws {@link PaymentsApi.UpdatePaymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePayment(
    request: PaymentsApi.UpdatePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentsApi.UpdatePaymentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2PaymentsRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentsApi.UpdatePaymentError,
      },
      options,
    );
  }
}

export namespace PaymentsApi {
  export type CancelPaymentRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2PaymentsRequest1;
  };

  export class CancelPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelPaymentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreatePaymentRequest = {
    /**
     * This endpoint allows you to include additional information via the `include` query string
     * parameter.
     */
    include?: string | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: PaymentRequest;
  };

  export class CreatePaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePaymentError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetPaymentRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /**
     * This endpoint allows you to include additional information via the `include` query string
     * parameter.
     */
    include?: string | null;
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

  export class GetPaymentError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetPaymentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListPaymentsRequest = {
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

  export class ListPaymentsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListPaymentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ReleaseAuthorizationRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2PaymentsReleaseAuthorizationRequest;
  };

  export class ReleaseAuthorizationError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReleaseAuthorizationError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdatePaymentRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2PaymentsRequest;
  };

  export class UpdatePaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePaymentError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
