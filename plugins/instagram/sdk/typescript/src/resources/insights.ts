import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { insightsResponseSchema, type InsightsResponse } from "../models/insights-response.js";
import { periodSchema, type Period } from "../models/period.js";
import type { Servers } from "../servers.js";

/**
 * Account and media level analytics
 */
export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Instagram Get Media Insights
   *
   * @remarks
   * Get social interaction metrics for a media object.
   *
   * @returns Media insights data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMediaInsights(
    request: Insights.GetMediaInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{media_id}/insights"),
        auth: noneAuth,
        pathParams: [{ name: "media_id", value: request.mediaId, schema: s.string() }],
        query: [
          { name: "metric", value: request.metric, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get User Insights
   *
   * @remarks
   * Get social interaction metrics for the account.
   *
   * @returns Account insights data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserInsights(
    request: Insights.GetUserInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{user_id}/insights"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
          { name: "metric", value: request.metric, schema: s.string() },
          { name: "period", value: request.period, schema: periodSchema },
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "since", value: request.since, schema: s.optional(s.int()) },
          { name: "until", value: request.until, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type GetMediaInsightsRequest = {
    mediaId: string;
    /** Comma-separated list of metrics. */
    metric: string;
    accessToken: string;
  };

  export type GetUserInsightsRequest = {
    userId: string;
    /** Comma-separated list of metrics. */
    metric: string;
    /** Time period for aggregation. */
    period: Period;
    accessToken: string;
    /** Unix timestamp for start of range. */
    since?: number;
    /** Unix timestamp for end of range. */
    until?: number;
  };
}
