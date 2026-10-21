import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Exchange Sessions
 */
export class ExchangeSessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create customer exchange session
   *
   * @remarks
   * Creates an exchange session for a customer. Use cases include:
   * - **Plaid / MX**: Instant bank account verification (open banking). For faster verification as
   *   compared to traditional micro-deposits.
   * - **Checkout.com**: Debit card capture for Push to Card. Create a session, then retrieve it to
   *   get `externalProviderSessionData` (payment session) for the Checkout.com Flow component.
   *
   * @returns created
   *
   * @throws {@link ExchangeSessions.CreateCustomerExchangeSessionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerExchangeSession(
    request: ExchangeSessions.CreateCustomerExchangeSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangeSessions.CreateCustomerExchangeSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/exchange-sessions"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExchangeSessions.CreateCustomerExchangeSessionError,
      },
      options,
    );
  }

  /**
   * Create re-authentication exchange session
   *
   * @remarks
   * Creates a re-authentication exchange session to refresh a user's bank account connection when
   * their existing authorization is no longer valid. Required when receiving an UpdateCredentials
   * error during bank balance checks or when user re-authentication is needed.
   *
   * @returns created
   *
   * @throws {@link ExchangeSessions.CreateReAuthExchangeSessionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReAuthExchangeSession(
    request: ExchangeSessions.CreateReAuthExchangeSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangeSessions.CreateReAuthExchangeSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/exchanges/{id}/exchange-sessions"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExchangeSessions.CreateReAuthExchangeSessionError,
      },
      options,
    );
  }

  /**
   * List available exchange connections
   *
   * @remarks
   * Returns available exchange connections for a customer's bank accounts authorized through MX
   * Connect. Each connection includes an account name and availableConnectionToken required to
   * create exchanges and funding sources for transfers.
   *
   * @returns successful operation
   *
   * @throws {@link ExchangeSessions.ListAvailableExchangeConnectionsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAvailableExchangeConnections(
    request: ExchangeSessions.ListAvailableExchangeConnectionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangeSessions.ListAvailableExchangeConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/available-exchange-connections"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExchangeSessions.ListAvailableExchangeConnectionsError,
      },
      options,
    );
  }

  /**
   * Retrieve exchange session
   *
   * @remarks
   * Returns details of a previously created exchange session. Response varies by partner:
   * - **MX**: `_links.external-provider-session.href` (redirect URL for verification).
   * - **Plaid**: `externalProviderSessionToken` (token to initialize Plaid Link).
   * - **Checkout.com**: `externalProviderSessionData` with `id`, `payment_session_secret`, and
   *   `payment_session_token` to initialize the Checkout.com Flow component for debit card capture
   *   (Push to Card).
   *
   * @returns successful operation
   *
   * @throws {@link ExchangeSessions.RetrieveCustomerExchangeSessionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCustomerExchangeSession(
    request: ExchangeSessions.RetrieveCustomerExchangeSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExchangeSessions.RetrieveCustomerExchangeSessionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/exchange-sessions/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExchangeSessions.RetrieveCustomerExchangeSessionError,
      },
      options,
    );
  }
}

export namespace ExchangeSessions {
  export type CreateCustomerExchangeSessionRequest = {
    /** Customer's unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class CreateCustomerExchangeSessionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerExchangeSessionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CreateReAuthExchangeSessionRequest = {
    /** Exchange's unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class CreateReAuthExchangeSessionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateReAuthExchangeSessionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type ListAvailableExchangeConnectionsRequest = {
    /** Customer's unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListAvailableExchangeConnectionsError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListAvailableExchangeConnectionsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveCustomerExchangeSessionRequest = {
    /** Exchange session's unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class RetrieveCustomerExchangeSessionError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveCustomerExchangeSessionError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
