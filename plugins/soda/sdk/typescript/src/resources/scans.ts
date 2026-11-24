import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiScanLogsResponseSchema,
  type PublicApiScanLogsResponse,
} from "../models/public-api-scan-logs-response.js";
import {
  publicApiScanStatusResponseSchema,
  type PublicApiScanStatusResponse,
} from "../models/public-api-scan-status-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Scan Endpoints
 */
export class Scans {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a scan
   *
   * @remarks
   * This endpoint enables you to cancel a scan.
   *
   * Depending on the state of the scan when you call this endpoint, the response returns one of the
   * following:
   *
   * - Where the state is `pending`, Soda immediately changes the state to `canceled`.
   *
   * - Where the state is `submitted`, Soda immediately changes the state to `cancelationRequested`.
   *   - Where the scan is in any other state, the endpoint returns a `400` (Bad request) response.
   *
   * This DELETE uses the following parameters to provide specific details:
   *
   * - `scanId`: Use the value of `X-Soda-Scan-Id` returned as part of the `201` response when you
   *   called the **Trigger a scan** endpoint.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Scans`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Scans.DeleteApiV1ScansScanIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1ScansScanId(
    request: Scans.DeleteApiV1ScansScanIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Scans.DeleteApiV1ScansScanIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/scans/{scanId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "scanId", value: request.scanId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Scans.DeleteApiV1ScansScanIdError,
      },
      options,
    );
  }

  /**
   * Get scan status
   *
   * @remarks
   * This endpoint enables you to check on the state of a scan that you executed using the **Trigger
   * a scan** endpoint. Call this endpoint to monitor the status of a scan during its execution.
   *
   * If you wish to access the logs of a completed scan, use the **Get scan logs** endpoint.
   *
   * This POST uses the following parameter to provide specific details:
   *
   * - `scanId`: Use the value of `X-Soda-Scan-Id` returned as part of the `201` response when you
   *   called the **Trigger a scan** endpoint.
   *
   * As a scan executes, you can call this endpoint to progressively collect values based on the
   * state of the scan. Refer to the list below for the states that calls to this endpoint return.
   *
   * - `queuing`: The scan is in the queue for execution, awaiting a pick-up from a Soda Runner.
   *
   * - `executing`: A Soda Runner has picked up the scan and is executing.
   *
   * - `cancelationRequested`: An entity requested cancelation of this scan and the request is
   *   awaiting pick-up from the Soda Runner responsible for the scan.
   *
   * - `timeOutRequested`: A time out has been detected, and an automatic request to stop the scan
   *   execution is awaiting pick-up from the Soda Runner responsible for the scan.
   *
   * - `canceled`: A Soda Runner confirmed that the scan has been cancelled. This is the final state
   *   of the scan.
   *
   * - `timedOut`: A Soda Runner confirmed that the scan has timed-out. This is the final state of
   *   the scan.
   *
   * - `failed`: The scan did not start, or it did not successfully complete because of an
   *   unexpected cause. This is the final state of the scan.
   *
   * - `completedWithErrors`: The scan completed successfully, but there were errors involving some
   *   of the checks in the scan. This is the final state of the scan.
   *
   * - `completedWithFailures`: The scan completed successfully and reveals failed results for some
   *   checks. This is the final state of the scan.
   *
   * - `completedWithWarnings`: The scan completed successfully and reveals warning results for some
   *   checks. This is the final state of the scan.
   *
   * - `completed`: The scan completed successfully and reveals passing results for all checks. This
   *   is a final state of a scan
   *
   * To get the logs of the completed scan, please use API `/api/v1/scans/{scanId}/logs`.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Scans`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Scans.GetApiV1ScansScanIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ScansScanId(
    request: Scans.GetApiV1ScansScanIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiScanStatusResponse, Scans.GetApiV1ScansScanIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/scans/{scanId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "scanId", value: request.scanId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiScanStatusResponseSchema },
        errorFactory: Scans.GetApiV1ScansScanIdError,
      },
      options,
    );
  }

  /**
   * Get scan logs
   *
   * @remarks
   * This endpoint enables you to gather log details about the final state of a scan you executed
   * using the **Trigger a scan** endpoint. Use this endpoint to study scan logs to investigate
   * issues with its execution.
   *
   * If you wish to access the state of a scan in progress, use the **Get scan status** endpoint.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `scanId`: Use the value of `X-Soda-Scan-Id` returned as part of the `201` response when you
   *   called the **Trigger a scan** endpoint.
   *
   * - `size`: Supply an integer value between 100 and 1000, inclusive. The default value is 1000.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * The response sorts the the log information by creation timestamp in ascending order.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Scans`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Scans.GetApiV1ScansScanIdLogsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ScansScanIdLogs(
    request: Scans.GetApiV1ScansScanIdLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiScanLogsResponse, Scans.GetApiV1ScansScanIdLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/scans/{scanId}/logs"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "scanId", value: request.scanId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiScanLogsResponseSchema },
        errorFactory: Scans.GetApiV1ScansScanIdLogsError,
      },
      options,
    );
  }
}

export namespace Scans {
  export type DeleteApiV1ScansScanIdRequest = {
    scanId: string;
  };

  export class DeleteApiV1ScansScanIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1ScansScanIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1ScansScanIdRequest = {
    scanId: string;
  };

  export class GetApiV1ScansScanIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ScansScanIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1ScansScanIdLogsRequest = {
    scanId: string;
    page?: number;
    size?: number;
  };

  export class GetApiV1ScansScanIdLogsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ScansScanIdLogsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
