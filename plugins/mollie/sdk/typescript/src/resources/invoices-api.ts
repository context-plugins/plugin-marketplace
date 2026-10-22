import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Invoices API
 */
export class InvoicesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get invoice
   *
   * @remarks
   * Retrieve a single invoice by its ID.
   *
   * If you want to retrieve the details of an invoice by its invoice number, call the [List
   * invoices](list-invoices) endpoint with the `reference` parameter.
   *
   * @returns The invoice object.
   *
   * @throws {@link InvoicesApi.GetInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInvoice(
    request: InvoicesApi.GetInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, InvoicesApi.GetInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/invoices/{invoiceId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: InvoicesApi.GetInvoiceError,
      },
      options,
    );
  }

  /**
   * List invoices
   *
   * @remarks
   * Retrieve a list of all your invoices, optionally filtered by year or by invoice reference.
   *
   * The results are paginated.
   *
   * @returns A list of invoice objects. For a complete reference of the invoice object, refer to
   * the [Get invoice endpoint](get-invoice) documentation.
   *
   * @throws {@link InvoicesApi.ListInvoicesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInvoices(
    request: InvoicesApi.ListInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, InvoicesApi.ListInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/invoices"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "reference", value: request.reference, schema: s.optionalNullable(s.string()) },
          { name: "year", value: request.year, schema: s.optionalNullable(s.string()) },
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: InvoicesApi.ListInvoicesError,
      },
      options,
    );
  }
}

export namespace InvoicesApi {
  export type GetInvoiceRequest = {
    /** Provide the ID of the related invoice. */
    invoiceId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetInvoiceError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetInvoiceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListInvoicesRequest = {
    /** Filter for an invoice with a specific invoice reference, for example `2024.10000`. */
    reference?: string | null;
    /** Filter for invoices of a specific year, for example `2024`. */
    year?: string | null;
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
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListInvoicesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListInvoicesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
