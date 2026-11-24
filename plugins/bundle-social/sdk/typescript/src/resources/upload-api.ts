import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1UploadFinalizeRequestSchema,
  type ApiV1UploadFinalizeRequest,
} from "../models/api-v1-upload-finalize-request.js";
import {
  apiV1UploadFinalizeResponseInternalSchema,
  type ApiV1UploadFinalizeResponse,
} from "../models/api-v1-upload-finalize-response.js";
import {
  apiV1UploadFinalize400Error1Schema,
  type ApiV1UploadFinalize400Error1,
} from "../models/api-v1-upload-finalize400-error1.js";
import {
  apiV1UploadFinalize401Error1Schema,
  type ApiV1UploadFinalize401Error1,
} from "../models/api-v1-upload-finalize401-error1.js";
import {
  apiV1UploadFinalize403Error1Schema,
  type ApiV1UploadFinalize403Error1,
} from "../models/api-v1-upload-finalize403-error1.js";
import {
  apiV1UploadFinalize404Error1Schema,
  type ApiV1UploadFinalize404Error1,
} from "../models/api-v1-upload-finalize404-error1.js";
import {
  apiV1UploadFinalize429Error1Schema,
  type ApiV1UploadFinalize429Error1,
} from "../models/api-v1-upload-finalize429-error1.js";
import {
  apiV1UploadFinalize500Error1Schema,
  type ApiV1UploadFinalize500Error1,
} from "../models/api-v1-upload-finalize500-error1.js";
import {
  apiV1UploadFinalize502Error1Schema,
  type ApiV1UploadFinalize502Error1,
} from "../models/api-v1-upload-finalize502-error1.js";
import {
  apiV1UploadFinalize503Error1Schema,
  type ApiV1UploadFinalize503Error1,
} from "../models/api-v1-upload-finalize503-error1.js";
import {
  apiV1UploadFinalize504Error1Schema,
  type ApiV1UploadFinalize504Error1,
} from "../models/api-v1-upload-finalize504-error1.js";
import {
  apiV1UploadFromUrlRequestInternalSchema,
  type ApiV1UploadFromUrlRequest,
} from "../models/api-v1-upload-from-url-request.js";
import {
  apiV1UploadFromUrlResponseInternalSchema,
  type ApiV1UploadFromUrlResponse,
} from "../models/api-v1-upload-from-url-response.js";
import {
  apiV1UploadFromUrl400Error1Schema,
  type ApiV1UploadFromUrl400Error1,
} from "../models/api-v1-upload-from-url400-error1.js";
import {
  apiV1UploadFromUrl401Error1Schema,
  type ApiV1UploadFromUrl401Error1,
} from "../models/api-v1-upload-from-url401-error1.js";
import {
  apiV1UploadFromUrl403Error1Schema,
  type ApiV1UploadFromUrl403Error1,
} from "../models/api-v1-upload-from-url403-error1.js";
import {
  apiV1UploadFromUrl404Error1Schema,
  type ApiV1UploadFromUrl404Error1,
} from "../models/api-v1-upload-from-url404-error1.js";
import {
  apiV1UploadFromUrl429Error1Schema,
  type ApiV1UploadFromUrl429Error1,
} from "../models/api-v1-upload-from-url429-error1.js";
import {
  apiV1UploadFromUrl500Error1Schema,
  type ApiV1UploadFromUrl500Error1,
} from "../models/api-v1-upload-from-url500-error1.js";
import {
  apiV1UploadFromUrl502Error1Schema,
  type ApiV1UploadFromUrl502Error1,
} from "../models/api-v1-upload-from-url502-error1.js";
import {
  apiV1UploadFromUrl503Error1Schema,
  type ApiV1UploadFromUrl503Error1,
} from "../models/api-v1-upload-from-url503-error1.js";
import {
  apiV1UploadFromUrl504Error1Schema,
  type ApiV1UploadFromUrl504Error1,
} from "../models/api-v1-upload-from-url504-error1.js";
import {
  apiV1UploadInitRequestInternalSchema,
  type ApiV1UploadInitRequest,
} from "../models/api-v1-upload-init-request.js";
import {
  apiV1UploadInitResponseSchema,
  type ApiV1UploadInitResponse,
} from "../models/api-v1-upload-init-response.js";
import {
  apiV1UploadInit400Error1Schema,
  type ApiV1UploadInit400Error1,
} from "../models/api-v1-upload-init400-error1.js";
import {
  apiV1UploadInit401Error1Schema,
  type ApiV1UploadInit401Error1,
} from "../models/api-v1-upload-init401-error1.js";
import {
  apiV1UploadInit403Error1Schema,
  type ApiV1UploadInit403Error1,
} from "../models/api-v1-upload-init403-error1.js";
import {
  apiV1UploadInit404Error1Schema,
  type ApiV1UploadInit404Error1,
} from "../models/api-v1-upload-init404-error1.js";
import {
  apiV1UploadInit429Error1Schema,
  type ApiV1UploadInit429Error1,
} from "../models/api-v1-upload-init429-error1.js";
import {
  apiV1UploadInit500Error1Schema,
  type ApiV1UploadInit500Error1,
} from "../models/api-v1-upload-init500-error1.js";
import {
  apiV1UploadInit502Error1Schema,
  type ApiV1UploadInit502Error1,
} from "../models/api-v1-upload-init502-error1.js";
import {
  apiV1UploadInit503Error1Schema,
  type ApiV1UploadInit503Error1,
} from "../models/api-v1-upload-init503-error1.js";
import {
  apiV1UploadInit504Error1Schema,
  type ApiV1UploadInit504Error1,
} from "../models/api-v1-upload-init504-error1.js";
import {
  apiV1UploadMultipartAbortRequestSchema,
  type ApiV1UploadMultipartAbortRequest,
} from "../models/api-v1-upload-multipart-abort-request.js";
import {
  apiV1UploadMultipartAbortResponseSchema,
  type ApiV1UploadMultipartAbortResponse,
} from "../models/api-v1-upload-multipart-abort-response.js";
import {
  apiV1UploadMultipartAbort400Error1Schema,
  type ApiV1UploadMultipartAbort400Error1,
} from "../models/api-v1-upload-multipart-abort400-error1.js";
import {
  apiV1UploadMultipartAbort401Error1Schema,
  type ApiV1UploadMultipartAbort401Error1,
} from "../models/api-v1-upload-multipart-abort401-error1.js";
import {
  apiV1UploadMultipartAbort403Error1Schema,
  type ApiV1UploadMultipartAbort403Error1,
} from "../models/api-v1-upload-multipart-abort403-error1.js";
import {
  apiV1UploadMultipartAbort404Error1Schema,
  type ApiV1UploadMultipartAbort404Error1,
} from "../models/api-v1-upload-multipart-abort404-error1.js";
import {
  apiV1UploadMultipartAbort429Error1Schema,
  type ApiV1UploadMultipartAbort429Error1,
} from "../models/api-v1-upload-multipart-abort429-error1.js";
import {
  apiV1UploadMultipartAbort500Error1Schema,
  type ApiV1UploadMultipartAbort500Error1,
} from "../models/api-v1-upload-multipart-abort500-error1.js";
import {
  apiV1UploadMultipartAbort502Error1Schema,
  type ApiV1UploadMultipartAbort502Error1,
} from "../models/api-v1-upload-multipart-abort502-error1.js";
import {
  apiV1UploadMultipartAbort503Error1Schema,
  type ApiV1UploadMultipartAbort503Error1,
} from "../models/api-v1-upload-multipart-abort503-error1.js";
import {
  apiV1UploadMultipartAbort504Error1Schema,
  type ApiV1UploadMultipartAbort504Error1,
} from "../models/api-v1-upload-multipart-abort504-error1.js";
import {
  apiV1UploadMultipartCompleteRequestInternalSchema,
  type ApiV1UploadMultipartCompleteRequest,
} from "../models/api-v1-upload-multipart-complete-request.js";
import {
  apiV1UploadMultipartCompleteResponseInternalSchema,
  type ApiV1UploadMultipartCompleteResponse,
} from "../models/api-v1-upload-multipart-complete-response.js";
import {
  apiV1UploadMultipartComplete400Error1Schema,
  type ApiV1UploadMultipartComplete400Error1,
} from "../models/api-v1-upload-multipart-complete400-error1.js";
import {
  apiV1UploadMultipartComplete401Error1Schema,
  type ApiV1UploadMultipartComplete401Error1,
} from "../models/api-v1-upload-multipart-complete401-error1.js";
import {
  apiV1UploadMultipartComplete403Error1Schema,
  type ApiV1UploadMultipartComplete403Error1,
} from "../models/api-v1-upload-multipart-complete403-error1.js";
import {
  apiV1UploadMultipartComplete404Error1Schema,
  type ApiV1UploadMultipartComplete404Error1,
} from "../models/api-v1-upload-multipart-complete404-error1.js";
import {
  apiV1UploadMultipartComplete429Error1Schema,
  type ApiV1UploadMultipartComplete429Error1,
} from "../models/api-v1-upload-multipart-complete429-error1.js";
import {
  apiV1UploadMultipartComplete500Error1Schema,
  type ApiV1UploadMultipartComplete500Error1,
} from "../models/api-v1-upload-multipart-complete500-error1.js";
import {
  apiV1UploadMultipartComplete502Error1Schema,
  type ApiV1UploadMultipartComplete502Error1,
} from "../models/api-v1-upload-multipart-complete502-error1.js";
import {
  apiV1UploadMultipartComplete503Error1Schema,
  type ApiV1UploadMultipartComplete503Error1,
} from "../models/api-v1-upload-multipart-complete503-error1.js";
import {
  apiV1UploadMultipartComplete504Error1Schema,
  type ApiV1UploadMultipartComplete504Error1,
} from "../models/api-v1-upload-multipart-complete504-error1.js";
import {
  apiV1UploadMultipartInitRequestInternalSchema,
  type ApiV1UploadMultipartInitRequest,
} from "../models/api-v1-upload-multipart-init-request.js";
import {
  apiV1UploadMultipartInitResponseInternalSchema,
  type ApiV1UploadMultipartInitResponse,
} from "../models/api-v1-upload-multipart-init-response.js";
import {
  apiV1UploadMultipartInit400Error1Schema,
  type ApiV1UploadMultipartInit400Error1,
} from "../models/api-v1-upload-multipart-init400-error1.js";
import {
  apiV1UploadMultipartInit401Error1Schema,
  type ApiV1UploadMultipartInit401Error1,
} from "../models/api-v1-upload-multipart-init401-error1.js";
import {
  apiV1UploadMultipartInit403Error1Schema,
  type ApiV1UploadMultipartInit403Error1,
} from "../models/api-v1-upload-multipart-init403-error1.js";
import {
  apiV1UploadMultipartInit404Error1Schema,
  type ApiV1UploadMultipartInit404Error1,
} from "../models/api-v1-upload-multipart-init404-error1.js";
import {
  apiV1UploadMultipartInit429Error1Schema,
  type ApiV1UploadMultipartInit429Error1,
} from "../models/api-v1-upload-multipart-init429-error1.js";
import {
  apiV1UploadMultipartInit500Error1Schema,
  type ApiV1UploadMultipartInit500Error1,
} from "../models/api-v1-upload-multipart-init500-error1.js";
import {
  apiV1UploadMultipartInit502Error1Schema,
  type ApiV1UploadMultipartInit502Error1,
} from "../models/api-v1-upload-multipart-init502-error1.js";
import {
  apiV1UploadMultipartInit503Error1Schema,
  type ApiV1UploadMultipartInit503Error1,
} from "../models/api-v1-upload-multipart-init503-error1.js";
import {
  apiV1UploadMultipartInit504Error1Schema,
  type ApiV1UploadMultipartInit504Error1,
} from "../models/api-v1-upload-multipart-init504-error1.js";
import {
  apiV1UploadMultipartSignRequestInternalSchema,
  type ApiV1UploadMultipartSignRequest,
} from "../models/api-v1-upload-multipart-sign-request.js";
import {
  apiV1UploadMultipartSignResponseInternalSchema,
  type ApiV1UploadMultipartSignResponse,
} from "../models/api-v1-upload-multipart-sign-response.js";
import {
  apiV1UploadMultipartSign400Error1Schema,
  type ApiV1UploadMultipartSign400Error1,
} from "../models/api-v1-upload-multipart-sign400-error1.js";
import {
  apiV1UploadMultipartSign401Error1Schema,
  type ApiV1UploadMultipartSign401Error1,
} from "../models/api-v1-upload-multipart-sign401-error1.js";
import {
  apiV1UploadMultipartSign403Error1Schema,
  type ApiV1UploadMultipartSign403Error1,
} from "../models/api-v1-upload-multipart-sign403-error1.js";
import {
  apiV1UploadMultipartSign404Error1Schema,
  type ApiV1UploadMultipartSign404Error1,
} from "../models/api-v1-upload-multipart-sign404-error1.js";
import {
  apiV1UploadMultipartSign429Error1Schema,
  type ApiV1UploadMultipartSign429Error1,
} from "../models/api-v1-upload-multipart-sign429-error1.js";
import {
  apiV1UploadMultipartSign500Error1Schema,
  type ApiV1UploadMultipartSign500Error1,
} from "../models/api-v1-upload-multipart-sign500-error1.js";
import {
  apiV1UploadMultipartSign502Error1Schema,
  type ApiV1UploadMultipartSign502Error1,
} from "../models/api-v1-upload-multipart-sign502-error1.js";
import {
  apiV1UploadMultipartSign503Error1Schema,
  type ApiV1UploadMultipartSign503Error1,
} from "../models/api-v1-upload-multipart-sign503-error1.js";
import {
  apiV1UploadMultipartSign504Error1Schema,
  type ApiV1UploadMultipartSign504Error1,
} from "../models/api-v1-upload-multipart-sign504-error1.js";
import {
  apiV1UploadRequestInternalSchema,
  type ApiV1UploadRequest,
} from "../models/api-v1-upload-request.js";
import {
  apiV1UploadResponseInternalSchema,
  type ApiV1UploadResponse,
} from "../models/api-v1-upload-response.js";
import {
  apiV1UploadResponse1InternalSchema,
  type ApiV1UploadResponse1,
} from "../models/api-v1-upload-response1.js";
import { apiV1Upload400Error1Schema, type ApiV1Upload400Error1 } from "../models/api-v1-upload400-error1.js";
import { apiV1Upload401Error1Schema, type ApiV1Upload401Error1 } from "../models/api-v1-upload401-error1.js";
import { apiV1Upload403Error1Schema, type ApiV1Upload403Error1 } from "../models/api-v1-upload403-error1.js";
import { apiV1Upload404Error1Schema, type ApiV1Upload404Error1 } from "../models/api-v1-upload404-error1.js";
import { apiV1Upload429Error1Schema, type ApiV1Upload429Error1 } from "../models/api-v1-upload429-error1.js";
import { apiV1Upload500Error1Schema, type ApiV1Upload500Error1 } from "../models/api-v1-upload500-error1.js";
import { apiV1Upload502Error1Schema, type ApiV1Upload502Error1 } from "../models/api-v1-upload502-error1.js";
import { apiV1Upload503Error1Schema, type ApiV1Upload503Error1 } from "../models/api-v1-upload503-error1.js";
import { apiV1Upload504Error1Schema, type ApiV1Upload504Error1 } from "../models/api-v1-upload504-error1.js";
import {
  statusBundleSocialUploadApiSchema,
  type StatusBundleSocialUploadApi,
} from "../models/status-bundle-social-upload-api.js";
import {
  typeBundleSocialUploadApiSchema,
  type TypeBundleSocialUploadApi,
} from "../models/type-bundle-social-upload-api.js";
import { includePosts2Schema, type IncludePosts2 } from "../models/unions/include-posts2.js";
import type { Servers } from "../servers.js";

export class UploadApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Abort multipart upload
   *
   * @remarks
   * Discard an unfinished multipart upload and its parts. Call this when you give up on an upload —
   * abandoned parts stay in storage and count against your usage.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadAbortMultipartUploadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadAbortMultipartUpload(
    request: UploadApi.UploadAbortMultipartUploadRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadMultipartAbortResponse, UploadApi.UploadAbortMultipartUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/upload/multipart/abort"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1UploadMultipartAbortRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1UploadMultipartAbortResponseSchema },
        errorFactory: UploadApi.UploadAbortMultipartUploadError,
      },
      options,
    );
  }

  /**
   * Complete multipart upload
   *
   * @remarks
   * Assemble the uploaded parts into the final object and add it to your media library. Send every
   * part with the ETag returned by its PUT. A 500 is always retryable — whatever we have (your
   * parts, or the assembled object) is kept, so retry this call rather than re-uploading. A 400 is
   * final: either the part list was wrong, or the file itself was rejected (empty, wrong type, too
   * large, no readable preview) and its bytes have been deleted. A 403 means quota or permissions
   * and is raised before assembly, so your parts are still open — call abort yourself. Calling this
   * again after it already succeeded returns the same upload instead of charging you twice.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadCompleteMultipartUploadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadCompleteMultipartUpload(
    request: UploadApi.UploadCompleteMultipartUploadRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadMultipartCompleteResponse, UploadApi.UploadCompleteMultipartUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/upload/multipart/complete"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1UploadMultipartCompleteRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1UploadMultipartCompleteResponseInternalSchema },
        errorFactory: UploadApi.UploadCompleteMultipartUploadError,
      },
      options,
    );
  }

  /**
   * Create upload
   *
   * @remarks
   * Upload a file. This is the only endpoint that uses multipart/form-data.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadCreate(
    request: UploadApi.UploadCreateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadResponse1, UploadApi.UploadCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/upload/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "teamId", value: request.teamId, schema: s.optionalNullable(s.string()) },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV1UploadResponse1InternalSchema },
        errorFactory: UploadApi.UploadCreateError,
      },
      options,
    );
  }

  /**
   * Create upload from URL
   *
   * @remarks
   * Add an image or video to your media library by giving bundle.social a public URL to fetch,
   * instead of uploading the bytes yourself. Useful when your media already lives in a CDN or S3
   * bucket.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadCreateFromUrlError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadCreateFromUrl(
    request: UploadApi.UploadCreateFromUrlRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadFromUrlResponse, UploadApi.UploadCreateFromUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/upload/from-url"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1UploadFromUrlRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1UploadFromUrlResponseInternalSchema },
        errorFactory: UploadApi.UploadCreateFromUrlError,
      },
      options,
    );
  }

  /**
   * Delete upload
   *
   * @remarks
   * Permanently delete a single media file from your library. Files still attached to scheduled
   * posts should be replaced first.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadDeleteError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadDelete(
    request: UploadApi.UploadDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadResponse1, UploadApi.UploadDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/upload/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1UploadResponse1InternalSchema },
        errorFactory: UploadApi.UploadDeleteError,
      },
      options,
    );
  }

  /**
   * Delete many uploads
   *
   * @remarks
   * Permanently delete several media files in one request. Use it to clean up your library in bulk
   * instead of calling delete per file.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadDeleteManyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadDeleteMany(
    request: UploadApi.UploadDeleteManyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadResponse1[], UploadApi.UploadDeleteManyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/upload/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1UploadRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV1UploadResponse1InternalSchema)) },
        errorFactory: UploadApi.UploadDeleteManyError,
      },
      options,
    );
  }

  /**
   * Finalize large upload
   *
   * @remarks
   * Finalize large upload.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadFinalizeLargeUploadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadFinalizeLargeUpload(
    request: UploadApi.UploadFinalizeLargeUploadRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadFinalizeResponse, UploadApi.UploadFinalizeLargeUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/upload/finalize"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1UploadFinalizeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1UploadFinalizeResponseInternalSchema },
        errorFactory: UploadApi.UploadFinalizeLargeUploadError,
      },
      options,
    );
  }

  /**
   * Get upload
   *
   * @remarks
   * Retrieve a single media file with its processing status, dimensions, duration, and the posts it
   * is attached to.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadGet(
    request: UploadApi.UploadGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadResponse, UploadApi.UploadGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/upload/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1UploadResponseInternalSchema },
        errorFactory: UploadApi.UploadGetError,
      },
      options,
    );
  }

  /**
   * Get upload list
   *
   * @remarks
   * List the media files in your team's library, newest first. Each file carries `posts`, the links
   * to the posts using it — pass `includePosts=false` to leave them out. Page with `limit` and
   * `offset`. To check whether specific files already exist, filter by `ids` or `urls` instead of
   * listing everything.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadGetListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadGetList(
    request: UploadApi.UploadGetListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadResponse[], UploadApi.UploadGetListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/upload/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.optionalNullable(s.string()) },
          {
            name: "type",
            value: request.type,
            schema: s.optionalNullable(s.lazy(() => typeBundleSocialUploadApiSchema)),
          },
          {
            name: "types",
            value: request.types,
            schema: s.optionalNullable(s.array(s.lazy(() => typeBundleSocialUploadApiSchema))),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optionalNullable(s.lazy(() => statusBundleSocialUploadApiSchema)),
          },
          { name: "ids", value: request.ids, schema: s.optionalNullable(s.array(s.string())) },
          { name: "urls", value: request.urls, schema: s.optionalNullable(s.array(s.string())) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          {
            name: "includePosts",
            value: request.includePosts,
            schema: s.optional(s.lazy(() => includePosts2Schema)),
          },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.int()), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV1UploadResponseInternalSchema)) },
        errorFactory: UploadApi.UploadGetListError,
      },
      options,
    );
  }

  /**
   * Initialize large upload
   *
   * @remarks
   * Initialize large upload, you need to initialize a large upload if your file is larger than 90
   * MB.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadInitLargeUploadError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadInitLargeUpload(
    request: UploadApi.UploadInitLargeUploadRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadInitResponse, UploadApi.UploadInitLargeUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/upload/init"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1UploadInitRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1UploadInitResponseSchema },
        errorFactory: UploadApi.UploadInitLargeUploadError,
      },
      options,
    );
  }

  /**
   * Initialize multipart upload
   *
   * @remarks
   * Start a multipart upload. Required above the 5 GiB single-request storage limit that
   * /upload/init is bound by, and allowed for any smaller file too. Returns an uploadId plus one
   * presigned URL per part; PUT each part, keep the ETag response header, then call complete with
   * the full part list. Parts are 64 MiB each except the last, up to 10000 parts.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadInitMultipartUploadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadInitMultipartUpload(
    request: UploadApi.UploadInitMultipartUploadRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadMultipartInitResponse, UploadApi.UploadInitMultipartUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/upload/multipart/init"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1UploadMultipartInitRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1UploadMultipartInitResponseInternalSchema },
        errorFactory: UploadApi.UploadInitMultipartUploadError,
      },
      options,
    );
  }

  /**
   * Re-sign multipart upload parts
   *
   * @remarks
   * Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already
   * uploaded keep their ETags — only re-upload the ones that failed.
   *
   * @returns 200
   *
   * @throws {@link UploadApi.UploadSignMultipartPartsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadSignMultipartParts(
    request: UploadApi.UploadSignMultipartPartsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1UploadMultipartSignResponse, UploadApi.UploadSignMultipartPartsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/upload/multipart/sign"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1UploadMultipartSignRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1UploadMultipartSignResponseInternalSchema },
        errorFactory: UploadApi.UploadSignMultipartPartsError,
      },
      options,
    );
  }
}

export namespace UploadApi {
  export type UploadAbortMultipartUploadRequest = {
    /** Body */
    body?: ApiV1UploadMultipartAbortRequest;
  };

  export class UploadAbortMultipartUploadError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1UploadMultipartAbort400Error1", ApiV1UploadMultipartAbort400Error1>
      | Declared<"apiV1UploadMultipartAbort401Error1", ApiV1UploadMultipartAbort401Error1>
      | Declared<"apiV1UploadMultipartAbort403Error1", ApiV1UploadMultipartAbort403Error1>
      | Declared<"apiV1UploadMultipartAbort404Error1", ApiV1UploadMultipartAbort404Error1>
      | Declared<"apiV1UploadMultipartAbort429Error1", ApiV1UploadMultipartAbort429Error1>
      | Declared<"apiV1UploadMultipartAbort500Error1", ApiV1UploadMultipartAbort500Error1>
      | Declared<"apiV1UploadMultipartAbort502Error1", ApiV1UploadMultipartAbort502Error1>
      | Declared<"apiV1UploadMultipartAbort503Error1", ApiV1UploadMultipartAbort503Error1>
      | Declared<"apiV1UploadMultipartAbort504Error1", ApiV1UploadMultipartAbort504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadAbortMultipartUploadError> = [
      {
        on: 400,
        kind: "apiV1UploadMultipartAbort400Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1UploadMultipartAbort401Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1UploadMultipartAbort403Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1UploadMultipartAbort404Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1UploadMultipartAbort429Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1UploadMultipartAbort500Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1UploadMultipartAbort502Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1UploadMultipartAbort503Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1UploadMultipartAbort504Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartAbort504Error1Schema },
      },
    ];
  }

  export type UploadCompleteMultipartUploadRequest = {
    /** Body */
    body?: ApiV1UploadMultipartCompleteRequest;
  };

  export class UploadCompleteMultipartUploadError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1UploadMultipartComplete400Error1", ApiV1UploadMultipartComplete400Error1>
      | Declared<"apiV1UploadMultipartComplete401Error1", ApiV1UploadMultipartComplete401Error1>
      | Declared<"apiV1UploadMultipartComplete403Error1", ApiV1UploadMultipartComplete403Error1>
      | Declared<"apiV1UploadMultipartComplete404Error1", ApiV1UploadMultipartComplete404Error1>
      | Declared<"apiV1UploadMultipartComplete429Error1", ApiV1UploadMultipartComplete429Error1>
      | Declared<"apiV1UploadMultipartComplete500Error1", ApiV1UploadMultipartComplete500Error1>
      | Declared<"apiV1UploadMultipartComplete502Error1", ApiV1UploadMultipartComplete502Error1>
      | Declared<"apiV1UploadMultipartComplete503Error1", ApiV1UploadMultipartComplete503Error1>
      | Declared<"apiV1UploadMultipartComplete504Error1", ApiV1UploadMultipartComplete504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadCompleteMultipartUploadError> = [
      {
        on: 400,
        kind: "apiV1UploadMultipartComplete400Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1UploadMultipartComplete401Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1UploadMultipartComplete403Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1UploadMultipartComplete404Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1UploadMultipartComplete429Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1UploadMultipartComplete500Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1UploadMultipartComplete502Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1UploadMultipartComplete503Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1UploadMultipartComplete504Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartComplete504Error1Schema },
      },
    ];
  }

  export type UploadCreateRequest = {
    teamId?: string | null;
    file?: FileInput;
  };

  export class UploadCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Upload400Error1", ApiV1Upload400Error1>
      | Declared<"apiV1Upload401Error1", ApiV1Upload401Error1>
      | Declared<"apiV1Upload403Error1", ApiV1Upload403Error1>
      | Declared<"apiV1Upload404Error1", ApiV1Upload404Error1>
      | Declared<"apiV1Upload429Error1", ApiV1Upload429Error1>
      | Declared<"apiV1Upload500Error1", ApiV1Upload500Error1>
      | Declared<"apiV1Upload502Error1", ApiV1Upload502Error1>
      | Declared<"apiV1Upload503Error1", ApiV1Upload503Error1>
      | Declared<"apiV1Upload504Error1", ApiV1Upload504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadCreateError> = [
      { on: 400, kind: "apiV1Upload400Error1", decode: { kind: "json", schema: apiV1Upload400Error1Schema } },
      { on: 401, kind: "apiV1Upload401Error1", decode: { kind: "json", schema: apiV1Upload401Error1Schema } },
      { on: 403, kind: "apiV1Upload403Error1", decode: { kind: "json", schema: apiV1Upload403Error1Schema } },
      { on: 404, kind: "apiV1Upload404Error1", decode: { kind: "json", schema: apiV1Upload404Error1Schema } },
      { on: 429, kind: "apiV1Upload429Error1", decode: { kind: "json", schema: apiV1Upload429Error1Schema } },
      { on: 500, kind: "apiV1Upload500Error1", decode: { kind: "json", schema: apiV1Upload500Error1Schema } },
      { on: 502, kind: "apiV1Upload502Error1", decode: { kind: "json", schema: apiV1Upload502Error1Schema } },
      { on: 503, kind: "apiV1Upload503Error1", decode: { kind: "json", schema: apiV1Upload503Error1Schema } },
      { on: 504, kind: "apiV1Upload504Error1", decode: { kind: "json", schema: apiV1Upload504Error1Schema } },
    ];
  }

  export type UploadCreateFromUrlRequest = {
    /** Body */
    body?: ApiV1UploadFromUrlRequest;
  };

  export class UploadCreateFromUrlError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1UploadFromUrl400Error1", ApiV1UploadFromUrl400Error1>
      | Declared<"apiV1UploadFromUrl401Error1", ApiV1UploadFromUrl401Error1>
      | Declared<"apiV1UploadFromUrl403Error1", ApiV1UploadFromUrl403Error1>
      | Declared<"apiV1UploadFromUrl404Error1", ApiV1UploadFromUrl404Error1>
      | Declared<"apiV1UploadFromUrl429Error1", ApiV1UploadFromUrl429Error1>
      | Declared<"apiV1UploadFromUrl500Error1", ApiV1UploadFromUrl500Error1>
      | Declared<"apiV1UploadFromUrl502Error1", ApiV1UploadFromUrl502Error1>
      | Declared<"apiV1UploadFromUrl503Error1", ApiV1UploadFromUrl503Error1>
      | Declared<"apiV1UploadFromUrl504Error1", ApiV1UploadFromUrl504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadCreateFromUrlError> = [
      {
        on: 400,
        kind: "apiV1UploadFromUrl400Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1UploadFromUrl401Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1UploadFromUrl403Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1UploadFromUrl404Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1UploadFromUrl429Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1UploadFromUrl500Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1UploadFromUrl502Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1UploadFromUrl503Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1UploadFromUrl504Error1",
        decode: { kind: "json", schema: apiV1UploadFromUrl504Error1Schema },
      },
    ];
  }

  export type UploadDeleteRequest = {
    id: string;
  };

  export class UploadDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Upload400Error1", ApiV1Upload400Error1>
      | Declared<"apiV1Upload401Error1", ApiV1Upload401Error1>
      | Declared<"apiV1Upload403Error1", ApiV1Upload403Error1>
      | Declared<"apiV1Upload404Error1", ApiV1Upload404Error1>
      | Declared<"apiV1Upload429Error1", ApiV1Upload429Error1>
      | Declared<"apiV1Upload500Error1", ApiV1Upload500Error1>
      | Declared<"apiV1Upload502Error1", ApiV1Upload502Error1>
      | Declared<"apiV1Upload503Error1", ApiV1Upload503Error1>
      | Declared<"apiV1Upload504Error1", ApiV1Upload504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadDeleteError> = [
      { on: 400, kind: "apiV1Upload400Error1", decode: { kind: "json", schema: apiV1Upload400Error1Schema } },
      { on: 401, kind: "apiV1Upload401Error1", decode: { kind: "json", schema: apiV1Upload401Error1Schema } },
      { on: 403, kind: "apiV1Upload403Error1", decode: { kind: "json", schema: apiV1Upload403Error1Schema } },
      { on: 404, kind: "apiV1Upload404Error1", decode: { kind: "json", schema: apiV1Upload404Error1Schema } },
      { on: 429, kind: "apiV1Upload429Error1", decode: { kind: "json", schema: apiV1Upload429Error1Schema } },
      { on: 500, kind: "apiV1Upload500Error1", decode: { kind: "json", schema: apiV1Upload500Error1Schema } },
      { on: 502, kind: "apiV1Upload502Error1", decode: { kind: "json", schema: apiV1Upload502Error1Schema } },
      { on: 503, kind: "apiV1Upload503Error1", decode: { kind: "json", schema: apiV1Upload503Error1Schema } },
      { on: 504, kind: "apiV1Upload504Error1", decode: { kind: "json", schema: apiV1Upload504Error1Schema } },
    ];
  }

  export type UploadDeleteManyRequest = {
    /** Body */
    body?: ApiV1UploadRequest;
  };

  export class UploadDeleteManyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Upload400Error1", ApiV1Upload400Error1>
      | Declared<"apiV1Upload401Error1", ApiV1Upload401Error1>
      | Declared<"apiV1Upload403Error1", ApiV1Upload403Error1>
      | Declared<"apiV1Upload404Error1", ApiV1Upload404Error1>
      | Declared<"apiV1Upload429Error1", ApiV1Upload429Error1>
      | Declared<"apiV1Upload500Error1", ApiV1Upload500Error1>
      | Declared<"apiV1Upload502Error1", ApiV1Upload502Error1>
      | Declared<"apiV1Upload503Error1", ApiV1Upload503Error1>
      | Declared<"apiV1Upload504Error1", ApiV1Upload504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadDeleteManyError> = [
      { on: 400, kind: "apiV1Upload400Error1", decode: { kind: "json", schema: apiV1Upload400Error1Schema } },
      { on: 401, kind: "apiV1Upload401Error1", decode: { kind: "json", schema: apiV1Upload401Error1Schema } },
      { on: 403, kind: "apiV1Upload403Error1", decode: { kind: "json", schema: apiV1Upload403Error1Schema } },
      { on: 404, kind: "apiV1Upload404Error1", decode: { kind: "json", schema: apiV1Upload404Error1Schema } },
      { on: 429, kind: "apiV1Upload429Error1", decode: { kind: "json", schema: apiV1Upload429Error1Schema } },
      { on: 500, kind: "apiV1Upload500Error1", decode: { kind: "json", schema: apiV1Upload500Error1Schema } },
      { on: 502, kind: "apiV1Upload502Error1", decode: { kind: "json", schema: apiV1Upload502Error1Schema } },
      { on: 503, kind: "apiV1Upload503Error1", decode: { kind: "json", schema: apiV1Upload503Error1Schema } },
      { on: 504, kind: "apiV1Upload504Error1", decode: { kind: "json", schema: apiV1Upload504Error1Schema } },
    ];
  }

  export type UploadFinalizeLargeUploadRequest = {
    /** Body */
    body?: ApiV1UploadFinalizeRequest;
  };

  export class UploadFinalizeLargeUploadError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1UploadFinalize400Error1", ApiV1UploadFinalize400Error1>
      | Declared<"apiV1UploadFinalize401Error1", ApiV1UploadFinalize401Error1>
      | Declared<"apiV1UploadFinalize403Error1", ApiV1UploadFinalize403Error1>
      | Declared<"apiV1UploadFinalize404Error1", ApiV1UploadFinalize404Error1>
      | Declared<"apiV1UploadFinalize429Error1", ApiV1UploadFinalize429Error1>
      | Declared<"apiV1UploadFinalize500Error1", ApiV1UploadFinalize500Error1>
      | Declared<"apiV1UploadFinalize502Error1", ApiV1UploadFinalize502Error1>
      | Declared<"apiV1UploadFinalize503Error1", ApiV1UploadFinalize503Error1>
      | Declared<"apiV1UploadFinalize504Error1", ApiV1UploadFinalize504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadFinalizeLargeUploadError> = [
      {
        on: 400,
        kind: "apiV1UploadFinalize400Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1UploadFinalize401Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1UploadFinalize403Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1UploadFinalize404Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1UploadFinalize429Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1UploadFinalize500Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1UploadFinalize502Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1UploadFinalize503Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1UploadFinalize504Error1",
        decode: { kind: "json", schema: apiV1UploadFinalize504Error1Schema },
      },
    ];
  }

  export type UploadGetRequest = {
    id: string;
  };

  export class UploadGetError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Upload400Error1", ApiV1Upload400Error1>
      | Declared<"apiV1Upload401Error1", ApiV1Upload401Error1>
      | Declared<"apiV1Upload403Error1", ApiV1Upload403Error1>
      | Declared<"apiV1Upload404Error1", ApiV1Upload404Error1>
      | Declared<"apiV1Upload429Error1", ApiV1Upload429Error1>
      | Declared<"apiV1Upload500Error1", ApiV1Upload500Error1>
      | Declared<"apiV1Upload502Error1", ApiV1Upload502Error1>
      | Declared<"apiV1Upload503Error1", ApiV1Upload503Error1>
      | Declared<"apiV1Upload504Error1", ApiV1Upload504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadGetError> = [
      { on: 400, kind: "apiV1Upload400Error1", decode: { kind: "json", schema: apiV1Upload400Error1Schema } },
      { on: 401, kind: "apiV1Upload401Error1", decode: { kind: "json", schema: apiV1Upload401Error1Schema } },
      { on: 403, kind: "apiV1Upload403Error1", decode: { kind: "json", schema: apiV1Upload403Error1Schema } },
      { on: 404, kind: "apiV1Upload404Error1", decode: { kind: "json", schema: apiV1Upload404Error1Schema } },
      { on: 429, kind: "apiV1Upload429Error1", decode: { kind: "json", schema: apiV1Upload429Error1Schema } },
      { on: 500, kind: "apiV1Upload500Error1", decode: { kind: "json", schema: apiV1Upload500Error1Schema } },
      { on: 502, kind: "apiV1Upload502Error1", decode: { kind: "json", schema: apiV1Upload502Error1Schema } },
      { on: 503, kind: "apiV1Upload503Error1", decode: { kind: "json", schema: apiV1Upload503Error1Schema } },
      { on: 504, kind: "apiV1Upload504Error1", decode: { kind: "json", schema: apiV1Upload504Error1Schema } },
    ];
  }

  export type UploadGetListRequest = {
    teamId?: string | null;
    type?: TypeBundleSocialUploadApi | null;
    types?: TypeBundleSocialUploadApi[] | null;
    status?: StatusBundleSocialUploadApi | null;
    ids?: string[] | null;
    urls?: string[] | null;
    limit?: number | null;
    includePosts?: IncludePosts2;
    /** @default 0 */
    offset?: number | null;
  };

  export const uploadGetListRequestSchema: Schema<UploadGetListRequest> = s.lazySchema(() =>
    s.object<UploadGetListRequest>({
      teamId: s.optionalNullable(s.string()),
      type: s.optionalNullable(s.lazy(() => typeBundleSocialUploadApiSchema)),
      types: s.optionalNullable(s.array(s.lazy(() => typeBundleSocialUploadApiSchema)).check(s.maxLength(3))),
      status: s.optionalNullable(s.lazy(() => statusBundleSocialUploadApiSchema)),
      ids: s.optionalNullable(s.array(s.string()).check(s.maxLength(100))),
      urls: s.optionalNullable(s.array(s.string()).check(s.maxLength(100))),
      limit: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      includePosts: s.optional(s.lazy(() => includePosts2Schema)),
      offset: s.defaulted(s.nullable(s.int().check(s.gte(0))), 0),
    }),
  );

  export class UploadGetListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Upload400Error1", ApiV1Upload400Error1>
      | Declared<"apiV1Upload401Error1", ApiV1Upload401Error1>
      | Declared<"apiV1Upload403Error1", ApiV1Upload403Error1>
      | Declared<"apiV1Upload404Error1", ApiV1Upload404Error1>
      | Declared<"apiV1Upload429Error1", ApiV1Upload429Error1>
      | Declared<"apiV1Upload500Error1", ApiV1Upload500Error1>
      | Declared<"apiV1Upload502Error1", ApiV1Upload502Error1>
      | Declared<"apiV1Upload503Error1", ApiV1Upload503Error1>
      | Declared<"apiV1Upload504Error1", ApiV1Upload504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadGetListError> = [
      { on: 400, kind: "apiV1Upload400Error1", decode: { kind: "json", schema: apiV1Upload400Error1Schema } },
      { on: 401, kind: "apiV1Upload401Error1", decode: { kind: "json", schema: apiV1Upload401Error1Schema } },
      { on: 403, kind: "apiV1Upload403Error1", decode: { kind: "json", schema: apiV1Upload403Error1Schema } },
      { on: 404, kind: "apiV1Upload404Error1", decode: { kind: "json", schema: apiV1Upload404Error1Schema } },
      { on: 429, kind: "apiV1Upload429Error1", decode: { kind: "json", schema: apiV1Upload429Error1Schema } },
      { on: 500, kind: "apiV1Upload500Error1", decode: { kind: "json", schema: apiV1Upload500Error1Schema } },
      { on: 502, kind: "apiV1Upload502Error1", decode: { kind: "json", schema: apiV1Upload502Error1Schema } },
      { on: 503, kind: "apiV1Upload503Error1", decode: { kind: "json", schema: apiV1Upload503Error1Schema } },
      { on: 504, kind: "apiV1Upload504Error1", decode: { kind: "json", schema: apiV1Upload504Error1Schema } },
    ];
  }

  export type UploadInitLargeUploadRequest = {
    /** Body */
    body?: ApiV1UploadInitRequest;
  };

  export class UploadInitLargeUploadError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1UploadInit400Error1", ApiV1UploadInit400Error1>
      | Declared<"apiV1UploadInit401Error1", ApiV1UploadInit401Error1>
      | Declared<"apiV1UploadInit403Error1", ApiV1UploadInit403Error1>
      | Declared<"apiV1UploadInit404Error1", ApiV1UploadInit404Error1>
      | Declared<"apiV1UploadInit429Error1", ApiV1UploadInit429Error1>
      | Declared<"apiV1UploadInit500Error1", ApiV1UploadInit500Error1>
      | Declared<"apiV1UploadInit502Error1", ApiV1UploadInit502Error1>
      | Declared<"apiV1UploadInit503Error1", ApiV1UploadInit503Error1>
      | Declared<"apiV1UploadInit504Error1", ApiV1UploadInit504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadInitLargeUploadError> = [
      {
        on: 400,
        kind: "apiV1UploadInit400Error1",
        decode: { kind: "json", schema: apiV1UploadInit400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1UploadInit401Error1",
        decode: { kind: "json", schema: apiV1UploadInit401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1UploadInit403Error1",
        decode: { kind: "json", schema: apiV1UploadInit403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1UploadInit404Error1",
        decode: { kind: "json", schema: apiV1UploadInit404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1UploadInit429Error1",
        decode: { kind: "json", schema: apiV1UploadInit429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1UploadInit500Error1",
        decode: { kind: "json", schema: apiV1UploadInit500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1UploadInit502Error1",
        decode: { kind: "json", schema: apiV1UploadInit502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1UploadInit503Error1",
        decode: { kind: "json", schema: apiV1UploadInit503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1UploadInit504Error1",
        decode: { kind: "json", schema: apiV1UploadInit504Error1Schema },
      },
    ];
  }

  export type UploadInitMultipartUploadRequest = {
    /** Body */
    body?: ApiV1UploadMultipartInitRequest;
  };

  export class UploadInitMultipartUploadError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1UploadMultipartInit400Error1", ApiV1UploadMultipartInit400Error1>
      | Declared<"apiV1UploadMultipartInit401Error1", ApiV1UploadMultipartInit401Error1>
      | Declared<"apiV1UploadMultipartInit403Error1", ApiV1UploadMultipartInit403Error1>
      | Declared<"apiV1UploadMultipartInit404Error1", ApiV1UploadMultipartInit404Error1>
      | Declared<"apiV1UploadMultipartInit429Error1", ApiV1UploadMultipartInit429Error1>
      | Declared<"apiV1UploadMultipartInit500Error1", ApiV1UploadMultipartInit500Error1>
      | Declared<"apiV1UploadMultipartInit502Error1", ApiV1UploadMultipartInit502Error1>
      | Declared<"apiV1UploadMultipartInit503Error1", ApiV1UploadMultipartInit503Error1>
      | Declared<"apiV1UploadMultipartInit504Error1", ApiV1UploadMultipartInit504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadInitMultipartUploadError> = [
      {
        on: 400,
        kind: "apiV1UploadMultipartInit400Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1UploadMultipartInit401Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1UploadMultipartInit403Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1UploadMultipartInit404Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1UploadMultipartInit429Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1UploadMultipartInit500Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1UploadMultipartInit502Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1UploadMultipartInit503Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1UploadMultipartInit504Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartInit504Error1Schema },
      },
    ];
  }

  export type UploadSignMultipartPartsRequest = {
    /** Body */
    body?: ApiV1UploadMultipartSignRequest;
  };

  export class UploadSignMultipartPartsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1UploadMultipartSign400Error1", ApiV1UploadMultipartSign400Error1>
      | Declared<"apiV1UploadMultipartSign401Error1", ApiV1UploadMultipartSign401Error1>
      | Declared<"apiV1UploadMultipartSign403Error1", ApiV1UploadMultipartSign403Error1>
      | Declared<"apiV1UploadMultipartSign404Error1", ApiV1UploadMultipartSign404Error1>
      | Declared<"apiV1UploadMultipartSign429Error1", ApiV1UploadMultipartSign429Error1>
      | Declared<"apiV1UploadMultipartSign500Error1", ApiV1UploadMultipartSign500Error1>
      | Declared<"apiV1UploadMultipartSign502Error1", ApiV1UploadMultipartSign502Error1>
      | Declared<"apiV1UploadMultipartSign503Error1", ApiV1UploadMultipartSign503Error1>
      | Declared<"apiV1UploadMultipartSign504Error1", ApiV1UploadMultipartSign504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadSignMultipartPartsError> = [
      {
        on: 400,
        kind: "apiV1UploadMultipartSign400Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1UploadMultipartSign401Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1UploadMultipartSign403Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1UploadMultipartSign404Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1UploadMultipartSign429Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1UploadMultipartSign500Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1UploadMultipartSign502Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1UploadMultipartSign503Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1UploadMultipartSign504Error1",
        decode: { kind: "json", schema: apiV1UploadMultipartSign504Error1Schema },
      },
    ];
  }
}
