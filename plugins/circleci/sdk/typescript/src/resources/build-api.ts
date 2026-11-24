import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buildDetailInternalSchema, type BuildDetail } from "../models/build-detail.js";
import { buildSummaryInternalSchema, type BuildSummary } from "../models/build-summary.js";
import { buildInternalSchema, type Build } from "../models/build.js";
import {
  filterCircleCiRestApiV1BuildApiSchema,
  type FilterCircleCiRestApiV1BuildApi,
} from "../models/filter-circle-ci-rest-api-v1-build-api.js";
import {
  projectProjectRequestSchema,
  type ProjectProjectRequest,
} from "../models/project-project-request.js";
import {
  projectProjectTreeBranchRequestSchema,
  type ProjectProjectTreeBranchRequest,
} from "../models/project-project-tree-branch-request.js";
import { vcsTypeSchema, type VcsType } from "../models/vcs-type.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving build details, triggering builds, retrying builds, and canceling builds.
 */
export class BuildApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a build
   *
   * @remarks
   * Cancels a running build.
   *
   * @returns Build cancelled successfully
   *
   * @throws {@link BuildApi.CancelBuildError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelBuild(
    request: BuildApi.CancelBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildSummary, BuildApi.CancelBuildError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/{build_num}/cancel"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
          { name: "build_num", value: request.buildNum, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildSummaryInternalSchema },
        errorFactory: BuildApi.CancelBuildError,
      },
      options,
    );
  }

  /**
   * Get build details
   *
   * @remarks
   * Returns detailed information about a specific build, including its status, steps, and timing
   * information.
   *
   * @returns Successfully retrieved build details
   *
   * @throws {@link BuildApi.GetBuildError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBuild(
    request: BuildApi.GetBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildDetail, BuildApi.GetBuildError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/{build_num}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
          { name: "build_num", value: request.buildNum, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildDetailInternalSchema },
        errorFactory: BuildApi.GetBuildError,
      },
      options,
    );
  }

  /**
   * List builds for a project
   *
   * @remarks
   * Returns a list of the most recent builds for the specified project, with optional filtering by
   * branch.
   *
   * @returns Successfully retrieved builds
   *
   * @throws {@link BuildApi.ListProjectBuildsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjectBuilds(
    request: BuildApi.ListProjectBuildsRequest,
    options?: RequestOptions,
  ): ApiPromise<Build[], BuildApi.ListProjectBuildsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [
          {
            name: "filter",
            value: request.filter,
            schema: s.optional(s.lazy(() => filterCircleCiRestApiV1BuildApiSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 30) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => buildInternalSchema)) },
        errorFactory: BuildApi.ListProjectBuildsError,
      },
      options,
    );
  }

  /**
   * List recent builds across all projects
   *
   * @remarks
   * Returns a list of the most recent builds across all followed projects for the authenticated
   * user.
   *
   * @returns Successfully retrieved recent builds
   *
   * @throws {@link BuildApi.ListRecentBuildsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecentBuilds(
    request: BuildApi.ListRecentBuildsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Build[], BuildApi.ListRecentBuildsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/recent-builds"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 30) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => buildInternalSchema)) },
        errorFactory: BuildApi.ListRecentBuildsError,
      },
      options,
    );
  }

  /**
   * Retry a build
   *
   * @remarks
   * Retries a build using the same configuration and revision as the original build.
   *
   * @returns Build retried successfully
   *
   * @throws {@link BuildApi.RetryBuildError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retryBuild(
    request: BuildApi.RetryBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildSummary, BuildApi.RetryBuildError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/{build_num}/retry"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
          { name: "build_num", value: request.buildNum, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildSummaryInternalSchema },
        errorFactory: BuildApi.RetryBuildError,
      },
      options,
    );
  }

  /**
   * Trigger a build on a branch
   *
   * @remarks
   * Triggers a new build on the specified branch of the project.
   *
   * @returns Build triggered successfully
   *
   * @throws {@link BuildApi.TriggerBranchBuildError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerBranchBuild(
    request: BuildApi.TriggerBranchBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildSummary, BuildApi.TriggerBranchBuildError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/tree/{branch}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
          { name: "branch", value: request.branch, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => projectProjectTreeBranchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: buildSummaryInternalSchema },
        errorFactory: BuildApi.TriggerBranchBuildError,
      },
      options,
    );
  }

  /**
   * Trigger a new build
   *
   * @remarks
   * Triggers a new build for the specified project. Optionally specify a branch, revision, or build
   * parameters.
   *
   * @returns Build triggered successfully
   *
   * @throws {@link BuildApi.TriggerBuildError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerBuild(
    request: BuildApi.TriggerBuildRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildSummary, BuildApi.TriggerBuildError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => projectProjectRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: buildSummaryInternalSchema },
        errorFactory: BuildApi.TriggerBuildError,
      },
      options,
    );
  }
}

export namespace BuildApi {
  export type CancelBuildRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** The build number */
    buildNum: number;
  };

  export class CancelBuildError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CancelBuildError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type GetBuildRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** The build number */
    buildNum: number;
  };

  export class GetBuildError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetBuildError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListProjectBuildsRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** Filter builds by status */
    filter?: FilterCircleCiRestApiV1BuildApi;
    /** Number of builds to return (max 100) @default 30 */
    limit?: number;
    /** Offset for pagination */
    offset?: number;
  };

  export const listProjectBuildsRequestSchema: Schema<ListProjectBuildsRequest> = s.lazySchema(() =>
    s.object<ListProjectBuildsRequest>({
      vcsType: vcsTypeSchema,
      username: s.string(),
      project: s.string(),
      filter: s.optional(s.lazy(() => filterCircleCiRestApiV1BuildApiSchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 30),
      offset: s.optional(s.int().check(s.gte(0))),
    }),
  );

  export class ListProjectBuildsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListProjectBuildsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type ListRecentBuildsRequest = {
    /** Number of builds to return (max 100) @default 30 */
    limit?: number;
    /** Offset for pagination */
    offset?: number;
  };

  export const listRecentBuildsRequestSchema: Schema<ListRecentBuildsRequest> = s.lazySchema(() =>
    s.object<ListRecentBuildsRequest>({
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 30),
      offset: s.optional(s.int().check(s.gte(0))),
    }),
  );

  export class ListRecentBuildsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListRecentBuildsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type RetryBuildRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** The build number */
    buildNum: number;
  };

  export class RetryBuildError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetryBuildError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type TriggerBranchBuildRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** The branch to build */
    branch: string;
    body?: ProjectProjectTreeBranchRequest;
  };

  export class TriggerBranchBuildError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TriggerBranchBuildError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type TriggerBuildRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    body?: ProjectProjectRequest;
  };

  export class TriggerBuildError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TriggerBuildError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
