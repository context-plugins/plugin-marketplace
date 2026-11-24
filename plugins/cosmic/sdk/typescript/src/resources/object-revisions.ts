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
import { revisionCreateSchema, type RevisionCreate } from "../models/revision-create.js";
import { revisionListResponseSchema, type RevisionListResponse } from "../models/revision-list-response.js";
import { revisionResponseSchema, type RevisionResponse } from "../models/revision-response.js";
import {
  SortCosmicRestApiV3ObjectRevisionsApi,
  sortCosmicRestApiV3ObjectRevisionsApiSchema,
} from "../models/sort-cosmic-rest-api-v3-object-revisions-api.js";
import type { Servers } from "../servers.js";

/**
 * Revisions are the version history of an Object. They can be created and read, but never edited or
 * deleted.
 */
export class ObjectRevisions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a revision to an Object
   *
   * @remarks
   * Create a new revision of an Object without publishing it. The revision is created with status
   * `draft`; publish it by updating the Object itself with `status: published`. Use this to stage
   * an edit for review rather than changing live content.
   *
   * @returns The created revision.
   *
   * @throws {@link ObjectRevisions.CreateObjectRevisionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createObjectRevision(
    request: ObjectRevisions.CreateObjectRevisionRequest,
    options?: RequestOptions,
  ): ApiPromise<RevisionResponse, ObjectRevisions.CreateObjectRevisionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects/{object_id}/revisions"),
        auth: this.#auth.writeKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "object_id", value: request.objectId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: revisionCreateSchema },
      },
      {
        success: { kind: "json", schema: revisionResponseSchema },
        errorFactory: ObjectRevisions.CreateObjectRevisionError,
      },
      options,
    );
  }

  /**
   * Get a single revision
   *
   * @remarks
   * Retrieve one revision of an Object by its id, including the `metadata` values as they were at
   * that point in history.
   *
   * @returns The requested revision.
   *
   * @throws {@link ObjectRevisions.GetObjectRevisionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getObjectRevision(
    request: ObjectRevisions.GetObjectRevisionRequest,
    options?: RequestOptions,
  ): ApiPromise<RevisionResponse, ObjectRevisions.GetObjectRevisionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects/{object_id}/revisions/{revision_id}"),
        auth: this.#auth.readKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "object_id", value: request.objectId, schema: s.string() },
          { name: "revision_id", value: request.revisionId, schema: s.string() },
        ],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "preview_token", value: request.previewToken, schema: s.optional(s.string()) },
          { name: "props", value: request.props, schema: s.optional(s.string()) },
          { name: "useCache", value: request.useCache, schema: s.defaulted(s.boolean(), true) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revisionResponseSchema },
        errorFactory: ObjectRevisions.GetObjectRevisionError,
      },
      options,
    );
  }

  /**
   * List an Object's revisions
   *
   * @remarks
   * Retrieve the version history of an Object, newest first by default. Revisions are immutable.
   *
   * @returns The Object's revisions.
   *
   * @throws {@link ObjectRevisions.ListObjectRevisionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CosmicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listObjectRevisions(
    request: ObjectRevisions.ListObjectRevisionsRequest,
    options?: RequestOptions,
  ): ApiPromise<RevisionListResponse, ObjectRevisions.ListObjectRevisionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/buckets/{slug}/objects/{object_id}/revisions"),
        auth: this.#auth.readKey,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "object_id", value: request.objectId, schema: s.string() },
        ],
        query: [
          { name: "read_key", value: request.readKey, schema: s.optional(s.string()) },
          { name: "preview_token", value: request.previewToken, schema: s.optional(s.string()) },
          { name: "props", value: request.props, schema: s.optional(s.string()) },
          {
            name: "sort",
            value: request.sort,
            schema: s.defaulted(
              sortCosmicRestApiV3ObjectRevisionsApiSchema,
              SortCosmicRestApiV3ObjectRevisionsApi.CreatedAt2,
            ),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 1000) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          { name: "useCache", value: request.useCache, schema: s.defaulted(s.boolean(), true) },
          { name: "pretty", value: request.pretty, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: revisionListResponseSchema },
        errorFactory: ObjectRevisions.ListObjectRevisionsError,
      },
      options,
    );
  }
}

export namespace ObjectRevisions {
  export type CreateObjectRevisionRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Object id. */
    objectId: string;
    body: RevisionCreate;
  };

  export class CreateObjectRevisionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateObjectRevisionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetObjectRevisionRequest = {
    /** The Bucket slug. Found under Bucket > Settings in the dashboard. */
    slug: string;
    /** The Object id. */
    objectId: string;
    /** The revision id. */
    revisionId: string;
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

  export class GetObjectRevisionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetObjectRevisionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListObjectRevisionsRequest = {
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
     * Sort order. Prefix with `-` for descending.
     *
     * @default SortCosmicRestApiV3ObjectRevisionsApi.CreatedAt2
     */
    sort?: SortCosmicRestApiV3ObjectRevisionsApi;
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

  export const listObjectRevisionsRequestSchema: Schema<ListObjectRevisionsRequest> = s.lazySchema(() =>
    s.object<ListObjectRevisionsRequest>({
      slug: s.string(),
      objectId: s.string(),
      readKey: s.optional(s.string()),
      previewToken: s.optional(s.string()),
      props: s.optional(s.string()),
      sort: s.defaulted(
        sortCosmicRestApiV3ObjectRevisionsApiSchema,
        SortCosmicRestApiV3ObjectRevisionsApi.CreatedAt2,
      ),
      limit: s.defaulted(s.int().check(s.gte(1)), 1000),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      useCache: s.defaulted(s.boolean(), true),
      pretty: s.defaulted(s.boolean(), false),
    }),
  );

  export class ListObjectRevisionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListObjectRevisionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
