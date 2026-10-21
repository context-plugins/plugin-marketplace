import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  auditLogEntryListingRepCollectionSchema,
  type AuditLogEntryListingRepCollection,
} from "../models/audit-log-entry-listing-rep-collection.js";
import { auditLogEntryRepSchema, type AuditLogEntryRep } from "../models/audit-log-entry-rep.js";
import { countBucketsResultSchema, type CountBucketsResult } from "../models/count-buckets-result.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { statementPostSchema, type StatementPost } from "../models/statement-post.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * LaunchDarkly maintains a record of all the changes made to any resource in the system. You can
 * access this history using the audit log API, including filtering by timestamps, or using a custom
 * policy to select which entries to receive.
 *
 * Several of the endpoints in the audit log API require an audit log entry ID. The audit log entry
 * ID is returned as part of the [List audit log
 * entries](https://launchdarkly.com/docs/api/audit-log/get-audit-log-entries) response. It is the
 * `_id` field of each element in the `items` array.
 *
 * In the LaunchDarkly UI, this information appears on the **Change history** page. To learn more,
 * read [Change history](https://launchdarkly.com/docs/home/observability/change-history).
 */
export class AuditLog {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List audit log entries
   *
   * @remarks
   * Get a list of all audit log entries. The query parameters let you restrict the results that
   * return by date ranges, resource specifiers, or a full-text search query.
   *
   * LaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To
   * learn more, read [About the resource specifier
   * syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).
   *
   * @returns Audit log entries response
   *
   * @throws {@link AuditLog.GetAuditLogEntriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAuditLogEntries(
    request: AuditLog.GetAuditLogEntriesRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditLogEntryListingRepCollection, AuditLog.GetAuditLogEntriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/auditlog"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "before", value: request.before, schema: s.optional(s.int()) },
          { name: "after", value: request.after, schema: s.optional(s.int()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "spec", value: request.spec, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditLogEntryListingRepCollectionSchema },
        errorFactory: AuditLog.GetAuditLogEntriesError,
      },
      options,
    );
  }

  /**
   * Get audit log entry
   *
   * @remarks
   * Fetch a detailed audit log entry representation. The detailed representation includes several
   * fields that are not present in the summary representation, including:
   *
   * - `previousVersion`: a JSON representation of the previous version of the entity.
   * - `currentVersion`: a JSON representation of the current version of the entity.
   * - `delta`: the JSON patch body that was used in the request to update the entity. This is only
   *   included if the update was made through a [JSON
   *   patch](https://launchdarkly.com/docs/api#updates-using-json-patch). It is null when the
   *   update was made using [semantic
   *   patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch). Because most [flag
   *   updates](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag) are made using
   *   semantic patch, this field is rarely returned.
   *
   * @returns Audit log entry response
   *
   * @throws {@link AuditLog.GetAuditLogEntryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAuditLogEntry(
    request: AuditLog.GetAuditLogEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditLogEntryRep, AuditLog.GetAuditLogEntryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/auditlog/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: auditLogEntryRepSchema },
        errorFactory: AuditLog.GetAuditLogEntryError,
      },
      options,
    );
  }

  /**
   * Search audit log entries
   *
   * @remarks
   * Search your audit log entries. The query parameters let you restrict the results that return by
   * date ranges, or a full-text search query. The request body lets you restrict the results that
   * return by resource specifiers.
   *
   * LaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To
   * learn more, read [About the resource specifier
   * syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).
   *
   * @returns Audit log entries response
   *
   * @throws {@link AuditLog.PostAuditLogEntriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postAuditLogEntries(
    request: AuditLog.PostAuditLogEntriesRequest,
    options?: RequestOptions,
  ): ApiPromise<AuditLogEntryListingRepCollection, AuditLog.PostAuditLogEntriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/auditlog"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "before", value: request.before, schema: s.optional(s.int()) },
          { name: "after", value: request.after, schema: s.optional(s.int()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.array(s.lazy(() => statementPostSchema))),
        },
      },
      {
        success: { kind: "json", schema: auditLogEntryListingRepCollectionSchema },
        errorFactory: AuditLog.PostAuditLogEntriesError,
      },
      options,
    );
  }

  /**
   * Get audit log entry counts
   *
   * @remarks
   * Returns aggregate counts of audit log entries per time bucket. Used for dashboard overlays that
   * show flag targeting changes.
   *
   * @returns Audit log entry counts response
   *
   * @throws {@link AuditLog.PostAuditLogEntryCountsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postAuditLogEntryCounts(
    request: AuditLog.PostAuditLogEntryCountsRequest,
    options?: RequestOptions,
  ): ApiPromise<CountBucketsResult, AuditLog.PostAuditLogEntryCountsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/auditlog/counts"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "after", value: request.after, schema: s.int() },
          { name: "before", value: request.before, schema: s.optional(s.int()) },
          { name: "buckets", value: request.buckets, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => statementPostSchema)) },
      },
      {
        success: { kind: "json", schema: countBucketsResultSchema },
        errorFactory: AuditLog.PostAuditLogEntryCountsError,
      },
      options,
    );
  }
}

export namespace AuditLog {
  export type GetAuditLogEntriesRequest = {
    /**
     * A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns
     * occurred before the timestamp.
     */
    before?: number;
    /**
     * A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns
     * occurred after the timestamp.
     */
    after?: number;
    /** Text to search for. You can search for the full or partial name of the resource. */
    q?: string;
    /**
     * A limit on the number of audit log entries that return. Set between 1 and 20. The default is
     * 10.
     */
    limit?: number;
    /** A resource specifier that lets you filter audit log listings by resource */
    spec?: string;
  };

  export class GetAuditLogEntriesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuditLogEntriesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetAuditLogEntryRequest = {
    /** The ID of the audit log entry */
    id: string;
  };

  export class GetAuditLogEntryError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuditLogEntryError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostAuditLogEntriesRequest = {
    /**
     * A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned
     * occurred before the timestamp.
     */
    before?: number;
    /**
     * A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned
     * occurred after the timestamp.
     */
    after?: number;
    /** Text to search for. You can search for the full or partial name of the resource. */
    q?: string;
    /**
     * A limit on the number of audit log entries that return. Set between 1 and 20. The default is
     * 10.
     */
    limit?: number;
    body?: StatementPost[];
  };

  export class PostAuditLogEntriesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAuditLogEntriesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostAuditLogEntryCountsRequest = {
    /** A timestamp filter, expressed as a Unix epoch time in milliseconds. Required. */
    after: number;
    /** A timestamp filter, expressed as a Unix epoch time in milliseconds. Defaults to now. */
    before?: number;
    /** Number of time buckets to divide the range into. Default 50, max 500. */
    buckets?: number;
    body: StatementPost[];
  };

  export class PostAuditLogEntryCountsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAuditLogEntryCountsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
