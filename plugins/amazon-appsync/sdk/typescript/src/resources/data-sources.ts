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
  createDataSourceResponseSchema,
  type CreateDataSourceResponse,
} from "../models/create-data-source-response.js";
import {
  getDataSourceIntrospectionResponseSchema,
  type GetDataSourceIntrospectionResponse,
} from "../models/get-data-source-introspection-response.js";
import {
  getDataSourceResponseSchema,
  type GetDataSourceResponse,
} from "../models/get-data-source-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  listDataSourcesResponseSchema,
  type ListDataSourcesResponse,
} from "../models/list-data-sources-response.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  startDataSourceIntrospectionResponseSchema,
  type StartDataSourceIntrospectionResponse,
} from "../models/start-data-source-introspection-response.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import {
  updateDataSourceResponseSchema,
  type UpdateDataSourceResponse,
} from "../models/update-data-source-response.js";
import {
  v1ApisDatasourcesRequestSchema,
  type V1ApisDatasourcesRequest,
} from "../models/v1-apis-datasources-request.js";
import {
  v1ApisDatasourcesRequest1Schema,
  type V1ApisDatasourcesRequest1,
} from "../models/v1-apis-datasources-request1.js";
import {
  v1DatasourcesIntrospectionsRequestSchema,
  type V1DatasourcesIntrospectionsRequest,
} from "../models/v1-datasources-introspections-request.js";
import type { Servers } from "../servers.js";

export class DataSources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Data Source
   *
   * @remarks
   * Creates a DataSource object.
   *
   * @returns Success
   *
   * @throws {@link DataSources.CreateDataSourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDataSource(
    request: DataSources.CreateDataSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateDataSourceResponse, DataSources.CreateDataSourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/datasources"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisDatasourcesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createDataSourceResponseSchema },
        errorFactory: DataSources.CreateDataSourceError,
      },
      options,
    );
  }

  /**
   * Delete Data Source
   *
   * @remarks
   * Deletes a DataSource object.
   *
   * @returns Success
   *
   * @throws {@link DataSources.DeleteDataSourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDataSource(
    request: DataSources.DeleteDataSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, DataSources.DeleteDataSourceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/datasources/{name}"),
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
        errorFactory: DataSources.DeleteDataSourceError,
      },
      options,
    );
  }

  /**
   * Get Data Source
   *
   * @remarks
   * Retrieves a DataSource object.
   *
   * @returns Success
   *
   * @throws {@link DataSources.GetDataSourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDataSource(
    request: DataSources.GetDataSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDataSourceResponse, DataSources.GetDataSourceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/datasources/{name}"),
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
        success: { kind: "json", schema: getDataSourceResponseSchema },
        errorFactory: DataSources.GetDataSourceError,
      },
      options,
    );
  }

  /**
   * Get Data Source Introspection
   *
   * @remarks
   * Retrieves the record of an existing introspection. If the retrieval is successful, the result
   * of the instrospection will also be returned. If the retrieval fails the operation, an error
   * message will be returned instead.
   *
   * @returns Success
   *
   * @throws {@link DataSources.GetDataSourceIntrospectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDataSourceIntrospection(
    request: DataSources.GetDataSourceIntrospectionRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDataSourceIntrospectionResponse, DataSources.GetDataSourceIntrospectionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/datasources/introspections/{introspectionId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "introspectionId", value: request.introspectionId, schema: s.string() }],
        query: [
          { name: "includeModelsSDL", value: request.includeModelsSdl, schema: s.optional(s.boolean()) },
          { name: "nextToken", value: request.nextToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getDataSourceIntrospectionResponseSchema },
        errorFactory: DataSources.GetDataSourceIntrospectionError,
      },
      options,
    );
  }

  /**
   * List Data Sources
   *
   * @remarks
   * Lists the data sources for a given API.
   *
   * @returns Success
   *
   * @throws {@link DataSources.ListDataSourcesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDataSources(
    request: DataSources.ListDataSourcesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDataSourcesResponse, DataSources.ListDataSourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/datasources"),
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
        success: { kind: "json", schema: listDataSourcesResponseSchema },
        errorFactory: DataSources.ListDataSourcesError,
      },
      options,
    );
  }

  /**
   * Start Data Source Introspection
   *
   * @remarks
   * Creates a new introspection. Returns the introspectionId of the new introspection after its
   * creation.
   *
   * @returns Success
   *
   * @throws {@link DataSources.StartDataSourceIntrospectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startDataSourceIntrospection(
    request: DataSources.StartDataSourceIntrospectionRequest = {},
    options?: RequestOptions,
  ): ApiPromise<StartDataSourceIntrospectionResponse, DataSources.StartDataSourceIntrospectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/datasources/introspections"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1DatasourcesIntrospectionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startDataSourceIntrospectionResponseSchema },
        errorFactory: DataSources.StartDataSourceIntrospectionError,
      },
      options,
    );
  }

  /**
   * Update Data Source
   *
   * @remarks
   * Updates a DataSource object.
   *
   * @returns Success
   *
   * @throws {@link DataSources.UpdateDataSourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDataSource(
    request: DataSources.UpdateDataSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateDataSourceResponse, DataSources.UpdateDataSourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/datasources/{name}"),
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
          schema: s.optional(s.lazy(() => v1ApisDatasourcesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: updateDataSourceResponseSchema },
        errorFactory: DataSources.UpdateDataSourceError,
      },
      options,
    );
  }
}

export namespace DataSources {
  export type CreateDataSourceRequest = {
    /** The API ID for the GraphQL API for the DataSource. */
    apiId: string;
    body?: V1ApisDatasourcesRequest;
  };

  export class CreateDataSourceError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDataSourceError> = [
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

  export type DeleteDataSourceRequest = {
    /** The API ID. */
    apiId: string;
    /** The name of the data source. */
    name: string;
  };

  export class DeleteDataSourceError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDataSourceError> = [
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

  export type GetDataSourceRequest = {
    /** The API ID. */
    apiId: string;
    /** The name of the data source. */
    name: string;
  };

  export class GetDataSourceError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDataSourceError> = [
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

  export type GetDataSourceIntrospectionRequest = {
    /**
     * The introspection ID. Each introspection contains a unique ID that can be used to reference
     * the instrospection record.
     */
    introspectionId: string;
    /**
     * A boolean flag that determines whether SDL should be generated for introspected types. If set
     * to true, each model will contain an sdl property that contains the SDL for that type. The SDL
     * only contains the type data and no additional metadata or directives.
     */
    includeModelsSdl?: boolean;
    /**
     * Determines the number of types to be returned in a single response before paginating. This
     * value is typically taken from nextToken value from the previous response.
     */
    nextToken?: string;
    /** The maximum number of introspected types that will be returned in a single response. */
    maxResults?: number;
  };

  export class GetDataSourceIntrospectionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDataSourceIntrospectionError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
    ];
  }

  export type ListDataSourcesRequest = {
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

  export class ListDataSourcesError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDataSourcesError> = [
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

  export type StartDataSourceIntrospectionRequest = {
    body?: V1DatasourcesIntrospectionsRequest;
  };

  export class StartDataSourceIntrospectionError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartDataSourceIntrospectionError> = [
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

  export type UpdateDataSourceRequest = {
    /** The API ID. */
    apiId: string;
    /** The new name for the data source. */
    name: string;
    body?: V1ApisDatasourcesRequest1;
  };

  export class UpdateDataSourceError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDataSourceError> = [
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
