import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createTakeoutResponseSchema,
  type CreateTakeoutResponse,
} from "../models/create-takeout-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  takeoutStatusResponseSchema,
  type TakeoutStatusResponse,
} from "../models/takeout-status-response.js";
import type { Servers } from "../servers.js";

export class Takeouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Takeout
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  takeoutsCreate(options?: RequestOptions): ApiPromise<CreateTakeoutResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/takeouts/create"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createTakeoutResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Takeout
   *
   * @returns Successful Response
   *
   * @throws {@link Takeouts.TakeoutsGetByJobIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  takeoutsGetByJobId(
    request: Takeouts.TakeoutsGetByJobIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TakeoutStatusResponse, Takeouts.TakeoutsGetByJobIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/takeouts/get/{job_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: takeoutStatusResponseSchema },
        errorFactory: Takeouts.TakeoutsGetByJobIdError,
      },
      options,
    );
  }

  /**
   * Get File
   *
   * @returns File content
   *
   * @throws {@link Takeouts.TakeoutsGetFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  takeoutsGetFile(
    request: Takeouts.TakeoutsGetFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Takeouts.TakeoutsGetFileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/takeouts/get/{job_id}/file/{file_name}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [
          { name: "job_id", value: request.jobId, schema: s.string() },
          { name: "file_name", value: request.fileName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Takeouts.TakeoutsGetFileError,
      },
      options,
    );
  }
}

export namespace Takeouts {
  export type TakeoutsGetByJobIdRequest = {
    jobId: string;
  };

  export class TakeoutsGetByJobIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<TakeoutsGetByJobIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type TakeoutsGetFileRequest = {
    jobId: string;
    fileName: string;
  };

  export class TakeoutsGetFileError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<TakeoutsGetFileError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
