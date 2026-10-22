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
import { metricCollectionRepSchema, type MetricCollectionRep } from "../models/metric-collection-rep.js";
import { metricPostSchema, type MetricPost } from "../models/metric-post.js";
import { metricRepSchema, type MetricRep } from "../models/metric-rep.js";
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
 * Metrics track flag behavior over time when an experiment is running. The data generated from
 * experiments gives you more insight into the impact of a particular flag. To learn more, read
 * [Metrics](https://launchdarkly.com/docs/home/observability/metrics).
 *
 * Using the metrics API, you can create, delete, and manage metrics.
 *
 * > ### Metric keys and event keys are different > > LaunchDarkly automatically generates a metric
 * key when you create a metric. You can use the metric key to identify the metric in API calls. > >
 * Custom conversion/binary and custom numeric metrics also require an event key. You can set the
 * event key to anything you want. Adding this event key to your codebase lets your SDK track
 * actions customers take in your app as events. To learn more, read [Sending custom
 * events](https://launchdarkly.com/docs/sdk/features/events).
 *
 * ### Importing metric events
 *
 * The metric import API is separate from the metrics API.
 *
 * The metric import API lets you import metric events from your data pipeline for use with
 * Experimentation and guarded rollouts. This means you can send your already-instrumented metrics
 * into LaunchDarkly without writing and deploying new code for each metric.
 *
 * For details on the metric import API, read [Importing metric
 * events](https://launchdarkly.com/docs/home/observability/import-events).
 *
 * > #### The metric import API uses a different base URL > > The metric import API differs from
 * other LaunchDarkly REST APIs because it uses a different base URL: it requires
 * `https://events.launchdarkly.com` rather than `https://app.launchdarkly.com`. For this reason,
 * the metric import API is also not included as part of LaunchDarkly's [generated client
 * libraries](https://launchdarkly.com/docs/api#openapi-swagger-and-client-libraries), and details
 * are not included in the [OpenAPI
 * specification](https://launchdarkly.com/docs/api/other/get-openapi-spec). To learn more, read
 * [Importing metric events](https://launchdarkly.com/docs/home/observability/import-events).
 */
export class MetricsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete metric
   *
   * @remarks
   * Delete a metric by key.
   *
   * @returns Action succeeded
   *
   * @throws {@link MetricsApi.DeleteMetricError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteMetric(
    request: MetricsApi.DeleteMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MetricsApi.DeleteMetricError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/metrics/{projectKey}/{metricKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "metricKey", value: request.metricKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MetricsApi.DeleteMetricError,
      },
      options,
    );
  }

  /**
   * Get metric
   *
   * @remarks
   * Get information for a single metric from the specific project.
   *
   * ### Expanding the metric response
   * LaunchDarkly supports four fields for expanding the "Get metric" response. By default, these
   * fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a comma-separated list with
   * any of the following fields:
   *
   * - `experiments` includes all experiments from the specific project that use the metric
   * - `experimentCount` includes the number of experiments from the specific project that use the
   *   metric
   * - `metricGroups` includes all metric groups from the specific project that use the metric
   * - `metricGroupCount` includes the number of metric groups from the specific project that use
   *   the metric
   *
   * For example, `expand=experiments` includes the `experiments` field in the response.
   *
   * @returns Metric response
   *
   * @throws {@link MetricsApi.GetMetricError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMetric(
    request: MetricsApi.GetMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricRep, MetricsApi.GetMetricError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/metrics/{projectKey}/{metricKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "metricKey", value: request.metricKey, schema: s.string() },
        ],
        query: [
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "versionId", value: request.versionId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricRepSchema },
        errorFactory: MetricsApi.GetMetricError,
      },
      options,
    );
  }

  /**
   * List metrics
   *
   * @remarks
   * Get a list of all metrics for the specified project.
   *
   * ### Filtering metrics
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
   * | `eventKind` | The metric event kind. One of `custom`, `pageview`, `click`. | `equals` |
   * | `hasConnections` | Whether the metric has connections to experiments or guarded rollouts. One of `true`, `false`. | `equals` |
   * | `isNumeric` | Whether the metric is numeric. One of `true`, `false`. | `equals` |
   * | `maintainerIds` | A comma-separated list of metric maintainer IDs. | `anyOf` |
   * | `maintainerTeamKey` | The metric maintainer team key. | `equals` |
   * | `metricUsedIn` | Filter by where the metric is used. One of `experiments`, `guarded_rollouts`, `any`, `none`. | `equals` |
   * | `query` | A "fuzzy" search across metric key and name. Supply a string or list of strings to the operator. | `equals` |
   * | `tags` | The metric tags. | `contains` |
   * | `unitAggregationType` | The metric's unit aggregation type. One of `sum`, `average`. | `equals` |
   *
   * For example, the filter `?filter=tags contains ["tag1", "tag2", "tag3"]` matches metrics that
   * have all three tags.
   *
   * The documented values for `filter` query parameters are prior to URL encoding. For example, the
   * `[` in `?filter=tags contains ["tag1", "tag2", "tag3"]` must be encoded to `%5B`.
   *
   * ### Expanding the metric list response
   *
   * LaunchDarkly supports expanding the "List metrics" response. By default, the expandable field
   * is **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add the following supported
   * field:
   *
   * - `experimentCount` includes the number of experiments from the specific project that use the
   *   metric
   *
   * For example, `expand=experimentCount` includes the `experimentCount` field for each metric in
   * the response.
   *
   * @returns Metrics collection response
   *
   * @throws {@link MetricsApi.GetMetricsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMetrics(
    request: MetricsApi.GetMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricCollectionRep, MetricsApi.GetMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/metrics/{projectKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricCollectionRepSchema },
        errorFactory: MetricsApi.GetMetricsError,
      },
      options,
    );
  }

  /**
   * Update metric
   *
   * @remarks
   * Patch a metric by key. Updating a metric uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Metric response
   *
   * @throws {@link MetricsApi.PatchMetricError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchMetric(
    request: MetricsApi.PatchMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricRep, MetricsApi.PatchMetricError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/metrics/{projectKey}/{metricKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "metricKey", value: request.metricKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: metricRepSchema },
        errorFactory: MetricsApi.PatchMetricError,
      },
      options,
    );
  }

  /**
   * Create metric
   *
   * @remarks
   * Create a new metric in the specified project. The expected `POST` body differs depending on the
   * specified `kind` property.
   *
   * @returns Metric response
   *
   * @throws {@link MetricsApi.PostMetricError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postMetric(
    request: MetricsApi.PostMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricRep, MetricsApi.PostMetricError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/metrics/{projectKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: metricPostSchema },
      },
      {
        success: { kind: "json", schema: metricRepSchema },
        errorFactory: MetricsApi.PostMetricError,
      },
      options,
    );
  }
}

export namespace MetricsApi {
  export type DeleteMetricRequest = {
    /** The project key */
    projectKey: string;
    /** The metric key */
    metricKey: string;
  };

  export class DeleteMetricError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMetricError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetMetricRequest = {
    /** The project key */
    projectKey: string;
    /** The metric key */
    metricKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     * Supported fields are `experiments`, `experimentCount`, `metricGroups`, `metricGroupCount`,
     * `eventSources`, `guardedRollouts`, `guardedRolloutCount`, `lastUsedInExperiment`, and
     * `lastUsedInGuardedRollout`.
     */
    expand?: string;
    /** The specific version ID of the metric */
    versionId?: string;
  };

  export class GetMetricError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetMetricsRequest = {
    /** The project key */
    projectKey: string;
    /**
     * A comma-separated list of properties that can reveal additional information in the response.
     */
    expand?: string;
    /** The number of metrics to return in the response. Defaults to 20. Maximum limit is 50. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and returns the next `limit` items.
     */
    offset?: number;
    /**
     * A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This
     * endpoint supports sorting by `createdAt` or `name`.
     */
    sort?: string;
    /**
     * A comma-separated list of filters. This endpoint accepts filtering by `query`, `tags`,
     * 'eventKind', 'isNumeric', 'unitAggregationType`, `hasConnections`, `maintainerIds`,
     * `maintainerTeamKey`, `view`, `dataSourceKeys`, and `metricUsedIn`. To learn more about the
     * filter syntax, read the 'Filtering metrics' section above.
     */
    filter?: string;
  };

  export class GetMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMetricsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type PatchMetricRequest = {
    /** The project key */
    projectKey: string;
    /** The metric key */
    metricKey: string;
    body: PatchOperation[];
  };

  export class PatchMetricError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchMetricError> = [
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

  export type PostMetricRequest = {
    /** The project key */
    projectKey: string;
    body: MetricPost;
  };

  export class PostMetricError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostMetricError> = [
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
