import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  podcastEpisodeGetResponseSchema,
  type PodcastEpisodeGetResponse,
} from "../models/podcast-episode-get-response.js";
import { PodcastEpisodeOrderBy, podcastEpisodeOrderBySchema } from "../models/podcast-episode-order-by.js";
import { podcastEpisodeStatusSchema, type PodcastEpisodeStatus } from "../models/podcast-episode-status.js";
import {
  podcastEpisodesListResponseSchema,
  type PodcastEpisodesListResponse,
} from "../models/podcast-episodes-list-response.js";
import {
  podcastShowGetResponseSchema,
  type PodcastShowGetResponse,
} from "../models/podcast-show-get-response.js";
import { podcastShowStatusSchema, type PodcastShowStatus } from "../models/podcast-show-status.js";
import {
  podcastShowsListResponseSchema,
  type PodcastShowsListResponse,
} from "../models/podcast-shows-list-response.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import type { Servers } from "../servers.js";

export class Podcasts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get podcast episode OAuth Scope: podcasts:read
   *
   * @remarks
   * Retrieve a single episode belonging to a specific podcast.
   *
   * @returns OK
   *
   * @throws {@link Podcasts.GetEpisodeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpisode(
    request: Podcasts.GetEpisodeRequest,
    options?: RequestOptions,
  ): ApiPromise<PodcastEpisodeGetResponse, Podcasts.GetEpisodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/podcasts/{podcastShowId}/episodes/{podcastEpisodeId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "podcastShowId", value: request.podcastShowId, schema: s.string() },
          { name: "podcastEpisodeId", value: request.podcastEpisodeId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: podcastEpisodeGetResponseSchema },
        errorFactory: Podcasts.GetEpisodeError,
      },
      options,
    );
  }

  /**
   * Get podcast OAuth Scope: podcasts:read
   *
   * @remarks
   * Retrieve a single podcast belonging to a specific publication.
   *
   * @returns OK
   *
   * @throws {@link Podcasts.GetPodcastError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPodcast(
    request: Podcasts.GetPodcastRequest,
    options?: RequestOptions,
  ): ApiPromise<PodcastShowGetResponse, Podcasts.GetPodcastError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/podcasts/{podcastShowId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "podcastShowId", value: request.podcastShowId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: podcastShowGetResponseSchema },
        errorFactory: Podcasts.GetPodcastError,
      },
      options,
    );
  }

  /**
   * List podcast episodes OAuth Scope: podcasts:read
   *
   * @remarks
   * Retrieve all episodes belonging to a specific podcast.
   *
   * @returns OK
   *
   * @throws {@link Podcasts.ListEpisodesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpisodes(
    request: Podcasts.ListEpisodesRequest,
    options?: RequestOptions,
  ): ApiPromise<PodcastEpisodesListResponse, Podcasts.ListEpisodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/podcasts/{podcastShowId}/episodes"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "podcastShowId", value: request.podcastShowId, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => podcastEpisodeStatusSchema)),
          },
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.defaulted(podcastEpisodeOrderBySchema, PodcastEpisodeOrderBy.DisplayedDate),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: podcastEpisodesListResponseSchema },
        errorFactory: Podcasts.ListEpisodesError,
      },
      options,
    );
  }

  /**
   * List podcasts OAuth Scope: podcasts:read
   *
   * @remarks
   * Retrieve all podcasts belonging to a specific publication.
   *
   * @returns OK
   *
   * @throws {@link Podcasts.ListPodcastsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPodcasts(
    request: Podcasts.ListPodcastsRequest,
    options?: RequestOptions,
  ): ApiPromise<PodcastShowsListResponse, Podcasts.ListPodcastsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/podcasts"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => podcastShowStatusSchema)),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: podcastShowsListResponseSchema },
        errorFactory: Podcasts.ListPodcastsError,
      },
      options,
    );
  }
}

export namespace Podcasts {
  export type GetEpisodeRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the podcast */
    podcastShowId: string;
    /** The prefixed ID of the episode */
    podcastEpisodeId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetEpisodeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpisodeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPodcastRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the podcast */
    podcastShowId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class GetPodcastError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPodcastError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListEpisodesRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the podcast */
    podcastShowId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Use this opaque cursor token to fetch the next page of results. Obtain the value from
     * `next_cursor` in a previous response.
     */
    cursor?: string;
    /**
     * Optionally filter the results by the status of the episode.<br>`draft` - Not yet
     * published.<br>`scheduled` - Scheduled for future publication.<br>`published` - Available via
     * web and RSS.<br>`archived` - No longer available via web or RSS.
     */
    status?: PodcastEpisodeStatus;
    /**
     * The field that the results are sorted by. Defaults to `displayed_date`<br>`created` - The
     * time in which the episode was first created.<br>`updated` - The time the episode was last
     * updated.<br>`publish_date` - The exact time the system published the episode (when it went
     * live), not the scheduled time the user set.<br>`displayed_date` - The time displayed in place
     * of the `publish_date`. Uses a custom display date if set, otherwise the scheduled time the
     * user set for publication, otherwise the `publish_date`, otherwise the creation date. For
     * imported episodes, the original feed's `pubDate` is stored as the custom display date. This
     * is the same field used to order episodes in the podcast's RSS feed.
     *
     * @default PodcastEpisodeOrderBy.DisplayedDate
     */
    orderBy?: PodcastEpisodeOrderBy;
    /**
     * The direction that the results are sorted in. Defaults to desc<br> `asc` - Ascending, sorts
     * from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /** Bearer authentication */
    authorization: string;
  };

  export class ListEpisodesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpisodesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListPodcastsRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Use this opaque cursor token to fetch the next page of results. Obtain the value from
     * `next_cursor` in a previous response.
     */
    cursor?: string;
    /**
     * Optionally filter the results by the status of the podcast.<br>`draft` - No episodes have
     * been published.<br>`live` - Published and active.<br>`archived` - The podcast is no longer
     * active.
     */
    status?: PodcastShowStatus;
    /** Bearer authentication */
    authorization: string;
  };

  export class ListPodcastsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPodcastsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
