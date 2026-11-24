import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createServiceAccountRequestInternalSchema,
  createServiceAccountRequestSchema,
  type CreateServiceAccountRequest,
} from "../models/create-service-account-request.js";
import {
  createServiceAccountTokenRequestInternalSchema,
  createServiceAccountTokenRequestSchema,
  type CreateServiceAccountTokenRequest,
} from "../models/create-service-account-token-request.js";
import {
  createServiceAccountTokenResponseSchema,
  type CreateServiceAccountTokenResponse,
} from "../models/create-service-account-token-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import { serviceAccountTokenSchema, type ServiceAccountToken } from "../models/service-account-token.js";
import {
  serviceAccountTokensResponseInternalSchema,
  type ServiceAccountTokensResponse,
} from "../models/service-account-tokens-response.js";
import { serviceAccountSchema, type ServiceAccount } from "../models/service-account.js";
import {
  serviceAccountsResponseSchema,
  type ServiceAccountsResponse,
} from "../models/service-accounts-response.js";
import {
  updateServiceAccountRequestInternalSchema,
  updateServiceAccountRequestSchema,
  type UpdateServiceAccountRequest,
} from "../models/update-service-account-request.js";
import {
  updateServiceAccountTokenRequestSchema,
  type UpdateServiceAccountTokenRequest,
} from "../models/update-service-account-token-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage non-human identities whose API tokens call the DoiT API with a fixed set of permissions.
 */
export class ServiceAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a service account
   *
   * @remarks
   * Creates a service account owned by the authenticated customer. It cannot authenticate anything
   * until it has an API token; mint one with the `api-tokens` sub-resource. Returns `409` when
   * another service account of the customer already uses `name`. With `dryRun=true` the request
   * goes through the same checks as a real create (name bounds and uniqueness, permission names,
   * caller scope) and returns the same errors without creating anything. When the caller
   * authenticates with a service account token, `createdBy`, `createdByEmail` and `createdByUserId`
   * are `null`. Requires the `serviceAccountCreator` permission.
   *
   * @returns OK - Dry run only (`dryRun=true`). Every check of a real create passed and nothing was
   * created; `id`, `createTime`, `updateTime` and `etag` are `null`.
   *
   * @throws {@link ServiceAccounts.CreateServiceAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceAccount(
    request: ServiceAccounts.CreateServiceAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccount, ServiceAccounts.CreateServiceAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createServiceAccountRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: serviceAccountSchema },
        errorFactory: ServiceAccounts.CreateServiceAccountError,
      },
      options,
    );
  }

  /**
   * Create an API token for a service account
   *
   * @remarks
   * Mints an API token for the service account and returns its `accessToken` once. The token
   * inherits the service account's permissions as they stand at creation; there is no per-token
   * scoping. Returns `409` when the service account already has a token of the same name, and `422`
   * at the cap of 10 tokens.
   *
   * `dryRun=true` checks the name bounds only, then returns a preview without creating anything. It
   * does **not** verify that the service account exists, that the name is unused, or that the
   * account is under the token cap, so a dry run can succeed where the real create then returns
   * `404`, `409` or `422`. Requires the `serviceAccountCreator` permission.
   *
   * @returns OK - Dry run only (`dryRun=true`). The name passed its bounds check and nothing was
   * created; `id` and `createTime` are `null` and `accessToken` is an empty string. Not a guarantee
   * that a real create would succeed — see the operation description.
   *
   * @throws {@link ServiceAccounts.CreateServiceAccountTokenError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceAccountToken(
    request: ServiceAccounts.CreateServiceAccountTokenRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateServiceAccountTokenResponse, ServiceAccounts.CreateServiceAccountTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "serviceAccountId", value: request.serviceAccountId, schema: s.string() }],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createServiceAccountTokenRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: createServiceAccountTokenResponseSchema },
        errorFactory: ServiceAccounts.CreateServiceAccountTokenError,
      },
      options,
    );
  }

  /**
   * Delete a service account
   *
   * @remarks
   * Permanently deletes a service account and all of its API tokens, which stop authenticating
   * immediately. Deleting an ID that no longer exists returns `404`. Requires the
   * `serviceAccountManager` permission.
   *
   * @returns No Content - Service account deleted, or validated when `dryRun=true`.
   *
   * @throws {@link ServiceAccounts.DeleteServiceAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceAccount(
    request: ServiceAccounts.DeleteServiceAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ServiceAccounts.DeleteServiceAccountError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ServiceAccounts.DeleteServiceAccountError,
      },
      options,
    );
  }

  /**
   * Delete an API token
   *
   * @remarks
   * Permanently deletes an API token, which stops authenticating immediately. This cannot be
   * undone. Deleting an ID that no longer exists returns `404`. Requires the
   * `serviceAccountManager` permission.
   *
   * @returns No Content - API token deleted, or validated when `dryRun=true`.
   *
   * @throws {@link ServiceAccounts.DeleteServiceAccountTokenError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceAccountToken(
    request: ServiceAccounts.DeleteServiceAccountTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ServiceAccounts.DeleteServiceAccountTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "serviceAccountId", value: request.serviceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ServiceAccounts.DeleteServiceAccountTokenError,
      },
      options,
    );
  }

  /**
   * Get a service account
   *
   * @remarks
   * Returns a service account owned by the authenticated customer; an ID that belongs to another
   * customer returns `404`. The `ETag` response header carries the value to send in `If-Match` on
   * update and delete. Requires the `serviceAccountViewer` permission.
   *
   * @returns OK - Service account returned.
   *
   * @throws {@link ServiceAccounts.GetServiceAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getServiceAccount(
    request: ServiceAccounts.GetServiceAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccount, ServiceAccounts.GetServiceAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceAccountSchema },
        errorFactory: ServiceAccounts.GetServiceAccountError,
      },
      options,
    );
  }

  /**
   * Get an API token
   *
   * @remarks
   * Returns one API token of the service account; an ID that belongs to another customer returns
   * `404`. `accessToken` is not included — it is shown only once, by the create operation. Requires
   * the `serviceAccountViewer` permission.
   *
   * @returns OK - API token returned.
   *
   * @throws {@link ServiceAccounts.GetServiceAccountTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getServiceAccountToken(
    request: ServiceAccounts.GetServiceAccountTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountToken, ServiceAccounts.GetServiceAccountTokenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "serviceAccountId", value: request.serviceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceAccountTokenSchema },
        errorFactory: ServiceAccounts.GetServiceAccountTokenError,
      },
      options,
    );
  }

  /**
   * List API tokens for a service account
   *
   * @remarks
   * Returns the service account's non-deleted API tokens in a single unpaginated `items` array, at
   * most 10. Secret material is never returned here — `accessToken` is shown only once, by the
   * create operation. Requires the `serviceAccountViewer` permission.
   *
   * @returns OK - API tokens returned.
   *
   * @throws {@link ServiceAccounts.ListServiceAccountTokensError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceAccountTokens(
    request: ServiceAccounts.ListServiceAccountTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountTokensResponse, ServiceAccounts.ListServiceAccountTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "serviceAccountId", value: request.serviceAccountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceAccountTokensResponseInternalSchema },
        errorFactory: ServiceAccounts.ListServiceAccountTokensError,
      },
      options,
    );
  }

  /**
   * List service accounts
   *
   * @remarks
   * Returns every service account owned by the authenticated customer in a single unpaginated
   * `items` array, in no guaranteed order. Requires the `serviceAccountViewer` permission.
   *
   * @returns OK - Service accounts returned.
   *
   * @throws {@link ServiceAccounts.ListServiceAccountsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceAccounts(
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountsResponse, ServiceAccounts.ListServiceAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceAccountsResponseSchema },
        errorFactory: ServiceAccounts.ListServiceAccountsError,
      },
      options,
    );
  }

  /**
   * Update a service account
   *
   * @remarks
   * Partially updates a service account with an `application/merge-patch+json` body (RFC 7396).
   * Omitted or `null` fields stay unchanged; an explicit empty string clears `description`.
   * `permissions` replaces the whole list, and `[]` removes every permission. With `dryRun=true`
   * the request goes through the same checks as a real update (`If-Match`, name bounds and
   * uniqueness, permission names, caller scope) and returns the service account as it would look
   * after the patch, without changing anything. Requires the `serviceAccountManager` permission.
   *
   * @returns OK - Service account updated, or previewed when `dryRun=true` (the body is the merged
   * result, and `etag` is still the current one).
   *
   * @throws {@link ServiceAccounts.UpdateServiceAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceAccount(
    request: ServiceAccounts.UpdateServiceAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccount, ServiceAccounts.UpdateServiceAccountError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateServiceAccountRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: serviceAccountSchema },
        errorFactory: ServiceAccounts.UpdateServiceAccountError,
      },
      options,
    );
  }

  /**
   * Enable or disable an API token
   *
   * @remarks
   * Moves the token between `active` and `disabled` by setting `state`. Disabling takes effect
   * immediately: the token stops authenticating until it is re-enabled. Setting the state a token
   * already has succeeds and changes nothing.
   *
   * The two directions are not symmetric. Disabling a token whose expiry has passed succeeds, but
   * re-enabling an expired token returns `422` — expiry is final, and a new token has to be created
   * instead. `deleted` and `expired` are not accepted values: a token is deleted through the delete
   * operation, and expires on its own.
   *
   * With `dryRun=true` nothing is written and the response body is the token as it would look after
   * the change, so a `422` here means a real request would also be refused. Requires the
   * `serviceAccountManager` permission.
   *
   * @returns OK - API token state changed, or previewed when `dryRun=true`.
   *
   * @throws {@link ServiceAccounts.UpdateServiceAccountTokenError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceAccountToken(
    request: ServiceAccounts.UpdateServiceAccountTokenRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountToken, ServiceAccounts.UpdateServiceAccountTokenError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "serviceAccountId", value: request.serviceAccountId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateServiceAccountTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: serviceAccountTokenSchema },
        errorFactory: ServiceAccounts.UpdateServiceAccountTokenError,
      },
      options,
    );
  }
}

export namespace ServiceAccounts {
  export type CreateServiceAccountRequestParams = {
    /**
     * If true, validates the request and returns the would-be result without applying it. The
     * response then carries the X-Dry-Run header.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
     * returns the stored response instead of repeating the operation; the key is kept for 24 hours.
     */
    idempotencyKey: string;
    /** The service account to create. */
    body: CreateServiceAccountRequest;
  };

  export const createServiceAccountRequestParamsSchema: Schema<CreateServiceAccountRequestParams> =
    s.lazySchema(() =>
      s.object<CreateServiceAccountRequestParams>({
        dryRun: s.defaulted(s.boolean(), false),
        idempotencyKey: s.string().check(s.minLength(1), s.maxLength(255)),
        body: createServiceAccountRequestSchema,
      }),
    );

  export class CreateServiceAccountError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateServiceAccountError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 422, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type CreateServiceAccountTokenRequestParams = {
    /**
     * ID of the service account that owns the token, as returned in the id field by the service
     * account list and create operations.
     */
    serviceAccountId: string;
    /**
     * If true, validates the request and returns the would-be result without applying it. The
     * response then carries the X-Dry-Run header.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
     * returns the stored response instead of repeating the operation; the key is kept for 24 hours.
     */
    idempotencyKey: string;
    /** The API token to create. */
    body: CreateServiceAccountTokenRequest;
  };

  export const createServiceAccountTokenRequestParamsSchema: Schema<CreateServiceAccountTokenRequestParams> =
    s.lazySchema(() =>
      s.object<CreateServiceAccountTokenRequestParams>({
        serviceAccountId: s.string().check(s.minLength(1)),
        dryRun: s.defaulted(s.boolean(), false),
        idempotencyKey: s.string().check(s.minLength(1), s.maxLength(255)),
        body: createServiceAccountTokenRequestSchema,
      }),
    );

  export class CreateServiceAccountTokenError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateServiceAccountTokenError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 409, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 422, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type DeleteServiceAccountRequest = {
    /** Service account ID, as returned in the id field by the list and create operations. */
    id: string;
    /**
     * If true, validates the request and returns the would-be result without applying it. The
     * response then carries the X-Dry-Run header.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * The ETag of the current version, from a get, create or update response. A stale value returns
     * 412; re-read the resource and retry with the new ETag.
     */
    ifMatch: string;
    /**
     * Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
     * returns the stored response instead of repeating the operation; the key is kept for 24 hours.
     */
    idempotencyKey: string;
  };

  export const deleteServiceAccountRequestSchema: Schema<DeleteServiceAccountRequest> = s.lazySchema(() =>
    s.object<DeleteServiceAccountRequest>({
      id: s.string().check(s.minLength(1)),
      dryRun: s.defaulted(s.boolean(), false),
      ifMatch: s.string(),
      idempotencyKey: s.string().check(s.minLength(1), s.maxLength(255)),
    }),
  );

  export class DeleteServiceAccountError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteServiceAccountError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 412, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 428, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type DeleteServiceAccountTokenRequest = {
    /**
     * ID of the service account that owns the token, as returned in the id field by the service
     * account list and create operations.
     */
    serviceAccountId: string;
    /** API token ID, as returned in the id field by the token list and create operations. */
    id: string;
    /**
     * If true, validates the request and returns the would-be result without applying it. The
     * response then carries the X-Dry-Run header.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
     * returns the stored response instead of repeating the operation; the key is kept for 24 hours.
     */
    idempotencyKey: string;
  };

  export const deleteServiceAccountTokenRequestSchema: Schema<DeleteServiceAccountTokenRequest> =
    s.lazySchema(() =>
      s.object<DeleteServiceAccountTokenRequest>({
        serviceAccountId: s.string().check(s.minLength(1)),
        id: s.string().check(s.minLength(1)),
        dryRun: s.defaulted(s.boolean(), false),
        idempotencyKey: s.string().check(s.minLength(1), s.maxLength(255)),
      }),
    );

  export class DeleteServiceAccountTokenError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteServiceAccountTokenError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetServiceAccountRequest = {
    /** Service account ID, as returned in the id field by the list and create operations. */
    id: string;
  };

  export const getServiceAccountRequestSchema: Schema<GetServiceAccountRequest> = s.lazySchema(() =>
    s.object<GetServiceAccountRequest>({
      id: s.string().check(s.minLength(1)),
    }),
  );

  export class GetServiceAccountError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetServiceAccountError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetServiceAccountTokenRequest = {
    /**
     * ID of the service account that owns the token, as returned in the id field by the service
     * account list and create operations.
     */
    serviceAccountId: string;
    /** API token ID, as returned in the id field by the token list and create operations. */
    id: string;
  };

  export const getServiceAccountTokenRequestSchema: Schema<GetServiceAccountTokenRequest> = s.lazySchema(() =>
    s.object<GetServiceAccountTokenRequest>({
      serviceAccountId: s.string().check(s.minLength(1)),
      id: s.string().check(s.minLength(1)),
    }),
  );

  export class GetServiceAccountTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetServiceAccountTokenError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListServiceAccountTokensRequest = {
    /**
     * ID of the service account that owns the token, as returned in the id field by the service
     * account list and create operations.
     */
    serviceAccountId: string;
  };

  export const listServiceAccountTokensRequestSchema: Schema<ListServiceAccountTokensRequest> = s.lazySchema(
    () =>
      s.object<ListServiceAccountTokensRequest>({
        serviceAccountId: s.string().check(s.minLength(1)),
      }),
  );

  export class ListServiceAccountTokensError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListServiceAccountTokensError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export class ListServiceAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListServiceAccountsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type UpdateServiceAccountRequestParams = {
    /** Service account ID, as returned in the id field by the list and create operations. */
    id: string;
    /**
     * If true, validates the request and returns the would-be result without applying it. The
     * response then carries the X-Dry-Run header.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * The ETag of the current version, from a get, create or update response. A stale value returns
     * 412; re-read the resource and retry with the new ETag.
     */
    ifMatch: string;
    /**
     * Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
     * returns the stored response instead of repeating the operation; the key is kept for 24 hours.
     */
    idempotencyKey: string;
    /** The fields to change. */
    body: UpdateServiceAccountRequest;
  };

  export const updateServiceAccountRequestParamsSchema: Schema<UpdateServiceAccountRequestParams> =
    s.lazySchema(() =>
      s.object<UpdateServiceAccountRequestParams>({
        id: s.string().check(s.minLength(1)),
        dryRun: s.defaulted(s.boolean(), false),
        ifMatch: s.string(),
        idempotencyKey: s.string().check(s.minLength(1), s.maxLength(255)),
        body: updateServiceAccountRequestSchema,
      }),
    );

  export class UpdateServiceAccountError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Declared<"problemDetails7", ProblemDetails>
      | Declared<"problemDetails8", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateServiceAccountError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 409, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 412, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 415, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 422, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 428, kind: "problemDetails7", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails8", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type UpdateServiceAccountTokenRequestParams = {
    /**
     * ID of the service account that owns the token, as returned in the id field by the service
     * account list and create operations.
     */
    serviceAccountId: string;
    /** API token ID, as returned in the id field by the token list and create operations. */
    id: string;
    /**
     * If true, validates the request and returns the would-be result without applying it. The
     * response then carries the X-Dry-Run header.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Client-generated key (UUID v4 or ULID recommended). Retrying with the same key and request
     * returns the stored response instead of repeating the operation; the key is kept for 24 hours.
     */
    idempotencyKey: string;
    /** The state to move the token to. */
    body: UpdateServiceAccountTokenRequest;
  };

  export const updateServiceAccountTokenRequestParamsSchema: Schema<UpdateServiceAccountTokenRequestParams> =
    s.lazySchema(() =>
      s.object<UpdateServiceAccountTokenRequestParams>({
        serviceAccountId: s.string().check(s.minLength(1)),
        id: s.string().check(s.minLength(1)),
        dryRun: s.defaulted(s.boolean(), false),
        idempotencyKey: s.string().check(s.minLength(1), s.maxLength(255)),
        body: updateServiceAccountTokenRequestSchema,
      }),
    );

  export class UpdateServiceAccountTokenError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateServiceAccountTokenError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 422, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}
