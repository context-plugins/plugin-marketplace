import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { chartPodcastEntrySchema, type ChartPodcastEntry } from "../models/chart-podcast-entry.js";
import type { Servers } from "../servers.js";

/**
 * Apple Podcasts and Spotify chart rankings
 */
export class Charts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Top podcasts by country
   *
   * @remarks
   * Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If `platform`
   * is omitted, results from both platforms are interleaved. Audioscrape ingests new chart
   * snapshots daily.
   *
   * @returns Podcast rankings
   *
   * @throws {@link Charts.GetChartPodcastsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChartPodcasts(
    request: Charts.GetChartPodcastsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ChartPodcastEntry[], Charts.GetChartPodcastsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/charts/podcasts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "platform", value: request.platform, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => chartPodcastEntrySchema)) },
        errorFactory: Charts.GetChartPodcastsError,
      },
      options,
    );
  }
}

export namespace Charts {
  export type GetChartPodcastsRequest = {
    /** ISO 3166-1 alpha-2 country code (default `us`) */
    country?: string;
    /** `apple` or `spotify` (default: both) */
    platform?: string;
    /** Max results (default 50, max 200) */
    limit?: number;
  };

  export class GetChartPodcastsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetChartPodcastsError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
