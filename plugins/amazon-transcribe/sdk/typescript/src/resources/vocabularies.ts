import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonTranscribeServiceVocabulariesApiSchema,
  type XAmzTargetAmazonTranscribeServiceVocabulariesApi,
} from "../models/xamz-target-amazon-transcribe-service-vocabularies-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceVocabulariesApiSchema,
  type XAmzTarget1AmazonTranscribeServiceVocabulariesApi,
} from "../models/xamz-target1-amazon-transcribe-service-vocabularies-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceVocabulariesApiSchema,
  type XAmzTarget2AmazonTranscribeServiceVocabulariesApi,
} from "../models/xamz-target2-amazon-transcribe-service-vocabularies-api.js";
import {
  xAmzTarget3AmazonTranscribeServiceVocabulariesApiSchema,
  type XAmzTarget3AmazonTranscribeServiceVocabulariesApi,
} from "../models/xamz-target3-amazon-transcribe-service-vocabularies-api.js";
import {
  xAmzTarget4AmazonTranscribeServiceVocabulariesApiSchema,
  type XAmzTarget4AmazonTranscribeServiceVocabulariesApi,
} from "../models/xamz-target4-amazon-transcribe-service-vocabularies-api.js";
import type { Servers } from "../servers.js";

export class Vocabularies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Vocabulary
   *
   * @remarks
   * Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a
   * text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and
   * include the URI in your request. Or you can include a list of terms directly in your request
   * using the Phrases flag. Each language has a character set that contains all allowed characters
   * for that specific language. If you use unsupported characters, your custom vocabulary request
   * fails. Refer to Character Sets for Custom Vocabularies to get the character set for your
   * language. For more information, see Custom vocabularies.
   *
   * @returns Success
   *
   * @throws {@link Vocabularies.CreateVocabularyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createVocabulary(
    request: Vocabularies.CreateVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Vocabularies.CreateVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateVocabulary"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceVocabulariesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Vocabularies.CreateVocabularyError,
      },
      options,
    );
  }

  /**
   * Delete Vocabulary
   *
   * @remarks
   * Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary
   * you want to delete using VocabularyName. Custom vocabulary names are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link Vocabularies.DeleteVocabularyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteVocabulary(
    request: Vocabularies.DeleteVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Vocabularies.DeleteVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteVocabulary"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceVocabulariesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Vocabularies.DeleteVocabularyError,
      },
      options,
    );
  }

  /**
   * Get Vocabulary
   *
   * @remarks
   * Provides information about the specified custom vocabulary. To view the status of the specified
   * custom vocabulary, check the VocabularyState field. If the status is READY, your custom
   * vocabulary is available to use. If the status is FAILED, FailureReason provides details on why
   * your custom vocabulary failed. To get a list of your custom vocabularies, use the operation.
   *
   * @returns Success
   *
   * @throws {@link Vocabularies.GetVocabularyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVocabulary(
    request: Vocabularies.GetVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Vocabularies.GetVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetVocabulary"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceVocabulariesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Vocabularies.GetVocabularyError,
      },
      options,
    );
  }

  /**
   * List Vocabularies
   *
   * @remarks
   * Provides a list of custom vocabularies that match the specified criteria. If no criteria are
   * specified, all custom vocabularies are returned. To get detailed information about a specific
   * custom vocabulary, use the operation.
   *
   * @returns Success
   *
   * @throws {@link Vocabularies.ListVocabulariesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVocabularies(
    request: Vocabularies.ListVocabulariesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Vocabularies.ListVocabulariesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListVocabularies"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonTranscribeServiceVocabulariesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Vocabularies.ListVocabulariesError,
      },
      options,
    );
  }

  /**
   * Update Vocabulary
   *
   * @remarks
   * Updates an existing custom vocabulary with new values. This operation overwrites all existing
   * information with your new values; you cannot append new terms onto an existing custom
   * vocabulary. Your custom vocabulary must be in a terminal state (READY or FAILED) before you can
   * update it. You must include either Phrases or VocabularyFileUri in your request.
   *
   * @returns Success
   *
   * @throws {@link Vocabularies.UpdateVocabularyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateVocabulary(
    request: Vocabularies.UpdateVocabularyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Vocabularies.UpdateVocabularyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateVocabulary"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonTranscribeServiceVocabulariesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Vocabularies.UpdateVocabularyError,
      },
      options,
    );
  }
}

export namespace Vocabularies {
  export type CreateVocabularyRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceVocabulariesApi;
  };

  export class CreateVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVocabularyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteVocabularyRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceVocabulariesApi;
  };

  export class DeleteVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVocabularyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetVocabularyRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceVocabulariesApi;
  };

  export class GetVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVocabularyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListVocabulariesRequestParams = {
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceVocabulariesApi;
  };

  export class ListVocabulariesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListVocabulariesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateVocabularyRequestParams = {
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceVocabulariesApi;
  };

  export class UpdateVocabularyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVocabularyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
