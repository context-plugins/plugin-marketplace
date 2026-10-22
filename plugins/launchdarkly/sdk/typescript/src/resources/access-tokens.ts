import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { accessTokenPostSchema, type AccessTokenPost } from "../models/access-token-post.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchFailedErrorRepSchema, type PatchFailedErrorRep } from "../models/patch-failed-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { tokenSchema, type Token } from "../models/token.js";
import { tokensSchema, type Tokens } from "../models/tokens.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * The access tokens API allows you to list, create, modify, and delete access tokens
 * programmatically.
 *
 * When using access tokens to manage access tokens, the following restrictions apply:
 * - Personal tokens can see all service tokens and other personal tokens created by the same team
 *   member. If the personal token has the "Admin" role, it may also see other member's personal
 *   tokens. To learn more, read [Personal
 *   tokens](https://launchdarkly.com/docs/home/account/api#personal-tokens).
 * - Service tokens can see all service tokens. If the token has the "Admin" role, it may also see
 *   all personal tokens. To learn more, read [Service
 *   tokens](https://launchdarkly.com/docs/home/account/api#service-tokens).
 * - Tokens can only manage other tokens, including themselves, if they have "Admin" role or
 *   explicit permission via a custom role. To learn more, read [Personal access token
 *   actions](https://launchdarkly.com/docs/home/team/role-actions#personal-access-token-actions).
 *
 * Several of the endpoints in the access tokens API require an access token ID. The access token ID
 * is returned as part of the [Create access
 * token](https://launchdarkly.com/docs/api/access-tokens/post-token) and [List access
 * tokens](https://launchdarkly.com/docs/api/access-tokens/get-tokens) responses. It is the `_id`
 * field, or the `_id` field of each element in the `items` array.
 *
 * To learn more about access tokens, read [API access
 * tokens](https://launchdarkly.com/docs/home/account/api).
 */
export class AccessTokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete access token
   *
   * @remarks
   * Delete an access token by ID.
   *
   * @returns Action succeeded
   *
   * @throws {@link AccessTokens.DeleteTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteToken(
    request: AccessTokens.DeleteTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AccessTokens.DeleteTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/tokens/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AccessTokens.DeleteTokenError,
      },
      options,
    );
  }

  /**
   * Get access token
   *
   * @remarks
   * Get a single access token by ID.
   *
   * @returns Access token response
   *
   * @throws {@link AccessTokens.GetTokenError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getToken(
    request: AccessTokens.GetTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Token, AccessTokens.GetTokenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/tokens/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenSchema },
        errorFactory: AccessTokens.GetTokenError,
      },
      options,
    );
  }

  /**
   * List access tokens
   *
   * @remarks
   * Fetch a list of all access tokens.
   *
   * @returns Access tokens collection response
   *
   * @throws {@link AccessTokens.GetTokensError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTokens(
    request: AccessTokens.GetTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<Tokens, AccessTokens.GetTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/tokens"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "showAll", value: request.showAll, schema: s.optional(s.boolean()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokensSchema },
        errorFactory: AccessTokens.GetTokensError,
      },
      options,
    );
  }

  /**
   * Patch access token
   *
   * @remarks
   * Update an access token's settings. Updating an access token uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Access token response
   *
   * @throws {@link AccessTokens.PatchTokenError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchToken(
    request: AccessTokens.PatchTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Token, AccessTokens.PatchTokenError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/tokens/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: tokenSchema },
        errorFactory: AccessTokens.PatchTokenError,
      },
      options,
    );
  }

  /**
   * Create access token
   *
   * @remarks
   * Create a new access token.
   *
   * @returns Access token response
   *
   * @throws {@link AccessTokens.PostTokenError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postToken(
    request: AccessTokens.PostTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Token, AccessTokens.PostTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/tokens"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accessTokenPostSchema },
      },
      {
        success: { kind: "json", schema: tokenSchema },
        errorFactory: AccessTokens.PostTokenError,
      },
      options,
    );
  }

  /**
   * Reset access token
   *
   * @remarks
   * Reset an access token's secret key with an optional expiry time for the old key.
   *
   * @returns Access token response
   *
   * @throws {@link AccessTokens.ResetTokenError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  resetToken(
    request: AccessTokens.ResetTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Token, AccessTokens.ResetTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/tokens/{id}/reset"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "expiry", value: request.expiry, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tokenSchema },
        errorFactory: AccessTokens.ResetTokenError,
      },
      options,
    );
  }
}

export namespace AccessTokens {
  export type DeleteTokenRequest = {
    /** The ID of the access token to update */
    id: string;
  };

  export class DeleteTokenError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTokenError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetTokenRequest = {
    /** The ID of the access token */
    id: string;
  };

  export class GetTokenError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTokenError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetTokensRequest = {
    /**
     * If set to true, and the authentication access token has the 'Admin' role, personal access
     * tokens for all members will be retrieved.
     */
    showAll?: boolean;
    /** The number of access tokens to return in the response. Defaults to 25. */
    limit?: number;
    /**
     * Where to start in the list. This is for use with pagination. For example, an offset of 10
     * skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
  };

  export class GetTokensError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTokensError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchTokenRequest = {
    /** The ID of the access token to update */
    id: string;
    body: PatchOperation[];
  };

  export class PatchTokenError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"patchFailedErrorRep", PatchFailedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchTokenError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 422, kind: "patchFailedErrorRep", decode: { kind: "json", schema: patchFailedErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostTokenRequest = {
    body: AccessTokenPost;
  };

  export class PostTokenError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostTokenError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type ResetTokenRequest = {
    /** The ID of the access token to update */
    id: string;
    /**
     * An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By
     * default, the token will expire immediately.
     */
    expiry?: number;
  };

  export class ResetTokenError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResetTokenError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
