import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  deleteValuesSalesInvoiceSchema,
  type DeleteValuesSalesInvoice,
} from "../models/delete-values-sales-invoice.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import {
  v2PaymentLinksRequestSchema,
  type V2PaymentLinksRequest,
} from "../models/v2-payment-links-request.js";
import {
  v2PaymentLinksRequest1Schema,
  type V2PaymentLinksRequest1,
} from "../models/v2-payment-links-request1.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Payment Links API
 */
export class PaymentLinksApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create payment link
   *
   * @remarks
   * With the Payment links API you can generate payment links that by default, unlike regular
   * payments, do not expire. The payment link can be shared with your customers and will redirect
   * them to them the payment page where they can complete the payment. A [payment](get-payment)
   * will only be created once the customer initiates the payment.
   *
   * @returns The newly created payment link object.
   *
   * @throws {@link PaymentLinksApi.CreatePaymentLinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPaymentLink(
    request: PaymentLinksApi.CreatePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentLinksApi.CreatePaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/payment-links"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2PaymentLinksRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentLinksApi.CreatePaymentLinkError,
      },
      options,
    );
  }

  /**
   * Delete payment link
   *
   * @remarks
   * Payment links which have not been opened and no payments have been made yet can be deleted
   * entirely. This can be useful for removing payment links that have been incorrectly configured
   * or that are no longer relevant.
   *
   * Once deleted, the payment link will no longer show up in the API or Mollie dashboard.
   *
   * To simply disable a payment link without fully deleting it, you can use the `archived`
   * parameter on the [Update payment link](update-payment-link) endpoint instead.
   *
   * @returns An empty response.
   *
   * @throws {@link PaymentLinksApi.DeletePaymentLinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePaymentLink(
    request: PaymentLinksApi.DeletePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentLinksApi.DeletePaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/payment-links/{paymentLinkId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentLinkId", value: request.paymentLinkId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteValuesSalesInvoiceSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentLinksApi.DeletePaymentLinkError,
      },
      options,
    );
  }

  /**
   * Get payment link
   *
   * @remarks
   * Retrieve a single payment link by its ID.
   *
   * @returns The payment link object.
   *
   * @throws {@link PaymentLinksApi.GetPaymentLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentLink(
    request: PaymentLinksApi.GetPaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentLinksApi.GetPaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payment-links/{paymentLinkId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentLinkId", value: request.paymentLinkId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentLinksApi.GetPaymentLinkError,
      },
      options,
    );
  }

  /**
   * Get payment link payments
   *
   * @remarks
   * Retrieve the list of payments for a specific payment link.
   *
   * The results are paginated.
   *
   * @returns A list of payment objects.
   *
   * @throws {@link PaymentLinksApi.GetPaymentLinkPaymentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentLinkPayments(
    request: PaymentLinksApi.GetPaymentLinkPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentLinksApi.GetPaymentLinkPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payment-links/{paymentLinkId}/payments"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentLinkId", value: request.paymentLinkId, schema: s.string() }],
        query: [
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
        errorFactory: PaymentLinksApi.GetPaymentLinkPaymentsError,
      },
      options,
    );
  }

  /**
   * List payment links
   *
   * @remarks
   * Retrieve a list of all payment links.
   *
   * The results are paginated.
   *
   * @returns A list of payment link objects.
   *
   * @throws {@link PaymentLinksApi.ListPaymentLinksError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPaymentLinks(
    request: PaymentLinksApi.ListPaymentLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentLinksApi.ListPaymentLinksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payment-links"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentLinksApi.ListPaymentLinksError,
      },
      options,
    );
  }

  /**
   * Update payment link
   *
   * @remarks
   * Certain details of an existing payment link can be updated.
   *
   * @returns The payment link object.
   *
   * @throws {@link PaymentLinksApi.UpdatePaymentLinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePaymentLink(
    request: PaymentLinksApi.UpdatePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentLinksApi.UpdatePaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/payment-links/{paymentLinkId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentLinkId", value: request.paymentLinkId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2PaymentLinksRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentLinksApi.UpdatePaymentLinkError,
      },
      options,
    );
  }
}

export namespace PaymentLinksApi {
  export type CreatePaymentLinkRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2PaymentLinksRequest;
  };

  export class CreatePaymentLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePaymentLinkError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeletePaymentLinkRequest = {
    /** Provide the ID of the related payment link. */
    paymentLinkId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: DeleteValuesSalesInvoice;
  };

  export class DeletePaymentLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePaymentLinkError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetPaymentLinkRequest = {
    /** Provide the ID of the related payment link. */
    paymentLinkId: string;
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

  export class GetPaymentLinkError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetPaymentLinkError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetPaymentLinkPaymentsRequest = {
    /** Provide the ID of the related payment link. */
    paymentLinkId: string;
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

  export class GetPaymentLinkPaymentsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetPaymentLinkPaymentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListPaymentLinksRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
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

  export class ListPaymentLinksError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListPaymentLinksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdatePaymentLinkRequest = {
    /** Provide the ID of the related payment link. */
    paymentLinkId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2PaymentLinksRequest1;
  };

  export class UpdatePaymentLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePaymentLinkError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
