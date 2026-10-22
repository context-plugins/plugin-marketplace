import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { concatRequestSchema, type ConcatRequest } from "../models/concat-request.js";
import { concatResponseSchema, type ConcatResponse } from "../models/concat-response.js";
import { destroyRequestSchema, type DestroyRequest } from "../models/destroy-request.js";
import { destroyResponseSchema, type DestroyResponse } from "../models/destroy-response.js";
import { evalRequestSchema, type EvalRequest } from "../models/eval-request.js";
import { resourceTypeSchema, type ResourceType } from "../models/resource-type.js";
import { resourceType9Schema, type ResourceType9 } from "../models/resource-type9.js";
import { textRequestSchema, type TextRequest } from "../models/text-request.js";
import { textResponseSchema, type TextResponse } from "../models/text-response.js";
import {
  v11UploadChunkedResponseSchema,
  type V11UploadChunkedResponse,
} from "../models/unions/v11-upload-chunked-response.js";
import { v11UploadResponseSchema, type V11UploadResponse } from "../models/unions/v11-upload-response.js";
import { uploadRequestSchema, type UploadRequest } from "../models/upload-request.js";
import { UploadResourceType, uploadResourceTypeSchema } from "../models/upload-resource-type.js";
import type { Servers } from "../servers.js";

/**
 * Uploads files to the active product environment.
 */
export class Upload {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Concatenate ordered video segments into a single MP4 asset
   *
   * @remarks
   * Accepts an ordered list of remote HTTP(S) URLs pointing to video segments and concatenates
   * them, remuxing the result into a single MP4 asset that is uploaded to your product environment
   * using the supplied upload parameters. Concatenation and the resulting upload happen
   * asynchronously; supply a `notification_url` to be notified when the upload completes.
   *
   * @returns concat job accepted; the upload completes asynchronously.
   *
   * @throws {@link Upload.ConcatError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  concat(
    request: Upload.ConcatRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ConcatResponse, Upload.ConcatError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/video/concat"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: concatRequestSchema },
      },
      {
        success: { kind: "json", schema: concatResponseSchema },
        errorFactory: Upload.ConcatError,
      },
      options,
    );
  }

  /**
   * Destroys an asset/resource
   *
   * @returns Asset/resource destroyed successfully or not found
   *
   * @throws {@link Upload.DestroyAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  destroyAsset(
    request: Upload.DestroyAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<DestroyResponse, Upload.DestroyAssetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/destroy"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: destroyRequestSchema },
      },
      {
        success: { kind: "json", schema: destroyResponseSchema },
        errorFactory: Upload.DestroyAssetError,
      },
      options,
    );
  }

  /**
   * Evaluate a dynamic upload-parameter expression
   *
   * @remarks
   * Evaluates a dynamic eval expression against the supplied upload parameters and returns the
   * resulting upload parameters.
   *
   * @returns The evaluated upload parameters.
   *
   * @throws {@link Upload.EvalUploadParamsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  evalUploadParams(
    request: Upload.EvalUploadParamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Upload.EvalUploadParamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/eval"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: evalRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Upload.EvalUploadParamsError,
      },
      options,
    );
  }

  /**
   * Create image from text
   *
   * @remarks
   * Dynamically generates an image from a specified text string.
   *
   * @returns Text image created successfully
   *
   * @throws {@link Upload.TextError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  text(
    request: Upload.TextRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TextResponse, Upload.TextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/text"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceType9Schema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: textRequestSchema },
      },
      {
        success: { kind: "json", schema: textResponseSchema },
        errorFactory: Upload.TextError,
      },
      options,
    );
  }

  /**
   * Uploads media assets (images, videos, raw files) to your Cloudinary product environment
   *
   * @remarks
   * Uploads media assets (images, videos, raw files) to your Cloudinary product environment. The
   * file is securely stored in the cloud with backup and revision history. Cloudinary automatically
   * analyzes and saves important data about each asset, such as format, size, resolution, and
   * prominent colors, which is indexed to enable searching on those attributes.
   *
   * Supports uploading from:
   * - Local file paths (SDKs/MCP server only). For MCP server path MUST start with file://
   * - Remote HTTP/HTTPS URLs
   * - Base64 Data URIs (max ~60 MB)
   * - Private storage buckets (S3 or Google Storage)
   * - FTP addresses
   *
   * The uploaded asset is immediately available for transformation and delivery upon successful
   * upload.
   *
   * Transform media files using transformation syntax in delivery URLs, which creates derived files
   * accessible immediately without re-uploading the original.
   *
   * @returns Successful upload
   *
   * @throws {@link Upload.UploadError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  upload(
    request: Upload.UploadRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V11UploadResponse, Upload.UploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/upload"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          {
            name: "resource_type",
            value: request.resourceType,
            schema: s.defaulted(uploadResourceTypeSchema, UploadResourceType.Auto),
          },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: uploadRequestSchema },
      },
      {
        success: { kind: "json", schema: v11UploadResponseSchema },
        errorFactory: Upload.UploadError,
      },
      options,
    );
  }

  /**
   * Upload a single chunk of a large file
   *
   * @remarks
   * Uploads a single chunk of a large file as part of a chunked upload process. This enables
   * efficient upload of large files with the ability to resume interrupted uploads. Each request
   * uploads one chunk of the file. It is required for any files that are larger than 100 MB. This
   * is often relevant for video files, as they tend to have larger file sizes. Minimum chunk size
   * is 5 MB.
   *
   * The `file` field accepts either the chunk bytes (multipart) or an HTTP/HTTPS URL. When a URL is
   * supplied, Cloudinary downloads it and validates the response `Content-Length` against the
   * chunk-size contract (exact match in the uniform-size flow; within 5 MB floor and 5 GiB cap in
   * explicit-order mode) before storing any bytes. A mismatch aborts with 400 and persists no
   * state. The remote server must return a `Content-Length` header; chunked transfer-encoded
   * responses are rejected.
   *
   * **Explicit-order totals** (`X-Upload-Part-Number`): `X-Upload-Total-Parts` may be omitted on
   * non-terminal chunks until the session total *N* is established by any earlier chunk that sent
   * the header. After *N* is known, the chunk for part index *N* must include
   * `X-Upload-Total-Parts: N`. Whenever the header appears, its value must be the same integer *N*
   * for that `X-Unique-Upload-Id` (no conflicting totals).
   *
   * @returns Chunk upload successful. For all but the final chunk, this returns upload status. For
   * the final chunk, it returns the complete upload response.
   *
   * @throws {@link Upload.UploadChunkError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  uploadChunk(
    request: Upload.UploadChunkRequest,
    options?: RequestOptions,
  ): ApiPromise<V11UploadChunkedResponse, Upload.UploadChunkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/upload_chunked"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          {
            name: "resource_type",
            value: request.resourceType,
            schema: s.defaulted(uploadResourceTypeSchema, UploadResourceType.Auto),
          },
        ],
        query: [],
        headers: [
          { name: "X-Unique-Upload-Id", value: request.xUniqueUploadId, schema: s.string() },
          { name: "Content-Range", value: request.contentRange, schema: s.optional(s.string()) },
          { name: "X-Upload-Part-Number", value: request.xUploadPartNumber, schema: s.optional(s.int()) },
          { name: "X-Upload-Total-Parts", value: request.xUploadTotalParts, schema: s.optional(s.int()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: uploadRequestSchema },
      },
      {
        success: { kind: "json", schema: v11UploadChunkedResponseSchema },
        errorFactory: Upload.UploadChunkError,
      },
      options,
    );
  }

  /**
   * Upload with automatic file type detection
   *
   * @remarks
   * Uploads a file to Cloudinary. The file type is automatically detected based on its content, so
   * you don't need to specify the type manually.
   *
   * @returns Successful upload
   *
   * @throws {@link Upload.UploadNoResourceTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  uploadNoResourceType(
    request: Upload.UploadNoResourceTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<V11UploadResponse, Upload.UploadNoResourceTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/upload"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: uploadRequestSchema },
      },
      {
        success: { kind: "json", schema: v11UploadResponseSchema },
        errorFactory: Upload.UploadNoResourceTypeError,
      },
      options,
    );
  }
}

export namespace Upload {
  export type ConcatRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The concat request parameters. */
    body: ConcatRequest;
  };

  export class ConcatError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConcatError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type DestroyAssetRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** The asset to destroy and related options. */
    body: DestroyRequest;
  };

  export class DestroyAssetError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DestroyAssetError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type EvalUploadParamsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The eval expression and the upload parameters to evaluate it against. */
    body: EvalRequest;
  };

  export class EvalUploadParamsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<EvalUploadParamsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type TextRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource to create. Must be "image" for text generation. */
    resourceType: ResourceType9;
    /** The text content and styling parameters for image generation. */
    body: TextRequest;
  };

  export class TextError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<TextError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UploadRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, raw, or auto). @default UploadResourceType.Auto */
    resourceType?: UploadResourceType;
    /** The file to upload and associated parameters. */
    body: UploadRequest;
  };

  export class UploadError extends ApiError {
    declare readonly payload:
      | Declared<"error302", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadError> = [
      { on: 302, kind: "error302", decode: { kind: "empty" } },
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UploadChunkRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, raw, or auto). @default UploadResourceType.Auto */
    resourceType?: UploadResourceType;
    /** A unique identifier for the upload. Must be the same for all chunks of the same file. */
    xUniqueUploadId: string;
    /**
     * The range of bytes being uploaded in the current chunk, in the format "bytes
     * start-end/total". For example, "bytes 0-999999/3000000" indicates the first 1MB chunk of a
     * 3MB file. Required for the default uniform-size chunked upload flow. In explicit-order mode
     * (`X-Upload-Part-Number`), this header remains optional; clients do not have to send
     * `Content-Range`, `X-Upload-Part-Number`, and `X-Upload-Total-Parts` together on every
     * request—`X-Upload-Total-Parts` may be omitted on some chunks subject to the rules documented
     * on that header.
     */
    contentRange?: string;
    /**
     * The 1-based part number for this chunk when uploading parts of uneven size with explicit
     * client-supplied order. Requires `X-Unique-Upload-Id`. When present, activates explicit-order
     * mode and `Content-Range` is optional. Parts must use contiguous indices `1`…`N`, where `N` is
     * the session total. If `X-Upload-Total-Parts` is omitted on a chunk, the server still enforces
     * `X-Upload-Part-Number ≤ N` once `N` has been learned from any prior chunk for the same upload
     * that supplied `X-Upload-Total-Parts`.
     */
    xUploadPartNumber?: number;
    /**
     * Declared session total `N` (optional on chunks where omission is allowed). When present on a
     * chunk, it must satisfy either `X-Upload-Part-Number < X-Upload-Total-Parts` (non-terminal) or
     * `X-Upload-Part-Number == X-Upload-Total-Parts` (terminal). The same integer `N` must appear
     * whenever this header is sent for a given `X-Unique-Upload-Id` (no conflicting declared
     * totals). Chunks may omit the header entirely until `N` is established; after `N` is known,
     * non-terminal indices may still omit it. Once `N` is known for the session, the request for
     * part index `N` (the final part) must include `X-Upload-Total-Parts: N`. The upload completes
     * when all parts `1`…`N` have been received.
     */
    xUploadTotalParts?: number;
    /** The file to upload and associated parameters. */
    body: UploadRequest;
  };

  export class UploadChunkError extends ApiError {
    declare readonly payload:
      | Declared<"error302", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadChunkError> = [
      { on: 302, kind: "error302", decode: { kind: "empty" } },
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UploadNoResourceTypeRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The file to upload and associated parameters. */
    body: UploadRequest;
  };

  export class UploadNoResourceTypeError extends ApiError {
    declare readonly payload:
      | Declared<"error302", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadNoResourceTypeError> = [
      { on: 302, kind: "error302", decode: { kind: "empty" } },
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
