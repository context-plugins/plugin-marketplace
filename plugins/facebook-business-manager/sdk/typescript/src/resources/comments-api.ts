import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentListSchema, type CommentList } from "../models/comment-list.js";
import { commentsRequestInternalSchema, type CommentsRequest } from "../models/comments-request.js";
import { createResponseSchema, type CreateResponse } from "../models/create-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { filterSchema, type Filter } from "../models/filter.js";
import { orderSchema, type Order } from "../models/order.js";
import {
  successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema,
  type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi,
} from "../models/success-response-facebook-business-manager-facebook-pages-comments-api.js";
import type { Servers } from "../servers.js";

/**
 * Manage comments on Page posts including reading, replying, and moderating.
 */
export class CommentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Create a comment
   *
   * @remarks
   * Posts a comment on a Page post as the Page. Requires a page access token with
   * pages_manage_engagement permission.
   *
   * @returns Comment created successfully
   *
   * @throws {@link CommentsApi.CreateCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createComment(
    request: CommentsApi.CreateCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, CommentsApi.CreateCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{post_id}/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "post_id", value: request.postId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: commentsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: CommentsApi.CreateCommentError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Delete a comment
   *
   * @remarks
   * Deletes a comment from a Page post. The Page must own the comment or the post the comment is
   * on.
   *
   * @returns Comment deleted successfully
   *
   * @throws {@link CommentsApi.DeleteCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteComment(
    request: CommentsApi.DeleteCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi,
    CommentsApi.DeleteCommentError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{comment_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema,
        },
        errorFactory: CommentsApi.DeleteCommentError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Get post comments
   *
   * @remarks
   * Retrieves comments on a specific post. Supports pagination and filtering by order.
   *
   * @returns Successfully retrieved comments
   *
   * @throws {@link CommentsApi.GetPostCommentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPostComments(
    request: CommentsApi.GetPostCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentList, CommentsApi.GetPostCommentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{post_id}/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "post_id", value: request.postId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.lazy(() => filterSchema)) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => orderSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentListSchema },
        errorFactory: CommentsApi.GetPostCommentsError,
      },
      options,
    );
  }
}

export namespace CommentsApi {
  export type CreateCommentRequest = {
    /** The ID of the post (format PAGE_ID_POST_ID) */
    postId: string;
    body: CommentsRequest;
  };

  export class CreateCommentError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCommentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteCommentRequest = {
    /** The ID of the comment to delete */
    commentId: string;
  };

  export class DeleteCommentError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCommentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPostCommentsRequest = {
    /** The ID of the post (format PAGE_ID_POST_ID) */
    postId: string;
    /** Comma-separated list of fields to include in the response */
    fields?: string;
    /** Maximum number of objects to return per page @default 25 */
    limit?: number;
    /** Cursor for forward pagination */
    after?: string;
    /** Filter for comment type */
    filter?: Filter;
    /** Order of comments */
    order?: Order;
  };

  export const getPostCommentsRequestSchema: Schema<GetPostCommentsRequest> = s.lazySchema(() =>
    s.object<GetPostCommentsRequest>({
      postId: s.string(),
      fields: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      after: s.optional(s.string()),
      filter: s.optional(s.lazy(() => filterSchema)),
      order: s.optional(s.lazy(() => orderSchema)),
    }),
  );

  export class GetPostCommentsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPostCommentsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
