import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dataFileCreateRequestInternalSchema,
  type DataFileCreateRequest,
} from "../models/data-file-create-request.js";
import {
  dataFileDownloadResponseSchema,
  type DataFileDownloadResponse,
} from "../models/data-file-download-response.js";
import {
  dataFileGroupListResponseSchema,
  type DataFileGroupListResponse,
} from "../models/data-file-group-list-response.js";
import {
  dataFileIdsRequestInternalSchema,
  type DataFileIdsRequest,
} from "../models/data-file-ids-request.js";
import { dataFileListResponseSchema, type DataFileListResponse } from "../models/data-file-list-response.js";
import { dataFileResponseSchema, type DataFileResponse } from "../models/data-file-response.js";
import {
  dataFileStorageUsageResponseSchema,
  type DataFileStorageUsageResponse,
} from "../models/data-file-storage-usage-response.js";
import {
  dataFileUpdateRequestInternalSchema,
  type DataFileUpdateRequest,
} from "../models/data-file-update-request.js";
import {
  dataFileUploadResponseSchema,
  type DataFileUploadResponse,
} from "../models/data-file-upload-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { Scope3, scope3Schema } from "../models/scope3.js";
import { membershipIdSchema, type MembershipId } from "../models/unions/membership-id.js";
import type { Servers } from "../servers.js";

export class Data {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Complete Data File
   *
   * @remarks
   * Publish an uploaded data file, recording its stored size and type.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.CompleteDataFileV2DataFileIdCompletePostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  completeDataFileV2DataFileIdCompletePost(
    request: Data.CompleteDataFileV2DataFileIdCompletePostRequest,
    options?: RequestOptions,
  ): ApiPromise<DataFileResponse, Data.CompleteDataFileV2DataFileIdCompletePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/data/{file_id}/complete"),
        auth: noneAuth,
        pathParams: [{ name: "file_id", value: request.fileId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataFileResponseSchema },
        errorFactory: Data.CompleteDataFileV2DataFileIdCompletePostError,
      },
      options,
    );
  }

  /**
   * Create Data File
   *
   * @remarks
   * Reserve a data file and return a presigned PUT to upload its bytes.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.CreateDataFileV2DataPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createDataFileV2DataPost(
    request: Data.CreateDataFileV2DataPostRequest,
    options?: RequestOptions,
  ): ApiPromise<DataFileUploadResponse, Data.CreateDataFileV2DataPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/data"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dataFileCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: dataFileUploadResponseSchema },
        errorFactory: Data.CreateDataFileV2DataPostError,
      },
      options,
    );
  }

  /**
   * Delete Data File
   *
   * @remarks
   * Delete a data file and its stored object.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.DeleteDataFileV2DataFileIdDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  deleteDataFileV2DataFileIdDelete(
    request: Data.DeleteDataFileV2DataFileIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Data.DeleteDataFileV2DataFileIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/data/{file_id}"),
        auth: noneAuth,
        pathParams: [{ name: "file_id", value: request.fileId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Data.DeleteDataFileV2DataFileIdDeleteError,
      },
      options,
    );
  }

  /**
   * Delete Data Files
   *
   * @remarks
   * Delete data files and their stored objects. Fails if any id is unreadable or unwritable.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.DeleteDataFilesV2DataDeletePostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  deleteDataFilesV2DataDeletePost(
    request: Data.DeleteDataFilesV2DataDeletePostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Data.DeleteDataFilesV2DataDeletePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/data/delete"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dataFileIdsRequestInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Data.DeleteDataFilesV2DataDeletePostError,
      },
      options,
    );
  }

  /**
   * Download Data File
   *
   * @remarks
   * Presign an inline and an attachment link for a ready data file.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.DownloadDataFileV2DataFileIdDownloadGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  downloadDataFileV2DataFileIdDownloadGet(
    request: Data.DownloadDataFileV2DataFileIdDownloadGetRequest,
    options?: RequestOptions,
  ): ApiPromise<DataFileDownloadResponse, Data.DownloadDataFileV2DataFileIdDownloadGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/data/{file_id}/download"),
        auth: noneAuth,
        pathParams: [{ name: "file_id", value: request.fileId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataFileDownloadResponseSchema },
        errorFactory: Data.DownloadDataFileV2DataFileIdDownloadGetError,
      },
      options,
    );
  }

  /**
   * Get Data File Storage Usage
   *
   * @remarks
   * Return current data-file storage use and the team's effective limits.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.GetDataFileStorageUsageV2DataUsageGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getDataFileStorageUsageV2DataUsageGet(
    options?: RequestOptions,
  ): ApiPromise<DataFileStorageUsageResponse, Data.GetDataFileStorageUsageV2DataUsageGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/data/usage"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataFileStorageUsageResponseSchema },
        errorFactory: Data.GetDataFileStorageUsageV2DataUsageGetError,
      },
      options,
    );
  }

  /**
   * Get Data File
   *
   * @remarks
   * Fetch one data file's metadata.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.GetDataFileV2DataFileIdGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getDataFileV2DataFileIdGet(
    request: Data.GetDataFileV2DataFileIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<DataFileResponse, Data.GetDataFileV2DataFileIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/data/{file_id}"),
        auth: noneAuth,
        pathParams: [{ name: "file_id", value: request.fileId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataFileResponseSchema },
        errorFactory: Data.GetDataFileV2DataFileIdGetError,
      },
      options,
    );
  }

  /**
   * List Data File Groups
   *
   * @remarks
   * Summarise the readable folders so a browser can load their files on demand.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.ListDataFileGroupsV2DataGroupsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listDataFileGroupsV2DataGroupsGet(
    options?: RequestOptions,
  ): ApiPromise<DataFileGroupListResponse, Data.ListDataFileGroupsV2DataGroupsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/data/groups"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataFileGroupListResponseSchema },
        errorFactory: Data.ListDataFileGroupsV2DataGroupsGetError,
      },
      options,
    );
  }

  /**
   * List Data Files
   *
   * @remarks
   * List the data files the caller can read, optionally narrowed to one folder.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.ListDataFilesV2DataGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listDataFilesV2DataGet(
    request: Data.ListDataFilesV2DataGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DataFileListResponse, Data.ListDataFilesV2DataGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/data"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "scope", value: request.scope, schema: s.defaulted(scope3Schema, Scope3.All) },
          {
            name: "membership_id",
            value: request.membershipId,
            schema: s.optional(s.lazy(() => membershipIdSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataFileListResponseSchema },
        errorFactory: Data.ListDataFilesV2DataGetError,
      },
      options,
    );
  }

  /**
   * Update Data File
   *
   * @remarks
   * Rename a data file.
   *
   * @returns Successful Response
   *
   * @throws {@link Data.UpdateDataFileV2DataFileIdPatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateDataFileV2DataFileIdPatch(
    request: Data.UpdateDataFileV2DataFileIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<DataFileResponse, Data.UpdateDataFileV2DataFileIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/data/{file_id}"),
        auth: noneAuth,
        pathParams: [{ name: "file_id", value: request.fileId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dataFileUpdateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: dataFileResponseSchema },
        errorFactory: Data.UpdateDataFileV2DataFileIdPatchError,
      },
      options,
    );
  }
}

export namespace Data {
  export type CompleteDataFileV2DataFileIdCompletePostRequest = {
    fileId: string;
  };

  export class CompleteDataFileV2DataFileIdCompletePostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CompleteDataFileV2DataFileIdCompletePostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateDataFileV2DataPostRequest = {
    body: DataFileCreateRequest;
  };

  export class CreateDataFileV2DataPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDataFileV2DataPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteDataFileV2DataFileIdDeleteRequest = {
    fileId: string;
  };

  export class DeleteDataFileV2DataFileIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDataFileV2DataFileIdDeleteError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteDataFilesV2DataDeletePostRequest = {
    body: DataFileIdsRequest;
  };

  export class DeleteDataFilesV2DataDeletePostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDataFilesV2DataDeletePostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DownloadDataFileV2DataFileIdDownloadGetRequest = {
    fileId: string;
  };

  export class DownloadDataFileV2DataFileIdDownloadGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadDataFileV2DataFileIdDownloadGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetDataFileStorageUsageV2DataUsageGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDataFileStorageUsageV2DataUsageGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetDataFileV2DataFileIdGetRequest = {
    fileId: string;
  };

  export class GetDataFileV2DataFileIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDataFileV2DataFileIdGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class ListDataFileGroupsV2DataGroupsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDataFileGroupsV2DataGroupsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListDataFilesV2DataGetRequest = {
    /** @default Scope3.All */
    scope?: Scope3;
    membershipId?: MembershipId;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listDataFilesV2DataGetRequestSchema: Schema<ListDataFilesV2DataGetRequest> = s.lazySchema(() =>
    s.object<ListDataFilesV2DataGetRequest>({
      scope: s.defaulted(scope3Schema, Scope3.All),
      membershipId: s.optional(s.lazy(() => membershipIdSchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class ListDataFilesV2DataGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDataFilesV2DataGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateDataFileV2DataFileIdPatchRequest = {
    fileId: string;
    body: DataFileUpdateRequest;
  };

  export class UpdateDataFileV2DataFileIdPatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDataFileV2DataFileIdPatchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
