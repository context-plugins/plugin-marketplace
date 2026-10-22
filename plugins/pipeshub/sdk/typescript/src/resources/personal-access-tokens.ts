import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { adminPatListResponseSchema, type AdminPatListResponse } from "../models/admin-pat-list-response.js";
import {
  applicationJsonErrorResponseSchema,
  type ApplicationJsonErrorResponse,
} from "../models/application-json-error-response.js";
import { createPatRequestSchema, type CreatePatRequest } from "../models/create-pat-request.js";
import { createPatResponseSchema, type CreatePatResponse } from "../models/create-pat-response.js";
import { listPatResponseSchema, type ListPatResponse } from "../models/list-pat-response.js";
import {
  oAuthClientManagementRateLimitErrorSchema,
  type OAuthClientManagementRateLimitError,
} from "../models/oauth-client-management-rate-limit-error.js";
import {
  patScopesListResponseSchema,
  type PatScopesListResponse,
} from "../models/pat-scopes-list-response.js";
import { revokePatRequestSchema, type RevokePatRequest } from "../models/revoke-pat-request.js";
import { revokePatResponseSchema, type RevokePatResponse } from "../models/revoke-pat-response.js";
import type { Servers } from "../servers.js";

/**
 * Self-service, long-lived, scoped, revocable credentials that act as their creator — unlike an
 * OAuth app's `client_credentials` flow, which acts as the app.
 *
 * **Who can create one**
 * - **Any authenticated org member** — unlike OAuth apps, this is deliberately not admin-gated.
 *
 * **Session only**
 * - Every `/personal-access-tokens/*` route requires the user's interactive session JWT. OAuth
 *   access tokens and personal access tokens (`phpat_...`) are rejected with `403`. `scopes` is
 *   capped at the instance's `MCP_SCOPES`, not at the caller's own token, so a narrowly scoped
 *   token could otherwise mint itself a full-scope, non-expiring PAT.
 *
 * **How it's issued**
 * - Minted through the same OAuth access-token machinery as `/oauth2/token`, against one
 *   lazily-created, per-org synthetic OAuth app (`clientId: pat-system:<orgId>`) that every PAT in
 *   that org shares. That app is hidden from `/oauth-clients/*` — it never appears in your own
 *   OAuth app list and can't be managed through those routes.
 * - The raw token is prefixed `phpat_` ahead of the underlying JWT (see the `bearerAuth` security
 *   scheme) so it's recognizable to secret scanners. It's shown exactly once, at creation.
 *
 * **Expiry and scopes**
 * - `expiryDays`: `30` (default), `90`, `365`, or `never`.
 * - Scopes default to the org's full configured `MCP_SCOPES` set if none are requested; `GET
 *   /personal-access-tokens/scopes` lists what's available.
 *
 * **Admin visibility**
 * - Regular members only ever see and revoke their own tokens.
 * - Org admins can list and revoke *any* member's token via `/personal-access-tokens/admin*` — for
 *   incident response (a departed employee, a compromised laptop) — without needing the OAuth app
 *   CRUD access described above.
 */
export class PersonalAccessTokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Admin: list every active personal access token in the org
   *
   * @remarks
   * Lists every active personal access token across every member of the org, paginated, with each
   * token's owner attached (including owners who've since been deleted from the org — see
   * `ownerDeleted` on `AdminPatListItem`). For incident response: a departed employee or a
   * compromised laptop, where only the token's own creator could otherwise see or revoke it.
   *
   * Requires org-admin privileges (`userAdminCheck`): a non-admin caller gets `403`
   * (`ForbiddenError`, message "You need admin access to do this. Ask an admin in your
   * organisation.").
   *
   * @returns Every active personal access token in the org
   *
   * @throws {@link PersonalAccessTokens.AdminListPersonalAccessTokensError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminListPersonalAccessTokens(
    request: PersonalAccessTokens.AdminListPersonalAccessTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminPatListResponse, PersonalAccessTokens.AdminListPersonalAccessTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/personal-access-tokens/admin"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminPatListResponseSchema },
        errorFactory: PersonalAccessTokens.AdminListPersonalAccessTokensError,
      },
      options,
    );
  }

  /**
   * Admin: revoke any user's personal access token by id
   *
   * @remarks
   * Revokes a token by id, scoped to the org's PAT client but **not** to a specific owning user —
   * the admin counterpart to `DELETE /personal-access-tokens/{tokenId}`. Requires org-admin
   * privileges (`userAdminCheck`); a non-admin caller gets `403` (`ForbiddenError`), same as `GET
   * /personal-access-tokens/admin`.
   *
   * @returns Personal access token revoked successfully
   *
   * @throws {@link PersonalAccessTokens.AdminRevokePersonalAccessTokenError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminRevokePersonalAccessToken(
    request: PersonalAccessTokens.AdminRevokePersonalAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<RevokePatResponse, PersonalAccessTokens.AdminRevokePersonalAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/personal-access-tokens/admin/{tokenId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "tokenId", value: request.tokenId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => revokePatRequestSchema)) },
      },
      {
        success: { kind: "json", schema: revokePatResponseSchema },
        errorFactory: PersonalAccessTokens.AdminRevokePersonalAccessTokenError,
      },
      options,
    );
  }

  /**
   * Create a personal access token
   *
   * @remarks
   * Mints a new personal access token for the caller. Deliberately not admin-gated — any
   * authenticated org member may create their own, unlike OAuth app registration.
   *
   * The token is minted against a lazily-created, per-org synthetic OAuth app (`clientId:
   * pat-system:<orgId>`) shared by every PAT in that org — the same signing, hashing, and
   * revocation machinery as `/oauth2/token`, reused rather than duplicated.
   *
   * `scopes` is validated against the org's configured `MCP_SCOPES` env var, not the full
   * role-aware OAuth-app scope catalog — a non-admin can request any scope in that set.
   *
   * **Session only.** The bearer token must be the user's interactive session JWT. OAuth access
   * tokens and personal access tokens (`phpat_...`) are rejected with `403`, so a token that is
   * already issued cannot mint another with wider scopes or a longer life.
   *
   * The response's `accessToken` is shown **once**; only its SHA-256 hash is stored. It's prefixed
   * `phpat_` (see the `bearerAuth` security scheme).
   *
   * @returns Personal access token created successfully
   *
   * @throws {@link PersonalAccessTokens.CreatePersonalAccessTokenError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPersonalAccessToken(
    request: PersonalAccessTokens.CreatePersonalAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<CreatePatResponse, PersonalAccessTokens.CreatePersonalAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/personal-access-tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createPatRequestSchema },
      },
      {
        success: { kind: "json", schema: createPatResponseSchema },
        errorFactory: PersonalAccessTokens.CreatePersonalAccessTokenError,
      },
      options,
    );
  }

  /**
   * List scopes available for a new personal access token
   *
   * @remarks
   * Returns the org's configured `MCP_SCOPES` as a flat array of scope definitions, for populating
   * the create-token scope picker. Unlike `GET /oauth-clients/scopes`, this is **not** grouped by
   * category and **not** role-aware — every org member sees the same set, since PAT scope selection
   * isn't gated by admin status.
   *
   * @returns Scopes available to grant
   *
   * @throws {@link PersonalAccessTokens.ListPersonalAccessTokenScopesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPersonalAccessTokenScopes(
    options?: RequestOptions,
  ): ApiPromise<PatScopesListResponse, PersonalAccessTokens.ListPersonalAccessTokenScopesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/personal-access-tokens/scopes"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: patScopesListResponseSchema },
        errorFactory: PersonalAccessTokens.ListPersonalAccessTokenScopesError,
      },
      options,
    );
  }

  /**
   * List your own personal access tokens
   *
   * @remarks
   * Lists the caller's own active (non-revoked, unexpired) personal access tokens, newest first,
   * capped at 100 rows server-side. Never returns another user's tokens — see `GET
   * /personal-access-tokens/admin` for the org-admin, cross-user view.
   *
   * Shares the same per-user rate limiter as `/oauth-clients/*` (default 1000 req/min,
   * `MAX_OAUTH_CLIENT_REQUESTS_PER_MINUTE`).
   *
   * @returns The caller's active personal access tokens
   *
   * @throws {@link PersonalAccessTokens.ListPersonalAccessTokensError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPersonalAccessTokens(
    options?: RequestOptions,
  ): ApiPromise<ListPatResponse, PersonalAccessTokens.ListPersonalAccessTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/personal-access-tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPatResponseSchema },
        errorFactory: PersonalAccessTokens.ListPersonalAccessTokensError,
      },
      options,
    );
  }

  /**
   * Revoke one of your own personal access tokens
   *
   * @remarks
   * Revokes a token by id, scoped to `{tokenId, clientId, callerUserId}` — a caller can never
   * revoke another user's token through this route, even though everyone in the org shares the same
   * underlying `pat-system:<orgId>` client. Revocation takes effect immediately: the token's next
   * verification attempt fails, including one already in flight.
   *
   * @returns Personal access token revoked successfully
   *
   * @throws {@link PersonalAccessTokens.RevokePersonalAccessTokenError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokePersonalAccessToken(
    request: PersonalAccessTokens.RevokePersonalAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<RevokePatResponse, PersonalAccessTokens.RevokePersonalAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/personal-access-tokens/{tokenId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "tokenId", value: request.tokenId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => revokePatRequestSchema)) },
      },
      {
        success: { kind: "json", schema: revokePatResponseSchema },
        errorFactory: PersonalAccessTokens.RevokePersonalAccessTokenError,
      },
      options,
    );
  }
}

export namespace PersonalAccessTokens {
  export type AdminListPersonalAccessTokensRequest = {
    /** Page number (defaults to `1` when omitted or empty) @default 1 */
    page?: number;
    /** Items per page (defaults to `100` when omitted or empty; max 100) @default 100 */
    limit?: number;
  };

  export class AdminListPersonalAccessTokensError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AdminListPersonalAccessTokensError> = [
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

  export type AdminRevokePersonalAccessTokenRequest = {
    /** Personal access token ID */
    tokenId: string;
    /** Optional request body for Admin revoke personal access token */
    body?: RevokePatRequest;
  };

  export class AdminRevokePersonalAccessTokenError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse4", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AdminRevokePersonalAccessTokenError> = [
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

  export type CreatePersonalAccessTokenRequest = {
    /** Request body for Create personal access token */
    body: CreatePatRequest;
  };

  export class CreatePersonalAccessTokenError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse3", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePersonalAccessTokenError> = [
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

  export class ListPersonalAccessTokenScopesError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPersonalAccessTokenScopesError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export class ListPersonalAccessTokensError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPersonalAccessTokensError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 429,
        kind: "oAuthClientManagementRateLimitError",
        decode: { kind: "json", schema: oAuthClientManagementRateLimitErrorSchema },
      },
    ];
  }

  export type RevokePersonalAccessTokenRequest = {
    /** Personal access token ID */
    tokenId: string;
    /** Optional request body for Revoke personal access token */
    body?: RevokePatRequest;
  };

  export class RevokePersonalAccessTokenError extends ApiError {
    declare readonly payload:
      | Declared<"applicationJsonErrorResponse", ApplicationJsonErrorResponse>
      | Declared<"applicationJsonErrorResponse2", ApplicationJsonErrorResponse>
      | Declared<"oAuthClientManagementRateLimitError", OAuthClientManagementRateLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokePersonalAccessTokenError> = [
      {
        on: 401,
        kind: "applicationJsonErrorResponse",
        decode: { kind: "json", schema: applicationJsonErrorResponseSchema },
      },
      {
        on: 404,
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
}
