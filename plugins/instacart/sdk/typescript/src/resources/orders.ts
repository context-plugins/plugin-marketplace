import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  orderHandlingResponseSchema,
  type OrderHandlingResponse,
} from "../models/order-handling-response.js";
import { orderItemsResponseSchema, type OrderItemsResponse } from "../models/order-items-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving order status, handling details, and item information after checkout.
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
   * Get order handling information
   *
   * @remarks
   * Retrieves handling information for a specific order, including the delivery or pickup address,
   * the coordinates of the delivery or pickup address, information about the current shopper, and
   * any notes or instructions included with the order.
   *
   * @returns Order handling details
   *
   * @throws {@link Orders.GetOrderHandlingError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderHandling(
    request: Orders.GetOrderHandlingRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderHandlingResponse, Orders.GetOrderHandlingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/post_checkout/orders/{order_id}/handling"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderHandlingResponseSchema },
        errorFactory: Orders.GetOrderHandlingError,
      },
      options,
    );
  }

  /**
   * Get order items
   *
   * @remarks
   * Retrieves the list of items for a specific order. Each item includes item details of the
   * ordered item, the current status of that item, and the current replacement for that item if one
   * exists. Poll this endpoint while a shopper is picking the order to get real-time item status
   * updates.
   *
   * @returns List of order items with their statuses
   *
   * @throws {@link Orders.GetOrderItemsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderItems(
    request: Orders.GetOrderItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderItemsResponse, Orders.GetOrderItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/post_checkout/orders/{order_id}/items"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderItemsResponseSchema },
        errorFactory: Orders.GetOrderItemsError,
      },
      options,
    );
  }
}

export namespace Orders {
  export type GetOrderHandlingRequest = {
    /** The unique identifier for the order. */
    orderId: string;
  };

  export class GetOrderHandlingError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOrderHandlingError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOrderItemsRequest = {
    /** The unique identifier for the order. */
    orderId: string;
  };

  export class GetOrderItemsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOrderItemsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
