import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buildListResponseInternalSchema, type BuildListResponse } from "../models/build-list-response.js";
import { buildLookupRequestInternalSchema, type BuildLookupRequest } from "../models/build-lookup-request.js";
import { buildLookupResponseSchema, type BuildLookupResponse } from "../models/build-lookup-response.js";
import {
  buildRegisterRequestInternalSchema,
  type BuildRegisterRequest,
} from "../models/build-register-request.js";
import {
  buildRegisterResponseInternalSchema,
  type BuildRegisterResponse,
} from "../models/build-register-response.js";
import { buildResponseInternalSchema, type BuildResponse } from "../models/build-response.js";
import {
  buildSourceDownloadResponseSchema,
  type BuildSourceDownloadResponse,
} from "../models/build-source-download-response.js";
import {
  buildSourceListResponseSchema,
  type BuildSourceListResponse,
} from "../models/build-source-list-response.js";
import {
  buildSourcePreviewResponseSchema,
  type BuildSourcePreviewResponse,
} from "../models/build-source-preview-response.js";
import {
  buildTriggerRequestInternalSchema,
  type BuildTriggerRequest,
} from "../models/build-trigger-request.js";
import {
  buildUploadUrlResponseSchema,
  type BuildUploadUrlResponse,
} from "../models/build-upload-url-response.js";
import {
  buildWorkspaceListResponseSchema,
  type BuildWorkspaceListResponse,
} from "../models/build-workspace-list-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import type { Servers } from "../servers.js";

export class Builds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Build Status
   *
   * @remarks
   * Get a build's current status and details.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.BuildStatusV2BuildsBuildIdStatusGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  buildStatusV2BuildsBuildIdStatusGet(
    request: Builds.BuildStatusV2BuildsBuildIdStatusGetRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildResponse, Builds.BuildStatusV2BuildsBuildIdStatusGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/status"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildResponseInternalSchema },
        errorFactory: Builds.BuildStatusV2BuildsBuildIdStatusGetError,
      },
      options,
    );
  }

  /**
   * Cancel Build
   *
   * @remarks
   * Cancel an in-progress build.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.CancelBuildV2BuildsBuildIdCancelPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  cancelBuildV2BuildsBuildIdCancelPost(
    request: Builds.CancelBuildV2BuildsBuildIdCancelPostRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildResponse, Builds.CancelBuildV2BuildsBuildIdCancelPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/cancel"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildResponseInternalSchema },
        errorFactory: Builds.CancelBuildV2BuildsBuildIdCancelPostError,
      },
      options,
    );
  }

  /**
   * Download Build Source
   *
   * @remarks
   * Create a short-lived presigned download URL for a file in a build's source tree.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  downloadBuildSourceV2BuildsBuildIdSourceDownloadGet(
    request: Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BuildSourceDownloadResponse,
    Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/source/download"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [{ name: "path", value: request.path, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildSourceDownloadResponseSchema },
        errorFactory: Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError,
      },
      options,
    );
  }

  /**
   * Download Build Workspace
   *
   * @remarks
   * Stream a build's captured workspace as a zip archive.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  downloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(
    request: Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Record<string, unknown>,
    Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/workspace/download"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError,
      },
      options,
    );
  }

  /**
   * List Build Source
   *
   * @remarks
   * List files and directories at a path in a build's expanded source tree.
   *
   * Readers outside the owning team see only the latest build of a public environment whose owner
   * published its source.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.ListBuildSourceV2BuildsBuildIdSourceGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listBuildSourceV2BuildsBuildIdSourceGet(
    request: Builds.ListBuildSourceV2BuildsBuildIdSourceGetRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildSourceListResponse, Builds.ListBuildSourceV2BuildsBuildIdSourceGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/source"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [
          { name: "path", value: request.path, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildSourceListResponseSchema },
        errorFactory: Builds.ListBuildSourceV2BuildsBuildIdSourceGetError,
      },
      options,
    );
  }

  /**
   * List Build Workspace
   *
   * @remarks
   * List files and directories at a path in a build's captured workspace.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listBuildWorkspaceV2BuildsBuildIdWorkspaceGet(
    request: Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildWorkspaceListResponse, Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/workspace"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [
          { name: "path", value: request.path, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildWorkspaceListResponseSchema },
        errorFactory: Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError,
      },
      options,
    );
  }

  /**
   * List Builds
   *
   * @remarks
   * List builds for an environment registry, newest first.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.ListBuildsV2BuildsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listBuildsV2BuildsGet(
    request: Builds.ListBuildsV2BuildsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildListResponse, Builds.ListBuildsV2BuildsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/builds"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "registry_id", value: request.registryId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildListResponseInternalSchema },
        errorFactory: Builds.ListBuildsV2BuildsGetError,
      },
      options,
    );
  }

  /**
   * Lookup Builds
   *
   * @remarks
   * Find the team's builds whose source has one of the given content digests.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.LookupBuildsV2BuildsLookupPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  lookupBuildsV2BuildsLookupPost(
    request: Builds.LookupBuildsV2BuildsLookupPostRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildLookupResponse, Builds.LookupBuildsV2BuildsLookupPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/builds/lookup"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: buildLookupRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: buildLookupResponseSchema },
        errorFactory: Builds.LookupBuildsV2BuildsLookupPostError,
      },
      options,
    );
  }

  /**
   * Preview Build Source
   *
   * @remarks
   * Return the text content of a file in a build's source tree (1 MiB cap, text only).
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  previewBuildSourceV2BuildsBuildIdSourcePreviewGet(
    request: Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildSourcePreviewResponse, Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/source/preview"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [{ name: "path", value: request.path, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildSourcePreviewResponseSchema },
        errorFactory: Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError,
      },
      options,
    );
  }

  /**
   * Preview Build Workspace
   *
   * @remarks
   * Return the text content of a captured workspace file (1 MiB cap, text only).
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  previewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(
    request: Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BuildSourcePreviewResponse,
    Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/workspace/preview"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [{ name: "path", value: request.path, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildSourcePreviewResponseSchema },
        errorFactory: Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError,
      },
      options,
    );
  }

  /**
   * Register Build Source
   *
   * @remarks
   * Record an uploaded build context as an unbuilt build of an environment.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.RegisterBuildSourceV2BuildsRegisterPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  registerBuildSourceV2BuildsRegisterPost(
    request: Builds.RegisterBuildSourceV2BuildsRegisterPostRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildRegisterResponse, Builds.RegisterBuildSourceV2BuildsRegisterPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/builds/register"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: buildRegisterRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: buildRegisterResponseInternalSchema },
        errorFactory: Builds.RegisterBuildSourceV2BuildsRegisterPostError,
      },
      options,
    );
  }

  /**
   * Reindex Build Source
   *
   * @remarks
   * Request a new source index after an indexing failure. Requires build edit access.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  reindexBuildSourceV2BuildsBuildIdSourceReindexPost(
    request: Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/source/reindex"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError,
      },
      options,
    );
  }

  /**
   * Set Latest Build
   *
   * @remarks
   * Pin a successful build as its registry's latest build.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  setLatestBuildV2BuildsBuildIdSetLatestPost(
    request: Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildResponse, Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/builds/{build_id}/set-latest"),
        auth: noneAuth,
        pathParams: [{ name: "build_id", value: request.buildId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildResponseInternalSchema },
        errorFactory: Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError,
      },
      options,
    );
  }

  /**
   * Trigger Build
   *
   * @remarks
   * Trigger an environment build from a previously uploaded build context.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.TriggerBuildV2BuildsTriggerDirectPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  triggerBuildV2BuildsTriggerDirectPost(
    request: Builds.TriggerBuildV2BuildsTriggerDirectPostRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildResponse, Builds.TriggerBuildV2BuildsTriggerDirectPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/builds/trigger-direct"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: buildTriggerRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: buildResponseInternalSchema },
        errorFactory: Builds.TriggerBuildV2BuildsTriggerDirectPostError,
      },
      options,
    );
  }

  /**
   * Trigger Build
   *
   * @remarks
   * Trigger an environment build from a previously uploaded build context.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.TriggerBuildV2BuildsTriggerPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  triggerBuildV2BuildsTriggerPost(
    request: Builds.TriggerBuildV2BuildsTriggerPostRequest,
    options?: RequestOptions,
  ): ApiPromise<BuildResponse, Builds.TriggerBuildV2BuildsTriggerPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/builds/trigger"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: buildTriggerRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: buildResponseInternalSchema },
        errorFactory: Builds.TriggerBuildV2BuildsTriggerPostError,
      },
      options,
    );
  }

  /**
   * Upload Url
   *
   * @remarks
   * Create a presigned S3 URL for uploading a build context, with a new build id.
   *
   * @returns Successful Response
   *
   * @throws {@link Builds.UploadUrlV2BuildsUploadUrlPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  uploadUrlV2BuildsUploadUrlPost(
    options?: RequestOptions,
  ): ApiPromise<BuildUploadUrlResponse, Builds.UploadUrlV2BuildsUploadUrlPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/builds/upload-url"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: buildUploadUrlResponseSchema },
        errorFactory: Builds.UploadUrlV2BuildsUploadUrlPostError,
      },
      options,
    );
  }
}

export namespace Builds {
  export type BuildStatusV2BuildsBuildIdStatusGetRequest = {
    buildId: string;
  };

  export class BuildStatusV2BuildsBuildIdStatusGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<BuildStatusV2BuildsBuildIdStatusGetError> = [
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

  export type CancelBuildV2BuildsBuildIdCancelPostRequest = {
    buildId: string;
  };

  export class CancelBuildV2BuildsBuildIdCancelPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CancelBuildV2BuildsBuildIdCancelPostError> = [
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

  export type DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest = {
    buildId: string;
    path: string;
  };

  export class DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError> = [
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

  export type DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest = {
    buildId: string;
  };

  export class DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError> = [
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

  export type ListBuildSourceV2BuildsBuildIdSourceGetRequest = {
    buildId: string;
    path?: string;
    cursor?: Cursor;
    /** @default 100 */
    limit?: number;
  };

  export const listBuildSourceV2BuildsBuildIdSourceGetRequestSchema: Schema<ListBuildSourceV2BuildsBuildIdSourceGetRequest> =
    s.lazySchema(() =>
      s.object<ListBuildSourceV2BuildsBuildIdSourceGetRequest>({
        buildId: s.string(),
        path: s.optional(s.string()),
        cursor: s.optional(s.lazy(() => cursorSchema)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 100),
      }),
    );

  export class ListBuildSourceV2BuildsBuildIdSourceGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListBuildSourceV2BuildsBuildIdSourceGetError> = [
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

  export type ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest = {
    buildId: string;
    path?: string;
    cursor?: Cursor;
    /** @default 100 */
    limit?: number;
  };

  export const listBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequestSchema: Schema<ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest> =
    s.lazySchema(() =>
      s.object<ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest>({
        buildId: s.string(),
        path: s.optional(s.string()),
        cursor: s.optional(s.lazy(() => cursorSchema)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 100),
      }),
    );

  export class ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError> = [
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

  export type ListBuildsV2BuildsGetRequest = {
    /** Filter builds to this registry */
    registryId: string;
    /** @default 50 */
    limit?: number;
  };

  export const listBuildsV2BuildsGetRequestSchema: Schema<ListBuildsV2BuildsGetRequest> = s.lazySchema(() =>
    s.object<ListBuildsV2BuildsGetRequest>({
      registryId: s.string(),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
    }),
  );

  export class ListBuildsV2BuildsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListBuildsV2BuildsGetError> = [
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

  export type LookupBuildsV2BuildsLookupPostRequest = {
    body: BuildLookupRequest;
  };

  export class LookupBuildsV2BuildsLookupPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<LookupBuildsV2BuildsLookupPostError> = [
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

  export type PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest = {
    buildId: string;
    path: string;
  };

  export class PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError> = [
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

  export type PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest = {
    buildId: string;
    path: string;
  };

  export class PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError> = [
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

  export type RegisterBuildSourceV2BuildsRegisterPostRequest = {
    body: BuildRegisterRequest;
  };

  export class RegisterBuildSourceV2BuildsRegisterPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<RegisterBuildSourceV2BuildsRegisterPostError> = [
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

  export type ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest = {
    buildId: string;
  };

  export class ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError> = [
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

  export type SetLatestBuildV2BuildsBuildIdSetLatestPostRequest = {
    buildId: string;
  };

  export class SetLatestBuildV2BuildsBuildIdSetLatestPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<SetLatestBuildV2BuildsBuildIdSetLatestPostError> = [
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

  export type TriggerBuildV2BuildsTriggerDirectPostRequest = {
    body: BuildTriggerRequest;
  };

  export class TriggerBuildV2BuildsTriggerDirectPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<TriggerBuildV2BuildsTriggerDirectPostError> = [
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

  export type TriggerBuildV2BuildsTriggerPostRequest = {
    body: BuildTriggerRequest;
  };

  export class TriggerBuildV2BuildsTriggerPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<TriggerBuildV2BuildsTriggerPostError> = [
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

  export class UploadUrlV2BuildsUploadUrlPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadUrlV2BuildsUploadUrlPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
