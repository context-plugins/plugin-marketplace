import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { body10InternalSchema, type Body10 } from "../models/body10.js";
import { body14InternalSchema, type Body14 } from "../models/body14.js";
import { body19InternalSchema, type Body19 } from "../models/body19.js";
import { body21InternalSchema, type Body21 } from "../models/body21.js";
import { noteSyncViewSchema, type NoteSyncView } from "../models/note-sync-view.js";
import { paginatedList6Schema, type PaginatedList6 } from "../models/paginated-list6.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

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
   * Add Comment Reaction
   *
   * @remarks
   * Adds the authenticated user's reaction to a task or project comment and returns the updated
   * comment.
   *
   * Adding a reaction the user has already added leaves the reactions unchanged. Returns an error
   * if the comment's stored reactions would exceed 65,535 bytes.
   *
   * @returns Successful Response
   *
   * @throws {@link Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addCommentReactionApiV1CommentsCommentIdReactionsPost(
    request: Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteSyncView, Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comments/{comment_id}/reactions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body19InternalSchema },
      },
      {
        success: { kind: "json", schema: noteSyncViewSchema },
        errorFactory: Comments.AddCommentReactionApiV1CommentsCommentIdReactionsPostError,
      },
      options,
    );
  }

  /**
   * Create Comment
   *
   * @remarks
   * Creates a new comment on a project or task and returns it.
   *
   * Exactly one of `task_id` or `project_id` arguments is required. Providing neither or both will
   * return an error.
   *
   * @returns Successful Response
   *
   * @throws {@link Comments.CreateCommentApiV1CommentsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCommentApiV1CommentsPost(
    request: Comments.CreateCommentApiV1CommentsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteSyncView, Comments.CreateCommentApiV1CommentsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body10InternalSchema },
      },
      {
        success: { kind: "json", schema: noteSyncViewSchema },
        errorFactory: Comments.CreateCommentApiV1CommentsPostError,
      },
      options,
    );
  }

  /**
   * Delete Comment
   *
   * @remarks
   * Delete a comment by ID
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Comments.DeleteCommentApiV1CommentsCommentIdDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCommentApiV1CommentsCommentIdDelete(
    request: Comments.DeleteCommentApiV1CommentsCommentIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Comments.DeleteCommentApiV1CommentsCommentIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/comments/{comment_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Comments.DeleteCommentApiV1CommentsCommentIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Comment
   *
   * @remarks
   * Returns a single comment by ID
   *
   * @returns Successful Response
   *
   * @throws {@link Comments.GetCommentApiV1CommentsCommentIdGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCommentApiV1CommentsCommentIdGet(
    request: Comments.GetCommentApiV1CommentsCommentIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteSyncView, Comments.GetCommentApiV1CommentsCommentIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/comments/{comment_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.nullable(s.string()) }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: noteSyncViewSchema },
        errorFactory: Comments.GetCommentApiV1CommentsCommentIdGetError,
      },
      options,
    );
  }

  /**
   * Get Comments
   *
   * @remarks
   * Get all comments for a given task or project.
   *
   * Exactly one of `task_id` or `project_id` arguments is required. Providing neither or both will
   * return an error.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Comments.GetCommentsApiV1CommentsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCommentsApiV1CommentsGet(
    request: Comments.GetCommentsApiV1CommentsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList6, Comments.GetCommentsApiV1CommentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "project_id", value: request.projectId, schema: s.optionalNullable(s.string()) },
          { name: "task_id", value: request.taskId, schema: s.optionalNullable(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "public_key", value: request.publicKey, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList6Schema },
        errorFactory: Comments.GetCommentsApiV1CommentsGetError,
      },
      options,
    );
  }

  /**
   * Remove Comment Reaction
   *
   * @remarks
   * Removes the authenticated user's reaction from a task or project comment.
   *
   * Removing a reaction the user has not added succeeds without changing the reactions. Other
   * users' reactions are not affected.
   *
   * @returns Successful Response
   *
   * @throws {@link Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeCommentReactionApiV1CommentsCommentIdReactionsRemovePost(
    request: Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comments/{comment_id}/reactions/remove"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body14InternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Comments.RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError,
      },
      options,
    );
  }

  /**
   * Update Comment
   *
   * @remarks
   * Update a comment by ID and returns its content
   *
   * @returns Successful Response
   *
   * @throws {@link Comments.UpdateCommentApiV1CommentsCommentIdPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCommentApiV1CommentsCommentIdPost(
    request: Comments.UpdateCommentApiV1CommentsCommentIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteSyncView | null, Comments.UpdateCommentApiV1CommentsCommentIdPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comments/{comment_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "comment_id", value: request.commentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body21InternalSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => noteSyncViewSchema)) },
        errorFactory: Comments.UpdateCommentApiV1CommentsCommentIdPostError,
      },
      options,
    );
  }
}

export namespace Comments {
  export type AddCommentReactionApiV1CommentsCommentIdReactionsPostRequest = {
    commentId: string;
    body: Body19;
  };

  export class AddCommentReactionApiV1CommentsCommentIdReactionsPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddCommentReactionApiV1CommentsCommentIdReactionsPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type CreateCommentApiV1CommentsPostRequest = {
    body: Body10;
  };

  export class CreateCommentApiV1CommentsPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCommentApiV1CommentsPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteCommentApiV1CommentsCommentIdDeleteRequest = {
    commentId: string;
  };

  export class DeleteCommentApiV1CommentsCommentIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCommentApiV1CommentsCommentIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetCommentApiV1CommentsCommentIdGetRequest = {
    commentId: string | null;
  };

  export class GetCommentApiV1CommentsCommentIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCommentApiV1CommentsCommentIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetCommentsApiV1CommentsGetRequest = {
    projectId?: string | null;
    taskId?: string | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
    publicKey?: string | null;
  };

  export const getCommentsApiV1CommentsGetRequestSchema: Schema<GetCommentsApiV1CommentsGetRequest> =
    s.lazySchema(() =>
      s.object<GetCommentsApiV1CommentsGetRequest>({
        projectId: s.optionalNullable(s.string()),
        taskId: s.optionalNullable(s.string()),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
        publicKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetCommentsApiV1CommentsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCommentsApiV1CommentsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostRequest = {
    commentId: string;
    body: Body14;
  };

  export class RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveCommentReactionApiV1CommentsCommentIdReactionsRemovePostError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type UpdateCommentApiV1CommentsCommentIdPostRequest = {
    commentId: string;
    body: Body21;
  };

  export class UpdateCommentApiV1CommentsCommentIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCommentApiV1CommentsCommentIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
