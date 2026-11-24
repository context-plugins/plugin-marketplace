import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  concurrentModificationExceptionSchema,
  type ConcurrentModificationException,
} from "../models/concurrent-modification-exception.js";
import {
  createFunctionResponseSchema,
  type CreateFunctionResponse,
} from "../models/create-function-response.js";
import { getFunctionResponseSchema, type GetFunctionResponse } from "../models/get-function-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  listFunctionsResponseSchema,
  type ListFunctionsResponse,
} from "../models/list-functions-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import {
  updateFunctionResponseSchema,
  type UpdateFunctionResponse,
} from "../models/update-function-response.js";
import {
  v1ApisFunctionsRequestSchema,
  type V1ApisFunctionsRequest,
} from "../models/v1-apis-functions-request.js";
import {
  v1ApisFunctionsRequest1Schema,
  type V1ApisFunctionsRequest1,
} from "../models/v1-apis-functions-request1.js";
import type { Servers } from "../servers.js";

export class Functions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Function
   *
   * @remarks
   * Creates a Function object. A function is a reusable entity. You can use multiple functions to
   * compose the resolver logic.
   *
   * @returns Success
   *
   * @throws {@link Functions.CreateFunctionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFunction(
    request: Functions.CreateFunctionRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateFunctionResponse, Functions.CreateFunctionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/functions"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisFunctionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createFunctionResponseSchema },
        errorFactory: Functions.CreateFunctionError,
      },
      options,
    );
  }

  /**
   * Delete Function
   *
   * @remarks
   * Deletes a Function.
   *
   * @returns Success
   *
   * @throws {@link Functions.DeleteFunctionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFunction(
    request: Functions.DeleteFunctionRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Functions.DeleteFunctionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/functions/{functionId}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "functionId", value: request.functionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Functions.DeleteFunctionError,
      },
      options,
    );
  }

  /**
   * Get Function
   *
   * @remarks
   * Get a Function.
   *
   * @returns Success
   *
   * @throws {@link Functions.GetFunctionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFunction(
    request: Functions.GetFunctionRequest,
    options?: RequestOptions,
  ): ApiPromise<GetFunctionResponse, Functions.GetFunctionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/functions/{functionId}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "functionId", value: request.functionId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getFunctionResponseSchema },
        errorFactory: Functions.GetFunctionError,
      },
      options,
    );
  }

  /**
   * List Functions
   *
   * @remarks
   * List multiple functions.
   *
   * @returns Success
   *
   * @throws {@link Functions.ListFunctionsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFunctions(
    request: Functions.ListFunctionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFunctionsResponse, Functions.ListFunctionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/functions"),
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
        success: { kind: "json", schema: listFunctionsResponseSchema },
        errorFactory: Functions.ListFunctionsError,
      },
      options,
    );
  }

  /**
   * Update Function
   *
   * @remarks
   * Updates a Function object.
   *
   * @returns Success
   *
   * @throws {@link Functions.UpdateFunctionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFunction(
    request: Functions.UpdateFunctionRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateFunctionResponse, Functions.UpdateFunctionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/functions/{functionId}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "functionId", value: request.functionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisFunctionsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: updateFunctionResponseSchema },
        errorFactory: Functions.UpdateFunctionError,
      },
      options,
    );
  }
}

export namespace Functions {
  export type CreateFunctionRequest = {
    /** The GraphQL API ID. */
    apiId: string;
    body?: V1ApisFunctionsRequest;
  };

  export class CreateFunctionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFunctionError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
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

  export type DeleteFunctionRequest = {
    /** The GraphQL API ID. */
    apiId: string;
    /** The Function ID. */
    functionId: string;
  };

  export class DeleteFunctionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFunctionError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
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

  export type GetFunctionRequest = {
    /** The GraphQL API ID. */
    apiId: string;
    /** The Function ID. */
    functionId: string;
  };

  export class GetFunctionError extends ApiError {
    declare readonly payload:
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFunctionError> = [
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type ListFunctionsRequest = {
    /** The GraphQL API ID. */
    apiId: string;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListFunctionsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFunctionsError> = [
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

  export type UpdateFunctionRequest = {
    /** The GraphQL API ID. */
    apiId: string;
    /** The function ID. */
    functionId: string;
    body?: V1ApisFunctionsRequest1;
  };

  export class UpdateFunctionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFunctionError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
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
}
