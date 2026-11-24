import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getTimeSeriesServiceStatisticsResultSchema,
  type GetTimeSeriesServiceStatisticsResult,
} from "../models/get-time-series-service-statistics-result.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import {
  timeSeriesServiceStatisticsRequestSchema,
  type TimeSeriesServiceStatisticsRequest,
} from "../models/time-series-service-statistics-request.js";
import type { Servers } from "../servers.js";

export class TimeseriesservicestatisticsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Time Series Service Statistics
   *
   * @remarks
   * Get an aggregation of service statistics defined by a specific time range.
   *
   * @returns Success
   *
   * @throws {@link TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTimeSeriesServiceStatistics(
    request: TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    GetTimeSeriesServiceStatisticsResult,
    TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/TimeSeriesServiceStatistics"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => timeSeriesServiceStatisticsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getTimeSeriesServiceStatisticsResultSchema },
        errorFactory: TimeseriesservicestatisticsApi.GetTimeSeriesServiceStatisticsError,
      },
      options,
    );
  }
}

export namespace TimeseriesservicestatisticsApi {
  export type GetTimeSeriesServiceStatisticsRequest = {
    body?: TimeSeriesServiceStatisticsRequest;
  };

  export class GetTimeSeriesServiceStatisticsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTimeSeriesServiceStatisticsError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
