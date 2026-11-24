import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { introspectionResponseSchema, type IntrospectionResponse } from "../models/introspection-response.js";
import { oAuthErrorSchema, type OAuthError } from "../models/oauth-error.js";
import {
  oauthIntrospectRequestSchema,
  type OauthIntrospectRequest,
} from "../models/oauth-introspect-request.js";
import { oauthRevokeRequestSchema, type OauthRevokeRequest } from "../models/oauth-revoke-request.js";
import { oauthTokenRequestSchema, type OauthTokenRequest } from "../models/oauth-token-request.js";
import { tokenInfoResponseSchema, type TokenInfoResponse } from "../models/token-info-response.js";
import { tokenResponseSchema, type TokenResponse } from "../models/token-response.js";
import type { Servers } from "../servers.js";

export class Tokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Introspect token
   *
   * @remarks
   * Returns whether a token is active and metadata about the token. Send parameters as
   * `application/x-www-form-urlencoded`.
   *
   * @returns OK
   *
   * @throws {@link Tokens.IntrospectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  introspect(
    request: Tokens.IntrospectRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IntrospectionResponse, Tokens.IntrospectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultOAuth2AuthorizationsApi("/oauth/introspect"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => oauthIntrospectRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: introspectionResponseSchema },
        errorFactory: Tokens.IntrospectError,
      },
      options,
    );
  }

  /**
   * Revoke token
   *
   * @remarks
   * Revokes an access token or refresh token. Send parameters as
   * `application/x-www-form-urlencoded`.
   *
   * @returns OK
   *
   * @throws {@link Tokens.RevokeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revoke(
    request: Tokens.RevokeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tokens.RevokeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultOAuth2AuthorizationsApi("/oauth/revoke"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => oauthRevokeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tokens.RevokeError,
      },
      options,
    );
  }

  /**
   * Create token
   *
   * @remarks
   * Exchanges an authorization code for an access token, or exchanges a refresh token for a new
   * access token. Send parameters as application/x-www-form-urlencoded.
   *
   * @returns OK
   *
   * @throws {@link Tokens.TokenError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  token(
    request: Tokens.TokenRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TokenResponse, Tokens.TokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultOAuth2AuthorizationsApi("/oauth/token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => oauthTokenRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tokenResponseSchema },
        errorFactory: Tokens.TokenError,
      },
      options,
    );
  }

  /**
   * Get token info
   *
   * @remarks
   * Returns metadata for the current access token.
   *
   * @returns OK
   *
   * @throws {@link Tokens.TokenInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tokenInfo(
    request: Tokens.TokenInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenInfoResponse, Tokens.TokenInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultOAuth2AuthorizationsApi("/oauth/token/info"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenInfoResponseSchema },
        errorFactory: Tokens.TokenInfoError,
      },
      options,
    );
  }
}

export namespace Tokens {
  export type IntrospectRequest = {
    body?: OauthIntrospectRequest;
  };

  export class IntrospectError extends ApiError {
    declare readonly payload:
      | Declared<"oAuthError", OAuthError>
      | Declared<"oAuthError2", OAuthError>
      | Undeclared;

    static readonly errors: ErrorDecoders<IntrospectError> = [
      { on: 400, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 401, kind: "oAuthError2", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }

  export type RevokeRequest = {
    body?: OauthRevokeRequest;
  };

  export class RevokeError extends ApiError {
    declare readonly payload:
      | Declared<"oAuthError", OAuthError>
      | Declared<"oAuthError2", OAuthError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeError> = [
      { on: 401, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 403, kind: "oAuthError2", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }

  export type TokenRequest = {
    body?: OauthTokenRequest;
  };

  export class TokenError extends ApiError {
    declare readonly payload:
      | Declared<"oAuthError", OAuthError>
      | Declared<"oAuthError2", OAuthError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TokenError> = [
      { on: 400, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
      { on: 401, kind: "oAuthError2", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }

  export type TokenInfoRequest = {
    /** Bearer access token (`Bearer <access_token>`). */
    authorization: string;
  };

  export class TokenInfoError extends ApiError {
    declare readonly payload: Declared<"oAuthError", OAuthError> | Undeclared;

    static readonly errors: ErrorDecoders<TokenInfoError> = [
      { on: 401, kind: "oAuthError", decode: { kind: "json", schema: oAuthErrorSchema } },
    ];
  }
}
