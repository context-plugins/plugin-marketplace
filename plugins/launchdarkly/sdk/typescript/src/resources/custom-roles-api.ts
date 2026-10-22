import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { customRolePostSchema, type CustomRolePost } from "../models/custom-role-post.js";
import { customRoleSchema, type CustomRole } from "../models/custom-role.js";
import { customRolesSchema, type CustomRoles } from "../models/custom-roles.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchWithCommentSchema, type PatchWithComment } from "../models/patch-with-comment.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Custom roles is an Enterprise feature > > Custom roles is available to customers on an
 * Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To
 * upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).
 *
 * Custom roles allow you to create flexible policies providing fine-grained access control to
 * everything in LaunchDarkly, including feature flags, environments, and teams. With roles, it's
 * possible to enforce access policies that meet your exact workflow needs.
 *
 * The custom roles API allows you to create, update, and delete roles. You can also use the API to
 * list roles or get a role by key or ID. This API works with roles that you create, and with
 * [preset roles](https://launchdarkly.com/docs/home/getting-started/vocabulary#preset-roles)
 * provided by LaunchDarkly. You cannot use this API to work with [base
 * roles](https://launchdarkly.com/docs/home/getting-started/vocabulary#base-role).
 *
 * For more information about roles and the syntax for role policies, read the product documentation
 * for [Roles](https://launchdarkly.com/docs/home/account/roles).
 */
export class CustomRolesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete custom role
   *
   * @remarks
   * Delete a custom role by key
   *
   * @returns Action succeeded
   *
   * @throws {@link CustomRolesApi.DeleteCustomRoleError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteCustomRole(
    request: CustomRolesApi.DeleteCustomRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomRolesApi.DeleteCustomRoleError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/roles/{customRoleKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "customRoleKey", value: request.customRoleKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomRolesApi.DeleteCustomRoleError,
      },
      options,
    );
  }

  /**
   * Get custom role
   *
   * @remarks
   * Get a single custom role by key or ID
   *
   * @returns Custom role response
   *
   * @throws {@link CustomRolesApi.GetCustomRoleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCustomRole(
    request: CustomRolesApi.GetCustomRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomRole, CustomRolesApi.GetCustomRoleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/roles/{customRoleKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "customRoleKey", value: request.customRoleKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customRoleSchema },
        errorFactory: CustomRolesApi.GetCustomRoleError,
      },
      options,
    );
  }

  /**
   * List custom roles
   *
   * @remarks
   * Get a complete list of custom roles. This includes project and organization roles that you
   * create, or that are provided as presets by LaunchDarkly. It does not include base roles.
   *
   * @returns Custom roles collection response
   *
   * @throws {@link CustomRolesApi.GetCustomRolesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCustomRoles(
    request: CustomRolesApi.GetCustomRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomRoles, CustomRolesApi.GetCustomRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/roles"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customRolesSchema },
        errorFactory: CustomRolesApi.GetCustomRolesError,
      },
      options,
    );
  }

  /**
   * Update custom role
   *
   * @remarks
   * Update a single custom role. Updating a custom role uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge
   * patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an
   * element to the `policy` array, set the `path` to `/policy` and then append `/<array index>`.
   * Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.
   *
   * @returns Custom role response
   *
   * @throws {@link CustomRolesApi.PatchCustomRoleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchCustomRole(
    request: CustomRolesApi.PatchCustomRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomRole, CustomRolesApi.PatchCustomRoleError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/roles/{customRoleKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "customRoleKey", value: request.customRoleKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchWithCommentSchema },
      },
      {
        success: { kind: "json", schema: customRoleSchema },
        errorFactory: CustomRolesApi.PatchCustomRoleError,
      },
      options,
    );
  }

  /**
   * Create custom role
   *
   * @remarks
   * Create a new custom role
   *
   * @returns Custom role response
   *
   * @throws {@link CustomRolesApi.PostCustomRoleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postCustomRole(
    request: CustomRolesApi.PostCustomRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomRole, CustomRolesApi.PostCustomRoleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/roles"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customRolePostSchema },
      },
      {
        success: { kind: "json", schema: customRoleSchema },
        errorFactory: CustomRolesApi.PostCustomRoleError,
      },
      options,
    );
  }
}

export namespace CustomRolesApi {
  export type DeleteCustomRoleRequest = {
    /** The custom role key */
    customRoleKey: string;
  };

  export class DeleteCustomRoleError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomRoleError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetCustomRoleRequest = {
    /** The custom role key or ID */
    customRoleKey: string;
  };

  export class GetCustomRoleError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomRoleError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetCustomRolesRequest = {
    /** The maximum number of custom roles to return. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset
     * of 10 skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
  };

  export class GetCustomRolesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomRolesError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchCustomRoleRequest = {
    /** The custom role key */
    customRoleKey: string;
    body: PatchWithComment;
  };

  export class PatchCustomRoleError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchCustomRoleError> = [
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

  export type PostCustomRoleRequest = {
    body: CustomRolePost;
  };

  export class PostCustomRoleError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCustomRoleError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
