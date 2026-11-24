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
  createResolverResponseSchema,
  type CreateResolverResponse,
} from "../models/create-resolver-response.js";
import { getResolverResponseSchema, type GetResolverResponse } from "../models/get-resolver-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  listResolversByFunctionResponseSchema,
  type ListResolversByFunctionResponse,
} from "../models/list-resolvers-by-function-response.js";
import {
  listResolversResponseSchema,
  type ListResolversResponse,
} from "../models/list-resolvers-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import {
  updateResolverResponseSchema,
  type UpdateResolverResponse,
} from "../models/update-resolver-response.js";
import {
  v1ApisTypesResolversFieldNameRequestSchema,
  type V1ApisTypesResolversFieldNameRequest,
} from "../models/v1-apis-types-resolvers-field-name-request.js";
import {
  v1ApisTypesResolversRequestSchema,
  type V1ApisTypesResolversRequest,
} from "../models/v1-apis-types-resolvers-request.js";
import type { Servers } from "../servers.js";

export class Resolvers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Resolver
   *
   * @remarks
   * Creates a Resolver object. A resolver converts incoming requests into a format that a data
   * source can understand, and converts the data source's responses into GraphQL.
   *
   * @returns Success
   *
   * @throws {@link Resolvers.CreateResolverError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createResolver(
    request: Resolvers.CreateResolverRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResolverResponse, Resolvers.CreateResolverError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types/{typeName}/resolvers"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "typeName", value: request.typeName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisTypesResolversRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createResolverResponseSchema },
        errorFactory: Resolvers.CreateResolverError,
      },
      options,
    );
  }

  /**
   * Delete Resolver
   *
   * @remarks
   * Deletes a Resolver object.
   *
   * @returns Success
   *
   * @throws {@link Resolvers.DeleteResolverError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteResolver(
    request: Resolvers.DeleteResolverRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Resolvers.DeleteResolverError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "typeName", value: request.typeName, schema: s.string() },
          { name: "fieldName", value: request.fieldName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Resolvers.DeleteResolverError,
      },
      options,
    );
  }

  /**
   * Get Resolver
   *
   * @remarks
   * Retrieves a Resolver object.
   *
   * @returns Success
   *
   * @throws {@link Resolvers.GetResolverError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getResolver(
    request: Resolvers.GetResolverRequest,
    options?: RequestOptions,
  ): ApiPromise<GetResolverResponse, Resolvers.GetResolverError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "typeName", value: request.typeName, schema: s.string() },
          { name: "fieldName", value: request.fieldName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getResolverResponseSchema },
        errorFactory: Resolvers.GetResolverError,
      },
      options,
    );
  }

  /**
   * List Resolvers
   *
   * @remarks
   * Lists the resolvers for a given API and type.
   *
   * @returns Success
   *
   * @throws {@link Resolvers.ListResolversError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listResolvers(
    request: Resolvers.ListResolversRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResolversResponse, Resolvers.ListResolversError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types/{typeName}/resolvers"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "typeName", value: request.typeName, schema: s.string() },
        ],
        query: [
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResolversResponseSchema },
        errorFactory: Resolvers.ListResolversError,
      },
      options,
    );
  }

  /**
   * List Resolvers By Function
   *
   * @remarks
   * List the resolvers that are associated with a specific function.
   *
   * @returns Success
   *
   * @throws {@link Resolvers.ListResolversByFunctionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listResolversByFunction(
    request: Resolvers.ListResolversByFunctionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResolversByFunctionResponse, Resolvers.ListResolversByFunctionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/functions/{functionId}/resolvers"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "functionId", value: request.functionId, schema: s.string() },
        ],
        query: [
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResolversByFunctionResponseSchema },
        errorFactory: Resolvers.ListResolversByFunctionError,
      },
      options,
    );
  }

  /**
   * Update Resolver
   *
   * @remarks
   * Updates a Resolver object.
   *
   * @returns Success
   *
   * @throws {@link Resolvers.UpdateResolverError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateResolver(
    request: Resolvers.UpdateResolverRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateResolverResponse, Resolvers.UpdateResolverError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "typeName", value: request.typeName, schema: s.string() },
          { name: "fieldName", value: request.fieldName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisTypesResolversFieldNameRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateResolverResponseSchema },
        errorFactory: Resolvers.UpdateResolverError,
      },
      options,
    );
  }
}

export namespace Resolvers {
  export type CreateResolverRequest = {
    /** The ID for the GraphQL API for which the resolver is being created. */
    apiId: string;
    /** The name of the Type. */
    typeName: string;
    body?: V1ApisTypesResolversRequest;
  };

  export class CreateResolverError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateResolverError> = [
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

  export type DeleteResolverRequest = {
    /** The API ID. */
    apiId: string;
    /** The name of the resolver type. */
    typeName: string;
    /** The resolver field name. */
    fieldName: string;
  };

  export class DeleteResolverError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResolverError> = [
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

  export type GetResolverRequest = {
    /** The API ID. */
    apiId: string;
    /** The resolver type name. */
    typeName: string;
    /** The resolver field name. */
    fieldName: string;
  };

  export class GetResolverError extends ApiError {
    declare readonly payload:
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResolverError> = [
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

  export type ListResolversRequest = {
    /** The API ID. */
    apiId: string;
    /** The type name. */
    typeName: string;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListResolversError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResolversError> = [
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

  export type ListResolversByFunctionRequest = {
    /** The API ID. */
    apiId: string;
    /** The function ID. */
    functionId: string;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListResolversByFunctionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResolversByFunctionError> = [
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

  export type UpdateResolverRequest = {
    /** The API ID. */
    apiId: string;
    /** The new type name. */
    typeName: string;
    /** The new field name. */
    fieldName: string;
    body?: V1ApisTypesResolversFieldNameRequest;
  };

  export class UpdateResolverError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateResolverError> = [
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
