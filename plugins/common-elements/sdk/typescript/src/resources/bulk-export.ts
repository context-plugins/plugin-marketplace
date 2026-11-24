import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ExportChangesResponseSchema,
  type ApiV1ExportChangesResponse,
} from "../models/api-v1-export-changes-response.js";
import { apiV1ExportResponseSchema, type ApiV1ExportResponse } from "../models/api-v1-export-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Stream a full dataset as CSV or JSON. Growth plan or higher.
 */
export class BulkExport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Stream a full dataset as CSV or JSON, one request against your monthly quota…
   *
   * @remarks
   * Stream a full dataset as CSV or JSON, one request against your monthly quota regardless of row
   * count. `resource` is one of associations, vendors, statutes, building-safety, or report-card.
   * Each resource has its own filter parameters (narrow the export the same way you would narrow
   * the matching list endpoint) and a public-safe column allowlist. report-card streams the
   * per-association public-record signal set behind the Explorer — FEMA NRI county risk, SIRS on
   * file, HUD FHA status, elevator certificates, latest pool inspection, 24-month building permits,
   * and IRS Form 990 revenue — keyed by organization id, name, state, and county.
   *
   * **Plan:** Growth plan or higher. Free and Builder keys receive 403 tier_not_allowed — the
   * per-row endpoints above are included in every plan, but streaming a full dataset is a Growth+
   * capability. Per-tier row cap on a single export: Growth 50,000 · Scale 250,000 · Enterprise
   * 1,000,000.
   *
   * - One export = one request against your monthly quota, whatever the row count, up to your
   *   plan's row cap.
   * - The scope required depends on the resource, not the export capability itself — a key needs
   *   both the resource's read scope AND a Growth+ tier.
   * - A source guard enforces the same public-record exclusions as every other v1 endpoint; a
   *   "columns" value that would expose an excluded field 400s rather than silently dropping it.
   * - The first page is validated before the response starts streaming, so a bad filter or column
   *   name returns a clean JSON error. A failure mid-stream truncates the file — check row counts
   *   on large exports.
   *
   * @returns Success.
   *
   * @throws {@link BulkExport.ExportError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  export(
    request: BulkExport.ExportRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ExportResponse, BulkExport.ExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/export/{resource}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "resource", value: request.resource, schema: s.string() }],
        query: [
          { name: "format", value: request.format, schema: s.optional(s.string()) },
          { name: "columns", value: request.columns, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "county", value: request.county, schema: s.optional(s.string()) },
          { name: "subtype", value: request.subtype, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "unit_min / unit_max", value: request.unitMinUnitMax, schema: s.optional(s.float64()) },
          { name: "year_min / year_max", value: request.yearMinYearMax, schema: s.optional(s.float64()) },
          { name: "is_claimed", value: request.isClaimed, schema: s.optional(s.boolean()) },
          { name: "mgmt", value: request.mgmt, schema: s.optional(s.string()) },
          { name: "chapter / topic", value: request.chapterTopic, schema: s.optional(s.string()) },
          {
            name: "sirs_on_file / elevator_delinquent",
            value: request.sirsOnFileElevatorDelinquent,
            schema: s.optional(s.boolean()),
          },
          {
            name: "milestone_status / pool_last_result",
            value: request.milestoneStatusPoolLastResult,
            schema: s.optional(s.string()),
          },
          {
            name: "has_sirs / has_elevator_cert",
            value: request.hasSirsHasElevatorCert,
            schema: s.optional(s.boolean()),
          },
          { name: "fha_status", value: request.fhaStatus, schema: s.optional(s.string()) },
          { name: "min_risk / max_risk", value: request.minRiskMaxRisk, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ExportResponseSchema },
        errorFactory: BulkExport.ExportError,
      },
      options,
    );
  }

  /**
   * Stream the change feed as CSV or JSON: one row per observed event, with the…
   *
   * @remarks
   * Stream the change feed as CSV or JSON: one row per observed event, with the event date, the
   * association it happened to (id, name, state, county), the event type, the changed field, and
   * person-free old/new value summaries. The bulk form of /api/v1/changes for loading trigger
   * events into a warehouse or CRM instead of polling pages.
   *
   * **Plan:** Growth plan or higher, same as every bulk export, with the same per-tier row caps
   * (Growth 50,000 · Scale 250,000 · Enterprise 1,000,000). Your plan lookback window from the
   * change feed still applies: the exported date range is clamped exactly as /api/v1/changes clamps
   * it.
   *
   * - No officer names, ever. The export reads the same person-stripped view as /api/v1/changes:
   *   officer changes come back as seat counts and canonical titles, and management changes (none
   *   detected yet) as firm names. There is no parameter that widens this.
   * - The lookback window is your plan's change-feed window, applied server-side. The row cap is
   *   the bulk-export cap for your tier, not the per-request /api/v1/changes cap.
   * - One export = one request against your monthly quota, whatever the row count.
   *
   * @returns Success.
   *
   * @throws {@link BulkExport.ExportChangesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportChanges(
    request: BulkExport.ExportChangesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ExportChangesResponse, BulkExport.ExportChangesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/export/changes"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "format", value: request.format, schema: s.optional(s.string()) },
          { name: "columns", value: request.columns, schema: s.optional(s.string()) },
          { name: "kind", value: request.kind, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "county", value: request.county, schema: s.optional(s.string()) },
          { name: "subtype", value: request.subtype, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.string()) },
          { name: "until", value: request.until, schema: s.optional(s.string()) },
          { name: "min_magnitude", value: request.minMagnitude, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ExportChangesResponseSchema },
        errorFactory: BulkExport.ExportChangesError,
      },
      options,
    );
  }
}

export namespace BulkExport {
  export type ExportRequest = {
    /** One of: associations, vendors, statutes, building-safety, report-card. */
    resource: string;
    /** "csv" (default) or "json". */
    format?: string;
    /**
     * Comma-separated column names to narrow the output. An unknown column name 400s and lists the
     * valid set for that resource.
     */
    columns?: string;
    /** Two-letter state code. Every resource supports this filter. */
    state?: string;
    /**
     * Free-text filter, meaning varies by resource (name for associations/vendors, statute text for
     * statutes).
     */
    q?: string;
    /** County filter. Supported by associations, vendors, and building-safety. */
    county?: string;
    /** "hoa", "condo", or "coop". Supported by associations and building-safety. */
    subtype?: string;
    /** Vendor category slug. Vendors only. */
    category?: string;
    /** Unit count range. Associations only. */
    unitMinUnitMax?: number;
    /** Year-built range. Associations only. */
    yearMinYearMax?: number;
    /** "true" or "false". Associations only. */
    isClaimed?: boolean;
    /** Management firm name filter. Associations only. */
    mgmt?: string;
    /** Statutes only, same meaning as on /v1/statutes/by-state. */
    chapterTopic?: string;
    /** "true" or "false". Building-safety only. */
    sirsOnFileElevatorDelinquent?: boolean;
    /** Free-text, matches the source county/agency's own vocabulary. Building-safety only. */
    milestoneStatusPoolLastResult?: string;
    /** "true" or "false". Report-card only. */
    hasSirsHasElevatorCert?: boolean;
    /**
     * Normalized HUD decision: approved, rejected, withdrawn, expired, or other. Report-card only.
     */
    fhaStatus?: string;
    /** FEMA NRI county risk score range. Report-card only. */
    minRiskMaxRisk?: number;
  };

  export class ExportError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExportError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ExportChangesRequest = {
    /** "csv" (default) or "json". */
    format?: string;
    /**
     * Comma-separated column names to narrow the output. An unknown column name 400s and lists the
     * valid set.
     */
    columns?: string;
    /** Comma-separated change kinds, same vocabulary as /api/v1/changes. Omit for all kinds. */
    kind?: string;
    /** Comma-separated two-letter state codes. */
    state?: string;
    /** Single county name, case-insensitive exact match. */
    county?: string;
    /** One of "hoa", "condo", "coop". */
    subtype?: string;
    /**
     * Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date
     * does not widen it.
     */
    since?: string;
    /** Latest observation date, YYYY-MM-DD. */
    until?: string;
    /** Minimum change magnitude, 0 to 1. */
    minMagnitude?: number;
  };

  export class ExportChangesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExportChangesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
