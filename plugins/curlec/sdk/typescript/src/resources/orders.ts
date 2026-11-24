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
import { authorizedSchema, type Authorized } from "../models/authorized.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  expandRazorpayOrdersApiSchema,
  type ExpandRazorpayOrdersApi,
} from "../models/expand-razorpay-orders-api.js";
import { orderInternalSchema, type Order } from "../models/order.js";
import {
  ordersPaymentsResponseInternalSchema,
  type OrdersPaymentsResponse,
} from "../models/orders-payments-response.js";
import { ordersRequestInternalSchema, type OrdersRequest } from "../models/orders-request.js";
import { ordersRequest1InternalSchema, type OrdersRequest1 } from "../models/orders-request1.js";
import { ordersResponseInternalSchema, type OrdersResponse } from "../models/orders-response.js";
import type { Servers } from "../servers.js";

/**
 * Orders are the starting point for accepting a payment. Create an order with the amount and
 * currency, pass the order_id to Razorpay Checkout, then verify the payment signature after
 * success.
 */
export class Orders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an order
   *
   * @remarks
   * Create an order before initiating a payment. The returned order_id must be passed to Razorpay
   * Checkout. An order can have multiple payment attempts but only one successful capture.
   *
   * @returns Order created.
   *
   * @throws {@link Orders.CreateOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOrder(
    request: Orders.CreateOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<Order, Orders.CreateOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orders"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: ordersRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: orderInternalSchema },
        errorFactory: Orders.CreateOrderError,
      },
      options,
    );
  }

  /**
   * Fetch all orders
   *
   * @remarks
   * Retrieve a paginated list of orders. Maximum 100 records per call.
   *
   * @returns Collection of orders.
   *
   * @throws {@link Orders.FetchAllOrdersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllOrders(
    request: Orders.FetchAllOrdersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<OrdersResponse, Orders.FetchAllOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          {
            name: "authorized",
            value: request.authorized,
            schema: s.optional(s.lazy(() => authorizedSchema)),
          },
          { name: "receipt", value: request.receipt, schema: s.optional(s.string()) },
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => expandRazorpayOrdersApiSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ordersResponseInternalSchema },
        errorFactory: Orders.FetchAllOrdersError,
      },
      options,
    );
  }

  /**
   * Fetch order by ID
   *
   * @remarks
   * Retrieve the full details and current status of a specific order.
   *
   * @returns Order details.
   *
   * @throws {@link Orders.FetchOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchOrder(
    request: Orders.FetchOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<Order, Orders.FetchOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderInternalSchema },
        errorFactory: Orders.FetchOrderError,
      },
      options,
    );
  }

  /**
   * Fetch payments for an order
   *
   * @remarks
   * Retrieve all authorized and failed payment attempts made against a specific order.
   *
   * @returns Collection of payments for the order.
   *
   * @throws {@link Orders.FetchOrderPaymentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchOrderPayments(
    request: Orders.FetchOrderPaymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<OrdersPaymentsResponse, Orders.FetchOrderPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orders/{id}/payments"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ordersPaymentsResponseInternalSchema },
        errorFactory: Orders.FetchOrderPaymentsError,
      },
      options,
    );
  }

  /**
   * Update an order
   *
   * @remarks
   * Update the notes field of an existing order. Only notes can be modified after creation.
   *
   * @returns Updated order.
   *
   * @throws {@link Orders.UpdateOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOrder(
    request: Orders.UpdateOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<Order, Orders.UpdateOrderError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/orders/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: ordersRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: orderInternalSchema },
        errorFactory: Orders.UpdateOrderError,
      },
      options,
    );
  }
}

export namespace Orders {
  export type CreateOrderRequest = {
    body: OrdersRequest;
  };

  export class CreateOrderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllOrdersRequest = {
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
    /** 1 = orders with authorized payments only. 0 = without. */
    authorized?: Authorized;
    /** Filter by receipt value. */
    receipt?: string;
    /** Expand: payments, payments.card, transfers, virtual_account. */
    expand?: ExpandRazorpayOrdersApi[];
  };

  export const fetchAllOrdersRequestSchema: Schema<FetchAllOrdersRequest> = s.lazySchema(() =>
    s.object<FetchAllOrdersRequest>({
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      authorized: s.optional(s.lazy(() => authorizedSchema)),
      receipt: s.optional(s.string()),
      expand: s.optional(s.array(s.lazy(() => expandRazorpayOrdersApiSchema))),
    }),
  );

  export class FetchAllOrdersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllOrdersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchOrderRequest = {
    /** Order ID (order_*). */
    id: string;
  };

  export class FetchOrderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchOrderError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchOrderPaymentsRequest = {
    /** Order ID (order_*). */
    id: string;
  };

  export class FetchOrderPaymentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchOrderPaymentsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateOrderRequest = {
    /** Order ID (order_*). */
    id: string;
    body: OrdersRequest1;
  };

  export class UpdateOrderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
