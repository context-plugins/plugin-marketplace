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
  insightsRepositoryCollectionSchema,
  type InsightsRepositoryCollection,
} from "../models/insights-repository-collection.js";
import {
  insightsRepositoryProjectCollectionSchema,
  type InsightsRepositoryProjectCollection,
} from "../models/insights-repository-project-collection.js";
import {
  insightsRepositoryProjectMappingsSchema,
  type InsightsRepositoryProjectMappings,
} from "../models/insights-repository-project-mappings.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import {
  validationFailedErrorRepSchema,
  type ValidationFailedErrorRep,
} from "../models/validation-failed-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * Engineering insights automatically creates repository associations when it receives deployments
 * or code references. Optionally, you can manually configure additional associations. You can use
 * the repositories API to list repositories and create associations to projects. To learn more,
 * read [Send deployment
 * information](https://launchdarkly.com/docs/home/observability/config-deployment).
 */
export class InsightsRepositoriesBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Associate repositories with projects
   *
   * @remarks
   * Associate repositories with projects
   *
   * @returns Repositories projects response
   *
   * @throws {@link InsightsRepositoriesBeta.AssociateRepositoriesAndProjectsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  associateRepositoriesAndProjects(
    request: InsightsRepositoriesBeta.AssociateRepositoriesAndProjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    InsightsRepositoryProjectCollection,
    InsightsRepositoriesBeta.AssociateRepositoriesAndProjectsError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/repositories/projects"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightsRepositoryProjectMappingsSchema },
      },
      {
        success: { kind: "json", schema: insightsRepositoryProjectCollectionSchema },
        errorFactory: InsightsRepositoriesBeta.AssociateRepositoriesAndProjectsError,
      },
      options,
    );
  }

  /**
   * Remove repository project association
   *
   * @remarks
   * Remove repository project association
   *
   * @returns Action succeeded
   *
   * @throws {@link InsightsRepositoriesBeta.DeleteRepositoryProjectError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteRepositoryProject(
    request: InsightsRepositoriesBeta.DeleteRepositoryProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, InsightsRepositoriesBeta.DeleteRepositoryProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/engineering-insights/repositories/{repositoryKey}/projects/{projectKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "repositoryKey", value: request.repositoryKey, schema: s.string() },
          { name: "projectKey", value: request.projectKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: InsightsRepositoriesBeta.DeleteRepositoryProjectError,
      },
      options,
    );
  }

  /**
   * List repositories
   *
   * @remarks
   * Get a list of repositories
   *
   * ### Expanding the repository collection response
   *
   * LaunchDarkly supports expanding the repository collection response to include additional
   * fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `projects` includes details on all of the LaunchDarkly projects associated with each
   *   repository
   *
   * For example, use `?expand=projects` to include the `projects` field in the response. By
   * default, this field is **not** included in the response.
   *
   * @returns Repository collection response
   *
   * @throws {@link InsightsRepositoriesBeta.GetInsightsRepositoriesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInsightsRepositories(
    request: InsightsRepositoriesBeta.GetInsightsRepositoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsRepositoryCollection, InsightsRepositoriesBeta.GetInsightsRepositoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/repositories"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsRepositoryCollectionSchema },
        errorFactory: InsightsRepositoriesBeta.GetInsightsRepositoriesError,
      },
      options,
    );
  }
}

export namespace InsightsRepositoriesBeta {
  export type AssociateRepositoriesAndProjectsRequest = {
    body: InsightsRepositoryProjectMappings;
  };

  export class AssociateRepositoriesAndProjectsError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociateRepositoriesAndProjectsError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type DeleteRepositoryProjectRequest = {
    /** The repository key */
    repositoryKey: string;
    /** The project key */
    projectKey: string;
  };

  export class DeleteRepositoryProjectError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteRepositoryProjectError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetInsightsRepositoriesRequest = {
    /** Expand properties in response. Options: `projects` */
    expand?: string;
  };

  export class GetInsightsRepositoriesError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightsRepositoriesError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
