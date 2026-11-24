import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { contentdisposition1Schema, type Contentdisposition1 } from "../models/unions/contentdisposition1.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import {
  workspaceCreateRequestSchema,
  type WorkspaceCreateRequest,
} from "../models/workspace-create-request.js";
import {
  workspaceFileListResponseSchema,
  type WorkspaceFileListResponse,
} from "../models/workspace-file-list-response.js";
import {
  workspaceFileUploadRequestInternalSchema,
  type WorkspaceFileUploadRequest,
} from "../models/workspace-file-upload-request.js";
import {
  workspaceFileUploadResponseSchema,
  type WorkspaceFileUploadResponse,
} from "../models/workspace-file-upload-response.js";
import { workspaceInfoSchema, type WorkspaceInfo } from "../models/workspace-info.js";
import { workspaceSizeInfoInternalSchema, type WorkspaceSizeInfo } from "../models/workspace-size-info.js";
import {
  workspaceUpdateRequestSchema,
  type WorkspaceUpdateRequest,
} from "../models/workspace-update-request.js";
import type { Servers } from "../servers.js";

export class Workspaces {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Workspace
   *
   * @remarks
   * Mint an empty workspace. Lets callers upload input files BEFORE the first run exists; pass the
   * id as workspaceId on POST /runs.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspaces.CreateWorkspaceWorkspacesPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWorkspaceWorkspacesPost(
    request: Workspaces.CreateWorkspaceWorkspacesPostRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceInfo, Workspaces.CreateWorkspaceWorkspacesPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/workspaces"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workspaceCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: workspaceInfoSchema },
        errorFactory: Workspaces.CreateWorkspaceWorkspacesPostError,
      },
      options,
    );
  }

  /**
   * Delete Workspace File
   *
   * @remarks
   * Delete one exact path from a workspace and remove matching upload metadata.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(
    request: Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/workspaces/{workspace_id}/files"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.string() }],
        query: [{ name: "path", value: request.path, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError,
      },
      options,
    );
  }

  /**
   * Delete Workspace
   *
   * @remarks
   * Archive a workspace. Idempotent for missing, archived, and foreign ids.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWorkspaceWorkspacesWorkspaceIdDelete(
    request: Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/workspaces/{workspace_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Workspace Size
   *
   * @remarks
   * Return current storage usage and the plan-specific workspace quota.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspaceSizeWorkspacesWorkspaceIdSizeGet(
    request: Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceSizeInfo, Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_id}/size"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceSizeInfoInternalSchema },
        errorFactory: Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError,
      },
      options,
    );
  }

  /**
   * Get Workspace
   *
   * @returns Successful Response
   *
   * @throws {@link Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspaceWorkspacesWorkspaceIdGet(
    request: Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceInfo, Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceInfoSchema },
        errorFactory: Workspaces.GetWorkspaceWorkspacesWorkspaceIdGetError,
      },
      options,
    );
  }

  /**
   * List Workspace Files
   *
   * @remarks
   * List files the agent has produced for this workspace, paginated.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkspaceFilesWorkspacesWorkspaceIdFilesGet(
    request: Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceFileListResponse, Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_id}/files"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.string() }],
        query: [
          { name: "prefix", value: request.prefix, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "includeUrls", value: request.includeUrls, schema: s.defaulted(s.boolean(), false) },
          {
            name: "contentDisposition",
            value: request.contentDisposition,
            schema: s.optional(s.lazy(() => contentdisposition1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceFileListResponseSchema },
        errorFactory: Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError,
      },
      options,
    );
  }

  /**
   * Update Workspace
   *
   * @remarks
   * Rename a workspace. Explicit null clears the name; omission is a no-op.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWorkspaceWorkspacesWorkspaceIdPatch(
    request: Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceInfo, Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/workspaces/{workspace_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workspaceUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: workspaceInfoSchema },
        errorFactory: Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatchError,
      },
      options,
    );
  }

  /**
   * Upload Workspace Files
   *
   * @remarks
   * Presigned PUT URLs for input files, placed under ``uploads/`` in the workspace. The agent pulls
   * them in at the start of every run. URLs are pinned to the declared Content-Type and exact
   * Content-Length.
   *
   * @returns Successful Response
   *
   * @throws {@link Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(
    request: Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    WorkspaceFileUploadResponse,
    Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/workspaces/{workspace_id}/files/upload"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "workspace_id", value: request.workspaceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workspaceFileUploadRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: workspaceFileUploadResponseSchema },
        errorFactory: Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError,
      },
      options,
    );
  }
}

export namespace Workspaces {
  export type CreateWorkspaceWorkspacesPostRequest = {
    body: WorkspaceCreateRequest;
  };

  export class CreateWorkspaceWorkspacesPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CreateWorkspaceWorkspacesPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest = {
    workspaceId: string;
    /** Relative file path to delete */
    path: string;
  };

  export const deleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequestSchema: Schema<DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest> =
    s.lazySchema(() =>
      s.object<DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest>({
        workspaceId: s.string(),
        path: s.string().check(s.minLength(1)),
      }),
    );

  export class DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error400", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest = {
    workspaceId: string;
  };

  export class DeleteWorkspaceWorkspacesWorkspaceIdDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWorkspaceWorkspacesWorkspaceIdDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest = {
    workspaceId: string;
  };

  export class GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetWorkspaceWorkspacesWorkspaceIdGetRequest = {
    workspaceId: string;
  };

  export class GetWorkspaceWorkspacesWorkspaceIdGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspaceWorkspacesWorkspaceIdGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest = {
    workspaceId: string;
    prefix?: string;
    /** @default 50 */
    limit?: number;
    cursor?: Cursor;
    /** @default false */
    includeUrls?: boolean;
    contentDisposition?: Contentdisposition1;
  };

  export const listWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequestSchema: Schema<ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest> =
    s.lazySchema(() =>
      s.object<ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest>({
        workspaceId: s.string(),
        prefix: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
        cursor: s.optional(s.lazy(() => cursorSchema)),
        includeUrls: s.defaulted(s.boolean(), false),
        contentDisposition: s.optional(s.lazy(() => contentdisposition1Schema)),
      }),
    );

  export class ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error400", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest = {
    workspaceId: string;
    body: WorkspaceUpdateRequest;
  };

  export class UpdateWorkspaceWorkspacesWorkspaceIdPatchError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWorkspaceWorkspacesWorkspaceIdPatchError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest = {
    workspaceId: string;
    body: WorkspaceFileUploadRequest;
  };

  export class UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
