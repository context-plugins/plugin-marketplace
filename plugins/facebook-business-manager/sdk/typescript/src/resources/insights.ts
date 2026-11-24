import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { insightsResponseSchema, type InsightsResponse } from "../models/insights-response.js";
import { levelSchema, type Level } from "../models/level.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve performance metrics and analytics data for campaigns, ad sets, and ads.
 */
export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Get ad account insights
   *
   * @remarks
   * Retrieves performance insights and analytics for the specified ad account. Supports date range
   * filtering, breakdowns, and action breakdowns.
   *
   * @returns Successfully retrieved insights data
   *
   * @throws {@link Insights.GetAdAccountInsightsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAdAccountInsights(
    request: Insights.GetAdAccountInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsResponse, Insights.GetAdAccountInsightsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/act_{ad_account_id}/insights"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "ad_account_id", value: request.adAccountId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "time_range", value: request.timeRange, schema: s.optional(s.string()) },
          { name: "breakdowns", value: request.breakdowns, schema: s.optional(s.string()) },
          { name: "level", value: request.level, schema: s.optional(s.lazy(() => levelSchema)) },
          { name: "time_increment", value: request.timeIncrement, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsResponseSchema },
        errorFactory: Insights.GetAdAccountInsightsError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Get campaign insights
   *
   * @remarks
   * Retrieves performance insights for a specific campaign including impressions, clicks, spend,
   * and conversion metrics.
   *
   * @returns Successfully retrieved campaign insights
   *
   * @throws {@link Insights.GetCampaignInsightsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCampaignInsights(
    request: Insights.GetCampaignInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsResponse, Insights.GetCampaignInsightsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{campaign_id}/insights"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "campaign_id", value: request.campaignId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "time_range", value: request.timeRange, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsResponseSchema },
        errorFactory: Insights.GetCampaignInsightsError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type GetAdAccountInsightsRequest = {
    /** The ID of the ad account (numeric, without the act_ prefix) */
    adAccountId: string;
    /**
     * Comma-separated list of fields to include in the response. If omitted, default fields are
     * returned.
     */
    fields?: string;
    /** JSON object specifying the date range with since and until fields in YYYY-MM-DD format. */
    timeRange?: string;
    /** Comma-separated list of breakdown dimensions such as age, gender, country, or placement. */
    breakdowns?: string;
    /** Level of aggregation for results. Options include account, campaign, adset, or ad. */
    level?: Level;
    /** Number of days for each increment in the time range, or use monthly or all_days. */
    timeIncrement?: string;
  };

  export class GetAdAccountInsightsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAdAccountInsightsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCampaignInsightsRequest = {
    /** The ID of the campaign */
    campaignId: string;
    /**
     * Comma-separated list of fields to include in the response. If omitted, default fields are
     * returned.
     */
    fields?: string;
    /** JSON object specifying the date range with since and until fields in YYYY-MM-DD format. */
    timeRange?: string;
  };

  export class GetCampaignInsightsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetCampaignInsightsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
