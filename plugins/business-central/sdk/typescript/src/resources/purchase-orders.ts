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
  companiesApiPurchaseOrdersApiPurchaseOrderLinesResponseInternalSchema,
  type CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse,
} from "../models/companies-api-purchase-orders-api-purchase-order-lines-response.js";
import {
  companiesApiPurchaseOrdersResponseInternalSchema,
  type CompaniesApiPurchaseOrdersResponse,
} from "../models/companies-api-purchase-orders-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  purchaseOrderCreateInternalSchema,
  type PurchaseOrderCreate,
} from "../models/purchase-order-create.js";
import {
  purchaseOrderUpdateInternalSchema,
  type PurchaseOrderUpdate,
} from "../models/purchase-order-update.js";
import { purchaseOrderInternalSchema, type PurchaseOrder } from "../models/purchase-order.js";
import type { Servers } from "../servers.js";

/**
 * Manage purchase orders and lines
 */
export class PurchaseOrders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Purchase Order
   *
   * @remarks
   * Creates a new purchase order in the specified company.
   *
   * @returns Purchase order created successfully
   *
   * @throws {@link PurchaseOrders.CreatePurchaseOrderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createPurchaseOrder(
    request: PurchaseOrders.CreatePurchaseOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<PurchaseOrder, PurchaseOrders.CreatePurchaseOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies({company_id})/purchaseOrders"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: purchaseOrderCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: purchaseOrderInternalSchema },
        errorFactory: PurchaseOrders.CreatePurchaseOrderError,
      },
      options,
    );
  }

  /**
   * Delete a Purchase Order
   *
   * @remarks
   * Deletes a purchase order by ID.
   *
   * @returns Purchase order deleted successfully
   *
   * @throws {@link PurchaseOrders.DeletePurchaseOrderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deletePurchaseOrder(
    request: PurchaseOrders.DeletePurchaseOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PurchaseOrders.DeletePurchaseOrderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "purchaseOrder_id", value: request.purchaseOrderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PurchaseOrders.DeletePurchaseOrderError,
      },
      options,
    );
  }

  /**
   * Get a Purchase Order
   *
   * @remarks
   * Retrieves a specific purchase order by ID.
   *
   * @returns Successfully retrieved purchase order
   *
   * @throws {@link PurchaseOrders.GetPurchaseOrderError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getPurchaseOrder(
    request: PurchaseOrders.GetPurchaseOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<PurchaseOrder, PurchaseOrders.GetPurchaseOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "purchaseOrder_id", value: request.purchaseOrderId, schema: s.string() },
        ],
        query: [
          { name: "$select", value: request.select, schema: s.optional(s.string()) },
          { name: "$expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: purchaseOrderInternalSchema },
        errorFactory: PurchaseOrders.GetPurchaseOrderError,
      },
      options,
    );
  }

  /**
   * List Purchase Order Lines
   *
   * @remarks
   * Returns a list of purchase order line items.
   *
   * @returns Successfully retrieved purchase order lines
   *
   * @throws {@link PurchaseOrders.ListPurchaseOrderLinesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listPurchaseOrderLines(
    request: PurchaseOrders.ListPurchaseOrderLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse,
    PurchaseOrders.ListPurchaseOrderLinesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/companies({company_id})/purchaseOrders({purchaseOrder_id})/purchaseOrderLines",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "purchaseOrder_id", value: request.purchaseOrderId, schema: s.string() },
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
        success: {
          kind: "json",
          schema: companiesApiPurchaseOrdersApiPurchaseOrderLinesResponseInternalSchema,
        },
        errorFactory: PurchaseOrders.ListPurchaseOrderLinesError,
      },
      options,
    );
  }

  /**
   * List Purchase Orders
   *
   * @remarks
   * Returns a list of purchase order objects from the specified company.
   *
   * @returns Successfully retrieved purchase orders
   *
   * @throws {@link PurchaseOrders.ListPurchaseOrdersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listPurchaseOrders(
    request: PurchaseOrders.ListPurchaseOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiPurchaseOrdersResponse, PurchaseOrders.ListPurchaseOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies({company_id})/purchaseOrders"),
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
        success: { kind: "json", schema: companiesApiPurchaseOrdersResponseInternalSchema },
        errorFactory: PurchaseOrders.ListPurchaseOrdersError,
      },
      options,
    );
  }

  /**
   * Update a Purchase Order
   *
   * @remarks
   * Updates an existing purchase order.
   *
   * @returns Purchase order updated successfully
   *
   * @throws {@link PurchaseOrders.UpdatePurchaseOrderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updatePurchaseOrder(
    request: PurchaseOrders.UpdatePurchaseOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<PurchaseOrder, PurchaseOrders.UpdatePurchaseOrderError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "purchaseOrder_id", value: request.purchaseOrderId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: purchaseOrderUpdateInternalSchema },
      },
      {
        success: { kind: "json", schema: purchaseOrderInternalSchema },
        errorFactory: PurchaseOrders.UpdatePurchaseOrderError,
      },
      options,
    );
  }
}

export namespace PurchaseOrders {
  export type CreatePurchaseOrderRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: PurchaseOrderCreate;
  };

  export class CreatePurchaseOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePurchaseOrderError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeletePurchaseOrderRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the purchase order */
    purchaseOrderId: string;
  };

  export class DeletePurchaseOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePurchaseOrderError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPurchaseOrderRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the purchase order */
    purchaseOrderId: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
    /** Related entities to expand inline */
    expand?: string;
  };

  export class GetPurchaseOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPurchaseOrderError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPurchaseOrderLinesRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the purchase order */
    purchaseOrderId: string;
    /** Maximum number of items to return */
    top?: number;
    /** Number of items to skip */
    skip?: number;
    /** OData filter expression */
    filter?: string;
    /** Comma-separated list of properties to include in the response */
    select?: string;
  };

  export const listPurchaseOrderLinesRequestSchema: Schema<ListPurchaseOrderLinesRequest> = s.lazySchema(() =>
    s.object<ListPurchaseOrderLinesRequest>({
      companyId: s.string(),
      purchaseOrderId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      select: s.optional(s.string()),
    }),
  );

  export class ListPurchaseOrderLinesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListPurchaseOrderLinesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPurchaseOrdersRequest = {
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

  export const listPurchaseOrdersRequestSchema: Schema<ListPurchaseOrdersRequest> = s.lazySchema(() =>
    s.object<ListPurchaseOrdersRequest>({
      companyId: s.string(),
      top: s.optional(s.int().check(s.gte(0))),
      skip: s.optional(s.int().check(s.gte(0))),
      filter: s.optional(s.string()),
      orderby: s.optional(s.string()),
      select: s.optional(s.string()),
      expand: s.optional(s.string()),
    }),
  );

  export class ListPurchaseOrdersError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListPurchaseOrdersError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdatePurchaseOrderRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The unique identifier of the purchase order */
    purchaseOrderId: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: PurchaseOrderUpdate;
  };

  export class UpdatePurchaseOrderError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePurchaseOrderError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
