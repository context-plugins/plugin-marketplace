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
  companiesApiPurchaseInvoicesResponseInternalSchema,
  type CompaniesApiPurchaseInvoicesResponse,
} from "../models/companies-api-purchase-invoices-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  purchaseInvoiceCreateInternalSchema,
  type PurchaseInvoiceCreate,
} from "../models/purchase-invoice-create.js";
import { purchaseInvoiceInternalSchema, type PurchaseInvoice } from "../models/purchase-invoice.js";
import type { Servers } from "../servers.js";

/**
 * Manage purchase invoices and lines
 */
export class PurchaseInvoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Purchase Invoice
   *
   * @remarks
   * Creates a new purchase invoice in the specified company.
   *
   * @returns Purchase invoice created successfully
   *
   * @throws {@link PurchaseInvoices.CreatePurchaseInvoiceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPurchaseInvoice(
    request: PurchaseInvoices.CreatePurchaseInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<PurchaseInvoice, PurchaseInvoices.CreatePurchaseInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies({company_id})/purchaseInvoices"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: purchaseInvoiceCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: purchaseInvoiceInternalSchema },
        errorFactory: PurchaseInvoices.CreatePurchaseInvoiceError,
      },
      options,
    );
  }

  /**
   * List Purchase Invoices
   *
   * @remarks
   * Returns a list of purchase invoice objects.
   *
   * @returns Successfully retrieved purchase invoices
   *
   * @throws {@link PurchaseInvoices.ListPurchaseInvoicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listPurchaseInvoices(
    request: PurchaseInvoices.ListPurchaseInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiPurchaseInvoicesResponse, PurchaseInvoices.ListPurchaseInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/purchaseInvoices"),
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
        success: { kind: "json", schema: companiesApiPurchaseInvoicesResponseInternalSchema },
        errorFactory: PurchaseInvoices.ListPurchaseInvoicesError,
      },
      options,
    );
  }
}

export namespace PurchaseInvoices {
  export type CreatePurchaseInvoiceRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: PurchaseInvoiceCreate;
  };

  export class CreatePurchaseInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePurchaseInvoiceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPurchaseInvoicesRequest = {
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

  export const listPurchaseInvoicesRequestSchema: Schema<ListPurchaseInvoicesRequest> = s.lazySchema(() =>
    s.object<ListPurchaseInvoicesRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      select: s.optional(s.string()),
      expand: s.optional(s.string()),
    }),
  );

  export class ListPurchaseInvoicesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListPurchaseInvoicesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
