import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { countedPackInfoSchema, type CountedPackInfo } from "../models/counted-pack-info.js";
import {
  countedPackInstallInfoSchema,
  type CountedPackInstallInfo,
} from "../models/counted-pack-install-info.js";
import {
  countedPackUninstallInfoSchema,
  type CountedPackUninstallInfo,
} from "../models/counted-pack-uninstall-info.js";
import { errorSchema, type Error } from "../models/error.js";
import { packUpgradeRequestSchema, type PackUpgradeRequest } from "../models/pack-upgrade-request.js";
import { paginatedPackInfoSchema, type PaginatedPackInfo } from "../models/paginated-pack-info.js";
import { packRequestBody2Schema, type PackRequestBody2 } from "../models/unions/pack-request-body2.js";
import { uploadPackResponseSchema, type UploadPackResponse } from "../models/upload-pack-response.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Packs
 */
export class Packs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Install a Pack
   *
   * @remarks
   * Install a Pack.<br/><br/>To install an uploaded Pack, provide the <code>source</code> value
   * from the <code>PUT /packs</code> response as the <code>source</code> parameter in the request
   * body.<br/><br/>To install a Pack by importing from a URL, provide the direct URL location of
   * the <code>.crbl</code> file for the Pack as the <code>source</code> parameter in the request
   * body.<br/><br/>To install a Pack by importing from a Git repository, provide
   * <code>git+&lt;repo-url&gt;</code> as the <code>source</code> parameter in the request
   * body.<br/><br/>If you do not include the <code>source</code> parameter in the request body, an
   * empty Pack is created.
   *
   * @returns The installed Pack object in a single-item list.
   *
   * @throws {@link Packs.CreatePacksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPacks(
    request: Packs.CreatePacksRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPackInstallInfo, Packs.CreatePacksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/packs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: packRequestBody2Schema },
      },
      {
        success: { kind: "json", schema: countedPackInstallInfoSchema },
        errorFactory: Packs.CreatePacksError,
      },
      options,
    );
  }

  /**
   * Uninstall a Pack
   *
   * @remarks
   * Uninstall the specified Pack.
   *
   * @returns The uninstalled Pack object in a single-item list.
   *
   * @throws {@link Packs.DeletePacksByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deletePacksById(
    request: Packs.DeletePacksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPackUninstallInfo, Packs.DeletePacksByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/packs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedPackUninstallInfoSchema },
        errorFactory: Packs.DeletePacksByIdError,
      },
      options,
    );
  }

  /**
   * List all Packs
   *
   * @remarks
   * Get a list of all Packs.
   *
   * @returns List of Pack objects.
   *
   * @throws {@link Packs.GetPacksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPacks(
    request: Packs.GetPacksRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedPackInfo, Packs.GetPacksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/packs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "with", value: request.with, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedPackInfoSchema },
        errorFactory: Packs.GetPacksError,
      },
      options,
    );
  }

  /**
   * Get a Pack
   *
   * @remarks
   * Get the specified Pack.
   *
   * @returns The requested Pack object in a single-item list.
   *
   * @throws {@link Packs.GetPacksByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPacksById(
    request: Packs.GetPacksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPackInfo, Packs.GetPacksByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/packs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedPackInfoSchema },
        errorFactory: Packs.GetPacksByIdError,
      },
      options,
    );
  }

  /**
   * Upload a Pack file
   *
   * @remarks
   * Upload a Pack file. Returns the <code>source</code> ID needed to install the Pack with
   * <code>POST /packs</code>, which you must call separately.
   *
   * @returns Pack file uploaded successfully.
   *
   * @throws {@link Packs.UpdatePacksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updatePacks(
    request: Packs.UpdatePacksRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadPackResponse, Packs.UpdatePacksError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/packs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [{ name: "filename", value: request.filename, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "binary", value: request.body, contentType: "application/octet-stream" },
      },
      {
        success: { kind: "json", schema: uploadPackResponseSchema },
        errorFactory: Packs.UpdatePacksError,
      },
      options,
    );
  }

  /**
   * Upgrade a Pack
   *
   * @remarks
   * Upgrade the specified Pack.<br/><br/>If the Pack includes any user-modified versions of default
   * Cribl Knowledge resources such as lookups, copy the modified files locally for safekeeping
   * before upgrading the Pack. Copy the modified files back to the upgraded Pack after you install
   * it with <code>POST /packs</code> to overwrite the default versions in the Pack.<br/><br/>After
   * you upgrade the Pack, update any Routes, Pipelines, Sources, and Destinations that use the
   * previous Pack version so that they reference the upgraded Pack.
   *
   * @returns The upgraded Pack object in a single-item list.
   *
   * @throws {@link Packs.UpdatePacksByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updatePacksById(
    request: Packs.UpdatePacksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPackInfo, Packs.UpdatePacksByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/packs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: packUpgradeRequestSchema },
      },
      {
        success: { kind: "json", schema: countedPackInfoSchema },
        errorFactory: Packs.UpdatePacksByIdError,
      },
      options,
    );
  }
}

export namespace Packs {
  export type CreatePacksRequest = {
    /** packRequestBody object. */
    body: PackRequestBody2;
  };

  export class CreatePacksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePacksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeletePacksByIdRequest = {
    /**
     * The <code>id</code> of the Pack to uninstall. Use the <code>id</code> field from the list
     * response.
     */
    id: string;
  };

  export class DeletePacksByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePacksByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetPacksRequest = {
    /**
     * Comma-separated list of additional properties to include in the response. When set, the
     * response includes a count of each specified property in each Pack. Supported values:
     * <code>inputs</code>, <code>outputs</code>, <code>collectors</code>.
     */
    with?: string;
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetPacksError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPacksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPacksByIdRequest = {
    /**
     * The <code>id</code> of the Pack to get. Use the <code>id</code> field from the list response.
     */
    id: string;
  };

  export class GetPacksByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPacksByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePacksRequest = {
    /** Filename of the Pack file to upload. */
    filename: string;
    /** Binary contents of the <code>.crbl</code> Pack file to stage for installation */
    body: FileInput;
  };

  export class UpdatePacksError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePacksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePacksByIdRequest = {
    /**
     * The <code>id</code> of the Pack to upgrade. Use the <code>id</code> field from the list
     * response.
     */
    id: string;
    /** PackUpgradeRequest object. */
    body: PackUpgradeRequest;
  };

  export class UpdatePacksByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePacksByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
