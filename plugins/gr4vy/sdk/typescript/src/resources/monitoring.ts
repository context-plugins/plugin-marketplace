import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  monitoringIncidentUpdateSchema,
  type MonitoringIncidentUpdate,
} from "../models/monitoring-incident-update.js";
import { monitoringIncidentSchema, type MonitoringIncident } from "../models/monitoring-incident.js";
import { monitoringIncidentsSchema, type MonitoringIncidents } from "../models/monitoring-incidents.js";
import {
  monitoringMetricCreateSchema,
  type MonitoringMetricCreate,
} from "../models/monitoring-metric-create.js";
import {
  monitoringMetricUpdateSchema,
  type MonitoringMetricUpdate,
} from "../models/monitoring-metric-update.js";
import { monitoringMetricSchema, type MonitoringMetric } from "../models/monitoring-metric.js";
import { monitoringMetricsSchema, type MonitoringMetrics } from "../models/monitoring-metrics.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import {
  samplesTimestampIntervalSchema,
  type SamplesTimestampInterval,
} from "../models/unions/samples-timestamp-interval.js";
import { search3Schema, type Search3 } from "../models/unions/search3.js";
import { timestampIntervalSchema, type TimestampInterval } from "../models/unions/timestamp-interval.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage monitoring and alerting.
 */
export class Monitoring {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a monitoring metric
   *
   * @remarks
   * Create a monitoring metric with spec model and params.
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.CreateMonitoringMetricError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMonitoringMetric(
    request: Monitoring.CreateMonitoringMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitoringMetric, Monitoring.CreateMonitoringMetricError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/monitoring/metrics"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: monitoringMetricCreateSchema },
      },
      {
        success: { kind: "json", schema: monitoringMetricSchema },
        errorFactory: Monitoring.CreateMonitoringMetricError,
      },
      options,
    );
  }

  /**
   * Delete a monitoring metric
   *
   * @remarks
   * Deletes a monitoring metric.
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.DeleteMonitoringMetricError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMonitoringMetric(
    request: Monitoring.DeleteMonitoringMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Monitoring.DeleteMonitoringMetricError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/monitoring/metrics/{metric_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "metric_id", value: request.metricId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Monitoring.DeleteMonitoringMetricError,
      },
      options,
    );
  }

  /**
   * Get a monitoring incident
   *
   * @remarks
   * Retrieves a monitoring incident
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.GetMonitoringIncidentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMonitoringIncident(
    request: Monitoring.GetMonitoringIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitoringIncident, Monitoring.GetMonitoringIncidentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitoring/incidents/{incident_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "incident_id", value: request.incidentId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitoringIncidentSchema },
        errorFactory: Monitoring.GetMonitoringIncidentError,
      },
      options,
    );
  }

  /**
   * Get a monitoring metric
   *
   * @remarks
   * Retrieves a monitoring metric with a subset of its samples
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.GetMonitoringMetricError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMonitoringMetric(
    request: Monitoring.GetMonitoringMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitoringMetric, Monitoring.GetMonitoringMetricError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitoring/metrics/{metric_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "metric_id", value: request.metricId, schema: s.string() }],
        query: [
          {
            name: "samples_timestamp_interval",
            value: request.samplesTimestampInterval,
            schema: s.optional(s.lazy(() => samplesTimestampIntervalSchema)),
          },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitoringMetricSchema },
        errorFactory: Monitoring.GetMonitoringMetricError,
      },
      options,
    );
  }

  /**
   * List all monitoring incidents
   *
   * @remarks
   * List all monitoring incidents.
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.ListMonitoringIncidentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitoringIncidents(
    request: Monitoring.ListMonitoringIncidentsRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitoringIncidents, Monitoring.ListMonitoringIncidentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitoring/incidents"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          {
            name: "timestamp_interval",
            value: request.timestampInterval,
            schema: s.optional(s.lazy(() => timestampIntervalSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitoringIncidentsSchema },
        errorFactory: Monitoring.ListMonitoringIncidentsError,
      },
      options,
    );
  }

  /**
   * List monitoring incidents for a specific metric
   *
   * @remarks
   * List monitoring incidents for a specific metric.
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.ListMonitoringMetricIncidentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitoringMetricIncidents(
    request: Monitoring.ListMonitoringMetricIncidentsRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitoringIncidents, Monitoring.ListMonitoringMetricIncidentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitoring/metrics/{metric_id}/incidents"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "metric_id", value: request.metricId, schema: s.string() }],
        query: [
          {
            name: "timestamp_interval",
            value: request.timestampInterval,
            schema: s.optional(s.lazy(() => timestampIntervalSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitoringIncidentsSchema },
        errorFactory: Monitoring.ListMonitoringMetricIncidentsError,
      },
      options,
    );
  }

  /**
   * List all monitoring metrics
   *
   * @remarks
   * List all created monitoring metrics.
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.ListMonitoringMetricsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitoringMetrics(
    request: Monitoring.ListMonitoringMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitoringMetrics, Monitoring.ListMonitoringMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/monitoring/metrics"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          { name: "samples_timestamp_interval", value: request.samplesTimestampInterval, schema: s.string() },
          { name: "search", value: request.search, schema: s.optional(s.lazy(() => search3Schema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 5) },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monitoringMetricsSchema },
        errorFactory: Monitoring.ListMonitoringMetricsError,
      },
      options,
    );
  }

  /**
   * Update a monitoring incident
   *
   * @remarks
   * Update a monitoring incident.
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.UpdateMonitoringIncidentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMonitoringIncident(
    request: Monitoring.UpdateMonitoringIncidentRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitoringIncident, Monitoring.UpdateMonitoringIncidentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/monitoring/incidents/{incident_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "incident_id", value: request.incidentId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: monitoringIncidentUpdateSchema },
      },
      {
        success: { kind: "json", schema: monitoringIncidentSchema },
        errorFactory: Monitoring.UpdateMonitoringIncidentError,
      },
      options,
    );
  }

  /**
   * Update a monitoring metric
   *
   * @remarks
   * Update a monitoring metric.
   *
   * @returns Successful Response
   *
   * @throws {@link Monitoring.UpdateMonitoringMetricError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMonitoringMetric(
    request: Monitoring.UpdateMonitoringMetricRequest,
    options?: RequestOptions,
  ): ApiPromise<MonitoringMetric, Monitoring.UpdateMonitoringMetricError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/monitoring/metrics/{metric_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "metric_id", value: request.metricId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: monitoringMetricUpdateSchema },
      },
      {
        success: { kind: "json", schema: monitoringMetricSchema },
        errorFactory: Monitoring.UpdateMonitoringMetricError,
      },
      options,
    );
  }
}

export namespace Monitoring {
  export type CreateMonitoringMetricRequest = {
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: MonitoringMetricCreate;
  };

  export class CreateMonitoringMetricError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMonitoringMetricError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteMonitoringMetricRequest = {
    /** The ID of the metric */
    metricId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class DeleteMonitoringMetricError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMonitoringMetricError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetMonitoringIncidentRequest = {
    /** The ID of the incident */
    incidentId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetMonitoringIncidentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMonitoringIncidentError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetMonitoringMetricRequest = {
    /** The ID of the metric */
    metricId: string;
    /**
     * Timestamp interval for querying a subset of the metric samples. This parameter should be in
     * the format of [ISO 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals)
     * while the duration only format is not accepted. Start and end are either a datetime in ISO
     * 8601 format or a placeholder which is one of the following: `now`, `hour_start` and
     * `hour_end`.
     */
    samplesTimestampInterval?: SamplesTimestampInterval;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetMonitoringMetricError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMonitoringMetricError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListMonitoringIncidentsRequest = {
    /**
     * Filters the incidents to those that were created within the specified interval. This
     * parameter should be in the format of [ISO 8601
     * interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only
     * format is not accepted. Start and end are either a datetime in ISO 8601 format or a
     * placeholder which is one of the following: `now`, `hour_start` and `hour_end`.
     */
    timestampInterval?: TimestampInterval;
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are returned. @default 20 */
    limit?: number;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListMonitoringIncidentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitoringIncidentsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListMonitoringMetricIncidentsRequest = {
    /** The ID of the metric */
    metricId: string;
    /**
     * Filters the incidents to those that were created within the specified interval. This
     * parameter should be in the format of [ISO 8601
     * interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only
     * format is not accepted. Start and end are either a datetime in ISO 8601 format or a
     * placeholder which is one of the following: `now`, `hour_start` and `hour_end`.
     */
    timestampInterval?: TimestampInterval;
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are returned. @default 20 */
    limit?: number;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListMonitoringMetricIncidentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitoringMetricIncidentsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListMonitoringMetricsRequest = {
    /**
     * Filters the samples to the set of data aggregated over the duration of the specified period.
     * This parameter should be in the format of [ISO 8601
     * interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only
     * format is not accepted. Start and end are either a datetime in ISO 8601 format or a
     * placeholder which is one of the following: `now`, `hour_start` and `hour_end`.
     */
    samplesTimestampInterval: string;
    /** The search term to filter monitoring metrics by. */
    search?: Search3;
    /** A pointer to the page of results to return. */
    cursor?: Cursor;
    /** The maximum number of items that are returned. @default 5 */
    limit?: number;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListMonitoringMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitoringMetricsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateMonitoringIncidentRequest = {
    /** The ID of the monitoring incident */
    incidentId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: MonitoringIncidentUpdate;
  };

  export class UpdateMonitoringIncidentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMonitoringIncidentError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateMonitoringMetricRequest = {
    /** The ID of the metric */
    metricId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: MonitoringMetricUpdate;
  };

  export class UpdateMonitoringMetricError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMonitoringMetricError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
