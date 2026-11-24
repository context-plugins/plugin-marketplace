import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { episodeListSchema, type EpisodeList } from "../models/episode-list.js";
import { podcastDetailSchema, type PodcastDetail } from "../models/podcast-detail.js";
import { podcastListSchema, type PodcastList } from "../models/podcast-list.js";
import {
  podcastRankingHistoryEntrySchema,
  type PodcastRankingHistoryEntry,
} from "../models/podcast-ranking-history-entry.js";
import type { Servers } from "../servers.js";

/**
 * Convenience alias for items where `source_type = 'podcast_episode'`. For multi-format
 * integrations, prefer `/api/items`.
 */
export class Podcasts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Podcast ranking history
   *
   * @remarks
   * Returns the historical chart positions for a single podcast across countries and platforms,
   * most recent first. Useful for tracking a show's performance trajectory over time.
   *
   * @returns Ranking history (capped at the last few months)
   *
   * @throws {@link Podcasts.GetPodcastRankingHistoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPodcastRankingHistory(
    request: Podcasts.GetPodcastRankingHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<PodcastRankingHistoryEntry[], Podcasts.GetPodcastRankingHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/podcasts/{podcast_id}/rankings"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "podcast_id", value: request.podcastId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => podcastRankingHistoryEntrySchema)) },
        errorFactory: Podcasts.GetPodcastRankingHistoryError,
      },
      options,
    );
  }

  /**
   * Get podcast detail
   *
   * @remarks
   * Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a
   * numeric ID or a URL slug, so links you share by slug also work for API calls.
   *
   * @returns Podcast + recent episodes
   *
   * @throws {@link Podcasts.GetPublicPodcastError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPublicPodcast(
    request: Podcasts.GetPublicPodcastRequest,
    options?: RequestOptions,
  ): ApiPromise<PodcastDetail, Podcasts.GetPublicPodcastError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/podcasts/{podcast_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "podcast_id", value: request.podcastId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: podcastDetailSchema },
        errorFactory: Podcasts.GetPublicPodcastError,
      },
      options,
    );
  }

  /**
   * List episodes of a podcast
   *
   * @remarks
   * Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a
   * numeric ID or a URL slug.
   *
   * @returns Episodes ordered by publish date descending
   *
   * @throws {@link Podcasts.ListPodcastEpisodesV1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPodcastEpisodesV1(
    request: Podcasts.ListPodcastEpisodesV1Request,
    options?: RequestOptions,
  ): ApiPromise<EpisodeList, Podcasts.ListPodcastEpisodesV1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/podcasts/{podcast_id}/episodes"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "podcast_id", value: request.podcastId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: episodeListSchema },
        errorFactory: Podcasts.ListPodcastEpisodesV1Error,
      },
      options,
    );
  }

  /**
   * Search podcasts
   *
   * @remarks
   * Lists podcasts, optionally filtered by title substring or language. Results are ordered by
   * episode count (most prolific first), then alphabetically. Convenience alias for items where
   * `source_type = 'podcast_episode'` — for multi-format integrations, prefer `/api/items`.
   *
   * @returns Podcasts
   *
   * @throws {@link Podcasts.SearchPodcastsV1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPodcastsV1(
    request: Podcasts.SearchPodcastsV1Request = {},
    options?: RequestOptions,
  ): ApiPromise<PodcastList, Podcasts.SearchPodcastsV1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/podcasts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "language", value: request.language, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: podcastListSchema },
        errorFactory: Podcasts.SearchPodcastsV1Error,
      },
      options,
    );
  }
}

export namespace Podcasts {
  export type GetPodcastRankingHistoryRequest = {
    /** Numeric podcast ID OR URL slug */
    podcastId: string;
  };

  export class GetPodcastRankingHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPodcastRankingHistoryError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type GetPublicPodcastRequest = {
    /** Numeric podcast ID OR URL slug (e.g. `1234` or `supply-chain-today`) */
    podcastId: string;
  };

  export class GetPublicPodcastError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPublicPodcastError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type ListPodcastEpisodesV1Request = {
    /** Numeric podcast ID OR URL slug */
    podcastId: string;
    /** Max results (default 20, max 100) */
    limit?: number;
    /** Result offset for pagination */
    offset?: number;
  };

  export class ListPodcastEpisodesV1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPodcastEpisodesV1Error> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type SearchPodcastsV1Request = {
    /** Title substring (case-insensitive) */
    q?: string;
    /** ISO 639-1 language filter (e.g. `en`, `de`) */
    language?: string;
    /** Max results (default 20, max 100) */
    limit?: number;
    /** Result offset for pagination */
    offset?: number;
  };

  export class SearchPodcastsV1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchPodcastsV1Error> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
