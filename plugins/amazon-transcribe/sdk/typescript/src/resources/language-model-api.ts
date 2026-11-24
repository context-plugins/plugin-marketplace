import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonTranscribeServiceLanguageModelApiSchema,
  type XAmzTargetAmazonTranscribeServiceLanguageModelApi,
} from "../models/xamz-target-amazon-transcribe-service-language-model-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceLanguageModelApiSchema,
  type XAmzTarget1AmazonTranscribeServiceLanguageModelApi,
} from "../models/xamz-target1-amazon-transcribe-service-language-model-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceLanguageModelApiSchema,
  type XAmzTarget2AmazonTranscribeServiceLanguageModelApi,
} from "../models/xamz-target2-amazon-transcribe-service-language-model-api.js";
import {
  xAmzTarget3AmazonTranscribeServiceLanguageModelApiSchema,
  type XAmzTarget3AmazonTranscribeServiceLanguageModelApi,
} from "../models/xamz-target3-amazon-transcribe-service-language-model-api.js";
import {
  xAmzTarget4AmazonTranscribeServiceLanguageModelApiSchema,
  type XAmzTarget4AmazonTranscribeServiceLanguageModelApi,
} from "../models/xamz-target4-amazon-transcribe-service-language-model-api.js";
import type { Servers } from "../servers.js";

export class LanguageModelApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Language Model
   *
   * @remarks
   * Creates a new custom language model. When creating a new custom language model, you must
   * specify: If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample
   * rates under 16,000 Hz) base model The location of your training and tuning files (this must be
   * an Amazon S3 URI) The language of your model A unique name for your model
   *
   * @returns Success
   *
   * @throws {@link LanguageModelApi.CreateLanguageModelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createLanguageModel(
    request: LanguageModelApi.CreateLanguageModelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, LanguageModelApi.CreateLanguageModelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateLanguageModel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceLanguageModelApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LanguageModelApi.CreateLanguageModelError,
      },
      options,
    );
  }

  /**
   * Delete Language Model
   *
   * @remarks
   * Deletes a custom language model. To use this operation, specify the name of the language model
   * you want to delete using ModelName. custom language model names are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link LanguageModelApi.DeleteLanguageModelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteLanguageModel(
    request: LanguageModelApi.DeleteLanguageModelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, LanguageModelApi.DeleteLanguageModelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteLanguageModel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceLanguageModelApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LanguageModelApi.DeleteLanguageModelError,
      },
      options,
    );
  }

  /**
   * Describe Language Model
   *
   * @remarks
   * Provides information about the specified custom language model. This operation also shows if
   * the base language model that you used to create your custom language model has been updated. If
   * Amazon Transcribe has updated the base model, you can create a new custom language model using
   * the updated base model. If you tried to create a new custom language model and the request
   * wasn't successful, you can use DescribeLanguageModel to help identify the reason for this
   * failure.
   *
   * @returns Success
   *
   * @throws {@link LanguageModelApi.DescribeLanguageModelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeLanguageModel(
    request: LanguageModelApi.DescribeLanguageModelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, LanguageModelApi.DescribeLanguageModelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeLanguageModel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceLanguageModelApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LanguageModelApi.DescribeLanguageModelError,
      },
      options,
    );
  }

  /**
   * List Language Models
   *
   * @remarks
   * Provides a list of custom language models that match the specified criteria. If no criteria are
   * specified, all custom language models are returned. To get detailed information about a
   * specific custom language model, use the operation.
   *
   * @returns Success
   *
   * @throws {@link LanguageModelApi.ListLanguageModelsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listLanguageModels(
    request: LanguageModelApi.ListLanguageModelsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, LanguageModelApi.ListLanguageModelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListLanguageModels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonTranscribeServiceLanguageModelApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LanguageModelApi.ListLanguageModelsError,
      },
      options,
    );
  }

  /**
   * Update Language Model
   *
   * @remarks
   * Updates the encryption configuration for an existing custom language model. You can use this
   * operation to change the KMS key used to encrypt your model artifacts. The model artifacts are
   * re-encrypted in place. No model training is required. Your custom language model must not be in
   * the IN_PROGRESS state when you call this operation. You cannot submit another update while a
   * previous update is in progress. Use to check the current state of your model. Your custom
   * language model remains available for transcription jobs while the update is being processed.
   *
   * @returns Success
   *
   * @throws {@link LanguageModelApi.UpdateLanguageModelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateLanguageModel(
    request: LanguageModelApi.UpdateLanguageModelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, LanguageModelApi.UpdateLanguageModelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateLanguageModel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonTranscribeServiceLanguageModelApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LanguageModelApi.UpdateLanguageModelError,
      },
      options,
    );
  }
}

export namespace LanguageModelApi {
  export type CreateLanguageModelRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceLanguageModelApi;
  };

  export class CreateLanguageModelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLanguageModelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteLanguageModelRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceLanguageModelApi;
  };

  export class DeleteLanguageModelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLanguageModelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeLanguageModelRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceLanguageModelApi;
  };

  export class DescribeLanguageModelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeLanguageModelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListLanguageModelsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceLanguageModelApi;
  };

  export class ListLanguageModelsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLanguageModelsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateLanguageModelRequestParams = {
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceLanguageModelApi;
  };

  export class UpdateLanguageModelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLanguageModelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
