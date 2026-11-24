import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getRecordingsRequestInternalSchema,
  type GetRecordingsRequest,
} from "../models/get-recordings-request.js";
import { getUploadsRequestInternalSchema, type GetUploadsRequest } from "../models/get-uploads-request.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { recordingResponseSchema, type RecordingResponse } from "../models/recording-response.js";
import {
  recordingUploadRequestInternalSchema,
  type RecordingUploadRequest,
} from "../models/recording-upload-request.js";
import {
  recordingUploadResponseSchema,
  type RecordingUploadResponse,
} from "../models/recording-upload-response.js";
import {
  recordingUploadSubmitResponseSchema,
  type RecordingUploadSubmitResponse,
} from "../models/recording-upload-submit-response.js";
import {
  recordingUploadsListResponseSchema,
  type RecordingUploadsListResponse,
} from "../models/recording-uploads-list-response.js";
import {
  recordingsListResponseSchema,
  type RecordingsListResponse,
} from "../models/recordings-list-response.js";
import type { Servers } from "../servers.js";

/**
 * Access and manage meeting recordings. Retrieve individual recordings, list recordings with
 * filters and pagination, or delete recordings (privileged access required).
 */
export class Recordings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Recording
   *
   * @remarks
   * Delete a recording by its ID.
   *
   * **Super Admin Access Required**: This endpoint is restricted to API keys with privileged
   * access. Only users with super admin privileges can delete recordings through the API.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiDeleteRecording(
    request: Recordings.AppsDeveloperApiApiDeleteRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/recording/{recording_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "recording_id", value: request.recordingId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve Recording
   *
   * @remarks
   * Retrieve a recording by its ID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetRecordingById(
    request: Recordings.AppsDeveloperApiApiGetRecordingByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/recording/{recording_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "recording_id", value: request.recordingId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recordingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Recordings
   *
   * @remarks
   * List recordings with optional filters and pagination.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetRecordings(
    request: Recordings.AppsDeveloperApiApiGetRecordingsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordingsListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/recordings"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getRecordingsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: recordingsListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve Upload
   *
   * @remarks
   * Retrieve a single API-uploaded recording with its import status.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetUploadById(
    request: Recordings.AppsDeveloperApiApiGetUploadByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordingUploadResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/recordings/upload/{recording_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "recording_id", value: request.recordingId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recordingUploadResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Uploads
   *
   * @remarks
   * List API-uploaded recordings with their import status, with optional filters and pagination.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiListUploads(
    request: Recordings.AppsDeveloperApiApiListUploadsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordingUploadsListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/recordings/upload/list"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getUploadsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: recordingUploadsListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Upload Recording
   *
   * @remarks
   * Upload a recording from a URL.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiUploadRecording(
    request: Recordings.AppsDeveloperApiApiUploadRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordingUploadSubmitResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/recordings/upload"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recordingUploadRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: recordingUploadSubmitResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Recordings {
  export type AppsDeveloperApiApiDeleteRecordingRequest = {
    recordingId: string;
  };

  export type AppsDeveloperApiApiGetRecordingByIdRequest = {
    recordingId: string;
  };

  export type AppsDeveloperApiApiGetRecordingsRequest = {
    body: GetRecordingsRequest;
  };

  export type AppsDeveloperApiApiGetUploadByIdRequest = {
    recordingId: string;
  };

  export type AppsDeveloperApiApiListUploadsRequest = {
    body: GetUploadsRequest;
  };

  export type AppsDeveloperApiApiUploadRecordingRequest = {
    body: RecordingUploadRequest;
  };
}
