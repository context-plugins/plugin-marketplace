import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderSchemaSchema, type FolderSchema } from "../models/folder-schema.js";
import { foldersRequestInternalSchema, type FoldersRequest } from "../models/folders-request.js";
import { foldersRequest1InternalSchema, type FoldersRequest1 } from "../models/folders-request1.js";
import { foldersResponseSchema, type FoldersResponse } from "../models/folders-response.js";
import { m4001Schema, type M4001 } from "../models/m4001.js";
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
   * Create a folder
   *
   * @remarks
   * Create a folder for the authenticated workspace.
   *
   * @returns The created folder
   *
   * @throws {@link Folders.CreateFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFolder(
    request: Folders.CreateFolderRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FolderSchema, Folders.CreateFolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/folders"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => foldersRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: folderSchemaSchema },
        errorFactory: Folders.CreateFolderError,
      },
      options,
    );
  }

  /**
   * Delete a folder
   *
   * @remarks
   * Delete a folder from the workspace. All existing links will still work, but they will no longer
   * be associated with this folder.
   *
   * @returns The deleted folder ID.
   *
   * @throws {@link Folders.DeleteFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFolder(
    request: Folders.DeleteFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<FoldersResponse, Folders.DeleteFolderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/folders/{id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: foldersResponseSchema },
        errorFactory: Folders.DeleteFolderError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of folders
   *
   * @remarks
   * Retrieve a list of folders for the authenticated workspace.
   *
   * @returns A list of folders
   *
   * @throws {@link Folders.ListFoldersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFolders(
    request: Folders.ListFoldersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FolderSchema[], Folders.ListFoldersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/folders"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.float64(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => folderSchemaSchema)) },
        errorFactory: Folders.ListFoldersError,
      },
      options,
    );
  }

  /**
   * Update a folder
   *
   * @remarks
   * Update a folder in the workspace.
   *
   * @returns The updated folder.
   *
   * @throws {@link Folders.UpdateFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFolder(
    request: Folders.UpdateFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderSchema, Folders.UpdateFolderError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/folders/{id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => foldersRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: folderSchemaSchema },
        errorFactory: Folders.UpdateFolderError,
      },
      options,
    );
  }
}

export namespace Folders {
  export type CreateFolderRequest = {
    body?: FoldersRequest;
  };

  export class CreateFolderError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFolderError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type DeleteFolderRequest = {
    /** The ID of the folder to delete. */
    id: string;
  };

  export class DeleteFolderError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFolderError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type ListFoldersRequest = {
    /** The search term to filter the folders by. */
    search?: string;
    /** The page number for pagination. @default 1 */
    page?: number;
    /** The number of items per page. @default 50 */
    pageSize?: number;
  };

  export const listFoldersRequestSchema: Schema<ListFoldersRequest> = s.lazySchema(() =>
    s.object<ListFoldersRequest>({
      search: s.optional(s.string()),
      page: s.defaulted(s.float64().check(s.gt(0)), 1),
      pageSize: s.defaulted(s.float64().check(s.gt(0), s.lte(50)), 50),
    }),
  );

  export class ListFoldersError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFoldersError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type UpdateFolderRequest = {
    /** The ID of the folder to update. */
    id: string;
    body?: FoldersRequest1;
  };

  export class UpdateFolderError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFolderError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }
}
