import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  traceStorageObjectListResponseSchema,
  type TraceStorageObjectListResponse,
} from "../models/trace-storage-object-list-response.js";
import {
  traceWorkspaceChangesResponseSchema,
  type TraceWorkspaceChangesResponse,
} from "../models/trace-workspace-changes-response.js";
import {
  traceWorkspaceFilesResponseSchema,
  type TraceWorkspaceFilesResponse,
} from "../models/trace-workspace-files-response.js";
import type { Servers } from "../servers.js";

export class Storage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List Trace Artifacts
   *
   * @remarks
   * List trace-owned screenshots, recordings, and captured files.
   *
   * @returns Successful Response
   *
   * @throws {@link Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listTraceArtifactsV2StorageTracesTraceIdArtifactsGet(
    request: Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TraceStorageObjectListResponse,
    Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/storage/traces/{trace_id}/artifacts"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceStorageObjectListResponseSchema },
        errorFactory: Storage.ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError,
      },
      options,
    );
  }

  /**
   * Trace Workspace Changes
   *
   * @remarks
   * Return filetracking snapshots, patches, and captured files for a trace.
   *
   * @returns Successful Response
   *
   * @throws {@link Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  traceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(
    request: Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TraceWorkspaceChangesResponse,
    Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/storage/traces/{trace_id}/workspace/changes"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceWorkspaceChangesResponseSchema },
        errorFactory: Storage.TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError,
      },
      options,
    );
  }

  /**
   * Trace Workspace Files
   *
   * @remarks
   * Return final captured file contents for a trace workspace.
   *
   * @returns Successful Response
   *
   * @throws {@link Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  traceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(
    request: Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TraceWorkspaceFilesResponse,
    Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/storage/traces/{trace_id}/workspace/files"),
        auth: noneAuth,
        pathParams: [{ name: "trace_id", value: request.traceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceWorkspaceFilesResponseSchema },
        errorFactory: Storage.TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError,
      },
      options,
    );
  }
}

export namespace Storage {
  export type ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest = {
    traceId: string;
  };

  export class ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError> = [
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

  export type TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest = {
    traceId: string;
  };

  export class TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError> =
      [
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

  export type TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest = {
    traceId: string;
  };

  export class TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError> = [
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
