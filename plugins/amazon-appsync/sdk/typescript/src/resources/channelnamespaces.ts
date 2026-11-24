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
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  concurrentModificationExceptionSchema,
  type ConcurrentModificationException,
} from "../models/concurrent-modification-exception.js";
import {
  createChannelNamespaceResponseSchema,
  type CreateChannelNamespaceResponse,
} from "../models/create-channel-namespace-response.js";
import {
  getChannelNamespaceResponseSchema,
  type GetChannelNamespaceResponse,
} from "../models/get-channel-namespace-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  listChannelNamespacesResponseSchema,
  type ListChannelNamespacesResponse,
} from "../models/list-channel-namespaces-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import {
  updateChannelNamespaceResponseSchema,
  type UpdateChannelNamespaceResponse,
} from "../models/update-channel-namespace-response.js";
import {
  v2ApisChannelNamespacesRequestSchema,
  type V2ApisChannelNamespacesRequest,
} from "../models/v2-apis-channel-namespaces-request.js";
import {
  v2ApisChannelNamespacesRequest1Schema,
  type V2ApisChannelNamespacesRequest1,
} from "../models/v2-apis-channel-namespaces-request1.js";
import type { Servers } from "../servers.js";

export class Channelnamespaces {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Channel Namespace
   *
   * @remarks
   * Creates a ChannelNamespace for an Api.
   *
   * @returns Success
   *
   * @throws {@link Channelnamespaces.CreateChannelNamespaceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChannelNamespace(
    request: Channelnamespaces.CreateChannelNamespaceRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateChannelNamespaceResponse, Channelnamespaces.CreateChannelNamespaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/apis/{apiId}/channelNamespaces"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ApisChannelNamespacesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createChannelNamespaceResponseSchema },
        errorFactory: Channelnamespaces.CreateChannelNamespaceError,
      },
      options,
    );
  }

  /**
   * Delete Channel Namespace
   *
   * @remarks
   * Deletes a ChannelNamespace.
   *
   * @returns Success
   *
   * @throws {@link Channelnamespaces.DeleteChannelNamespaceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteChannelNamespace(
    request: Channelnamespaces.DeleteChannelNamespaceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Channelnamespaces.DeleteChannelNamespaceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Channelnamespaces.DeleteChannelNamespaceError,
      },
      options,
    );
  }

  /**
   * Get Channel Namespace
   *
   * @remarks
   * Retrieves the channel namespace for a specified Api.
   *
   * @returns Success
   *
   * @throws {@link Channelnamespaces.GetChannelNamespaceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChannelNamespace(
    request: Channelnamespaces.GetChannelNamespaceRequest,
    options?: RequestOptions,
  ): ApiPromise<GetChannelNamespaceResponse, Channelnamespaces.GetChannelNamespaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getChannelNamespaceResponseSchema },
        errorFactory: Channelnamespaces.GetChannelNamespaceError,
      },
      options,
    );
  }

  /**
   * List Channel Namespaces
   *
   * @remarks
   * Lists the channel namespaces for a specified Api. ListChannelNamespaces returns only high level
   * details for the channel namespace. To retrieve code handlers, use GetChannelNamespace.
   *
   * @returns Success
   *
   * @throws {@link Channelnamespaces.ListChannelNamespacesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listChannelNamespaces(
    request: Channelnamespaces.ListChannelNamespacesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChannelNamespacesResponse, Channelnamespaces.ListChannelNamespacesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/apis/{apiId}/channelNamespaces"),
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
        success: { kind: "json", schema: listChannelNamespacesResponseSchema },
        errorFactory: Channelnamespaces.ListChannelNamespacesError,
      },
      options,
    );
  }

  /**
   * Update Channel Namespace
   *
   * @remarks
   * Updates a ChannelNamespace associated with an Api.
   *
   * @returns Success
   *
   * @throws {@link Channelnamespaces.UpdateChannelNamespaceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateChannelNamespace(
    request: Channelnamespaces.UpdateChannelNamespaceRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateChannelNamespaceResponse, Channelnamespaces.UpdateChannelNamespaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/apis/{apiId}/channelNamespaces/{name}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ApisChannelNamespacesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: updateChannelNamespaceResponseSchema },
        errorFactory: Channelnamespaces.UpdateChannelNamespaceError,
      },
      options,
    );
  }
}

export namespace Channelnamespaces {
  export type CreateChannelNamespaceRequest = {
    /** The Api ID. */
    apiId: string;
    body?: V2ApisChannelNamespacesRequest;
  };

  export class CreateChannelNamespaceError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateChannelNamespaceError> = [
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

  export type DeleteChannelNamespaceRequest = {
    /** The ID of the Api associated with the ChannelNamespace. */
    apiId: string;
    /** The name of the ChannelNamespace. */
    name: string;
  };

  export class DeleteChannelNamespaceError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteChannelNamespaceError> = [
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

  export type GetChannelNamespaceRequest = {
    /** The Api ID. */
    apiId: string;
    /** The name of the ChannelNamespace. */
    name: string;
  };

  export class GetChannelNamespaceError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetChannelNamespaceError> = [
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

  export type ListChannelNamespacesRequest = {
    /** The Api ID. */
    apiId: string;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListChannelNamespacesError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListChannelNamespacesError> = [
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

  export type UpdateChannelNamespaceRequest = {
    /** The Api ID. */
    apiId: string;
    /** The name of the ChannelNamespace. */
    name: string;
    body?: V2ApisChannelNamespacesRequest1;
  };

  export class UpdateChannelNamespaceError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateChannelNamespaceError> = [
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
