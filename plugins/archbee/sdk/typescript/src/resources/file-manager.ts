import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  fileManagerFileRequestSchema,
  type FileManagerFileRequest,
} from "../models/file-manager-file-request.js";
import {
  fileManagerFile400Error1Schema,
  type FileManagerFile400Error1,
} from "../models/file-manager-file400-error1.js";
import {
  fileManagerFiles400Error1Schema,
  type FileManagerFiles400Error1,
} from "../models/file-manager-files400-error1.js";
import {
  fileManagerMoveRequestSchema,
  type FileManagerMoveRequest,
} from "../models/file-manager-move-request.js";
import {
  fileManagerMove400Error1Schema,
  type FileManagerMove400Error1,
} from "../models/file-manager-move400-error1.js";
import {
  fileManagerReplace400Error1Schema,
  type FileManagerReplace400Error1,
} from "../models/file-manager-replace400-error1.js";
import { isPublicSchema, type IsPublic } from "../models/is-public.js";
import { itemTypeSchema, type ItemType } from "../models/item-type.js";
import { uploadFileResponseSchema, type UploadFileResponse } from "../models/upload-file-response.js";
import { uploadFile400Error1Schema, type UploadFile400Error1 } from "../models/upload-file400-error1.js";
import type { Servers } from "../servers.js";

/**
 * Upload, list, move, replace and delete File Manager files
 */
export class FileManager {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a File Manager file
   *
   * @remarks
   * Permanently delete a File Manager file or folder (folders delete their contents recursively).
   *
   * @returns Delete OK status
   *
   * @throws {@link FileManager.DeleteAFileManagerFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAFileManagerFile(
    request: FileManager.DeleteAFileManagerFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FileManager.DeleteAFileManagerFileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/file-manager/file"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fileManagerFileRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FileManager.DeleteAFileManagerFileError,
      },
      options,
    );
  }

  /**
   * List File Manager files
   *
   * @remarks
   * List files and folders in the File Manager. Omitting parentId lists every entry across all
   * folders (use searchQuery/pagination to find one); pass a folder id to list that folder's direct
   * children. Filter with itemType (directory, image, or file).
   *
   * @returns List OK status
   *
   * @throws {@link FileManager.ListFileManagerFilesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFileManagerFiles(
    request: FileManager.ListFileManagerFilesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, FileManager.ListFileManagerFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/file-manager/files"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "parentId", value: request.parentId, schema: s.optional(s.string()) },
          { name: "itemType", value: request.itemType, schema: s.optional(s.lazy(() => itemTypeSchema)) },
          { name: "searchQuery", value: request.searchQuery, schema: s.optional(s.string()) },
          { name: "pageIndex", value: request.pageIndex, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FileManager.ListFileManagerFilesError,
      },
      options,
    );
  }

  /**
   * Move a File Manager file
   *
   * @remarks
   * Move a File Manager file or folder into another folder. Pass a null newParentId to move it to
   * the root.
   *
   * @returns Move OK status
   *
   * @throws {@link FileManager.MoveAFileManagerFileError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moveAFileManagerFile(
    request: FileManager.MoveAFileManagerFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FileManager.MoveAFileManagerFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/file-manager/move"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fileManagerMoveRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: FileManager.MoveAFileManagerFileError,
      },
      options,
    );
  }

  /**
   * Overwrite a File Manager file
   *
   * @remarks
   * Replace the contents of an existing File Manager file in place. The file keeps its id and
   * public URL, so existing document embeds update automatically.
   *
   * @returns Overwrite OK status
   *
   * @throws {@link FileManager.OverwriteAFileManagerFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overwriteAFileManagerFile(
    request: FileManager.OverwriteAFileManagerFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FileManager.OverwriteAFileManagerFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/file-manager/replace"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "fileId", value: request.fileId, schema: s.string() },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: FileManager.OverwriteAFileManagerFileError,
      },
      options,
    );
  }

  /**
   * Upload single file
   *
   * @remarks
   * Upload a single file to the File Manager
   *
   * @returns Upload OK status
   *
   * @throws {@link FileManager.UploadSingleFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadSingleFile(
    request: FileManager.UploadSingleFileRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadFileResponse, FileManager.UploadSingleFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/upload/file"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "isPublic",
              value: request.isPublic,
              schema: s.optional(s.lazy(() => isPublicSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: uploadFileResponseSchema },
        errorFactory: FileManager.UploadSingleFileError,
      },
      options,
    );
  }
}

export namespace FileManager {
  export type DeleteAFileManagerFileRequest = {
    body: FileManagerFileRequest;
  };

  export class DeleteAFileManagerFileError extends ApiError {
    declare readonly payload: Declared<"fileManagerFile400Error1", FileManagerFile400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAFileManagerFileError> = [
      {
        on: 400,
        kind: "fileManagerFile400Error1",
        decode: { kind: "json", schema: fileManagerFile400Error1Schema },
      },
    ];
  }

  export type ListFileManagerFilesRequest = {
    /**
     * OPTIONAL. Folder id to list the direct children of. Omit to list all entries across every
     * folder.
     */
    parentId?: string;
    /** OPTIONAL. Filter by entry type. */
    itemType?: ItemType;
    /** OPTIONAL. Case-insensitive filename filter. */
    searchQuery?: string;
    /** OPTIONAL. Zero-based page index (default 0). */
    pageIndex?: number;
    /** OPTIONAL. Page size (1-200). */
    pageSize?: number;
  };

  export class ListFileManagerFilesError extends ApiError {
    declare readonly payload: Declared<"fileManagerFiles400Error1", FileManagerFiles400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<ListFileManagerFilesError> = [
      {
        on: 400,
        kind: "fileManagerFiles400Error1",
        decode: { kind: "json", schema: fileManagerFiles400Error1Schema },
      },
    ];
  }

  export type MoveAFileManagerFileRequest = {
    body: FileManagerMoveRequest;
  };

  export class MoveAFileManagerFileError extends ApiError {
    declare readonly payload: Declared<"fileManagerMove400Error1", FileManagerMove400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<MoveAFileManagerFileError> = [
      {
        on: 400,
        kind: "fileManagerMove400Error1",
        decode: { kind: "json", schema: fileManagerMove400Error1Schema },
      },
    ];
  }

  export type OverwriteAFileManagerFileRequest = {
    /** Id of the existing file to overwrite. */
    fileId: string;
    /** New file contents. */
    file: FileInput;
  };

  export class OverwriteAFileManagerFileError extends ApiError {
    declare readonly payload:
      | Declared<"fileManagerReplace400Error1", FileManagerReplace400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<OverwriteAFileManagerFileError> = [
      {
        on: 400,
        kind: "fileManagerReplace400Error1",
        decode: { kind: "json", schema: fileManagerReplace400Error1Schema },
      },
    ];
  }

  export type UploadSingleFileRequest = {
    /** Open api file, .json or .yml or .yaml or .zip */
    file: FileInput;
    /** OPTIONAL. Whether the uploaded file is public or not regarding AWS link. */
    isPublic?: IsPublic;
  };

  export class UploadSingleFileError extends ApiError {
    declare readonly payload: Declared<"uploadFile400Error1", UploadFile400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<UploadSingleFileError> = [
      { on: 400, kind: "uploadFile400Error1", decode: { kind: "json", schema: uploadFile400Error1Schema } },
    ];
  }
}
