import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  activateOAuthAppResponseSchema,
  type ActivateOAuthAppResponse,
} from "../models/activate-oauth-app-response.js";
import {
  applicationJsonErrorResponseSchema,
  type ApplicationJsonErrorResponse,
} from "../models/application-json-error-response.js";
import {
  createOAuthAppRequestSchema,
  type CreateOAuthAppRequest,
} from "../models/create-oauth-app-request.js";
import {
  createOAuthAppResponseSchema,
  type CreateOAuthAppResponse,
} from "../models/create-oauth-app-response.js";
import { oAuthAppListResponseSchema, type OAuthAppListResponse } from "../models/oauth-app-list-response.js";
import { oAuthAppResponseSchema, type OAuthAppResponse } from "../models/oauth-app-response.js";
import {
  oAuthAppTokensListResponseSchema,
  type OAuthAppTokensListResponse,
} from "../models/oauth-app-tokens-list-response.js";
import {
  oAuthClientManagementRateLimitErrorSchema,
  type OAuthClientManagementRateLimitError,
} from "../models/oauth-client-management-rate-limit-error.js";
import { oauthClientsResponseSchema, type OauthClientsResponse } from "../models/oauth-clients-response.js";
import {
  oauthClientsRevokeAllTokensResponseSchema,
  type OauthClientsRevokeAllTokensResponse,
} from "../models/oauth-clients-revoke-all-tokens-response.js";
import {
  oAuthScopesGroupedResponseSchema,
  type OAuthScopesGroupedResponse,
} from "../models/oauth-scopes-grouped-response.js";
import {
  regenerateOAuthAppSecretResponseSchema,
  type RegenerateOAuthAppSecretResponse,
} from "../models/regenerate-oauth-app-secret-response.js";
import { status9Schema, type Status9 } from "../models/status9.js";
import {
  suspendOAuthAppResponseSchema,
  type SuspendOAuthAppResponse,
} from "../models/suspend-oauth-app-response.js";
import {
  updateOAuthAppRequestSchema,
  type UpdateOAuthAppRequest,
} from "../models/update-oauth-app-request.js";
import {
  updateOAuthAppResponseSchema,
  type UpdateOAuthAppResponse,
} from "../models/update-oauth-app-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage OAuth 2.0 client applications registered with PipesHub.
 *
 * OAuth apps allow third-party applications to access PipesHub APIs on behalf of users or
 * organizations. Each app receives a client ID and secret for authentication.
 *
 * **Who can see which apps**
 * - **Everyone (including org admins)** sees and manages only OAuth apps **they created**
 *   (`createdBy`). Other members' apps are hidden (not listed; individual operations return not
 *   found).
 *
 * **Session only**
 * - Every `/oauth-clients/*` route requires the user's interactive session JWT. OAuth access tokens
 *   and personal access tokens (`phpat_...`) are rejected with `403`, so a token issued to a client
 *   can never register, reconfigure, or revoke clients on its own.
 *
 * **Who authorizes vs. client credentials**
 * - **Authorization code:** Any authenticated user in the workspace may complete consent for a
 *   valid `client_id`; issued tokens represent **that user**.
 * - **Client credentials:** Access tokens represent the **OAuth app creator** (who registered the
 *   client), not the caller.
 *
 * **Scopes**
 * - `GET /oauth-clients/scopes` returns scopes grouped by category for the **signed-in user's
 *   role**.
 * - **Org admins** may register apps that request additional **admin-only** scopes; non-admins
 *   cannot select those scopes when creating or updating an app.
 *
 * **App Types:**
 * - **Confidential clients**: Server-side apps that can securely store secrets
 * - **Public clients**: Browser/mobile apps that cannot securely store secrets (use PKCE)
 *
 * **App Lifecycle:**
 * - Create apps with name, redirect URIs, allowed scopes, and optional URLs (homepage, privacy,
 *   terms)
 * - Regenerate secrets if compromised
 * - Suspend/activate apps to control access
 * - Revoke all tokens for emergency access removal
 */
export class OAuthApps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate suspended OAuth app
   *
   * @remarks
   * Moves a suspended OAuth app back to `status: "active"`, restoring its ability to authenticate
   * and obtain new tokens via `POST /oauth2/token`.
   *
   * A revoked app cannot be reactivated (returns `400`); the only path back is to register a new
   * app. Activating an app that is already active also returns `400`.
   *
   * Creator-only.
   *
   * @returns OAuth app activated
   *
   * @throws {@link OAuthApps.ActivateOAuthAppError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateOAuthApp(
    request: OAuthApps.ActivateOAuthAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ActivateOAuthAppResponse, OAuthApps.ActivateOAuthAppError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth-clients/{appId}/activate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "appId", value: request.appId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activateOAuthAppResponseSchema },
        errorFactory: OAuthApps.ActivateOAuthAppError,
      },
      options,
    );
  }

  /**
   * Create OAuth app
   *
   * @remarks
   * Register a new OAuth app for the organization. Any authenticated org member may create apps;
   * the creator is recorded as the app's owner and is the only user who can subsequently read,
   * update, suspend, activate, regenerate the secret of, or delete it.
   *
   * The `clientSecret` is returned in this response **only** — it is stored hashed server-side and
   * cannot be retrieved later. Persist it before exiting the create flow; if it is ever lost,
   * rotate via `POST /oauth-clients/{appId}/regenerate-secret`.
   *
   * `allowedScopes` is validated against the caller's role-aware scope set (see `GET
   * /oauth-clients/scopes`). Org admins may include admin-only scopes; non-admins requesting a
   * restricted scope receive `400`.
   *
   * All `/oauth-clients/*` routes share a per-user rate limiter (default 1000 req/min, configurable
   * via the `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE` env var).
   *
   * @returns OAuth app created successfully
   *
   * @throws {@link OAuthApps.CreateOAuthAppError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOAuthApp(
    request: OAuthApps.CreateOAuthAppRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateOAuthAppResponse, OAuthApps.CreateOAuthAppError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth-clients"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createOAuthAppRequestSchema },
      },
      {
        success: { kind: "json", schema: createOAuthAppResponseSchema },
        errorFactory: OAuthApps.CreateOAuthAppError,
      },
      options,
    );
  }

  /**
   * Delete OAuth app
   *
   * @remarks
   * Soft-deletes an OAuth app. The app is flagged `isDeleted=true` on the `OAuthApp` document,
   * removed from list/get responses for every caller, and all of its access and refresh tokens are
   * revoked in the same operation. There is no restore endpoint — deletion is final.
   *
   * Creator-only: even org admins cannot delete apps owned by other users.
   *
   * @returns OAuth app deleted
   *
   * @throws {@link OAuthApps.DeleteOAuthAppError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteOAuthApp(
    request: OAuthApps.DeleteOAuthAppRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthClientsResponse, OAuthApps.DeleteOAuthAppError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/oauth-clients/{appId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "appId", value: request.appId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oauthClientsResponseSchema },
        errorFactory: OAuthApps.DeleteOAuthAppError,
      },
      options,
    );
  }

  /**
   * Get OAuth app details
   *
   * @remarks
   * Returns the full configuration of an OAuth app you registered. The `clientSecret` is never
   * echoed back here; if you need a new one, call `POST /oauth-clients/{appId}/regenerate-secret`.
   *
   * Access is creator-scoped: even org admins receive `404` for apps owned by other users. This
   * avoids leaking app metadata across org members and keeps the read surface symmetric with
   * `listOAuthApps`.
   *
   * @returns OAuth app details
   *
   * @throws {@link OAuthApps.GetOAuthAppError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOAuthApp(
    request: OAuthApps.GetOAuthAppRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthAppResponse, OAuthApps.GetOAuthAppError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth-clients/{appId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "appId", value: request.appId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oAuthAppResponseSchema },
        errorFactory: OAuthApps.GetOAuthAppError,
      },
      options,
    );
  }

  /**
   * List app tokens
   *
   * @remarks
   * Lists active access and refresh tokens currently issued to an OAuth app, sorted newest first.
   * Useful for auditing app usage and picking specific tokens to investigate before a targeted
   * revocation.
   *
   * Each entry includes the token type (`access` or `refresh`), the user the token was issued for
   * (omitted for client-credentials access tokens), the granted scopes, the issuance and expiry
   * timestamps, and the revocation flag. Each type is capped at 100 most-recent rows server-side
   * (`listTokensForApp` in `oauth_token.service.ts`); revoked and expired tokens are excluded.
   *
   * Creator-only.
   *
   * @returns List of tokens
   *
   * @throws {@link OAuthApps.ListOAuthAppTokensError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOAuthAppTokens(
    request: OAuthApps.ListOAuthAppTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthAppTokensListResponse, OAuthApps.ListOAuthAppTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth-clients/{appId}/tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "appId", value: request.appId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oAuthAppTokensListResponseSchema },
        errorFactory: OAuthApps.ListOAuthAppTokensError,
      },
      options,
    );
  }

  /**
   * List OAuth apps
   *
   * @remarks
   * Returns a paginated list of OAuth apps registered by the signed-in user. Access is
   * creator-scoped — even org admins only see apps they created themselves, so this endpoint is
   * safe to use for per-user developer dashboards without leaking org-wide app metadata.
   *
   * Each entry carries the full app configuration except the client secret, which is only ever
   * returned at creation time and immediately after a regeneration.
   *
   * Use the `status` query parameter to filter by lifecycle state (`active`, `suspended`,
   * `revoked`) and `search` for a case-insensitive substring match against `name` or `description`.
   *
   * @returns List of OAuth apps
   *
   * @throws {@link OAuthApps.ListOAuthAppsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOAuthApps(
    request: OAuthApps.ListOAuthAppsRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthAppListResponse, OAuthApps.ListOAuthAppsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth-clients"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status9Schema)) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oAuthAppListResponseSchema },
        errorFactory: OAuthApps.ListOAuthAppsError,
      },
      options,
    );
  }

  /**
   * List available scopes
   *
   * @remarks
   * Returns the OAuth scopes the signed-in user is permitted to register on new or updated apps,
   * grouped by category. Use this to populate scope-picker UIs and to validate `allowedScopes`
   * client-side before submitting to `createOAuthApp` / `updateOAuthApp`.
   *
   * The result is role-aware. Org admins (members of an admin user group) receive every registered
   * scope; everyone else is filtered to exclude admin-only scopes: `org:write`, `org:admin`,
   * `user:invite`, `user:delete`, `usergroup:write`, `team:write`, `config:write`, `crawl:write`,
   * `crawl:delete`.
   *
   * Each key in the `scopes` map matches the `category` field on the `OAuthScopeInfo` entries it
   * contains. A category may appear with an empty array when every scope it contains is restricted
   * for the caller — treat empty buckets as "no permitted scopes in this group", not as a missing
   * category.
   *
   * Shares the per-user rate limiter applied to every `/oauth-clients/*` route (default 1000
   * req/min, `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE`).
   *
   * @returns List of available scopes
   *
   * @throws {@link OAuthApps.ListOAuthScopesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOAuthScopes(
    options?: RequestOptions,
  ): ApiPromise<OAuthScopesGroupedResponse, OAuthApps.ListOAuthScopesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth-clients/scopes"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oAuthScopesGroupedResponseSchema },
        errorFactory: OAuthApps.ListOAuthScopesError,
      },
      options,
    );
  }

  /**
   * Regenerate client secret
   *
   * @remarks
   * Generates a fresh client secret for an OAuth app. The previous secret is invalidated
   * immediately — any client still presenting it will fail token exchange at `POST /oauth2/token`
   * until updated.
   *
   * The new secret is returned in this response **only** and cannot be retrieved later. Pair this
   * call with credential propagation to every integration that uses the app. If the rotation was
   * triggered by a suspected leak, also call `POST /oauth-clients/{appId}/revoke-all-tokens` to
   * invalidate already-issued access and refresh tokens instead of waiting for their natural
   * expiry.
   *
   * Creator-only: even org admins cannot rotate secrets for other users' apps.
   *
   * @returns New client secret generated
   *
   * @throws {@link OAuthApps.RegenerateOAuthAppSecretError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  regenerateOAuthAppSecret(
    request: OAuthApps.RegenerateOAuthAppSecretRequest,
    options?: RequestOptions,
  ): ApiPromise<RegenerateOAuthAppSecretResponse, OAuthApps.RegenerateOAuthAppSecretError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth-clients/{appId}/regenerate-secret"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "appId", value: request.appId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: regenerateOAuthAppSecretResponseSchema },
        errorFactory: OAuthApps.RegenerateOAuthAppSecretError,
      },
      options,
    );
  }

  /**
   * Revoke all app tokens
   *
   * @remarks
   * Revokes every access and refresh token currently issued to an OAuth app, in a single operation.
   * Use this for emergency credential rotation, suspected secret leaks, or as a follow-up to `POST
   * /oauth-clients/{appId}/regenerate-secret` when you want existing sessions invalidated
   * immediately rather than letting them expire naturally.
   *
   * The response `count` is the total number of tokens revoked across both types. Clients of this
   * app must then obtain new tokens via the standard OAuth flow.
   *
   * Creator-only.
   *
   * @returns All tokens revoked
   *
   * @throws {@link OAuthApps.RevokeAllOAuthAppTokensError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeAllOAuthAppTokens(
    request: OAuthApps.RevokeAllOAuthAppTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthClientsRevokeAllTokensResponse, OAuthApps.RevokeAllOAuthAppTokensError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth-clients/{appId}/revoke-all-tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "appId", value: request.appId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oauthClientsRevokeAllTokensResponseSchema },
        errorFactory: OAuthApps.RevokeAllOAuthAppTokensError,
      },
      options,
    );
  }

  /**
   * Suspend OAuth app
   *
   * @remarks
   * Moves an OAuth app to `status: "suspended"`, blocking new token issuance at `POST
   * /oauth2/token` and the authorization-code consent flow. Tokens that have already been issued
   * remain valid until their natural expiry — call `POST /oauth-clients/{appId}/revoke-all-tokens`
   * immediately afterwards if you need an immediate lockout.
   *
   * Use this for temporary suspensions where you intend to reactivate later. For permanent removal,
   * use `DELETE /oauth-clients/{appId}`. Suspending an app that is already suspended returns `400`.
   *
   * Creator-only.
   *
   * @returns OAuth app suspended
   *
   * @throws {@link OAuthApps.SuspendOAuthAppError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  suspendOAuthApp(
    request: OAuthApps.SuspendOAuthAppRequest,
    options?: RequestOptions,
  ): ApiPromise<SuspendOAuthAppResponse, OAuthApps.SuspendOAuthAppError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth-clients/{appId}/suspend"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "appId", value: request.appId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: suspendOAuthAppResponseSchema },
        errorFactory: OAuthApps.SuspendOAuthAppError,
      },
      options,
    );
  }

  /**
   * Update OAuth app
   *
   * @remarks
   * Update an OAuth app's configuration. All body fields are optional — supply only what should
   * change. URL fields (`homepageUrl`, `privacyPolicyUrl`, `termsOfServiceUrl`) accept `null` to
   * clear them.
   *
   * Creator-only: even org admins cannot edit apps owned by other users.
   *
   * When modifying `allowedScopes`, the new set must remain a subset of the caller's role-aware
   * scope list (same rule as `GET /oauth-clients/scopes`). When adding `authorization_code` to
   * `allowedGrantTypes`, `redirectUris` becomes required and must contain at least one URI;
   * otherwise the request is rejected with `400` by the Zod refine on `updateAppSchema`.
   *
   * This endpoint never rotates the client secret — use `POST
   * /oauth-clients/{appId}/regenerate-secret` for that.
   *
   * @returns OAuth app updated
   *
   * @throws {@link OAuthApps.UpdateOAuthAppError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOAuthApp(
    request: OAuthApps.UpdateOAuthAppRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateOAuthAppResponse, OAuthApps.UpdateOAuthAppError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/oauth-clients/{appId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "appId", value: request.appId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateOAuthAppRequestSchema },
      },
      {
        success: { kind: "json", schema: updateOAuthAppResponseSchema },
        errorFactory: OAuthApps.UpdateOAuthAppError,
      },
      options,
    );
  }
}

export namespace OAuthApps {
  export type ActivateOAuthAppRequest = {
    /** OAuth app ID */
    appId: string;
  };

  export class ActivateOAuthAppError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse4", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActivateOAuthAppError> = [
      {
        on: 400,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 401,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
        kind: "applicationJsonErrorResponse4",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type CreateOAuthAppRequestParams = {
    /** Request body for Create OAuth app */
    body: CreateOAuthAppRequest;
  };

  export class CreateOAuthAppError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOAuthAppError> = [
      {
        on: 400,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 401,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type DeleteOAuthAppRequest = {
    /** OAuth app ID */
    appId: string;
  };

  export class DeleteOAuthAppError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOAuthAppError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type GetOAuthAppRequest = {
    /** OAuth app ID (MongoDB ObjectId) */
    appId: string;
  };

  export class GetOAuthAppError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOAuthAppError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type ListOAuthAppTokensRequest = {
    /** OAuth app ID */
    appId: string;
  };

  export class ListOAuthAppTokensError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOAuthAppTokensError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type ListOAuthAppsRequest = {
    /**
     * Page number (matches `listAppsQuerySchema`: defaults to `1` when omitted or empty).
     *
     * @default 1
     */
    page?: number;
    /** Items per page (defaults to `20` when omitted or empty; max 100). @default 20 */
    limit?: number;
    /** Filter by status */
    status?: Status9;
    /** Search by app name or description (case-insensitive) */
    search?: string;
  };

  export class ListOAuthAppsError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOAuthAppsError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export class ListOAuthScopesError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOAuthScopesError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type RegenerateOAuthAppSecretRequest = {
    /** OAuth app ID */
    appId: string;
  };

  export class RegenerateOAuthAppSecretError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RegenerateOAuthAppSecretError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type RevokeAllOAuthAppTokensRequest = {
    /** OAuth app ID */
    appId: string;
  };

  export class RevokeAllOAuthAppTokensError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeAllOAuthAppTokensError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type SuspendOAuthAppRequest = {
    /** OAuth app ID */
    appId: string;
  };

  export class SuspendOAuthAppError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse4", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SuspendOAuthAppError> = [
      {
        on: 400,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 401,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
        kind: "applicationJsonErrorResponse4",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type UpdateOAuthAppRequestParams = {
    /** OAuth app ID */
    appId: string;
    /** Request payload */
    body: UpdateOAuthAppRequest;
  };

  export class UpdateOAuthAppError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse4", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOAuthAppError> = [
      {
        on: 400,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 401,
        kind: "applicationJsonErrorResponse2",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 403,
        kind: "applicationJsonErrorResponse3",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
        kind: "applicationJsonErrorResponse4",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }
}
