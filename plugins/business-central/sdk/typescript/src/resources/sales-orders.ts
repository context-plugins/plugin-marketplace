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
  companiesApiSalesOrdersApiSalesOrderLinesResponseInternalSchema,
  type CompaniesApiSalesOrdersApiSalesOrderLinesResponse,
} from "../models/companies-api-sales-orders-api-sales-order-lines-response.js";
import {
  companiesApiSalesOrdersResponseInternalSchema,
  type CompaniesApiSalesOrdersResponse,
} from "../models/companies-api-sales-orders-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { salesOrderCreateInternalSchema, type SalesOrderCreate } from "../models/sales-order-create.js";
import { salesOrderUpdateInternalSchema, type SalesOrderUpdate } from "../models/sales-order-update.js";
import { salesOrderInternalSchema, type SalesOrder } from "../models/sales-order.js";
import type { Servers } from "../servers.js";

/**
 * Manage sales orders and lines
 */
export class SalesOrders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Sales Order
   *
   * @remarks
   * Creates a new sales order in the specified company.
   *
   * @returns Sales order created successfully
   *
   * @throws {@link SalesOrders.CreateSalesOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createSalesOrder(
    request: SalesOrders.CreateSalesOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<SalesOrder, SalesOrders.CreateSalesOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies({company_id})/salesOrders"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: salesOrderCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: salesOrderInternalSchema },
        errorFactory: SalesOrders.CreateSalesOrderError,
      },
      options,
    );
  }

  /**
   * Delete a Sales Order
   *
   * @remarks
   * Deletes a sales order by ID.
   *
   * @returns Sales order deleted successfully
   *
   * @throws {@link SalesOrders.DeleteSalesOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteSalesOrder(
    request: SalesOrders.DeleteSalesOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SalesOrders.DeleteSalesOrderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/companies({company_id})/salesOrders({salesOrder_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "salesOrder_id", value: request.salesOrderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SalesOrders.DeleteSalesOrderError,
      },
      options,
    );
  }

  /**
   * Get a Sales Order
   *
   * @remarks
   * Retrieves a specific sales order by ID.
   *
   * @returns Successfully retrieved sales order
   *
   * @throws {@link SalesOrders.GetSalesOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getSalesOrder(
    request: SalesOrders.GetSalesOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<SalesOrder, SalesOrders.GetSalesOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/salesOrders({salesOrder_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "salesOrder_id", value: request.salesOrderId, schema: s.string() },
        ],
        query: [
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
          { name: "$expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: salesOrderInternalSchema },
        errorFactory: SalesOrders.GetSalesOrderError,
      },
      options,
    );
  }

  /**
   * List Sales Order Lines
   *
   * @remarks
   * Returns a list of sales order line items.
   *
   * @returns Successfully retrieved sales order lines
   *
   * @throws {@link SalesOrders.ListSalesOrderLinesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listSalesOrderLines(
    request: SalesOrders.ListSalesOrderLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiSalesOrdersApiSalesOrderLinesResponse, SalesOrders.ListSalesOrderLinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "salesOrder_id", value: request.salesOrderId, schema: s.string() },
        ],
        query: [
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiSalesOrdersApiSalesOrderLinesResponseInternalSchema },
        errorFactory: SalesOrders.ListSalesOrderLinesError,
      },
      options,
    );
  }

  /**
   * List Sales Orders
   *
   * @remarks
   * Returns a list of sales order objects from the specified company.
   *
   * @returns Successfully retrieved sales orders
   *
   * @throws {@link SalesOrders.ListSalesOrdersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listSalesOrders(
    request: SalesOrders.ListSalesOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiSalesOrdersResponse, SalesOrders.ListSalesOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/salesOrders"),
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
        success: { kind: "json", schema: companiesApiSalesOrdersResponseInternalSchema },
        errorFactory: SalesOrders.ListSalesOrdersError,
      },
      options,
    );
  }

  /**
   * Update a Sales Order
   *
   * @remarks
   * Updates an existing sales order.
   *
   * @returns Sales order updated successfully
   *
   * @throws {@link SalesOrders.UpdateSalesOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateSalesOrder(
    request: SalesOrders.UpdateSalesOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<SalesOrder, SalesOrders.UpdateSalesOrderError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/companies({company_id})/salesOrders({salesOrder_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "salesOrder_id", value: request.salesOrderId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: salesOrderUpdateInternalSchema },
      },
      {
        success: { kind: "json", schema: salesOrderInternalSchema },
        errorFactory: SalesOrders.UpdateSalesOrderError,
      },
      options,
    );
  }
}

export namespace SalesOrders {
  export type CreateSalesOrderRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: SalesOrderCreate;
  };

  export class CreateSalesOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSalesOrderError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteSalesOrderRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the sales order */
    salesOrderId: string;
  };

  export class DeleteSalesOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSalesOrderError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSalesOrderRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the sales order */
    salesOrderId: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
    /** Related entities to expand inline */
    expand?: string;
  };

  export class GetSalesOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSalesOrderError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSalesOrderLinesRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the sales order */
    salesOrderId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listSalesOrderLinesRequestSchema: Schema<ListSalesOrderLinesRequest> = s.lazySchema(() =>
    s.object<ListSalesOrderLinesRequest>({
      companyId: s.string(),
      salesOrderId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      select: s.optional(s.string()),
    }),
  );

  export class ListSalesOrderLinesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListSalesOrderLinesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListSalesOrdersRequest = {
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

  export const listSalesOrdersRequestSchema: Schema<ListSalesOrdersRequest> = s.lazySchema(() =>
    s.object<ListSalesOrdersRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      select: s.optional(s.string()),
      expand: s.optional(s.string()),
    }),
  );

  export class ListSalesOrdersError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListSalesOrdersError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateSalesOrderRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the sales order */
    salesOrderId: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: SalesOrderUpdate;
  };

  export class UpdateSalesOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSalesOrderError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
