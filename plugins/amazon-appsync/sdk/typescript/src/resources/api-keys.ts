import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiKeyLimitExceededExceptionSchema,
  type ApiKeyLimitExceededException,
} from "../models/api-key-limit-exceeded-exception.js";
import {
  apiKeyValidityOutOfBoundsExceptionSchema,
  type ApiKeyValidityOutOfBoundsException,
} from "../models/api-key-validity-out-of-bounds-exception.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import { createApiKeyResponseSchema, type CreateApiKeyResponse } from "../models/create-api-key-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import { listApiKeysResponseSchema, type ListApiKeysResponse } from "../models/list-api-keys-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import { updateApiKeyResponseSchema, type UpdateApiKeyResponse } from "../models/update-api-key-response.js";
import { v1ApisApikeysRequestSchema, type V1ApisApikeysRequest } from "../models/v1-apis-apikeys-request.js";
import {
  v1ApisApikeysRequest1Schema,
  type V1ApisApikeysRequest1,
} from "../models/v1-apis-apikeys-request1.js";
import type { Servers } from "../servers.js";

export class ApiKeys {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Api Key
   *
   * @remarks
   * Creates a unique key that you can distribute to clients who invoke your API.
   *
   * @returns Success
   *
   * @throws {@link ApiKeys.CreateApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createApiKey(
    request: ApiKeys.CreateApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateApiKeyResponse, ApiKeys.CreateApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/apikeys"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisApikeysRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createApiKeyResponseSchema },
        errorFactory: ApiKeys.CreateApiKeyError,
      },
      options,
    );
  }

  /**
   * Delete Api Key
   *
   * @remarks
   * Deletes an API key.
   *
   * @returns Success
   *
   * @throws {@link ApiKeys.DeleteApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiKey(
    request: ApiKeys.DeleteApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiKeys.DeleteApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/apikeys/{id}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiKeys.DeleteApiKeyError,
      },
      options,
    );
  }

  /**
   * List Api Keys
   *
   * @remarks
   * Lists the API keys for a given API. API keys are deleted automatically 60 days after they
   * expire. However, they may still be included in the response until they have actually been
   * deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically
   * deleted.
   *
   * @returns Success
   *
   * @throws {@link ApiKeys.ListApiKeysError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listApiKeys(
    request: ApiKeys.ListApiKeysRequest,
    options?: RequestOptions,
  ): ApiPromise<ListApiKeysResponse, ApiKeys.ListApiKeysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/apikeys"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listApiKeysResponseSchema },
        errorFactory: ApiKeys.ListApiKeysError,
      },
      options,
    );
  }

  /**
   * Update Api Key
   *
   * @remarks
   * Updates an API key. You can update the key as long as it's not deleted.
   *
   * @returns Success
   *
   * @throws {@link ApiKeys.UpdateApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateApiKey(
    request: ApiKeys.UpdateApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateApiKeyResponse, ApiKeys.UpdateApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/apikeys/{id}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisApikeysRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: updateApiKeyResponseSchema },
        errorFactory: ApiKeys.UpdateApiKeyError,
      },
      options,
    );
  }
}

export namespace ApiKeys {
  export type CreateApiKeyRequest = {
    /** The ID for your GraphQL API. */
    apiId: string;
    body?: V1ApisApikeysRequest;
  };

  export class CreateApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"apiKeyLimitExceededException", ApiKeyLimitExceededException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateApiKeyError> = [
      {
        on: 400,
        kind: "apiKeyLimitExceededException",
        decode: { kind: "json", schema: apiKeyLimitExceededExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type DeleteApiKeyRequest = {
    /** The API ID. */
    apiId: string;
    /** The ID for the API key. */
    id: string;
  };

  export class DeleteApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiKeyError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type ListApiKeysRequest = {
    /** The API ID. */
    apiId: string;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListApiKeysError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListApiKeysError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type UpdateApiKeyRequest = {
    /** The ID for the GraphQL API. */
    apiId: string;
    /** The API key ID. */
    id: string;
    body?: V1ApisApikeysRequest1;
  };

  export class UpdateApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"apiKeyValidityOutOfBoundsException", ApiKeyValidityOutOfBoundsException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateApiKeyError> = [
      {
        on: 400,
        kind: "apiKeyValidityOutOfBoundsException",
        decode: { kind: "json", schema: apiKeyValidityOutOfBoundsExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }
}
