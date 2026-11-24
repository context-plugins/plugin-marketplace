import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { environmentInputSchema, type EnvironmentInput } from "../models/environment-input.js";
import {
  environmentQueryResultSchema,
  type EnvironmentQueryResult,
} from "../models/environment-query-result.js";
import { environmentSchema, type Environment } from "../models/environment.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { queryRequestSchema, type QueryRequest } from "../models/query-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage runtime environments where Boomi Atoms and Molecules are deployed to run integration
 * processes.
 */
export class Environments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi Create an environment
   *
   * @remarks
   * Creates a new runtime environment in the Boomi platform for deploying and running integration
   * processes.
   *
   * @returns The created environment object.
   *
   * @throws {@link Environments.CreateEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEnvironment(
    request: Environments.CreateEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.CreateEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Environment"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: environmentInputSchema },
      },
      {
        success: { kind: "json", schema: environmentSchema },
        errorFactory: Environments.CreateEnvironmentError,
      },
      options,
    );
  }

  /**
   * Boomi Delete an environment
   *
   * @remarks
   * Permanently deletes a runtime environment from the Boomi platform.
   *
   * @returns Deletion successful.
   *
   * @throws {@link Environments.DeleteEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEnvironment(
    request: Environments.DeleteEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Environments.DeleteEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/Environment/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Environments.DeleteEnvironmentError,
      },
      options,
    );
  }

  /**
   * Boomi Get an environment
   *
   * @remarks
   * Retrieves the details of a specific runtime environment by its ID.
   *
   * @returns The environment object.
   *
   * @throws {@link Environments.GetEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEnvironment(
    request: Environments.GetEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment, Environments.GetEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Environment/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentSchema },
        errorFactory: Environments.GetEnvironmentError,
      },
      options,
    );
  }

  /**
   * Boomi Query environments
   *
   * @remarks
   * Returns a list of runtime environments matching the specified query filter criteria.
   *
   * @returns Query results containing matching environment objects.
   *
   * @throws {@link Environments.QueryEnvironmentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryEnvironments(
    request: Environments.QueryEnvironmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentQueryResult, Environments.QueryEnvironmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Environment/query"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryRequestSchema },
      },
      {
        success: { kind: "json", schema: environmentQueryResultSchema },
        errorFactory: Environments.QueryEnvironmentsError,
      },
      options,
    );
  }
}

export namespace Environments {
  export type CreateEnvironmentRequest = {
    body: EnvironmentInput;
  };

  export class CreateEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEnvironmentError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteEnvironmentRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class DeleteEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEnvironmentError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetEnvironmentRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class GetEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEnvironmentError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type QueryEnvironmentsRequest = {
    body: QueryRequest;
  };

  export class QueryEnvironmentsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryEnvironmentsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
