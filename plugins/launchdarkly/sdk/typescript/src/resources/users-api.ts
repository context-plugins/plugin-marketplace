import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import { userRecordSchema, type UserRecord } from "../models/user-record.js";
import { usersRepSchema, type UsersRep } from "../models/users-rep.js";
import { usersSchema, type Users } from "../models/users.js";
import type { Servers } from "../servers.js";

/**
 * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
 * contexts instead of users, you should use [Contexts](https://launchdarkly.com/docs/api/contexts)
 * instead of these endpoints. To learn more, read
 * [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
 *
 *
 * LaunchDarkly creates a record for each user passed in to `variation` calls. This record powers
 * the autocomplete functionality on the feature flag dashboard, as well as the Users page. To learn
 * more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
 *
 * LaunchDarkly also offers an API that lets you tap into this data. You can use the users API to
 * see what user data is available to LaunchDarkly, as well as determine which flag values a user
 * will receive. You can also explicitly set which flag value a user will receive via this API.
 *
 * Users are always scoped within a project and environment. In other words, each environment has
 * its own set of user records.
 */
export class UsersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete user
   *
   * @remarks
   * > ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts
   * instead of users, you should use [Delete context
   * instances](https://launchdarkly.com/docs/api/contexts/delete-context-instances) instead of this
   * endpoint.
   *
   * Delete a user by key.
   *
   * @returns Action succeeded
   *
   * @throws {@link UsersApi.DeleteUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  deleteUser(
    request: UsersApi.DeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, UsersApi.DeleteUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/users/{projectKey}/{environmentKey}/{userKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "userKey", value: request.userKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: UsersApi.DeleteUserError,
      },
      options,
    );
  }

  /**
   * Find users
   *
   * @remarks
   * > ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts
   * instead of users, you should use [Search for context
   * instances](https://launchdarkly.com/docs/api/contexts/search-context-instances) instead of this
   * endpoint.
   *
   * Search users in LaunchDarkly based on their last active date, a user attribute filter set, or a
   * search query.
   *
   * An example user attribute filter set is `filter=firstName:Anna,activeTrial:false`. This matches
   * users that have the user attribute `firstName` set to `Anna`, that also have the attribute
   * `activeTrial` set to `false`.
   *
   * To paginate through results, follow the `next` link in the `_links` object. To learn more, read
   * [Representations](https://launchdarkly.com/docs/api#representations).
   *
   * @returns Users collection response
   *
   * @throws {@link UsersApi.GetSearchUsersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getSearchUsers(
    request: UsersApi.GetSearchUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<Users, UsersApi.GetSearchUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/user-search/{projectKey}/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "after", value: request.after, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "searchAfter", value: request.searchAfter, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersSchema },
        errorFactory: UsersApi.GetSearchUsersError,
      },
      options,
    );
  }

  /**
   * Get user
   *
   * @remarks
   * > ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts
   * instead of users, you should use [Get context
   * instances](https://launchdarkly.com/docs/api/contexts/get-context-instances) instead of this
   * endpoint.
   *
   * Get a user by key. The `user` object contains all attributes sent in `variation` calls for that
   * key.
   *
   * @returns User response
   *
   * @throws {@link UsersApi.GetUserError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getUser(
    request: UsersApi.GetUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UserRecord, UsersApi.GetUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/users/{projectKey}/{environmentKey}/{userKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "userKey", value: request.userKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userRecordSchema },
        errorFactory: UsersApi.GetUserError,
      },
      options,
    );
  }

  /**
   * List users
   *
   * @remarks
   * > ### Use contexts instead > > After you have upgraded your LaunchDarkly SDK to use contexts
   * instead of users, you should use [Search for
   * contexts](https://launchdarkly.com/docs/api/contexts/search-contexts) instead of this endpoint.
   *
   * List all users in the environment. Includes the total count of users. This is useful for
   * exporting all users in the system for further analysis.
   *
   * Each page displays users up to a set `limit`. The default is 20. To page through, follow the
   * `next` link in the `_links` object. To learn more, read
   * [Representations](https://launchdarkly.com/docs/api#representations).
   *
   * @returns Users collection response
   *
   * @throws {@link UsersApi.GetUsersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getUsers(
    request: UsersApi.GetUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersRep, UsersApi.GetUsersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/users/{projectKey}/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "searchAfter", value: request.searchAfter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usersRepSchema },
        errorFactory: UsersApi.GetUsersError,
      },
      options,
    );
  }
}

export namespace UsersApi {
  export type DeleteUserRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The user key */
    userKey: string;
  };

  export class DeleteUserError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteUserError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetSearchUsersRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Full-text search for users based on name, first name, last name, e-mail address, or key */
    q?: string;
    /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
    limit?: number;
    /**
     * Deprecated, use `searchAfter` instead. Specifies the first item to return in the collection.
     *
     * @deprecated
     */
    offset?: number;
    /**
     * A Unix epoch time in milliseconds specifying the maximum last time a user requested a feature
     * flag from LaunchDarkly
     */
    after?: number;
    /**
     * Specifies a field by which to sort. LaunchDarkly supports the `userKey` and `lastSeen`
     * fields. Fields prefixed by a dash ( - ) sort in descending order.
     */
    sort?: string;
    /**
     * Limits results to users with sort values after the value you specify. You can use this for
     * pagination, but we recommend using the `next` link we provide instead.
     */
    searchAfter?: string;
    /**
     * A comma-separated list of user attribute filters. Each filter is in the form of
     * attributeKey:attributeValue
     */
    filter?: string;
  };

  export class GetSearchUsersError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSearchUsersError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetUserRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The user key */
    userKey: string;
  };

  export class GetUserError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUserError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetUsersRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The number of elements to return per page */
    limit?: number;
    /**
     * Limits results to users with sort values after the value you specify. You can use this for
     * pagination, but we recommend using the `next` link we provide instead.
     */
    searchAfter?: string;
  };

  export class GetUsersError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsersError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
