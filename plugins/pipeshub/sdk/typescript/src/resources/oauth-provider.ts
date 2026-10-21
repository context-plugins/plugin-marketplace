import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { grantTypeSchema, type GrantType } from "../models/grant-type.js";
import {
  oAuthClientManagementRateLimitErrorSchema,
  type OAuthClientManagementRateLimitError,
} from "../models/oauth-client-management-rate-limit-error.js";
import { oAuthErrorResponseSchema, type OAuthErrorResponse } from "../models/oauth-error-response.js";
import {
  oAuthIntrospectResponseSchema,
  type OAuthIntrospectResponse,
} from "../models/oauth-introspect-response.js";
import { oAuthTokenResponseSchema, type OAuthTokenResponse } from "../models/oauth-token-response.js";
import { tokenTypeHintSchema, type TokenTypeHint } from "../models/token-type-hint.js";
import { tokenTypeHint1Schema, type TokenTypeHint1 } from "../models/token-type-hint1.js";
import type { Servers } from "../servers.js";

/**
 * PipesHub OAuth 2.0 Authorization Server implementing RFC 6749, RFC 7636 (PKCE), and OpenID
 * Connect.
 *
 * **Supported Grant Types:**
 * - `authorization_code` - Standard OAuth flow with PKCE support
 * - `client_credentials` - Machine-to-machine authentication
 * - `refresh_token` - Token refresh for long-lived access
 *
 * **Security Features:**
 * - PKCE (Proof Key for Code Exchange) for public clients
 * - State parameter for CSRF protection
 * - Configurable token lifetimes
 * - Token revocation and introspection
 *
 * **OpenID Connect:**
 * - ID tokens with standard claims
 * - UserInfo endpoint for profile data
 * - Discovery endpoint for automatic configuration
 *
 * **Machine tokens (`client_credentials`) — gateway and downstream identity:** Access tokens may
 * encode **`userId === client_id`**. The **Node.js API gateway** resolves the effective user to the
 * OAuth **app creator**: first using the JWT **`createdBy`** claim when present, otherwise by
 * loading the OAuth app by **`client_id`** from the registry. After verification it sets the
 * authenticated session to that creator.
 *
 * **Python services:** Validate `Authorization: Bearer` as today and use the JWT payload’s
 * **`userId`** as-is for scopes and user-scoped logic (which may still equal **`client_id`** for
 * machine tokens).
 *
 * **Operational note:** Prefer tokens whose JWT already carries the creator as **`userId`**; use
 * **`POST /oauth-clients/{appId}/revoke-all-tokens`** and obtain new tokens from **`POST
 * /oauth2/token`** when rotating integrations.
 */
export class OAuthProvider {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Introspect a token
   *
   * @remarks
   * OAuth 2.0 Token Introspection Endpoint (RFC 7662).
   *
   * Check if a token is active and retrieve its metadata.
   *
   * **Use Cases:**
   * - Resource servers validating tokens
   * - Debugging token issues
   * - Checking token scopes before processing requests
   *
   * **Response:**
   * - Active token: Returns `active: true` with token metadata
   * - Invalid/expired/revoked token: Returns only `active: false`
   *
   * @returns Token introspection result
   *
   * @throws {@link OAuthProvider.OauthIntrospectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthIntrospect(
    request: OAuthProvider.OauthIntrospectRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthIntrospectResponse, OAuthProvider.OauthIntrospectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth2/introspect"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "client_id", value: request.clientId, schema: s.string() },
            {
              name: "token_type_hint",
              value: request.tokenTypeHint,
              schema: s.optional(s.lazy(() => tokenTypeHint1Schema)),
            },
            { name: "client_secret", value: request.clientSecret, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: oAuthIntrospectResponseSchema },
        errorFactory: OAuthProvider.OauthIntrospectError,
      },
      options,
    );
  }

  /**
   * Revoke an access or refresh token
   *
   * @remarks
   * OAuth 2.0 Token Revocation Endpoint (RFC 7009).
   *
   * Revokes an access token or refresh token, preventing further use. Revoking a refresh token also
   * invalidates associated access tokens.
   *
   * **Use Cases:**
   * - User logs out of third-party app
   * - User revokes app access from account settings
   * - Security incident response
   *
   * **Note:** Returns 200 OK even if token was already revoked or invalid (per RFC 7009, to prevent
   * token enumeration).
   *
   * @returns Token revoked (or was already invalid)
   *
   * @throws {@link OAuthProvider.OauthRevokeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthRevoke(
    request: OAuthProvider.OauthRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OAuthProvider.OauthRevokeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth2/revoke"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "client_id", value: request.clientId, schema: s.string() },
            {
              name: "token_type_hint",
              value: request.tokenTypeHint,
              schema: s.optional(s.lazy(() => tokenTypeHintSchema)),
            },
            { name: "client_secret", value: request.clientSecret, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: OAuthProvider.OauthRevokeError,
      },
      options,
    );
  }

  /**
   * Exchange authorization code for tokens
   *
   * @remarks
   * OAuth 2.0 Token Endpoint (RFC 6749 Section 4.1.3).
   *
   * Exchanges an authorization code, client credentials, refresh token, or service token for access
   * tokens.
   *
   * **Grant Types:**
   * - `authorization_code`: Exchange auth code for tokens (user-based)
   * - `client_credentials`: Get tokens for machine-to-machine auth
   * - `refresh_token`: Get new access token using refresh token. The refresh token must have been
   *   issued to the presenting `client_id`; one issued to another client is rejected with `400
   *   invalid_grant` and is left untouched (not rotated, not revoked).
   * - `urn:ietf:params:oauth:grant-type:token-exchange`: Service-account delegation (RFC 8693). A
   *   service account exchanges its own token for a five-minute token that acts as one named person
   *   from its allow-list. **Enterprise edition.** The Community build answers this grant with
   *   `unsupported_grant_type` and leaves it out of discovery, so check `grant_types_supported`
   *   rather than assuming it is there. **This grant sends no `client_id` or `client_secret`** —
   *   the `subject_token` is the authentication, since it already carries a verified identity and
   *   the scopes that bound it. Refusals about the person asked for all return `400 invalid_target`
   *   with one wording; the cause is recorded in the delegation log, which only an administrator
   *   can read.
   *
   * For **`client_credentials`**, access tokens represent the **OAuth app creator** (the user who
   * registered the client). The JWT may encode **`userId === client_id`**; the **Node API gateway**
   * resolves the creator (**`createdBy`** claim or OAuth app lookup) — see **OAuth Provider** tag.
   *
   * **Client Authentication:** Can be provided via:
   * - HTTP Basic auth: `Authorization: Basic base64(client_id:client_secret)`
   * - Request body: `client_id` and `client_secret` parameters
   *
   * **PKCE Verification:** If authorization used PKCE, the `code_verifier` must be provided and
   * will be verified against the stored code challenge.
   *
   * @returns Tokens issued successfully
   *
   * @throws {@link OAuthProvider.OauthTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthToken(
    request: OAuthProvider.OauthTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthTokenResponse, OAuthProvider.OauthTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth2/token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "grant_type", value: request.grantType, schema: grantTypeSchema },
            { name: "code", value: request.code, schema: s.optional(s.string()) },
            { name: "redirect_uri", value: request.redirectUri, schema: s.optional(s.string()) },
            { name: "client_id", value: request.clientId, schema: s.optional(s.string()) },
            { name: "client_secret", value: request.clientSecret, schema: s.optional(s.string()) },
            { name: "refresh_token", value: request.refreshToken, schema: s.optional(s.string()) },
            { name: "scope", value: request.scope, schema: s.optional(s.string()) },
            { name: "code_verifier", value: request.codeVerifier, schema: s.optional(s.string()) },
            { name: "subject_token", value: request.subjectToken, schema: s.optional(s.string()) },
            { name: "subject_token_type", value: request.subjectTokenType, schema: s.optional(s.string()) },
            { name: "requested_subject", value: request.requestedSubject, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: oAuthTokenResponseSchema },
        errorFactory: OAuthProvider.OauthTokenError,
      },
      options,
    );
  }
}

export namespace OAuthProvider {
  export type OauthIntrospectRequest = {
    /** The token to introspect */
    token: string;
    /** Client ID */
    clientId: string;
    /** Hint about token type */
    tokenTypeHint?: TokenTypeHint1;
    /** Client secret */
    clientSecret?: string;
  };

  export class OauthIntrospectError extends ApiError {
    declare readonly payload:
      | Declared<"oAuthErrorResponse", OAuthErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<OauthIntrospectError> = [
      { on: 401, kind: "oAuthErrorResponse", decode: { kind: "json", schema: oAuthErrorResponseSchema } },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type OauthRevokeRequest = {
    /** The token to revoke */
    token: string;
    /** Client ID */
    clientId: string;
    /** Hint about token type (optional, improves performance) */
    tokenTypeHint?: TokenTypeHint;
    /** Client secret */
    clientSecret?: string;
  };

  export class OauthRevokeError extends ApiError {
    declare readonly payload:
      | Declared<"oAuthErrorResponse", OAuthErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<OauthRevokeError> = [
      { on: 401, kind: "oAuthErrorResponse", decode: { kind: "json", schema: oAuthErrorResponseSchema } },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type OauthTokenRequest = {
    /**
     * OAuth grant type:
     * - `authorization_code`: Exchange auth code for tokens
     * - `client_credentials`: Machine-to-machine auth
     * - `refresh_token`: Get new access token using refresh token
     * - `urn:ietf:params:oauth:grant-type:token-exchange`: Service-account delegation (RFC 8693).
     *   Exchanges a service token for a short-lived token that acts as one named person. Enterprise
     *   edition; kept in this enum because the request shape is the same wherever the grant is
     *   offered.
     */
    grantType: GrantType;
    /** Authorization code (required for authorization_code grant) */
    code?: string;
    /** Redirect URI (required for authorization_code grant) */
    redirectUri?: string;
    /** Client ID (can also be sent via Basic auth header) */
    clientId?: string;
    /** Client secret (can also be sent via Basic auth header) */
    clientSecret?: string;
    /** Refresh token (required for refresh_token grant) */
    refreshToken?: string;
    /** Requested scopes (optional, defaults to original grant scopes) */
    scope?: string;
    /**
     * PKCE code verifier (RFC 7636). Required if code_challenge was used. Must be 43-128 characters
     * from [A-Za-z0-9-._~]
     */
    codeVerifier?: string;
    /**
     * The service token being exchanged (token-exchange grant only). This is the only
     * authentication the grant has: no `client_id` or `client_secret` is sent, because the service
     * token already carries a verified identity and the scopes that bound it.
     */
    subjectToken?: string;
    /**
     * Optional. Must be `urn:ietf:params:oauth:token-type:access_token` when sent (token-exchange
     * grant only).
     */
    subjectTokenType?: string;
    /**
     * The person to act as, by user id or email address (token-exchange grant only). Must be on the
     * service account's allow-list, and must not be an administrator.
     */
    requestedSubject?: string;
  };

  export class OauthTokenError extends ApiError {
    declare readonly payload:
      | Declared<"oAuthErrorResponse", OAuthErrorResponse>
      | Declared<"oAuthErrorResponse2", OAuthErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<OauthTokenError> = [
      { on: 400, kind: "oAuthErrorResponse", decode: { kind: "json", schema: oAuthErrorResponseSchema } },
      { on: 401, kind: "oAuthErrorResponse2", decode: { kind: "json", schema: oAuthErrorResponseSchema } },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }
}
