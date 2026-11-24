import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiV1ChangesResponseSchema, type ApiV1ChangesResponse } from "../models/api-v1-changes-response.js";
import {
  apiV1ChangesSummaryResponseSchema,
  type ApiV1ChangesSummaryResponse,
} from "../models/api-v1-changes-summary-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * What changed, and when. The rest of the API describes the association graph as it stands today;
 * this describes it moving.
 */
export class ChangeFeed {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * The trigger-event feed: board turnover, president changes, management-company…
   *
   * @remarks
   * The trigger-event feed: board turnover, president changes, management-company moves,
   * self-managed transitions, registration status and name changes, and license events across the
   * association graph. This is the programmatic form of the change feed on data.commonelements.com,
   * and the endpoint to poll when you want to act on a community the week something changed rather
   * than re-download a static list.
   *
   * **Plan:** Your plan sets the row cap, and a maximum lookback window (table below). Free keys:
   * up to 50 rows per request; paid tiers raise the cap.
   *
   * - No officer names, ever. The feed reads a person-stripped view by construction: officer
   *   changes come back as counts and canonical titles, and management changes (none detected yet)
   *   as firm names. There is no parameter that widens this.
   * - "total" in the pagination block is the count of matching rows inside your plan window, not
   *   the count in the whole dataset.
   * - With no kind named, the feed returns association events only. Contractor license events
   *   (license_added, license_lapsed) are a separate stream: name the kind to get them. The first
   *   time a board is observed is not a change and is never returned.
   * - Two caps stack and the tighter one wins: the per-request free-plan row cap of 50, and your
   *   plan row cap in the table above. A free key therefore receives up to 50 rows per request
   *   within a 30-day window. When a response was shortened by the free cap it also carries a
   *   "row_cap" field in the envelope.
   *
   * @returns Success.
   *
   * @throws {@link ChangeFeed.ChangesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changes(
    request: ChangeFeed.ChangesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ChangesResponse, ChangeFeed.ChangesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/changes"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "kind", value: request.kind, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "county", value: request.county, schema: s.optional(s.string()) },
          { name: "subtype", value: request.subtype, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.string()) },
          { name: "until", value: request.until, schema: s.optional(s.string()) },
          { name: "min_units", value: request.minUnits, schema: s.optional(s.float64()) },
          { name: "max_units", value: request.maxUnits, schema: s.optional(s.float64()) },
          { name: "min_magnitude", value: request.minMagnitude, schema: s.optional(s.float64()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ChangesResponseSchema },
        errorFactory: ChangeFeed.ChangesError,
      },
      options,
    );
  }

  /**
   * Counts by change kind over your window: how many events, across how many…
   *
   * @remarks
   * Counts by change kind over your window: how many events, across how many distinct associations,
   * in how many states. The cheap call for a dashboard tile or a scheduled digest, and the one to
   * run first when you are sizing the dataset before committing to a plan.
   *
   * **Plan:** Available on every plan, uncapped: this returns one aggregate row per change kind,
   * not a row listing. The lookback window is set by your plan, the same window /api/v1/changes
   * uses.
   *
   * @returns Success.
   *
   * @throws {@link ChangeFeed.ChangesSummaryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changesSummary(
    request: ChangeFeed.ChangesSummaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ChangesSummaryResponse, ChangeFeed.ChangesSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/changes/summary"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "since", value: request.since, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ChangesSummaryResponseSchema },
        errorFactory: ChangeFeed.ChangesSummaryError,
      },
      options,
    );
  }
}

export namespace ChangeFeed {
  export type ChangesRequest = {
    /**
     * Comma-separated list of change kinds to include. Any of: board_turnover,
     * board_president_changed, officer_added, officer_removed, officer_title_changed,
     * management_company_changed, management_company_added, management_company_removed,
     * self_managed_transition, entity_status_changed, entity_name_changed, license_added,
     * license_lapsed. Omit for all kinds.
     */
    kind?: string;
    /** Comma-separated two-letter state codes, e.g. "FL" or "FL,GA,TX". Case-insensitive. */
    state?: string;
    /** Single county name, matched exactly as stored (e.g. "Miami-Dade"). */
    county?: string;
    /** One of "hoa", "condo", "coop". */
    subtype?: string;
    /**
     * Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window; an earlier date
     * does not widen it. Available change history varies by source. Observation dates may differ
     * from when changes took effect, and your plan's lookback window does not guarantee that much
     * history.
     */
    since?: string;
    /** Latest observation date, YYYY-MM-DD. */
    until?: string;
    /** Only associations with at least this many units. */
    minUnits?: number;
    /** Only associations with at most this many units. */
    maxUnits?: number;
    /**
     * Minimum change magnitude, 0 to 1. Higher means a larger share of the board or record changed
     * at once.
     */
    minMagnitude?: number;
    /** Rows to return, 1 to 1000 (default 100). Clamped to your plan row cap. */
    limit?: number;
    /** Pagination offset (default 0). */
    offset?: number;
  };

  export class ChangesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChangesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ChangesSummaryRequest = {
    /**
     * Earliest observation date, YYYY-MM-DD. Clamped to your plan lookback window. Available change
     * history varies by source. Observation dates may differ from when changes took effect, and
     * your plan's lookback window does not guarantee that much history.
     */
    since?: string;
    /** Comma-separated two-letter state codes. Omit for all states. */
    state?: string;
  };

  export class ChangesSummaryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChangesSummaryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
