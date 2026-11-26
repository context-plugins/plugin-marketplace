import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  companiesApiSalesInvoicesResponseInternalSchema,
  type CompaniesApiSalesInvoicesResponse,
} from "../models/companies-api-sales-invoices-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { salesInvoiceCreateInternalSchema, type SalesInvoiceCreate } from "../models/sales-invoice-create.js";
import { salesInvoiceInternalSchema, type SalesInvoice } from "../models/sales-invoice.js";
import type { Servers } from "../servers.js";

/**
 * Manage sales invoices and lines
 */
export class SalesInvoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Sales Invoice
   *
   * @remarks
   * Creates a new sales invoice in the specified company.
   *
   * @returns Sales invoice created successfully
   *
   * @throws {@link SalesInvoices.CreateSalesInvoiceError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createSalesInvoice(
    request: SalesInvoices.CreateSalesInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<SalesInvoice, SalesInvoices.CreateSalesInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies({company_id})/salesInvoices"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: salesInvoiceCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: salesInvoiceInternalSchema },
        errorFactory: SalesInvoices.CreateSalesInvoiceError,
      },
      options,
    );
  }

  /**
   * List Sales Invoices
   *
   * @remarks
   * Returns a list of sales invoice objects.
   *
   * @returns Successfully retrieved sales invoices
   *
   * @throws {@link SalesInvoices.ListSalesInvoicesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listSalesInvoices(
    request: SalesInvoices.ListSalesInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiSalesInvoicesResponse, SalesInvoices.ListSalesInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/salesInvoices"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$orderby", value: request.orderby, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
          { name: "$expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiSalesInvoicesResponseInternalSchema },
        errorFactory: SalesInvoices.ListSalesInvoicesError,
      },
      options,
    );
  }
}

export namespace SalesInvoices {
  export type CreateSalesInvoiceRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: SalesInvoiceCreate;
  };

  export class CreateSalesInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSalesInvoiceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSalesInvoicesRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** OData order by expression */
    orderby?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
    /** Related entities to expand inline */
    expand?: string;
  };

  export const listSalesInvoicesRequestSchema: Schema<ListSalesInvoicesRequest> = s.lazySchema(() =>
    s.object<ListSalesInvoicesRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      select: s.optional(s.string()),
      expand: s.optional(s.string()),
    }),
  );

  export class ListSalesInvoicesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListSalesInvoicesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
