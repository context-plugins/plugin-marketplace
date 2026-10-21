import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { oauth2TokensRequestSchema, type Oauth2TokensRequest } from "../models/oauth2-tokens-request.js";
import { oauth2TokensRequest1Schema, type Oauth2TokensRequest1 } from "../models/oauth2-tokens-request1.js";
import { oauth2TokensResponseSchema, type Oauth2TokensResponse } from "../models/oauth2-tokens-response.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the OAuth API
 */
export class OAuthApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Generate tokens
   *
   * @remarks
   * Exchange the authorization code you received from the [Authorize endpoint](oauth-authorize) for
   * an 'access token' API credential, with which you can communicate with the Mollie API on behalf
   * of the consenting merchant.
   *
   * This endpoint can only be accessed using **OAuth client credentials**.
   *
   * @returns The newly generated access token and refresh token.
   *
   * @throws {@link OAuthApi.OauthGenerateTokensError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthGenerateTokens(
    request: OAuthApi.OauthGenerateTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<Oauth2TokensResponse, OAuthApi.OauthGenerateTokensError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth2/tokens"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => oauth2TokensRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: oauth2TokensResponseSchema },
        errorFactory: OAuthApi.OauthGenerateTokensError,
      },
      options,
    );
  }

  /**
   * Revoke tokens
   *
   * @remarks
   * Revoke an access token or refresh token. Once revoked, the token can no longer be used.
   *
   * Revoking a refresh token revokes all access tokens that were created using the same
   * authorization.
   *
   * This endpoint can only be accessed using **OAuth client credentials**.
   *
   * @returns An empty response.
   *
   * @throws {@link OAuthApi.OauthRevokeTokensError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthRevokeTokens(
    request: OAuthApi.OauthRevokeTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OAuthApi.OauthRevokeTokensError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/oauth2/tokens"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => oauth2TokensRequest1Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: OAuthApi.OauthRevokeTokensError,
      },
      options,
    );
  }
}

export namespace OAuthApi {
  export type OauthGenerateTokensRequest = {
    /**
     * The OAuth client ID and client secret as [basic access
     * credentials](https://en.wikipedia.org/wiki/Basic_access_authentication).
     *
     * Pseudo code: `"Basic " + toBase64(client_id + ":" + client_secret)`
     *
     * For example: `Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`
     */
    authorization: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: Oauth2TokensRequest;
  };

  export class OauthGenerateTokensError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<OauthGenerateTokensError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type OauthRevokeTokensRequest = {
    /**
     * The OAuth client ID and client secret as [basic access
     * credentials](https://en.wikipedia.org/wiki/Basic_access_authentication).
     *
     * Pseudo code: `"Basic " + toBase64(client_id + ":" + client_secret)`
     *
     * For example: `Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`
     */
    authorization: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: Oauth2TokensRequest1;
  };

  export class OauthRevokeTokensError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<OauthRevokeTokensError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
