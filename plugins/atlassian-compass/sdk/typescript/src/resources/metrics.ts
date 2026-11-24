import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseDtoSchema, type ErrorResponseDto } from "../models/error-response-dto.js";
import {
  insertMetricResponseDtoSchema,
  type InsertMetricResponseDto,
} from "../models/insert-metric-response-dto.js";
import {
  compassV1MetricsRequestSchema,
  type CompassV1MetricsRequest,
} from "../models/unions/compass-v1-metrics-request.js";
import type { Servers } from "../servers.js";

/**
 * This resource represents metrics. Use this resource to send metric values into a component's
 * metric source.
 */
export class Metrics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Send metric value
   *
   * @remarks
   * Sends a metric value into a metric source for a component. This API is rate limited. Only 100
   * requests per user per minute are allowed.
   *
   * @returns Returned if the request is successful.
   *
   * @throws {@link Metrics.InsertMetricValueError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  insertMetricValue(
    request: Metrics.InsertMetricValueRequest,
    options?: RequestOptions,
  ): ApiPromise<InsertMetricResponseDto, Metrics.InsertMetricValueError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/compass/v1/metrics"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: compassV1MetricsRequestSchema },
      },
      {
        success: { kind: "json", schema: insertMetricResponseDtoSchema },
        errorFactory: Metrics.InsertMetricValueError,
      },
      options,
    );
  }
}

export namespace Metrics {
  export type InsertMetricValueRequest = {
    body: CompassV1MetricsRequest;
  };

  export class InsertMetricValueError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseDto", ErrorResponseDto>
      | Declared<"errorResponseDto2", ErrorResponseDto>
      | Declared<"errorResponseDto3", ErrorResponseDto>
      | Declared<"insertMetricResponseDto", InsertMetricResponseDto>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsertMetricValueError> = [
      { on: 400, kind: "errorResponseDto", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 403, kind: "errorResponseDto2", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 404, kind: "errorResponseDto3", decode: { kind: "json", schema: errorResponseDtoSchema } },
      {
        on: 429,
        kind: "insertMetricResponseDto",
        decode: { kind: "json", schema: insertMetricResponseDtoSchema },
      },
    ];
  }
}
