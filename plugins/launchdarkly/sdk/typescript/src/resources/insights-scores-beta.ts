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
  insightGroupCollectionSchema,
  type InsightGroupCollection,
} from "../models/insight-group-collection.js";
import { insightGroupSchema, type InsightGroup } from "../models/insight-group.js";
import { insightScoresSchema, type InsightScores } from "../models/insight-scores.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchFailedErrorRepSchema, type PatchFailedErrorRep } from "../models/patch-failed-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import {
  postInsightGroupParamsSchema,
  type PostInsightGroupParams,
} from "../models/post-insight-group-params.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
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
 * The insights scores API provides scores for data used in engineering insights project metrics. To
 * learn more, read [Project
 * overview](https://launchdarkly.com/docs/home/observability/project-overview) and [Project
 * metrics](https://launchdarkly.com/docs/home/observability/project-metrics).
 */
export class InsightsScoresBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create insight group
   *
   * @remarks
   * Create insight group
   *
   * @returns Created
   *
   * @throws {@link InsightsScoresBeta.CreateInsightGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createInsightGroup(
    request: InsightsScoresBeta.CreateInsightGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightGroup, InsightsScoresBeta.CreateInsightGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/insights/group"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postInsightGroupParamsSchema },
      },
      {
        success: { kind: "json", schema: insightGroupSchema },
        errorFactory: InsightsScoresBeta.CreateInsightGroupError,
      },
      options,
    );
  }

  /**
   * Delete insight group
   *
   * @remarks
   * Delete insight group
   *
   * @returns Action succeeded
   *
   * @throws {@link InsightsScoresBeta.DeleteInsightGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteInsightGroup(
    request: InsightsScoresBeta.DeleteInsightGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, InsightsScoresBeta.DeleteInsightGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/insights/groups/{insightGroupKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "insightGroupKey", value: request.insightGroupKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: InsightsScoresBeta.DeleteInsightGroupError,
      },
      options,
    );
  }

  /**
   * Get insight group
   *
   * @remarks
   * Get insight group
   *
   * ### Expanding the insight group response
   *
   * LaunchDarkly supports expanding the insight group response to include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `scores` includes details on all of the scores used in the engineering insights metrics views
   *   for this group
   * * `environment` includes details on each environment associated with this group
   *
   * For example, use `?expand=scores` to include the `scores` field in the response. By default,
   * this field is **not** included in the response.
   *
   * @returns Insight group response
   *
   * @throws {@link InsightsScoresBeta.GetInsightGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInsightGroup(
    request: InsightsScoresBeta.GetInsightGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightGroup, InsightsScoresBeta.GetInsightGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/insights/groups/{insightGroupKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "insightGroupKey", value: request.insightGroupKey, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightGroupSchema },
        errorFactory: InsightsScoresBeta.GetInsightGroupError,
      },
      options,
    );
  }

  /**
   * List insight groups
   *
   * @remarks
   * List groups for which you are collecting insights
   *
   * ### Expanding the insight groups collection response
   *
   * LaunchDarkly supports expanding the insight groups collection response to include additional
   * fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `scores` includes details on all of the scores used in the engineering insights metrics views
   *   for each group
   * * `environment` includes details on each environment associated with each group
   * * `metadata` includes counts of the number of insight groups with particular indicators, such
   *   as "excellent," "good," "fair," and so on.
   *
   * For example, use `?expand=scores` to include the `scores` field in the response. By default,
   * this field is **not** included in the response.
   *
   * @returns Insight groups collection response
   *
   * @throws {@link InsightsScoresBeta.GetInsightGroupsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInsightGroups(
    request: InsightsScoresBeta.GetInsightGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightGroupCollection, InsightsScoresBeta.GetInsightGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/insights/groups"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightGroupCollectionSchema },
        errorFactory: InsightsScoresBeta.GetInsightGroupsError,
      },
      options,
    );
  }

  /**
   * Get insight scores
   *
   * @remarks
   * Return insights scores, based on the given parameters. This data is also used in engineering
   * insights metrics views.
   *
   * @returns Insight score response
   *
   * @throws {@link InsightsScoresBeta.GetInsightsScoresError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInsightsScores(
    request: InsightsScoresBeta.GetInsightsScoresRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightScores, InsightsScoresBeta.GetInsightsScoresError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/insights/scores"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "applicationKey", value: request.applicationKey, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightScoresSchema },
        errorFactory: InsightsScoresBeta.GetInsightsScoresError,
      },
      options,
    );
  }

  /**
   * Patch insight group
   *
   * @remarks
   * Update an insight group. Updating an insight group uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Insight group response
   *
   * @throws {@link InsightsScoresBeta.PatchInsightGroupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchInsightGroup(
    request: InsightsScoresBeta.PatchInsightGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightGroup, InsightsScoresBeta.PatchInsightGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/insights/groups/{insightGroupKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "insightGroupKey", value: request.insightGroupKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: insightGroupSchema },
        errorFactory: InsightsScoresBeta.PatchInsightGroupError,
      },
      options,
    );
  }
}

export namespace InsightsScoresBeta {
  export type CreateInsightGroupRequest = {
    body: PostInsightGroupParams;
  };

  export class CreateInsightGroupError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInsightGroupError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
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

  export type DeleteInsightGroupRequest = {
    /** The insight group key */
    insightGroupKey: string;
  };

  export class DeleteInsightGroupError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInsightGroupError> = [
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

  export type GetInsightGroupRequest = {
    /** The insight group key */
    insightGroupKey: string;
    /** Options: `scores`, `environment` */
    expand?: string;
  };

  export class GetInsightGroupError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightGroupError> = [
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

  export type GetInsightGroupsRequest = {
    /**
     * The number of insight groups to return. Default is 20. Must be between 1 and 20 inclusive.
     */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * Sort flag list by field. Prefix field with <code>-</code> to sort in descending order.
     * Allowed fields: name
     */
    sort?: string;
    /** Filter list of insights groups by name. */
    query?: string;
    /** Options: `scores`, `environment`, `metadata` */
    expand?: string;
  };

  export class GetInsightGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightGroupsError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetInsightsScoresRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Comma separated list of application keys */
    applicationKey?: string;
  };

  export class GetInsightsScoresError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightsScoresError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchInsightGroupRequest = {
    /** The insight group key */
    insightGroupKey: string;
    body: PatchOperation[];
  };

  export class PatchInsightGroupError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"patchFailedErrorRep", PatchFailedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchInsightGroupError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 422, kind: "patchFailedErrorRep", decode: { kind: "json", schema: patchFailedErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
