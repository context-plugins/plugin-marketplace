import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { fileDownloadResponseSchema, type FileDownloadResponse } from "../models/file-download-response.js";
import { fileUploadResponseSchema, type FileUploadResponse } from "../models/file-upload-response.js";
import {
  forbiddenErrorResponseSchema,
  type ForbiddenErrorResponse,
} from "../models/forbidden-error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { s3VmUploadRequestSchema, type S3VmUploadRequest } from "../models/s3-vm-upload-request.js";
import type { Servers } from "../servers.js";

export class FilesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get File
   *
   * @remarks
   * Get a secure download link for a file on the instance
   *
   * Generates a presigned S3 URL for the client to download the file directly
   *
   * Requires API key authentication.
   *
   * @returns Presigned URL to download the file
   *
   * @throws {@link FilesApi.DownloadError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  download(
    request: FilesApi.DownloadRequest,
    options?: RequestOptions,
  ): ApiPromise<FileDownloadResponse, FilesApi.DownloadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/windows/files/download/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.string()) },
      },
      {
        success: { kind: "json", schema: fileDownloadResponseSchema },
        errorFactory: FilesApi.DownloadError,
      },
      options,
    );
  }

  /**
   * Upload To Vm
   *
   * @remarks
   * Upload a file from S3 to the VM
   *
   * Takes an S3 URL (often from FileUploader component) and transfers it to the VM. Updates the
   * files.uploads array in the vm_instances table to track the file.
   *
   * Requires API key authentication.
   *
   * @returns File uploaded successfully to VM
   *
   * @throws {@link FilesApi.UploadError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upload(
    request: FilesApi.UploadRequest,
    options?: RequestOptions,
  ): ApiPromise<FileUploadResponse, FilesApi.UploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/windows/files/upload/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s3VmUploadRequestSchema },
      },
      {
        success: { kind: "json", schema: fileUploadResponseSchema },
        errorFactory: FilesApi.UploadError,
      },
      options,
    );
  }
}

export namespace FilesApi {
  export type DownloadRequest = {
    instanceId: string;
    body: Record<string, string>;
  };

  export class DownloadError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UploadRequest = {
    instanceId: string;
    body: S3VmUploadRequest;
  };

  export class UploadError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
