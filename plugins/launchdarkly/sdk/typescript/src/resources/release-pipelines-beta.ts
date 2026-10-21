import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createReleasePipelineInputSchema,
  type CreateReleasePipelineInput,
} from "../models/create-release-pipeline-input.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import {
  releasePipelineCollectionSchema,
  type ReleasePipelineCollection,
} from "../models/release-pipeline-collection.js";
import { releasePipelineSchema, type ReleasePipeline } from "../models/release-pipeline.js";
import {
  releaseProgressionCollectionSchema,
  type ReleaseProgressionCollection,
} from "../models/release-progression-collection.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import {
  updateReleasePipelineInputSchema,
  type UpdateReleasePipelineInput,
} from "../models/update-release-pipeline-input.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * Release pipelines standardize and automate the release process for feature flags across a series
 * of phases, where each phase consists of one or more environments and audiences. Each phase can
 * use an immediate or guarded rollout to a designated audience, and can require approvals for
 * selected environments. You can use release pipelines to ensure that you correctly roll out a flag
 * in one environment before moving on to the next. To learn more, read [Release
 * pipelines](https://launchdarkly.com/docs/home/releases/release-pipelines).
 *
 * Use the release pipelines API to view, create, update, and delete release pipelines. You can also
 * use this API to view the progress of all ongoing releases across all flags in a project for a
 * given release pipeline.
 *
 * ### Creating releases and updating release phases
 *
 * When you add a flag to a release pipeline, you create a new "release" to automate that flag's
 * progress through phases in the pipeline.
 *
 * Use the related [releases API](https://launchdarkly.com/docs/api/releases-beta) to create a new
 * release, or to view or update a release for a given flag. For example, you can use the releases
 * API to add a flag to an existing release pipeline, or to start the next phase of a flag's ongoing
 * release.
 */
export class ReleasePipelinesBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete release pipeline
   *
   * @remarks
   * Deletes a release pipeline.
   *
   * You cannot delete the default release pipeline.
   *
   * If you want to delete a release pipeline that is currently the default, create a second release
   * pipeline and set it as the default. Then delete the first release pipeline. To change the
   * default release pipeline, use the [Update
   * project](https://launchdarkly.com/docs/api/projects/patch-project) API to set the
   * `defaultReleasePipelineKey`.
   *
   * @returns Action succeeded
   *
   * @throws {@link ReleasePipelinesBeta.DeleteReleasePipelineError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteReleasePipeline(
    request: ReleasePipelinesBeta.DeleteReleasePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ReleasePipelinesBeta.DeleteReleasePipelineError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "pipelineKey", value: request.pipelineKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ReleasePipelinesBeta.DeleteReleasePipelineError,
      },
      options,
    );
  }

  /**
   * Get all release pipelines
   *
   * @remarks
   * Get all release pipelines for a project.
   *
   * ### Filtering release pipelines
   *
   * LaunchDarkly supports the following fields for filters:
   *
   * - `query` is a string that matches against the release pipeline `key`, `name`, and
   *   `description`. It is not case sensitive. For example: `?filter=query:examplePipeline`.
   *
   * - `env` is a string that matches an environment key. For example: `?filter=env:production`.
   *
   * @returns Release pipeline collection
   *
   * @throws {@link ReleasePipelinesBeta.GetAllReleasePipelinesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAllReleasePipelines(
    request: ReleasePipelinesBeta.GetAllReleasePipelinesRequest,
    options?: RequestOptions,
  ): ApiPromise<ReleasePipelineCollection, ReleasePipelinesBeta.GetAllReleasePipelinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-pipelines"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: releasePipelineCollectionSchema },
        errorFactory: ReleasePipelinesBeta.GetAllReleasePipelinesError,
      },
      options,
    );
  }

  /**
   * Get release progressions for release pipeline
   *
   * @remarks
   * Get details on the progression of all releases, across all flags, for a release pipeline
   *
   * @returns Release progression collection
   *
   * @throws {@link ReleasePipelinesBeta.GetAllReleaseProgressionsForReleasePipelineError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAllReleaseProgressionsForReleasePipeline(
    request: ReleasePipelinesBeta.GetAllReleaseProgressionsForReleasePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ReleaseProgressionCollection,
    ReleasePipelinesBeta.GetAllReleaseProgressionsForReleasePipelineError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}/releases",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "pipelineKey", value: request.pipelineKey, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: releaseProgressionCollectionSchema },
        errorFactory: ReleasePipelinesBeta.GetAllReleaseProgressionsForReleasePipelineError,
      },
      options,
    );
  }

  /**
   * Get release pipeline by key
   *
   * @remarks
   * Get a release pipeline by key
   *
   * @returns Release pipeline response
   *
   * @throws {@link ReleasePipelinesBeta.GetReleasePipelineByKeyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getReleasePipelineByKey(
    request: ReleasePipelinesBeta.GetReleasePipelineByKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ReleasePipeline, ReleasePipelinesBeta.GetReleasePipelineByKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "pipelineKey", value: request.pipelineKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: releasePipelineSchema },
        errorFactory: ReleasePipelinesBeta.GetReleasePipelineByKeyError,
      },
      options,
    );
  }

  /**
   * Create a release pipeline
   *
   * @remarks
   * Creates a new release pipeline.
   *
   * The first release pipeline you create is automatically set as the default release pipeline for
   * your project. To change the default release pipeline, use the [Update
   * project](https://launchdarkly.com/docs/api/projects/patch-project) API to set the
   * `defaultReleasePipelineKey`.
   *
   * You can create up to 20 release pipelines per project.
   *
   * @returns Release pipeline response
   *
   * @throws {@link ReleasePipelinesBeta.PostReleasePipelineError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postReleasePipeline(
    request: ReleasePipelinesBeta.PostReleasePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<ReleasePipeline, ReleasePipelinesBeta.PostReleasePipelineError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-pipelines"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createReleasePipelineInputSchema },
      },
      {
        success: { kind: "json", schema: releasePipelineSchema },
        errorFactory: ReleasePipelinesBeta.PostReleasePipelineError,
      },
      options,
    );
  }

  /**
   * Update a release pipeline
   *
   * @remarks
   * Updates a release pipeline.
   *
   * @returns Release pipeline response
   *
   * @throws {@link ReleasePipelinesBeta.PutReleasePipelineError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putReleasePipeline(
    request: ReleasePipelinesBeta.PutReleasePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<ReleasePipeline, ReleasePipelinesBeta.PutReleasePipelineError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "pipelineKey", value: request.pipelineKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateReleasePipelineInputSchema },
      },
      {
        success: { kind: "json", schema: releasePipelineSchema },
        errorFactory: ReleasePipelinesBeta.PutReleasePipelineError,
      },
      options,
    );
  }
}

export namespace ReleasePipelinesBeta {
  export type DeleteReleasePipelineRequest = {
    /** The project key */
    projectKey: string;
    /** The release pipeline key */
    pipelineKey: string;
  };

  export class DeleteReleasePipelineError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReleasePipelineError> = [
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type GetAllReleasePipelinesRequest = {
    /** The project key */
    projectKey: string;
    /**
     * A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint
     * description for a full list of available filter fields.
     */
    filter?: string;
    /** The maximum number of items to return. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset
     * of 10 skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
  };

  export class GetAllReleasePipelinesError extends ApiError {
    declare readonly payload: Declared<"notFoundErrorRep", NotFoundErrorRep> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllReleasePipelinesError> = [
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type GetAllReleaseProgressionsForReleasePipelineRequest = {
    /** The project key */
    projectKey: string;
    /** The pipeline key */
    pipelineKey: string;
    /**
     * Accepts filter by `status` and `activePhaseId`. `status` can take a value of `completed` or
     * `active`. `activePhaseId` takes a UUID and will filter results down to releases active on the
     * specified phase. Providing `status equals completed` along with an `activePhaseId` filter
     * will return an error as they are disjoint sets of data. The combination of `status equals
     * active` and `activePhaseId` will return the same results as `activePhaseId` alone.
     */
    filter?: string;
    /** The maximum number of items to return. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset
     * of 10 skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
  };

  export class GetAllReleaseProgressionsForReleasePipelineError extends ApiError {
    declare readonly payload: Declared<"notFoundErrorRep", NotFoundErrorRep> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllReleaseProgressionsForReleasePipelineError> = [
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type GetReleasePipelineByKeyRequest = {
    /** The project key */
    projectKey: string;
    /** The release pipeline key */
    pipelineKey: string;
  };

  export class GetReleasePipelineByKeyError extends ApiError {
    declare readonly payload: Declared<"notFoundErrorRep", NotFoundErrorRep> | Undeclared;

    static readonly errors: ErrorDecoders<GetReleasePipelineByKeyError> = [
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type PostReleasePipelineRequest = {
    /** The project key */
    projectKey: string;
    body: CreateReleasePipelineInput;
  };

  export class PostReleasePipelineError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostReleasePipelineError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
    ];
  }

  export type PutReleasePipelineRequest = {
    /** The project key */
    projectKey: string;
    /** The release pipeline key */
    pipelineKey: string;
    body: UpdateReleasePipelineInput;
  };

  export class PutReleasePipelineError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutReleasePipelineError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }
}
