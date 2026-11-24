import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { updateFileInternalSchema, type UpdateFile } from "../models/update-file.js";
import { uploadedFileSchema, type UploadedFile } from "../models/uploaded-file.js";
import type { Servers } from "../servers.js";

export class Files {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete File
   *
   * @remarks
   * Delete File deletes a previously uploaded file.
   *
   * @returns No Content
   *
   * @throws {@link Files.DeleteFileError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFile(
    request: Files.DeleteFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Files.DeleteFileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/files/{file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "file-public-id", value: request.filePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Files.DeleteFileError,
      },
      options,
    );
  }

  /**
   * Get File
   *
   * @remarks
   * Get File returns information about the selected UploadedFile.
   *
   * @returns Resource
   *
   * @throws {@link Files.GetFileError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFile(
    request: Files.GetFileRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadedFile, Files.GetFileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/files/{file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "file-public-id", value: request.filePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadedFileSchema },
        errorFactory: Files.GetFileError,
      },
      options,
    );
  }

  /**
   * List Files
   *
   * @remarks
   * List Files returns a list of all UploadedFiles in the workspace.
   *
   * @returns Resource
   *
   * @throws {@link Files.ListFilesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFiles(options?: RequestOptions): ApiPromise<UploadedFile[], Files.ListFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/files"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => uploadedFileSchema)) },
        errorFactory: Files.ListFilesError,
      },
      options,
    );
  }

  /**
   * Update File
   *
   * @remarks
   * Update File updates the properties of an UploadedFile (but not its content).
   *
   * @returns Resource
   *
   * @throws {@link Files.UpdateFileError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFile(
    request: Files.UpdateFileRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadedFile, Files.UpdateFileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/files/{file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "file-public-id", value: request.filePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateFileInternalSchema },
      },
      {
        success: { kind: "json", schema: uploadedFileSchema },
        errorFactory: Files.UpdateFileError,
      },
      options,
    );
  }

  /**
   * Upload Files
   *
   * @remarks
   * Upload Files uploads one or many files and optionally associates them with a story. Use the
   * multipart/form-data content-type to upload. Each `file` key should contain a separate file.
   * Each UploadedFile's name comes from the Content-Disposition header "filename" directive for
   * that field.
   *
   * @returns Resource
   *
   * @throws {@link Files.UploadFilesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadFiles(
    request: Files.UploadFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadedFile[], Files.UploadFilesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/files"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file0", value: request.file0 },
            { kind: "text", name: "story_id", value: request.storyId, schema: s.optional(s.int()) },
            { kind: "file", name: "file1", value: request.file1 },
            { kind: "file", name: "file2", value: request.file2 },
            { kind: "file", name: "file3", value: request.file3 },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => uploadedFileSchema)) },
        errorFactory: Files.UploadFilesError,
      },
      options,
    );
  }
}

export namespace Files {
  export type DeleteFileRequest = {
    /** The File’s unique ID. */
    filePublicId: number;
  };

  export class DeleteFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetFileRequest = {
    /** The File’s unique ID. */
    filePublicId: number;
  };

  export class GetFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListFilesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFilesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateFileRequest = {
    /** The unique ID assigned to the file in Shortcut. */
    filePublicId: number;
    body: UpdateFile;
  };

  export class UpdateFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UploadFilesRequest = {
    /** A file upload. At least one is required. */
    file0: FileInput;
    /** The story ID that these files will be associated with. */
    storyId?: number;
    /** Optional additional files. */
    file1?: FileInput;
    /** Optional additional files. */
    file2?: FileInput;
    /** Optional additional files. */
    file3?: FileInput;
  };

  export class UploadFilesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadFilesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
