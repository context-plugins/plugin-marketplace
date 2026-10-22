import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  connectorsOauthAuthorizeResponseSchema,
  type ConnectorsOauthAuthorizeResponse,
} from "../models/connectors-oauth-authorize-response.js";
import {
  connectorsOauthCallbackResponseSchema,
  type ConnectorsOauthCallbackResponse,
} from "../models/connectors-oauth-callback-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * OAuth 2.0 authorization flow for connectors requiring user consent
 */
export class ConnectorOAuth {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get OAuth authorization URL
   *
   * @remarks
   * Start the OAuth sign-in for a connector instance.<br><br> <b>Flow:</b><br> <ol> <li>Call this
   * endpoint to get <code>authorizationUrl</code> and <code>state</code></li> <li>A person opens
   * the URL and gives consent at the provider</li> <li>The provider redirects to
   * <code>{baseUrl}/{redirectUri}</code> with <code>code</code> and <code>state</code></li>
   * <li>Pass both to <code>GET /connectors/oauth/callback</code> with a bearer token</li> </ol> The
   * redirect URI is fixed when the connector is created (its <code>baseUrl</code>) and must be
   * registered with the provider.
   *
   * @returns Provider consent URL
   *
   * @throws {@link ConnectorOAuth.GetOAuthAuthorizationUrlError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOAuthAuthorizationUrl(
    request: ConnectorOAuth.GetOAuthAuthorizationUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsOauthAuthorizeResponse, ConnectorOAuth.GetOAuthAuthorizationUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/oauth/authorize"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsOauthAuthorizeResponseSchema },
        errorFactory: ConnectorOAuth.GetOAuthAuthorizationUrlError,
      },
      options,
    );
  }

  /**
   * OAuth callback handler
   *
   * @remarks
   * Finish the OAuth sign-in: exchange the provider's <code>code</code> for tokens and store them.
   * Call it with the <code>code</code> and <code>state</code> the provider sent to the redirect
   * URI, as the connector's creator or an admin.<br><br> <b>Result:</b><br> Always JSON.
   * <code>success</code> is true when the connector is signed in; otherwise <code>error</code> and
   * <code>errorMessage</code> say why. Provider tokens are never returned.
   *
   * @returns Result of exchanging the code. `success` is false when the provider refused it.
   *
   * @throws {@link ConnectorOAuth.HandleOAuthCallbackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  handleOAuthCallback(
    request: ConnectorOAuth.HandleOAuthCallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsOauthCallbackResponse, ConnectorOAuth.HandleOAuthCallbackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/oauth/callback"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "code", value: request.code, schema: s.string() },
          { name: "state", value: request.state, schema: s.string() },
          { name: "error", value: request.error, schema: s.optional(s.string()) },
          { name: "baseUrl", value: request.baseUrl, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsOauthCallbackResponseSchema },
        errorFactory: ConnectorOAuth.HandleOAuthCallbackError,
      },
      options,
    );
  }
}

export namespace ConnectorOAuth {
  export type GetOAuthAuthorizationUrlRequest = {
    /** Connector instance ID */
    connectorId: string;
  };

  export class GetOAuthAuthorizationUrlError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOAuthAuthorizationUrlError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type HandleOAuthCallbackRequest = {
    /** Authorization code from provider */
    code: string;
    /** State parameter (contains connector ID) */
    state: string;
    /** Error code if authorization failed */
    error?: string;
    /** Base URL for redirect */
    baseUrl?: string;
  };

  export class HandleOAuthCallbackError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<HandleOAuthCallbackError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
