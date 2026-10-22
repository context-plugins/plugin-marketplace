import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { dictionaryMetadataSchema, type DictionaryMetadata } from "../models/dictionary-metadata.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  pronunciationOverridesDictionarySchema,
  type PronunciationOverridesDictionary,
} from "../models/pronunciation-overrides-dictionary.js";
import {
  pronunciationsCsvUploadResponseSchema,
  type PronunciationsCsvUploadResponse,
} from "../models/pronunciations-csv-upload-response.js";
import type { Servers } from "../servers.js";

export class Pronunciations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Pronunciations Dictionary
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pronunciationsDeleteCsv(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/pronunciations/csv"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download Pronunciations Csv
   *
   * @returns File content
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pronunciationsDownloadCsv(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/pronunciations/csv"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Pronunciations Dictionary
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pronunciationsGet(options?: RequestOptions): ApiPromise<PronunciationOverridesDictionary, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/pronunciations"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pronunciationOverridesDictionarySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Pronunciations Metadata
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pronunciationsGetMetadata(options?: RequestOptions): ApiPromise<DictionaryMetadata, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/pronunciations/metadata"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dictionaryMetadataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Upload Pronunciations Csv
   *
   * @returns Successful Response
   *
   * @throws {@link Pronunciations.PronunciationsUploadCsvError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pronunciationsUploadCsv(
    request: Pronunciations.PronunciationsUploadCsvRequest,
    options?: RequestOptions,
  ): ApiPromise<PronunciationsCsvUploadResponse, Pronunciations.PronunciationsUploadCsvError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/pronunciations/csv"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: pronunciationsCsvUploadResponseSchema },
        errorFactory: Pronunciations.PronunciationsUploadCsvError,
      },
      options,
    );
  }
}

export namespace Pronunciations {
  export type PronunciationsUploadCsvRequest = {
    /** CSV file containing pronunciation overrides */
    file: FileInput;
  };

  export class PronunciationsUploadCsvError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<PronunciationsUploadCsvError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
