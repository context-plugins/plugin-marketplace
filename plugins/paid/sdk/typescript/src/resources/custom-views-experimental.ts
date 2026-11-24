import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createCustomViewRequestSchema,
  type CreateCustomViewRequest,
} from "../models/create-custom-view-request.js";
import { customViewDetailSchema, type CustomViewDetail } from "../models/custom-view-detail.js";
import {
  customViewEmbedTokenResponseSchema,
  type CustomViewEmbedTokenResponse,
} from "../models/custom-view-embed-token-response.js";
import {
  customViewListResponseSchema,
  type CustomViewListResponse,
} from "../models/custom-view-list-response.js";
import { customViewInternalSchema, type CustomView } from "../models/custom-view.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  experimentalViewsDisplayIdDataGetParametersPeriodKindSchema,
  type ExperimentalViewsDisplayIdDataGetParametersPeriodKind,
} from "../models/experimental-views-display-id-data-get-parameters-period-kind.js";
import {
  experimentalViewsDisplayIdDataGetParametersPeriodUnitSchema,
  type ExperimentalViewsDisplayIdDataGetParametersPeriodUnit,
} from "../models/experimental-views-display-id-data-get-parameters-period-unit.js";
import {
  updateCustomViewPeriodRequestSchema,
  type UpdateCustomViewPeriodRequest,
} from "../models/update-custom-view-period-request.js";
import {
  updateCustomViewRequestSchema,
  type UpdateCustomViewRequest,
} from "../models/update-custom-view-request.js";
import { viewDataResponseSchema, type ViewDataResponse } from "../models/view-data-response.js";
import type { Servers } from "../servers.js";

export class CustomViewsExperimental {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a custom view (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * ⚠️ Only call this when the user has EXPLICITLY asked to save or create the view. After
   * generating or previewing a dashboard, do NOT automatically save a draft — show it to the user
   * and wait for them to ask you to save it. Creating saves a DRAFT only; it is NOT permission to
   * publish — never chain a publish onto a create. After saving, hand the user the previewUrl and
   * wait for their feedback before doing anything else. Saves named analytics queries + a
   * self-contained HTML render bundle as a DRAFT custom view. **Call getCustomViewAuthoringGuide
   * (GET /experimental/views/authoring-guide) first** — it returns the full guide and a copy-paste
   * interactive template. Key rules: (1) Do NOT add a customer filter to the SQL — the database
   * scopes every query to the viewing customer at embed time. (2) Each query's SQL must be
   * SELECT-only; return clearly-named columns. Compute metric VALUES in SQL (e.g. (count()*2)/5 AS
   * custom_metric) — derive a number in the render bundle only when it depends on user interaction
   * (toggle/filter/hover) or is pure formatting of a value a query already returns. (3) The render
   * bundle must be SELF-CONTAINED — inline all CSS/JS/charting, NO external loads or fetch (the
   * sandbox has connect-src 'none'); it must listen for the `paid:data` message (data keyed by
   * query id) and re-render on each one. (4) Make it INTERACTIVE — mousemove hover tooltips and at
   * least one addEventListener-wired control that re-renders (a static chart feels broken). (5) The
   * render bundle is the single source of truth — BEFORE saving, preview the EXACT bundle in the
   * user's current client (call getCustomViewPreviewHarness with your bundle + sample data and
   * render the HTML it returns) and show it to the user; that preview in the current client is how
   * the user first sees the dashboard. Do NOT save a draft just to preview it in Paid — creating
   * writes to the user's real account and is never a preview step. Do NOT build a separate chart,
   * and only show numbers that come from a declared query. (6) A view is a FULL dashboard — include
   * as many charts/KPIs as the analysis has. Keep every element derived from the single viewing
   * customer (KPIs, trends, type mix); drop only cross-customer comparisons (rankings,
   * share-of-total, 'N customers'). Don't simplify to one chart. (7) To make the date range
   * adjustable (e.g. the user says 'last month'), write the date boundary as
   * `{period_start:DateTime}` / `{period_end:DateTime}` placeholders in the SQL and pass a default
   * `period` (relative like {kind:'relative',unit:'month',amount:1}, or absolute start/end). The
   * org user can then change it in Paid without re-authoring. A query using the placeholders
   * REQUIRES a period. Do NOT add your own date-range picker to the render bundle — Paid owns the
   * timeframe and the bundle receives already-filtered data; a second in-bundle picker cannot
   * re-run the SQL. (8) Check your draft with validateCustomView (POST
   * /experimental/views/validate) BEFORE asking the user to save — it runs these same gates without
   * persisting and reports every problem at once. The response returns a `previewUrl` — give it to
   * the user so they can open the new view in Paid.
   *
   * @returns 201
   *
   * @throws {@link CustomViewsExperimental.CreateCustomViewError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomView(
    request: CustomViewsExperimental.CreateCustomViewRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomView, CustomViewsExperimental.CreateCustomViewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/experimental/views/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createCustomViewRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customViewInternalSchema },
        errorFactory: CustomViewsExperimental.CreateCustomViewError,
      },
      options,
    );
  }

  /**
   * Get a custom view's metadata + render bundle (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Returns the view's name, status, query ids, and the author render bundle for the owning
   * organization (DRAFT or PUBLISHED). Used by the trusted preview/embed frame to render the
   * sandbox; the per-customer data is fetched separately via /:displayId/data.
   *
   * @returns 200
   *
   * @throws {@link CustomViewsExperimental.GetCustomViewError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomView(
    request: CustomViewsExperimental.GetCustomViewRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomViewDetail, CustomViewsExperimental.GetCustomViewError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi(
          "/experimental/views/{displayId}",
        ),
        auth: noneAuth,
        pathParams: [{ name: "displayId", value: request.displayId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customViewDetailSchema },
        errorFactory: CustomViewsExperimental.GetCustomViewError,
      },
      options,
    );
  }

  /**
   * Fetch a custom view's data, scoped to a customer or the organization…
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Runs every stored query of the view on the read-only analytics database and returns the result
   * sets keyed by query id. For a customer-scoped view (the default), the query is scoped to the
   * caller's organization AND the given `customerId` (both enforced as ClickHouse row filters) —
   * `customerId` is required. For an organization-scoped view, the data is org-wide (scoped only to
   * the caller's organization) and `customerId` is ignored. The scope is enforced by the database —
   * it cannot be widened by the stored SQL.
   *
   * @returns 200
   *
   * @throws {@link CustomViewsExperimental.GetCustomViewDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomViewData(
    request: CustomViewsExperimental.GetCustomViewDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ViewDataResponse, CustomViewsExperimental.GetCustomViewDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi(
          "/experimental/views/{displayId}/data",
        ),
        auth: noneAuth,
        pathParams: [{ name: "displayId", value: request.displayId, schema: s.string() }],
        query: [
          { name: "customerId", value: request.customerId, schema: s.optional(s.string()) },
          {
            name: "periodKind",
            value: request.periodKind,
            schema: s.optional(s.lazy(() => experimentalViewsDisplayIdDataGetParametersPeriodKindSchema)),
          },
          {
            name: "periodUnit",
            value: request.periodUnit,
            schema: s.optional(s.lazy(() => experimentalViewsDisplayIdDataGetParametersPeriodUnitSchema)),
          },
          { name: "periodAmount", value: request.periodAmount, schema: s.optional(s.int()) },
          { name: "periodStart", value: request.periodStart, schema: s.optional(s.string()) },
          { name: "periodEnd", value: request.periodEnd, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: viewDataResponseSchema },
        errorFactory: CustomViewsExperimental.GetCustomViewDataError,
      },
      options,
    );
  }

  /**
   * Get an embed token for a custom view
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Mints a short-lived, customer-scoped token for embedding a published custom view. Call this
   * from your server with your API key, then pass the returned token to the embed SDK.
   * Organization-scoped views cannot be embedded per-customer — this returns a 400
   * (`ORG_SCOPED_VIEW_NOT_EMBEDDABLE`) for one.
   *
   * @returns 200
   *
   * @throws {@link CustomViewsExperimental.GetCustomViewEmbedTokenError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomViewEmbedToken(
    request: CustomViewsExperimental.GetCustomViewEmbedTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomViewEmbedTokenResponse, CustomViewsExperimental.GetCustomViewEmbedTokenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi(
          "/experimental/views/{displayId}/embed-token",
        ),
        auth: noneAuth,
        pathParams: [{ name: "displayId", value: request.displayId, schema: s.string() }],
        query: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "ttlSeconds", value: request.ttlSeconds, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customViewEmbedTokenResponseSchema },
        errorFactory: CustomViewsExperimental.GetCustomViewEmbedTokenError,
      },
      options,
    );
  }

  /**
   * List custom views (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Lists the organization's custom views (newest first) with lightweight summary info — name,
   * status, query count, default date range, created date. Does not return the SQL or render
   * bundle; fetch a single view via getCustomView for those.
   *
   * @returns 200
   *
   * @throws {@link CustomViewsExperimental.ListCustomViewsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomViews(
    request: CustomViewsExperimental.ListCustomViewsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomViewListResponse, CustomViewsExperimental.ListCustomViewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/experimental/views/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customViewListResponseSchema },
        errorFactory: CustomViewsExperimental.ListCustomViewsError,
      },
      options,
    );
  }

  /**
   * Publish a custom view (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * ⚠️ Never publish as an automatic follow-up to creating or generating a view. Only call this
   * after you have shown the user the built/previewed view and they have EXPLICITLY approved
   * publishing — building and publishing are separate user decisions, and answering an earlier
   * question (e.g. the view's scope) is NOT publish approval. Flips the view from DRAFT to
   * PUBLISHED. Only PUBLISHED views are served on the embed data path — this is the gate that stops
   * an unreviewed view reaching end-customers. Idempotent: publishing an already-published view is
   * a no-op success. The response returns a `previewUrl` — give it to the user so they can open the
   * view in Paid.
   *
   * @returns 200
   *
   * @throws {@link CustomViewsExperimental.PublishCustomViewError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publishCustomView(
    request: CustomViewsExperimental.PublishCustomViewRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomView, CustomViewsExperimental.PublishCustomViewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi(
          "/experimental/views/{displayId}/publish",
        ),
        auth: noneAuth,
        pathParams: [{ name: "displayId", value: request.displayId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: customViewInternalSchema },
        errorFactory: CustomViewsExperimental.PublishCustomViewError,
      },
      options,
    );
  }

  /**
   * Update a custom view (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Partially updates a view. Omitted fields are left unchanged. For REVISIONS, prefer the
   * incremental fields — `bundleEdits` (exact search-and-replace on the stored render bundle) and
   * `queryUpserts`/`queryRemovals` (per-query changes) — so you transmit only what changed instead
   * of re-sending the whole payload. The full-replacement fields remain for rewrites:
   * `renderBundle`, and `queries` (a FULL replacement of the query list — never drop queries the
   * user didn't ask to remove). Replacement and incremental forms of the same aspect cannot be
   * combined. The resulting SQL and bundle pass the same validation as createCustomView
   * (SELECT-only, size cap, self-contained, paid:data listener). Works on DRAFT or PUBLISHED views
   * — published embeds pick the change up on their next load.
   *
   * @returns 200
   *
   * @throws {@link CustomViewsExperimental.UpdateCustomViewError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomView(
    request: CustomViewsExperimental.UpdateCustomViewRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomView, CustomViewsExperimental.UpdateCustomViewError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi(
          "/experimental/views/{displayId}",
        ),
        auth: noneAuth,
        pathParams: [{ name: "displayId", value: request.displayId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCustomViewRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customViewInternalSchema },
        errorFactory: CustomViewsExperimental.UpdateCustomViewError,
      },
      options,
    );
  }

  /**
   * Change a custom view's date range (experimental)
   *
   * @remarks
   * ⚠️ **Experimental** — this endpoint may change or be removed without notice and is not subject
   * to v2 backwards-compatibility guarantees. Do not build production-critical integrations against
   * it yet.
   *
   * Updates the view's default date range (the period applied to queries that use the
   * `{period_start:DateTime}` / `{period_end:DateTime}` placeholders). Accepts a relative rolling
   * window (e.g. last 30 days) or a fixed start/end range. Lets the period be changed after
   * deployment without re-authoring the SQL. Applies to DRAFT or PUBLISHED views.
   *
   * @returns 200
   *
   * @throws {@link CustomViewsExperimental.UpdateCustomViewPeriodError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomViewPeriod(
    request: CustomViewsExperimental.UpdateCustomViewPeriodRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CustomView, CustomViewsExperimental.UpdateCustomViewPeriodError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi(
          "/experimental/views/{displayId}/period",
        ),
        auth: noneAuth,
        pathParams: [{ name: "displayId", value: request.displayId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateCustomViewPeriodRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: customViewInternalSchema },
        errorFactory: CustomViewsExperimental.UpdateCustomViewPeriodError,
      },
      options,
    );
  }
}

export namespace CustomViewsExperimental {
  export type CreateCustomViewRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateCustomViewRequest;
  };

  export class CreateCustomViewError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomViewError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomViewRequest = {
    displayId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomViewError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomViewError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomViewDataRequest = {
    displayId: string;
    /**
     * Customer to scope the data to (dev/preview only; the embed derives this from the verified
     * token). Required for customer-scoped views; ignored for organization-scoped views (their data
     * is org-wide).
     */
    customerId?: string;
    /**
     * Override the view's default date range for this request only. 'relative' = rolling window
     * (set periodUnit + periodAmount); 'absolute' = fixed range (set periodStart + periodEnd).
     */
    periodKind?: ExperimentalViewsDisplayIdDataGetParametersPeriodKind;
    /** relative override only: unit of the rolling window. */
    periodUnit?: ExperimentalViewsDisplayIdDataGetParametersPeriodUnit;
    /** relative override only: how many units back from today. */
    periodAmount?: number;
    /** absolute override only: inclusive start date (YYYY-MM-DD). */
    periodStart?: string;
    /** absolute override only: inclusive end date (YYYY-MM-DD). */
    periodEnd?: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomViewDataError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomViewDataError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 408, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCustomViewEmbedTokenRequest = {
    displayId: string;
    /** The customer to scope the view to: external id, Paid display id (cus_…), or internal id. */
    customerId: string;
    /** Token lifetime in seconds (capped at 3600). */
    ttlSeconds?: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetCustomViewEmbedTokenError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomViewEmbedTokenError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCustomViewsRequest = {
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListCustomViewsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomViewsError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PublishCustomViewRequest = {
    displayId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: Record<string, unknown>;
  };

  export class PublishCustomViewError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublishCustomViewError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCustomViewRequestParams = {
    displayId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateCustomViewRequest;
  };

  export class UpdateCustomViewError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomViewError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCustomViewPeriodRequestParams = {
    displayId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateCustomViewPeriodRequest;
  };

  export class UpdateCustomViewPeriodError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCustomViewPeriodError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
