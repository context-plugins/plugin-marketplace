import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { mediaListSchema, type MediaList } from "../models/media-list.js";
import { mediaSchema, type Media } from "../models/media.js";
import {
  requestInstagramGraphMediaApiSchema,
  type RequestInstagramGraphMediaApi,
} from "../models/request-instagram-graph-media-api.js";
import { responseSchema, type Response } from "../models/response.js";
import { successResponseSchema, type SuccessResponse } from "../models/success-response.js";
import type { Servers } from "../servers.js";

/**
 * Photos, videos, stories, reels, and carousels
 */
export class MediaApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Instagram Delete Media
   *
   * @remarks
   * Delete an Instagram media object (post, story, reel, or carousel).
   *
   * @returns Media deleted.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMedia(
    request: MediaApi.DeleteMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<Response, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{media_id}"),
        auth: noneAuth,
        pathParams: [{ name: "media_id", value: request.mediaId, schema: s.string() }],
        query: [{ name: "access_token", value: request.accessToken, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: responseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get Media
   *
   * @remarks
   * Get fields on an Instagram photo, video, story, reel, or album.
   *
   * @returns Media object.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMedia(request: MediaApi.GetMediaRequest, options?: RequestOptions): ApiPromise<Media, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{media_id}"),
        auth: noneAuth,
        pathParams: [{ name: "media_id", value: request.mediaId, schema: s.string() }],
        query: [
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mediaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get Carousel Children
   *
   * @remarks
   * Get media objects within a carousel album.
   *
   * @returns List of child media.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMediaChildren(
    request: MediaApi.GetMediaChildrenRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{media_id}/children"),
        auth: noneAuth,
        pathParams: [{ name: "media_id", value: request.mediaId, schema: s.string() }],
        query: [
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
   * Instagram Get User Media
   *
   * @remarks
   * Get a collection of IG Media objects published on the account.
   *
   * @returns List of media objects.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserMedia(
    request: MediaApi.GetUserMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{user_id}/media"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
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
   * Instagram Get User Stories
   *
   * @remarks
   * Get a collection of story IG Media objects on the account.
   *
   * @returns List of story media.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserStories(
    request: MediaApi.GetUserStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{user_id}/stories"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
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
   * Instagram Update Media
   *
   * @remarks
   * Enable or disable comments on a media object.
   *
   * @returns Update success.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMedia(
    request: MediaApi.UpdateMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{media_id}"),
        auth: noneAuth,
        pathParams: [{ name: "media_id", value: request.mediaId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => requestInstagramGraphMediaApiSchema)),
        },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MediaApi {
  export type DeleteMediaRequest = {
    mediaId: string;
    accessToken: string;
  };

  export type GetMediaRequest = {
    /** The IG Media ID. */
    mediaId: string;
    accessToken: string;
    /** Comma-separated list of fields. */
    fields?: string;
  };

  export type GetMediaChildrenRequest = {
    mediaId: string;
    accessToken: string;
    fields?: string;
  };

  export type GetUserMediaRequest = {
    /** The Instagram user ID. */
    userId: string;
    accessToken: string;
    /** Comma-separated list of fields. */
    fields?: string;
    /** Maximum number of results per page. */
    limit?: number;
    /** Cursor for pagination. */
    after?: string;
  };

  export type GetUserStoriesRequest = {
    userId: string;
    accessToken: string;
    fields?: string;
  };

  export type UpdateMediaRequest = {
    mediaId: string;
    body?: RequestInstagramGraphMediaApi;
  };
}
