import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { commentListSchema, type CommentList } from "../models/comment-list.js";
import { commentSchema, type Comment } from "../models/comment.js";
import { commentsRequestSchema, type CommentsRequest } from "../models/comments-request.js";
import { commentsResponseSchema, type CommentsResponse } from "../models/comments-response.js";
import { repliesRequestSchema, type RepliesRequest } from "../models/replies-request.js";
import { repliesResponseSchema, type RepliesResponse } from "../models/replies-response.js";
import { requestSchema, type Request } from "../models/request.js";
import { successResponseSchema, type SuccessResponse } from "../models/success-response.js";
import type { Servers } from "../servers.js";

/**
 * Comment management and moderation
 */
export class Comments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Instagram Create Comment
   *
   * @remarks
   * Create a comment on an Instagram media object.
   *
   * @returns Comment created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createComment(
    request: Comments.CreateCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{media_id}/comments"),
        auth: noneAuth,
        pathParams: [{ name: "media_id", value: request.mediaId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: commentsRequestSchema },
      },
      {
        success: { kind: "json", schema: commentsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Create Comment Reply
   *
   * @remarks
   * Reply to a comment.
   *
   * @returns Reply created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCommentReply(
    request: Comments.CreateCommentReplyRequest,
    options?: RequestOptions,
  ): ApiPromise<RepliesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{comment_id}/replies"),
        auth: noneAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: repliesRequestSchema },
      },
      {
        success: { kind: "json", schema: repliesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Delete Comment
   *
   * @remarks
   * Delete a comment on your media.
   *
   * @returns Comment deleted.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteComment(
    request: Comments.DeleteCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{comment_id}"),
        auth: noneAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [{ name: "access_token", value: request.accessToken, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get Comment
   *
   * @remarks
   * Get fields on an Instagram comment.
   *
   * @returns Comment data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getComment(request: Comments.GetCommentRequest, options?: RequestOptions): ApiPromise<Comment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{comment_id}"),
        auth: noneAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get Comment Replies
   *
   * @remarks
   * Get replies to a comment.
   *
   * @returns List of reply comments.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCommentReplies(
    request: Comments.GetCommentRepliesRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{comment_id}/replies"),
        auth: noneAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get Media Comments
   *
   * @remarks
   * Get comments on an Instagram media object.
   *
   * @returns List of comments.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMediaComments(
    request: Comments.GetMediaCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{media_id}/comments"),
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
        success: { kind: "json", schema: commentListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Hide or Unhide Comment
   *
   * @remarks
   * Hide or unhide a comment on your media.
   *
   * @returns Success.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hideComment(
    request: Comments.HideCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{comment_id}"),
        auth: noneAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => requestSchema)) },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Comments {
  export type CreateCommentRequest = {
    mediaId: string;
    body: CommentsRequest;
  };

  export type CreateCommentReplyRequest = {
    commentId: string;
    body: RepliesRequest;
  };

  export type DeleteCommentRequest = {
    commentId: string;
    accessToken: string;
  };

  export type GetCommentRequest = {
    commentId: string;
    accessToken: string;
    fields?: string;
  };

  export type GetCommentRepliesRequest = {
    commentId: string;
    accessToken: string;
    fields?: string;
  };

  export type GetMediaCommentsRequest = {
    mediaId: string;
    accessToken: string;
    fields?: string;
  };

  export type HideCommentRequest = {
    commentId: string;
    body?: Request;
  };
}
