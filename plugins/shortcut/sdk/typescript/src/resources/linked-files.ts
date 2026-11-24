import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createLinkedFileInternalSchema, type CreateLinkedFile } from "../models/create-linked-file.js";
import { linkedFileSchema, type LinkedFile } from "../models/linked-file.js";
import { updateLinkedFileInternalSchema, type UpdateLinkedFile } from "../models/update-linked-file.js";
import type { Servers } from "../servers.js";

export class LinkedFiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Linked File
   *
   * @remarks
   * Create Linked File allows you to create a new Linked File in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link LinkedFiles.CreateLinkedFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLinkedFile(
    request: LinkedFiles.CreateLinkedFileRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedFile, LinkedFiles.CreateLinkedFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/linked-files"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLinkedFileInternalSchema },
      },
      {
        success: { kind: "json", schema: linkedFileSchema },
        errorFactory: LinkedFiles.CreateLinkedFileError,
      },
      options,
    );
  }

  /**
   * Delete Linked File
   *
   * @remarks
   * Delete Linked File can be used to delete any previously attached Linked-File.
   *
   * @returns No Content
   *
   * @throws {@link LinkedFiles.DeleteLinkedFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLinkedFile(
    request: LinkedFiles.DeleteLinkedFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LinkedFiles.DeleteLinkedFileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/linked-files/{linked-file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "linked-file-public-id", value: request.linkedFilePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LinkedFiles.DeleteLinkedFileError,
      },
      options,
    );
  }

  /**
   * Get Linked File
   *
   * @remarks
   * Get File returns information about the selected Linked File.
   *
   * @returns Resource
   *
   * @throws {@link LinkedFiles.GetLinkedFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLinkedFile(
    request: LinkedFiles.GetLinkedFileRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedFile, LinkedFiles.GetLinkedFileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/linked-files/{linked-file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "linked-file-public-id", value: request.linkedFilePublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linkedFileSchema },
        errorFactory: LinkedFiles.GetLinkedFileError,
      },
      options,
    );
  }

  /**
   * List Linked Files
   *
   * @remarks
   * List Linked Files returns a list of all Linked-Files and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link LinkedFiles.ListLinkedFilesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLinkedFiles(options?: RequestOptions): ApiPromise<LinkedFile[], LinkedFiles.ListLinkedFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/linked-files"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => linkedFileSchema)) },
        errorFactory: LinkedFiles.ListLinkedFilesError,
      },
      options,
    );
  }

  /**
   * Update Linked File
   *
   * @remarks
   * Updated Linked File allows you to update properties of a previously attached Linked-File.
   *
   * @returns Resource
   *
   * @throws {@link LinkedFiles.UpdateLinkedFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLinkedFile(
    request: LinkedFiles.UpdateLinkedFileRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedFile, LinkedFiles.UpdateLinkedFileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/linked-files/{linked-file-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "linked-file-public-id", value: request.linkedFilePublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateLinkedFileInternalSchema },
      },
      {
        success: { kind: "json", schema: linkedFileSchema },
        errorFactory: LinkedFiles.UpdateLinkedFileError,
      },
      options,
    );
  }
}

export namespace LinkedFiles {
  export type CreateLinkedFileRequest = {
    body: CreateLinkedFile;
  };

  export class CreateLinkedFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLinkedFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteLinkedFileRequest = {
    /** The unique identifier of the linked file. */
    linkedFilePublicId: number;
  };

  export class DeleteLinkedFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLinkedFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetLinkedFileRequest = {
    /** The unique identifier of the linked file. */
    linkedFilePublicId: number;
  };

  export class GetLinkedFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLinkedFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListLinkedFilesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLinkedFilesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateLinkedFileRequest = {
    /** The unique identifier of the linked file. */
    linkedFilePublicId: number;
    body: UpdateLinkedFile;
  };

  export class UpdateLinkedFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLinkedFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
