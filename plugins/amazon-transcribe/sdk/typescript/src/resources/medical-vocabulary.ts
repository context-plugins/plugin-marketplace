import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonTranscribeServiceMedicalVocabularyApiSchema,
  type XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi,
} from "../models/xamz-target-amazon-transcribe-service-medical-vocabulary-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiSchema,
  type XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi,
} from "../models/xamz-target1-amazon-transcribe-service-medical-vocabulary-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiSchema,
  type XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi,
} from "../models/xamz-target2-amazon-transcribe-service-medical-vocabulary-api.js";
import {
  xAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiSchema,
  type XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi,
} from "../models/xamz-target3-amazon-transcribe-service-medical-vocabulary-api.js";
import {
  xAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiSchema,
  type XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi,
} from "../models/xamz-target4-amazon-transcribe-service-medical-vocabulary-api.js";
import type { Servers } from "../servers.js";

export class MedicalVocabulary {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Medical Vocabulary
   *
   * @remarks
   * Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you
   * must first upload a text file that contains your vocabulary table into an Amazon S3 bucket.
   * Note that this differs from , where you can include a list of terms within your request using
   * the Phrases flag; CreateMedicalVocabulary does not support the Phrases flag and only accepts
   * vocabularies in table format. Each language has a character set that contains all allowed
   * characters for that specific language. If you use unsupported characters, your custom
   * vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character
   * set for your language. For more information, see Custom vocabularies.
   *
   * @returns Success
   *
   * @throws {@link MedicalVocabulary.CreateMedicalVocabularyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createMedicalVocabulary(
    request: MedicalVocabulary.CreateMedicalVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalVocabulary.CreateMedicalVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateMedicalVocabulary"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceMedicalVocabularyApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalVocabulary.CreateMedicalVocabularyError,
      },
      options,
    );
  }

  /**
   * Delete Medical Vocabulary
   *
   * @remarks
   * Deletes a custom medical vocabulary. To use this operation, specify the name of the custom
   * vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link MedicalVocabulary.DeleteMedicalVocabularyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteMedicalVocabulary(
    request: MedicalVocabulary.DeleteMedicalVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalVocabulary.DeleteMedicalVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteMedicalVocabulary"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalVocabulary.DeleteMedicalVocabularyError,
      },
      options,
    );
  }

  /**
   * Get Medical Vocabulary
   *
   * @remarks
   * Provides information about the specified custom medical vocabulary. To view the status of the
   * specified custom medical vocabulary, check the VocabularyState field. If the status is READY,
   * your custom vocabulary is available to use. If the status is FAILED, FailureReason provides
   * details on why your vocabulary failed. To get a list of your custom medical vocabularies, use
   * the operation.
   *
   * @returns Success
   *
   * @throws {@link MedicalVocabulary.GetMedicalVocabularyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMedicalVocabulary(
    request: MedicalVocabulary.GetMedicalVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalVocabulary.GetMedicalVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetMedicalVocabulary"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalVocabulary.GetMedicalVocabularyError,
      },
      options,
    );
  }

  /**
   * List Medical Vocabularies
   *
   * @remarks
   * Provides a list of custom medical vocabularies that match the specified criteria. If no
   * criteria are specified, all custom medical vocabularies are returned. To get detailed
   * information about a specific custom medical vocabulary, use the operation.
   *
   * @returns Success
   *
   * @throws {@link MedicalVocabulary.ListMedicalVocabulariesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listMedicalVocabularies(
    request: MedicalVocabulary.ListMedicalVocabulariesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalVocabulary.ListMedicalVocabulariesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListMedicalVocabularies"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalVocabulary.ListMedicalVocabulariesError,
      },
      options,
    );
  }

  /**
   * Update Medical Vocabulary
   *
   * @remarks
   * Updates an existing custom medical vocabulary with new values. This operation overwrites all
   * existing information with your new values; you cannot append new terms onto an existing custom
   * vocabulary.
   *
   * @returns Success
   *
   * @throws {@link MedicalVocabulary.UpdateMedicalVocabularyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateMedicalVocabulary(
    request: MedicalVocabulary.UpdateMedicalVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalVocabulary.UpdateMedicalVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateMedicalVocabulary"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalVocabulary.UpdateMedicalVocabularyError,
      },
      options,
    );
  }
}

export namespace MedicalVocabulary {
  export type CreateMedicalVocabularyRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi;
  };

  export class CreateMedicalVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMedicalVocabularyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteMedicalVocabularyRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi;
  };

  export class DeleteMedicalVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMedicalVocabularyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetMedicalVocabularyRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi;
  };

  export class GetMedicalVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMedicalVocabularyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMedicalVocabulariesRequestParams = {
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi;
  };

  export class ListMedicalVocabulariesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMedicalVocabulariesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateMedicalVocabularyRequestParams = {
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi;
  };

  export class UpdateMedicalVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMedicalVocabularyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
