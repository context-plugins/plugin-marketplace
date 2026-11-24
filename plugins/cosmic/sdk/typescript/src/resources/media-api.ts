import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { mediaListResponseInternalSchema, type MediaListResponse } from "../models/media-list-response.js";
import { mediaResponseInternalSchema, type MediaResponse } from "../models/media-response.js";
import { mediaUpdateSchema, type MediaUpdate } from "../models/media-update.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { sortSchema, type Sort } from "../models/sort.js";
import type { Servers } from "../servers.js";

/**
 * Media are the images, files, and documents in a Bucket. Upload is served by workers.cosmicjs.com
 * and is not part of this document.
 */
export class MediaApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a media item
   *
   * @remarks
   * Delete a media item from the Bucket. The file is removed from storage and the CDN caches are
   * purged, so its URL stops working. Objects and Metafields that reference the media are not
   * updated automatically: clear those references yourself. This is destructive and not reversible
   * through the API.
   *
   * @returns The media item was deleted.
   *
   * @throws {@link MediaApi.DeleteMediaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMedia(
    request: MediaApi.DeleteMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, MediaApi.DeleteMediaError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/buckets/{slug}/media/{media_id}"),
        auth: this.#auth.writeKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "media_id", value: request.mediaId, schema: s.string() },
        ],
        query: [
          { name: "trigger_webhook", value: request.triggerWebhook, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: MediaApi.DeleteMediaError,
      },
      options,
    );
  }

  /**
   * Get a media item by id
   *
   * @remarks
   * Retrieve a single media item by its id. To fetch by file name instead, query the media list
   * endpoint with `query={"name":"..."}`.
   *
   * @returns The requested media item.
   *
   * @throws {@link MediaApi.GetMediaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMedia(
    request: MediaApi.GetMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaResponse, MediaApi.GetMediaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/media/{media_id}"),
        auth: this.#auth.readKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "media_id", value: request.mediaId, schema: s.string() },
        ],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "props", value: request.props, schema: s.optional(s.string()) },
          { name: "useCache", value: request.useCache, schema: s.defaulted(s.boolean(), true) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mediaResponseInternalSchema },
        errorFactory: MediaApi.GetMediaError,
      },
      options,
    );
  }

  /**
   * List and query media
   *
   * @remarks
   * Query media in the Bucket. This is also how you fetch a single media item by name: pass
   * `query={"name":"7f9403a32f29-toucan.jpg"}`.
   *
   * The `name` of a media item is the value you assign to a File or Image Metafield when creating
   * or updating an Object. Upload is not part of this host: `POST /v3/buckets/{slug}/media` is
   * served by `https://workers.cosmicjs.com`.
   *
   * @returns The matching media.
   *
   * @throws {@link MediaApi.ListMediaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMedia(
    request: MediaApi.ListMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaListResponse, MediaApi.ListMediaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/media"),
        auth: this.#auth.readKey,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "props", value: request.props, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 1000) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          { name: "useCache", value: request.useCache, schema: s.defaulted(s.boolean(), true) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mediaListResponseInternalSchema },
        errorFactory: MediaApi.ListMediaError,
      },
      options,
    );
  }

  /**
   * Update media metadata
   *
   * @remarks
   * Update the folder, alt text, or user metadata on a media item. The underlying file is not
   * replaced: to change the file, upload a new one via `https://workers.cosmicjs.com` and repoint
   * the referencing Metafields.
   *
   * @returns The updated media item.
   *
   * @throws {@link MediaApi.UpdateMediaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMedia(
    request: MediaApi.UpdateMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaResponse, MediaApi.UpdateMediaError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/buckets/{slug}/media/{media_id}"),
        auth: this.#auth.writeKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "media_id", value: request.mediaId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mediaUpdateSchema },
      },
      {
        success: { kind: "json", schema: mediaResponseInternalSchema },
        errorFactory: MediaApi.UpdateMediaError,
      },
      options,
    );
  }
}

export namespace MediaApi {
  export type DeleteMediaRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The media id. */
    mediaId: string;
    /** Set to `true` to fire the corresponding webhook for this action. @default false */
    triggerWebhook?: boolean;
  };

  export class DeleteMediaError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMediaError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetMediaRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The media id. */
    mediaId: string;
    /** The Bucket read key. Required unless the Bucket has no read key configured. */
    readKey?: string;
    /**
     * Comma-separated list of properties to return, including nested metadata paths. Omit to return
     * everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap
     * and to reduce latency.
     */
    props?: string;
    /**
     * Set to `false` to bypass the cache and read through to the database. Guarantees you see
     * writes you just made, at the cost of higher latency.
     *
     * @default true
     */
    useCache?: boolean;
    /**
     * Set to `true` to indent the JSON response for human reading. Increases response size.
     *
     * @default false
     */
    pretty?: boolean;
  };

  export class GetMediaError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMediaError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListMediaRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Bucket read key. Required unless the Bucket has no read key configured. */
    readKey?: string;
    /**
     * A URL-encoded JSON object used to filter results. Follows MongoDB comparison (`$eq`, `$gt`,
     * `$gte`, `$lt`, `$lte`, `$in`, `$all`, `$ne`, `$nin`), evaluation (`$regex` with `$options`),
     * and logical (`$and`, `$or`, `$not`, `$nor`) operators. Query Object Relationship Metafields
     * by the related Object's `id`, not its `slug`.
     */
    query?: string;
    /**
     * Comma-separated list of properties to return, including nested metadata paths. Omit to return
     * everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap
     * and to reduce latency.
     */
    props?: string;
    /** Sort order. Prefix with `-` for descending. */
    sort?: Sort;
    /** Maximum number of results to return. @default 1000 */
    limit?: number;
    /**
     * Offset pagination: number of results to skip. Use `after` instead for large collections. Only
     * one of `skip` and `after` may be used.
     *
     * @default 0
     */
    skip?: number;
    /**
     * Set to `false` to bypass the cache and read through to the database. Guarantees you see
     * writes you just made, at the cost of higher latency.
     *
     * @default true
     */
    useCache?: boolean;
    /**
     * Set to `true` to indent the JSON response for human reading. Increases response size.
     *
     * @default false
     */
    pretty?: boolean;
  };

  export const listMediaRequestSchema: Schema<ListMediaRequest> = s.lazySchema(() =>
    s.object<ListMediaRequest>({
      slug: s.string(),
      readKey: s.optional(s.string()),
      query: s.optional(s.string()),
      props: s.optional(s.string()),
      sort: s.optional(s.lazy(() => sortSchema)),
      limit: s.defaulted(s.int().check(s.gte(1)), 1000),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      useCache: s.defaulted(s.boolean(), true),
      pretty: s.defaulted(s.boolean(), false),
    }),
  );

  export class ListMediaError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMediaError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 413, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type UpdateMediaRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The media id. */
    mediaId: string;
    body: MediaUpdate;
  };

  export class UpdateMediaError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMediaError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
