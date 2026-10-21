import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  assignFolderRolesRequestSchema,
  type AssignFolderRolesRequest,
} from "../models/assign-folder-roles-request.js";
import { createFolderResponseSchema, type CreateFolderResponse } from "../models/create-folder-response.js";
import { deleteFolderResponseSchema, type DeleteFolderResponse } from "../models/delete-folder-response.js";
import { directionEnumSchema, type DirectionEnum } from "../models/direction-enum.js";
import { folderByIdRequestSchema, type FolderByIdRequest } from "../models/folder-by-id-request.js";
import { folderByPathRequestSchema, type FolderByPathRequest } from "../models/folder-by-path-request.js";
import {
  folderDescendantsRequestSchema,
  type FolderDescendantsRequest,
} from "../models/folder-descendants-request.js";
import {
  folderDescendantsResponseSchema,
  type FolderDescendantsResponse,
} from "../models/folder-descendants-response.js";
import { folderDetailResponseSchema, type FolderDetailResponse } from "../models/folder-detail-response.js";
import { folderRenameRequestSchema, type FolderRenameRequest } from "../models/folder-rename-request.js";
import { folderRenameResponseSchema, type FolderRenameResponse } from "../models/folder-rename-response.js";
import { folderRolesResponseSchema, type FolderRolesResponse } from "../models/folder-roles-response.js";
import { folderSearchRequestSchema, type FolderSearchRequest } from "../models/folder-search-request.js";
import { foldersListResponseSchema, type FoldersListResponse } from "../models/folders-list-response.js";
import {
  foldersSearchResponseSchema,
  type FoldersSearchResponse,
} from "../models/folders-search-response.js";
import { moveFolderRequestSchema, type MoveFolderRequest } from "../models/move-folder-request.js";
import { moveFolderResponseSchema, type MoveFolderResponse } from "../models/move-folder-response.js";
import { successResponseSchema, type SuccessResponse } from "../models/success-response.js";
import type { Servers } from "../servers.js";

/**
 * Enables you to manage the asset folders in your product environment.
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
   * Assign folder roles
   *
   * @remarks
   * Assigns or removes folder roles for a principal (user, group, or API key). Supports all system
   * folder roles (see [System roles
   * reference](https://cloudinary.com/documentation/permissions_system_roles_policies#folder_roles)).
   * Enterprise customers can also assign custom roles by ID. Note: Assigning roles to users or
   * groups via this endpoint requires their user or group IDs, which are available through the
   * Provisioning API (Enterprise only). Free customers can use this endpoint to assign roles only
   * to API keys, but can assign folder roles to users and groups through the UI.
   *
   * @returns Roles added or removed successfully
   *
   * @throws {@link Folders.AssignFolderRolesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  assignFolderRoles(
    request: Folders.AssignFolderRolesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponse, Folders.AssignFolderRolesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folder_operations/invite/{folder_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "folder_id", value: request.folderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assignFolderRolesRequestSchema },
      },
      {
        success: { kind: "json", schema: successResponseSchema },
        errorFactory: Folders.AssignFolderRolesError,
      },
      options,
    );
  }

  /**
   * Creates a new empty folder in your Cloudinary media library
   *
   * @remarks
   * Creates a new folder at the specified path
   *
   * @returns Folder created successfully
   *
   * @throws {@link Folders.CreateFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createFolder(
    request: Folders.CreateFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateFolderResponse, Folders.CreateFolderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/{folder}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "folder", value: request.folder, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createFolderResponseSchema },
        errorFactory: Folders.CreateFolderError,
      },
      options,
    );
  }

  /**
   * Deletes an existing folder from your media library
   *
   * @remarks
   * Deletes a folder and all assets within it.
   *
   * @returns Folder deleted successfully
   *
   * @throws {@link Folders.DestroyFolderError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  destroyFolder(
    request: Folders.DestroyFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteFolderResponse, Folders.DestroyFolderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/{folder}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "folder", value: request.folder, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteFolderResponseSchema },
        errorFactory: Folders.DestroyFolderError,
      },
      options,
    );
  }

  /**
   * Get a folder by its identifier
   *
   * @remarks
   * Returns the details of the folder with the specified identifier, including its ancestors.
   *
   * @returns The folder was successfully retrieved.
   *
   * @throws {@link Folders.GetFolderByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getFolderById(
    request: Folders.GetFolderByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderDetailResponse, Folders.GetFolderByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/by_id"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: folderByIdRequestSchema },
      },
      {
        success: { kind: "json", schema: folderDetailResponseSchema },
        errorFactory: Folders.GetFolderByIdError,
      },
      options,
    );
  }

  /**
   * Get a folder by its path
   *
   * @remarks
   * Returns the details of the folder at the specified path, including its ancestors.
   *
   * @returns The folder was successfully retrieved.
   *
   * @throws {@link Folders.GetFolderByPathError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getFolderByPath(
    request: Folders.GetFolderByPathRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderDetailResponse, Folders.GetFolderByPathError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/by_path"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: folderByPathRequestSchema },
      },
      {
        success: { kind: "json", schema: folderDetailResponseSchema },
        errorFactory: Folders.GetFolderByPathError,
      },
      options,
    );
  }

  /**
   * Get the descendants of a folder
   *
   * @remarks
   * Returns the descendant folders of the folder with the specified identifier, optionally filtered
   * to a set of folder identifiers.
   *
   * @returns The descendant folders were successfully retrieved.
   *
   * @throws {@link Folders.GetFolderDescendantsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getFolderDescendants(
    request: Folders.GetFolderDescendantsRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderDescendantsResponse, Folders.GetFolderDescendantsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/descendants"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: folderDescendantsRequestSchema },
      },
      {
        success: { kind: "json", schema: folderDescendantsResponseSchema },
        errorFactory: Folders.GetFolderDescendantsError,
      },
      options,
    );
  }

  /**
   * Get folder roles
   *
   * @remarks
   * Lists the principals (users, groups, or API keys) and their role assignments on a specific
   * folder, including roles inherited from ancestor folders.
   *
   * @returns Principals and their roles successfully retrieved
   *
   * @throws {@link Folders.GetFolderRolesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getFolderRoles(
    request: Folders.GetFolderRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderRolesResponse, Folders.GetFolderRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folder_operations/invite/{folder_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "folder_id", value: request.folderId, schema: s.string() },
        ],
        query: [{ name: "permitted_roles", value: request.permittedRoles, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: folderRolesResponseSchema },
        errorFactory: Folders.GetFolderRolesError,
      },
      options,
    );
  }

  /**
   * Get root folders
   *
   * @remarks
   * Retrieves an array of all root folders in your Cloudinary product environment. Limited to 2000
   * results.
   *
   * @returns The root folders were successfully retrieved
   *
   * @throws {@link Folders.ListRootFoldersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listRootFolders(
    request: Folders.ListRootFoldersRequest,
    options?: RequestOptions,
  ): ApiPromise<FoldersListResponse, Folders.ListRootFoldersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: foldersListResponseSchema },
        errorFactory: Folders.ListRootFoldersError,
      },
      options,
    );
  }

  /**
   * Rename or move a folder
   *
   * @remarks
   * Renames or moves the folder at the specified path, along with all the assets it contains, to a
   * new path.
   *
   * @returns The folder was successfully renamed or moved.
   *
   * @throws {@link Folders.RenameFolderOperationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  renameFolderOperation(
    request: Folders.RenameFolderOperationRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderRenameResponse, Folders.RenameFolderOperationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folder_operations/rename"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: folderRenameRequestSchema },
      },
      {
        success: { kind: "json", schema: folderRenameResponseSchema },
        errorFactory: Folders.RenameFolderOperationError,
      },
      options,
    );
  }

  /**
   * Searches for folders whose attributes match a given expression
   *
   * @remarks
   * Lists the folders that match the specified search expression. Limited to 2000 results. If no
   * parameters are passed, returns the 50 most recently created folders in descending order of
   * creation time.
   *
   * @returns A listing of all folders that match the search expression criteria according to the
   * requested sorting order.
   *
   * @throws {@link Folders.SearchFoldersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  searchFolders(
    request: Folders.SearchFoldersRequest,
    options?: RequestOptions,
  ): ApiPromise<FoldersSearchResponse, Folders.SearchFoldersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/search"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "expression", value: request.expression, schema: s.optional(s.string()) },
          {
            name: "sort_by",
            value: request.sortBy,
            schema: s.optional(s.array(s.lazy(() => directionEnumSchema))),
          },
          { name: "max_results", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: foldersSearchResponseSchema },
        errorFactory: Folders.SearchFoldersError,
      },
      options,
    );
  }

  /**
   * Searches for folders in your product environment
   *
   * @remarks
   * Lists the folders that match the specified search expression. Limited to 2000 results. If no
   * parameters are passed, returns the 50 most recently created folders in descending order of
   * creation time.
   *
   * @returns A listing of all folders that match the search expression criteria according to the
   * requested sorting order.
   *
   * @throws {@link Folders.SearchFoldersPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  searchFoldersPost(
    request: Folders.SearchFoldersPostRequest,
    options?: RequestOptions,
  ): ApiPromise<FoldersSearchResponse, Folders.SearchFoldersPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/search"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: folderSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: foldersSearchResponseSchema },
        errorFactory: Folders.SearchFoldersPostError,
      },
      options,
    );
  }

  /**
   * List sub-folders
   *
   * @remarks
   * Returns a list of sub-folders under the specified folder path.
   *
   * @returns List of sub-folders retrieved successfully
   *
   * @throws {@link Folders.ShowFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  showFolder(
    request: Folders.ShowFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<FoldersListResponse, Folders.ShowFolderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/{folder}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "folder", value: request.folder, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: foldersListResponseSchema },
        errorFactory: Folders.ShowFolderError,
      },
      options,
    );
  }

  /**
   * Renames or moves an entire folder (along with all assets it contains) to a new location
   *
   * @remarks
   * Renames or moves an entire folder (along with all assets it contains) to a new location within
   * your Cloudinary media library.
   *
   * @returns Folder renamed successfully
   *
   * @throws {@link Folders.UpdateFolderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updateFolder(
    request: Folders.UpdateFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<MoveFolderResponse, Folders.UpdateFolderError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/folders/{folder}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "folder", value: request.folder, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: moveFolderRequestSchema },
      },
      {
        success: { kind: "json", schema: moveFolderResponseSchema },
        errorFactory: Folders.UpdateFolderError,
      },
      options,
    );
  }
}

export namespace Folders {
  export type AssignFolderRolesRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * The immutable identifier of the folder, returned by the Get root folders and Get subfolders
     * endpoints.
     */
    folderId: string;
    /** The folder role assignments. */
    body: AssignFolderRolesRequest;
  };

  export class AssignFolderRolesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssignFolderRolesError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type CreateFolderRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * The full path of the folder, including any nested folders. Must not be empty, and must not
     * contain double slashes or leading/trailing slashes.
     */
    folder: string;
  };

  export class CreateFolderError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFolderError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 409, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DestroyFolderRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * The full path of the folder, including any nested folders. Must not be empty, and must not
     * contain double slashes or leading/trailing slashes.
     */
    folder: string;
  };

  export class DestroyFolderError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DestroyFolderError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetFolderByIdRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The identifier of the folder to retrieve. */
    body: FolderByIdRequest;
  };

  export class GetFolderByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFolderByIdError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetFolderByPathRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The path of the folder to retrieve. */
    body: FolderByPathRequest;
  };

  export class GetFolderByPathError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFolderByPathError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetFolderDescendantsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The parent folder identifier and optional filter. */
    body: FolderDescendantsRequest;
  };

  export class GetFolderDescendantsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFolderDescendantsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetFolderRolesRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * The immutable identifier of the folder, returned by the Get root folders and Get subfolders
     * endpoints.
     */
    folderId: string;
    /**
     * Whether to include in the response the roles the authenticated user can assign on this
     * folder, based on their permission level. Default: `false`.
     */
    permittedRoles?: boolean;
  };

  export class GetFolderRolesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFolderRolesError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListRootFoldersRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
  };

  export class ListRootFoldersError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRootFoldersError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type RenameFolderOperationRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The source and destination folder paths. */
    body: FolderRenameRequest;
  };

  export class RenameFolderOperationError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<RenameFolderOperationError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type SearchFoldersRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * The (Lucene-like) string expression specifying the search query. If not passed, returns all
     * folders (up to max_results).
     */
    expression?: string;
    /** Sort order for the results. Each item maps a field name to a direction. */
    sortBy?: DirectionEnum[];
    /** Maximum number of folders to return (max 500, default 50). @default 50 */
    maxResults?: number;
    /**
     * The cursor for pagination. Use the next_cursor value from a previous response to get the next
     * page of results.
     */
    nextCursor?: string;
  };

  export class SearchFoldersError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchFoldersError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type SearchFoldersPostRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The folder search query parameters. */
    body: FolderSearchRequest;
  };

  export class SearchFoldersPostError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchFoldersPostError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ShowFolderRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * The full path of the folder, including any nested folders. Must not be empty, and must not
     * contain double slashes or leading/trailing slashes.
     */
    folder: string;
  };

  export class ShowFolderError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ShowFolderError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UpdateFolderRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * The full path of the folder, including any nested folders. Must not be empty, and must not
     * contain double slashes or leading/trailing slashes.
     */
    folder: string;
    /** The new folder path. */
    body: MoveFolderRequest;
  };

  export class UpdateFolderError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFolderError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
