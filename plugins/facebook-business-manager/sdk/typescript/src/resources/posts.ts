import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createResponseSchema, type CreateResponse } from "../models/create-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { postCreateInternalSchema, type PostCreate } from "../models/post-create.js";
import { postListInternalSchema, type PostList } from "../models/post-list.js";
import { postInternalSchema, type Post } from "../models/post.js";
import { requestSchema, type Request } from "../models/request.js";
import {
  successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema,
  type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi,
} from "../models/success-response-facebook-business-manager-facebook-pages-comments-api.js";
import type { Servers } from "../servers.js";

/**
 * Create, read, update, and delete posts on a Facebook Page feed.
 */
export class Posts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Create a page post
   *
   * @remarks
   * Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled
   * posts. Requires a page access token with pages_manage_posts permission.
   *
   * @returns Post created successfully
   *
   * @throws {@link Posts.CreatePagePostError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPagePost(
    request: Posts.CreatePagePostRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, Posts.CreatePagePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{page_id}/feed"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: createResponseSchema },
        errorFactory: Posts.CreatePagePostError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Delete a post
   *
   * @remarks
   * Deletes a post from the Facebook Page. This action cannot be undone.
   *
   * @returns Post deleted successfully
   *
   * @throws {@link Posts.DeletePostError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deletePost(
    request: Posts.DeletePostRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Posts.DeletePostError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{post_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "post_id", value: request.postId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema,
        },
        errorFactory: Posts.DeletePostError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Get page feed
   *
   * @remarks
   * Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts
   * by visitors if allowed.
   *
   * @returns Successfully retrieved page feed
   *
   * @throws {@link Posts.GetPageFeedError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPageFeed(
    request: Posts.GetPageFeedRequest,
    options?: RequestOptions,
  ): ApiPromise<PostList, Posts.GetPageFeedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{page_id}/feed"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postListInternalSchema },
        errorFactory: Posts.GetPageFeedError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Get a post
   *
   * @remarks
   * Retrieves the details of a specific post including message, attachments, reactions, and
   * engagement counts.
   *
   * @returns Successfully retrieved post details
   *
   * @throws {@link Posts.GetPostError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPost(request: Posts.GetPostRequest, options?: RequestOptions): ApiPromise<Post, Posts.GetPostError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{post_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "post_id", value: request.postId, schema: s.string() }],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postInternalSchema },
        errorFactory: Posts.GetPostError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Update a post
   *
   * @remarks
   * Updates an existing post on the Page. Only the message field can be updated after publishing.
   *
   * @returns Post updated successfully
   *
   * @throws {@link Posts.UpdatePostError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updatePost(
    request: Posts.UpdatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Posts.UpdatePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{post_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "post_id", value: request.postId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: requestSchema },
      },
      {
        success: {
          kind: "json",
          schema: successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema,
        },
        errorFactory: Posts.UpdatePostError,
      },
      options,
    );
  }
}

export namespace Posts {
  export type CreatePagePostRequest = {
    /** The ID of the Facebook Page */
    pageId: string;
    body: PostCreate;
  };

  export class CreatePagePostError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreatePagePostError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeletePostRequest = {
    /** The ID of the post (format PAGE_ID_POST_ID) */
    postId: string;
  };

  export class DeletePostError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeletePostError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPageFeedRequest = {
    /** The ID of the Facebook Page */
    pageId: string;
    /** Comma-separated list of fields to include in the response */
    fields?: string;
    /** Maximum number of objects to return per page @default 25 */
    limit?: number;
    /** Cursor for forward pagination */
    after?: string;
  };

  export const getPageFeedRequestSchema: Schema<GetPageFeedRequest> = s.lazySchema(() =>
    s.object<GetPageFeedRequest>({
      pageId: s.string(),
      fields: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      after: s.optional(s.string()),
    }),
  );

  export class GetPageFeedError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPageFeedError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPostRequest = {
    /** The ID of the post (format PAGE_ID_POST_ID) */
    postId: string;
    /** Comma-separated list of fields to include in the response */
    fields?: string;
  };

  export class GetPostError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPostError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePostRequest = {
    /** The ID of the post (format PAGE_ID_POST_ID) */
    postId: string;
    body: Request;
  };

  export class UpdatePostError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePostError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
