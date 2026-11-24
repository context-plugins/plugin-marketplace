import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
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
  indieUserTokenRequestSchema,
  type IndieUserTokenRequest,
} from "../models/indie-user-token-request.js";
import { logoutResponseSchema, type LogoutResponse } from "../models/logout-response.js";
import { oAuthClientExceptionSchema, type OAuthClientException } from "../models/oauth-client-exception.js";
import { tokenResponseSchema, type TokenResponse } from "../models/token-response.js";
import type { Servers } from "../servers.js";

export class Login {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Authorize API
   *
   * @remarks
   * This provides details on the login endpoint.
   *
   * @throws {@link Login.AuthorizeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authorize(
    request: Login.AuthorizeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Login.AuthorizeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/login/authorization/dialog"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "client_id", value: request.clientId, schema: s.string() },
          { name: "redirect_uri", value: request.redirectUri, schema: s.string() },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "scope", value: request.scope, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Login.AuthorizeError,
      },
      options,
    );
  }

  /**
   * Init token API
   *
   * @remarks
   * This API provides the initialize the generate token and it's expiry for an indie user
   *
   * @returns Successful
   *
   * @throws {@link Login.InitTokenRequestForIndieUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initTokenRequestForIndieUser(
    request: Login.InitTokenRequestForIndieUserRequest,
    options?: RequestOptions,
  ): ApiPromise<TokenResponse, Login.InitTokenRequestForIndieUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/login/auth/token/request/{client_id}"),
        auth: noneAuth,
        pathParams: [{ name: "client_id", value: request.clientId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: indieUserTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: tokenResponseSchema },
        errorFactory: Login.InitTokenRequestForIndieUserError,
      },
      options,
    );
  }

  /**
   * Logout
   *
   * @returns Successful
   *
   * @throws {@link Login.LogoutError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  logout(options?: RequestOptions): ApiPromise<LogoutResponse, Login.LogoutError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/logout"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logoutResponseSchema },
        errorFactory: Login.LogoutError,
      },
      options,
    );
  }

  /**
   * Get token API
   *
   * @remarks
   * This API provides the functionality to obtain opaque token from authorization_code exchange and
   * also provides the user’s profile in the same response.
   *
   * @returns Successful
   *
   * @throws {@link Login.TokenError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  token(
    request: Login.TokenRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TokenResponse, Login.TokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/login/authorization/token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "code", value: request.code, schema: s.string() },
            { name: "client_id", value: request.clientId, schema: s.string() },
            { name: "client_secret", value: request.clientSecret, schema: s.string() },
            { name: "redirect_uri", value: request.redirectUri, schema: s.string() },
            { name: "grant_type", value: request.grantType, schema: s.string() },
            {
              name: "refresh_extended_token",
              value: request.refreshExtendedToken,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: tokenResponseSchema },
        errorFactory: Login.TokenError,
      },
      options,
    );
  }
}

export namespace Login {
  export type AuthorizeRequest = {
    clientId: string;
    redirectUri: string;
    state?: string;
    scope?: string;
  };

  export const authorizeRequestSchema: Schema<AuthorizeRequest> = s.lazySchema(() =>
    s.object<AuthorizeRequest>({
      clientId: s.string().check(s.minLength(1)),
      redirectUri: s.string().check(s.minLength(1)),
      state: s.optional(s.string()),
      scope: s.optional(s.string()),
    }),
  );

  export class AuthorizeError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"error302", undefined>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthorizeError> = [
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
      { on: 302, kind: "error302", decode: { kind: "empty" } },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type InitTokenRequestForIndieUserRequest = {
    clientId: string;
    body: IndieUserTokenRequest;
  };

  export const initTokenRequestForIndieUserRequestSchema: Schema<InitTokenRequestForIndieUserRequest> =
    s.lazySchema(() =>
      s.object<InitTokenRequestForIndieUserRequest>({
        clientId: s.string().check(s.minLength(1)),
        body: indieUserTokenRequestSchema,
      }),
    );

  export class InitTokenRequestForIndieUserError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<InitTokenRequestForIndieUserError> = [
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
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export class LogoutError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"oAuthClientException", OAuthClientException>
      | Undeclared;

    static readonly errors: ErrorDecoders<LogoutError> = [
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
      { on: 401, kind: "oAuthClientException", decode: { kind: "json", schema: oAuthClientExceptionSchema } },
    ];
  }

  export type TokenRequestParams = {
    code: string;
    /** OAuth API key that is a public identifier for app */
    clientId: string;
    /** OAuth client secret that is a private secret known only to app and authorization server */
    clientSecret: string;
    /** Authorization server will redirect the user back to the application via redirect url */
    redirectUri: string;
    /** Type of grant used to get an access token */
    grantType: string;
    /**
     * Whether to refresh (regenerate) the extended access token. Defaults to false when absent. Set
     * to true to refresh; false or omit to reuse an existing extended token when available.
     */
    refreshExtendedToken?: boolean;
  };

  export const tokenRequestParamsSchema: Schema<TokenRequestParams> = s.lazySchema(() =>
    s.object<TokenRequestParams>({
      code: s.string().check(s.minLength(1)),
      clientId: s.string().check(s.minLength(1)),
      clientSecret: s.string().check(s.minLength(1)),
      redirectUri: s.string().check(s.minLength(1)),
      grantType: s.string().check(s.minLength(1)),
      refreshExtendedToken: s.optional(s.boolean()),
    }),
  );

  export class TokenError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TokenError> = [
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
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }
}
