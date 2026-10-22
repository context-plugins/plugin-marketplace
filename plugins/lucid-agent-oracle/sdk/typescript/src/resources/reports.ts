import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { problemDetailSchema, type ProblemDetail } from "../models/problem-detail.js";
import { reportLatestResponseSchema, type ReportLatestResponse } from "../models/report-latest-response.js";
import {
  v1OracleReportsVerifyRequestSchema,
  type V1OracleReportsVerifyRequest,
} from "../models/v1-oracle-reports-verify-request.js";
import {
  v1OracleReportsVerifyResponseSchema,
  type V1OracleReportsVerifyResponse,
} from "../models/v1-oracle-reports-verify-response.js";
import type { Servers } from "../servers.js";

/**
 * Signed attestation reports
 */
export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get latest report
   *
   * @remarks
   * Latest signed oracle report with all feed values.
   *
   * @returns Default Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getLatestReport(options?: RequestOptions): ApiPromise<ReportLatestResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/reports/latest"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reportLatestResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Verify oracle report
   *
   * @remarks
   * Verify a signed oracle report envelope — Ed25519 signature + payload integrity + publication
   * status.
   *
   * @returns Default Response
   *
   * @throws {@link Reports.VerifyOracleReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  verifyOracleReport(
    request: Reports.VerifyOracleReportRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleReportsVerifyResponse, Reports.VerifyOracleReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/reports/verify"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1OracleReportsVerifyRequestSchema },
      },
      {
        success: { kind: "json", schema: v1OracleReportsVerifyResponseSchema },
        errorFactory: Reports.VerifyOracleReportError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type VerifyOracleReportRequest = {
    body: V1OracleReportsVerifyRequest;
  };

  export class VerifyOracleReportError extends ApiError {
    declare readonly payload: Declared<"problemDetail", ProblemDetail> | Undeclared;

    static readonly errors: ErrorDecoders<VerifyOracleReportError> = [
      { on: 400, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }
}
