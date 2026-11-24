import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import {
  apiLimitExceededExceptionSchema,
  type ApiLimitExceededException,
} from "../models/api-limit-exceeded-exception.js";
import { apiType2Schema, type ApiType2 } from "../models/api-type2.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  concurrentModificationExceptionSchema,
  type ConcurrentModificationException,
} from "../models/concurrent-modification-exception.js";
import { createApiResponseSchema, type CreateApiResponse } from "../models/create-api-response.js";
import {
  createGraphqlApiResponseSchema,
  type CreateGraphqlApiResponse,
} from "../models/create-graphql-api-response.js";
import { getApiResponseSchema, type GetApiResponse } from "../models/get-api-response.js";
import {
  getGraphqlApiResponseSchema,
  type GetGraphqlApiResponse,
} from "../models/get-graphql-api-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import { listApisResponseSchema, type ListApisResponse } from "../models/list-apis-response.js";
import {
  listGraphqlApisResponseSchema,
  type ListGraphqlApisResponse,
} from "../models/list-graphql-apis-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import { ownerSchema, type Owner } from "../models/owner.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import { updateApiResponseSchema, type UpdateApiResponse } from "../models/update-api-response.js";
import {
  updateGraphqlApiResponseSchema,
  type UpdateGraphqlApiResponse,
} from "../models/update-graphql-api-response.js";
import { v1ApisRequestSchema, type V1ApisRequest } from "../models/v1-apis-request.js";
import { v1ApisRequest1Schema, type V1ApisRequest1 } from "../models/v1-apis-request1.js";
import { v2ApisRequestSchema, type V2ApisRequest } from "../models/v2-apis-request.js";
import { v2ApisRequest1Schema, type V2ApisRequest1 } from "../models/v2-apis-request1.js";
import type { Servers } from "../servers.js";

export class Apis {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Api
   *
   * @remarks
   * Creates an Api object. Use this operation to create an AppSync API with your preferred
   * configuration, such as an Event API that provides real-time message publishing and message
   * subscriptions over WebSockets.
   *
   * @returns Success
   *
   * @throws {@link Apis.CreateApiError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createApi(
    request: Apis.CreateApiRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreateApiResponse, Apis.CreateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/apis"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => v2ApisRequestSchema)) },
      },
      {
        success: { kind: "json", schema: createApiResponseSchema },
        errorFactory: Apis.CreateApiError,
      },
      options,
    );
  }

  /**
   * Create Graphql Api
   *
   * @remarks
   * Creates a GraphqlApi object.
   *
   * @returns Success
   *
   * @throws {@link Apis.CreateGraphqlApiError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGraphqlApi(
    request: Apis.CreateGraphqlApiRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreateGraphqlApiResponse, Apis.CreateGraphqlApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => v1ApisRequestSchema)) },
      },
      {
        success: { kind: "json", schema: createGraphqlApiResponseSchema },
        errorFactory: Apis.CreateGraphqlApiError,
      },
      options,
    );
  }

  /**
   * Delete Api
   *
   * @remarks
   * Deletes an Api object
   *
   * @returns Success
   *
   * @throws {@link Apis.DeleteApiError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApi(
    request: Apis.DeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Apis.DeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Apis.DeleteApiError,
      },
      options,
    );
  }

  /**
   * Delete Graphql Api
   *
   * @remarks
   * Deletes a GraphqlApi object.
   *
   * @returns Success
   *
   * @throws {@link Apis.DeleteGraphqlApiError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGraphqlApi(
    request: Apis.DeleteGraphqlApiRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Apis.DeleteGraphqlApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Apis.DeleteGraphqlApiError,
      },
      options,
    );
  }

  /**
   * Get Api
   *
   * @remarks
   * Retrieves an Api object.
   *
   * @returns Success
   *
   * @throws {@link Apis.GetApiError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApi(
    request: Apis.GetApiRequest,
    options?: RequestOptions,
  ): ApiPromise<GetApiResponse, Apis.GetApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getApiResponseSchema },
        errorFactory: Apis.GetApiError,
      },
      options,
    );
  }

  /**
   * Get Graphql Api
   *
   * @remarks
   * Retrieves a GraphqlApi object.
   *
   * @returns Success
   *
   * @throws {@link Apis.GetGraphqlApiError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGraphqlApi(
    request: Apis.GetGraphqlApiRequest,
    options?: RequestOptions,
  ): ApiPromise<GetGraphqlApiResponse, Apis.GetGraphqlApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getGraphqlApiResponseSchema },
        errorFactory: Apis.GetGraphqlApiError,
      },
      options,
    );
  }

  /**
   * List Apis
   *
   * @remarks
   * Lists the APIs in your AppSync account. ListApis returns only the high level API details. For
   * more detailed information about an API, use GetApi.
   *
   * @returns Success
   *
   * @throws {@link Apis.ListApisError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listApis(
    request: Apis.ListApisRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListApisResponse, Apis.ListApisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/apis"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listApisResponseSchema },
        errorFactory: Apis.ListApisError,
      },
      options,
    );
  }

  /**
   * List Graphql Apis
   *
   * @remarks
   * Lists your GraphQL APIs.
   *
   * @returns Success
   *
   * @throws {@link Apis.ListGraphqlApisError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGraphqlApis(
    request: Apis.ListGraphqlApisRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListGraphqlApisResponse, Apis.ListGraphqlApisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "apiType", value: request.apiType, schema: s.optional(s.lazy(() => apiType2Schema)) },
          { name: "owner", value: request.owner, schema: s.optional(s.lazy(() => ownerSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listGraphqlApisResponseSchema },
        errorFactory: Apis.ListGraphqlApisError,
      },
      options,
    );
  }

  /**
   * Update Api
   *
   * @remarks
   * Updates an Api.
   *
   * @returns Success
   *
   * @throws {@link Apis.UpdateApiError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateApi(
    request: Apis.UpdateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateApiResponse, Apis.UpdateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => v2ApisRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: updateApiResponseSchema },
        errorFactory: Apis.UpdateApiError,
      },
      options,
    );
  }

  /**
   * Update Graphql Api
   *
   * @remarks
   * Updates a GraphqlApi object.
   *
   * @returns Success
   *
   * @throws {@link Apis.UpdateGraphqlApiError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGraphqlApi(
    request: Apis.UpdateGraphqlApiRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateGraphqlApiResponse, Apis.UpdateGraphqlApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => v1ApisRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: updateGraphqlApiResponseSchema },
        errorFactory: Apis.UpdateGraphqlApiError,
      },
      options,
    );
  }
}

export namespace Apis {
  export type CreateApiRequest = {
    body?: V2ApisRequest;
  };

  export class CreateApiError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateApiError> = [
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
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type CreateGraphqlApiRequest = {
    body?: V1ApisRequest;
  };

  export class CreateGraphqlApiError extends ApiError {
    declare readonly payload:
      | Declared<"apiLimitExceededException", ApiLimitExceededException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGraphqlApiError> = [
      {
        on: 400,
        kind: "apiLimitExceededException",
        decode: { kind: "json", schema: apiLimitExceededExceptionSchema },
      },
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
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type DeleteApiRequest = {
    /** The Api ID. */
    apiId: string;
  };

  export class DeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
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

  export type DeleteGraphqlApiRequest = {
    /** The API ID. */
    apiId: string;
  };

  export class DeleteGraphqlApiError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGraphqlApiError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
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

  export type GetApiRequest = {
    /** The Api ID. */
    apiId: string;
  };

  export class GetApiError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
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

  export type GetGraphqlApiRequest = {
    /** The API ID for the GraphQL API. */
    apiId: string;
  };

  export class GetGraphqlApiError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGraphqlApiError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
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

  export type ListApisRequest = {
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListApisError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListApisError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type ListGraphqlApisRequest = {
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
    /**
     * The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API
     * (MERGED).
     */
    apiType?: ApiType2;
    /** The account owner of the GraphQL API. */
    owner?: Owner;
  };

  export class ListGraphqlApisError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGraphqlApisError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type UpdateApiRequest = {
    /** The Api ID. */
    apiId: string;
    body?: V2ApisRequest1;
  };

  export class UpdateApiError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateApiError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
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

  export type UpdateGraphqlApiRequest = {
    /** The API ID. */
    apiId: string;
    body?: V1ApisRequest1;
  };

  export class UpdateGraphqlApiError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGraphqlApiError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
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
