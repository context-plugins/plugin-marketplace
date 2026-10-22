import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { environmentPostSchema, type EnvironmentPost } from "../models/environment-post.js";
import { environmentSchema, type Environment } from "../models/environment.js";
import { environmentsSchema, type Environments } from "../models/environments.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import {
  methodNotAllowedErrorRepSchema,
  type MethodNotAllowedErrorRep,
} from "../models/method-not-allowed-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * Environments allow you to maintain separate rollout rules in different contexts, from local
 * development to QA, staging, and production. With the LaunchDarkly Environments API, you can
 * programmatically list, create, and manage environments. To learn more, read
 * [Environments](https://launchdarkly.com/docs/home/account/environment).
 */
export class EnvironmentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete environment
   *
   * @remarks
   * Delete a environment by key.
   *
   * @returns Action succeeded
   *
   * @throws {@link EnvironmentsApi.DeleteEnvironmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteEnvironment(
    request: EnvironmentsApi.DeleteEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EnvironmentsApi.DeleteEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/environments/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EnvironmentsApi.DeleteEnvironmentError,
      },
      options,
    );
  }

  /**
   * Get environment
   *
   * @remarks
   * > ### Approval settings > > The `approvalSettings` key is only returned when
   * [approvals](https://launchdarkly.com/docs/home/releases/approvals) for flags or segments are
   * enabled.
   *
   * Get an environment given a project and key.
   *
   * @returns Environment response
   *
   * @throws {@link EnvironmentsApi.GetEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getEnvironment(
    request: EnvironmentsApi.GetEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, EnvironmentsApi.GetEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/environments/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentSchema },
        errorFactory: EnvironmentsApi.GetEnvironmentError,
      },
      options,
    );
  }

  /**
   * List environments
   *
   * @remarks
   * Return a list of environments for the specified project.
   *
   * By default, this returns the first 20 environments. Page through this list with the `limit`
   * parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field
   * that returns. If those links do not appear, the pages they refer to don't exist. For example,
   * the `first` and `prev` links will be missing from the response on the first page, because there
   * is no previous page and you cannot return to the first page when you are already on the first
   * page.
   *
   * ### Filtering environments
   *
   * LaunchDarkly supports two fields for filters:
   * - `query` is a string that matches against the environments' names and keys. It is not case
   *   sensitive.
   * - `tags` is a `+`-separated list of environment tags. It filters the list of environments that
   *   have all of the tags in the list.
   *
   * For example, the filter `filter=query:abc,tags:tag-1+tag-2` matches environments with the
   * string `abc` in their name or key and also are tagged with `tag-1` and `tag-2`. The filter is
   * not case-sensitive.
   *
   * The documented values for `filter` query parameters are prior to URL encoding. For example, the
   * `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.
   *
   * ### Sorting environments
   *
   * LaunchDarkly supports the following fields for sorting:
   *
   * - `createdOn` sorts by the creation date of the environment.
   * - `critical` sorts by whether the environments are marked as critical.
   * - `name` sorts by environment name.
   *
   * For example, `sort=name` sorts the response by environment name in ascending order.
   *
   * @returns Environments collection response
   *
   * @throws {@link EnvironmentsApi.GetEnvironmentsByProjectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getEnvironmentsByProject(
    request: EnvironmentsApi.GetEnvironmentsByProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Environments, EnvironmentsApi.GetEnvironmentsByProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/environments"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentsSchema },
        errorFactory: EnvironmentsApi.GetEnvironmentsByProjectError,
      },
      options,
    );
  }

  /**
   * Update environment
   *
   * @remarks
   *
   * Update an environment. Updating an environment uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * To update fields in the environment object that are arrays, set the `path` to the name of the
   * field and then append `/<array index>`. Using `/0` appends to the beginning of the array.
   *
   * ### Approval settings
   *
   * This request only returns the `approvalSettings` key if the
   * [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled.
   *
   * Only the `canReviewOwnRequest`, `canApplyDeclinedChanges`, `minNumApprovals`, `required` and
   * `requiredApprovalTagsfields` are editable.
   *
   * If you try to patch the environment by setting both `required` and `requiredApprovalTags`, the
   * request fails and an error appears. You can specify either required approvals for all flags in
   * an environment or those with specific tags, but not both.
   *
   * @returns Environment response
   *
   * @throws {@link EnvironmentsApi.PatchEnvironmentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchEnvironment(
    request: EnvironmentsApi.PatchEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, EnvironmentsApi.PatchEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/environments/{environmentKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: environmentSchema },
        errorFactory: EnvironmentsApi.PatchEnvironmentError,
      },
      options,
    );
  }

  /**
   * Create environment
   *
   * @remarks
   * > ### Approval settings > > The `approvalSettings` key is only returned when the
   * [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled. > > You
   * cannot update approval settings when creating new environments. Update approval settings with
   * the [https://launchdarkly.com/docs/api/environments/patch-environment).
   *
   * Create a new environment in a specified project with a given name, key, swatch color, and
   * default TTL.
   *
   * @returns Environment response
   *
   * @throws {@link EnvironmentsApi.PostEnvironmentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postEnvironment(
    request: EnvironmentsApi.PostEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, EnvironmentsApi.PostEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/environments"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: environmentPostSchema },
      },
      {
        success: { kind: "json", schema: environmentSchema },
        errorFactory: EnvironmentsApi.PostEnvironmentError,
      },
      options,
    );
  }

  /**
   * Reset environment mobile SDK key
   *
   * @remarks
   * Reset an environment's mobile key. The optional expiry for the old key is deprecated for this
   * endpoint, so the old key will always expire immediately.
   *
   * @returns Environment response
   *
   * @throws {@link EnvironmentsApi.ResetEnvironmentMobileKeyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  resetEnvironmentMobileKey(
    request: EnvironmentsApi.ResetEnvironmentMobileKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, EnvironmentsApi.ResetEnvironmentMobileKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/mobileKey",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentSchema },
        errorFactory: EnvironmentsApi.ResetEnvironmentMobileKeyError,
      },
      options,
    );
  }

  /**
   * Reset environment SDK key
   *
   * @remarks
   * Reset an environment's SDK key with an optional expiry time for the old key.
   *
   * @returns Environment response
   *
   * @throws {@link EnvironmentsApi.ResetEnvironmentSdkKeyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  resetEnvironmentSdkKey(
    request: EnvironmentsApi.ResetEnvironmentSdkKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, EnvironmentsApi.ResetEnvironmentSdkKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [{ name: "expiry", value: request.expiry, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentSchema },
        errorFactory: EnvironmentsApi.ResetEnvironmentSdkKeyError,
      },
      options,
    );
  }
}

export namespace EnvironmentsApi {
  export type DeleteEnvironmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class DeleteEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEnvironmentError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetEnvironmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class GetEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEnvironmentError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetEnvironmentsByProjectRequest = {
    /** The project key */
    projectKey: string;
    /** The number of environments to return in the response. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. This is for use with pagination. For example, an offset of 10
     * skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
    /** A comma-separated list of filters. Each filter is of the form `field:value`. */
    filter?: string;
    /**
     * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in
     * descending order.
     */
    sort?: string;
  };

  export class GetEnvironmentsByProjectError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEnvironmentsByProjectError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 405,
        kind: "methodNotAllowedErrorRep",
        decode: { kind: "json", schema: methodNotAllowedErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchEnvironmentRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    body: PatchOperation[];
  };

  export class PatchEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchEnvironmentError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostEnvironmentRequest = {
    /** The project key */
    projectKey: string;
    body: EnvironmentPost;
  };

  export class PostEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostEnvironmentError> = [
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
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type ResetEnvironmentMobileKeyRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
  };

  export class ResetEnvironmentMobileKeyError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResetEnvironmentMobileKeyError> = [
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
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type ResetEnvironmentSdkKeyRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /**
     * The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the
     * key expires immediately. During the period between this call and the time when the old SDK
     * key expires, both the old SDK key and the new SDK key will work.
     */
    expiry?: number;
  };

  export class ResetEnvironmentSdkKeyError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResetEnvironmentSdkKeyError> = [
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
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
