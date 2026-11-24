import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authorizationRequestSchema, type AuthorizationRequest } from "../models/authorization-request.js";
import { authorizationResponseSchema, type AuthorizationResponse } from "../models/authorization-response.js";
import { refreshRequestSchema, type RefreshRequest } from "../models/refresh-request.js";
import type { Servers } from "../servers.js";

/**
 * OAuth 2.0 token issuance and refresh
 */
export class Authorization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Request an OAuth 2.0 access token
   *
   * @remarks
   * Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token.
   * Tokens expire every 24 hours.
   *
   * @returns Token issued
   *
   * @throws {@link Authorization.CreateAuthorizationTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAuthorizationToken(
    request: Authorization.CreateAuthorizationTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorizationResponse, Authorization.CreateAuthorizationTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/authorize"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authorizationRequestSchema },
      },
      {
        success: { kind: "json", schema: authorizationResponseSchema },
        errorFactory: Authorization.CreateAuthorizationTokenError,
      },
      options,
    );
  }

  /**
   * Refresh an OAuth 2.0 access token
   *
   * @remarks
   * Exchanges a refreshToken for a new bearer token.
   *
   * @returns Token refreshed
   *
   * @throws {@link Authorization.RefreshAuthorizationTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshAuthorizationToken(
    request: Authorization.RefreshAuthorizationTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorizationResponse, Authorization.RefreshAuthorizationTokenError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/oauth/authorize"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: refreshRequestSchema },
      },
      {
        success: { kind: "json", schema: authorizationResponseSchema },
        errorFactory: Authorization.RefreshAuthorizationTokenError,
      },
      options,
    );
  }
}

export namespace Authorization {
  export type CreateAuthorizationTokenRequest = {
    body: AuthorizationRequest;
  };

  export class CreateAuthorizationTokenError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateAuthorizationTokenError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type RefreshAuthorizationTokenRequest = {
    body: RefreshRequest;
  };

  export class RefreshAuthorizationTokenError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RefreshAuthorizationTokenError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
