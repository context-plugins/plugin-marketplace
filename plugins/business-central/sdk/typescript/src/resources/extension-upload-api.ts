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
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  extensionUploadCreateSchema,
  type ExtensionUploadCreate,
} from "../models/extension-upload-create.js";
import { extensionUploadSchema, type ExtensionUpload } from "../models/extension-upload.js";
import type { Servers } from "../servers.js";

/**
 * Upload and install per-tenant extensions
 */
export class ExtensionUploadApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Extension Upload Record
   *
   * @remarks
   * Creates an extension upload record for uploading a per-tenant extension.
   *
   * @returns Extension upload record created
   *
   * @throws {@link ExtensionUploadApi.CreateExtensionUploadError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createExtensionUpload(
    request: ExtensionUploadApi.CreateExtensionUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<ExtensionUpload, ExtensionUploadApi.CreateExtensionUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensionUpload",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: extensionUploadCreateSchema },
      },
      {
        success: { kind: "json", schema: extensionUploadSchema },
        errorFactory: ExtensionUploadApi.CreateExtensionUploadError,
      },
      options,
    );
  }

  /**
   * Install Uploaded Extension
   *
   * @remarks
   * Triggers the installation of a previously uploaded per-tenant extension.
   *
   * @returns Extension installation initiated
   *
   * @throws {@link ExtensionUploadApi.InstallUploadedExtensionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  installUploadedExtension(
    request: ExtensionUploadApi.InstallUploadedExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExtensionUploadApi.InstallUploadedExtensionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensionUpload({extensionUpload_id})/Microsoft.NAV.upload",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "extensionUpload_id", value: request.extensionUploadId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExtensionUploadApi.InstallUploadedExtensionError,
      },
      options,
    );
  }

  /**
   * Upload Extension File
   *
   * @remarks
   * Uploads the extension file content to the extension upload record.
   *
   * @returns Extension file uploaded
   *
   * @throws {@link ExtensionUploadApi.UploadExtensionFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  uploadExtensionFile(
    request: ExtensionUploadApi.UploadExtensionFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExtensionUploadApi.UploadExtensionFileError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensionUpload({extensionUpload_id})/extensionContent",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "extensionUpload_id", value: request.extensionUploadId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "binary", value: request.body, contentType: "application/octet-stream" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExtensionUploadApi.UploadExtensionFileError,
      },
      options,
    );
  }
}

export namespace ExtensionUploadApi {
  export type CreateExtensionUploadRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: ExtensionUploadCreate;
  };

  export class CreateExtensionUploadError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<CreateExtensionUploadError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type InstallUploadedExtensionRequest = {
    /** The unique identifier of the company */
    companyId: string;
    extensionUploadId: string;
  };

  export class InstallUploadedExtensionError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<InstallUploadedExtensionError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UploadExtensionFileRequest = {
    /** The unique identifier of the company */
    companyId: string;
    extensionUploadId: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: FileInput;
  };

  export class UploadExtensionFileError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UploadExtensionFileError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
