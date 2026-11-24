import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ComplianceScanRequestSchema,
  type ApiV1ComplianceScanRequest,
} from "../models/api-v1-compliance-scan-request.js";
import {
  apiV1ComplianceScanResponseSchema,
  type ApiV1ComplianceScanResponse,
} from "../models/api-v1-compliance-scan-response.js";
import {
  apiV1GeoStateSummaryResponseSchema,
  type ApiV1GeoStateSummaryResponse,
} from "../models/api-v1-geo-state-summary-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class AggregatesAndCompliance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Submit a community association document for automated compliance analysis
   *
   * @remarks
   * Submit a community association document for automated compliance analysis. Returns a structured
   * assessment against Florida and multi-state statutory requirements, plus best-practice
   * governance rules.
   *
   * @returns Success.
   *
   * @throws {@link AggregatesAndCompliance.ComplianceScanError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  complianceScan(
    request: AggregatesAndCompliance.ComplianceScanRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ComplianceScanResponse, AggregatesAndCompliance.ComplianceScanError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/compliance/scan"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ComplianceScanRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ComplianceScanResponseSchema },
        errorFactory: AggregatesAndCompliance.ComplianceScanError,
      },
      options,
    );
  }

  /**
   * Per-state rollup of the dataset: association counts broken out by subtype, plus…
   *
   * @remarks
   * Per-state rollup of the dataset: association counts broken out by subtype, plus insurance
   * licensee counts. The market-sizing call: how much of a state the data covers before you build
   * against it.
   *
   * **Plan:** Available on every plan, uncapped: this returns one row per state, not a row listing.
   *
   * - Aggregate counts only. No per-association rows, no personal data. Counts move as ingestion
   *   runs, so treat them as current rather than fixed.
   *
   * @returns Success.
   *
   * @throws {@link AggregatesAndCompliance.GeoStateSummaryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  geoStateSummary(
    request: AggregatesAndCompliance.GeoStateSummaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1GeoStateSummaryResponse, AggregatesAndCompliance.GeoStateSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/geo/state-summary"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "state", value: request.state, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1GeoStateSummaryResponseSchema },
        errorFactory: AggregatesAndCompliance.GeoStateSummaryError,
      },
      options,
    );
  }
}

export namespace AggregatesAndCompliance {
  export type ComplianceScanRequest = {
    body: ApiV1ComplianceScanRequest;
  };

  export class ComplianceScanError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ComplianceScanError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GeoStateSummaryRequest = {
    /** Two-letter state code. Omit for every state, ranked by association count. */
    state?: string;
  };

  export class GeoStateSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GeoStateSummaryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
