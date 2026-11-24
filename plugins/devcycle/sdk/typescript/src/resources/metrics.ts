import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  badRequestErrorResponseSchema,
  type BadRequestErrorResponse,
} from "../models/bad-request-error-response.js";
import {
  conflictErrorResponseSchema,
  type ConflictErrorResponse,
} from "../models/conflict-error-response.js";
import { createMetricDtoInternalSchema, type CreateMetricDto } from "../models/create-metric-dto.js";
import { dimension3Schema, type Dimension3 } from "../models/dimension3.js";
import {
  metricDevCycleManagementMetricsApiInternalSchema,
  type MetricDevCycleManagementMetricsApi,
} from "../models/metric-dev-cycle-management-metrics-api.js";
import { metricResultSchema, type MetricResult } from "../models/metric-result.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import { optimize3Schema, type Optimize3 } from "../models/optimize3.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import { updateMetricDtoInternalSchema, type UpdateMetricDto } from "../models/update-metric-dto.js";
import type { Servers } from "../servers.js";

export class Metrics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Metric
   *
   * @remarks
   * Create a new Metric
   *
   * @throws {@link Metrics.MetricsControllerCreateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricsControllerCreate(
    request: Metrics.MetricsControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metrics"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createMetricDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: metricDevCycleManagementMetricsApiInternalSchema },
        errorFactory: Metrics.MetricsControllerCreateError,
      },
      options,
    );
  }

  /**
   * Fetch results for a Metric
   *
   * @throws {@link Metrics.MetricsControllerFetchResultsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricsControllerFetchResults(
    request: Metrics.MetricsControllerFetchResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricResult, Metrics.MetricsControllerFetchResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metrics/{key}/results"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "startDate", value: request.startDate, schema: s.dateTime() },
          { name: "endDate", value: request.endDate, schema: s.dateTime() },
          { name: "environment", value: request.environment, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricResultSchema },
        errorFactory: Metrics.MetricsControllerFetchResultsError,
      },
      options,
    );
  }

  /**
   * Get All Metrics
   *
   * @throws {@link Metrics.MetricsControllerFindAllError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricsControllerFindAll(
    request: Metrics.MetricsControllerFindAllRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricDevCycleManagementMetricsApi[], Metrics.MetricsControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metrics"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.float64(), 100) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "dimension", value: request.dimension, schema: s.optional(s.lazy(() => dimension3Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => metricDevCycleManagementMetricsApiInternalSchema)),
        },
        errorFactory: Metrics.MetricsControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Get a Metric
   *
   * @throws {@link Metrics.MetricsControllerFindOneError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricsControllerFindOne(
    request: Metrics.MetricsControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metrics/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricDevCycleManagementMetricsApiInternalSchema },
        errorFactory: Metrics.MetricsControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Delete a Metric
   *
   * @throws {@link Metrics.MetricsControllerRemoveError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricsControllerRemove(
    request: Metrics.MetricsControllerRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Metrics.MetricsControllerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metrics/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Metrics.MetricsControllerRemoveError,
      },
      options,
    );
  }

  /**
   * Update a Metric
   *
   * @throws {@link Metrics.MetricsControllerUpdateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  metricsControllerUpdate(
    request: Metrics.MetricsControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricDevCycleManagementMetricsApi, Metrics.MetricsControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{project}/metrics/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateMetricDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: metricDevCycleManagementMetricsApiInternalSchema },
        errorFactory: Metrics.MetricsControllerUpdateError,
      },
      options,
    );
  }

  /**
   * Test Metric Results
   *
   * @remarks
   * Fetch metric results with the given parameters
   *
   * @throws {@link Metrics.TestMetricResultsControllerFetchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testMetricResultsControllerFetch(
    request: Metrics.TestMetricResultsControllerFetchRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricResult, Metrics.TestMetricResultsControllerFetchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{project}/test-metric-results"),
        auth: noneAuth,
        pathParams: [{ name: "project", value: request.project, schema: s.string() }],
        query: [
          { name: "feature", value: request.feature, schema: s.string() },
          { name: "control", value: request.control, schema: s.string() },
          { name: "optimize", value: request.optimize, schema: optimize3Schema },
          { name: "event", value: request.event, schema: s.string() },
          { name: "dimension", value: request.dimension, schema: dimension3Schema },
          { name: "startDate", value: request.startDate, schema: s.dateTime() },
          { name: "endDate", value: request.endDate, schema: s.dateTime() },
          { name: "environment", value: request.environment, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricResultSchema },
        errorFactory: Metrics.TestMetricResultsControllerFetchError,
      },
      options,
    );
  }
}

export namespace Metrics {
  export type MetricsControllerCreateRequest = {
    /** A Project key or ID */
    project: string;
    body: CreateMetricDto;
  };

  export class MetricsControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricsControllerCreateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }

  export type MetricsControllerFetchResultsRequest = {
    key: string;
    /** A Project key or ID */
    project: string;
    feature: string;
    startDate: Date;
    endDate: Date;
    environment?: string;
  };

  export class MetricsControllerFetchResultsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricsControllerFetchResultsError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type MetricsControllerFindAllRequest = {
    /** A Project key or ID */
    project: string;
    /** @default 1 */
    page?: number;
    /** @default 100 */
    perPage?: number;
    /** @default SortBy.CreatedAt */
    sortBy?: SortBy;
    /** @default SortOrder.Desc */
    sortOrder?: SortOrder;
    search?: string;
    dimension?: Dimension3;
  };

  export const metricsControllerFindAllRequestSchema: Schema<MetricsControllerFindAllRequest> = s.lazySchema(
    () =>
      s.object<MetricsControllerFindAllRequest>({
        project: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        dimension: s.optional(s.lazy(() => dimension3Schema)),
      }),
  );

  export class MetricsControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricsControllerFindAllError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type MetricsControllerFindOneRequest = {
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class MetricsControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricsControllerFindOneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type MetricsControllerRemoveRequest = {
    key: string;
    /** A Project key or ID */
    project: string;
  };

  export class MetricsControllerRemoveError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricsControllerRemoveError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type MetricsControllerUpdateRequest = {
    key: string;
    /** A Project key or ID */
    project: string;
    body: UpdateMetricDto;
  };

  export class MetricsControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<MetricsControllerUpdateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type TestMetricResultsControllerFetchRequest = {
    /** A Project key or ID */
    project: string;
    feature: string;
    control: string;
    optimize: Optimize3;
    event: string;
    dimension: Dimension3;
    startDate: Date;
    endDate: Date;
    environment?: string;
  };

  export class TestMetricResultsControllerFetchError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestMetricResultsControllerFetchError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
