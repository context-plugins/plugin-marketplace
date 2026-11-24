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
 * Endpoints for finding pickup stores, previewing time slots, reserving time slots, and creating
 * pickup orders.
 */
export class Pickup {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a pickup order
   *
   * @remarks
   * Creates a pickup order for a previously reserved time slot. The response can take several
   * seconds, so orders should be created as soon as possible after checkout to minimize wait time.
   *
   * @returns Pickup order created successfully
   *
   * @throws {@link Pickup.CreatePickupOrderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPickupOrder(
    request: Pickup.CreatePickupOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderResponse, Pickup.CreatePickupOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/users/{user_id}/orders/pickup"),
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
        errorFactory: Pickup.CreatePickupOrderError,
      },
      options,
    );
  }

  /**
   * Find stores offering pickup
   *
   * @remarks
   * Returns an array of stores that offer pickup for the customer's location, sorted by distance
   * with the closest store first.
   *
   * @returns List of stores offering pickup
   *
   * @throws {@link Pickup.FindPickupStoresError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findPickupStores(
    request: Pickup.FindPickupStoresRequest,
    options?: RequestOptions,
  ): ApiPromise<StoresResponse, Pickup.FindPickupStoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/stores/pickup"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: findStoresRequestSchema },
      },
      {
        success: { kind: "json", schema: storesResponseSchema },
        errorFactory: Pickup.FindPickupStoresError,
      },
      options,
    );
  }

  /**
   * Preview time slots for pickup
   *
   * @remarks
   * Previews possible service options and available time slots for pickup fulfillments. Useful for
   * displaying pickup time options to customers before they complete checkout.
   *
   * @returns Available pickup time slots
   *
   * @throws {@link Pickup.PreviewPickupTimeSlotsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewPickupTimeSlots(
    request: Pickup.PreviewPickupTimeSlotsRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceOptionsResponse, Pickup.PreviewPickupTimeSlotsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/fulfillment/users/{user_id}/service_options/pickup"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: previewServiceOptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: serviceOptionsResponseSchema },
        errorFactory: Pickup.PreviewPickupTimeSlotsError,
      },
      options,
    );
  }
}

export namespace Pickup {
  export type CreatePickupOrderRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    body: CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi;
  };

  export class CreatePickupOrderError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreatePickupOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FindPickupStoresRequest = {
    body: FindStoresRequest;
  };

  export class FindPickupStoresError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FindPickupStoresError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PreviewPickupTimeSlotsRequest = {
    /** The unique identifier for the user in the retailer's system. */
    userId: string;
    body: PreviewServiceOptionsRequest;
  };

  export class PreviewPickupTimeSlotsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<PreviewPickupTimeSlotsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
