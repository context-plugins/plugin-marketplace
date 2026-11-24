import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { processInputSchema, type ProcessInput } from "../models/process-input.js";
import { processQueryResultSchema, type ProcessQueryResult } from "../models/process-query-result.js";
import { processSchedulesSchema, type ProcessSchedules } from "../models/process-schedules.js";
import { processSchema, type Process } from "../models/process.js";
import { queryRequestSchema, type QueryRequest } from "../models/query-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage integration processes (recipes) within the Boomi platform.
 */
export class Processes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi Create a process
   *
   * @remarks
   * Creates a new integration process in the Boomi platform. The process definition is provided in
   * the request body as XML or JSON.
   *
   * @returns The created process object.
   *
   * @throws {@link Processes.CreateProcessError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProcess(
    request: Processes.CreateProcessRequest,
    options?: RequestOptions,
  ): ApiPromise<Process, Processes.CreateProcessError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Process"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processInputSchema },
      },
      {
        success: { kind: "json", schema: processSchema },
        errorFactory: Processes.CreateProcessError,
      },
      options,
    );
  }

  /**
   * Boomi Delete a process
   *
   * @remarks
   * Permanently deletes an integration process from the Boomi platform.
   *
   * @returns Deletion successful.
   *
   * @throws {@link Processes.DeleteProcessError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProcess(
    request: Processes.DeleteProcessRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Processes.DeleteProcessError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/Process/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Processes.DeleteProcessError,
      },
      options,
    );
  }

  /**
   * Boomi Get a process
   *
   * @remarks
   * Retrieves the details of a specific integration process by its ID.
   *
   * @returns The process object.
   *
   * @throws {@link Processes.GetProcessError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProcess(
    request: Processes.GetProcessRequest,
    options?: RequestOptions,
  ): ApiPromise<Process, Processes.GetProcessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Process/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: processSchema },
        errorFactory: Processes.GetProcessError,
      },
      options,
    );
  }

  /**
   * Boomi Get process schedules
   *
   * @remarks
   * Retrieves the scheduling configuration for a specific integration process.
   *
   * @returns The process schedule configuration.
   *
   * @throws {@link Processes.GetProcessSchedulesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProcessSchedules(
    request: Processes.GetProcessSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<ProcessSchedules, Processes.GetProcessSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ProcessSchedules/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: processSchedulesSchema },
        errorFactory: Processes.GetProcessSchedulesError,
      },
      options,
    );
  }

  /**
   * Boomi Query processes
   *
   * @remarks
   * Returns a list of integration processes matching the specified query filter criteria. Supports
   * filtering by folder ID, process name, and other properties.
   *
   * @returns Query results containing matching process objects.
   *
   * @throws {@link Processes.QueryProcessesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryProcesses(
    request: Processes.QueryProcessesRequest,
    options?: RequestOptions,
  ): ApiPromise<ProcessQueryResult, Processes.QueryProcessesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Process/query"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryRequestSchema },
      },
      {
        success: { kind: "json", schema: processQueryResultSchema },
        errorFactory: Processes.QueryProcessesError,
      },
      options,
    );
  }

  /**
   * Boomi Update a process
   *
   * @remarks
   * Updates an existing integration process by its ID.
   *
   * @returns The updated process object.
   *
   * @throws {@link Processes.UpdateProcessError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProcess(
    request: Processes.UpdateProcessRequest,
    options?: RequestOptions,
  ): ApiPromise<Process, Processes.UpdateProcessError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Process/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processInputSchema },
      },
      {
        success: { kind: "json", schema: processSchema },
        errorFactory: Processes.UpdateProcessError,
      },
      options,
    );
  }

  /**
   * Boomi Update process schedules
   *
   * @remarks
   * Updates the scheduling configuration for a specific integration process.
   *
   * @returns The updated process schedule configuration.
   *
   * @throws {@link Processes.UpdateProcessSchedulesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProcessSchedules(
    request: Processes.UpdateProcessSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<ProcessSchedules, Processes.UpdateProcessSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ProcessSchedules/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processSchedulesSchema },
      },
      {
        success: { kind: "json", schema: processSchedulesSchema },
        errorFactory: Processes.UpdateProcessSchedulesError,
      },
      options,
    );
  }
}

export namespace Processes {
  export type CreateProcessRequest = {
    body: ProcessInput;
  };

  export class CreateProcessError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProcessError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteProcessRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class DeleteProcessError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProcessError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProcessRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class GetProcessError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProcessError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProcessSchedulesRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class GetProcessSchedulesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProcessSchedulesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type QueryProcessesRequest = {
    body: QueryRequest;
  };

  export class QueryProcessesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryProcessesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateProcessRequest = {
    /** Unique identifier of the platform object. */
    id: string;
    body: ProcessInput;
  };

  export class UpdateProcessError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProcessError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateProcessSchedulesRequest = {
    /** Unique identifier of the platform object. */
    id: string;
    body: ProcessSchedules;
  };

  export class UpdateProcessSchedulesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProcessSchedulesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
