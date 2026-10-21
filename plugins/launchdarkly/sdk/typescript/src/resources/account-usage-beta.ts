import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { sdkListRepSchema, type SdkListRep } from "../models/sdk-list-rep.js";
import { sdkVersionListRepSchema, type SdkVersionListRep } from "../models/sdk-version-list-rep.js";
import { seriesListRepFloatSchema, type SeriesListRepFloat } from "../models/series-list-rep-float.js";
import { seriesListRepSchema, type SeriesListRep } from "../models/series-list-rep.js";
import {
  statusServiceUnavailableSchema,
  type StatusServiceUnavailable,
} from "../models/status-service-unavailable.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * The account usage API lets you query for metrics about how your account is using LaunchDarkly. To
 * learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).
 *
 * Each endpoint returns time-series data in the form of an array of data points with timestamps.
 * Each one contains data for that time from one or more series. It also includes a metadata array
 * describing what each of the series is.
 */
export class AccountUsageBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get contexts clientside usage
   *
   * @remarks
   * Get a detailed time series of the number of context key usages observed by LaunchDarkly in your
   * account, including non-primary context kinds. Use this for breakdowns that go beyond the
   * primary-only aggregation of MAU endpoints. The counts reflect data reported by client-side
   * SDKs.<br/><br/>The supported granularity varies by aggregation type. The maximum time range is
   * 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetContextsClientsideUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContextsClientsideUsage(
    request: AccountUsageBeta.GetContextsClientsideUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetContextsClientsideUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/clientside-contexts"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "contextKind", value: request.contextKind, schema: s.optional(s.string()) },
          { name: "sdkName", value: request.sdkName, schema: s.optional(s.string()) },
          { name: "anonymous", value: request.anonymous, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetContextsClientsideUsageError,
      },
      options,
    );
  }

  /**
   * Get contexts serverside usage
   *
   * @remarks
   * Get a detailed time series of the number of context key usages observed by LaunchDarkly in your
   * account, including non-primary context kinds. Use this for breakdowns that go beyond the
   * primary-only aggregation of MAU endpoints. The counts reflect data reported by server-side
   * SDKs.<br/><br/>The supported granularity varies by aggregation type. The maximum time range is
   * 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetContextsServersideUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContextsServersideUsage(
    request: AccountUsageBeta.GetContextsServersideUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetContextsServersideUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/serverside-contexts"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "contextKind", value: request.contextKind, schema: s.optional(s.string()) },
          { name: "sdkName", value: request.sdkName, schema: s.optional(s.string()) },
          { name: "anonymous", value: request.anonymous, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetContextsServersideUsageError,
      },
      options,
    );
  }

  /**
   * Get contexts total usage
   *
   * @remarks
   * Get a detailed time series of the number of context key usages observed by LaunchDarkly in your
   * account, including non-primary context kinds. Use this for breakdowns that go beyond the
   * primary-only aggregation of MAU endpoints.<br/><br/>The supported granularity varies by
   * aggregation type. The maximum time range is 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetContextsTotalUsageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContextsTotalUsage(
    request: AccountUsageBeta.GetContextsTotalUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetContextsTotalUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/total-contexts"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "contextKind", value: request.contextKind, schema: s.optional(s.string()) },
          { name: "sdkName", value: request.sdkName, schema: s.optional(s.string()) },
          { name: "sdkType", value: request.sdkType, schema: s.optional(s.string()) },
          { name: "anonymous", value: request.anonymous, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetContextsTotalUsageError,
      },
      options,
    );
  }

  /**
   * Get data export events usage
   *
   * @remarks
   * Get a time series array showing the number of data export events from your account. The
   * supported granularity varies by aggregation type. The maximum time range is 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetDataExportEventsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDataExportEventsUsage(
    request: AccountUsageBeta.GetDataExportEventsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetDataExportEventsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/data-export-events"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "eventKind", value: request.eventKind, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetDataExportEventsUsageError,
      },
      options,
    );
  }

  /**
   * Get evaluations usage
   *
   * @remarks
   * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation
   * that resulted from that evaluation. The granularity of the data depends on the age of the data
   * requested. If the requested range is within the past two hours, minutely data is returned. If
   * it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetEvaluationsUsageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getEvaluationsUsage(
    request: AccountUsageBeta.GetEvaluationsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetEvaluationsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
        ],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "tz", value: request.tz, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetEvaluationsUsageError,
      },
      options,
    );
  }

  /**
   * Get events usage
   *
   * @remarks
   * Get time-series arrays of the number of times a flag is evaluated, broken down by the variation
   * that resulted from that evaluation. The granularity of the data depends on the age of the data
   * requested. If the requested range is within the past two hours, minutely data is returned. If
   * it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetEventsUsageError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getEventsUsage(
    request: AccountUsageBeta.GetEventsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetEventsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/events/{type}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "type", value: request.type, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetEventsUsageError,
      },
      options,
    );
  }

  /**
   * Get experimentation events usage
   *
   * @remarks
   * Get a time series array showing the number of experimentation events from your account. The
   * supported granularity varies by aggregation type. The maximum time range is 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetExperimentationEventsUsageError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExperimentationEventsUsage(
    request: AccountUsageBeta.GetExperimentationEventsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetExperimentationEventsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/experimentation-events"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "eventKey", value: request.eventKey, schema: s.optional(s.string()) },
          { name: "eventKind", value: request.eventKind, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetExperimentationEventsUsageError,
      },
      options,
    );
  }

  /**
   * Get experimentation keys usage
   *
   * @remarks
   * Get a time series array showing the number of experimentation keys from your account. The
   * supported granularity varies by aggregation type. The maximum time range is 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetExperimentationKeysUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExperimentationKeysUsage(
    request: AccountUsageBeta.GetExperimentationKeysUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetExperimentationKeysUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/experimentation-keys"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "experimentId", value: request.experimentId, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetExperimentationKeysUsageError,
      },
      options,
    );
  }

  /**
   * Get MAU clientside usage
   *
   * @remarks
   * Get a time series of the number of context key usages observed by LaunchDarkly in your account,
   * for the primary context kind only. The counts reflect data reported from client-side
   * SDKs.<br/><br/>For past months, the primary context kind is fixed and reflects the last known
   * primary kind for that month. For the current month, it may vary as new primary context kinds
   * are observed.<br/><br/>The supported granularity varies by aggregation type. The maximum time
   * range is 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetMauClientsideUsageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMauClientsideUsage(
    request: AccountUsageBeta.GetMauClientsideUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetMauClientsideUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/clientside-mau"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "sdkName", value: request.sdkName, schema: s.optional(s.string()) },
          { name: "anonymous", value: request.anonymous, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetMauClientsideUsageError,
      },
      options,
    );
  }

  /**
   * Get MAU total usage
   *
   * @remarks
   * Get a time series of the number of context key usages observed by LaunchDarkly in your account,
   * for the primary context kind only.<br/><br/>For past months, this reflects the context kind
   * that was most recently marked as primary for that month. For the current month, the context
   * kind may vary as new primary kinds are observed.<br/><br/>The supported granularity varies by
   * aggregation type. The maximum time range is 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetMauTotalUsageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMauTotalUsage(
    request: AccountUsageBeta.GetMauTotalUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetMauTotalUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/total-mau"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "sdkName", value: request.sdkName, schema: s.optional(s.string()) },
          { name: "sdkType", value: request.sdkType, schema: s.optional(s.string()) },
          { name: "anonymous", value: request.anonymous, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetMauTotalUsageError,
      },
      options,
    );
  }

  /**
   * Get MAU SDKs by type
   *
   * @remarks
   * Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly
   * active users (MAU) in the requested time period.<br/><br/>Endpoints for retrieving monthly
   * active users (MAU) do not return information about active context instances. After you have
   * upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this
   * endpoint. To learn more, read [Account usage
   * metrics](https://launchdarkly.com/docs/home/account/metrics).
   *
   * @returns MAU SDKs response
   *
   * @throws {@link AccountUsageBeta.GetMauSdksByTypeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMauSdksByType(
    request: AccountUsageBeta.GetMauSdksByTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<SdkListRep, AccountUsageBeta.GetMauSdksByTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/mau/sdks"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "sdktype", value: request.sdktype, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sdkListRepSchema },
        errorFactory: AccountUsageBeta.GetMauSdksByTypeError,
      },
      options,
    );
  }

  /**
   * Get MAU usage
   *
   * @remarks
   * Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from
   * your account. The granularity is always daily.<br/><br/>Endpoints for retrieving monthly active
   * users (MAU) do not return information about active context instances. After you have upgraded
   * your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint.
   * To learn more, read [Account usage
   * metrics](https://launchdarkly.com/docs/home/account/metrics).
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetMauUsageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getMauUsage(
    request: AccountUsageBeta.GetMauUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetMauUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/mau"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "project", value: request.project, schema: s.optional(s.string()) },
          { name: "environment", value: request.environment, schema: s.optional(s.string()) },
          { name: "sdktype", value: request.sdktype, schema: s.optional(s.string()) },
          { name: "sdk", value: request.sdk, schema: s.optional(s.string()) },
          { name: "anonymous", value: request.anonymous, schema: s.optional(s.string()) },
          { name: "groupby", value: request.groupby, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "contextKind", value: request.contextKind, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetMauUsageError,
      },
      options,
    );
  }

  /**
   * Get MAU usage by category
   *
   * @remarks
   * Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from
   * your account, broken down by the category of users. The category is either `browser`, `mobile`,
   * or `backend`.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return
   * information about active context instances. After you have upgraded your LaunchDarkly SDK to
   * use contexts instead of users, you should not rely on this endpoint. To learn more, read
   * [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetMauUsageByCategoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  getMauUsageByCategory(
    request: AccountUsageBeta.GetMauUsageByCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetMauUsageByCategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/mau/bycategory"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetMauUsageByCategoryError,
      },
      options,
    );
  }

  /**
   * Get observability errors usage
   *
   * @remarks
   * Get time-series arrays of the number of observability errors. Supports `daily` and `monthly`
   * granularity.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetObservabilityErrorsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getObservabilityErrorsUsage(
    request: AccountUsageBeta.GetObservabilityErrorsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetObservabilityErrorsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/observability/errors"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetObservabilityErrorsUsageError,
      },
      options,
    );
  }

  /**
   * Get observability logs usage
   *
   * @remarks
   * Get time-series arrays of the number of observability logs. Supports `daily` and `monthly`
   * granularity.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetObservabilityLogsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getObservabilityLogsUsage(
    request: AccountUsageBeta.GetObservabilityLogsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetObservabilityLogsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/observability/logs"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetObservabilityLogsUsageError,
      },
      options,
    );
  }

  /**
   * Get observability sessions usage
   *
   * @remarks
   * Get time-series arrays of the number of observability sessions. Supports `daily` and `monthly`
   * granularity.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetObservabilitySessionsUsageError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getObservabilitySessionsUsage(
    request: AccountUsageBeta.GetObservabilitySessionsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetObservabilitySessionsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/observability/sessions"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetObservabilitySessionsUsageError,
      },
      options,
    );
  }

  /**
   * Get observability traces usage
   *
   * @remarks
   * Get time-series arrays of the number of observability traces. Supports `daily` and `monthly`
   * granularity.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetObservabilityTracesUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getObservabilityTracesUsage(
    request: AccountUsageBeta.GetObservabilityTracesUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetObservabilityTracesUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/observability/traces"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetObservabilityTracesUsageError,
      },
      options,
    );
  }

  /**
   * Get service connections usage
   *
   * @remarks
   * Get a time series array showing the number of service connection minutes from your account. The
   * supported granularity varies by aggregation type. The maximum time range is 365 days.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetServiceConnectionsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getServiceConnectionsUsage(
    request: AccountUsageBeta.GetServiceConnectionsUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRepFloat, AccountUsageBeta.GetServiceConnectionsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/service-connections"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "projectKey", value: request.projectKey, schema: s.optional(s.string()) },
          { name: "environmentKey", value: request.environmentKey, schema: s.optional(s.string()) },
          { name: "connectionType", value: request.connectionType, schema: s.optional(s.string()) },
          { name: "relayVersion", value: request.relayVersion, schema: s.optional(s.string()) },
          { name: "sdkName", value: request.sdkName, schema: s.optional(s.string()) },
          { name: "sdkVersion", value: request.sdkVersion, schema: s.optional(s.string()) },
          { name: "sdkType", value: request.sdkType, schema: s.optional(s.string()) },
          { name: "groupBy", value: request.groupBy, schema: s.optional(s.string()) },
          { name: "aggregationType", value: request.aggregationType, schema: s.optional(s.string()) },
          { name: "granularity", value: request.granularity, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepFloatSchema },
        errorFactory: AccountUsageBeta.GetServiceConnectionsUsageError,
      },
      options,
    );
  }

  /**
   * Get stream usage
   *
   * @remarks
   * Get a time-series array of the number of streaming connections to LaunchDarkly in each time
   * period. The granularity of the data depends on the age of the data requested. If the requested
   * range is within the past two hours, minutely data is returned. If it is within the last two
   * days, hourly data is returned. Otherwise, daily data is returned.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetStreamUsageError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getStreamUsage(
    request: AccountUsageBeta.GetStreamUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetStreamUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/streams/{source}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "source", value: request.source, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "tz", value: request.tz, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetStreamUsageError,
      },
      options,
    );
  }

  /**
   * Get stream usage by SDK version
   *
   * @remarks
   * Get multiple series of the number of streaming connections to LaunchDarkly in each time period,
   * separated by SDK type and version. Information about each series is in the metadata array. The
   * granularity of the data depends on the age of the data requested. If the requested range is
   * within the past 2 hours, minutely data is returned. If it is within the last two days, hourly
   * data is returned. Otherwise, daily data is returned.
   *
   * @returns Usage response
   *
   * @throws {@link AccountUsageBeta.GetStreamUsageBySdkVersionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getStreamUsageBySdkVersion(
    request: AccountUsageBeta.GetStreamUsageBySdkVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<SeriesListRep, AccountUsageBeta.GetStreamUsageBySdkVersionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/streams/{source}/bysdkversion"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "source", value: request.source, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "tz", value: request.tz, schema: s.optional(s.string()) },
          { name: "sdk", value: request.sdk, schema: s.optional(s.string()) },
          { name: "version", value: request.version, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seriesListRepSchema },
        errorFactory: AccountUsageBeta.GetStreamUsageBySdkVersionError,
      },
      options,
    );
  }

  /**
   * Get stream usage SDK versions
   *
   * @remarks
   * Get a list of SDK version objects, which contain an SDK name and version. These are all of the
   * SDKs that have connected to LaunchDarkly from your account in the past 60 days.
   *
   * @returns SDK Versions response
   *
   * @throws {@link AccountUsageBeta.GetStreamUsageSdkversionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getStreamUsageSdkversion(
    request: AccountUsageBeta.GetStreamUsageSdkversionRequest,
    options?: RequestOptions,
  ): ApiPromise<SdkVersionListRep, AccountUsageBeta.GetStreamUsageSdkversionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/usage/streams/{source}/sdkversions"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "source", value: request.source, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sdkVersionListRepSchema },
        errorFactory: AccountUsageBeta.GetStreamUsageSdkversionError,
      },
      options,
    );
  }
}

export namespace AccountUsageBeta {
  export type GetContextsClientsideUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the
     * current time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * A context kind to filter results by. Can be specified multiple times, one query parameter per
     * context kind.
     */
    contextKind?: string;
    /**
     * An SDK name to filter results by. Can be specified multiple times, one query parameter per
     * SDK name.
     */
    sdkName?: string;
    /**
     * An anonymous value to filter results by. Can be specified multiple times, one query parameter
     * per anonymous value.<br/>Valid values: `true`, `false`.
     */
    anonymous?: string;
    /**
     * If specified, returns data for each distinct value of the given field. `contextKind` is
     * always included as a grouping dimension. Can be specified multiple times to group data by
     * multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`,
     * `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
  };

  export class GetContextsClientsideUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextsClientsideUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetContextsServersideUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix seconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix seconds). Defaults to the current
     * time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * A context kind to filter results by. Can be specified multiple times, one query parameter per
     * context kind.
     */
    contextKind?: string;
    /**
     * An SDK name to filter results by. Can be specified multiple times, one query parameter per
     * SDK name.
     */
    sdkName?: string;
    /**
     * An anonymous value to filter results by. Can be specified multiple times, one query parameter
     * per anonymous value.<br/>Valid values: `true`, `false`.
     */
    anonymous?: string;
    /**
     * If specified, returns data for each distinct value of the given field. `contextKind` is
     * always included as a grouping dimension. Can be specified multiple times to group data by
     * multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`,
     * `environmentId`, `sdkName`, `sdkAppId`, `anonymousV2`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
  };

  export class GetContextsServersideUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextsServersideUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetContextsTotalUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the
     * current time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * A context kind to filter results by. Can be specified multiple times, one query parameter per
     * context kind.
     */
    contextKind?: string;
    /**
     * An SDK name to filter results by. Can be specified multiple times, one query parameter per
     * SDK name.
     */
    sdkName?: string;
    /**
     * An SDK type to filter results by. Can be specified multiple times, one query parameter per
     * SDK type.
     */
    sdkType?: string;
    /**
     * An anonymous value to filter results by. Can be specified multiple times, one query parameter
     * per anonymous value.<br/>Valid values: `true`, `false`.
     */
    anonymous?: string;
    /**
     * If specified, returns data for each distinct value of the given field. `contextKind` is
     * always included as a grouping dimension. Can be specified multiple times to group data by
     * multiple dimensions, one query parameter per dimension.<br/>Valid values: `projectId`,
     * `environmentId`, `sdkName`, `sdkType`, `sdkAppId`, `anonymousV2`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
  };

  export class GetContextsTotalUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextsTotalUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetDataExportEventsUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the
     * current time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * An event kind to filter results by. Can be specified multiple times, one query parameter per
     * event kind.
     */
    eventKind?: string;
    /**
     * If specified, returns data for each distinct value of the given field. Can be specified
     * multiple times to group data by multiple dimensions, one query parameter per
     * dimension.<br/>Valid values: `environmentId`, `eventKind`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported
     * with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`.
     */
    granularity?: string;
  };

  export class GetDataExportEventsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDataExportEventsUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetEvaluationsUsageRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The series of data returned starts from this timestamp. Defaults to 30 days ago. */
    from?: string;
    /** The series of data returned ends at this timestamp. Defaults to the current time. */
    to?: string;
    /** The timezone to use for breaks between days when returning daily data. */
    tz?: string;
  };

  export class GetEvaluationsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEvaluationsUsageError> = [
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

  export type GetEventsUsageRequest = {
    /** The type of event to retrieve. Must be either `received` or `published`. */
    type: string;
    /** The series of data returned starts from this timestamp. Defaults to 24 hours ago. */
    from?: string;
    /** The series of data returned ends at this timestamp. Defaults to the current time. */
    to?: string;
  };

  export class GetEventsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEventsUsageError> = [
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

  export type GetExperimentationEventsUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the
     * current time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * An event key to filter results by. Can be specified multiple times, one query parameter per
     * event key.
     */
    eventKey?: string;
    /**
     * An event kind to filter results by. Can be specified multiple times, one query parameter per
     * event kind.
     */
    eventKind?: string;
    /**
     * If specified, returns data for each distinct value of the given field. Can be specified
     * multiple times to group data by multiple dimensions, one query parameter per
     * dimension.<br/>Valid values: `environmentId`, `eventKey`, `eventKind`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported
     * with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`.
     */
    granularity?: string;
  };

  export class GetExperimentationEventsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExperimentationEventsUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetExperimentationKeysUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the
     * current time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * An experiment ID to filter results by. Can be specified multiple times, one query parameter
     * per experiment ID.
     */
    experimentId?: string;
    /**
     * If specified, returns data for each distinct value of the given field. Can be specified
     * multiple times to group data by multiple dimensions, one query parameter per
     * dimension.<br/>Valid values: `projectId`, `environmentId`, `experimentId`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported
     * with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`.
     */
    granularity?: string;
  };

  export class GetExperimentationKeysUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExperimentationKeysUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetMauClientsideUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the
     * current time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * An SDK name to filter results by. Can be specified multiple times, one query parameter per
     * SDK name.
     */
    sdkName?: string;
    /**
     * An anonymous value to filter results by. Can be specified multiple times, one query parameter
     * per anonymous value.<br/>Valid values: `true`, `false`.
     */
    anonymous?: string;
    /**
     * If specified, returns data for each distinct value of the given field. Can be specified
     * multiple times to group data by multiple dimensions, one query parameter per
     * dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkAppId`,
     * `anonymousV2`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
  };

  export class GetMauClientsideUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMauClientsideUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetMauTotalUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the
     * current time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * An SDK name to filter results by. Can be specified multiple times, one query parameter per
     * SDK name.
     */
    sdkName?: string;
    /**
     * An SDK type to filter results by. Can be specified multiple times, one query parameter per
     * SDK type.
     */
    sdkType?: string;
    /**
     * An anonymous value to filter results by. Can be specified multiple times, one query parameter
     * per anonymous value.<br/>Valid values: `true`, `false`.
     */
    anonymous?: string;
    /**
     * If specified, returns data for each distinct value of the given field. Can be specified
     * multiple times to group data by multiple dimensions, one query parameter per
     * dimension.<br/>Valid values: `projectId`, `environmentId`, `sdkName`, `sdkType`, `sdkAppId`,
     * `anonymousV2`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
  };

  export class GetMauTotalUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMauTotalUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetMauSdksByTypeRequest = {
    /**
     * The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in
     * Unix milliseconds, for example, 1656694800000.
     */
    from?: string;
    /**
     * The data returned ends at this timestamp. Defaults to the current time. The timestamp is in
     * Unix milliseconds, for example, 1657904400000.
     */
    to?: string;
    /**
     * The type of SDK with monthly active users (MAU) to list. Must be either `client` or `server`.
     */
    sdktype?: string;
  };

  export class GetMauSdksByTypeError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMauSdksByTypeError> = [
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

  export type GetMauUsageRequest = {
    /** The series of data returned starts from this timestamp. Defaults to 30 days ago. */
    from?: string;
    /** The series of data returned ends at this timestamp. Defaults to the current time. */
    to?: string;
    /**
     * A project key to filter results to. Can be specified multiple times, one query parameter per
     * project key, to view data for multiple projects.
     */
    project?: string;
    /**
     * An environment key to filter results to. When using this parameter, exactly one project key
     * must also be set. Can be specified multiple times as separate query parameters to view data
     * for multiple environments within a single project.
     */
    environment?: string;
    /**
     * An SDK type to filter results to. Can be specified multiple times, one query parameter per
     * SDK type. Valid values: client, server
     */
    sdktype?: string;
    /**
     * An SDK name to filter results to. Can be specified multiple times, one query parameter per
     * SDK.
     */
    sdk?: string;
    /** If specified, filters results to either anonymous or nonanonymous users. */
    anonymous?: string;
    /**
     * If specified, returns data for each distinct value of the given field. Can be specified
     * multiple times to group data by multiple dimensions (for example, to group by both project
     * and SDK). Valid values: project, environment, sdktype, sdk, anonymous, contextKind, sdkAppId
     */
    groupby?: string;
    /**
     * If specified, queries for rolling 30-day, month-to-date, or daily incremental counts. Default
     * is rolling 30-day. Valid values: rolling_30d, month_to_date, daily_incremental
     */
    aggregationType?: string;
    /**
     * Filters results to the specified context kinds. Can be specified multiple times, one query
     * parameter per context kind. If not set, queries for the user context kind.
     */
    contextKind?: string;
  };

  export class GetMauUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMauUsageError> = [
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

  export type GetMauUsageByCategoryRequest = {
    /** The series of data returned starts from this timestamp. Defaults to 30 days ago. */
    from?: string;
    /** The series of data returned ends at this timestamp. Defaults to the current time. */
    to?: string;
  };

  export class GetMauUsageByCategoryError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMauUsageByCategoryError> = [
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

  export type GetObservabilityErrorsUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix seconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix seconds). Defaults to the current
     * time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
  };

  export class GetObservabilityErrorsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObservabilityErrorsUsageError> = [
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

  export type GetObservabilityLogsUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix seconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix seconds). Defaults to the current
     * time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
  };

  export class GetObservabilityLogsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObservabilityLogsUsageError> = [
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

  export type GetObservabilitySessionsUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix seconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix seconds). Defaults to the current
     * time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
  };

  export class GetObservabilitySessionsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObservabilitySessionsUsageError> = [
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

  export type GetObservabilityTracesUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix seconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix seconds). Defaults to the current
     * time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. Valid values depend on
     * `aggregationType`: **month_to_date** supports `daily` and `monthly`; **incremental** and
     * **rolling_30d** support `daily` only.
     */
    granularity?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`, `rolling_30d`.
     */
    aggregationType?: string;
  };

  export class GetObservabilityTracesUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObservabilityTracesUsageError> = [
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

  export type GetServiceConnectionsUsageRequest = {
    /**
     * The series of data returned starts from this timestamp (Unix milliseconds). Defaults to the
     * beginning of the current month.
     */
    from?: string;
    /**
     * The series of data returned ends at this timestamp (Unix milliseconds). Defaults to the
     * current time.
     */
    to?: string;
    /**
     * A project key to filter results by. Can be specified multiple times, one query parameter per
     * project key.
     */
    projectKey?: string;
    /**
     * An environment key to filter results by. If specified, exactly one `projectKey` must be
     * provided. Can be specified multiple times, one query parameter per environment key.
     */
    environmentKey?: string;
    /**
     * A connection type to filter results by. Can be specified multiple times, one query parameter
     * per connection type.
     */
    connectionType?: string;
    /**
     * A relay version to filter results by. Can be specified multiple times, one query parameter
     * per relay version.
     */
    relayVersion?: string;
    /**
     * An SDK name to filter results by. Can be specified multiple times, one query parameter per
     * SDK name.
     */
    sdkName?: string;
    /**
     * An SDK version to filter results by. Can be specified multiple times, one query parameter per
     * SDK version.
     */
    sdkVersion?: string;
    /**
     * An SDK type to filter results by. Can be specified multiple times, one query parameter per
     * SDK type.
     */
    sdkType?: string;
    /**
     * If specified, returns data for each distinct value of the given field. Can be specified
     * multiple times to group data by multiple dimensions, one query parameter per
     * dimension.<br/>Valid values: `projectId`, `environmentId`, `connectionType`, `relayVersion`,
     * `sdkName`, `sdkVersion`, `sdkType`.
     */
    groupBy?: string;
    /**
     * Specifies the aggregation method. Defaults to `month_to_date`.<br/>Valid values:
     * `month_to_date`, `incremental`.
     */
    aggregationType?: string;
    /**
     * Specifies the data granularity. Defaults to `daily`. `monthly` granularity is only supported
     * with the **month_to_date** aggregation type.<br/>Valid values: `daily`, `hourly`, `monthly`.
     */
    granularity?: string;
  };

  export class GetServiceConnectionsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Declared<"statusServiceUnavailable", StatusServiceUnavailable>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetServiceConnectionsUsageError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
      {
        on: 503,
        kind: "statusServiceUnavailable",
        decode: { kind: "json", schema: statusServiceUnavailableSchema },
      },
    ];
  }

  export type GetStreamUsageRequest = {
    /** The source of streaming connections to describe. Must be either `client` or `server`. */
    source: string;
    /** The series of data returned starts from this timestamp. Defaults to 30 days ago. */
    from?: string;
    /** The series of data returned ends at this timestamp. Defaults to the current time. */
    to?: string;
    /** The timezone to use for breaks between days when returning daily data. */
    tz?: string;
  };

  export class GetStreamUsageError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStreamUsageError> = [
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

  export type GetStreamUsageBySdkVersionRequest = {
    /** The source of streaming connections to describe. Must be either `client` or `server`. */
    source: string;
    /** The series of data returned starts from this timestamp. Defaults to 24 hours ago. */
    from?: string;
    /** The series of data returned ends at this timestamp. Defaults to the current time. */
    to?: string;
    /** The timezone to use for breaks between days when returning daily data. */
    tz?: string;
    /** If included, this filters the returned series to only those that match this SDK name. */
    sdk?: string;
    /** If included, this filters the returned series to only those that match this SDK version. */
    version?: string;
  };

  export class GetStreamUsageBySdkVersionError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStreamUsageBySdkVersionError> = [
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

  export type GetStreamUsageSdkversionRequest = {
    /** The source of streaming connections to describe. Must be either `client` or `server`. */
    source: string;
  };

  export class GetStreamUsageSdkversionError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStreamUsageSdkversionError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
