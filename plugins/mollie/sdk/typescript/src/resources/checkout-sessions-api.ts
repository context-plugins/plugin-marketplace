import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { sessionRequestSchema, type SessionRequest } from "../models/session-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Checkout Sessions API
 */
export class CheckoutSessionsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Checkout Session
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta. > > The `shipping` and
   * `requiredCustomerDetails` properties are still in private beta.
   *
   * Create a Checkout Session to start a checkout process with Mollie Components.
   *
   * @returns The newly created Checkout Session object.
   *
   * @throws {@link CheckoutSessionsApi.CreateSessionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSession(
    request: CheckoutSessionsApi.CreateSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CheckoutSessionsApi.CreateSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/sessions"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => sessionRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: CheckoutSessionsApi.CreateSessionError,
      },
      options,
    );
  }

  /**
   * Get Checkout Session
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta. > > The `shipping` and
   * `requiredCustomerDetails` properties are still in private beta.
   *
   * Retrieve a Checkout Session to view its details and status to inform your customers about the
   * checkout process.
   *
   * @returns The Checkout Session object.
   *
   * @throws {@link CheckoutSessionsApi.GetSessionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSession(
    request: CheckoutSessionsApi.GetSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CheckoutSessionsApi.GetSessionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/sessions/{sessionId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CheckoutSessionsApi.GetSessionError,
      },
      options,
    );
  }
}

export namespace CheckoutSessionsApi {
  export type CreateSessionRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: SessionRequest;
  };

  export class CreateSessionError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateSessionError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetSessionRequest = {
    /** Provide the ID of the related Checkout Session. */
    sessionId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetSessionError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
