import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  billingV1InvoicesResponseSchema,
  type BillingV1InvoicesResponse,
} from "../models/billing-v1-invoices-response.js";
import {
  billingV1InvoicesResponse1Schema,
  type BillingV1InvoicesResponse1,
} from "../models/billing-v1-invoices-response1.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

/**
 * Access your current and historical billing documents.
 */
export class Invoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve an invoice
   *
   * @remarks
   * Returns the full details of an invoice specified by the invoice number.
   *
   * @returns OK - Invoice details returned.
   *
   * @throws {@link Invoices.GetInvoiceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInvoice(
    request: Invoices.GetInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<BillingV1InvoicesResponse1, Invoices.GetInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billing/v1/invoices/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingV1InvoicesResponse1Schema },
        errorFactory: Invoices.GetInvoiceError,
      },
      options,
    );
  }

  /**
   * List invoices
   *
   * @remarks
   * Returns a list of all the current and historical invoices for your organization. Invoices are
   * returned in reverse chronological order by default.
   *
   * @returns OK - All available invoices returned.
   *
   * @throws {@link Invoices.ListInvoicesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInvoices(
    request: Invoices.ListInvoicesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BillingV1InvoicesResponse, Invoices.ListInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billing/v1/invoices"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "minCreationTime", value: request.minCreationTime, schema: s.optional(s.int()) },
          { name: "maxCreationTime", value: request.maxCreationTime, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingV1InvoicesResponseSchema },
        errorFactory: Invoices.ListInvoicesError,
      },
      options,
    );
  }
}

export namespace Invoices {
  export type GetInvoiceRequest = {
    /** Invoice number. */
    id: string;
  };

  export class GetInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInvoiceError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListInvoicesRequest = {
    /**
     * The maximum number of results to return in a single page. Leverage the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    filter?: string;
    /**
     * Min value for the invoice creation time, in milliseconds since the POSIX epoch. If set, only
     * invoices created after or at this timestamp are returned.
     */
    minCreationTime?: number;
    /**
     * Max value for the invoice creation time, in milliseconds since the POSIX epoch. If set, only
     * invoices created before or at this timestamp are returned.
     */
    maxCreationTime?: number;
  };

  export class ListInvoicesError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListInvoicesError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}
