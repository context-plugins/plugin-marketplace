import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { countedBooleanSchema, type CountedBoolean } from "../models/counted-boolean.js";
import { countedBranchInfoSchema, type CountedBranchInfo } from "../models/counted-branch-info.js";
import {
  countedGitCommitSummarySchema,
  type CountedGitCommitSummary,
} from "../models/counted-git-commit-summary.js";
import {
  countedGitCountResultSchema,
  type CountedGitCountResult,
} from "../models/counted-git-count-result.js";
import { countedGitDiffResultSchema, type CountedGitDiffResult } from "../models/counted-git-diff-result.js";
import {
  countedGitFilesResponseSchema,
  type CountedGitFilesResponse,
} from "../models/counted-git-files-response.js";
import { countedGitInfoSchema, type CountedGitInfo } from "../models/counted-git-info.js";
import {
  countedGitRevertResultSchema,
  type CountedGitRevertResult,
} from "../models/counted-git-revert-result.js";
import { countedGitShowResultSchema, type CountedGitShowResult } from "../models/counted-git-show-result.js";
import {
  countedGitStatusResultSchema,
  type CountedGitStatusResult,
} from "../models/counted-git-status-result.js";
import { countedStringSchema, type CountedString } from "../models/counted-string.js";
import { currentBranchResultSchema, type CurrentBranchResult } from "../models/current-branch-result.js";
import { errorSchema, type Error } from "../models/error.js";
import { gitCommitBodySchema, type GitCommitBody } from "../models/git-commit-body.js";
import { gitRevertParamsSchema, type GitRevertParams } from "../models/git-revert-params.js";
import {
  paginatedGitLogResultSchema,
  type PaginatedGitLogResult,
} from "../models/paginated-git-log-result.js";
import { restApiJsonErrorSchema, type RestApiJsonError } from "../models/rest-api-json-error.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Versioning
 */
export class Versioning {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new commit for pending changes to the Cribl configuration
   *
   * @remarks
   * Create a new commit for pending changes to the Cribl configuration. Any merge conflicts
   * indicated in the response must be resolved using Git.<br/><br/>To commit only a subset of
   * configuration changes, specify the files to include in the commit in the <code>files</code>
   * array.
   *
   * @returns The created GitCommitSummary object in a single-item list.
   *
   * @throws {@link Versioning.CreateVersionCommitError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createVersionCommit(
    request: Versioning.CreateVersionCommitRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedGitCommitSummary, Versioning.CreateVersionCommitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/version/commit"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gitCommitBodySchema },
      },
      {
        success: { kind: "json", schema: countedGitCommitSummarySchema },
        errorFactory: Versioning.CreateVersionCommitError,
      },
      options,
    );
  }

  /**
   * Push local commits to the remote repository
   *
   * @remarks
   * Push all local commits from the local repository to the remote repository.<br/><br/>Requires at
   * least one local commit that has not been pushed. Returns an error if the remote repository
   * cannot be reached or the push is rejected.
   *
   * @returns The created string object in a single-item list.
   *
   * @throws {@link Versioning.CreateVersionPushError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createVersionPush(options?: RequestOptions): ApiPromise<CountedString, Versioning.CreateVersionPushError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/version/push"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedStringSchema },
        errorFactory: Versioning.CreateVersionPushError,
      },
      options,
    );
  }

  /**
   * Revert a commit in the local repository
   *
   * @remarks
   * Revert a commit in the local repository by creating a new commit that undoes the changes
   * introduced by the specified commit.<br/><br/>Use the <code>force</code> field to proceed even
   * when the working directory is not clean.
   *
   * @returns The created GitRevertResult object in a single-item list.
   *
   * @throws {@link Versioning.CreateVersionRevertError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createVersionRevert(
    request: Versioning.CreateVersionRevertRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedGitRevertResult, Versioning.CreateVersionRevertError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/version/revert"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gitRevertParamsSchema },
      },
      {
        success: { kind: "json", schema: countedGitRevertResultSchema },
        errorFactory: Versioning.CreateVersionRevertError,
      },
      options,
    );
  }

  /**
   * Discard uncommitted (staged) changes
   *
   * @remarks
   * Discard all uncommitted (staged) configuration changes, resetting the working directory to the
   * last committed state. Use only if you are certain that you do not need to preserve your local
   * changes.<br/><br/>When applied globally (no group), triggers a Cribl restart to reload the
   * reverted configuration. Returns <code>false</code> if the working directory is already clean.
   *
   * @returns The created boolean object in a single-item list.
   *
   * @throws {@link Versioning.CreateVersionUndoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createVersionUndo(options?: RequestOptions): ApiPromise<CountedBoolean, Versioning.CreateVersionUndoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/version/undo"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedBooleanSchema },
        errorFactory: Versioning.CreateVersionUndoError,
      },
      options,
    );
  }

  /**
   * List the commit history
   *
   * @remarks
   * List the commit history.<br/><br/>Analogous to <code>git log</code> for the Cribl
   * configuration, allowing you to audit and review changes over time.
   *
   * @returns List of GitLogResult objects.
   *
   * @throws {@link Versioning.GetVersionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersion(
    request: Versioning.GetVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedGitLogResult, Versioning.GetVersionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedGitLogResultSchema },
        errorFactory: Versioning.GetVersionError,
      },
      options,
    );
  }

  /**
   * List all branches in the Git repository used for Cribl configuration
   *
   * @remarks
   * Get a list of all branches in the Git repository used for Cribl configuration.
   *
   * @returns The requested BranchInfo object in a single-item list.
   *
   * @throws {@link Versioning.GetVersionBranchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersionBranch(
    options?: RequestOptions,
  ): ApiPromise<CountedBranchInfo, Versioning.GetVersionBranchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version/branch"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedBranchInfoSchema },
        errorFactory: Versioning.GetVersionBranchError,
      },
      options,
    );
  }

  /**
   * Get a count of files that changed since a commit
   *
   * @remarks
   * Get a count of the files that changed since a commit. Default is the latest commit (HEAD).
   *
   * @returns The requested GitCountResult object in a single-item list.
   *
   * @throws {@link Versioning.GetVersionCountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersionCount(
    request: Versioning.GetVersionCountRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedGitCountResult, Versioning.GetVersionCountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version/count"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [{ name: "commit", value: request.commit, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedGitCountResultSchema },
        errorFactory: Versioning.GetVersionCountError,
      },
      options,
    );
  }

  /**
   * Get the name of the Git branch that the Cribl configuration is checked out to
   *
   * @remarks
   * Get the name of the Git branch that the Cribl configuration is checked out to. Useful for
   * verifying the active configuration branch.
   *
   * @returns The requested CurrentBranchResult object.
   *
   * @throws {@link Versioning.GetVersionCurrentBranchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersionCurrentBranch(
    options?: RequestOptions,
  ): ApiPromise<CurrentBranchResult, Versioning.GetVersionCurrentBranchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version/current-branch"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: currentBranchResultSchema },
        errorFactory: Versioning.GetVersionCurrentBranchError,
      },
      options,
    );
  }

  /**
   * Get the diff for a commit
   *
   * @remarks
   * Get the diff for a commit. Default is the latest commit (HEAD).
   *
   * @returns The requested GitDiffResult object in a single-item list.
   *
   * @throws {@link Versioning.GetVersionDiffError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersionDiff(
    request: Versioning.GetVersionDiffRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedGitDiffResult, Versioning.GetVersionDiffError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version/diff"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "commit", value: request.commit, schema: s.optional(s.string()) },
          { name: "filename", value: request.filename, schema: s.optional(s.string()) },
          { name: "diffLineLimit", value: request.diffLineLimit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedGitDiffResultSchema },
        errorFactory: Versioning.GetVersionDiffError,
      },
      options,
    );
  }

  /**
   * Get the names and statuses of files that changed since a commit
   *
   * @remarks
   * Get the names and statuses of files that changed since a commit. Default is the latest commit
   * (HEAD).
   *
   * @returns The requested GitFilesResponse object in a single-item list.
   *
   * @throws {@link Versioning.GetVersionFilesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersionFiles(
    request: Versioning.GetVersionFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedGitFilesResponse, Versioning.GetVersionFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version/files"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [{ name: "commit", value: request.commit, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedGitFilesResponseSchema },
        errorFactory: Versioning.GetVersionFilesError,
      },
      options,
    );
  }

  /**
   * Get the configuration and status for the Git integration
   *
   * @remarks
   * Get the configuration and versioning status for the Git integration for the Cribl
   * configuration.
   *
   * @returns The requested GitInfo object in a single-item list.
   *
   * @throws {@link Versioning.GetVersionInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersionInfo(options?: RequestOptions): ApiPromise<CountedGitInfo, Versioning.GetVersionInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version/info"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedGitInfoSchema },
        errorFactory: Versioning.GetVersionInfoError,
      },
      options,
    );
  }

  /**
   * Get the diff and log message for a commit
   *
   * @remarks
   * Get the diff and log message for a commit. Default is the latest commit (HEAD).
   *
   * @returns The requested GitShowResult object in a single-item list.
   *
   * @throws {@link Versioning.GetVersionShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersionShow(
    request: Versioning.GetVersionShowRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedGitShowResult, Versioning.GetVersionShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version/show"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "commit", value: request.commit, schema: s.optional(s.string()) },
          { name: "filename", value: request.filename, schema: s.optional(s.string()) },
          { name: "diffLineLimit", value: request.diffLineLimit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedGitShowResultSchema },
        errorFactory: Versioning.GetVersionShowError,
      },
      options,
    );
  }

  /**
   * Get the status of the current working tree
   *
   * @remarks
   * Get the status of the current working tree of the Git repository used for Cribl configuration.
   * The response includes details about modified, staged, untracked, and conflicted files, as well
   * as branch and remote tracking information.
   *
   * @returns The requested GitStatusResult object in a single-item list.
   *
   * @throws {@link Versioning.GetVersionStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVersionStatus(
    options?: RequestOptions,
  ): ApiPromise<CountedGitStatusResult, Versioning.GetVersionStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/version/status"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedGitStatusResultSchema },
        errorFactory: Versioning.GetVersionStatusError,
      },
      options,
    );
  }
}

export namespace Versioning {
  export type CreateVersionCommitRequest = {
    /** GitCommitBody object. */
    body: GitCommitBody;
  };

  export class CreateVersionCommitError extends ApiError {
    declare readonly payload:
      | Declared<"restApiJsonError", RestApiJsonError>
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVersionCommitError> = [
      { on: 400, kind: "restApiJsonError", decode: { kind: "json", schema: restApiJsonErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class CreateVersionPushError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateVersionPushError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateVersionRevertRequest = {
    /** GitRevertParams object. */
    body: GitRevertParams;
  };

  export class CreateVersionRevertError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVersionRevertError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class CreateVersionUndoError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVersionUndoError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVersionRequest = {
    /**
     * Maximum number of commits to read from the commit history. When provided, <code>offset</code>
     * and <code>limit</code> are applied to that read set.
     */
    count?: number;
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetVersionError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetVersionBranchError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionBranchError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVersionCountRequest = {
    /** The Git commit hash to use as the starting point for the count. */
    commit?: string;
  };

  export class GetVersionCountError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionCountError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetVersionCurrentBranchError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionCurrentBranchError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVersionDiffRequest = {
    /** The Git commit hash to get the diff for. */
    commit?: string;
    /** The relative path of the file to get the diff for. */
    filename?: string;
    /**
     * Number of lines of the diff to return. Default is 1000. Set to <code>0</code> to return the
     * full diff, regardless of the number of lines.
     */
    diffLineLimit?: number;
  };

  export class GetVersionDiffError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionDiffError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVersionFilesRequest = {
    /** The Git commit hash to use as the starting point for the request. */
    commit?: string;
  };

  export class GetVersionFilesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionFilesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetVersionInfoError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionInfoError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetVersionShowRequest = {
    /** The Git commit hash to retrieve the diff and log message for. */
    commit?: string;
    /** The relative path of the file to get the diff and log message for. */
    filename?: string;
    /**
     * Number of lines of the diff to return. Default is 1000. Set to <code>0</code> to return the
     * full diff, regardless of the number of lines.
     */
    diffLineLimit?: number;
  };

  export class GetVersionShowError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionShowError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetVersionStatusError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionStatusError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
