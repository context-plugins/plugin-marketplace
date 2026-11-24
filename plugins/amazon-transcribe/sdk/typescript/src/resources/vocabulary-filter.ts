import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonTranscribeServiceVocabularyFilterApiSchema,
  type XAmzTargetAmazonTranscribeServiceVocabularyFilterApi,
} from "../models/xamz-target-amazon-transcribe-service-vocabulary-filter-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceVocabularyFilterApiSchema,
  type XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi,
} from "../models/xamz-target1-amazon-transcribe-service-vocabulary-filter-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceVocabularyFilterApiSchema,
  type XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi,
} from "../models/xamz-target2-amazon-transcribe-service-vocabulary-filter-api.js";
import {
  xAmzTarget3AmazonTranscribeServiceVocabularyFilterApiSchema,
  type XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi,
} from "../models/xamz-target3-amazon-transcribe-service-vocabulary-filter-api.js";
import {
  xAmzTarget4AmazonTranscribeServiceVocabularyFilterApiSchema,
  type XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi,
} from "../models/xamz-target4-amazon-transcribe-service-vocabulary-filter-api.js";
import type { Servers } from "../servers.js";

export class VocabularyFilter {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Vocabulary Filter
   *
   * @remarks
   * Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete,
   * or flag specific words from your transcript. Custom vocabulary filters are commonly used to
   * mask profanity in transcripts. Each language has a character set that contains all allowed
   * characters for that specific language. If you use unsupported characters, your custom
   * vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the
   * character set for your language. For more information, see Vocabulary filtering.
   *
   * @returns Success
   *
   * @throws {@link VocabularyFilter.CreateVocabularyFilterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createVocabularyFilter(
    request: VocabularyFilter.CreateVocabularyFilterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, VocabularyFilter.CreateVocabularyFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateVocabularyFilter"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceVocabularyFilterApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VocabularyFilter.CreateVocabularyFilterError,
      },
      options,
    );
  }

  /**
   * Delete Vocabulary Filter
   *
   * @remarks
   * Deletes a custom vocabulary filter. To use this operation, specify the name of the custom
   * vocabulary filter you want to delete using VocabularyFilterName. Custom vocabulary filter names
   * are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link VocabularyFilter.DeleteVocabularyFilterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteVocabularyFilter(
    request: VocabularyFilter.DeleteVocabularyFilterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, VocabularyFilter.DeleteVocabularyFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteVocabularyFilter"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceVocabularyFilterApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VocabularyFilter.DeleteVocabularyFilterError,
      },
      options,
    );
  }

  /**
   * Get Vocabulary Filter
   *
   * @remarks
   * Provides information about the specified custom vocabulary filter. To get a list of your custom
   * vocabulary filters, use the operation.
   *
   * @returns Success
   *
   * @throws {@link VocabularyFilter.GetVocabularyFilterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVocabularyFilter(
    request: VocabularyFilter.GetVocabularyFilterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, VocabularyFilter.GetVocabularyFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetVocabularyFilter"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceVocabularyFilterApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VocabularyFilter.GetVocabularyFilterError,
      },
      options,
    );
  }

  /**
   * List Vocabulary Filters
   *
   * @remarks
   * Provides a list of custom vocabulary filters that match the specified criteria. If no criteria
   * are specified, all custom vocabularies are returned. To get detailed information about a
   * specific custom vocabulary filter, use the operation.
   *
   * @returns Success
   *
   * @throws {@link VocabularyFilter.ListVocabularyFiltersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVocabularyFilters(
    request: VocabularyFilter.ListVocabularyFiltersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, VocabularyFilter.ListVocabularyFiltersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListVocabularyFilters"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonTranscribeServiceVocabularyFilterApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VocabularyFilter.ListVocabularyFiltersError,
      },
      options,
    );
  }

  /**
   * Update Vocabulary Filter
   *
   * @remarks
   * Updates an existing custom vocabulary filter with a new list of words. The new list you provide
   * overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary
   * filter. You must include either Words or VocabularyFilterFileUri in your request.
   *
   * @returns Success
   *
   * @throws {@link VocabularyFilter.UpdateVocabularyFilterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateVocabularyFilter(
    request: VocabularyFilter.UpdateVocabularyFilterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, VocabularyFilter.UpdateVocabularyFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateVocabularyFilter"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonTranscribeServiceVocabularyFilterApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VocabularyFilter.UpdateVocabularyFilterError,
      },
      options,
    );
  }
}

export namespace VocabularyFilter {
  export type CreateVocabularyFilterRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceVocabularyFilterApi;
  };

  export class CreateVocabularyFilterError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVocabularyFilterError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteVocabularyFilterRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi;
  };

  export class DeleteVocabularyFilterError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVocabularyFilterError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetVocabularyFilterRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi;
  };

  export class GetVocabularyFilterError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVocabularyFilterError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListVocabularyFiltersRequestParams = {
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi;
  };

  export class ListVocabularyFiltersError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListVocabularyFiltersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateVocabularyFilterRequestParams = {
    xAmzTarget: XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi;
  };

  export class UpdateVocabularyFilterError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVocabularyFilterError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
