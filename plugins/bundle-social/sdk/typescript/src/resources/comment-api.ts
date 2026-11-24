import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1CommentImportCommentsActionRequestInternalSchema,
  type ApiV1CommentImportCommentsActionRequest,
} from "../models/api-v1-comment-import-comments-action-request.js";
import {
  apiV1CommentImportCommentsActionResponseSchema,
  type ApiV1CommentImportCommentsActionResponse,
} from "../models/api-v1-comment-import-comments-action-response.js";
import {
  apiV1CommentImportCommentsAction400Error1Schema,
  type ApiV1CommentImportCommentsAction400Error1,
} from "../models/api-v1-comment-import-comments-action400-error1.js";
import {
  apiV1CommentImportCommentsAction401Error1Schema,
  type ApiV1CommentImportCommentsAction401Error1,
} from "../models/api-v1-comment-import-comments-action401-error1.js";
import {
  apiV1CommentImportCommentsAction403Error1Schema,
  type ApiV1CommentImportCommentsAction403Error1,
} from "../models/api-v1-comment-import-comments-action403-error1.js";
import {
  apiV1CommentImportCommentsAction404Error1Schema,
  type ApiV1CommentImportCommentsAction404Error1,
} from "../models/api-v1-comment-import-comments-action404-error1.js";
import {
  apiV1CommentImportCommentsAction429Error1Schema,
  type ApiV1CommentImportCommentsAction429Error1,
} from "../models/api-v1-comment-import-comments-action429-error1.js";
import {
  apiV1CommentImportCommentsAction500Error1Schema,
  type ApiV1CommentImportCommentsAction500Error1,
} from "../models/api-v1-comment-import-comments-action500-error1.js";
import {
  apiV1CommentImportCommentsAction502Error1Schema,
  type ApiV1CommentImportCommentsAction502Error1,
} from "../models/api-v1-comment-import-comments-action502-error1.js";
import {
  apiV1CommentImportCommentsAction503Error1Schema,
  type ApiV1CommentImportCommentsAction503Error1,
} from "../models/api-v1-comment-import-comments-action503-error1.js";
import {
  apiV1CommentImportCommentsAction504Error1Schema,
  type ApiV1CommentImportCommentsAction504Error1,
} from "../models/api-v1-comment-import-comments-action504-error1.js";
import {
  apiV1CommentImportCommentsResponseSchema,
  type ApiV1CommentImportCommentsResponse,
} from "../models/api-v1-comment-import-comments-response.js";
import {
  apiV1CommentImportComments400Error1Schema,
  type ApiV1CommentImportComments400Error1,
} from "../models/api-v1-comment-import-comments400-error1.js";
import {
  apiV1CommentImportComments401Error1Schema,
  type ApiV1CommentImportComments401Error1,
} from "../models/api-v1-comment-import-comments401-error1.js";
import {
  apiV1CommentImportComments403Error1Schema,
  type ApiV1CommentImportComments403Error1,
} from "../models/api-v1-comment-import-comments403-error1.js";
import {
  apiV1CommentImportComments404Error1Schema,
  type ApiV1CommentImportComments404Error1,
} from "../models/api-v1-comment-import-comments404-error1.js";
import {
  apiV1CommentImportComments429Error1Schema,
  type ApiV1CommentImportComments429Error1,
} from "../models/api-v1-comment-import-comments429-error1.js";
import {
  apiV1CommentImportComments500Error1Schema,
  type ApiV1CommentImportComments500Error1,
} from "../models/api-v1-comment-import-comments500-error1.js";
import {
  apiV1CommentImportComments502Error1Schema,
  type ApiV1CommentImportComments502Error1,
} from "../models/api-v1-comment-import-comments502-error1.js";
import {
  apiV1CommentImportComments503Error1Schema,
  type ApiV1CommentImportComments503Error1,
} from "../models/api-v1-comment-import-comments503-error1.js";
import {
  apiV1CommentImportComments504Error1Schema,
  type ApiV1CommentImportComments504Error1,
} from "../models/api-v1-comment-import-comments504-error1.js";
import {
  apiV1CommentImportRequestSchema,
  type ApiV1CommentImportRequest,
} from "../models/api-v1-comment-import-request.js";
import {
  apiV1CommentImportResponseSchema,
  type ApiV1CommentImportResponse,
} from "../models/api-v1-comment-import-response.js";
import {
  apiV1CommentImportResponse1Schema,
  type ApiV1CommentImportResponse1,
} from "../models/api-v1-comment-import-response1.js";
import {
  apiV1CommentImport400Error1Schema,
  type ApiV1CommentImport400Error1,
} from "../models/api-v1-comment-import400-error1.js";
import {
  apiV1CommentImport401Error1Schema,
  type ApiV1CommentImport401Error1,
} from "../models/api-v1-comment-import401-error1.js";
import {
  apiV1CommentImport403Error1Schema,
  type ApiV1CommentImport403Error1,
} from "../models/api-v1-comment-import403-error1.js";
import {
  apiV1CommentImport404Error1Schema,
  type ApiV1CommentImport404Error1,
} from "../models/api-v1-comment-import404-error1.js";
import {
  apiV1CommentImport409Error1Schema,
  type ApiV1CommentImport409Error1,
} from "../models/api-v1-comment-import409-error1.js";
import {
  apiV1CommentImport429Error1Schema,
  type ApiV1CommentImport429Error1,
} from "../models/api-v1-comment-import429-error1.js";
import {
  apiV1CommentImport500Error1Schema,
  type ApiV1CommentImport500Error1,
} from "../models/api-v1-comment-import500-error1.js";
import {
  apiV1CommentImport502Error1Schema,
  type ApiV1CommentImport502Error1,
} from "../models/api-v1-comment-import502-error1.js";
import {
  apiV1CommentImport503Error1Schema,
  type ApiV1CommentImport503Error1,
} from "../models/api-v1-comment-import503-error1.js";
import {
  apiV1CommentImport504Error1Schema,
  type ApiV1CommentImport504Error1,
} from "../models/api-v1-comment-import504-error1.js";
import {
  apiV1CommentRequestInternalSchema,
  type ApiV1CommentRequest,
} from "../models/api-v1-comment-request.js";
import {
  apiV1CommentRequest1InternalSchema,
  type ApiV1CommentRequest1,
} from "../models/api-v1-comment-request1.js";
import { apiV1CommentResponseSchema, type ApiV1CommentResponse } from "../models/api-v1-comment-response.js";
import {
  apiV1CommentResponse3Schema,
  type ApiV1CommentResponse3,
} from "../models/api-v1-comment-response3.js";
import {
  apiV1CommentRetryResponseSchema,
  type ApiV1CommentRetryResponse,
} from "../models/api-v1-comment-retry-response.js";
import {
  apiV1CommentRetry400Error1Schema,
  type ApiV1CommentRetry400Error1,
} from "../models/api-v1-comment-retry400-error1.js";
import {
  apiV1CommentRetry401Error1Schema,
  type ApiV1CommentRetry401Error1,
} from "../models/api-v1-comment-retry401-error1.js";
import {
  apiV1CommentRetry403Error1Schema,
  type ApiV1CommentRetry403Error1,
} from "../models/api-v1-comment-retry403-error1.js";
import {
  apiV1CommentRetry404Error1Schema,
  type ApiV1CommentRetry404Error1,
} from "../models/api-v1-comment-retry404-error1.js";
import {
  apiV1CommentRetry429Error1Schema,
  type ApiV1CommentRetry429Error1,
} from "../models/api-v1-comment-retry429-error1.js";
import {
  apiV1CommentRetry500Error1Schema,
  type ApiV1CommentRetry500Error1,
} from "../models/api-v1-comment-retry500-error1.js";
import {
  apiV1CommentRetry502Error1Schema,
  type ApiV1CommentRetry502Error1,
} from "../models/api-v1-comment-retry502-error1.js";
import {
  apiV1CommentRetry503Error1Schema,
  type ApiV1CommentRetry503Error1,
} from "../models/api-v1-comment-retry503-error1.js";
import {
  apiV1CommentRetry504Error1Schema,
  type ApiV1CommentRetry504Error1,
} from "../models/api-v1-comment-retry504-error1.js";
import {
  apiV1Comment400Error1Schema,
  type ApiV1Comment400Error1,
} from "../models/api-v1-comment400-error1.js";
import {
  apiV1Comment401Error1Schema,
  type ApiV1Comment401Error1,
} from "../models/api-v1-comment401-error1.js";
import {
  apiV1Comment403Error1Schema,
  type ApiV1Comment403Error1,
} from "../models/api-v1-comment403-error1.js";
import {
  apiV1Comment404Error1Schema,
  type ApiV1Comment404Error1,
} from "../models/api-v1-comment404-error1.js";
import {
  apiV1Comment429Error1Schema,
  type ApiV1Comment429Error1,
} from "../models/api-v1-comment429-error1.js";
import {
  apiV1Comment500Error1Schema,
  type ApiV1Comment500Error1,
} from "../models/api-v1-comment500-error1.js";
import {
  apiV1Comment502Error1Schema,
  type ApiV1Comment502Error1,
} from "../models/api-v1-comment502-error1.js";
import {
  apiV1Comment503Error1Schema,
  type ApiV1Comment503Error1,
} from "../models/api-v1-comment503-error1.js";
import {
  apiV1Comment504Error1Schema,
  type ApiV1Comment504Error1,
} from "../models/api-v1-comment504-error1.js";
import { orderBySchema, type OrderBy } from "../models/order-by.js";
import { orderSchema, type Order } from "../models/order.js";
import {
  platformBundleSocialCommentApiSchema,
  type PlatformBundleSocialCommentApi,
} from "../models/platform-bundle-social-comment-api.js";
import { platform6Schema, type Platform6 } from "../models/platform6.js";
import {
  statusBundleSocialCommentApiSchema,
  type StatusBundleSocialCommentApi,
} from "../models/status-bundle-social-comment-api.js";
import { status4Schema, type Status4 } from "../models/status4.js";
import type { Servers } from "../servers.js";

export class CommentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create comment
   *
   * @remarks
   * Publish a comment or a reply on one of your published posts. Use it to schedule the first
   * comment on Instagram or LinkedIn, or to respond to your audience programmatically.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentCreate(
    request: CommentApi.CommentCreateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentResponse, CommentApi.CommentCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comment/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1CommentRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1CommentResponseSchema },
        errorFactory: CommentApi.CommentCreateError,
      },
      options,
    );
  }

  /**
   * Delete comment
   *
   * @remarks
   * Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before
   * it publishes.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentDeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentDelete(
    request: CommentApi.CommentDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentResponse, CommentApi.CommentDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/comment/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CommentResponseSchema },
        errorFactory: CommentApi.CommentDeleteError,
      },
      options,
    );
  }

  /**
   * Get comment
   *
   * @remarks
   * Retrieve a single comment you created through bundle.social, including its publishing status
   * and any error details.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentGet(
    request: CommentApi.CommentGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentResponse, CommentApi.CommentGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/comment/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CommentResponseSchema },
        errorFactory: CommentApi.CommentGetError,
      },
      options,
    );
  }

  /**
   * Get comment list
   *
   * @remarks
   * List and filter the comments your organization has created, with pagination. Use it to track
   * which scheduled comments published successfully.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentGetListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentGetList(
    request: CommentApi.CommentGetListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentResponse3, CommentApi.CommentGetListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/comment/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "postId", value: request.postId, schema: s.optional(s.string()) },
          { name: "importedPostId", value: request.importedPostId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status4Schema)) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.lazy(() => orderBySchema)) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => orderSchema)) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          {
            name: "platforms",
            value: request.platforms,
            schema: s.optionalNullable(s.array(s.lazy(() => platform6Schema))),
          },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CommentResponse3Schema },
        errorFactory: CommentApi.CommentGetListError,
      },
      options,
    );
  }

  /**
   * Run an action on a fetched comment
   *
   * @remarks
   * Reply to, hide, like, or delete an imported comment directly on the social platform. Use this
   * to moderate and engage without leaving your own app.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentImportActionFetchedCommentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentImportActionFetchedComment(
    request: CommentApi.CommentImportActionFetchedCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentImportCommentsActionResponse, CommentApi.CommentImportActionFetchedCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comment/import/comments/{commentId}/action"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "commentId", value: request.commentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1CommentImportCommentsActionRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1CommentImportCommentsActionResponseSchema },
        errorFactory: CommentApi.CommentImportActionFetchedCommentError,
      },
      options,
    );
  }

  /**
   * Start a new comment import for a post
   *
   * @remarks
   * Kick off an asynchronous import that pulls existing comments from a published post on the
   * social platform into bundle.social so you can read and reply to them through the API.
   *
   * @returns 201
   *
   * @throws {@link CommentApi.CommentImportCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentImportCreate(
    request: CommentApi.CommentImportCreateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentImportResponse, CommentApi.CommentImportCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comment/import"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1CommentImportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1CommentImportResponseSchema },
        errorFactory: CommentApi.CommentImportCreateError,
      },
      options,
    );
  }

  /**
   * Get comment import by ID
   *
   * @remarks
   * Check the status, progress, and result of a single comment import job.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentImportGetByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentImportGetById(
    request: CommentApi.CommentImportGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentImportResponse, CommentApi.CommentImportGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/comment/import/{importId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CommentImportResponseSchema },
        errorFactory: CommentApi.CommentImportGetByIdError,
      },
      options,
    );
  }

  /**
   * Get fetched comments for a post
   *
   * @remarks
   * List the comments pulled in by a comment import, with pagination. Use this to read audience
   * replies and decide which ones need a response.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentImportGetFetchedCommentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentImportGetFetchedComments(
    request: CommentApi.CommentImportGetFetchedCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentImportCommentsResponse, CommentApi.CommentImportGetFetchedCommentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/comment/import/comments"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "postId", value: request.postId, schema: s.optional(s.string()) },
          { name: "importedPostId", value: request.importedPostId, schema: s.optional(s.string()) },
          {
            name: "platform",
            value: request.platform,
            schema: s.optional(s.lazy(() => platformBundleSocialCommentApiSchema)),
          },
          { name: "socialAccountId", value: request.socialAccountId, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CommentImportCommentsResponseSchema },
        errorFactory: CommentApi.CommentImportGetFetchedCommentsError,
      },
      options,
    );
  }

  /**
   * Get comment import list
   *
   * @remarks
   * List comment import jobs for a team so you can monitor which imports are queued, running,
   * finished, or failed.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentImportGetListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentImportGetList(
    request: CommentApi.CommentImportGetListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentImportResponse1, CommentApi.CommentImportGetListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/comment/import"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          { name: "postId", value: request.postId, schema: s.optional(s.string()) },
          { name: "importedPostId", value: request.importedPostId, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusBundleSocialCommentApiSchema)),
          },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CommentImportResponse1Schema },
        errorFactory: CommentApi.CommentImportGetListError,
      },
      options,
    );
  }

  /**
   * Retry comment
   *
   * @remarks
   * Re-attempt publishing a comment that failed, for example after a token expired or a platform
   * outage.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentRetryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentRetry(
    request: CommentApi.CommentRetryRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentRetryResponse, CommentApi.CommentRetryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comment/{id}/retry"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CommentRetryResponseSchema },
        errorFactory: CommentApi.CommentRetryError,
      },
      options,
    );
  }

  /**
   * Update comment
   *
   * @remarks
   * Change the content or scheduled time of a comment that has not published yet.
   *
   * @returns 200
   *
   * @throws {@link CommentApi.CommentUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentUpdate(
    request: CommentApi.CommentUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentResponse, CommentApi.CommentUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/comment/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1CommentRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1CommentResponseSchema },
        errorFactory: CommentApi.CommentUpdateError,
      },
      options,
    );
  }
}

export namespace CommentApi {
  export type CommentCreateRequest = {
    /** Body */
    body?: ApiV1CommentRequest1;
  };

  export class CommentCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Comment400Error1", ApiV1Comment400Error1>
      | Declared<"apiV1Comment401Error1", ApiV1Comment401Error1>
      | Declared<"apiV1Comment403Error1", ApiV1Comment403Error1>
      | Declared<"apiV1Comment404Error1", ApiV1Comment404Error1>
      | Declared<"apiV1Comment429Error1", ApiV1Comment429Error1>
      | Declared<"apiV1Comment500Error1", ApiV1Comment500Error1>
      | Declared<"apiV1Comment502Error1", ApiV1Comment502Error1>
      | Declared<"apiV1Comment503Error1", ApiV1Comment503Error1>
      | Declared<"apiV1Comment504Error1", ApiV1Comment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentCreateError> = [
      {
        on: 400,
        kind: "apiV1Comment400Error1",
        decode: { kind: "json", schema: apiV1Comment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Comment401Error1",
        decode: { kind: "json", schema: apiV1Comment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Comment403Error1",
        decode: { kind: "json", schema: apiV1Comment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Comment404Error1",
        decode: { kind: "json", schema: apiV1Comment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Comment429Error1",
        decode: { kind: "json", schema: apiV1Comment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Comment500Error1",
        decode: { kind: "json", schema: apiV1Comment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Comment502Error1",
        decode: { kind: "json", schema: apiV1Comment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Comment503Error1",
        decode: { kind: "json", schema: apiV1Comment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Comment504Error1",
        decode: { kind: "json", schema: apiV1Comment504Error1Schema },
      },
    ];
  }

  export type CommentDeleteRequest = {
    id: string;
  };

  export class CommentDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Comment400Error1", ApiV1Comment400Error1>
      | Declared<"apiV1Comment401Error1", ApiV1Comment401Error1>
      | Declared<"apiV1Comment403Error1", ApiV1Comment403Error1>
      | Declared<"apiV1Comment404Error1", ApiV1Comment404Error1>
      | Declared<"apiV1Comment429Error1", ApiV1Comment429Error1>
      | Declared<"apiV1Comment500Error1", ApiV1Comment500Error1>
      | Declared<"apiV1Comment502Error1", ApiV1Comment502Error1>
      | Declared<"apiV1Comment503Error1", ApiV1Comment503Error1>
      | Declared<"apiV1Comment504Error1", ApiV1Comment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentDeleteError> = [
      {
        on: 400,
        kind: "apiV1Comment400Error1",
        decode: { kind: "json", schema: apiV1Comment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Comment401Error1",
        decode: { kind: "json", schema: apiV1Comment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Comment403Error1",
        decode: { kind: "json", schema: apiV1Comment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Comment404Error1",
        decode: { kind: "json", schema: apiV1Comment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Comment429Error1",
        decode: { kind: "json", schema: apiV1Comment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Comment500Error1",
        decode: { kind: "json", schema: apiV1Comment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Comment502Error1",
        decode: { kind: "json", schema: apiV1Comment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Comment503Error1",
        decode: { kind: "json", schema: apiV1Comment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Comment504Error1",
        decode: { kind: "json", schema: apiV1Comment504Error1Schema },
      },
    ];
  }

  export type CommentGetRequest = {
    id: string;
  };

  export class CommentGetError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Comment400Error1", ApiV1Comment400Error1>
      | Declared<"apiV1Comment401Error1", ApiV1Comment401Error1>
      | Declared<"apiV1Comment403Error1", ApiV1Comment403Error1>
      | Declared<"apiV1Comment404Error1", ApiV1Comment404Error1>
      | Declared<"apiV1Comment429Error1", ApiV1Comment429Error1>
      | Declared<"apiV1Comment500Error1", ApiV1Comment500Error1>
      | Declared<"apiV1Comment502Error1", ApiV1Comment502Error1>
      | Declared<"apiV1Comment503Error1", ApiV1Comment503Error1>
      | Declared<"apiV1Comment504Error1", ApiV1Comment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentGetError> = [
      {
        on: 400,
        kind: "apiV1Comment400Error1",
        decode: { kind: "json", schema: apiV1Comment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Comment401Error1",
        decode: { kind: "json", schema: apiV1Comment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Comment403Error1",
        decode: { kind: "json", schema: apiV1Comment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Comment404Error1",
        decode: { kind: "json", schema: apiV1Comment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Comment429Error1",
        decode: { kind: "json", schema: apiV1Comment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Comment500Error1",
        decode: { kind: "json", schema: apiV1Comment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Comment502Error1",
        decode: { kind: "json", schema: apiV1Comment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Comment503Error1",
        decode: { kind: "json", schema: apiV1Comment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Comment504Error1",
        decode: { kind: "json", schema: apiV1Comment504Error1Schema },
      },
    ];
  }

  export type CommentGetListRequest = {
    teamId: string;
    postId?: string;
    importedPostId?: string;
    status?: Status4;
    orderBy?: OrderBy;
    order?: Order;
    q?: string;
    platforms?: Platform6[] | null;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class CommentGetListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Comment400Error1", ApiV1Comment400Error1>
      | Declared<"apiV1Comment401Error1", ApiV1Comment401Error1>
      | Declared<"apiV1Comment403Error1", ApiV1Comment403Error1>
      | Declared<"apiV1Comment404Error1", ApiV1Comment404Error1>
      | Declared<"apiV1Comment429Error1", ApiV1Comment429Error1>
      | Declared<"apiV1Comment500Error1", ApiV1Comment500Error1>
      | Declared<"apiV1Comment502Error1", ApiV1Comment502Error1>
      | Declared<"apiV1Comment503Error1", ApiV1Comment503Error1>
      | Declared<"apiV1Comment504Error1", ApiV1Comment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentGetListError> = [
      {
        on: 400,
        kind: "apiV1Comment400Error1",
        decode: { kind: "json", schema: apiV1Comment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Comment401Error1",
        decode: { kind: "json", schema: apiV1Comment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Comment403Error1",
        decode: { kind: "json", schema: apiV1Comment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Comment404Error1",
        decode: { kind: "json", schema: apiV1Comment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Comment429Error1",
        decode: { kind: "json", schema: apiV1Comment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Comment500Error1",
        decode: { kind: "json", schema: apiV1Comment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Comment502Error1",
        decode: { kind: "json", schema: apiV1Comment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Comment503Error1",
        decode: { kind: "json", schema: apiV1Comment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Comment504Error1",
        decode: { kind: "json", schema: apiV1Comment504Error1Schema },
      },
    ];
  }

  export type CommentImportActionFetchedCommentRequest = {
    commentId: string;
    /** Body */
    body?: ApiV1CommentImportCommentsActionRequest;
  };

  export class CommentImportActionFetchedCommentError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CommentImportCommentsAction400Error1", ApiV1CommentImportCommentsAction400Error1>
      | Declared<"apiV1CommentImportCommentsAction401Error1", ApiV1CommentImportCommentsAction401Error1>
      | Declared<"apiV1CommentImportCommentsAction403Error1", ApiV1CommentImportCommentsAction403Error1>
      | Declared<"apiV1CommentImportCommentsAction404Error1", ApiV1CommentImportCommentsAction404Error1>
      | Declared<"apiV1CommentImportCommentsAction429Error1", ApiV1CommentImportCommentsAction429Error1>
      | Declared<"apiV1CommentImportCommentsAction500Error1", ApiV1CommentImportCommentsAction500Error1>
      | Declared<"apiV1CommentImportCommentsAction502Error1", ApiV1CommentImportCommentsAction502Error1>
      | Declared<"apiV1CommentImportCommentsAction503Error1", ApiV1CommentImportCommentsAction503Error1>
      | Declared<"apiV1CommentImportCommentsAction504Error1", ApiV1CommentImportCommentsAction504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentImportActionFetchedCommentError> = [
      {
        on: 400,
        kind: "apiV1CommentImportCommentsAction400Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1CommentImportCommentsAction401Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1CommentImportCommentsAction403Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1CommentImportCommentsAction404Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1CommentImportCommentsAction429Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1CommentImportCommentsAction500Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1CommentImportCommentsAction502Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1CommentImportCommentsAction503Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1CommentImportCommentsAction504Error1",
        decode: { kind: "json", schema: apiV1CommentImportCommentsAction504Error1Schema },
      },
    ];
  }

  export type CommentImportCreateRequest = {
    /** Body */
    body?: ApiV1CommentImportRequest;
  };

  export class CommentImportCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CommentImport400Error1", ApiV1CommentImport400Error1>
      | Declared<"apiV1CommentImport401Error1", ApiV1CommentImport401Error1>
      | Declared<"apiV1CommentImport403Error1", ApiV1CommentImport403Error1>
      | Declared<"apiV1CommentImport404Error1", ApiV1CommentImport404Error1>
      | Declared<"apiV1CommentImport409Error1", ApiV1CommentImport409Error1>
      | Declared<"apiV1CommentImport429Error1", ApiV1CommentImport429Error1>
      | Declared<"apiV1CommentImport500Error1", ApiV1CommentImport500Error1>
      | Declared<"apiV1CommentImport502Error1", ApiV1CommentImport502Error1>
      | Declared<"apiV1CommentImport503Error1", ApiV1CommentImport503Error1>
      | Declared<"apiV1CommentImport504Error1", ApiV1CommentImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentImportCreateError> = [
      {
        on: 400,
        kind: "apiV1CommentImport400Error1",
        decode: { kind: "json", schema: apiV1CommentImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1CommentImport401Error1",
        decode: { kind: "json", schema: apiV1CommentImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1CommentImport403Error1",
        decode: { kind: "json", schema: apiV1CommentImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1CommentImport404Error1",
        decode: { kind: "json", schema: apiV1CommentImport404Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1CommentImport409Error1",
        decode: { kind: "json", schema: apiV1CommentImport409Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1CommentImport429Error1",
        decode: { kind: "json", schema: apiV1CommentImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1CommentImport500Error1",
        decode: { kind: "json", schema: apiV1CommentImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1CommentImport502Error1",
        decode: { kind: "json", schema: apiV1CommentImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1CommentImport503Error1",
        decode: { kind: "json", schema: apiV1CommentImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1CommentImport504Error1",
        decode: { kind: "json", schema: apiV1CommentImport504Error1Schema },
      },
    ];
  }

  export type CommentImportGetByIdRequest = {
    importId: string;
  };

  export class CommentImportGetByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CommentImport400Error1", ApiV1CommentImport400Error1>
      | Declared<"apiV1CommentImport401Error1", ApiV1CommentImport401Error1>
      | Declared<"apiV1CommentImport403Error1", ApiV1CommentImport403Error1>
      | Declared<"apiV1CommentImport404Error1", ApiV1CommentImport404Error1>
      | Declared<"apiV1CommentImport429Error1", ApiV1CommentImport429Error1>
      | Declared<"apiV1CommentImport500Error1", ApiV1CommentImport500Error1>
      | Declared<"apiV1CommentImport502Error1", ApiV1CommentImport502Error1>
      | Declared<"apiV1CommentImport503Error1", ApiV1CommentImport503Error1>
      | Declared<"apiV1CommentImport504Error1", ApiV1CommentImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentImportGetByIdError> = [
      {
        on: 400,
        kind: "apiV1CommentImport400Error1",
        decode: { kind: "json", schema: apiV1CommentImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1CommentImport401Error1",
        decode: { kind: "json", schema: apiV1CommentImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1CommentImport403Error1",
        decode: { kind: "json", schema: apiV1CommentImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1CommentImport404Error1",
        decode: { kind: "json", schema: apiV1CommentImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1CommentImport429Error1",
        decode: { kind: "json", schema: apiV1CommentImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1CommentImport500Error1",
        decode: { kind: "json", schema: apiV1CommentImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1CommentImport502Error1",
        decode: { kind: "json", schema: apiV1CommentImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1CommentImport503Error1",
        decode: { kind: "json", schema: apiV1CommentImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1CommentImport504Error1",
        decode: { kind: "json", schema: apiV1CommentImport504Error1Schema },
      },
    ];
  }

  export type CommentImportGetFetchedCommentsRequest = {
    teamId: string;
    postId?: string;
    importedPostId?: string;
    platform?: PlatformBundleSocialCommentApi;
    socialAccountId?: string;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class CommentImportGetFetchedCommentsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CommentImportComments400Error1", ApiV1CommentImportComments400Error1>
      | Declared<"apiV1CommentImportComments401Error1", ApiV1CommentImportComments401Error1>
      | Declared<"apiV1CommentImportComments403Error1", ApiV1CommentImportComments403Error1>
      | Declared<"apiV1CommentImportComments404Error1", ApiV1CommentImportComments404Error1>
      | Declared<"apiV1CommentImportComments429Error1", ApiV1CommentImportComments429Error1>
      | Declared<"apiV1CommentImportComments500Error1", ApiV1CommentImportComments500Error1>
      | Declared<"apiV1CommentImportComments502Error1", ApiV1CommentImportComments502Error1>
      | Declared<"apiV1CommentImportComments503Error1", ApiV1CommentImportComments503Error1>
      | Declared<"apiV1CommentImportComments504Error1", ApiV1CommentImportComments504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentImportGetFetchedCommentsError> = [
      {
        on: 400,
        kind: "apiV1CommentImportComments400Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1CommentImportComments401Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1CommentImportComments403Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1CommentImportComments404Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1CommentImportComments429Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1CommentImportComments500Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1CommentImportComments502Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1CommentImportComments503Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1CommentImportComments504Error1",
        decode: { kind: "json", schema: apiV1CommentImportComments504Error1Schema },
      },
    ];
  }

  export type CommentImportGetListRequest = {
    teamId: string;
    postId?: string;
    importedPostId?: string;
    status?: StatusBundleSocialCommentApi;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class CommentImportGetListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CommentImport400Error1", ApiV1CommentImport400Error1>
      | Declared<"apiV1CommentImport401Error1", ApiV1CommentImport401Error1>
      | Declared<"apiV1CommentImport403Error1", ApiV1CommentImport403Error1>
      | Declared<"apiV1CommentImport404Error1", ApiV1CommentImport404Error1>
      | Declared<"apiV1CommentImport429Error1", ApiV1CommentImport429Error1>
      | Declared<"apiV1CommentImport500Error1", ApiV1CommentImport500Error1>
      | Declared<"apiV1CommentImport502Error1", ApiV1CommentImport502Error1>
      | Declared<"apiV1CommentImport503Error1", ApiV1CommentImport503Error1>
      | Declared<"apiV1CommentImport504Error1", ApiV1CommentImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentImportGetListError> = [
      {
        on: 400,
        kind: "apiV1CommentImport400Error1",
        decode: { kind: "json", schema: apiV1CommentImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1CommentImport401Error1",
        decode: { kind: "json", schema: apiV1CommentImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1CommentImport403Error1",
        decode: { kind: "json", schema: apiV1CommentImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1CommentImport404Error1",
        decode: { kind: "json", schema: apiV1CommentImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1CommentImport429Error1",
        decode: { kind: "json", schema: apiV1CommentImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1CommentImport500Error1",
        decode: { kind: "json", schema: apiV1CommentImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1CommentImport502Error1",
        decode: { kind: "json", schema: apiV1CommentImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1CommentImport503Error1",
        decode: { kind: "json", schema: apiV1CommentImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1CommentImport504Error1",
        decode: { kind: "json", schema: apiV1CommentImport504Error1Schema },
      },
    ];
  }

  export type CommentRetryRequest = {
    id: string;
  };

  export class CommentRetryError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CommentRetry400Error1", ApiV1CommentRetry400Error1>
      | Declared<"apiV1CommentRetry401Error1", ApiV1CommentRetry401Error1>
      | Declared<"apiV1CommentRetry403Error1", ApiV1CommentRetry403Error1>
      | Declared<"apiV1CommentRetry404Error1", ApiV1CommentRetry404Error1>
      | Declared<"apiV1CommentRetry429Error1", ApiV1CommentRetry429Error1>
      | Declared<"apiV1CommentRetry500Error1", ApiV1CommentRetry500Error1>
      | Declared<"apiV1CommentRetry502Error1", ApiV1CommentRetry502Error1>
      | Declared<"apiV1CommentRetry503Error1", ApiV1CommentRetry503Error1>
      | Declared<"apiV1CommentRetry504Error1", ApiV1CommentRetry504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentRetryError> = [
      {
        on: 400,
        kind: "apiV1CommentRetry400Error1",
        decode: { kind: "json", schema: apiV1CommentRetry400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1CommentRetry401Error1",
        decode: { kind: "json", schema: apiV1CommentRetry401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1CommentRetry403Error1",
        decode: { kind: "json", schema: apiV1CommentRetry403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1CommentRetry404Error1",
        decode: { kind: "json", schema: apiV1CommentRetry404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1CommentRetry429Error1",
        decode: { kind: "json", schema: apiV1CommentRetry429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1CommentRetry500Error1",
        decode: { kind: "json", schema: apiV1CommentRetry500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1CommentRetry502Error1",
        decode: { kind: "json", schema: apiV1CommentRetry502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1CommentRetry503Error1",
        decode: { kind: "json", schema: apiV1CommentRetry503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1CommentRetry504Error1",
        decode: { kind: "json", schema: apiV1CommentRetry504Error1Schema },
      },
    ];
  }

  export type CommentUpdateRequest = {
    id: string;
    /** Body */
    body?: ApiV1CommentRequest;
  };

  export class CommentUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Comment400Error1", ApiV1Comment400Error1>
      | Declared<"apiV1Comment401Error1", ApiV1Comment401Error1>
      | Declared<"apiV1Comment403Error1", ApiV1Comment403Error1>
      | Declared<"apiV1Comment404Error1", ApiV1Comment404Error1>
      | Declared<"apiV1Comment429Error1", ApiV1Comment429Error1>
      | Declared<"apiV1Comment500Error1", ApiV1Comment500Error1>
      | Declared<"apiV1Comment502Error1", ApiV1Comment502Error1>
      | Declared<"apiV1Comment503Error1", ApiV1Comment503Error1>
      | Declared<"apiV1Comment504Error1", ApiV1Comment504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentUpdateError> = [
      {
        on: 400,
        kind: "apiV1Comment400Error1",
        decode: { kind: "json", schema: apiV1Comment400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Comment401Error1",
        decode: { kind: "json", schema: apiV1Comment401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Comment403Error1",
        decode: { kind: "json", schema: apiV1Comment403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Comment404Error1",
        decode: { kind: "json", schema: apiV1Comment404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Comment429Error1",
        decode: { kind: "json", schema: apiV1Comment429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Comment500Error1",
        decode: { kind: "json", schema: apiV1Comment500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Comment502Error1",
        decode: { kind: "json", schema: apiV1Comment502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Comment503Error1",
        decode: { kind: "json", schema: apiV1Comment503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Comment504Error1",
        decode: { kind: "json", schema: apiV1Comment504Error1Schema },
      },
    ];
  }
}
