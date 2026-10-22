import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { problemDetailSchema, type ProblemDetail } from "../models/problem-detail.js";
import {
  v1OracleProtocolsMetricsResponseSchema,
  type V1OracleProtocolsMetricsResponse,
} from "../models/v1-oracle-protocols-metrics-response.js";
import {
  v1OracleProtocolsResponseSchema,
  type V1OracleProtocolsResponse,
} from "../models/v1-oracle-protocols-response.js";
import {
  v1OracleProtocolsResponse1Schema,
  type V1OracleProtocolsResponse1,
} from "../models/v1-oracle-protocols-response1.js";
import type { Servers } from "../servers.js";

/**
 * Protocol registry and metrics
 */
export class ProtocolsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get protocol detail
   *
   * @remarks
   * Retrieve protocol detail including agent and wallet counts.
   *
   * @returns Default Response
   *
   * @throws {@link ProtocolsApi.GetProtocolDetailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProtocolDetail(
    request: ProtocolsApi.GetProtocolDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleProtocolsResponse1, ProtocolsApi.GetProtocolDetailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/protocols/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleProtocolsResponse1Schema },
        errorFactory: ProtocolsApi.GetProtocolDetailError,
      },
      options,
    );
  }

  /**
   * Get protocol metrics
   *
   * @remarks
   * Detailed protocol metrics including agent counts, wallets, evidence, and recent activity.
   * Requires pro tier.
   *
   * @returns Default Response
   *
   * @throws {@link ProtocolsApi.GetProtocolMetricsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProtocolMetrics(
    request: ProtocolsApi.GetProtocolMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleProtocolsMetricsResponse, ProtocolsApi.GetProtocolMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/protocols/{id}/metrics"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleProtocolsMetricsResponseSchema },
        errorFactory: ProtocolsApi.GetProtocolMetricsError,
      },
      options,
    );
  }

  /**
   * List protocols
   *
   * @remarks
   * List all indexed protocols with their chain support and status.
   *
   * @returns Default Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listProtocols(options?: RequestOptions): ApiPromise<V1OracleProtocolsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/protocols"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleProtocolsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProtocolsApi {
  export type GetProtocolDetailRequest = {
    id: string;
  };

  export class GetProtocolDetailError extends ApiError {
    declare readonly payload: Declared<"problemDetail", ProblemDetail> | Undeclared;

    static readonly errors: ErrorDecoders<GetProtocolDetailError> = [
      { on: 404, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }

  export type GetProtocolMetricsRequest = {
    id: string;
  };

  export class GetProtocolMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetail", ProblemDetail>
      | Declared<"problemDetail2", ProblemDetail>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProtocolMetricsError> = [
      { on: 403, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
      { on: 404, kind: "problemDetail2", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }
}
