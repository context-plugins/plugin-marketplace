import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flagDefaultsRepSchema, type FlagDefaultsRep } from "../models/flag-defaults-rep.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { projectPostSchema, type ProjectPost } from "../models/project-post.js";
import { projectRepSchema, type ProjectRep } from "../models/project-rep.js";
import { projectSchema, type Project } from "../models/project.js";
import { projectsSchema, type Projects } from "../models/projects.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import {
  upsertFlagDefaultsPayloadSchema,
  type UpsertFlagDefaultsPayload,
} from "../models/upsert-flag-defaults-payload.js";
import { upsertPayloadRepSchema, type UpsertPayloadRep } from "../models/upsert-payload-rep.js";
import type { Servers } from "../servers.js";

/**
 * Projects allow you to manage multiple different software projects under one LaunchDarkly account.
 * Each project has its own unique set of environments and feature flags. To learn more, read
 * [Projects](https://launchdarkly.com/docs/home/account/project).
 *
 * Using the projects API, you can list, create, and manage projects.
 */
export class ProjectsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete project
   *
   * @remarks
   * Delete a project by key. Use this endpoint with caution. Deleting a project will delete all
   * associated environments and feature flags. You cannot delete the last project in an account.
   *
   * @returns Action succeeded
   *
   * @throws {@link ProjectsApi.DeleteProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteProject(
    request: ProjectsApi.DeleteProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ProjectsApi.DeleteProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ProjectsApi.DeleteProjectError,
      },
      options,
    );
  }

  /**
   * Get flag defaults for project
   *
   * @remarks
   * Get the flag defaults for a specific project.
   *
   * @returns Flag defaults response
   *
   * @throws {@link ProjectsApi.GetFlagDefaultsByProjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFlagDefaultsByProject(
    request: ProjectsApi.GetFlagDefaultsByProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<FlagDefaultsRep, ProjectsApi.GetFlagDefaultsByProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/flag-defaults"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flagDefaultsRepSchema },
        errorFactory: ProjectsApi.GetFlagDefaultsByProjectError,
      },
      options,
    );
  }

  /**
   * Get project
   *
   * @remarks
   * Get a single project by key.
   *
   * ### Expanding the project response
   *
   * LaunchDarkly supports one field for expanding the "Get project" response. By default, these
   * fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   * * `environments` includes a paginated list of the project environments.
   *
   * For example, `expand=environments` includes the `environments` field for the project in the
   * response.
   *
   * @returns Project response
   *
   * @throws {@link ProjectsApi.GetProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProject(
    request: ProjectsApi.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, ProjectsApi.GetProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: ProjectsApi.GetProjectError,
      },
      options,
    );
  }

  /**
   * List projects
   *
   * @remarks
   * Return a list of projects.
   *
   * By default, this returns the first 20 projects. Page through this list with the `limit`
   * parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field
   * that returns. If those links do not appear, the pages they refer to don't exist. For example,
   * the `first` and `prev` links will be missing from the response on the first page, because there
   * is no previous page and you cannot return to the first page when you are already on the first
   * page.
   *
   * ### Filtering projects
   *
   * LaunchDarkly supports three fields for filters:
   * - `query` is a string that matches against the projects' names and keys. It is not case
   *   sensitive.
   * - `tags` is a `+`-separated list of project tags. It filters the list of projects that have all
   *   of the tags in the list.
   * - `keys` is a `|` separated list of project keys. It filters the list to projects that have any
   *   of the keys in the list.
   *
   * For example, the filter `filter=query:abc,tags:tag-1+tag-2` matches projects with the string
   * `abc` in their name or key and also are tagged with `tag-1` and `tag-2`. The filter is not
   * case-sensitive.
   *
   * The documented values for `filter` query parameters are prior to URL encoding. For example, the
   * `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.
   *
   * ### Sorting projects
   *
   * LaunchDarkly supports two fields for sorting:
   * - `name` sorts by project name.
   * - `createdOn` sorts by the creation date of the project.
   *
   * For example, `sort=name` sorts the response by project name in ascending order.
   *
   * ### Expanding the projects response
   *
   * LaunchDarkly supports one field for expanding the "List projects" response. By default, these
   * fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * the `environments` field.
   *
   * * `environments` includes a paginated list of the project environments.
   *
   * For example, `expand=environments` includes the `environments` field for each project in the
   * response.
   *
   * @returns Project collection response
   *
   * @throws {@link ProjectsApi.GetProjectsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProjects(
    request: ProjectsApi.GetProjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<Projects, ProjectsApi.GetProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsSchema },
        errorFactory: ProjectsApi.GetProjectsError,
      },
      options,
    );
  }

  /**
   * Update flag default for project
   *
   * @remarks
   * Update a flag default. Updating a flag default uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge
   * patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Flag default response
   *
   * @throws {@link ProjectsApi.PatchFlagDefaultsByProjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchFlagDefaultsByProject(
    request: ProjectsApi.PatchFlagDefaultsByProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<UpsertPayloadRep, ProjectsApi.PatchFlagDefaultsByProjectError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/flag-defaults"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: upsertPayloadRepSchema },
        errorFactory: ProjectsApi.PatchFlagDefaultsByProjectError,
      },
      options,
    );
  }

  /**
   * Update project
   *
   * @remarks
   * Update a project. Updating a project uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an
   * element to the project fields that are arrays, set the `path` to the name of the field and then
   * append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the
   * end of the array.
   *
   * @returns Project response
   *
   * @throws {@link ProjectsApi.PatchProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchProject(
    request: ProjectsApi.PatchProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectRep, ProjectsApi.PatchProjectError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: projectRepSchema },
        errorFactory: ProjectsApi.PatchProjectError,
      },
      options,
    );
  }

  /**
   * Create project
   *
   * @remarks
   * Create a new project with the given key and name. Project keys must be unique within an
   * account.
   *
   * @returns Project response
   *
   * @throws {@link ProjectsApi.PostProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postProject(
    request: ProjectsApi.PostProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectRep, ProjectsApi.PostProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectPostSchema },
      },
      {
        success: { kind: "json", schema: projectRepSchema },
        errorFactory: ProjectsApi.PostProjectError,
      },
      options,
    );
  }

  /**
   * Create or update flag defaults for project
   *
   * @remarks
   * Create or update flag defaults for a project.
   *
   * @returns Flag default response
   *
   * @throws {@link ProjectsApi.PutFlagDefaultsByProjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putFlagDefaultsByProject(
    request: ProjectsApi.PutFlagDefaultsByProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<UpsertPayloadRep, ProjectsApi.PutFlagDefaultsByProjectError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/flag-defaults"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: upsertFlagDefaultsPayloadSchema },
      },
      {
        success: { kind: "json", schema: upsertPayloadRepSchema },
        errorFactory: ProjectsApi.PutFlagDefaultsByProjectError,
      },
      options,
    );
  }
}

export namespace ProjectsApi {
  export type DeleteProjectRequest = {
    /** The project key */
    projectKey: string;
  };

  export class DeleteProjectError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectError> = [
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

  export type GetFlagDefaultsByProjectRequest = {
    /** The project key */
    projectKey: string;
  };

  export class GetFlagDefaultsByProjectError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFlagDefaultsByProjectError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type GetProjectRequest = {
    /** The project key. */
    projectKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     */
    expand?: string;
  };

  export class GetProjectError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectError> = [
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

  export type GetProjectsRequest = {
    /** The number of projects to return in the response. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and returns the next `limit` items.
     */
    offset?: number;
    /** A comma-separated list of filters. Each filter is constructed as `field:value`. */
    filter?: string;
    /**
     * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in
     * descending order.
     */
    sort?: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     */
    expand?: string;
  };

  export class GetProjectsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsError> = [
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

  export type PatchFlagDefaultsByProjectRequest = {
    /** The project key */
    projectKey: string;
    body: PatchOperation[];
  };

  export class PatchFlagDefaultsByProjectError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchFlagDefaultsByProjectError> = [
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

  export type PatchProjectRequest = {
    /** The project key */
    projectKey: string;
    body: PatchOperation[];
  };

  export class PatchProjectError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchProjectError> = [
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

  export type PostProjectRequest = {
    body: ProjectPost;
  };

  export class PostProjectError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostProjectError> = [
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

  export type PutFlagDefaultsByProjectRequest = {
    /** The project key */
    projectKey: string;
    body: UpsertFlagDefaultsPayload;
  };

  export class PutFlagDefaultsByProjectError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutFlagDefaultsByProjectError> = [
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
