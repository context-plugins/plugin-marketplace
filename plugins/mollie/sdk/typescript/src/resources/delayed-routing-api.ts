import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { routeCreateRequestSchema, type RouteCreateRequest } from "../models/route-create-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Delayed Routing API
 */
export class DelayedRoutingApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a delayed route
   *
   * @remarks
   * Create a route for a specific payment. The routed amount is credited to the account of your
   * customer.
   *
   * @returns The route object.
   *
   * @throws {@link DelayedRoutingApi.PaymentCreateRouteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentCreateRoute(
    request: DelayedRoutingApi.PaymentCreateRouteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DelayedRoutingApi.PaymentCreateRouteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/routes"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => routeCreateRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: DelayedRoutingApi.PaymentCreateRouteError,
      },
      options,
    );
  }

  /**
   * Get a delayed route
   *
   * @remarks
   * Retrieve a single route created for a specific payment.
   *
   * @returns The route object.
   *
   * @throws {@link DelayedRoutingApi.PaymentGetRouteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentGetRoute(
    request: DelayedRoutingApi.PaymentGetRouteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DelayedRoutingApi.PaymentGetRouteError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/routes/{routeId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "paymentId", value: request.paymentId, schema: s.string() },
          { name: "routeId", value: request.routeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DelayedRoutingApi.PaymentGetRouteError,
      },
      options,
    );
  }

  /**
   * List payment routes
   *
   * @remarks
   * Retrieve a list of all routes created for a specific payment.
   *
   * @returns A list of route objects.
   *
   * @throws {@link DelayedRoutingApi.PaymentListRoutesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentListRoutes(
    request: DelayedRoutingApi.PaymentListRoutesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DelayedRoutingApi.PaymentListRoutesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/routes"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DelayedRoutingApi.PaymentListRoutesError,
      },
      options,
    );
  }
}

export namespace DelayedRoutingApi {
  export type PaymentCreateRouteRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: RouteCreateRequest;
  };

  export class PaymentCreateRouteError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PaymentCreateRouteError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type PaymentGetRouteRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** Provide the ID of the route. */
    routeId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class PaymentGetRouteError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PaymentGetRouteError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type PaymentListRoutesRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class PaymentListRoutesError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PaymentListRoutesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
