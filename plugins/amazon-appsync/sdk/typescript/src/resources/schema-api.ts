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
import { formatSchema, type Format } from "../models/format.js";
import {
  getIntrospectionSchemaResponseSchema,
  type GetIntrospectionSchemaResponse,
} from "../models/get-introspection-schema-response.js";
import {
  getSchemaCreationStatusResponseSchema,
  type GetSchemaCreationStatusResponse,
} from "../models/get-schema-creation-status-response.js";
import {
  graphQlSchemaExceptionSchema,
  type GraphQlSchemaException,
} from "../models/graph-ql-schema-exception.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  startSchemaCreationResponseSchema,
  type StartSchemaCreationResponse,
} from "../models/start-schema-creation-response.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import {
  v1ApisSchemacreationRequestSchema,
  type V1ApisSchemacreationRequest,
} from "../models/v1-apis-schemacreation-request.js";
import type { Servers } from "../servers.js";

export class SchemaApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Introspection Schema
   *
   * @remarks
   * Retrieves the introspection schema for a GraphQL API.
   *
   * @returns Success
   *
   * @throws {@link SchemaApi.GetIntrospectionSchemaError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIntrospectionSchema(
    request: SchemaApi.GetIntrospectionSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<GetIntrospectionSchemaResponse, SchemaApi.GetIntrospectionSchemaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/schema"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [
          { name: "format", value: request.format, schema: formatSchema },
          { name: "includeDirectives", value: request.includeDirectives, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getIntrospectionSchemaResponseSchema },
        errorFactory: SchemaApi.GetIntrospectionSchemaError,
      },
      options,
    );
  }

  /**
   * Get Schema Creation Status
   *
   * @remarks
   * Retrieves the current status of a schema creation operation.
   *
   * @returns Success
   *
   * @throws {@link SchemaApi.GetSchemaCreationStatus2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSchemaCreationStatus2(
    request: SchemaApi.GetSchemaCreationStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<GetSchemaCreationStatusResponse, SchemaApi.GetSchemaCreationStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/schemacreation"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSchemaCreationStatusResponseSchema },
        errorFactory: SchemaApi.GetSchemaCreationStatus2Error,
      },
      options,
    );
  }

  /**
   * Start Schema Creation
   *
   * @remarks
   * Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it
   * has completed.
   *
   * @returns Success
   *
   * @throws {@link SchemaApi.StartSchemaCreation2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startSchemaCreation2(
    request: SchemaApi.StartSchemaCreation2Request,
    options?: RequestOptions,
  ): ApiPromise<StartSchemaCreationResponse, SchemaApi.StartSchemaCreation2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/schemacreation"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisSchemacreationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startSchemaCreationResponseSchema },
        errorFactory: SchemaApi.StartSchemaCreation2Error,
      },
      options,
    );
  }
}

export namespace SchemaApi {
  export type GetIntrospectionSchemaRequest = {
    /** The API ID. */
    apiId: string;
    /** The schema format: SDL or JSON. */
    format: Format;
    /** A flag that specifies whether the schema introspection should contain directives. */
    includeDirectives?: boolean;
  };

  export class GetIntrospectionSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"graphQlSchemaException", GraphQlSchemaException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntrospectionSchemaError> = [
      {
        on: 400,
        kind: "graphQlSchemaException",
        decode: { kind: "json", schema: graphQlSchemaExceptionSchema },
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

  export type GetSchemaCreationStatus2Request = {
    /** The API ID. */
    apiId: string;
  };

  export class GetSchemaCreationStatus2Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSchemaCreationStatus2Error> = [
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

  export type StartSchemaCreation2Request = {
    /** The API ID. */
    apiId: string;
    body?: V1ApisSchemacreationRequest;
  };

  export class StartSchemaCreation2Error extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartSchemaCreation2Error> = [
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
