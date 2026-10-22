import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { branchCollectionRepSchema, type BranchCollectionRep } from "../models/branch-collection-rep.js";
import { branchRepSchema, type BranchRep } from "../models/branch-rep.js";
import {
  extinctionCollectionRepSchema,
  type ExtinctionCollectionRep,
} from "../models/extinction-collection-rep.js";
import { extinctionSchema, type Extinction } from "../models/extinction.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { putBranchSchema, type PutBranch } from "../models/put-branch.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  repositoryCollectionRepSchema,
  type RepositoryCollectionRep,
} from "../models/repository-collection-rep.js";
import { repositoryPostSchema, type RepositoryPost } from "../models/repository-post.js";
import { repositoryRepSchema, type RepositoryRep } from "../models/repository-rep.js";
import {
  statisticCollectionRepSchema,
  type StatisticCollectionRep,
} from "../models/statistic-collection-rep.js";
import { statisticsRootSchema, type StatisticsRoot } from "../models/statistics-root.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Code references is an Enterprise feature > > Code references is available to customers on
 * an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/).
 * To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).
 *
 * > ### Use ld-find-code-refs > > LaunchDarkly provides the [ld-find-code-refs
 * utility](https://github.com/launchdarkly/ld-find-code-refs) that creates repository connections,
 * generates code reference data, and creates calls to the code references API. Most customers do
 * not need to call this API directly.
 *
 * The code references API provides access to all resources related to each connected repository,
 * and associated feature flag code reference data for all branches. To learn more, read [Code
 * references](https://launchdarkly.com/docs/home/observability/code-references).
 */
export class CodeReferences {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete branches
   *
   * @remarks
   * Asynchronously delete a number of branches.
   *
   * @returns Action succeeded
   *
   * @throws {@link CodeReferences.DeleteBranchesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteBranches(
    request: CodeReferences.DeleteBranchesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CodeReferences.DeleteBranchesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories/{repo}/branch-delete-tasks"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "repo", value: request.repo, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "empty" },
        errorFactory: CodeReferences.DeleteBranchesError,
      },
      options,
    );
  }

  /**
   * Delete repository
   *
   * @remarks
   * Delete a repository with the specified name.
   *
   * @returns Action succeeded
   *
   * @throws {@link CodeReferences.DeleteRepositoryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteRepository(
    request: CodeReferences.DeleteRepositoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CodeReferences.DeleteRepositoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories/{repo}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "repo", value: request.repo, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CodeReferences.DeleteRepositoryError,
      },
      options,
    );
  }

  /**
   * Get branch
   *
   * @remarks
   * Get a specific branch in a repository.
   *
   * @returns Branch response
   *
   * @throws {@link CodeReferences.GetBranchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getBranch(
    request: CodeReferences.GetBranchRequest,
    options?: RequestOptions,
  ): ApiPromise<BranchRep, CodeReferences.GetBranchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories/{repo}/branches/{branch}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "repo", value: request.repo, schema: s.string() },
          { name: "branch", value: request.branch, schema: s.string() },
        ],
        query: [
          { name: "projKey", value: request.projKey, schema: s.optional(s.string()) },
          { name: "flagKey", value: request.flagKey, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: branchRepSchema },
        errorFactory: CodeReferences.GetBranchError,
      },
      options,
    );
  }

  /**
   * List branches
   *
   * @remarks
   * Get a list of branches.
   *
   * @returns Branch collection response
   *
   * @throws {@link CodeReferences.GetBranchesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getBranches(
    request: CodeReferences.GetBranchesRequest,
    options?: RequestOptions,
  ): ApiPromise<BranchCollectionRep, CodeReferences.GetBranchesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories/{repo}/branches"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "repo", value: request.repo, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: branchCollectionRepSchema },
        errorFactory: CodeReferences.GetBranchesError,
      },
      options,
    );
  }

  /**
   * List extinctions
   *
   * @remarks
   * Get a list of all extinctions. LaunchDarkly creates an extinction event after you remove all
   * code references to a flag. To learn more, read [About extinction
   * events](https://launchdarkly.com/docs/home/observability/code-references#about-extinction-events).
   *
   * @returns Extinction collection response
   *
   * @throws {@link CodeReferences.GetExtinctionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExtinctions(
    request: CodeReferences.GetExtinctionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExtinctionCollectionRep, CodeReferences.GetExtinctionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/code-refs/extinctions"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "repoName", value: request.repoName, schema: s.optional(s.string()) },
          { name: "branchName", value: request.branchName, schema: s.optional(s.string()) },
          { name: "projKey", value: request.projKey, schema: s.optional(s.string()) },
          { name: "flagKey", value: request.flagKey, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: extinctionCollectionRepSchema },
        errorFactory: CodeReferences.GetExtinctionsError,
      },
      options,
    );
  }

  /**
   * List repositories
   *
   * @remarks
   * Get a list of connected repositories. Optionally, you can include branch metadata with the
   * `withBranches` query parameter. Embed references for the default branch with
   * `ReferencesForDefaultBranch`. You can also filter the list of code references by project key
   * and flag key.
   *
   * @returns Repository collection response
   *
   * @throws {@link CodeReferences.GetRepositoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRepositories(
    request: CodeReferences.GetRepositoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<RepositoryCollectionRep, CodeReferences.GetRepositoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "withBranches", value: request.withBranches, schema: s.optional(s.string()) },
          {
            name: "withReferencesForDefaultBranch",
            value: request.withReferencesForDefaultBranch,
            schema: s.optional(s.string()),
          },
          { name: "projKey", value: request.projKey, schema: s.optional(s.string()) },
          { name: "flagKey", value: request.flagKey, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositoryCollectionRepSchema },
        errorFactory: CodeReferences.GetRepositoriesError,
      },
      options,
    );
  }

  /**
   * Get repository
   *
   * @remarks
   * Get a single repository by name.
   *
   * @returns Repository response
   *
   * @throws {@link CodeReferences.GetRepositoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRepository(
    request: CodeReferences.GetRepositoryRequest,
    options?: RequestOptions,
  ): ApiPromise<RepositoryRep, CodeReferences.GetRepositoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories/{repo}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "repo", value: request.repo, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositoryRepSchema },
        errorFactory: CodeReferences.GetRepositoryError,
      },
      options,
    );
  }

  /**
   * Get links to code reference repositories for each project
   *
   * @remarks
   * Get links for all projects that have code references.
   *
   * @returns Statistic root response
   *
   * @throws {@link CodeReferences.GetRootStatisticError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRootStatistic(
    options?: RequestOptions,
  ): ApiPromise<StatisticsRoot, CodeReferences.GetRootStatisticError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/code-refs/statistics"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statisticsRootSchema },
        errorFactory: CodeReferences.GetRootStatisticError,
      },
      options,
    );
  }

  /**
   * Get code references statistics for flags
   *
   * @remarks
   * Get statistics about all the code references across repositories for all flags in your project
   * that have code references in the default branch, for example, `main`. Optionally, you can
   * include the `flagKey` query parameter to limit your request to statistics about code references
   * for a single flag. This endpoint returns the number of references to your flag keys in your
   * repositories, as well as a link to each repository.
   *
   * @returns Statistic collection response
   *
   * @throws {@link CodeReferences.GetStatisticsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getStatistics(
    request: CodeReferences.GetStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<StatisticCollectionRep, CodeReferences.GetStatisticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/code-refs/statistics/{projectKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [{ name: "flagKey", value: request.flagKey, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statisticCollectionRepSchema },
        errorFactory: CodeReferences.GetStatisticsError,
      },
      options,
    );
  }

  /**
   * Update repository
   *
   * @remarks
   * Update a repository's settings. Updating repository settings uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge
   * patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Repository response
   *
   * @throws {@link CodeReferences.PatchRepositoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchRepository(
    request: CodeReferences.PatchRepositoryRequest,
    options?: RequestOptions,
  ): ApiPromise<RepositoryRep, CodeReferences.PatchRepositoryError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories/{repo}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "repo", value: request.repo, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: repositoryRepSchema },
        errorFactory: CodeReferences.PatchRepositoryError,
      },
      options,
    );
  }

  /**
   * Create extinction
   *
   * @remarks
   * Create a new extinction.
   *
   * @returns Action succeeded
   *
   * @throws {@link CodeReferences.PostExtinctionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postExtinction(
    request: CodeReferences.PostExtinctionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CodeReferences.PostExtinctionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "repo", value: request.repo, schema: s.string() },
          { name: "branch", value: request.branch, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => extinctionSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: CodeReferences.PostExtinctionError,
      },
      options,
    );
  }

  /**
   * Create repository
   *
   * @remarks
   * Create a repository with the specified name.
   *
   * @returns Repository response
   *
   * @throws {@link CodeReferences.PostRepositoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postRepository(
    request: CodeReferences.PostRepositoryRequest,
    options?: RequestOptions,
  ): ApiPromise<RepositoryRep, CodeReferences.PostRepositoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: repositoryPostSchema },
      },
      {
        success: { kind: "json", schema: repositoryRepSchema },
        errorFactory: CodeReferences.PostRepositoryError,
      },
      options,
    );
  }

  /**
   * Upsert branch
   *
   * @remarks
   * Create a new branch if it doesn't exist, or update the branch if it already exists.
   *
   * @returns Action succeeded
   *
   * @throws {@link CodeReferences.PutBranchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putBranch(
    request: CodeReferences.PutBranchRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CodeReferences.PutBranchError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/code-refs/repositories/{repo}/branches/{branch}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "repo", value: request.repo, schema: s.string() },
          { name: "branch", value: request.branch, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: putBranchSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: CodeReferences.PutBranchError,
      },
      options,
    );
  }
}

export namespace CodeReferences {
  export type DeleteBranchesRequest = {
    /** The repository name to delete branches for. */
    repo: string;
    body: string[];
  };

  export class DeleteBranchesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBranchesError> = [
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

  export type DeleteRepositoryRequest = {
    /** The repository name */
    repo: string;
  };

  export class DeleteRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteRepositoryError> = [
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

  export type GetBranchRequest = {
    /** The repository name */
    repo: string;
    /** The url-encoded branch name */
    branch: string;
    /** Filter results to a specific project */
    projKey?: string;
    /** Filter results to a specific flag key */
    flagKey?: string;
  };

  export class GetBranchError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBranchError> = [
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

  export type GetBranchesRequest = {
    /** The repository name */
    repo: string;
  };

  export class GetBranchesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBranchesError> = [
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

  export type GetExtinctionsRequest = {
    /** Filter results to a specific repository */
    repoName?: string;
    /**
     * Filter results to a specific branch. By default, only the default branch will be queried for
     * extinctions.
     */
    branchName?: string;
    /** Filter results to a specific project */
    projKey?: string;
    /** Filter results to a specific flag key */
    flagKey?: string;
    /**
     * Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time
     * in milliseconds. Must be used with `to`.
     */
    from?: number;
    /**
     * Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time
     * in milliseconds. Must be used with `from`.
     */
    to?: number;
  };

  export class GetExtinctionsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExtinctionsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetRepositoriesRequest = {
    /** If set to any value, the endpoint returns repositories with associated branch data */
    withBranches?: string;
    /**
     * If set to any value, the endpoint returns repositories with associated branch data, as well
     * as code references for the default git branch
     */
    withReferencesForDefaultBranch?: string;
    /**
     * A LaunchDarkly project key. If provided, this filters code reference results to the specified
     * project.
     */
    projKey?: string;
    /**
     * If set to any value, the endpoint returns repositories with associated branch data, as well
     * as code references for the default git branch
     */
    flagKey?: string;
  };

  export class GetRepositoriesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRepositoriesError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetRepositoryRequest = {
    /** The repository name */
    repo: string;
  };

  export class GetRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRepositoryError> = [
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

  export class GetRootStatisticError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRootStatisticError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetStatisticsRequest = {
    /** The project key */
    projectKey: string;
    /** Filter results to a specific flag key */
    flagKey?: string;
  };

  export class GetStatisticsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStatisticsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchRepositoryRequest = {
    /** The repository name */
    repo: string;
    body: PatchOperation[];
  };

  export class PatchRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchRepositoryError> = [
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

  export type PostExtinctionRequest = {
    /** The repository name */
    repo: string;
    /** The URL-encoded branch name */
    branch: string;
    body: Extinction[];
  };

  export class PostExtinctionError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostExtinctionError> = [
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

  export type PostRepositoryRequest = {
    body: RepositoryPost;
  };

  export class PostRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostRepositoryError> = [
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

  export type PutBranchRequest = {
    /** The repository name */
    repo: string;
    /** The URL-encoded branch name */
    branch: string;
    body: PutBranch;
  };

  export class PutBranchError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutBranchError> = [
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
