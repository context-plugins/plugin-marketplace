import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { insightsChartSchema, type InsightsChart } from "../models/insights-chart.js";
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
 * The charts API provides access to the data used in engineering insights project metrics. To learn
 * more, read [Project metrics](https://launchdarkly.com/docs/home/observability/project-metrics).
 */
export class InsightsChartsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get deployment frequency chart data
   *
   * @remarks
   * Get deployment frequency chart data. Engineering insights displays deployment frequency data in
   * the [deployment frequency metric
   * view](https://launchdarkly.com/docs/home/observability/deployments).
   *
   * ### Expanding the chart response
   *
   * LaunchDarkly supports expanding the chart response to include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `metrics` includes details on the metrics related to deployment frequency
   *
   * For example, use `?expand=metrics` to include the `metrics` field in the response. By default,
   * this field is **not** included in the response.
   *
   * @returns Chart response
   *
   * @throws {@link InsightsChartsBeta.GetDeploymentFrequencyChartError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDeploymentFrequencyChart(
    request: InsightsChartsBeta.GetDeploymentFrequencyChartRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsChart, InsightsChartsBeta.GetDeploymentFrequencyChartError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/charts/deployments/frequency"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "applicationKey", value: request.applicationKey, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "bucketType", value: request.bucketType, schema: s.optional(s.string()) },
          { name: "bucketMs", value: request.bucketMs, schema: s.optional(s.int()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsChartSchema },
        errorFactory: InsightsChartsBeta.GetDeploymentFrequencyChartError,
      },
      options,
    );
  }

  /**
   * Get flag status chart data
   *
   * @remarks
   * Get flag status chart data. To learn more, read [Flag
   * statuses](https://launchdarkly.com/docs/home/observability/flag-health#flag-statuses).
   *
   * @returns Chart response
   *
   * @throws {@link InsightsChartsBeta.GetFlagStatusChartError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFlagStatusChart(
    request: InsightsChartsBeta.GetFlagStatusChartRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsChart, InsightsChartsBeta.GetFlagStatusChartError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/charts/flags/status"),
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
        success: { kind: "json", schema: insightsChartSchema },
        errorFactory: InsightsChartsBeta.GetFlagStatusChartError,
      },
      options,
    );
  }

  /**
   * Get lead time chart data
   *
   * @remarks
   * Get lead time chart data. The engineering insights UI displays lead time data in the [lead time
   * metric view](https://launchdarkly.com/docs/home/observability/lead-time).
   *
   * @returns Chart response
   *
   * @throws {@link InsightsChartsBeta.GetLeadTimeChartError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getLeadTimeChart(
    request: InsightsChartsBeta.GetLeadTimeChartRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsChart, InsightsChartsBeta.GetLeadTimeChartError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/charts/lead-time"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "applicationKey", value: request.applicationKey, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "bucketType", value: request.bucketType, schema: s.optional(s.string()) },
          { name: "bucketMs", value: request.bucketMs, schema: s.optional(s.int()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsChartSchema },
        errorFactory: InsightsChartsBeta.GetLeadTimeChartError,
      },
      options,
    );
  }

  /**
   * Get release frequency chart data
   *
   * @remarks
   * Get release frequency chart data. Engineering insights displays release frequency data in the
   * [release frequency metric view](https://launchdarkly.com/docs/home/observability/releases).
   *
   * @returns Chart response
   *
   * @throws {@link InsightsChartsBeta.GetReleaseFrequencyChartError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getReleaseFrequencyChart(
    request: InsightsChartsBeta.GetReleaseFrequencyChartRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsChart, InsightsChartsBeta.GetReleaseFrequencyChartError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/charts/releases/frequency"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "applicationKey", value: request.applicationKey, schema: s.optional(s.string()) },
          { name: "hasExperiments", value: request.hasExperiments, schema: s.optional(s.boolean()) },
          { name: "global", value: request.global, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "bucketType", value: request.bucketType, schema: s.optional(s.string()) },
          { name: "bucketMs", value: request.bucketMs, schema: s.optional(s.int()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsChartSchema },
        errorFactory: InsightsChartsBeta.GetReleaseFrequencyChartError,
      },
      options,
    );
  }

  /**
   * Get stale flags chart data
   *
   * @remarks
   * Get stale flags chart data. Engineering insights displays stale flags data in the [flag health
   * metric view](https://launchdarkly.com/docs/home/observability/flag-health).
   *
   * ### Expanding the chart response
   *
   * LaunchDarkly supports expanding the chart response to include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `metrics` includes details on the metrics related to stale flags
   *
   * For example, use `?expand=metrics` to include the `metrics` field in the response. By default,
   * this field is **not** included in the response.
   *
   * @returns Chart response
   *
   * @throws {@link InsightsChartsBeta.GetStaleFlagsChartError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getStaleFlagsChart(
    request: InsightsChartsBeta.GetStaleFlagsChartRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsChart, InsightsChartsBeta.GetStaleFlagsChartError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/charts/flags/stale"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "applicationKey", value: request.applicationKey, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "maintainerId", value: request.maintainerId, schema: s.optional(s.string()) },
          { name: "maintainerTeamKey", value: request.maintainerTeamKey, schema: s.optional(s.string()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsChartSchema },
        errorFactory: InsightsChartsBeta.GetStaleFlagsChartError,
      },
      options,
    );
  }
}

export namespace InsightsChartsBeta {
  export type GetDeploymentFrequencyChartRequest = {
    /** The project key */
    projectKey?: string;
    /** The environment key */
    environmentKey?: string;
    /** Comma separated list of application keys */
    applicationKey?: string;
    /** Unix timestamp in milliseconds. Default value is 7 days ago. */
    from?: Date;
    /** Unix timestamp in milliseconds. Default value is now. */
    to?: Date;
    /** Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. */
    bucketType?: string;
    /**
     * Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000`
     * milliseconds).
     */
    bucketMs?: number;
    /** Options: `application`, `kind` */
    groupBy?: string;
    /** Options: `metrics` */
    expand?: string;
  };

  export class GetDeploymentFrequencyChartError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDeploymentFrequencyChartError> = [
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

  export type GetFlagStatusChartRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Comma separated list of application keys */
    applicationKey?: string;
  };

  export class GetFlagStatusChartError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFlagStatusChartError> = [
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

  export type GetLeadTimeChartRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey?: string;
    /** Comma separated list of application keys */
    applicationKey?: string;
    /** Unix timestamp in milliseconds. Default value is 7 days ago. */
    from?: number;
    /** Unix timestamp in milliseconds. Default value is now. */
    to?: number;
    /** Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. */
    bucketType?: string;
    /**
     * Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000`
     * milliseconds).
     */
    bucketMs?: number;
    /** Options: `application`, `stage`. Default: `stage`. */
    groupBy?: string;
    /** Options: `metrics`, `percentiles`. */
    expand?: string;
  };

  export class GetLeadTimeChartError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLeadTimeChartError> = [
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

  export type GetReleaseFrequencyChartRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Comma separated list of application keys */
    applicationKey?: string;
    /**
     * Filter events to those associated with an experiment (`true`) or without an experiment
     * (`false`)
     */
    hasExperiments?: boolean;
    /**
     * Filter to include or exclude global events. Default value is `include`. Options: `include`,
     * `exclude`
     */
    global?: string;
    /** Property to group results by. Options: `impact` */
    groupBy?: string;
    /** Unix timestamp in milliseconds. Default value is 7 days ago. */
    from?: Date;
    /** Unix timestamp in milliseconds. Default value is now. */
    to?: Date;
    /** Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`. */
    bucketType?: string;
    /**
     * Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000`
     * milliseconds).
     */
    bucketMs?: number;
    /** Options: `metrics` */
    expand?: string;
  };

  export class GetReleaseFrequencyChartError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReleaseFrequencyChartError> = [
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

  export type GetStaleFlagsChartRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Comma separated list of application keys */
    applicationKey?: string;
    /** Property to group results by. Options: `maintainer` */
    groupBy?: string;
    /** Comma-separated list of individual maintainers to filter results. */
    maintainerId?: string;
    /** Comma-separated list of team maintainer keys to filter results. */
    maintainerTeamKey?: string;
    /** Options: `metrics` */
    expand?: string;
  };

  export class GetStaleFlagsChartError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStaleFlagsChartError> = [
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
