import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentListInternalSchema, type CommentList } from "../models/comment-list.js";
import { commentInternalSchema, type Comment } from "../models/comment.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  recordIdCommentsCommentIdRequestSchema,
  type RecordIdCommentsCommentIdRequest,
} from "../models/record-id-comments-comment-id-request.js";
import {
  recordIdCommentsCommentIdResponseSchema,
  type RecordIdCommentsCommentIdResponse,
} from "../models/record-id-comments-comment-id-response.js";
import {
  recordIdCommentsRequestSchema,
  type RecordIdCommentsRequest,
} from "../models/record-id-comments-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage comments on individual records
 */
export class Comments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Airtable Create a Comment on a Record
   *
   * @remarks
   * Creates a new comment on the specified record. Comments can include user mentions using the
   * \@[usrXXXXXXXX] syntax. Requires OAuth authentication with the comment:write scope.
   *
   * @returns The created comment.
   *
   * @throws {@link Comments.CreateCommentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createComment(
    request: Comments.CreateCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, Comments.CreateCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}/{recordId}/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recordIdCommentsRequestSchema },
      },
      {
        success: { kind: "json", schema: commentInternalSchema },
        errorFactory: Comments.CreateCommentError,
      },
      options,
    );
  }

  /**
   * Airtable Delete a Comment
   *
   * @remarks
   * Deletes a comment from a record. Only the author of the comment can delete it.
   *
   * @returns Confirmation that the comment was deleted.
   *
   * @throws {@link Comments.DeleteCommentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteComment(
    request: Comments.DeleteCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordIdCommentsCommentIdResponse, Comments.DeleteCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
          { name: "commentId", value: request.commentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recordIdCommentsCommentIdResponseSchema },
        errorFactory: Comments.DeleteCommentError,
      },
      options,
    );
  }

  /**
   * Airtable List Comments on a Record
   *
   * @remarks
   * Returns a paginated list of comments on the specified record. Comments are returned in reverse
   * chronological order.
   *
   * @returns A paginated list of comments.
   *
   * @throws {@link Comments.ListCommentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listComments(
    request: Comments.ListCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentList, Comments.ListCommentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}/{recordId}/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentListInternalSchema },
        errorFactory: Comments.ListCommentsError,
      },
      options,
    );
  }

  /**
   * Airtable Update a Comment
   *
   * @remarks
   * Updates the text of an existing comment on a record. Only the author of the comment can update
   * it.
   *
   * @returns The updated comment.
   *
   * @throws {@link Comments.UpdateCommentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateComment(
    request: Comments.UpdateCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<Comment, Comments.UpdateCommentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
          { name: "commentId", value: request.commentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recordIdCommentsCommentIdRequestSchema },
      },
      {
        success: { kind: "json", schema: commentInternalSchema },
        errorFactory: Comments.UpdateCommentError,
      },
      options,
    );
  }
}

export namespace Comments {
  export type CreateCommentRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** The unique identifier of the record (starts with 'rec'). */
    recordId: string;
    body: RecordIdCommentsRequest;
  };

  export const createCommentRequestSchema: Schema<CreateCommentRequest> = s.lazySchema(() =>
    s.object<CreateCommentRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      recordId: s.string().check(s.pattern("^rec[a-zA-Z0-9]+$")),
      body: recordIdCommentsRequestSchema,
    }),
  );

  export class CreateCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCommentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteCommentRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** The unique identifier of the record (starts with 'rec'). */
    recordId: string;
    /** The unique identifier of the comment. */
    commentId: string;
  };

  export const deleteCommentRequestSchema: Schema<DeleteCommentRequest> = s.lazySchema(() =>
    s.object<DeleteCommentRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      recordId: s.string().check(s.pattern("^rec[a-zA-Z0-9]+$")),
      commentId: s.string(),
    }),
  );

  export class DeleteCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCommentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCommentsRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** The unique identifier of the record (starts with 'rec'). */
    recordId: string;
    /** Pagination cursor from a previous response to fetch the next page. */
    offset?: string;
    /** The number of comments to return per page. */
    pageSize?: number;
  };

  export const listCommentsRequestSchema: Schema<ListCommentsRequest> = s.lazySchema(() =>
    s.object<ListCommentsRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      recordId: s.string().check(s.pattern("^rec[a-zA-Z0-9]+$")),
      offset: s.optional(s.string()),
      pageSize: s.optional(s.int().check(s.gte(1), s.lte(100))),
    }),
  );

  export class ListCommentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCommentsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCommentRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** The unique identifier of the record (starts with 'rec'). */
    recordId: string;
    /** The unique identifier of the comment. */
    commentId: string;
    body: RecordIdCommentsCommentIdRequest;
  };

  export const updateCommentRequestSchema: Schema<UpdateCommentRequest> = s.lazySchema(() =>
    s.object<UpdateCommentRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      recordId: s.string().check(s.pattern("^rec[a-zA-Z0-9]+$")),
      commentId: s.string(),
      body: recordIdCommentsCommentIdRequestSchema,
    }),
  );

  export class UpdateCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCommentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
