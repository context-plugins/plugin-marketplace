import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  currentVisitorsResponseSchema,
  type CurrentVisitorsResponse,
} from "../models/current-visitors-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import {
  funnelReportRequestInternalSchema,
  type FunnelReportRequest,
} from "../models/funnel-report-request.js";
import { funnelReportResponseSchema, type FunnelReportResponse } from "../models/funnel-report-response.js";
import { funnelsResponseSchema, type FunnelsResponse } from "../models/funnels-response.js";
import { propsResponseSchema, type PropsResponse } from "../models/props-response.js";
import { queryRequestInternalSchema, type QueryRequest } from "../models/query-request.js";
import { queryResponseInternalSchema, type QueryResponse } from "../models/query-response.js";
import { sitesResponseSchema, type SitesResponse } from "../models/sites-response.js";
import { subscriptionResponseSchema, type SubscriptionResponse } from "../models/subscription-response.js";
import type { Servers } from "../servers.js";

/**
 * Read analytics data.
 */
export class Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Live count of visitors active in the last 5 minutes
   *
   * @returns Realtime unique-visitor count.
   *
   * @throws {@link Stats.CurrentVisitorsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  currentVisitors(
    request: Stats.CurrentVisitorsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CurrentVisitorsResponse, Stats.CurrentVisitorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/current-visitors"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "site_id", value: request.siteId, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: currentVisitorsResponseSchema },
        errorFactory: Stats.CurrentVisitorsError,
      },
      options,
    );
  }

  /**
   * The account's subscription state
   *
   * @remarks
   * The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N
   * days left", not a billing page. Hobby-only accounts have no subscription and answer `status:
   * "none"` with `only_hobby: true`.
   *
   * @returns The current subscription state.
   *
   * @throws {@link Stats.GetSubscriptionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscription(options?: RequestOptions): ApiPromise<SubscriptionResponse, Stats.GetSubscriptionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/subscription"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subscriptionResponseSchema },
        errorFactory: Stats.GetSubscriptionError,
      },
      options,
    );
  }

  /**
   * List a site's configured conversion funnels
   *
   * @remarks
   * Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel `id` with
   * POST /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create
   * or edit them.
   *
   * @returns The site's funnel definitions.
   *
   * @throws {@link Stats.ListFunnelsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFunnels(
    request: Stats.ListFunnelsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FunnelsResponse, Stats.ListFunnelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/funnels"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "site_id", value: request.siteId, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: funnelsResponseSchema },
        errorFactory: Stats.ListFunnelsError,
      },
      options,
    );
  }

  /**
   * List a site's custom-property keys
   *
   * @remarks
   * The custom-property keys a site has recorded (each paired with the event it was sent with) —
   * discovery for the event:props: breakdown. Returns the full set (no pagination) for the window.
   *
   * @returns The site's custom-property keys.
   *
   * @throws {@link Stats.ListPropKeysError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPropKeys(
    request: Stats.ListPropKeysRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PropsResponse, Stats.ListPropKeysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/props"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "site_id", value: request.siteId, schema: s.optional(s.int()) },
          { name: "date_range", value: request.dateRange, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: propsResponseSchema },
        errorFactory: Stats.ListPropKeysError,
      },
      options,
    );
  }

  /**
   * List the sites this key can read
   *
   * @remarks
   * Returns the sites the authenticating key may read — useful for discovering `site_id` values and
   * token introspection. An all-sites key returns every accessible site (sorted by name); a
   * single-site key returns just its one site (or an empty list if access was removed).
   *
   * @returns The accessible sites.
   *
   * @throws {@link Stats.ListSitesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSites(
    request: Stats.ListSitesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SitesResponse, Stats.ListSitesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sites"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "date_range", value: request.dateRange, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sitesResponseSchema },
        errorFactory: Stats.ListSitesError,
      },
      options,
    );
  }

  /**
   * Run one analytics query
   *
   * @remarks
   * One query returns a list of result rows. With no `dimensions` it is an aggregate (one row);
   * with one time dimension (`time[:hour|day|week|month]`) it is a time series; with one breakdown
   * dimension it is a top-N list plus a `meta` pagination block. The response always echoes the
   * resolved request in `query` (most usefully `date_range` normalized to concrete `[from,to]`
   * dates). At most one dimension per query.
   *
   * @returns Query result.
   *
   * @throws {@link Stats.QueryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  query(
    request: Stats.QueryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<QueryResponse, Stats.QueryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/query"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: queryResponseInternalSchema },
        errorFactory: Stats.QueryError,
      },
      options,
    );
  }

  /**
   * Run a saved funnel and return per-step conversions
   *
   * @remarks
   * Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED
   * per-step result with top-level scalars — a bespoke, non-tabular shape (funnel output is not
   * rows). `steps` must not be sorted; `conversion_rate` is cumulative versus the first step
   * (`entering`), not step-to-step. The intra-conversion window is a fixed 1 day, independent of
   * `date_range` (which only bounds the sessions scanned).
   *
   * @returns The funnel result.
   *
   * @throws {@link Stats.RunFunnelReportError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  runFunnelReport(
    request: Stats.RunFunnelReportRequest,
    options?: RequestOptions,
  ): ApiPromise<FunnelReportResponse, Stats.RunFunnelReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/funnels/{id}/report"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: funnelReportRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: funnelReportResponseSchema },
        errorFactory: Stats.RunFunnelReportError,
      },
      options,
    );
  }
}

export namespace Stats {
  export type CurrentVisitorsRequest = {
    /** Numeric site id. Optional for a single-site key; required for an all-sites key. */
    siteId?: number;
  };

  export class CurrentVisitorsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CurrentVisitorsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class GetSubscriptionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSubscriptionError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListFunnelsRequest = {
    /**
     * Numeric site id. Optional for a single-site key (defaults to its site); required for an
     * all-sites key.
     */
    siteId?: number;
  };

  export class ListFunnelsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFunnelsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListPropKeysRequest = {
    /** Numeric site id. Optional for a single-site key; required for an all-sites key. */
    siteId?: number;
    /**
     * Same forms as /query (default 30d): a preset `7d`/`30d`/`month`, or a URL-encoded custom pair
     * `["YYYY-MM-DD","YYYY-MM-DD"]`.
     */
    dateRange?: string;
  };

  export class ListPropKeysError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPropKeysError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListSitesRequest = {
    /**
     * A preset (`7d`/`30d`/`month`/`realtime`) or `Nd` = last N full days, N in 1–90 (e.g. `7d`,
     * `14d`) — the same scalar forms POST /query accepts (custom `[from,to]` pairs are
     * /query-only). When present, each site gains a `stats` block with basic aggregate metrics for
     * the window. Omit to keep the list lean (no analytics read). These batch stats are NOT
     * per-site-timezone — use POST /query for TZ-exact numbers.
     */
    dateRange?: string;
  };

  export const listSitesRequestSchema: Schema<ListSitesRequest> = s.lazySchema(() =>
    s.object<ListSitesRequest>({
      dateRange: s.optional(s.string().check(s.pattern("^(month|realtime|([1-9]|[1-8][0-9]|90)d)$"))),
    }),
  );

  export class ListSitesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSitesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type QueryRequestParams = {
    body: QueryRequest;
  };

  export class QueryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type RunFunnelReportRequest = {
    /** Funnel id (from GET /funnels). */
    id: number;
    body: FunnelReportRequest;
  };

  export class RunFunnelReportError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunFunnelReportError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
