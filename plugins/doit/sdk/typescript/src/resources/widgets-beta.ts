import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import { widgetListInternalSchema, type WidgetList } from "../models/widget-list.js";
import { widgetInternalSchema, type Widget } from "../models/widget.js";
import type { Servers } from "../servers.js";

/**
 * Beta. Read precomputed current-month cloud spend and forecast metrics. Widget results are
 * refreshed in the background; reading a widget returns the latest cached result and never starts a
 * synchronous refresh. Use the list operation to discover the complete catalogue.
 */
export class WidgetsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a widget
   *
   * @remarks
   * Returns the latest precomputed cached result for one widget. This read does not refresh or
   * recompute the widget synchronously.
   *
   * Use either the customer-specific `id` returned by the list-widgets operation or one of these
   * stable aliases:
   *
   * - `current-month-cloud-spend` — total cloud spend accumulated during the current calendar
   *   month.
   * - `current-month-cloud-forecast` — forecast of total cloud spend for the current calendar
   *   month.
   *
   * The two concrete alias requests are:
   *
   * - `GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-spend`
   * - `GET https://api.doit.com/analytics/v1/widgets/current-month-cloud-forecast`
   *
   * Authenticate with `Authorization: Bearer `. Omit `X-Tenant-Id` when the credential resolves to
   * one customer. When the credential can act on multiple customers, send `X-Tenant-Id: ` to select
   * the customer. A `403` response means the caller or selected customer is not authorized or
   * entitled to use this API.
   *
   * The result's `period.endTime` is exclusive. Monetary `amount` values are decimal strings and
   * `currency` values are ISO 4217 currency codes. `monthToMonthGrowthPercentage` and
   * `monthToMonthGrowthAmount` are both `null` when no comparable prior-period value exists.
   *
   * @returns OK - The widget and its latest precomputed result.
   *
   * @throws {@link WidgetsBeta.GetWidgetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWidget(
    request: WidgetsBeta.GetWidgetRequest,
    options?: RequestOptions,
  ): ApiPromise<Widget, WidgetsBeta.GetWidgetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/widgets/{widgetId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "widgetId", value: request.widgetId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: widgetInternalSchema },
        errorFactory: WidgetsBeta.GetWidgetError,
      },
      options,
    );
  }

  /**
   * List widgets
   *
   * @remarks
   * Returns the complete catalogue of preset widgets supported by the Analytics Widgets API. Each
   * entry contains a customer-specific `id` and a stable customer-facing `alias`; either value can
   * be passed to the get-widget operation. An `id` can vary by customer or service tier, while an
   * `alias` remains stable.
   *
   * Authenticate with `Authorization: Bearer `. Omit `X-Tenant-Id` when the credential resolves to
   * one customer. When the credential can act on multiple customers, send `X-Tenant-Id: ` to select
   * the customer. A `403` response means the caller or selected customer is not authorized or
   * entitled to use this API.
   *
   * @returns OK - The complete supported widget catalogue.
   *
   * @throws {@link WidgetsBeta.ListWidgetsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWidgets(
    request: WidgetsBeta.ListWidgetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<WidgetList, WidgetsBeta.ListWidgetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/widgets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: widgetListInternalSchema },
        errorFactory: WidgetsBeta.ListWidgetsError,
      },
      options,
    );
  }
}

export namespace WidgetsBeta {
  export type GetWidgetRequest = {
    /**
     * Stable widget alias or customer-specific widget ID returned by listWidgets. Use
     * current-month-cloud-spend for current-month accumulated spend or current-month-cloud-forecast
     * for the current-month forecast.
     */
    widgetId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const getWidgetRequestSchema: Schema<GetWidgetRequest> = s.lazySchema(() =>
    s.object<GetWidgetRequest>({
      widgetId: s.string().check(s.minLength(1)),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class GetWidgetError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWidgetError> = [
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListWidgetsRequest = {
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export class ListWidgetsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWidgetsError> = [
      { on: 401, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}
