import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiInternalSchema,
  type CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi,
} from "../models/create-order-request-instacart-connect-fulfillment-last-mile-delivery-api.js";
import { errorSchema, type Error } from "../models/error.js";
import { findStoresRequestSchema, type FindStoresRequest } from "../models/find-stores-request.js";
import { orderResponseSchema, type OrderResponse } from "../models/order-response.js";
import {
  previewServiceOptionsRequestSchema,
  type PreviewServiceOptionsRequest,
} from "../models/preview-service-options-request.js";
import {
  serviceOptionsResponseSchema,
  type ServiceOptionsResponse,
} from "../models/service-options-response.js";
import { storesResponseSchema, type StoresResponse } from "../models/stores-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for last mile delivery where items are pre-packed and only require delivery from the
 * store to the customer.
 */
export class LastMileDelivery {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a last mile delivery order
   *
   * @remarks
   * Creates a last mile delivery order for a previously reserved time slot. Last mile orders are
   * for pre-packed items that require only delivery from the store to the customer location.
   *
   * @returns Last mile delivery order created successfully
   *
   * @throws {@link LastMileDelivery.CreateLastMileOrderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLastMileOrder(
    request: LastMileDelivery.CreateLastMileOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderResponse, LastMileDelivery.CreateLastMileOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/lastmile/users/{user_id}/orders"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: orderResponseSchema },
        errorFactory: LastMileDelivery.CreateLastMileOrderError,
      },
      options,
    );
  }

  /**
   * Find stores offering last mile delivery
   *
   * @remarks
   * Returns an array of stores that offer last mile delivery for the customer's location. Last mile
   * delivery is for pre-packed orders that only require transportation from the store to the
   * customer.
   *
   * @returns List of stores offering last mile delivery
   *
   * @throws {@link LastMileDelivery.FindLastMileStoresError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findLastMileStores(
    request: LastMileDelivery.FindLastMileStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<StoresResponse, LastMileDelivery.FindLastMileStoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/stores/last_mile"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: findStoresRequestSchema },
      },
      {
        success: { kind: "json", schema: storesResponseSchema },
        errorFactory: LastMileDelivery.FindLastMileStoresError,
      },
      options,
    );
  }

  /**
   * Reserve a time slot for last mile delivery
   *
   * @remarks
   * Previews and reserves a time slot for a last mile delivery order. Used to secure a delivery
   * window before creating the order.
   *
   * @returns Service options for last mile delivery
   *
   * @throws {@link LastMileDelivery.PreviewLastMileServiceOptionsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewLastMileServiceOptions(
    request: LastMileDelivery.PreviewLastMileServiceOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceOptionsResponse, LastMileDelivery.PreviewLastMileServiceOptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/lastmile/users/{user_id}/service_options"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: previewServiceOptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: serviceOptionsResponseSchema },
        errorFactory: LastMileDelivery.PreviewLastMileServiceOptionsError,
      },
      options,
    );
  }

  /**
   * Stage a last mile delivery order
   *
   * @remarks
   * Marks a last mile delivery order as staged and ready for pickup by the delivery driver. This
   * should be called when the order items are packed and ready at the store.
   *
   * @returns Order staged successfully
   *
   * @throws {@link LastMileDelivery.StageLastMileOrderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stageLastMileOrder(
    request: LastMileDelivery.StageLastMileOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderResponse, LastMileDelivery.StageLastMileOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/lastmile/orders/{order_id}/staged"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "order_id", value: request.orderId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderResponseSchema },
        errorFactory: LastMileDelivery.StageLastMileOrderError,
      },
      options,
    );
  }
}

export namespace LastMileDelivery {
  export type CreateLastMileOrderRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    body: CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi;
  };

  export class CreateLastMileOrderError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateLastMileOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FindLastMileStoresRequest = {
    body: FindStoresRequest;
  };

  export class FindLastMileStoresError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FindLastMileStoresError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PreviewLastMileServiceOptionsRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    body: PreviewServiceOptionsRequest;
  };

  export class PreviewLastMileServiceOptionsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<PreviewLastMileServiceOptionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StageLastMileOrderRequest = {
    /** The unique identifier for the order. */
    orderId: string;
  };

  export class StageLastMileOrderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<StageLastMileOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
