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
import {
  methodNotAllowedErrorRepSchema,
  type MethodNotAllowedErrorRep,
} from "../models/method-not-allowed-error-rep.js";
import {
  metricGroupCollectionRepSchema,
  type MetricGroupCollectionRep,
} from "../models/metric-group-collection-rep.js";
import { metricGroupPostSchema, type MetricGroupPost } from "../models/metric-group-post.js";
import { metricGroupRepSchema, type MetricGroupRep } from "../models/metric-group-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * Metrics measure audience behaviors affected by the flags in your experiments. Metric groups are
 * reusable, ordered lists of metrics you can use to standardize metrics across multiple
 * experiments. To learn more, read
 * [Metrics](https://launchdarkly.com/docs/home/observability/metrics) and [Metric
 * groups](https://launchdarkly.com/docs/home/observability/metric-groups).
 *
 * Using the metrics API, you can create, delete, and manage metrics and metric groups.
 */
export class MetricsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create metric group
   *
   * @remarks
   * Create a new metric group in the specified project
   *
   * @returns Metric group response
   *
   * @throws {@link MetricsBeta.CreateMetricGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createMetricGroup(
    request: MetricsBeta.CreateMetricGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricGroupRep, MetricsBeta.CreateMetricGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/metric-groups"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: metricGroupPostSchema },
      },
      {
        success: { kind: "json", schema: metricGroupRepSchema },
        errorFactory: MetricsBeta.CreateMetricGroupError,
      },
      options,
    );
  }

  /**
   * Delete metric group
   *
   * @remarks
   * Delete a metric group by key.
   *
   * @returns Action succeeded
   *
   * @throws {@link MetricsBeta.DeleteMetricGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteMetricGroup(
    request: MetricsBeta.DeleteMetricGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MetricsBeta.DeleteMetricGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "metricGroupKey", value: request.metricGroupKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MetricsBeta.DeleteMetricGroupError,
      },
      options,
    );
  }

  /**
   * Get metric group
   *
   * @remarks
   * Get information for a single metric group from the specific project.
   *
   * ### Expanding the metric group response
   * LaunchDarkly supports two fields for expanding the "Get metric group" response. By default,
   * these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * either or both of the following fields:
   *
   * - `experiments` includes all experiments from the specific project that use the metric group
   * - `experimentCount` includes the number of experiments from the specific project that use the
   *   metric group
   *
   * For example, `expand=experiments` includes the `experiments` field in the response.
   *
   * @returns Metric group response
   *
   * @throws {@link MetricsBeta.GetMetricGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMetricGroup(
    request: MetricsBeta.GetMetricGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricGroupRep, MetricsBeta.GetMetricGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "metricGroupKey", value: request.metricGroupKey, schema: s.string() },
        ],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricGroupRepSchema },
        errorFactory: MetricsBeta.GetMetricGroupError,
      },
      options,
    );
  }

  /**
   * List metric groups
   *
   * @remarks
   * Get a list of all metric groups for the specified project.
   *
   * ### Expanding the metric groups response
   *
   * This endpoint does not support response expansion.
   *
   * Although the API accepts an `expand` query parameter for compatibility reasons, it does not
   * currently modify the response. The parameter is reserved for future use.
   *
   * ### Filtering metric groups
   *
   * The `filter` parameter supports the following operators: `contains`, `equals`, `anyOf`.
   *
   * #### Supported fields and operators
   *
   * You can only filter certain fields in metrics when using the `filter` parameter. Additionally,
   * you can only filter some fields with certain operators.
   *
   * When you search for metrics, the `filter` parameter supports the following fields and
   * operators:
   *
   * |<div style="width:120px">Field</div> |Description |Supported operators |
   * |---|---|---|
   * | `experimentStatus` | The experiment's status. One of `not_started`, `running`, `stopped`, `started`. | `equals` |
   * | `hasConnections` | Whether the metric group has connections to experiments or guarded rollouts. One of `true`, `false`. | `equals` |
   * | `kind` | The metric group kind. One of `funnel`, `standard`. | `equals` |
   * | `maintainerIds` | The metric maintainer IDs. | `anyOf` |
   * | `maintainerTeamKey` | The metric maintainer team key. | `equals` |
   * | `query` | A "fuzzy" search across metric group key and name. Supply a string or list of strings to the operator. | `equals` |
   *
   * ### Sorting metric groups
   *
   * LaunchDarkly supports the following fields for sorting:
   *
   * - `name` sorts by metric group name.
   * - `createdAt` sorts by the creation date of the metric group.
   * - `connectionCount` sorts by the number of connections to experiments the metric group has.
   *
   * By default, the sort is in ascending order. Use `-` to sort in descending order. For example,
   * `?sort=name` sorts the response by metric group name in ascending order, and `?sort=-name`
   * sorts in descending order.
   *
   * #### Sample query
   *
   * `filter=experimentStatus equals 'not_started' and query equals 'metric name'`
   *
   * @returns Metric group collection response
   *
   * @throws {@link MetricsBeta.GetMetricGroupsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMetricGroups(
    request: MetricsBeta.GetMetricGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricGroupCollectionRep, MetricsBeta.GetMetricGroupsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/metric-groups"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricGroupCollectionRepSchema },
        errorFactory: MetricsBeta.GetMetricGroupsError,
      },
      options,
    );
  }

  /**
   * Patch metric group
   *
   * @remarks
   * Patch a metric group by key. Updating a metric group uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes.
   *
   * @returns Metric group response
   *
   * @throws {@link MetricsBeta.PatchMetricGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchMetricGroup(
    request: MetricsBeta.PatchMetricGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricGroupRep, MetricsBeta.PatchMetricGroupError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "metricGroupKey", value: request.metricGroupKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: metricGroupRepSchema },
        errorFactory: MetricsBeta.PatchMetricGroupError,
      },
      options,
    );
  }
}

export namespace MetricsBeta {
  export type CreateMetricGroupRequest = {
    /** The project key */
    projectKey: string;
    body: MetricGroupPost;
  };

  export class CreateMetricGroupError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMetricGroupError> = [
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

  export type DeleteMetricGroupRequest = {
    /** The project key */
    projectKey: string;
    /** The metric group key */
    metricGroupKey: string;
  };

  export class DeleteMetricGroupError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMetricGroupError> = [
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

  export type GetMetricGroupRequest = {
    /** The project key */
    projectKey: string;
    /** The metric group key */
    metricGroupKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     */
    expand?: string;
  };

  export class GetMetricGroupError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricGroupError> = [
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

  export type GetMetricGroupsRequest = {
    /** The project key */
    projectKey: string;
    /**
     * Accepts filter by `experimentStatus`, `query`, `kind`, `hasConnections`, `maintainerIds`, and
     * `maintainerTeamKey`. Example: `filter=experimentStatus equals 'running' and query equals
     * 'test'`.
     */
    filter?: string;
    /**
     * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in
     * descending order. Read the endpoint description for a full list of available sort fields.
     */
    sort?: string;
    /**
     * This parameter is reserved for future use and is not currently supported on this endpoint.
     */
    expand?: string;
    /**
     * The number of metric groups to return in the response. Defaults to 20. Maximum limit is 50.
     */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and returns the next `limit` items.
     */
    offset?: number;
  };

  export class GetMetricGroupsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricGroupsError> = [
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

  export type PatchMetricGroupRequest = {
    /** The project key */
    projectKey: string;
    /** The metric group key */
    metricGroupKey: string;
    body: PatchOperation[];
  };

  export class PatchMetricGroupError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"methodNotAllowedErrorRep", MethodNotAllowedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchMetricGroupError> = [
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
}
