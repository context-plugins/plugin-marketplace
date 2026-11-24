import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  igHashtagSearchResponseSchema,
  type IgHashtagSearchResponse,
} from "../models/ig-hashtag-search-response.js";
import { mediaListSchema, type MediaList } from "../models/media-list.js";
import type { Servers } from "../servers.js";

/**
 * Hashtag search and media discovery
 */
export class Hashtags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Instagram Get Hashtag Recent Media
   *
   * @remarks
   * Get the most recently published media tagged with a specific hashtag.
   *
   * @returns Recent media for the hashtag.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHashtagRecentMedia(
    request: Hashtags.GetHashtagRecentMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{hashtag_id}/recent_media"),
        auth: noneAuth,
        pathParams: [{ name: "hashtag_id", value: request.hashtagId, schema: s.string() }],
        query: [
          { name: "user_id", value: request.userId, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mediaListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get Hashtag Top Media
   *
   * @remarks
   * Get the most popular media tagged with a specific hashtag.
   *
   * @returns Top media for the hashtag.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHashtagTopMedia(
    request: Hashtags.GetHashtagTopMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{hashtag_id}/top_media"),
        auth: noneAuth,
        pathParams: [{ name: "hashtag_id", value: request.hashtagId, schema: s.string() }],
        query: [
          { name: "user_id", value: request.userId, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mediaListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Search Hashtag
   *
   * @remarks
   * Search for a hashtag by name and get its ID.
   *
   * @returns Hashtag search results.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchHashtag(
    request: Hashtags.SearchHashtagRequest,
    options?: RequestOptions,
  ): ApiPromise<IgHashtagSearchResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ig_hashtag_search"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "user_id", value: request.userId, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: igHashtagSearchResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Hashtags {
  export type GetHashtagRecentMediaRequest = {
    hashtagId: string;
    userId: string;
    accessToken: string;
    fields?: string;
  };

  export type GetHashtagTopMediaRequest = {
    hashtagId: string;
    userId: string;
    accessToken: string;
    fields?: string;
  };

  export type SearchHashtagRequest = {
    /** The hashtag to search for (without */
    q: string;
    /** The ID of the user making the request. */
    userId: string;
    accessToken: string;
  };
}
