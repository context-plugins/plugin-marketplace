import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { body25Schema, type Body25 } from "../models/body25.js";
import { body30Schema, type Body30 } from "../models/body30.js";
import {
  migratePersonalTokenResponseSchema,
  type MigratePersonalTokenResponse,
} from "../models/migrate-personal-token-response.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

/**
 * <blockquote class="lang-specific shell"> <p>An authenticated request with authorization
 * header:</p> </blockquote>
 *
 * ```shell
 * $ curl https://api.todoist.com/api/v1/sync \
 *     -H "Authorization: Bearer 0123456789abcdef0123456789abcdef01234567" \
 *     -d sync_token='*' \
 *     -d resource_types='["all"]'
 * ```
 *
 * In order to make authorized calls to the Sync API, your application must provide an
 * [authorization header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
 * with the appropriate `Bearer $token`. For working through the examples, you can obtain your
 * personal API token from the [integrations
 * settings](https://app.todoist.com/app/settings/integrations) for your account.
 *
 * To authenticate other users, your application will need to obtain a token from them using the
 * OAuth protocol. For information on how to obtain a token from our service using OAuth, please see
 * the [authorization guide](#tag/Authorization/OAuth).
 *
 * For the sake of simplicity the token is not listed on every parameter table but please note that
 * the **token parameter is required for every resource**.
 *
 * ## OAuth
 *
 * OAuth is also available for token generation. It's especially useful for external applications to
 * obtain a user authorized API token via the OAuth2 protocol. Before getting started, developers
 * need to create their applications in the [App Management
 * Console](https://app.todoist.com/app/settings/integrations/app-management) and configure one or
 * more valid OAuth2 redirect URLs. A registered Todoist application is assigned a unique `Client
 * ID` and `Client Secret` which are needed for the OAuth2 flow.
 *
 * This procedure is comprised of 3 steps.
 *
 * ### Step 1: Authorization request
 *
 * > An example of the URL to the authorization endpoint:
 *
 * ```shell
 * https://app.todoist.com/oauth/authorize?client_id=0123456789abcdef&scope=data:read,data:delete&state=secretstring&response_type=code
 * ```
 *
 * Redirect users to the authorization URL at the endpoint
 * `https://app.todoist.com/oauth/authorize`, with the specified request parameters.
 *
 * #### Required parameters
 *
 * | Name      | Description                                                                                                                                               |
 * | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | client_id | The unique Client ID of the Todoist application that you registered.                                                                                      |
 * | scope     | A comma separated list of permissions that you would like the users to grant to your application. See the below table for detail on the available scopes. |
 * | state     | A unique and unguessable string. It is used to protect you against cross-site request forgery attacks.                                                    |
 *
 * #### Optional parameters
 *
 * | Name         | Description                                                                                                                                                                                                  |
 * | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | redirect_uri | The redirect URL for your application. If your application has multiple redirect URIs configured, this parameter is **required** — the request will be rejected with `invalid_request` if it is omitted. |
 * | response_type | Todoist supports the authorization code flow. This parameter may be omitted or set to `code`. Other values are rejected with `unsupported_response_type`. |
 *
 * #### Permission scopes
 *
 * | Name            | Description                                                                                                                                              |
 * | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | task:add        | Grants permission to add new tasks (the application cannot read or modify any existing data).                                                            |
 * | data:read       | Grants read-only access to application data, including tasks, projects, labels, and filters.                                                             |
 * | data:read_write | Grants read and write access to application data, including tasks, projects, labels, and filters. This scope includes `task:add` and `data:read` scopes. |
 * | data:delete     | Grants permission to delete application data, including tasks, labels, and filters.                                                                      |
 * | project:delete  | Grants permission to delete projects.                                                                                                                    |
 * | backups:read   | Grants permission to list backups with `GET /api/v1/backups` without MFA. Downloading a backup with `GET /api/v1/backups/download` still requires `data:read_write`. |
 *
 *
 * #### Potential errors
 *
 * | Error                               | Description                                                                                                                                                                                                                                                      |
 * | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | User Rejected Authorization Request | When the user denies your authorization request, Todoist will redirect the user to the configured redirect URI with the `error` parameter: `http://example.com?error=access_denied`.                                                                             |
 * | Redirect URI Not Configured         | This JSON error will be returned to the requester (your user's browser) if redirect URI is not configured in the App Management Console.                                                                                                                         |
 * | Invalid Application Status          | When your application exceeds the maximum token limit or when your application is being suspended due to abuse, Todoist will redirect the user to the configured redirect URI with the `error` parameter: `http://example.com?error=invalid_application_status`. |
 * | Invalid Scope                       | When the `scope` parameter is invalid, Todoist will redirect the user to the configured redirect URI with `error` parameter: `http://example.com?error=invalid_scope`.                                                                                           |
 * | Unsupported Response Type           | When the `response_type` parameter is set to a value other than `code`, Todoist will redirect the user to the configured redirect URI with `error` parameter: `http://example.com?error=unsupported_response_type`. |
 *
 * ### Step 2: Redirection to your application site
 *
 * When the user grants your authorization request, the user will be redirected to the redirect URL
 * configured for your application. The redirect request will come with two query parameters
 * attached: `code` and `state`.
 *
 * The `code` parameter contains the authorization code that you will use to exchange for an access
 * token. The `state` parameter should match the `state` parameter that you supplied in the previous
 * step. If the `state` is unmatched, your request has been compromised by other parties, and the
 * process should be aborted.
 *
 * ### Step 3: Token exchange
 *
 * > An example of exchanging the token:
 *
 * ```shell
 * $ curl "https://api.todoist.com/oauth/access_token" \
 *     -d "client_id=0123456789abcdef" \
 *     -d "client_secret=secret" \
 *     -d "code=abcdef" \
 *     -d "redirect_uri=https://example.com"
 * ```
 *
 * > On success, Todoist returns HTTP 200 with the token in JSON object format. For > applications
 * with refresh tokens enabled (the default for newly-created apps), > the response also includes
 * `expires_in` and `refresh_token`:
 *
 * ```json
 * {
 *     "access_token": "0123456789abcdef0123456789abcdef01234567",
 *     "token_type": "Bearer",
 *     "expires_in": 3600,
 *     "refresh_token": "abcdef0123456789abcdef0123456789abcdef01",
 *     "scope": "data:read_write"
 * }
 * ```
 *
 * > Legacy applications without refresh tokens enabled receive a response whose > `expires_in` is a
 * 10-year compatibility value (`315360000`) rather than a > meaningful expiry, and no
 * `refresh_token`. These access tokens are long-lived > and will continue to work:
 *
 * ```json
 * {
 *     "access_token": "0123456789abcdef0123456789abcdef01234567",
 *     "token_type": "Bearer",
 *     "expires_in": 315360000
 * }
 * ```
 *
 * Once you have the authorization `code`, you can exchange it for the access token by sending a
 * `POST` request to the following endpoint:
 *
 * `https://api.todoist.com/oauth/access_token`.
 *
 * #### Required parameters
 *
 * | Name          | Description                                                                          |
 * | ------------- | ------------------------------------------------------------------------------------ |
 * | client_id     | The Client ID of the Todoist application that you registered.                        |
 * | client_secret | The Client Secret of the Todoist application that you registered.                    |
 * | code          | The code that was sent in the query string to the redirect URL in the previous step. |
 *
 * #### Potential errors
 *
 * | Error                              | Description                                                                                                                           |
 * | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
 * | Bad Authorization Code Error       | Occurs when the `code` parameter does not match the code that is given in the redirect request: `{"error": "bad_authorization_code"}` |
 * | Incorrect Client Credentials Error | Occurs when the `client_id` or `client_secret` parameters are incorrect: `{"error": "incorrect_application_credentials"}`             |
 *
 * ## Dynamic Client Registration
 *
 * > Registering a new dynamic client:
 *
 * ```shell
 * $ curl "https://api.todoist.com/oauth/register" \
 *     -H "Content-Type: application/json" \
 *     -d '{
 *         "client_name": "My App",
 *         "redirect_uris": ["https://example.com/callback"],
 *         "scope": "data:read_write",
 *         "grant_types": ["authorization_code", "refresh_token"],
 *         "response_types": ["code"],
 *         "token_endpoint_auth_method": "client_secret_post"
 *     }'
 * ```
 *
 * > On success, Todoist returns HTTP 201 Created with a newly-issued > client in [RFC
 * 7591](https://datatracker.ietf.org/doc/html/rfc7591) > format. The response includes
 * `Cache-Control: no-store` and > `Pragma: no-cache` headers, also per RFC 7591 §3.2.1:
 *
 * ```json
 * {
 *     "client_id": "tdd_0123456789abcdef0123456789abcdef",
 *     "client_secret": "abcdef0123456789abcdef0123456789abcdef01",
 *     "client_name": "My App",
 *     "redirect_uris": ["https://example.com/callback"],
 *     "scope": "data:read_write",
 *     "grant_types": ["authorization_code", "refresh_token"],
 *     "response_types": ["code"],
 *     "token_endpoint_auth_method": "client_secret_post",
 *     "client_id_issued_at": 1776865756,
 *     "client_secret_expires_at": 0
 * }
 * ```
 *
 * Clients that cannot pre-register through the App Management Console — notably multi-tenant
 * integrations, MCP servers, and AI agents acting on behalf of an end user — can register
 * themselves at runtime via [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591).
 *
 * Send a `POST` to `https://api.todoist.com/oauth/register` with a JSON body describing the client.
 * No authentication is required, but the endpoint is rate limited per caller.
 *
 * ### Request parameters
 *
 * | Name                       | Required | Description                                                                                                                   |
 * | -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
 * | redirect_uris              | Yes      | Array of redirect URIs. Up to 10 entries, each ≤512 characters. Must be HTTPS (localhost is allowed for testing).            |
 * | client_name                | No       | Human-readable name shown on the consent screen.                                                                              |
 * | client_uri                 | No       | Public URL for the application.                                                                                               |
 * | logo_uri                   | No       | Public URL for the application logo.                                                                                          |
 * | scope                      | No       | Space-separated scopes the client will request. Restricted scopes are rejected. Defaults to `data:read_write` when omitted. |
 * | grant_types                | No       | Array of supported grant types. Must include `authorization_code`. Include `refresh_token` to use token refresh. Defaults to `["authorization_code"]`. |
 * | response_types             | No       | Array of supported response types. Must include `code`. Defaults to `["code"]`.                                              |
 * | token_endpoint_auth_method | No       | One of `client_secret_post` (default), `client_secret_basic`, or `none` (public client using PKCE).                          |
 *
 * ### Response
 *
 * Dynamic clients are identified by a `tdd_` prefix on `client_id`. The `client_secret_expires_at`
 * field is `0` — client secrets do not expire. Use the returned credentials with the standard
 * [authorization code flow](#step-1-authorization-request) above.
 *
 * ### Potential errors
 *
 * | Error                   | Description                                                                                                                                                             |
 * | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | Invalid Client Metadata | A field failed validation — e.g. a redirect URI is malformed or not HTTPS, or `grant_types` omits `authorization_code`: `{"error": "invalid_client_metadata"}`.         |
 * | Invalid Scope           | A requested scope is unknown or restricted to first-party use: `{"error": "invalid_scope"}`.                                                                           |
 * | Rate Limit Exceeded     | Too many registration requests in a short period; retry later.                                                                                                         |
 *
 * ## OAuth Client ID Metadata Document
 *
 * > Example metadata document hosted by the client at its `client_id` URL:
 *
 * ```json
 * {
 *     "client_id": "https://example.com/oauth-client-metadata.json",
 *     "client_name": "My App",
 *     "redirect_uris": ["https://example.com/callback"],
 *     "grant_types": ["authorization_code", "refresh_token"],
 *     "response_types": ["code"],
 *     "token_endpoint_auth_method": "none"
 * }
 * ```
 *
 * As an alternative to RFC 7591 registration, Todoist supports [OAuth Client ID Metadata
 * Documents](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/) — a
 * zero-registration flow in which the `client_id` itself is an HTTPS URL pointing to a JSON
 * metadata document describing the client. The authorization server fetches and validates the
 * document on demand, so clients don't pre-register at all.
 *
 * This is intended for public clients that cannot safely store a `client_secret` (browser-based
 * SPAs, desktop apps, MCP servers). Clients protect themselves with PKCE during the authorization
 * code exchange instead of a client secret.
 *
 * ### Hosting the document
 *
 * Host a JSON document at an HTTPS URL you control. The URL must:
 *
 * - use the `https://` scheme (no plaintext HTTP)
 * - include a path component beyond `/` (e.g. `/oauth/client.json`)
 * - resolve to a publicly routable IP address (private and loopback ranges are rejected for SSRF
 *   protection)
 *
 * Todoist enforces a **5KB maximum size** and a **5-second fetch timeout** on the document.
 * Redirects are not followed.
 *
 * ### Document fields
 *
 * | Field                      | Required | Description                                                                                                          |
 * | -------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
 * | client_id                  | Yes      | Must exactly match the URL the document was fetched from.                                                            |
 * | redirect_uris              | Yes      | Non-empty array of redirect URIs. Must be HTTPS (localhost allowed for testing).                                     |
 * | token_endpoint_auth_method | Yes      | Must be `"none"`. Metadata clients are public clients by design and cannot hold a symmetric secret.                  |
 * | grant_types                | No       | Defaults to `["authorization_code"]`. Include `"refresh_token"` to use refresh.                                     |
 * | response_types             | No       | Defaults to `["code"]`.                                                                                              |
 * | client_name                | No       | Human-readable name shown on the consent screen.                                                                     |
 * | client_uri                 | No       | Public URL for the application.                                                                                      |
 * | logo_uri                   | No       | Public URL for the application logo.                                                                                 |
 * | scope                      | No       | Space-separated scopes the client will request.                                                                      |
 *
 * ### Using the metadata document
 *
 * Pass the document URL as the `client_id` on the [authorization
 * request](#step-1-authorization-request). Todoist fetches and caches the document, validates it,
 * and proceeds with the authorization code flow as usual. Because metadata clients use
 * `token_endpoint_auth_method: none`, the `client_secret` parameter is **not sent** on the
 * `/oauth/access_token` exchange. Clients must additionally send PKCE parameters (`code_challenge`
 * on the authorization request, `code_verifier` on the token exchange).
 *
 * ### Refreshing the document
 *
 * Metadata documents are cached server-side. Changes to the document are picked up on the next
 * cache miss, which happens automatically — there is no explicit refresh endpoint. To force a
 * refresh you can revoke the client via the [App Management
 * Console](https://app.todoist.com/app/settings/integrations/app-management); the next
 * authorization attempt will fetch fresh metadata.
 *
 * ### Potential errors
 *
 * | Error          | Description                                                                                                                                                                   |
 * | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | Invalid Client | The document URL failed SSRF validation (HTTP, private IP, missing path), the document is malformed, exceeds the size limit, or `client_id` inside the document does not match the URL: `{"error": "invalid_client"}`. |
 * | Rate Limit Exceeded | Too many metadata document fetches in a short period; retry later.                                                                                                       |
 *
 * ## Refreshing access tokens
 *
 * > Exchanging a refresh token for a new access token:
 *
 * ```shell
 * $ curl "https://api.todoist.com/oauth/access_token" \
 *     -d "client_id=0123456789abcdef" \
 *     -d "client_secret=secret" \
 *     -d "grant_type=refresh_token" \
 *     -d "refresh_token=abcdef0123456789abcdef0123456789abcdef01"
 * ```
 *
 * > On success, Todoist returns HTTP 200 with a new access token and a rotated > refresh token:
 *
 * ```json
 * {
 *     "access_token": "fedcba9876543210fedcba9876543210fedcba98",
 *     "token_type": "Bearer",
 *     "expires_in": 3600,
 *     "refresh_token": "9876543210abcdef9876543210abcdef98765432",
 *     "scope": "data:read_write"
 * }
 * ```
 *
 * ### Which applications issue refresh tokens?
 *
 * Refresh tokens are **enabled by default for newly-created applications**. Access tokens issued to
 * these applications expire one hour after they are issued, and clients must exchange the refresh
 * token for a new access token to continue making requests.
 *
 * Legacy applications created before refresh tokens were introduced continue to receive long-lived
 * access tokens that do not expire. These applications can opt in to refresh tokens via the [App
 * Management Console](https://app.todoist.com/app/settings/integrations/app-management). Once
 * enabled, the setting cannot be disabled — all new tokens issued by the application will follow
 * the refresh flow. Tokens issued before opting in remain long-lived and are not retroactively
 * converted.
 *
 * ### How to refresh
 *
 * To exchange a refresh token for a new access token, send a `POST` request to
 * `https://api.todoist.com/oauth/access_token` with the following parameters:
 *
 * | Name          | Description                                                                                             |
 * | ------------- | ------------------------------------------------------------------------------------------------------- |
 * | client_id     | The Client ID of the Todoist application.                                                               |
 * | grant_type    | Must be the literal string `refresh_token`.                                                             |
 * | refresh_token | The refresh token received in the previous token exchange or refresh.                                   |
 * | client_secret | The Client Secret of the Todoist application. Required for confidential clients — see _Client authentication_ below. |
 *
 * #### Client authentication
 *
 * Todoist's token endpoint supports three authentication methods, matching the
 * `token_endpoint_auth_method` chosen when the application was registered:
 *
 * - `client_secret_post` (default for confidential clients) — `client_id` and `client_secret` sent
 *   in the request body.
 * - `client_secret_basic` — credentials sent via HTTP Basic auth: `Authorization: Basic
 *   base64(client_id:client_secret)`.
 * - `none` — public clients (including clients registered via the OAuth 2.0 Client ID Metadata
 *   Document flow). `client_secret` is not sent or validated; these clients are expected to protect
 *   themselves with PKCE during the authorization code exchange.
 *
 * #### Optional parameters
 *
 * | Name  | Description                                                                                                                                                             |
 * | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | scope | A comma separated subset of the originally granted scopes. Clients may request a narrower set of scopes; requesting scopes beyond the original grant returns an error. |
 *
 * ### Token rotation and security
 *
 * Refresh tokens are **rotated on every successful refresh**. The refresh token returned in the
 * response replaces the one you just used, which is marked as consumed. Always store the latest
 * refresh token from each response.
 *
 * #### Network retries inside the grace window
 *
 * If the same (already-consumed) refresh token is presented again within 60 seconds of being
 * consumed, Todoist treats the second call as a legitimate network retry rather than token reuse.
 * The response returns HTTP `200` with the **same replacement access token** that was issued by the
 * original successful refresh, but **omits the `refresh_token` field** (Todoist cannot reissue it
 * from the consumed hash). Clients must therefore retain the refresh token from the original `200`
 * response; they cannot recover it from a grace-window retry.
 *
 * #### Replay detection outside the grace window
 *
 * If a consumed refresh token is presented outside the 60-second grace window, Todoist treats it as
 * a potential replay attack. All access and refresh tokens issued to the user for the application
 * are revoked, and the user must re-authorize the application.
 *
 * ### Detecting an expired access token
 *
 * When an access token is invalid or has expired, API requests using that token return HTTP `401
 * Unauthorized` with Todoist's standard `UNAUTHORIZED` (`error_code` `477`) JSON body and an [RFC
 * 6750](https://datatracker.ietf.org/doc/html/rfc6750) `WWW-Authenticate` challenge. The response
 * may also include retry backoff metadata:
 *
 * ```http
 * HTTP/1.1 401 Unauthorized
 * Content-Type: application/json
 * Retry-After: 3
 * WWW-Authenticate: Bearer error="invalid_token", error_description="Unauthorized", resource_metadata="https://api.todoist.com/.well-known/oauth-protected-resource"
 *
 * {
 *     "error_tag": "UNAUTHORIZED",
 *     "error_code": 477,
 *     "error": "Unauthorized",
 *     "http_code": 401,
 *     "error_extra": {
 *         "retry_after": 3,
 *         "event_id": "<hash>"
 *     }
 * }
 * ```
 *
 * Clients should treat this response as a signal to refresh the access token and retry the original
 * request with the new token. When present, `retry_after` and the `Retry-After` header are backoff
 * metadata; do not wait and retry the same invalid or expired token. For legacy applications
 * without refresh tokens enabled, the user must re-authorize the application instead. The
 * `resource_metadata` URL points at an [RFC 9728](https://datatracker.ietf.org/doc/html/rfc9728)
 * Protected Resource Metadata document that identifies the authorization server, which is useful
 * for clients discovering the refresh endpoint automatically.
 *
 * ### Potential errors
 *
 * | Error                  | Description                                                                                                                                                                                                            |
 * | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | Invalid Grant          | The refresh token is unknown, expired, revoked, or has already been consumed outside the grace window: `{"error": "invalid_grant"}`. The user must re-authorize the application. Also returned for legacy applications that have not opted in to refresh tokens, because they have no refresh token to present. |
 * | Invalid Client         | The `client_id` or `client_secret` is missing or incorrect: `{"error": "invalid_client"}`.                                                                                                                            |
 * | Invalid Scope          | A scope requested in the refresh was not part of the original grant: `{"error": "invalid_scope"}`.                                                                                                                    |
 * | Unsupported Grant Type | The `grant_type` parameter is not one of `authorization_code` or `refresh_token`: `{"error": "unsupported_grant_type"}`.                                                                                              |
 *
 * ## Cross Origin Resource Sharing
 *
 * > CORS headers example:
 *
 * ```shell
 * $ curl https://api.todoist.com/api/v1/sync \
 *     -H "Authorization: Bearer 0123456789abcdef0123456789abcdef01234567" \
 *     -H "Origin: http://example.com"
 *
 * HTTP/1.1 200 OK
 * Access-Control-Allow-Origin: http://example.com
 * Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
 * Access-Control-Allow-Headers: Authorization,Content-Type
 * ```
 *
 * All API endpoints not related to the initial OAuth2 flow support Cross Origin Resource Sharing
 * (CORS) for requests from any origin. The `Access-Control-Allow-Origin` header echoes the
 * request's `Origin`, and is set on every response, including error responses.
 * `Access-Control-Allow-Credentials: true` is sent only for Todoist's own browser origins.
 */
export class Authorization {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Migrate Personal Token
   *
   * @remarks
   * Tokens obtained via the old email/password authentication method can be migrated to the new
   * OAuth access token. Migrating your users' personal tokens will allow users to see your app in
   * their Todoist Settings page and give them the ability to manage their app authorization.
   *
   * A successful response has `200 OK` status and `application/json` Content-Type.
   *
   * @returns Successful Response
   *
   * @throws {@link
   * Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  migratePersonalTokenApiV1AccessTokensMigratePersonalTokenPost(
    request: Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MigratePersonalTokenResponse,
    Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/access_tokens/migrate_personal_token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body30Schema },
      },
      {
        success: { kind: "json", schema: migratePersonalTokenResponseSchema },
        errorFactory: Authorization.MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError,
      },
      options,
    );
  }

  /**
   * Revoke Access Token Api
   *
   * @remarks
   * Revoke the access tokens obtained via OAuth
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeAccessTokenApiApiV1AccessTokensDelete(
    request: Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/access_tokens"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "client_id", value: request.clientId, schema: s.string() },
          { name: "client_secret", value: request.clientSecret, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Authorization.RevokeAccessTokenApiApiV1AccessTokensDeleteError,
      },
      options,
    );
  }

  /**
   * Revoke Token Rfc7009 Compliant
   *
   * @remarks
   * Revoke an access token according to RFC 7009 OAuth Token Revocation.
   *
   * This endpoint accepts form-encoded data and follows the OAuth 2.0 Token Revocation
   * specification. The client must authenticate using HTTP Basic authentication with their client
   * credentials.
   *
   * Authentication is performed via the Authorization header with the format: Authorization: Basic
   * base64(client_id:client_secret)
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeTokenRfc7009CompliantApiV1RevokePost(
    request: Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/revoke"),
        auth: this.#auth.clientBasic,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body25Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Authorization.RevokeTokenRfc7009CompliantApiV1RevokePostError,
      },
      options,
    );
  }
}

export namespace Authorization {
  export type MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostRequest = {
    body: Body30;
  };

  export class MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MigratePersonalTokenApiV1AccessTokensMigratePersonalTokenPostError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type RevokeAccessTokenApiApiV1AccessTokensDeleteRequest = {
    clientId: string;
    clientSecret: string;
    accessToken: string;
  };

  export class RevokeAccessTokenApiApiV1AccessTokensDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeAccessTokenApiApiV1AccessTokensDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type RevokeTokenRfc7009CompliantApiV1RevokePostRequest = {
    body: Body25;
  };

  export class RevokeTokenRfc7009CompliantApiV1RevokePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeTokenRfc7009CompliantApiV1RevokePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
