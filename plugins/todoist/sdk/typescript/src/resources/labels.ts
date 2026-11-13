import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { body1Schema, type Body1 } from "../models/body1.js";
import { body13InternalSchema, type Body13 } from "../models/body13.js";
import { body22Schema, type Body22 } from "../models/body22.js";
import { body32InternalSchema, type Body32 } from "../models/body32.js";
import { labelRestViewSchema, type LabelRestView } from "../models/label-rest-view.js";
import { paginatedList11Schema, type PaginatedList11 } from "../models/paginated-list11.js";
import { paginatedList5Schema, type PaginatedList5 } from "../models/paginated-list5.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

export class Labels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Label
   *
   * @remarks
   * Create a personal label.
   *
   * Premium limits apply to personal label creation. Free users who exceed the plan limit receive a
   * premium-only error.
   *
   * @returns Successful Response
   *
   * @throws {@link Labels.CreateLabelApiV1LabelsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLabelApiV1LabelsPost(
    request: Labels.CreateLabelApiV1LabelsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<LabelRestView, Labels.CreateLabelApiV1LabelsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/labels"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body13InternalSchema },
      },
      {
        success: { kind: "json", schema: labelRestViewSchema },
        errorFactory: Labels.CreateLabelApiV1LabelsPostError,
      },
      options,
    );
  }

  /**
   * Delete Label
   *
   * @remarks
   * Deletes a personal label. All instances of the label will be removed from tasks
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Labels.DeleteLabelApiV1LabelsLabelIdDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLabelApiV1LabelsLabelIdDelete(
    request: Labels.DeleteLabelApiV1LabelsLabelIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Labels.DeleteLabelApiV1LabelsLabelIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/labels/{label_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "label_id", value: request.labelId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Labels.DeleteLabelApiV1LabelsLabelIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Label
   *
   * @remarks
   * Return a personal label by ID.
   *
   * Returns `NOT_FOUND` when the label does not exist or the ID is invalid.
   *
   * @returns Successful Response
   *
   * @throws {@link Labels.GetLabelApiV1LabelsLabelIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabelApiV1LabelsLabelIdGet(
    request: Labels.GetLabelApiV1LabelsLabelIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<LabelRestView, Labels.GetLabelApiV1LabelsLabelIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/labels/{label_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "label_id", value: request.labelId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: labelRestViewSchema },
        errorFactory: Labels.GetLabelApiV1LabelsLabelIdGetError,
      },
      options,
    );
  }

  /**
   * Get Labels
   *
   * @remarks
   * Get all user labels.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Labels.GetLabelsApiV1LabelsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabelsApiV1LabelsGet(
    request: Labels.GetLabelsApiV1LabelsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList5, Labels.GetLabelsApiV1LabelsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/labels"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList5Schema },
        errorFactory: Labels.GetLabelsApiV1LabelsGetError,
      },
      options,
    );
  }

  /**
   * Search Labels
   *
   * @remarks
   * Search user labels by name.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Labels.SearchLabelsApiV1LabelsSearchGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchLabelsApiV1LabelsSearchGet(
    request: Labels.SearchLabelsApiV1LabelsSearchGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedList5, Labels.SearchLabelsApiV1LabelsSearchGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/labels/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList5Schema },
        errorFactory: Labels.SearchLabelsApiV1LabelsSearchGetError,
      },
      options,
    );
  }

  /**
   * Shared Labels
   *
   * @remarks
   * Returns a set of unique strings containing [shared
   * labels](https://www.todoist.com/help/articles/introduction-to-labels-dSo2eE#h_01HE1NNWMV8MCXNVF10GT13ZEX)
   * from active tasks.
   *
   * @returns Successful Response
   *
   * @throws {@link Labels.SharedLabelsApiV1LabelsSharedGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sharedLabelsApiV1LabelsSharedGet(
    request: Labels.SharedLabelsApiV1LabelsSharedGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList11, Labels.SharedLabelsApiV1LabelsSharedGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/labels/shared"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "omit_personal", value: request.omitPersonal, schema: s.defaulted(s.boolean(), false) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList11Schema },
        errorFactory: Labels.SharedLabelsApiV1LabelsSharedGetError,
      },
      options,
    );
  }

  /**
   * Shared Labels Remove
   *
   * @remarks
   * Remove the given shared label from all active tasks
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sharedLabelsRemoveApiV1LabelsSharedRemovePost(
    request: Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/labels/shared/remove"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body1Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Labels.SharedLabelsRemoveApiV1LabelsSharedRemovePostError,
      },
      options,
    );
  }

  /**
   * Shared Labels Rename
   *
   * @remarks
   * Rename the given shared label from all active tasks
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sharedLabelsRenameApiV1LabelsSharedRenamePost(
    request: Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/labels/shared/rename"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body22Schema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Labels.SharedLabelsRenameApiV1LabelsSharedRenamePostError,
      },
      options,
    );
  }

  /**
   * Update Label
   *
   * @remarks
   * Update a personal label.
   *
   * At least one mutable field must be provided. Passing `null` for an optional field keeps the
   * existing value unchanged.
   *
   * @returns Successful Response
   *
   * @throws {@link Labels.UpdateLabelApiV1LabelsLabelIdPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLabelApiV1LabelsLabelIdPost(
    request: Labels.UpdateLabelApiV1LabelsLabelIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<LabelRestView, Labels.UpdateLabelApiV1LabelsLabelIdPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/labels/{label_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "label_id", value: request.labelId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body32InternalSchema },
      },
      {
        success: { kind: "json", schema: labelRestViewSchema },
        errorFactory: Labels.UpdateLabelApiV1LabelsLabelIdPostError,
      },
      options,
    );
  }
}

export namespace Labels {
  export type CreateLabelApiV1LabelsPostRequest = {
    body: Body13;
  };

  export class CreateLabelApiV1LabelsPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLabelApiV1LabelsPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteLabelApiV1LabelsLabelIdDeleteRequest = {
    labelId: number;
  };

  export class DeleteLabelApiV1LabelsLabelIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLabelApiV1LabelsLabelIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetLabelApiV1LabelsLabelIdGetRequest = {
    labelId: number;
  };

  export class GetLabelApiV1LabelsLabelIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelApiV1LabelsLabelIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetLabelsApiV1LabelsGetRequest = {
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const getLabelsApiV1LabelsGetRequestSchema: Schema<GetLabelsApiV1LabelsGetRequest> = s.lazySchema(
    () =>
      s.object<GetLabelsApiV1LabelsGetRequest>({
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
  );

  export class GetLabelsApiV1LabelsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelsApiV1LabelsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type SearchLabelsApiV1LabelsSearchGetRequest = {
    query: string;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const searchLabelsApiV1LabelsSearchGetRequestSchema: Schema<SearchLabelsApiV1LabelsSearchGetRequest> =
    s.lazySchema(() =>
      s.object<SearchLabelsApiV1LabelsSearchGetRequest>({
        query: s.string().check(s.minLength(1), s.maxLength(1024)),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class SearchLabelsApiV1LabelsSearchGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchLabelsApiV1LabelsSearchGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type SharedLabelsApiV1LabelsSharedGetRequest = {
    /** @default false */
    omitPersonal?: boolean;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const sharedLabelsApiV1LabelsSharedGetRequestSchema: Schema<SharedLabelsApiV1LabelsSharedGetRequest> =
    s.lazySchema(() =>
      s.object<SharedLabelsApiV1LabelsSharedGetRequest>({
        omitPersonal: s.defaulted(s.boolean(), false),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class SharedLabelsApiV1LabelsSharedGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SharedLabelsApiV1LabelsSharedGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type SharedLabelsRemoveApiV1LabelsSharedRemovePostRequest = {
    body: Body1;
  };

  export class SharedLabelsRemoveApiV1LabelsSharedRemovePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SharedLabelsRemoveApiV1LabelsSharedRemovePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type SharedLabelsRenameApiV1LabelsSharedRenamePostRequest = {
    body: Body22;
  };

  export class SharedLabelsRenameApiV1LabelsSharedRenamePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SharedLabelsRenameApiV1LabelsSharedRenamePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateLabelApiV1LabelsLabelIdPostRequest = {
    labelId: number;
    body: Body32;
  };

  export class UpdateLabelApiV1LabelsLabelIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLabelApiV1LabelsLabelIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
