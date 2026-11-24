import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  analyticsV1FoldersResponseSchema,
  type AnalyticsV1FoldersResponse,
} from "../models/analytics-v1-folders-response.js";
import { createFolderRequestSchema, type CreateFolderRequest } from "../models/create-folder-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { folderSchema, type Folder } from "../models/folder.js";
import { updateFolderRequestSchema, type UpdateFolderRequest } from "../models/update-folder-request.js";
import type { Servers } from "../servers.js";

/**
 * Organize Cloud Analytics resources (reports, allocations) into folders.
 */
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
   * Creates a new Cloud Analytics folder.
   *
   * @returns Created - The folder was created.
   *
   * @throws {@link Folders.CreateFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFolder(
    request: Folders.CreateFolderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Folder, Folders.CreateFolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/folders"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createFolderRequestSchema },
      },
      {
        success: { kind: "json", schema: folderSchema },
        errorFactory: Folders.CreateFolderError,
      },
      options,
    );
  }

  /**
   * Delete a folder
   *
   * @remarks
   * Deletes the specified folder. All nested folders will be deleted. Any reports or allocations
   * contained in the folder are moved to the root.
   *
   * @returns No Content - Folder deleted.
   *
   * @throws {@link Folders.DeleteFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFolder(
    request: Folders.DeleteFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Folders.DeleteFolderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/analytics/v1/folders/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Folders.DeleteFolderError,
      },
      options,
    );
  }

  /**
   * Get a folder
   *
   * @remarks
   * Returns the specified Cloud Analytics folder.
   *
   * @returns OK - Folder returned.
   *
   * @throws {@link Folders.GetFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFolder(
    request: Folders.GetFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<Folder, Folders.GetFolderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/folders/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: folderSchema },
        errorFactory: Folders.GetFolderError,
      },
      options,
    );
  }

  /**
   * List folders
   *
   * @remarks
   * Returns Cloud Analytics folders the current customer has access to. Folders are returned in
   * id-ascending order.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Folders.ListFoldersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFolders(
    request: Folders.ListFoldersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AnalyticsV1FoldersResponse, Folders.ListFoldersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/folders"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsV1FoldersResponseSchema },
        errorFactory: Folders.ListFoldersError,
      },
      options,
    );
  }

  /**
   * Update a folder
   *
   * @remarks
   * Updates the specified folder. All fields are optional. To reparent the folder, set
   * `parentFolderId` to the target folder ID (use "root" for the top level). If a sibling at the
   * target has the same name, the folder is auto-renamed. To move reports or allocations into or
   * out of a folder, update the item's `folderId` field via the report or allocation PATCH
   * endpoint.
   *
   * @returns OK - Folder updated.
   *
   * @throws {@link Folders.UpdateFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFolder(
    request: Folders.UpdateFolderRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Folder, Folders.UpdateFolderError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/analytics/v1/folders/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFolderRequestSchema },
      },
      {
        success: { kind: "json", schema: folderSchema },
        errorFactory: Folders.UpdateFolderError,
      },
      options,
    );
  }
}

export namespace Folders {
  export type CreateFolderRequestParams = {
    body: CreateFolderRequest;
  };

  export class CreateFolderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFolderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteFolderRequest = {
    /** Folder ID. */
    id: string;
  };

  export class DeleteFolderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFolderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFolderRequest = {
    /** Folder ID. */
    id: string;
  };

  export class GetFolderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFolderError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListFoldersRequest = {
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
  };

  export class ListFoldersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFoldersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateFolderRequestParams = {
    /** Folder ID. */
    id: string;
    body: UpdateFolderRequest;
  };

  export class UpdateFolderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFolderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
