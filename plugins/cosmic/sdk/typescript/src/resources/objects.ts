import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchRequestInternalSchema, type BatchRequest } from "../models/batch-request.js";
import { batchResponseSchema, type BatchResponse } from "../models/batch-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { objectCreateSchema, type ObjectCreate } from "../models/object-create.js";
import { objectListResponseSchema, type ObjectListResponse } from "../models/object-list-response.js";
import { objectResponseSchema, type ObjectResponse } from "../models/object-response.js";
import { objectUpdateSchema, type ObjectUpdate } from "../models/object-update.js";
import { Status4, status4Schema } from "../models/status4.js";
import type { Servers } from "../servers.js";

/**
 * Objects are the basic building blocks of content. Every Object belongs to an Object type and
 * carries its field values under `metadata`.
 */
export class Objects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch create, update, and delete Objects
   *
   * @remarks
   * Perform up to 25 Object operations in a single request. Each operation succeeds or fails
   * independently, so inspect the `status` of every entry in the response rather than relying on
   * the HTTP status alone. Prefer this over repeated single-Object calls when changing many
   * Objects.
   *
   * @returns The per-operation results, in request order.
   *
   * @throws {@link Objects.BatchObjectsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchObjects(
    request: Objects.BatchObjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchResponse, Objects.BatchObjectsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects/batch"),
        auth: this.#auth.writeKey,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: batchResponseSchema },
        errorFactory: Objects.BatchObjectsError,
      },
      options,
    );
  }

  /**
   * Create an Object
   *
   * @remarks
   * Create a single Object. `title` and `type` are required; the `slug` is derived from the title
   * when omitted. Values in `metadata` must satisfy any validation configured on the Object type's
   * Metafields. To create several Objects at once, use the batch endpoint instead of looping over
   * this one.
   *
   * @returns The created Object.
   *
   * @throws {@link Objects.CreateObjectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createObject(
    request: Objects.CreateObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectResponse, Objects.CreateObjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects"),
        auth: this.#auth.writeKey,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: objectCreateSchema },
      },
      {
        success: { kind: "json", schema: objectResponseSchema },
        errorFactory: Objects.CreateObjectError,
      },
      options,
    );
  }

  /**
   * Delete an Object
   *
   * @remarks
   * Delete an Object from the Bucket. This is destructive and not reversible through the API:
   * confirm with the user before calling it.
   *
   * @returns The Object was deleted.
   *
   * @throws {@link Objects.DeleteObjectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteObject(
    request: Objects.DeleteObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, Objects.DeleteObjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects/{object_id}"),
        auth: this.#auth.writeKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "object_id", value: request.objectId, schema: s.string() },
        ],
        query: [
          { name: "trigger_webhook", value: request.triggerWebhook, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: Objects.DeleteObjectError,
      },
      options,
    );
  }

  /**
   * Get an Object by id
   *
   * @remarks
   * Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint
   * with `query={"type":"...","slug":"..."}`.
   *
   * @returns The requested Object.
   *
   * @throws {@link Objects.GetObjectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getObject(
    request: Objects.GetObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectResponse, Objects.GetObjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects/{object_id}"),
        auth: this.#auth.readKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "object_id", value: request.objectId, schema: s.string() },
        ],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "preview_token", value: request.previewToken, schema: s.optional(s.string()) },
          { name: "props", value: request.props, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.defaulted(status4Schema, Status4.Published) },
          { name: "depth", value: request.depth, schema: s.defaulted(s.int(), 0) },
          { name: "useCache", value: request.useCache, schema: s.defaulted(s.boolean(), true) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectResponseSchema },
        errorFactory: Objects.GetObjectError,
      },
      options,
    );
  }

  /**
   * List and query Objects
   *
   * @remarks
   * Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single
   * Object by slug: pass `query={"type":"posts","slug":"my-post"}` and read the first element of
   * `objects`.
   *
   * The `query` parameter is a URL-encoded JSON object following MongoDB comparison and logical
   * operator syntax. Use `props` to limit the response to the fields you need, which matters
   * because the API rejects responses over roughly 6 MB with a 413. Use `depth` to resolve Object
   * Relationship Metafields into nested Objects. For large collections, prefer cursor pagination
   * with `after` over large `skip` offsets.
   *
   * @returns The matching Objects.
   *
   * @throws {@link Objects.ListObjectsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjects(
    request: Objects.ListObjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectListResponse, Objects.ListObjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects"),
        auth: this.#auth.readKey,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "preview_token", value: request.previewToken, schema: s.optional(s.string()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "props", value: request.props, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.defaulted(status4Schema, Status4.Published) },
          { name: "sort", value: request.sort, schema: s.defaulted(s.string(), "-order") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 1000) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          { name: "depth", value: request.depth, schema: s.defaulted(s.int(), 0) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "useCache", value: request.useCache, schema: s.defaulted(s.boolean(), true) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: objectListResponseSchema },
        errorFactory: Objects.ListObjectsError,
      },
      options,
    );
  }

  /**
   * Update an Object
   *
   * @remarks
   * Update an Object in place. Only the properties you send are changed, and within `metadata` only
   * the keys you send are changed, so you can update a single Metafield without resending the rest.
   * Set `status` to `published` to publish a draft.
   *
   * @returns The updated Object.
   *
   * @throws {@link Objects.UpdateObjectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateObject(
    request: Objects.UpdateObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ObjectResponse, Objects.UpdateObjectError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects/{object_id}"),
        auth: this.#auth.writeKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "object_id", value: request.objectId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: objectUpdateSchema },
      },
      {
        success: { kind: "json", schema: objectResponseSchema },
        errorFactory: Objects.UpdateObjectError,
      },
      options,
    );
  }
}

export namespace Objects {
  export type BatchObjectsRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    body: BatchRequest;
  };

  export class BatchObjectsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<BatchObjectsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type CreateObjectRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    body: ObjectCreate;
  };

  export class CreateObjectError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateObjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeleteObjectRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Object id. */
    objectId: string;
    /** Set to `true` to fire the corresponding webhook for this action. @default false */
    triggerWebhook?: boolean;
  };

  export class DeleteObjectError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteObjectError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetObjectRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Object id. */
    objectId: string;
    /** The Bucket read key. Required unless the Bucket has no read key configured. */
    readKey?: string;
    /**
     * A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
     * valid, the request is treated as `status=any` so the latest draft is returned. Bound to one
     * Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401.
     */
    previewToken?: string;
    /**
     * Comma-separated list of properties to return, including nested metadata paths. Omit to return
     * everything. Narrowing `props` is the main way to keep responses under the 6 MB response cap
     * and to reduce latency.
     */
    props?: string;
    /**
     * Which version of each Object to return. `any` returns the latest draft or published version.
     *
     * @default Status4.Published
     */
    status?: Status4;
    /**
     * How many levels of Object Relationship Metafields to resolve into nested Objects. Circular
     * references are rejected.
     *
     * @default 0
     */
    depth?: number;
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

  export const getObjectRequestSchema: Schema<GetObjectRequest> = s.lazySchema(() =>
    s.object<GetObjectRequest>({
      slug: s.string(),
      objectId: s.string(),
      readKey: s.optional(s.string()),
      previewToken: s.optional(s.string()),
      props: s.optional(s.string()),
      status: s.defaulted(status4Schema, Status4.Published),
      depth: s.defaulted(s.int().check(s.gte(0), s.lte(3)), 0),
      useCache: s.defaulted(s.boolean(), true),
      pretty: s.defaulted(s.boolean(), false),
    }),
  );

  export class GetObjectError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListObjectsRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Bucket read key. Required unless the Bucket has no read key configured. */
    readKey?: string;
    /**
     * A short-lived JWT issued by the Cosmic dashboard (object editor > Preview). When present and
     * valid, the request is treated as `status=any` so the latest draft is returned. Bound to one
     * Bucket for one hour. Still requires `read_key`. Invalid or expired tokens return 401.
     */
    previewToken?: string;
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
    /**
     * Which version of each Object to return. `any` returns the latest draft or published version.
     *
     * @default Status4.Published
     */
    status?: Status4;
    /**
     * Sort order. Prefix with `-` for descending. Sorting by `metadata.$key` requires that
     * Metafield to be marked sortable under Object type > Settings, and is limited to two sortable
     * Metafields per type.
     *
     * @default "-order"
     */
    sort?: string;
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
     * How many levels of Object Relationship Metafields to resolve into nested Objects. Circular
     * references are rejected.
     *
     * @default 0
     */
    depth?: number;
    /**
     * Cursor pagination: the `id` of the last Object from the previous page. Follows the current
     * `sort` order with `id` as a tiebreaker, works with any `sort` except `random`, and is more
     * efficient than large `skip` offsets. Only one of `skip` and `after` may be used.
     */
    after?: string;
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

  export const listObjectsRequestSchema: Schema<ListObjectsRequest> = s.lazySchema(() =>
    s.object<ListObjectsRequest>({
      slug: s.string(),
      readKey: s.optional(s.string()),
      previewToken: s.optional(s.string()),
      query: s.optional(s.string()),
      props: s.optional(s.string()),
      status: s.defaulted(status4Schema, Status4.Published),
      sort: s.defaulted(s.string(), "-order"),
      limit: s.defaulted(s.int().check(s.gte(1)), 1000),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      depth: s.defaulted(s.int().check(s.gte(0), s.lte(3)), 0),
      after: s.optional(s.string()),
      useCache: s.defaulted(s.boolean(), true),
      pretty: s.defaulted(s.boolean(), false),
    }),
  );

  export class ListObjectsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 413, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type UpdateObjectRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Object id. */
    objectId: string;
    body: ObjectUpdate;
  };

  export class UpdateObjectError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateObjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
