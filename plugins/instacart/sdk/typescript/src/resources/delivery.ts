import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createOrderRequestInternalSchema, type CreateOrderRequest } from "../models/create-order-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { findStoresRequestSchema, type FindStoresRequest } from "../models/find-stores-request.js";
import { orderResponseSchema, type OrderResponse } from "../models/order-response.js";
import {
  previewServiceOptionsRequestSchema,
  type PreviewServiceOptionsRequest,
} from "../models/preview-service-options-request.js";
import {
  reserveTimeSlotRequestInternalSchema,
  type ReserveTimeSlotRequest,
} from "../models/reserve-time-slot-request.js";
import {
  serviceOptionHoldResponseSchema,
  type ServiceOptionHoldResponse,
} from "../models/service-option-hold-response.js";
import {
  serviceOptionsResponseSchema,
  type ServiceOptionsResponse,
} from "../models/service-options-response.js";
import { storesResponseSchema, type StoresResponse } from "../models/stores-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for finding delivery stores, previewing time slots, reserving time slots, and creating
 * delivery orders.
 */
export class Delivery {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel an order
   *
   * @remarks
   * Cancels a delivery, pickup, or last mile delivery order. To successfully cancel, the order
   * status must be brand_new. Once a shopper is assigned and the status moves to acknowledged, the
   * order can no longer be canceled through this endpoint.
   *
   * @returns Order canceled successfully
   *
   * @throws {@link Delivery.CancelOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelOrder(
    request: Delivery.CancelOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderResponse, Delivery.CancelOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/users/{user_id}/orders/{order_id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.string() },
          { name: "order_id", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderResponseSchema },
        errorFactory: Delivery.CancelOrderError,
      },
      options,
    );
  }

  /**
   * Create a delivery order
   *
   * @remarks
   * Creates a delivery order for a previously reserved time slot. The order includes the cart items
   * and delivery details. Orders should be created as soon as possible after the time slot is
   * reserved.
   *
   * @returns Delivery order created successfully
   *
   * @throws {@link Delivery.CreateDeliveryOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDeliveryOrder(
    request: Delivery.CreateDeliveryOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderResponse, Delivery.CreateDeliveryOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/users/{user_id}/orders/delivery"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createOrderRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: orderResponseSchema },
        errorFactory: Delivery.CreateDeliveryOrderError,
      },
      options,
    );
  }

  /**
   * Find stores offering delivery
   *
   * @remarks
   * Returns an array of stores that offer delivery for the customer's location, sorted by distance
   * with the closest store first. Accepts location data such as latitude and longitude or a postal
   * code.
   *
   * @returns List of stores offering delivery
   *
   * @throws {@link Delivery.FindDeliveryStoresError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findDeliveryStores(
    request: Delivery.FindDeliveryStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<StoresResponse, Delivery.FindDeliveryStoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/stores/delivery"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: findStoresRequestSchema },
      },
      {
        success: { kind: "json", schema: storesResponseSchema },
        errorFactory: Delivery.FindDeliveryStoresError,
      },
      options,
    );
  }

  /**
   * Get an order
   *
   * @remarks
   * Retrieves details for a specific order, including its current status, items, and delivery or
   * pickup information.
   *
   * @returns Order details
   *
   * @throws {@link Delivery.GetOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrder(
    request: Delivery.GetOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderResponse, Delivery.GetOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fulfillment/users/{user_id}/orders/{order_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.string() },
          { name: "order_id", value: request.orderId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderResponseSchema },
        errorFactory: Delivery.GetOrderError,
      },
      options,
    );
  }

  /**
   * Preview time slots for delivery
   *
   * @remarks
   * Previews possible service options and available time slots for delivery fulfillments. Useful
   * for displaying delivery time options to customers before they complete checkout.
   *
   * @returns Available delivery time slots
   *
   * @throws {@link Delivery.PreviewDeliveryTimeSlotsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewDeliveryTimeSlots(
    request: Delivery.PreviewDeliveryTimeSlotsRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceOptionsResponse, Delivery.PreviewDeliveryTimeSlotsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/users/{user_id}/service_options/delivery"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: previewServiceOptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: serviceOptionsResponseSchema },
        errorFactory: Delivery.PreviewDeliveryTimeSlotsError,
      },
      options,
    );
  }

  /**
   * Reserve a previewed delivery time slot
   *
   * @remarks
   * Reserves a selected delivery time slot for the specified user and their cart items. The hold is
   * temporary and must be followed by order creation before it expires.
   *
   * @returns Time slot reserved successfully
   *
   * @throws {@link Delivery.ReserveDeliveryTimeSlotError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reserveDeliveryTimeSlot(
    request: Delivery.ReserveDeliveryTimeSlotRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceOptionHoldResponse, Delivery.ReserveDeliveryTimeSlotError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/users/{user_id}/service_options/delivery/hold"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: reserveTimeSlotRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: serviceOptionHoldResponseSchema },
        errorFactory: Delivery.ReserveDeliveryTimeSlotError,
      },
      options,
    );
  }
}

export namespace Delivery {
  export type CancelOrderRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    /** The unique identifier for the order. */
    orderId: string;
  };

  export class CancelOrderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateDeliveryOrderRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    body: CreateOrderRequest;
  };

  export class CreateDeliveryOrderError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateDeliveryOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FindDeliveryStoresRequest = {
    body: FindStoresRequest;
  };

  export class FindDeliveryStoresError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FindDeliveryStoresError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOrderRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    /** The unique identifier for the order. */
    orderId: string;
  };

  export class GetOrderError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOrderError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PreviewDeliveryTimeSlotsRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    body: PreviewServiceOptionsRequest;
  };

  export class PreviewDeliveryTimeSlotsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<PreviewDeliveryTimeSlotsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ReserveDeliveryTimeSlotRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    body: ReserveTimeSlotRequest;
  };

  export class ReserveDeliveryTimeSlotError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ReserveDeliveryTimeSlotError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
