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
import { createTypeResponseSchema, type CreateTypeResponse } from "../models/create-type-response.js";
import { formatSchema, type Format } from "../models/format.js";
import { getTypeResponseSchema, type GetTypeResponse } from "../models/get-type-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  listTypesByAssociationResponseSchema,
  type ListTypesByAssociationResponse,
} from "../models/list-types-by-association-response.js";
import { listTypesResponseSchema, type ListTypesResponse } from "../models/list-types-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import { updateTypeResponseSchema, type UpdateTypeResponse } from "../models/update-type-response.js";
import { v1ApisTypesRequestSchema, type V1ApisTypesRequest } from "../models/v1-apis-types-request.js";
import { v1ApisTypesRequest1Schema, type V1ApisTypesRequest1 } from "../models/v1-apis-types-request1.js";
import type { Servers } from "../servers.js";

export class Types {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Type
   *
   * @remarks
   * Creates a Type object.
   *
   * @returns Success
   *
   * @throws {@link Types.CreateTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createType(
    request: Types.CreateTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateTypeResponse, Types.CreateTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisTypesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createTypeResponseSchema },
        errorFactory: Types.CreateTypeError,
      },
      options,
    );
  }

  /**
   * Delete Type
   *
   * @remarks
   * Deletes a Type object.
   *
   * @returns Success
   *
   * @throws {@link Types.DeleteTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteType(
    request: Types.DeleteTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Types.DeleteTypeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types/{typeName}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "typeName", value: request.typeName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Types.DeleteTypeError,
      },
      options,
    );
  }

  /**
   * Get Type
   *
   * @remarks
   * Retrieves a Type object.
   *
   * @returns Success
   *
   * @throws {@link Types.GetTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getType(
    request: Types.GetTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTypeResponse, Types.GetTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types/{typeName}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "apiId", value: request.apiId, schema: s.string() },
          { name: "typeName", value: request.typeName, schema: s.string() },
        ],
        query: [{ name: "format", value: request.format, schema: formatSchema }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTypeResponseSchema },
        errorFactory: Types.GetTypeError,
      },
      options,
    );
  }

  /**
   * List Types
   *
   * @remarks
   * Lists the types for a given API.
   *
   * @returns Success
   *
   * @throws {@link Types.ListTypesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTypes(
    request: Types.ListTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTypesResponse, Types.ListTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [
          { name: "format", value: request.format, schema: formatSchema },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTypesResponseSchema },
        errorFactory: Types.ListTypesError,
      },
      options,
    );
  }

  /**
   * List Types By Association
   *
   * @remarks
   * Lists Type objects by the source API association ID.
   *
   * @returns Success
   *
   * @throws {@link Types.ListTypesByAssociationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTypesByAssociation(
    request: Types.ListTypesByAssociationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTypesByAssociationResponse, Types.ListTypesByAssociationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "mergedApiIdentifier", value: request.mergedApiIdentifier, schema: s.string() },
          { name: "associationId", value: request.associationId, schema: s.string() },
        ],
        query: [
          { name: "format", value: request.format, schema: formatSchema },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTypesByAssociationResponseSchema },
        errorFactory: Types.ListTypesByAssociationError,
      },
      options,
    );
  }

  /**
   * Update Type
   *
   * @remarks
   * Updates a Type object.
   *
   * @returns Success
   *
   * @throws {@link Types.UpdateTypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateType(
    request: Types.UpdateTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateTypeResponse, Types.UpdateTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/types/{typeName}"),
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
          schema: s.optional(s.lazy(() => v1ApisTypesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: updateTypeResponseSchema },
        errorFactory: Types.UpdateTypeError,
      },
      options,
    );
  }
}

export namespace Types {
  export type CreateTypeRequest = {
    /** The API ID. */
    apiId: string;
    body?: V1ApisTypesRequest;
  };

  export class CreateTypeError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTypeError> = [
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

  export type DeleteTypeRequest = {
    /** The API ID. */
    apiId: string;
    /** The type name. */
    typeName: string;
  };

  export class DeleteTypeError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTypeError> = [
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

  export type GetTypeRequest = {
    /** The API ID. */
    apiId: string;
    /** The type name. */
    typeName: string;
    /** The type format: SDL or JSON. */
    format: Format;
  };

  export class GetTypeError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTypeError> = [
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

  export type ListTypesRequest = {
    /** The API ID. */
    apiId: string;
    /** The type format: SDL or JSON. */
    format: Format;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListTypesError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTypesError> = [
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

  export type ListTypesByAssociationRequest = {
    /**
     * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most
     * cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
     * merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require
     * the full resource ARN of the merged API.
     */
    mergedApiIdentifier: string;
    /** The ID generated by the AppSync service for the source API association. */
    associationId: string;
    /** The format type. */
    format: Format;
    /**
     * An identifier that was returned from the previous call to this operation, which you can use
     * to return the next set of items in the list.
     */
    nextToken?: string;
    /** The maximum number of results that you want the request to return. */
    maxResults?: number;
  };

  export class ListTypesByAssociationError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTypesByAssociationError> = [
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

  export type UpdateTypeRequest = {
    /** The API ID. */
    apiId: string;
    /** The new type name. */
    typeName: string;
    body?: V1ApisTypesRequest1;
  };

  export class UpdateTypeError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTypeError> = [
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
