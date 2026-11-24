import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { episodeDetailInternalSchema, type EpisodeDetail } from "../models/episode-detail.js";
import { episodeListSchema, type EpisodeList } from "../models/episode-list.js";
import { transcriptInternalSchema, type Transcript } from "../models/transcript.js";
import type { Servers } from "../servers.js";

/**
 * Convenience alias for podcast-episode items. For multi-format integrations, prefer `/api/items`.
 */
export class Episodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get episode transcript
   *
   * @remarks
   * Returns the transcript on its own (segments + speaker list). Equivalent to the `transcript`
   * field on `GET /api/episodes/{id}?include=transcript`. Use this endpoint when you don't need the
   * metadata envelope.
   *
   * @returns Transcript segments + speaker list
   *
   * @throws {@link Episodes.GetEpisodeTranscriptError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpisodeTranscript(
    request: Episodes.GetEpisodeTranscriptRequest,
    options?: RequestOptions,
  ): ApiPromise<Transcript, Episodes.GetEpisodeTranscriptError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/episodes/{episode_id}/transcript"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "episode_id", value: request.episodeId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transcriptInternalSchema },
        errorFactory: Episodes.GetEpisodeTranscriptError,
      },
      options,
    );
  }

  /**
   * Get episode metadata
   *
   * @remarks
   * Returns the episode + its parent podcast. Heavy fields are opt-in via `?include=` — pass
   * `transcript`, `entities`, or both to load them in the same response. Useful when you want
   * details without paying the cost of fetching a 500KB+ transcript by default.
   *
   * @returns Episode + podcast, plus any requested optional fields
   *
   * @throws {@link Episodes.GetPublicEpisodeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPublicEpisode(
    request: Episodes.GetPublicEpisodeRequest,
    options?: RequestOptions,
  ): ApiPromise<EpisodeDetail, Episodes.GetPublicEpisodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/episodes/{episode_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "episode_id", value: request.episodeId, schema: s.string() }],
        query: [{ name: "include", value: request.include, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: episodeDetailInternalSchema },
        errorFactory: Episodes.GetPublicEpisodeError,
      },
      options,
    );
  }

  /**
   * List recent episodes
   *
   * @remarks
   * Returns the most recently published episodes across all podcasts. Convenience alias for items
   * where `source_type = 'podcast_episode'` — for multi-format integrations, prefer `/api/items`.
   *
   * @returns Episodes ordered by publish date descending
   *
   * @throws {@link Episodes.ListRecentEpisodesV1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecentEpisodesV1(
    request: Episodes.ListRecentEpisodesV1Request = {},
    options?: RequestOptions,
  ): ApiPromise<EpisodeList, Episodes.ListRecentEpisodesV1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/episodes"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: episodeListSchema },
        errorFactory: Episodes.ListRecentEpisodesV1Error,
      },
      options,
    );
  }
}

export namespace Episodes {
  export type GetEpisodeTranscriptRequest = {
    /** Numeric episode ID */
    episodeId: string;
  };

  export class GetEpisodeTranscriptError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpisodeTranscriptError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type GetPublicEpisodeRequest = {
    /** Numeric episode ID */
    episodeId: string;
    /** Comma-separated optional fields: `transcript`, `entities`. */
    include?: string;
  };

  export class GetPublicEpisodeError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPublicEpisodeError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type ListRecentEpisodesV1Request = {
    /** Max results (default 20, max 100) */
    limit?: number;
    /** Result offset for pagination */
    offset?: number;
  };

  export class ListRecentEpisodesV1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRecentEpisodesV1Error> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
