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
import { salesInvoiceRequestSchema, type SalesInvoiceRequest } from "../models/sales-invoice-request.js";
import {
  updateValuesSalesInvoiceSchema,
  type UpdateValuesSalesInvoice,
} from "../models/update-values-sales-invoice.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Sales Invoices API
 */
export class SalesInvoicesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create sales invoice
   *
   * @remarks
   * With the Sales Invoice API you can generate sales invoices to send to your customers.
   *
   * @returns The newly created invoice object. For a complete reference of the invoice object,
   * refer to the [Get sales invoice endpoint](get-sales-invoice) documentation.
   *
   * @throws {@link SalesInvoicesApi.CreateSalesInvoiceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSalesInvoice(
    request: SalesInvoicesApi.CreateSalesInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SalesInvoicesApi.CreateSalesInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/sales-invoices"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => salesInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SalesInvoicesApi.CreateSalesInvoiceError,
      },
      options,
    );
  }

  /**
   * Delete sales invoice
   *
   * @remarks
   * Sales invoices which are in status `draft` can be deleted. For all other statuses, please use
   * the [Update sales invoice](update-sales-invoice) endpoint instead.
   *
   * @returns An empty response.
   *
   * @throws {@link SalesInvoicesApi.DeleteSalesInvoiceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSalesInvoice(
    request: SalesInvoicesApi.DeleteSalesInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SalesInvoicesApi.DeleteSalesInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/sales-invoices/{salesInvoiceId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "salesInvoiceId", value: request.salesInvoiceId, schema: s.string() }],
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
        errorFactory: SalesInvoicesApi.DeleteSalesInvoiceError,
      },
      options,
    );
  }

  /**
   * Get sales invoice
   *
   * @remarks
   * Retrieve a single sales invoice by its ID.
   *
   * @returns The Sales Invoice object.
   *
   * @throws {@link SalesInvoicesApi.GetSalesInvoiceError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSalesInvoice(
    request: SalesInvoicesApi.GetSalesInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SalesInvoicesApi.GetSalesInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/sales-invoices/{salesInvoiceId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "salesInvoiceId", value: request.salesInvoiceId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SalesInvoicesApi.GetSalesInvoiceError,
      },
      options,
    );
  }

  /**
   * List sales invoices
   *
   * @remarks
   * Retrieve a list of all sales invoices created through the API.
   *
   * The results are paginated.
   *
   * @returns A list of sales invoice objects. For a complete reference of the sales invoice object,
   * refer to the [Get sales invoice endpoint](get-sales-invoice) documentation.
   *
   * @throws {@link SalesInvoicesApi.ListSalesInvoicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSalesInvoices(
    request: SalesInvoicesApi.ListSalesInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SalesInvoicesApi.ListSalesInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/sales-invoices"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
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
        errorFactory: SalesInvoicesApi.ListSalesInvoicesError,
      },
      options,
    );
  }

  /**
   * Update sales invoice
   *
   * @remarks
   * Certain details of an existing sales invoice can be updated. For `draft` it is all values
   * listed below, but for statuses `paid` and `issued` there are certain additional requirements
   * (`paymentDetails` and `emailDetails`, respectively).
   *
   * @returns The sales invoice object.
   *
   * @throws {@link SalesInvoicesApi.UpdateSalesInvoiceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSalesInvoice(
    request: SalesInvoicesApi.UpdateSalesInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SalesInvoicesApi.UpdateSalesInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/sales-invoices/{salesInvoiceId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "salesInvoiceId", value: request.salesInvoiceId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateValuesSalesInvoiceSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: SalesInvoicesApi.UpdateSalesInvoiceError,
      },
      options,
    );
  }
}

export namespace SalesInvoicesApi {
  export type CreateSalesInvoiceRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: SalesInvoiceRequest;
  };

  export class CreateSalesInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSalesInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteSalesInvoiceRequest = {
    /** Provide the ID of the related sales invoice. */
    salesInvoiceId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: DeleteValuesSalesInvoice;
  };

  export class DeleteSalesInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSalesInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetSalesInvoiceRequest = {
    /** Provide the ID of the related sales invoice. */
    salesInvoiceId: string;
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

  export class GetSalesInvoiceError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetSalesInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSalesInvoicesRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
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

  export class ListSalesInvoicesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSalesInvoicesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSalesInvoiceRequest = {
    /** Provide the ID of the related sales invoice. */
    salesInvoiceId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: UpdateValuesSalesInvoice;
  };

  export class UpdateSalesInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSalesInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
