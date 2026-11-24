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
  dataFileUploadResponseSchema,
  type DataFileUploadResponse,
} from "../models/data-file-upload-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { formatSchema, type Format } from "../models/format.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { importCreateRequestSchema, type ImportCreateRequest } from "../models/import-create-request.js";
import {
  importEstimateResponseSchema,
  type ImportEstimateResponse,
} from "../models/import-estimate-response.js";
import {
  importFormatListResponseSchema,
  type ImportFormatListResponse,
} from "../models/import-format-list-response.js";
import { importListResponseSchema, type ImportListResponse } from "../models/import-list-response.js";
import { importResponseSchema, type ImportResponse } from "../models/import-response.js";
import {
  importUploadRequestInternalSchema,
  type ImportUploadRequest,
} from "../models/import-upload-request.js";
import { format1Schema, type Format1 } from "../models/unions/format1.js";
import { tasksetIdSchema, type TasksetId } from "../models/unions/taskset-id.js";
import type { Servers } from "../servers.js";

export class Imports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Cancel Import
   *
   * @remarks
   * Request cancellation of a live import; one that has ended is returned unchanged.
   *
   * @returns Successful Response
   *
   * @throws {@link Imports.CancelImportV2ImportsImportIdCancelPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  cancelImportV2ImportsImportIdCancelPost(
    request: Imports.CancelImportV2ImportsImportIdCancelPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ImportResponse, Imports.CancelImportV2ImportsImportIdCancelPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/imports/{import_id}/cancel"),
        auth: noneAuth,
        pathParams: [{ name: "import_id", value: request.importId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: importResponseSchema },
        errorFactory: Imports.CancelImportV2ImportsImportIdCancelPostError,
      },
      options,
    );
  }

  /**
   * Create Import Upload
   *
   * @remarks
   * Reserve a data file for a bundle and return a presigned PUT to upload its bytes.
   *
   * @returns Successful Response
   *
   * @throws {@link Imports.CreateImportUploadV2ImportsUploadsPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createImportUploadV2ImportsUploadsPost(
    request: Imports.CreateImportUploadV2ImportsUploadsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<DataFileUploadResponse, Imports.CreateImportUploadV2ImportsUploadsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/imports/uploads"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: importUploadRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: dataFileUploadResponseSchema },
        errorFactory: Imports.CreateImportUploadV2ImportsUploadsPostError,
      },
      options,
    );
  }

  /**
   * Estimate Import
   *
   * @remarks
   * Estimate an import of a bundle; fails when the bundle cannot be imported.
   *
   * @returns Successful Response
   *
   * @throws {@link Imports.EstimateImportV2ImportsEstimateGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  estimateImportV2ImportsEstimateGet(
    request: Imports.EstimateImportV2ImportsEstimateGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ImportEstimateResponse, Imports.EstimateImportV2ImportsEstimateGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/imports/estimate"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "format", value: request.format, schema: formatSchema },
          { name: "file_id", value: request.fileId, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: importEstimateResponseSchema },
        errorFactory: Imports.EstimateImportV2ImportsEstimateGetError,
      },
      options,
    );
  }

  /**
   * Get Import Report
   *
   * @remarks
   * Return the report a completed or stopped import published, in its format's schema.
   *
   * @returns Successful Response
   *
   * @throws {@link Imports.GetImportReportV2ImportsImportIdReportGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getImportReportV2ImportsImportIdReportGet(
    request: Imports.GetImportReportV2ImportsImportIdReportGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Imports.GetImportReportV2ImportsImportIdReportGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/imports/{import_id}/report"),
        auth: noneAuth,
        pathParams: [{ name: "import_id", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Imports.GetImportReportV2ImportsImportIdReportGetError,
      },
      options,
    );
  }

  /**
   * Get Import
   *
   * @remarks
   * Fetch one import.
   *
   * @returns Successful Response
   *
   * @throws {@link Imports.GetImportV2ImportsImportIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getImportV2ImportsImportIdGet(
    request: Imports.GetImportV2ImportsImportIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ImportResponse, Imports.GetImportV2ImportsImportIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/imports/{import_id}"),
        auth: noneAuth,
        pathParams: [{ name: "import_id", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: importResponseSchema },
        errorFactory: Imports.GetImportV2ImportsImportIdGetError,
      },
      options,
    );
  }

  /**
   * List Import Formats
   *
   * @remarks
   * List the bundle formats available to import.
   *
   * @returns Successful Response
   *
   * @throws {@link Imports.ListImportFormatsV2ImportsFormatsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listImportFormatsV2ImportsFormatsGet(
    options?: RequestOptions,
  ): ApiPromise<ImportFormatListResponse, Imports.ListImportFormatsV2ImportsFormatsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/imports/formats"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: importFormatListResponseSchema },
        errorFactory: Imports.ListImportFormatsV2ImportsFormatsGetError,
      },
      options,
    );
  }

  /**
   * List Imports
   *
   * @remarks
   * List the imports the caller can read, newest first.
   *
   * Team admins see every import on the team; other members see their own.
   *
   * @returns Successful Response
   *
   * @throws {@link Imports.ListImportsV2ImportsGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listImportsV2ImportsGet(
    request: Imports.ListImportsV2ImportsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ImportListResponse, Imports.ListImportsV2ImportsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/imports"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          { name: "taskset_id", value: request.tasksetId, schema: s.optional(s.lazy(() => tasksetIdSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: importListResponseSchema },
        errorFactory: Imports.ListImportsV2ImportsGetError,
      },
      options,
    );
  }

  /**
   * Start Import
   *
   * @remarks
   * Import an uploaded bundle into a taskset.
   *
   * @returns Successful Response
   *
   * @throws {@link Imports.StartImportV2ImportsPostError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  startImportV2ImportsPost(
    request: Imports.StartImportV2ImportsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ImportResponse, Imports.StartImportV2ImportsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/imports"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: importCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: importResponseSchema },
        errorFactory: Imports.StartImportV2ImportsPostError,
      },
      options,
    );
  }
}

export namespace Imports {
  export type CancelImportV2ImportsImportIdCancelPostRequest = {
    importId: string;
  };

  export class CancelImportV2ImportsImportIdCancelPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CancelImportV2ImportsImportIdCancelPostError> = [
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

  export type CreateImportUploadV2ImportsUploadsPostRequest = {
    body: ImportUploadRequest;
  };

  export class CreateImportUploadV2ImportsUploadsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateImportUploadV2ImportsUploadsPostError> = [
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

  export type EstimateImportV2ImportsEstimateGetRequest = {
    format: Format;
    fileId: string;
  };

  export class EstimateImportV2ImportsEstimateGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<EstimateImportV2ImportsEstimateGetError> = [
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

  export type GetImportReportV2ImportsImportIdReportGetRequest = {
    importId: string;
  };

  export class GetImportReportV2ImportsImportIdReportGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetImportReportV2ImportsImportIdReportGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 413, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetImportV2ImportsImportIdGetRequest = {
    importId: string;
  };

  export class GetImportV2ImportsImportIdGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetImportV2ImportsImportIdGetError> = [
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

  export class ListImportFormatsV2ImportsFormatsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListImportFormatsV2ImportsFormatsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListImportsV2ImportsGetRequest = {
    format?: Format1;
    tasksetId?: TasksetId;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listImportsV2ImportsGetRequestSchema: Schema<ListImportsV2ImportsGetRequest> = s.lazySchema(
    () =>
      s.object<ListImportsV2ImportsGetRequest>({
        format: s.optional(s.lazy(() => format1Schema)),
        tasksetId: s.optional(s.lazy(() => tasksetIdSchema)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
        offset: s.defaulted(s.int().check(s.gte(0)), 0),
      }),
  );

  export class ListImportsV2ImportsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListImportsV2ImportsGetError> = [
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

  export type StartImportV2ImportsPostRequest = {
    body: ImportCreateRequest;
  };

  export class StartImportV2ImportsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<StartImportV2ImportsPostError> = [
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
