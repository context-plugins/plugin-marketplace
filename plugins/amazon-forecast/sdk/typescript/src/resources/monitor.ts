import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceMonitorApiSchema,
  type XAmzTargetAmazonForecastServiceMonitorApi,
} from "../models/xamz-target-amazon-forecast-service-monitor-api.js";
import {
  xAmzTarget1AmazonForecastServiceMonitorApiSchema,
  type XAmzTarget1AmazonForecastServiceMonitorApi,
} from "../models/xamz-target1-amazon-forecast-service-monitor-api.js";
import {
  xAmzTarget2AmazonForecastServiceMonitorApiSchema,
  type XAmzTarget2AmazonForecastServiceMonitorApi,
} from "../models/xamz-target2-amazon-forecast-service-monitor-api.js";
import {
  xAmzTarget3AmazonForecastServiceMonitorApiSchema,
  type XAmzTarget3AmazonForecastServiceMonitorApi,
} from "../models/xamz-target3-amazon-forecast-service-monitor-api.js";
import type { Servers } from "../servers.js";

export class Monitor {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Monitor
   *
   * @remarks
   * Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring
   * allows you to see how your predictor's performance changes over time. For more information, see
   * Predictor Monitoring.
   *
   * @returns Success
   *
   * @throws {@link Monitor.CreateMonitorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMonitor(
    request: Monitor.CreateMonitorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Monitor.CreateMonitorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateMonitor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceMonitorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Monitor.CreateMonitorError,
      },
      options,
    );
  }

  /**
   * Delete Monitor
   *
   * @remarks
   * Deletes a monitor resource. You can only delete a monitor resource with a status of ACTIVE,
   * ACTIVE_STOPPED, CREATE_FAILED, or CREATE_STOPPED.
   *
   * @returns Success
   *
   * @throws {@link Monitor.DeleteMonitorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMonitor(
    request: Monitor.DeleteMonitorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Monitor.DeleteMonitorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteMonitor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceMonitorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Monitor.DeleteMonitorError,
      },
      options,
    );
  }

  /**
   * Describe Monitor
   *
   * @remarks
   * Describes a monitor resource. In addition to listing the properties provided in the
   * CreateMonitor request, this operation lists the following properties: Baseline CreationTime
   * LastEvaluationTime LastEvaluationState LastModificationTime Message Status
   *
   * @returns Success
   *
   * @throws {@link Monitor.DescribeMonitorError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeMonitor(
    request: Monitor.DescribeMonitorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Monitor.DescribeMonitorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeMonitor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceMonitorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Monitor.DescribeMonitorError,
      },
      options,
    );
  }

  /**
   * List Monitors
   *
   * @remarks
   * Returns a list of monitors created with the CreateMonitor operation and CreateAutoPredictor
   * operation. For each monitor resource, this operation returns of a summary of its properties,
   * including its Amazon Resource Name (ARN). You can retrieve a complete set of properties of a
   * monitor resource by specify the monitor's ARN in the DescribeMonitor operation.
   *
   * @returns Success
   *
   * @throws {@link Monitor.ListMonitorsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMonitors(
    request: Monitor.ListMonitorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Monitor.ListMonitorsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListMonitors"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceMonitorApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Monitor.ListMonitorsError,
      },
      options,
    );
  }
}

export namespace Monitor {
  export type CreateMonitorRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceMonitorApi;
  };

  export class CreateMonitorError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMonitorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteMonitorRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceMonitorApi;
  };

  export class DeleteMonitorError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMonitorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeMonitorRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceMonitorApi;
  };

  export class DescribeMonitorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeMonitorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMonitorsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceMonitorApi;
  };

  export class ListMonitorsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListMonitorsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
