import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createCommentCommentInternalSchema,
  type CreateCommentComment,
} from "../models/create-comment-comment.js";
import { createEpicCommentInternalSchema, type CreateEpicComment } from "../models/create-epic-comment.js";
import { createEpicHealthSchema, type CreateEpicHealth } from "../models/create-epic-health.js";
import { createEpicInternalSchema, type CreateEpic } from "../models/create-epic.js";
import { docSlimSchema, type DocSlim } from "../models/doc-slim.js";
import {
  epicPaginatedResultsInternalSchema,
  type EpicPaginatedResults,
} from "../models/epic-paginated-results.js";
import { epicSlimInternalSchema, type EpicSlim } from "../models/epic-slim.js";
import { epicInternalSchema, type Epic } from "../models/epic.js";
import { healthSchema, type Health } from "../models/health.js";
import { storySlimInternalSchema, type StorySlim } from "../models/story-slim.js";
import { threadedCommentSchema, type ThreadedComment } from "../models/threaded-comment.js";
import { updateCommentSchema, type UpdateComment } from "../models/update-comment.js";
import { updateEpicInternalSchema, type UpdateEpic } from "../models/update-epic.js";
import type { Servers } from "../servers.js";

export class Epics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Epic
   *
   * @remarks
   * Create Epic allows you to create a new Epic in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link Epics.CreateEpicError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEpic(
    request: Epics.CreateEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<Epic, Epics.CreateEpicError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/epics"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEpicInternalSchema },
      },
      {
        success: { kind: "json", schema: epicInternalSchema },
        errorFactory: Epics.CreateEpicError,
      },
      options,
    );
  }

  /**
   * Create Epic Comment
   *
   * @remarks
   * This endpoint allows you to create a threaded Comment on an Epic.
   *
   * @returns Resource
   *
   * @throws {@link Epics.CreateEpicCommentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEpicComment(
    request: Epics.CreateEpicCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment, Epics.CreateEpicCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEpicCommentInternalSchema },
      },
      {
        success: { kind: "json", schema: threadedCommentSchema },
        errorFactory: Epics.CreateEpicCommentError,
      },
      options,
    );
  }

  /**
   * Create Epic Comment Comment
   *
   * @remarks
   * This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
   *
   * @returns Resource
   *
   * @throws {@link Epics.CreateEpicCommentCommentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEpicCommentComment(
    request: Epics.CreateEpicCommentCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment, Epics.CreateEpicCommentCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCommentCommentInternalSchema },
      },
      {
        success: { kind: "json", schema: threadedCommentSchema },
        errorFactory: Epics.CreateEpicCommentCommentError,
      },
      options,
    );
  }

  /**
   * Create Epic Health
   *
   * @remarks
   * Create a new health status for the specified Epic.
   *
   * @returns Resource
   *
   * @throws {@link Epics.CreateEpicHealthError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEpicHealth(
    request: Epics.CreateEpicHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, Epics.CreateEpicHealthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/health"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEpicHealthSchema },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: Epics.CreateEpicHealthError,
      },
      options,
    );
  }

  /**
   * Delete Epic
   *
   * @remarks
   * Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
   *
   * @returns No Content
   *
   * @throws {@link Epics.DeleteEpicError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEpic(
    request: Epics.DeleteEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Epics.DeleteEpicError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Epics.DeleteEpicError,
      },
      options,
    );
  }

  /**
   * Delete Epic Comment
   *
   * @remarks
   * This endpoint allows you to delete a Comment from an Epic.
   *
   * @returns No Content
   *
   * @throws {@link Epics.DeleteEpicCommentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEpicComment(
    request: Epics.DeleteEpicCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Epics.DeleteEpicCommentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Epics.DeleteEpicCommentError,
      },
      options,
    );
  }

  /**
   * Get Epic
   *
   * @remarks
   * Get Epic returns information about the selected Epic.
   *
   * @returns Resource
   *
   * @throws {@link Epics.GetEpicError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpic(request: Epics.GetEpicRequest, options?: RequestOptions): ApiPromise<Epic, Epics.GetEpicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: epicInternalSchema },
        errorFactory: Epics.GetEpicError,
      },
      options,
    );
  }

  /**
   * Get Epic Comment
   *
   * @remarks
   * This endpoint returns information about the selected Epic Comment.
   *
   * @returns Resource
   *
   * @throws {@link Epics.GetEpicCommentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpicComment(
    request: Epics.GetEpicCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment, Epics.GetEpicCommentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: threadedCommentSchema },
        errorFactory: Epics.GetEpicCommentError,
      },
      options,
    );
  }

  /**
   * Get Epic Health
   *
   * @remarks
   * Get the current health for the specified Epic.
   *
   * @returns Resource
   *
   * @throws {@link Epics.GetEpicHealthError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpicHealth(
    request: Epics.GetEpicHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, Epics.GetEpicHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/health"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: Epics.GetEpicHealthError,
      },
      options,
    );
  }

  /**
   * List Epic Comments
   *
   * @remarks
   * Get a list of all Comments on an Epic.
   *
   * @returns Resource
   *
   * @throws {@link Epics.ListEpicCommentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicComments(
    request: Epics.ListEpicCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment[], Epics.ListEpicCommentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => threadedCommentSchema)) },
        errorFactory: Epics.ListEpicCommentsError,
      },
      options,
    );
  }

  /**
   * List Epic Documents
   *
   * @remarks
   * Get a list of all Documents related to this Epic.
   *
   * @returns Resource
   *
   * @throws {@link Epics.ListEpicDocumentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicDocuments(
    request: Epics.ListEpicDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocSlim[], Epics.ListEpicDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/documents"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => docSlimSchema)) },
        errorFactory: Epics.ListEpicDocumentsError,
      },
      options,
    );
  }

  /**
   * List Epic Healths
   *
   * @remarks
   * List the history of health statuses for the specified Epic, most recent first.
   *
   * @returns Resource
   *
   * @throws {@link Epics.ListEpicHealthsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicHealths(
    request: Epics.ListEpicHealthsRequest,
    options?: RequestOptions,
  ): ApiPromise<Health[], Epics.ListEpicHealthsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/health-history"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => healthSchema)) },
        errorFactory: Epics.ListEpicHealthsError,
      },
      options,
    );
  }

  /**
   * List Epic Stories
   *
   * @remarks
   * Get a list of all Stories in an Epic.
   *
   * @returns Resource
   *
   * @throws {@link Epics.ListEpicStoriesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicStories(
    request: Epics.ListEpicStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Epics.ListEpicStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: Epics.ListEpicStoriesError,
      },
      options,
    );
  }

  /**
   * List Epics
   *
   * @remarks
   * List Epics returns a list of all Epics and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link Epics.ListEpicsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpics(
    request: Epics.ListEpicsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], Epics.ListEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: Epics.ListEpicsError,
      },
      options,
    );
  }

  /**
   * List Epics Paginated
   *
   * @remarks
   * List Epics with pagination returns a paginated list of Epics and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link Epics.ListEpicsPaginatedError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEpicsPaginated(
    request: Epics.ListEpicsPaginatedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EpicPaginatedResults, Epics.ListEpicsPaginatedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epics/paginated"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: epicPaginatedResultsInternalSchema },
        errorFactory: Epics.ListEpicsPaginatedError,
      },
      options,
    );
  }

  /**
   * Update Epic
   *
   * @remarks
   * Update Epic can be used to update numerous fields in the Epic. The only required parameter is
   * Epic ID, which can be found in the Shortcut UI.
   *
   * @returns Resource
   *
   * @throws {@link Epics.UpdateEpicError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEpic(
    request: Epics.UpdateEpicRequest,
    options?: RequestOptions,
  ): ApiPromise<Epic, Epics.UpdateEpicError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "epic-public-id", value: request.epicPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateEpicInternalSchema },
      },
      {
        success: { kind: "json", schema: epicInternalSchema },
        errorFactory: Epics.UpdateEpicError,
      },
      options,
    );
  }

  /**
   * Update Epic Comment
   *
   * @remarks
   * This endpoint allows you to update a threaded Comment on an Epic.
   *
   * @returns Resource
   *
   * @throws {@link Epics.UpdateEpicCommentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEpicComment(
    request: Epics.UpdateEpicCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreadedComment, Epics.UpdateEpicCommentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "epic-public-id", value: request.epicPublicId, schema: s.int() },
          { name: "comment-public-id", value: request.commentPublicId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCommentSchema },
      },
      {
        success: { kind: "json", schema: threadedCommentSchema },
        errorFactory: Epics.UpdateEpicCommentError,
      },
      options,
    );
  }
}

export namespace Epics {
  export type CreateEpicRequest = {
    body: CreateEpic;
  };

  export class CreateEpicError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEpicError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type CreateEpicCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    body: CreateEpicComment;
  };

  export class CreateEpicCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEpicCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type CreateEpicCommentCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    /** The ID of the parent Epic Comment. */
    commentPublicId: number;
    body: CreateCommentComment;
  };

  export class CreateEpicCommentCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEpicCommentCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type CreateEpicHealthRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
    body: CreateEpicHealth;
  };

  export class CreateEpicHealthError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEpicHealthError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteEpicRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class DeleteEpicError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEpicError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteEpicCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
  };

  export class DeleteEpicCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEpicCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetEpicRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class GetEpicError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpicError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetEpicCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
  };

  export class GetEpicCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpicCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetEpicHealthRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class GetEpicHealthError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpicHealthError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListEpicCommentsRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class ListEpicCommentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicCommentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListEpicDocumentsRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class ListEpicDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicDocumentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListEpicHealthsRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
  };

  export class ListEpicHealthsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicHealthsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListEpicStoriesRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
    /** A true/false boolean indicating whether to return Stories with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListEpicStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListEpicsRequest = {
    /** A true/false boolean indicating whether to return Epics with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListEpicsPaginatedRequest = {
    /** A true/false boolean indicating whether to return Epics with their descriptions. */
    includesDescription?: boolean;
    /** The page number to return, starting with 1. Defaults to 1. */
    page?: number;
    /** The number of Epics to return per page. Minimum 1, maximum 250, default 10. */
    pageSize?: number;
  };

  export class ListEpicsPaginatedError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEpicsPaginatedError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateEpicRequest = {
    /** The unique ID of the Epic. */
    epicPublicId: number;
    body: UpdateEpic;
  };

  export class UpdateEpicError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEpicError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateEpicCommentRequest = {
    /** The ID of the associated Epic. */
    epicPublicId: number;
    /** The ID of the Comment. */
    commentPublicId: number;
    body: UpdateComment;
  };

  export class UpdateEpicCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEpicCommentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
