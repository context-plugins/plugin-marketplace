import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  fileGetDownloadUrlResponseSchema,
  type FileGetDownloadUrlResponse,
} from "../models/file-get-download-url-response.js";
import { fileInfoSchema, type FileInfo } from "../models/file-info.js";
import {
  fileInitUploadRequestSchema,
  type FileInitUploadRequest,
} from "../models/file-init-upload-request.js";
import {
  fileInitUploadResponseSchema,
  type FileInitUploadResponse,
} from "../models/file-init-upload-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class File {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Complete file upload
   *
   * @remarks
   * Complete file upload.
   *
   * @returns Successful Response
   *
   * @throws {@link File.CompleteUploadError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  completeUpload(
    request: File.CompleteUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, File.CompleteUploadError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/beta/file/{file_id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "file_id", value: request.fileId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: File.CompleteUploadError,
      },
      options,
    );
  }

  /**
   * Get file download URL
   *
   * @remarks
   * Get file download URL.
   *
   * @returns OK
   *
   * @throws {@link File.GetDownloadUrlError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getDownloadUrl(
    request: File.GetDownloadUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<FileGetDownloadUrlResponse, File.GetDownloadUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/file/{file_id}/download_url"),
        auth: this.#auth.token,
        pathParams: [{ name: "file_id", value: request.fileId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fileGetDownloadUrlResponseSchema },
        errorFactory: File.GetDownloadUrlError,
      },
      options,
    );
  }

  /**
   * Get file info
   *
   * @remarks
   * Get file info.
   *
   * @returns OK
   *
   * @throws {@link File.GetInfoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getInfo(request: File.GetInfoRequest, options?: RequestOptions): ApiPromise<FileInfo, File.GetInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/file/{file_id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "file_id", value: request.fileId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fileInfoSchema },
        errorFactory: File.GetInfoError,
      },
      options,
    );
  }

  /**
   * Initiate file upload
   *
   * @remarks
   * Initiate file upload.
   *
   * @returns OK - File is already uploaded.
   *
   * @throws {@link File.InitUploadError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  initUpload(
    request: File.InitUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<FileInitUploadResponse, File.InitUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/file"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: fileInitUploadRequestSchema },
      },
      {
        success: { kind: "json", schema: fileInitUploadResponseSchema },
        errorFactory: File.InitUploadError,
      },
      options,
    );
  }
}

export namespace File {
  export type CompleteUploadRequest = {
    /** File ID. */
    fileId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class CompleteUploadError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CompleteUploadError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetDownloadUrlRequest = {
    /** File ID. */
    fileId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class GetDownloadUrlError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetDownloadUrlError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetInfoRequest = {
    /** File ID. */
    fileId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class GetInfoError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetInfoError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InitUploadRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: FileInitUploadRequest;
  };

  export class InitUploadError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InitUploadError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
