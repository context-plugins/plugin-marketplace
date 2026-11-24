import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiGatewayErrorResponseSchema,
  type ApiGatewayErrorResponse,
} from "../models/api-gateway-error-response.js";
import {
  cancelOrExitMultiOrderResponseSchema,
  type CancelOrExitMultiOrderResponse,
} from "../models/cancel-or-exit-multi-order-response.js";
import { cancelOrderResponseSchema, type CancelOrderResponse } from "../models/cancel-order-response.js";
import {
  cancelOrderV3ResponseSchema,
  type CancelOrderV3Response,
} from "../models/cancel-order-v3-response.js";
import { getGttOrderResponseSchema, type GetGttOrderResponse } from "../models/get-gtt-order-response.js";
import { getOrderBookResponseSchema, type GetOrderBookResponse } from "../models/get-order-book-response.js";
import {
  getOrderDetailsResponseSchema,
  type GetOrderDetailsResponse,
} from "../models/get-order-details-response.js";
import { getOrderResponseSchema, type GetOrderResponse } from "../models/get-order-response.js";
import { getTradeResponseSchema, type GetTradeResponse } from "../models/get-trade-response.js";
import {
  gttCancelOrderRequestInternalSchema,
  type GttCancelOrderRequest,
} from "../models/gtt-cancel-order-request.js";
import {
  gttModifyOrderRequestInternalSchema,
  type GttModifyOrderRequest,
} from "../models/gtt-modify-order-request.js";
import {
  gttPlaceOrderRequestInternalSchema,
  type GttPlaceOrderRequest,
} from "../models/gtt-place-order-request.js";
import {
  gttTriggerOrderResponseSchema,
  type GttTriggerOrderResponse,
} from "../models/gtt-trigger-order-response.js";
import { modifyOrderRequestSchema, type ModifyOrderRequest } from "../models/modify-order-request.js";
import { modifyOrderResponseSchema, type ModifyOrderResponse } from "../models/modify-order-response.js";
import {
  modifyOrderV3ResponseSchema,
  type ModifyOrderV3Response,
} from "../models/modify-order-v3-response.js";
import { multiOrderRequestInternalSchema, type MultiOrderRequest } from "../models/multi-order-request.js";
import { multiOrderResponseSchema, type MultiOrderResponse } from "../models/multi-order-response.js";
import { placeOrderRequestSchema, type PlaceOrderRequest } from "../models/place-order-request.js";
import { placeOrderResponseSchema, type PlaceOrderResponse } from "../models/place-order-response.js";
import {
  placeOrderV3RequestInternalSchema,
  type PlaceOrderV3Request,
} from "../models/place-order-v3-request.js";
import { placeOrderV3ResponseSchema, type PlaceOrderV3Response } from "../models/place-order-v3-response.js";
import type { Servers } from "../servers.js";

export class Order {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel GTT order
   *
   * @remarks
   * This API allows you to cancel GTT orders.
   *
   * @returns Successful
   *
   * @throws {@link Order.CancelGttOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelGttOrder(
    request: Order.CancelGttOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<GttTriggerOrderResponse, Order.CancelGttOrderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/order/gtt/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [
          { name: "Origin", value: request.origin, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: gttCancelOrderRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: gttTriggerOrderResponseSchema },
        errorFactory: Order.CancelGttOrderError,
      },
      options,
    );
  }

  /**
   * Cancel multi order
   *
   * @remarks
   * API to cancel all the open or pending orders which can be applied to both AMO and regular
   * orders.
   *
   * @returns Successful
   *
   * @throws {@link Order.CancelMultiOrderError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelMultiOrder(
    request: Order.CancelMultiOrderRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CancelOrExitMultiOrderResponse, Order.CancelMultiOrderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/order/multi/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "tag", value: request.tag, schema: s.optional(s.string()) },
          { name: "segment", value: request.segment, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelOrExitMultiOrderResponseSchema },
        errorFactory: Order.CancelMultiOrderError,
      },
      options,
    );
  }

  /**
   * Cancel order
   *
   * @returns OK
   *
   * @throws {@link Order.CancelOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelOrder(
    request: Order.CancelOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelOrderV3Response, Order.CancelOrderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/order/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelOrderV3ResponseSchema },
        errorFactory: Order.CancelOrderError,
      },
      options,
    );
  }

  /**
   * Cancel order
   *
   * @remarks
   * Cancel order API can be used for two purposes: Cancelling an open order which could be an AMO
   * or a normal order It is also used to EXIT a CO or OCO(bracket order)
   *
   * @returns Successful
   *
   * @throws {@link Order.CancelOrder1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelOrder1(
    request: Order.CancelOrder1Request,
    options?: RequestOptions,
  ): ApiPromise<CancelOrderResponse, Order.CancelOrder1Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/order/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelOrderResponseSchema },
        errorFactory: Order.CancelOrder1Error,
      },
      options,
    );
  }

  /**
   * Exit all positions
   *
   * @remarks
   * This API provides the functionality to exit all the positions
   *
   * @returns Successful
   *
   * @throws {@link Order.ExitPositionsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exitPositions(
    request: Order.ExitPositionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CancelOrExitMultiOrderResponse, Order.ExitPositionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/order/positions/exit"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "tag", value: request.tag, schema: s.optional(s.string()) },
          { name: "segment", value: request.segment, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelOrExitMultiOrderResponseSchema },
        errorFactory: Order.ExitPositionsError,
      },
      options,
    );
  }

  /**
   * Get GTT order details
   *
   * @remarks
   * GTT_ORDER_DESCRIPTION
   *
   * @returns Successful
   *
   * @throws {@link Order.GetGttOrderDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGttOrderDetails(
    request: Order.GetGttOrderDetailsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetGttOrderResponse, Order.GetGttOrderDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/order/gtt"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "gtt_order_id", value: request.gttOrderId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getGttOrderResponseSchema },
        errorFactory: Order.GetGttOrderDetailsError,
      },
      options,
    );
  }

  /**
   * Get order book
   *
   * @remarks
   * This API provides the list of orders placed by the user. The orders placed by the user is
   * transient for a day and is cleared by the end of the trading session. This API returns all
   * states of the orders, namely, open, pending, and filled ones.
   *
   * @returns Successful
   *
   * @throws {@link Order.GetOrderBookError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderBook(options?: RequestOptions): ApiPromise<GetOrderBookResponse, Order.GetOrderBookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/order/retrieve-all"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOrderBookResponseSchema },
        errorFactory: Order.GetOrderBookError,
      },
      options,
    );
  }

  /**
   * Get order history
   *
   * @remarks
   * This API provides the details of the particular order the user has placed. The orders placed by
   * the user is transient for a day and are cleared by the end of the trading session. This API
   * returns all states of the orders, namely, open, pending, and filled ones.
   *
   * The order history can be requested either using order_id or tag.
   *
   * If both the options are passed, the history of the order which precisely matches both the
   * order_id and tag will be returned in the response.
   *
   * If only the tag is passed, the history of all the associated orders which matches the tag will
   * be shared in the response.
   *
   * @returns Successful
   *
   * @throws {@link Order.GetOrderDetailsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderDetails(
    request: Order.GetOrderDetailsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetOrderResponse, Order.GetOrderDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/order/history"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "order_id", value: request.orderId, schema: s.optional(s.string()) },
          { name: "tag", value: request.tag, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOrderResponseSchema },
        errorFactory: Order.GetOrderDetailsError,
      },
      options,
    );
  }

  /**
   * Get order details
   *
   * @remarks
   * This API provides the recent detail of the particular order the user has placed. The orders
   * placed by the user is transient for a day and are cleared by the end of the trading
   * session.\n\nThe order details can be requested using order_id.
   *
   * @returns Successful
   *
   * @throws {@link Order.GetOrderStatusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrderStatus(
    request: Order.GetOrderStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetOrderDetailsResponse, Order.GetOrderStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/order/details"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "order_id", value: request.orderId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOrderDetailsResponseSchema },
        errorFactory: Order.GetOrderStatusError,
      },
      options,
    );
  }

  /**
   * Get trades
   *
   * @remarks
   * Retrieve the trades executed for the day
   *
   * @returns Successful
   *
   * @throws {@link Order.GetTradeHistoryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTradeHistory(options?: RequestOptions): ApiPromise<GetTradeResponse, Order.GetTradeHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/order/trades/get-trades-for-day"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTradeResponseSchema },
        errorFactory: Order.GetTradeHistoryError,
      },
      options,
    );
  }

  /**
   * Get trades for order
   *
   * @remarks
   * Retrieve the trades executed for an order
   *
   * @returns Successful
   *
   * @throws {@link Order.GetTradesByOrderError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTradesByOrder(
    request: Order.GetTradesByOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTradeResponse, Order.GetTradesByOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/order/trades"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTradeResponseSchema },
        errorFactory: Order.GetTradesByOrderError,
      },
      options,
    );
  }

  /**
   * Modify GTT order
   *
   * @remarks
   * This API allows you to modify GTT orders.
   *
   * @returns Successful
   *
   * @throws {@link Order.ModifyGttOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyGttOrder(
    request: Order.ModifyGttOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<GttTriggerOrderResponse, Order.ModifyGttOrderError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/order/gtt/modify"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [
          { name: "Origin", value: request.origin, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: gttModifyOrderRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: gttTriggerOrderResponseSchema },
        errorFactory: Order.ModifyGttOrderError,
      },
      options,
    );
  }

  /**
   * Modify order
   *
   * @returns OK
   *
   * @throws {@link Order.ModifyOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyOrder(
    request: Order.ModifyOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ModifyOrderV3Response, Order.ModifyOrderError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/order/modify"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modifyOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: modifyOrderV3ResponseSchema },
        errorFactory: Order.ModifyOrderError,
      },
      options,
    );
  }

  /**
   * Modify order
   *
   * @remarks
   * This API allows you to modify an order. For modification orderId is mandatory. With orderId you
   * need to send the optional parameter which needs to be modified. In case the optional parameters
   * aren't sent, the default will be considered from the original order
   *
   * @returns Successful
   *
   * @throws {@link Order.ModifyOrder1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyOrder1(
    request: Order.ModifyOrder1Request,
    options?: RequestOptions,
  ): ApiPromise<ModifyOrderResponse, Order.ModifyOrder1Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/order/modify"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modifyOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: modifyOrderResponseSchema },
        errorFactory: Order.ModifyOrder1Error,
      },
      options,
    );
  }

  /**
   * Place GTT order
   *
   * @remarks
   * This API allows you to place GTT orders.
   *
   * @returns Successful
   *
   * @throws {@link Order.PlaceGttOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  placeGttOrder(
    request: Order.PlaceGttOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<GttTriggerOrderResponse, Order.PlaceGttOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/order/gtt/place"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [
          { name: "Origin", value: request.origin, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: gttPlaceOrderRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: gttTriggerOrderResponseSchema },
        errorFactory: Order.PlaceGttOrderError,
      },
      options,
    );
  }

  /**
   * Place multi order
   *
   * @remarks
   * This API allows you to place multiple orders to the exchange via Upstox.
   *
   * @returns Successful
   *
   * @throws {@link Order.PlaceMultiOrderError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  placeMultiOrder(
    request: Order.PlaceMultiOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiOrderResponse, Order.PlaceMultiOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/order/multi/place"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [
          { name: "Origin", value: request.origin, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => multiOrderRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: multiOrderResponseSchema },
        errorFactory: Order.PlaceMultiOrderError,
      },
      options,
    );
  }

  /**
   * Place order
   *
   * @returns OK
   *
   * @throws {@link Order.PlaceOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  placeOrder(
    request: Order.PlaceOrderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PlaceOrderV3Response, Order.PlaceOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/order/place"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: placeOrderV3RequestInternalSchema },
      },
      {
        success: { kind: "json", schema: placeOrderV3ResponseSchema },
        errorFactory: Order.PlaceOrderError,
      },
      options,
    );
  }

  /**
   * Place order
   *
   * @remarks
   * This API allows you to place an order to the exchange via Upstox.
   *
   * @returns Successful
   *
   * @throws {@link Order.PlaceOrder1Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  placeOrder1(
    request: Order.PlaceOrder1Request,
    options?: RequestOptions,
  ): ApiPromise<PlaceOrderResponse, Order.PlaceOrder1Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/order/place"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: placeOrderRequestSchema },
      },
      {
        success: { kind: "json", schema: placeOrderResponseSchema },
        errorFactory: Order.PlaceOrder1Error,
      },
      options,
    );
  }
}

export namespace Order {
  export type CancelGttOrderRequest = {
    origin?: string;
    body: GttCancelOrderRequest;
  };

  export class CancelGttOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelGttOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type CancelMultiOrderRequest = {
    /** The tag associated with the orders for which the orders must be cancelled */
    tag?: string;
    /** The segment for which the orders must be cancelled */
    segment?: string;
  };

  export class CancelMultiOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelMultiOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type CancelOrderRequest = {
    orderId: string;
  };

  export const cancelOrderRequestSchema: Schema<CancelOrderRequest> = s.lazySchema(() =>
    s.object<CancelOrderRequest>({
      orderId: s.string().check(s.minLength(1), s.pattern("^[-a-zA-Z0-9]+")),
    }),
  );

  export class CancelOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type CancelOrder1Request = {
    /** The order ID for which the order must be cancelled */
    orderId: string;
  };

  export const cancelOrder1RequestSchema: Schema<CancelOrder1Request> = s.lazySchema(() =>
    s.object<CancelOrder1Request>({
      orderId: s.string().check(s.minLength(1), s.pattern("^[-a-zA-Z0-9]+")),
    }),
  );

  export class CancelOrder1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelOrder1Error> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type ExitPositionsRequest = {
    /** The tag associated with the positions for which the positions must be exit */
    tag?: string;
    /** The segment for which the positions must be exit */
    segment?: string;
  };

  export class ExitPositionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExitPositionsError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetGttOrderDetailsRequest = {
    /** Unique identifier of the GTT order for which the order history is required */
    gttOrderId?: string;
  };

  export const getGttOrderDetailsRequestSchema: Schema<GetGttOrderDetailsRequest> = s.lazySchema(() =>
    s.object<GetGttOrderDetailsRequest>({
      gttOrderId: s.optional(s.string().check(s.pattern("^GTT-.+$"))),
    }),
  );

  export class GetGttOrderDetailsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGttOrderDetailsError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export class GetOrderBookError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrderBookError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetOrderDetailsRequest = {
    /** The order reference ID for which the order history is required */
    orderId?: string;
    /** The unique tag of the order for which the order history is being requested */
    tag?: string;
  };

  export const getOrderDetailsRequestSchema: Schema<GetOrderDetailsRequest> = s.lazySchema(() =>
    s.object<GetOrderDetailsRequest>({
      orderId: s.optional(s.string().check(s.pattern("^[-a-zA-Z0-9]+"))),
      tag: s.optional(s.string()),
    }),
  );

  export class GetOrderDetailsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrderDetailsError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetOrderStatusRequest = {
    /** The order reference ID for which the order details is required */
    orderId?: string;
  };

  export const getOrderStatusRequestSchema: Schema<GetOrderStatusRequest> = s.lazySchema(() =>
    s.object<GetOrderStatusRequest>({
      orderId: s.optional(s.string().check(s.pattern("^[-a-zA-Z0-9]+"))),
    }),
  );

  export class GetOrderStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOrderStatusError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export class GetTradeHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTradeHistoryError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetTradesByOrderRequest = {
    /** The order ID for which the order to get order trades */
    orderId: string;
  };

  export const getTradesByOrderRequestSchema: Schema<GetTradesByOrderRequest> = s.lazySchema(() =>
    s.object<GetTradesByOrderRequest>({
      orderId: s.string().check(s.minLength(1), s.pattern("^[-a-zA-Z0-9]+")),
    }),
  );

  export class GetTradesByOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTradesByOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type ModifyGttOrderRequest = {
    origin?: string;
    body: GttModifyOrderRequest;
  };

  export class ModifyGttOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ModifyGttOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type ModifyOrderRequestParams = {
    body: ModifyOrderRequest;
  };

  export class ModifyOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ModifyOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type ModifyOrder1Request = {
    body: ModifyOrderRequest;
  };

  export class ModifyOrder1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ModifyOrder1Error> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type PlaceGttOrderRequest = {
    origin?: string;
    body: GttPlaceOrderRequest;
  };

  export class PlaceGttOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlaceGttOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type PlaceMultiOrderRequest = {
    origin?: string;
    body: MultiOrderRequest[];
  };

  export class PlaceMultiOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlaceMultiOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type PlaceOrderRequestParams = {
    body: PlaceOrderV3Request;
  };

  export class PlaceOrderError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlaceOrderError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type PlaceOrder1Request = {
    body: PlaceOrderRequest;
  };

  export class PlaceOrder1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlaceOrder1Error> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }
}
