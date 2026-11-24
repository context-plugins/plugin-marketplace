import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1ReportsAnalyticsResponseSchema,
  type ApiV1ReportsAnalyticsResponse,
} from "../models/api-v1-reports-analytics-response.js";
import {
  apiV1ReportsArchiveRequestSchema,
  type ApiV1ReportsArchiveRequest,
} from "../models/api-v1-reports-archive-request.js";
import {
  apiV1ReportsArchiveResponseSchema,
  type ApiV1ReportsArchiveResponse,
} from "../models/api-v1-reports-archive-response.js";
import {
  apiV1ReportsCommentsRequestInternalSchema,
  type ApiV1ReportsCommentsRequest,
} from "../models/api-v1-reports-comments-request.js";
import {
  apiV1ReportsCommentsResponseSchema,
  type ApiV1ReportsCommentsResponse,
} from "../models/api-v1-reports-comments-response.js";
import {
  apiV1ReportsCommentsResponse1Schema,
  type ApiV1ReportsCommentsResponse1,
} from "../models/api-v1-reports-comments-response1.js";
import {
  apiV1ReportsCommentsResponse2Schema,
  type ApiV1ReportsCommentsResponse2,
} from "../models/api-v1-reports-comments-response2.js";
import {
  apiV1ReportsCopyRequestInternalSchema,
  type ApiV1ReportsCopyRequest,
} from "../models/api-v1-reports-copy-request.js";
import {
  apiV1ReportsCopyResponseSchema,
  type ApiV1ReportsCopyResponse,
} from "../models/api-v1-reports-copy-response.js";
import {
  apiV1ReportsDataResponseSchema,
  type ApiV1ReportsDataResponse,
} from "../models/api-v1-reports-data-response.js";
import {
  apiV1ReportsDataResponse1Schema,
  type ApiV1ReportsDataResponse1,
} from "../models/api-v1-reports-data-response1.js";
import {
  apiV1ReportsRequestInternalSchema,
  type ApiV1ReportsRequest,
} from "../models/api-v1-reports-request.js";
import {
  apiV1ReportsRequest1InternalSchema,
  type ApiV1ReportsRequest1,
} from "../models/api-v1-reports-request1.js";
import { apiV1ReportsResponseSchema, type ApiV1ReportsResponse } from "../models/api-v1-reports-response.js";
import {
  apiV1ReportsResponse1InternalSchema,
  type ApiV1ReportsResponse1,
} from "../models/api-v1-reports-response1.js";
import {
  apiV1ReportsResponse3Schema,
  type ApiV1ReportsResponse3,
} from "../models/api-v1-reports-response3.js";
import {
  apiV1ReportsResponse4InternalSchema,
  type ApiV1ReportsResponse4,
} from "../models/api-v1-reports-response4.js";
import {
  apiV1ReportsRevisionBriefsRequestInternalSchema,
  type ApiV1ReportsRevisionBriefsRequest,
} from "../models/api-v1-reports-revision-briefs-request.js";
import {
  apiV1ReportsRevisionBriefsResponseSchema,
  type ApiV1ReportsRevisionBriefsResponse,
} from "../models/api-v1-reports-revision-briefs-response.js";
import {
  apiV1ReportsRollbackRequestInternalSchema,
  type ApiV1ReportsRollbackRequest,
} from "../models/api-v1-reports-rollback-request.js";
import {
  apiV1ReportsRollbackResponseSchema,
  type ApiV1ReportsRollbackResponse,
} from "../models/api-v1-reports-rollback-response.js";
import {
  apiV1ReportsSendRequestInternalSchema,
  type ApiV1ReportsSendRequest,
} from "../models/api-v1-reports-send-request.js";
import {
  apiV1ReportsSendResponseSchema,
  type ApiV1ReportsSendResponse,
} from "../models/api-v1-reports-send-response.js";
import {
  apiV1ReportsShareRequestInternalSchema,
  type ApiV1ReportsShareRequest,
} from "../models/api-v1-reports-share-request.js";
import {
  apiV1ReportsShareRequest1InternalSchema,
  type ApiV1ReportsShareRequest1,
} from "../models/api-v1-reports-share-request1.js";
import {
  apiV1ReportsShareResponseInternalSchema,
  type ApiV1ReportsShareResponse,
} from "../models/api-v1-reports-share-response.js";
import {
  apiV1ReportsShareResponse1InternalSchema,
  type ApiV1ReportsShareResponse1,
} from "../models/api-v1-reports-share-response1.js";
import {
  apiV1ReportsVersionsRequestInternalSchema,
  type ApiV1ReportsVersionsRequest,
} from "../models/api-v1-reports-versions-request.js";
import {
  apiV1ReportsVersionsResponseInternalSchema,
  type ApiV1ReportsVersionsResponse,
} from "../models/api-v1-reports-versions-response.js";
import {
  apiV1ReportsVersionsResponse2Schema,
  type ApiV1ReportsVersionsResponse2,
} from "../models/api-v1-reports-versions-response2.js";
import {
  apiV1ReportsVersions409Error1Schema,
  type ApiV1ReportsVersions409Error1,
} from "../models/api-v1-reports-versions409-error1.js";
import { formatSchema, type Format } from "../models/format.js";
import { status12Schema, type Status12 } from "../models/status12.js";
import type { Servers } from "../servers.js";

export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retract a comment
   *
   * @remarks
   * Take back a comment this credential posted. Your own last comment in a thread, while the thread
   * is open: once somebody has replied it stays, so their reply is never left answering something
   * no longer on the page. Retracting the only comment in a thread takes the thread and its
   * highlight with it, and removes any images attached to the comment. It unsends nothing — the
   * report's owner may have been emailed when it was posted. `commentId` comes from the `POST`
   * above or from `GET /reports/{idOrSlug}/comments`, which marks the one message this credential
   * can still take back.
   *
   * @returns Comment retracted
   *
   * @throws {@link Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1ReportsByIdOrSlugCommentsByCommentId(
    request: Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsCommentsResponse2, Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/comments/{commentId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "idOrSlug", value: request.idOrSlug, schema: s.string() },
          { name: "commentId", value: request.commentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReportsCommentsResponse2Schema },
        errorFactory: Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError,
      },
      options,
    );
  }

  /**
   * Remove a dataset
   *
   * @returns Removed
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1ReportsByIdOrSlugDataByName(
    request: Reports.DeleteApiV1ReportsByIdOrSlugDataByNameRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/data/{name}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "idOrSlug", value: request.idOrSlug, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Revoke audience access
   *
   * @remarks
   * Take access away from the same audience phrase that granted it. By audience rather than by
   * grant id because that is all a caller has: the audience on `GET /reports/{idOrSlug}` carries
   * each grant's *principal* id, never the grant row's. The owner's access cannot be revoked, and
   * an audience that never had access is a refusal rather than a no-op — a caller told "revoked"
   * for a grant that was not there would report the door shut while it is open.
   *
   * @returns Grants removed
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1ReportsByIdOrSlugShare(
    request: Reports.DeleteApiV1ReportsByIdOrSlugShareRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsShareResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/share"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsShareRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsShareResponse1InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List reports
   *
   * @returns Reports in the organisation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Reports(
    request: Reports.GetApiV1ReportsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reports"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReportsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a report
   *
   * @returns Report detail
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ReportsByIdOrSlug(
    request: Reports.GetApiV1ReportsByIdOrSlugRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsResponse4, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReportsResponse4InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Who read a report, and when
   *
   * @remarks
   * The same figures the report page shows. Total views are on every plan; unique, internal and
   * external viewers, the 30-day series, per-version views and recent readers need the analytics
   * entitlement and come back null or empty without it. Reader names appear only when the
   * organisation's sharing policy shows viewer identities.
   *
   * @returns Readership
   *
   * @throws {@link Reports.GetApiV1ReportsByIdOrSlugAnalyticsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ReportsByIdOrSlugAnalytics(
    request: Reports.GetApiV1ReportsByIdOrSlugAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsAnalyticsResponse, Reports.GetApiV1ReportsByIdOrSlugAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/analytics"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReportsAnalyticsResponseSchema },
        errorFactory: Reports.GetApiV1ReportsByIdOrSlugAnalyticsError,
      },
      options,
    );
  }

  /**
   * List comments on a report
   *
   * @remarks
   * Threads with the quoted passage and a plain-text excerpt of the surrounding content in the
   * *current* version, so a client can find what to change without fetching the file.
   * `anchorStatus` says whether the commented text still exists: `anchored` and `shifted` mean it
   * does; `stale` means it was edited away, and the excerpt then comes from the version the comment
   * was written against.
   *
   * @returns Comment threads
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ReportsByIdOrSlugComments(
    request: Reports.GetApiV1ReportsByIdOrSlugCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsCommentsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status12Schema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReportsCommentsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List a report's datasets
   *
   * @returns Datasets
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ReportsByIdOrSlugData(
    request: Reports.GetApiV1ReportsByIdOrSlugDataRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsDataResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/data"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReportsDataResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * The report as an evidence pack
   *
   * @remarks
   * The whole record of one piece of work: every approval, review and request for information with
   * who was asked and what they said, the report's version history, and the timeline across all of
   * it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack
   * contains everything, so it takes every scope that reads any of it. ?format=csv returns the
   * timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as
   * evidence.exported, with the pack's digest, so the trail records which copy was taken. For a
   * report the steps are the approvals, reviews and requests that point at it, which is the subject
   * an auditor usually names and works for work done before flows existed.
   *
   * @returns The pack (JSON), or the timeline (CSV)
   *
   * @throws {@link Reports.GetApiV1ReportsByIdOrSlugEvidenceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ReportsByIdOrSlugEvidence(
    request: Reports.GetApiV1ReportsByIdOrSlugEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Reports.GetApiV1ReportsByIdOrSlugEvidenceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/evidence"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [{ name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Reports.GetApiV1ReportsByIdOrSlugEvidenceError,
      },
      options,
    );
  }

  /**
   * List versions
   *
   * @returns Version history
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ReportsByIdOrSlugVersions(
    request: Reports.GetApiV1ReportsByIdOrSlugVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsVersionsResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/versions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ReportsVersionsResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Rename a report
   *
   * @remarks
   * Change the title, the address, or both. Changing the address keeps the old one: it permanently
   * redirects to the new URL, so links already shared keep working. `previousSlug` names the
   * address that was kept, or null when only the title changed.
   *
   * @returns Renamed
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchApiV1ReportsByIdOrSlug(
    request: Reports.PatchApiV1ReportsByIdOrSlugRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsResponse3, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsResponse3Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Publish a report
   *
   * @remarks
   * Publish from an uploadId, inline HTML content, or inline files. Creates the report on first
   * publish; new versions after that. `taskId` keeps the report with a Task Graph task: it is
   * listed on the task and returned in the task's context. A later publish naming another task
   * moves it there, and one naming none leaves it where it is. Naming a task needs `tasks:read` on
   * the key and the Tasks plan feature (`402 feature_unavailable` without it).
   *
   * @returns Published
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Reports(
    request: Reports.PostApiV1ReportsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsResponse1InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Archive a report, or put it back
   *
   * @remarks
   * Archiving stops the URL serving: a reader following a link they already hold is told the report
   * is no longer available. Nothing is deleted and the audience is kept, so `{"archived": false}`
   * restores it exactly as it was. The body is optional and defaults to archiving.
   *
   * @returns Archived, or restored
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReportsByIdOrSlugArchive(
    request: Reports.PostApiV1ReportsByIdOrSlugArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsArchiveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/archive"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsArchiveRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsArchiveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Comment on a report
   *
   * @remarks
   * Omit `quote` for a comment about the report as a whole. Include it and the comment attaches to
   * that passage and highlights it, the way a reader's selection does. The quote must occur exactly
   * once in the current version; otherwise the request is refused rather than placed on a guess.
   *
   * @returns Comment posted
   *
   * @throws {@link Reports.PostApiV1ReportsByIdOrSlugCommentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReportsByIdOrSlugComments(
    request: Reports.PostApiV1ReportsByIdOrSlugCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsCommentsResponse1, Reports.PostApiV1ReportsByIdOrSlugCommentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsCommentsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsCommentsResponse1Schema },
        errorFactory: Reports.PostApiV1ReportsByIdOrSlugCommentsError,
      },
      options,
    );
  }

  /**
   * Copy a report
   *
   * @remarks
   * Duplicate a report's current version into a new report you own — the primitive behind
   * duplicating a report and behind using one as a template. The copy carries the content, the
   * classification and any datasets; it carries **no** audience, comments or share links, and
   * starts private to you. Requires that you can already read the source and may publish. Agent
   * keys are refused: a copy lands outside an agent's allow-list.
   *
   * @returns The new report
   *
   * @throws {@link Reports.PostApiV1ReportsByIdOrSlugCopyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReportsByIdOrSlugCopy(
    request: Reports.PostApiV1ReportsByIdOrSlugCopyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsCopyResponse, Reports.PostApiV1ReportsByIdOrSlugCopyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/copy"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsCopyRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsCopyResponseSchema },
        errorFactory: Reports.PostApiV1ReportsByIdOrSlugCopyError,
      },
      options,
    );
  }

  /**
   * Compose the open feedback into a revision brief
   *
   * @remarks
   * One prompt an agent can revise the report from: each open thread's quoted passage, the
   * surrounding text in the current version, the conversation, and signed links to the images
   * readers attached, ending with how to publish the next version and close each thread. Composing
   * a brief is recorded on the report. Pass `threadIds` to include only some open threads.
   *
   * @returns The brief
   *
   * @throws {@link Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReportsByIdOrSlugRevisionBriefs(
    request: Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsRevisionBriefsResponse, Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/revision-briefs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsRevisionBriefsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsRevisionBriefsResponseSchema },
        errorFactory: Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError,
      },
      options,
    );
  }

  /**
   * Roll back to an earlier version
   *
   * @remarks
   * Serve an earlier version again at the same URL. Name it by number — the `currentVersion` and
   * `latestVersion` every other endpoint returns — or by `versionId` from the versions list.
   * Nothing is deleted: roll forward the same way.
   *
   * Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.
   *
   * @returns Rolled back
   *
   * @throws {@link Reports.PostApiV1ReportsByIdOrSlugRollbackError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReportsByIdOrSlugRollback(
    request: Reports.PostApiV1ReportsByIdOrSlugRollbackRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsRollbackResponse, Reports.PostApiV1ReportsByIdOrSlugRollbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/rollback"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsRollbackRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsRollbackResponseSchema },
        errorFactory: Reports.PostApiV1ReportsByIdOrSlugRollbackError,
      },
      options,
    );
  }

  /**
   * Email a report to a list of addresses
   *
   * @remarks
   * Distinct from `POST …/share`, which grants access to people the organisation already knows.
   * This takes bare email addresses, creates the guest records behind them, grants access and
   * emails each recipient a link with the sender's covering note.
   *
   * **Not a mailing list.** Each recipient gets their own link tied to their own guest record,
   * which is what makes the audit trail and the per-reader analytics mean anything — and why the
   * list is capped at 50. The link keeps working as the report is updated, so there is no new file
   * to send next time.
   *
   * Governed by everything a share is, because it grants through the same function: the
   * `share_external` publishing policy — which the seeded confidential-and-restricted rule denies
   * outright — the agent's own allow-list, the expiry clamp, the audit trail and the
   * `report.shared` webhook. A recipient who already had access is emailed again rather than
   * skipped: re-sending to somebody who says they never got it is the point.
   *
   * @returns Sent
   *
   * @throws {@link Reports.PostApiV1ReportsByIdOrSlugSendError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReportsByIdOrSlugSend(
    request: Reports.PostApiV1ReportsByIdOrSlugSendRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsSendResponse, Reports.PostApiV1ReportsByIdOrSlugSendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/send"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsSendRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsSendResponseSchema },
        errorFactory: Reports.PostApiV1ReportsByIdOrSlugSendError,
      },
      options,
    );
  }

  /**
   * Grant audience access
   *
   * @remarks
   * `capability` is what the audience may do: `view` (the default) or `comment`. A grant that
   * already exists is only ever raised, never lowered, by granting again.
   *
   * @returns Grants applied
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReportsByIdOrSlugShare(
    request: Reports.PostApiV1ReportsByIdOrSlugShareRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsShareResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/share"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsShareRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsShareResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Publish a new version (update a living report)
   *
   * @returns New version published
   *
   * @throws {@link Reports.PostApiV1ReportsByIdOrSlugVersionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ReportsByIdOrSlugVersions(
    request: Reports.PostApiV1ReportsByIdOrSlugVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsVersionsResponse, Reports.PostApiV1ReportsByIdOrSlugVersionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/versions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "idOrSlug", value: request.idOrSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ReportsVersionsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ReportsVersionsResponseInternalSchema },
        errorFactory: Reports.PostApiV1ReportsByIdOrSlugVersionsError,
      },
      options,
    );
  }

  /**
   * Replace a report's live data
   *
   * @remarks
   * Data the published report fetches at view time, so a dashboard can show current numbers without
   * republishing. The body is JSON, stored verbatim, up to 5 MB. Served behind the same access
   * check as the report and never edge-cached.
   *
   * **A dataset is mutable and a version is not.** Rolling the report back does not roll the data
   * back — the earlier markup renders today's numbers.
   *
   * @returns Stored
   *
   * @throws {@link Reports.PutApiV1ReportsByIdOrSlugDataByNameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putApiV1ReportsByIdOrSlugDataByName(
    request: Reports.PutApiV1ReportsByIdOrSlugDataByNameRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ReportsDataResponse1, Reports.PutApiV1ReportsByIdOrSlugDataByNameError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/reports/{idOrSlug}/data/{name}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "idOrSlug", value: request.idOrSlug, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: apiV1ReportsDataResponse1Schema },
        errorFactory: Reports.PutApiV1ReportsByIdOrSlugDataByNameError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest = {
    idOrSlug: string;
    commentId: string;
  };

  export class DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteApiV1ReportsByIdOrSlugDataByNameRequest = {
    idOrSlug: string;
    name: string;
  };

  export type DeleteApiV1ReportsByIdOrSlugShareRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsShareRequest1;
  };

  export type GetApiV1ReportsRequest = {
    /** Searches title, slug and description */
    q?: string;
    /** Rows per page. Above the maximum you get the maximum, not an error. */
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
  };

  export const getApiV1ReportsRequestSchema: Schema<GetApiV1ReportsRequest> = s.lazySchema(() =>
    s.object<GetApiV1ReportsRequest>({
      q: s.optional(s.string()),
      limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
      cursor: s.optional(s.string()),
    }),
  );

  export type GetApiV1ReportsByIdOrSlugRequest = {
    idOrSlug: string;
  };

  export type GetApiV1ReportsByIdOrSlugAnalyticsRequest = {
    idOrSlug: string;
  };

  export class GetApiV1ReportsByIdOrSlugAnalyticsError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ReportsByIdOrSlugAnalyticsError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1ReportsByIdOrSlugCommentsRequest = {
    idOrSlug: string;
    /** Defaults to open — the threads still needing action */
    status?: Status12;
    /** Rows per page. Above the maximum you get the maximum, not an error. */
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
  };

  export const getApiV1ReportsByIdOrSlugCommentsRequestSchema: Schema<GetApiV1ReportsByIdOrSlugCommentsRequest> =
    s.lazySchema(() =>
      s.object<GetApiV1ReportsByIdOrSlugCommentsRequest>({
        idOrSlug: s.string(),
        status: s.optional(s.lazy(() => status12Schema)),
        limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
        cursor: s.optional(s.string()),
      }),
    );

  export type GetApiV1ReportsByIdOrSlugDataRequest = {
    idOrSlug: string;
  };

  export type GetApiV1ReportsByIdOrSlugEvidenceRequest = {
    idOrSlug: string;
    format?: Format;
  };

  export class GetApiV1ReportsByIdOrSlugEvidenceError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ReportsByIdOrSlugEvidenceError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1ReportsByIdOrSlugVersionsRequest = {
    idOrSlug: string;
    /** Rows per page. Above the maximum you get the maximum, not an error. */
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
  };

  export const getApiV1ReportsByIdOrSlugVersionsRequestSchema: Schema<GetApiV1ReportsByIdOrSlugVersionsRequest> =
    s.lazySchema(() =>
      s.object<GetApiV1ReportsByIdOrSlugVersionsRequest>({
        idOrSlug: s.string(),
        limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
        cursor: s.optional(s.string()),
      }),
    );

  export type PatchApiV1ReportsByIdOrSlugRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsRequest1;
  };

  export type PostApiV1ReportsRequest = {
    body?: ApiV1ReportsRequest;
  };

  export type PostApiV1ReportsByIdOrSlugArchiveRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsArchiveRequest;
  };

  export type PostApiV1ReportsByIdOrSlugCommentsRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsCommentsRequest;
  };

  export class PostApiV1ReportsByIdOrSlugCommentsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ReportsByIdOrSlugCommentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ReportsByIdOrSlugCopyRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsCopyRequest;
  };

  export class PostApiV1ReportsByIdOrSlugCopyError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ReportsByIdOrSlugCopyError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ReportsByIdOrSlugRevisionBriefsRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsRevisionBriefsRequest;
  };

  export class PostApiV1ReportsByIdOrSlugRevisionBriefsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ReportsByIdOrSlugRevisionBriefsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ReportsByIdOrSlugRollbackRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsRollbackRequest;
  };

  export class PostApiV1ReportsByIdOrSlugRollbackError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ReportsByIdOrSlugRollbackError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ReportsByIdOrSlugSendRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsSendRequest;
  };

  export class PostApiV1ReportsByIdOrSlugSendError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ReportsByIdOrSlugSendError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1ReportsByIdOrSlugShareRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsShareRequest;
  };

  export type PostApiV1ReportsByIdOrSlugVersionsRequest = {
    idOrSlug: string;
    body?: ApiV1ReportsVersionsRequest;
  };

  export class PostApiV1ReportsByIdOrSlugVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1ReportsVersions409Error1", ApiV1ReportsVersions409Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ReportsByIdOrSlugVersionsError> = [
      {
        on: 409,
        kind: "apiV1ReportsVersions409Error1",
        decode: { kind: "json", schema: apiV1ReportsVersions409Error1Schema },
      },
    ];
  }

  export type PutApiV1ReportsByIdOrSlugDataByNameRequest = {
    idOrSlug: string;
    name: string;
    body?: Record<string, unknown>;
  };

  export class PutApiV1ReportsByIdOrSlugDataByNameError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutApiV1ReportsByIdOrSlugDataByNameError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
    ];
  }
}
