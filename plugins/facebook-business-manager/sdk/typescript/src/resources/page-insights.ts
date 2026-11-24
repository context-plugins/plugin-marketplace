import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { pageInsightsResponseSchema, type PageInsightsResponse } from "../models/page-insights-response.js";
import { periodSchema, type Period } from "../models/period.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve analytics and engagement metrics for a Facebook Page.
 */
export class PageInsights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Get page insights
   *
   * @remarks
   * Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and
   * audience demographics.
   *
   * @returns Successfully retrieved page insights
   *
   * @throws {@link PageInsights.GetPageInsightsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPageInsights(
    request: PageInsights.GetPageInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<PageInsightsResponse, PageInsights.GetPageInsightsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{page_id}/insights"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [
          { name: "metric", value: request.metric, schema: s.string() },
          { name: "period", value: request.period, schema: s.optional(s.lazy(() => periodSchema)) },
          { name: "since", value: request.since, schema: s.optional(s.string()) },
          { name: "until", value: request.until, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pageInsightsResponseSchema },
        errorFactory: PageInsights.GetPageInsightsError,
      },
      options,
    );
  }
}

export namespace PageInsights {
  export type GetPageInsightsRequest = {
    /** The ID of the Facebook Page */
    pageId: string;
    /**
     * Comma-separated list of metrics to retrieve such as page_impressions, page_engaged_users,
     * page_fans.
     */
    metric: string;
    /** Aggregation period for the metrics */
    period?: Period;
    /** Start of the date range in Unix timestamp or YYYY-MM-DD format */
    since?: string;
    /** End of the date range in Unix timestamp or YYYY-MM-DD format */
    until?: string;
  };

  export class GetPageInsightsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPageInsightsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
