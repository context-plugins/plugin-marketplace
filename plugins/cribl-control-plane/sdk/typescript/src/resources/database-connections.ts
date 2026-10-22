import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  databaseConnectionConfigSchema,
  type DatabaseConnectionConfig,
} from "../models/database-connection-config.js";
import {
  databaseConnectionResponseEnvelopeSchema,
  type DatabaseConnectionResponseEnvelope,
} from "../models/database-connection-response-envelope.js";
import {
  databaseConnectionTypeSchema,
  type DatabaseConnectionType,
} from "../models/database-connection-type.js";
import { errorSchema, type Error } from "../models/error.js";
import { restApiJsonErrorSchema, type RestApiJsonError } from "../models/rest-api-json-error.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to DatabaseConnections
 */
export class DatabaseConnections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Database Connection
   *
   * @remarks
   * Create a new Database Connection.
   *
   * @returns The created Database Connection in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link DatabaseConnections.CreateDatabaseConnectionConfigError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createDatabaseConnectionConfig(
    request: DatabaseConnections.CreateDatabaseConnectionConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<DatabaseConnectionResponseEnvelope, DatabaseConnections.CreateDatabaseConnectionConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/lib/database-connections"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: databaseConnectionConfigSchema },
      },
      {
        success: { kind: "json", schema: databaseConnectionResponseEnvelopeSchema },
        errorFactory: DatabaseConnections.CreateDatabaseConnectionConfigError,
      },
      options,
    );
  }

  /**
   * Delete a Database Connection
   *
   * @remarks
   * Delete the specified Database Connection.
   *
   * @returns The deleted Database Connection in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link DatabaseConnections.DeleteDatabaseConnectionConfigByIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteDatabaseConnectionConfigById(
    request: DatabaseConnections.DeleteDatabaseConnectionConfigByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DatabaseConnectionResponseEnvelope,
    DatabaseConnections.DeleteDatabaseConnectionConfigByIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/lib/database-connections/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: databaseConnectionResponseEnvelopeSchema },
        errorFactory: DatabaseConnections.DeleteDatabaseConnectionConfigByIdError,
      },
      options,
    );
  }

  /**
   * List all Database Connections
   *
   * @remarks
   * Get a list of all Database Connections.
   *
   * @returns Database Connections returned in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link DatabaseConnections.GetDatabaseConnectionConfigError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDatabaseConnectionConfig(
    request: DatabaseConnections.GetDatabaseConnectionConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<DatabaseConnectionResponseEnvelope, DatabaseConnections.GetDatabaseConnectionConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/lib/database-connections"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          {
            name: "databaseType",
            value: request.databaseType,
            schema: s.optional(s.lazy(() => databaseConnectionTypeSchema)),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: databaseConnectionResponseEnvelopeSchema },
        errorFactory: DatabaseConnections.GetDatabaseConnectionConfigError,
      },
      options,
    );
  }

  /**
   * Get a Database Connection
   *
   * @remarks
   * Get the specified Database Connection.
   *
   * @returns The requested Database Connection in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link DatabaseConnections.GetDatabaseConnectionConfigByIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDatabaseConnectionConfigById(
    request: DatabaseConnections.GetDatabaseConnectionConfigByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DatabaseConnectionResponseEnvelope,
    DatabaseConnections.GetDatabaseConnectionConfigByIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/lib/database-connections/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: databaseConnectionResponseEnvelopeSchema },
        errorFactory: DatabaseConnections.GetDatabaseConnectionConfigByIdError,
      },
      options,
    );
  }

  /**
   * Update a Database Connection
   *
   * @remarks
   * Update the specified Database Connection.<br/><br/>Provide a complete representation of the
   * Database Connection that you want to update in the request body. This endpoint does not support
   * partial updates. Cribl removes any omitted fields when updating the Database
   * Connection.<br/><br/>Confirm that the configuration in your request body is correct before
   * sending the request. If the configuration is incorrect, the updated Database Connection might
   * not function as expected.
   *
   * @returns The updated Database Connection in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link DatabaseConnections.UpdateDatabaseConnectionConfigByIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateDatabaseConnectionConfigById(
    request: DatabaseConnections.UpdateDatabaseConnectionConfigByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DatabaseConnectionResponseEnvelope,
    DatabaseConnections.UpdateDatabaseConnectionConfigByIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/lib/database-connections/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: databaseConnectionConfigSchema },
      },
      {
        success: { kind: "json", schema: databaseConnectionResponseEnvelopeSchema },
        errorFactory: DatabaseConnections.UpdateDatabaseConnectionConfigByIdError,
      },
      options,
    );
  }
}

export namespace DatabaseConnections {
  export type CreateDatabaseConnectionConfigRequest = {
    /** DatabaseConnectionConfig object. */
    body: DatabaseConnectionConfig;
  };

  export class CreateDatabaseConnectionConfigError extends ApiError {
    declare readonly payload:
      | Declared<"restApiJsonError", RestApiJsonError>
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDatabaseConnectionConfigError> = [
      { on: 400, kind: "restApiJsonError", decode: { kind: "json", schema: restApiJsonErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDatabaseConnectionConfigByIdRequest = {
    /** The <code>id</code> of the Database Connection to delete. */
    id: string;
  };

  export class DeleteDatabaseConnectionConfigByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"restApiJsonError", RestApiJsonError>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatabaseConnectionConfigByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "restApiJsonError", decode: { kind: "json", schema: restApiJsonErrorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetDatabaseConnectionConfigRequest = {
    /**
     * Filter results by database engine type. Use this parameter to return only Database
     * Connections for the specified engine.
     */
    databaseType?: DatabaseConnectionType;
    /**
     * Maximum number of Database Connections to return in the response for this request. Use with
     * <code>offset</code> to paginate the response into manageable batches.
     */
    limit?: number;
    /**
     * Starting point from which to retrieve results for this request. Use with <code>limit</code>
     * to paginate the response into manageable batches.
     */
    offset?: number;
  };

  export class GetDatabaseConnectionConfigError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetDatabaseConnectionConfigError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDatabaseConnectionConfigByIdRequest = {
    /** The <code>id</code> of the Database Connection to get. */
    id: string;
  };

  export class GetDatabaseConnectionConfigByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"restApiJsonError", RestApiJsonError>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDatabaseConnectionConfigByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "restApiJsonError", decode: { kind: "json", schema: restApiJsonErrorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateDatabaseConnectionConfigByIdRequest = {
    /** The <code>id</code> of the Database Connection to update. */
    id: string;
    /** DatabaseConnectionConfig object. */
    body: DatabaseConnectionConfig;
  };

  export class UpdateDatabaseConnectionConfigByIdError extends ApiError {
    declare readonly payload:
      | Declared<"restApiJsonError", RestApiJsonError>
      | Declared<"error", Error>
      | Declared<"restApiJsonError2", RestApiJsonError>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDatabaseConnectionConfigByIdError> = [
      { on: 400, kind: "restApiJsonError", decode: { kind: "json", schema: restApiJsonErrorSchema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "restApiJsonError2", decode: { kind: "json", schema: restApiJsonErrorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
