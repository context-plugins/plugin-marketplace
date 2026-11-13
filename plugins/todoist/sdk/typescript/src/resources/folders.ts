import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { body2Schema, type Body2 } from "../models/body2.js";
import { body35Schema, type Body35 } from "../models/body35.js";
import { folderSyncViewSchema, type FolderSyncView } from "../models/folder-sync-view.js";
import { paginatedList3Schema, type PaginatedList3 } from "../models/paginated-list3.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

export class Folders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Folder
   *
   * @remarks
   * Create a new folder in the given workspace.
   *
   * @returns Successful Response
   *
   * @throws {@link Folders.CreateFolderApiV1FoldersPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFolderApiV1FoldersPost(
    request: Folders.CreateFolderApiV1FoldersPostRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderSyncView, Folders.CreateFolderApiV1FoldersPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/folders"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body35Schema },
      },
      {
        success: { kind: "json", schema: folderSyncViewSchema },
        errorFactory: Folders.CreateFolderApiV1FoldersPostError,
      },
      options,
    );
  }

  /**
   * Delete Folder
   *
   * @remarks
   * Delete a folder. Projects in the folder will be moved out of it.
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Folders.DeleteFolderApiV1FoldersFolderIdDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFolderApiV1FoldersFolderIdDelete(
    request: Folders.DeleteFolderApiV1FoldersFolderIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Folders.DeleteFolderApiV1FoldersFolderIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/folders/{folder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Folders.DeleteFolderApiV1FoldersFolderIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Folder
   *
   * @remarks
   * Return the folder for the given folder ID.
   *
   * @returns Successful Response
   *
   * @throws {@link Folders.GetFolderApiV1FoldersFolderIdGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFolderApiV1FoldersFolderIdGet(
    request: Folders.GetFolderApiV1FoldersFolderIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderSyncView, Folders.GetFolderApiV1FoldersFolderIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/folders/{folder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: folderSyncViewSchema },
        errorFactory: Folders.GetFolderApiV1FoldersFolderIdGetError,
      },
      options,
    );
  }

  /**
   * Get Folders
   *
   * @remarks
   * Get all folders for a workspace.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Folders.GetFoldersApiV1FoldersGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFoldersApiV1FoldersGet(
    request: Folders.GetFoldersApiV1FoldersGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedList3, Folders.GetFoldersApiV1FoldersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/folders"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "workspace_id", value: request.workspaceId, schema: s.int() },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList3Schema },
        errorFactory: Folders.GetFoldersApiV1FoldersGetError,
      },
      options,
    );
  }

  /**
   * Update Folder
   *
   * @remarks
   * Update an existing folder.
   *
   * @returns Successful Response
   *
   * @throws {@link Folders.UpdateFolderApiV1FoldersFolderIdPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFolderApiV1FoldersFolderIdPost(
    request: Folders.UpdateFolderApiV1FoldersFolderIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderSyncView, Folders.UpdateFolderApiV1FoldersFolderIdPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/folders/{folder_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body2Schema },
      },
      {
        success: { kind: "json", schema: folderSyncViewSchema },
        errorFactory: Folders.UpdateFolderApiV1FoldersFolderIdPostError,
      },
      options,
    );
  }
}

export namespace Folders {
  export type CreateFolderApiV1FoldersPostRequest = {
    body: Body35;
  };

  export class CreateFolderApiV1FoldersPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFolderApiV1FoldersPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteFolderApiV1FoldersFolderIdDeleteRequest = {
    folderId: number;
  };

  export class DeleteFolderApiV1FoldersFolderIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFolderApiV1FoldersFolderIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetFolderApiV1FoldersFolderIdGetRequest = {
    folderId: number;
  };

  export class GetFolderApiV1FoldersFolderIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFolderApiV1FoldersFolderIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetFoldersApiV1FoldersGetRequest = {
    workspaceId: number;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const getFoldersApiV1FoldersGetRequestSchema: Schema<GetFoldersApiV1FoldersGetRequest> =
    s.lazySchema(() =>
      s.object<GetFoldersApiV1FoldersGetRequest>({
        workspaceId: s.int(),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class GetFoldersApiV1FoldersGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFoldersApiV1FoldersGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateFolderApiV1FoldersFolderIdPostRequest = {
    folderId: number;
    body: Body2;
  };

  export class UpdateFolderApiV1FoldersFolderIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFolderApiV1FoldersFolderIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
