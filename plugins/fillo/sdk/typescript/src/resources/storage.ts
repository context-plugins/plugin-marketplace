import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ManageFormsStorageFolderRequestInternalSchema,
  type ApiV1ManageFormsStorageFolderRequest,
} from "../models/api-v1-manage-forms-storage-folder-request.js";
import {
  apiV1ManageFormsStorageFolderResponseSchema,
  type ApiV1ManageFormsStorageFolderResponse,
} from "../models/api-v1-manage-forms-storage-folder-response.js";
import {
  apiV1ManageFormsStorageRequestSchema,
  type ApiV1ManageFormsStorageRequest,
} from "../models/api-v1-manage-forms-storage-request.js";
import { driveFolderListingSchema, type DriveFolderListing } from "../models/drive-folder-listing.js";
import { errorSchema, type Error } from "../models/error.js";
import { formStorageSchema, type FormStorage } from "../models/form-storage.js";
import type { Servers } from "../servers.js";

export class Storage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a form's upload destination
   *
   * @remarks
   * Where this form's uploads land: the destination pinned on the form, the stored record, and what
   * an upload would `resolve` to right now (including Fillo's short-lived transit staging). Scope:
   * storage:manage.
   *
   * @returns The form's storage destination.
   *
   * @throws {@link Storage.GetFormStorageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFormStorage(
    request: Storage.GetFormStorageRequest,
    options?: RequestOptions,
  ): ApiPromise<FormStorage, Storage.GetFormStorageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/storage"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: formStorageSchema },
        errorFactory: Storage.GetFormStorageError,
      },
      options,
    );
  }

  /**
   * List Google Drive upload folders
   *
   * @remarks
   * The Drive folder this form's uploads land in, plus the connected account's writable My Drive
   * folders so an agent can choose without guessing an id. Shared drives are not offered. Scope:
   * storage:manage.
   *
   * @returns The current folder and the account's writable folders.
   *
   * @throws {@link Storage.ListFormStorageFoldersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFormStorageFolders(
    request: Storage.ListFormStorageFoldersRequest,
    options?: RequestOptions,
  ): ApiPromise<DriveFolderListing, Storage.ListFormStorageFoldersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/storage/folder"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [{ name: "q", value: request.q, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: driveFolderListingSchema },
        errorFactory: Storage.ListFormStorageFoldersError,
      },
      options,
    );
  }

  /**
   * Reset the Google Drive upload folder
   *
   * @remarks
   * Return the form to its automatic per-form Drive folder. Files already uploaded stay where they
   * are. Scope: storage:manage.
   *
   * @returns Automatic placement restored; both folder keys are null.
   *
   * @throws {@link Storage.ResetFormStorageFolderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resetFormStorageFolder(
    request: Storage.ResetFormStorageFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsStorageFolderResponse, Storage.ResetFormStorageFolderError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/storage/folder"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsStorageFolderResponseSchema },
        errorFactory: Storage.ResetFormStorageFolderError,
      },
      options,
    );
  }

  /**
   * Set a form's upload destination
   *
   * @remarks
   * Pin where this form's uploads land. `transit` and `none` clear the per-form choice so the form
   * follows the workspace default. A destination whose provider is not connected is a 409, as is
   * clearing storage on a live form that collects files. Scope: storage:manage.
   *
   * @returns The form's storage destination after the change.
   *
   * @throws {@link Storage.SetFormStorageError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setFormStorage(
    request: Storage.SetFormStorageRequest,
    options?: RequestOptions,
  ): ApiPromise<FormStorage, Storage.SetFormStorageError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/storage"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ManageFormsStorageRequestSchema },
      },
      {
        success: { kind: "json", schema: formStorageSchema },
        errorFactory: Storage.SetFormStorageError,
      },
      options,
    );
  }

  /**
   * Select a Google Drive upload folder
   *
   * @remarks
   * Send this form's new uploads to a folder on the connected Google account. Existing files stay
   * where they are. A folder the connected account cannot write to, or one owned by a different
   * account, is a 409. Scope: storage:manage.
   *
   * @returns The selected folder.
   *
   * @throws {@link Storage.SetFormStorageFolderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setFormStorageFolder(
    request: Storage.SetFormStorageFolderRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageFormsStorageFolderResponse, Storage.SetFormStorageFolderError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/storage/folder"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: apiV1ManageFormsStorageFolderRequestInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: apiV1ManageFormsStorageFolderResponseSchema },
        errorFactory: Storage.SetFormStorageFolderError,
      },
      options,
    );
  }
}

export namespace Storage {
  export type GetFormStorageRequest = {
    /** A form id or slug. */
    form: string;
  };

  export class GetFormStorageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFormStorageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListFormStorageFoldersRequest = {
    /** A form id or slug. */
    form: string;
    /** Filter the folder list by name. */
    q?: string;
  };

  export class ListFormStorageFoldersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFormStorageFoldersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ResetFormStorageFolderRequest = {
    /** A form id or slug. */
    form: string;
  };

  export class ResetFormStorageFolderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResetFormStorageFolderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetFormStorageRequest = {
    /** A form id or slug. */
    form: string;
    body: ApiV1ManageFormsStorageRequest;
  };

  export class SetFormStorageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetFormStorageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetFormStorageFolderRequest = {
    /** A form id or slug. */
    form: string;
    body: ApiV1ManageFormsStorageFolderRequest;
  };

  export class SetFormStorageFolderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetFormStorageFolderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
