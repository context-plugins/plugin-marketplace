import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  executionRecordQueryResultSchema,
  type ExecutionRecordQueryResult,
} from "../models/execution-record-query-result.js";
import {
  executionRequestResultSchema,
  type ExecutionRequestResult,
} from "../models/execution-request-result.js";
import { executionRequestSchema, type ExecutionRequest } from "../models/execution-request.js";
import { queryRequestSchema, type QueryRequest } from "../models/query-request.js";
import type { Servers } from "../servers.js";

/**
 * Execute integration processes and retrieve execution statistics and job results.
 */
export class Execution {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi Execute a process
   *
   * @remarks
   * Triggers the execution of an integration process on a specified Atom. Returns an execution
   * request ID that can be used to track the job.
   *
   * @returns The execution request with a job ID for tracking.
   *
   * @throws {@link Execution.ExecuteProcessError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  executeProcess(
    request: Execution.ExecuteProcessRequest,
    options?: RequestOptions,
  ): ApiPromise<ExecutionRequestResult, Execution.ExecuteProcessError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ExecutionRequest"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: executionRequestSchema },
      },
      {
        success: { kind: "json", schema: executionRequestResultSchema },
        errorFactory: Execution.ExecuteProcessError,
      },
      options,
    );
  }

  /**
   * Boomi Query execution records
   *
   * @remarks
   * Returns a list of process execution records matching the specified filter criteria. Useful for
   * retrieving job history and execution statistics.
   *
   * @returns Query results containing matching execution records.
   *
   * @throws {@link Execution.QueryExecutionRecordsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryExecutionRecords(
    request: Execution.QueryExecutionRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExecutionRecordQueryResult, Execution.QueryExecutionRecordsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ExecutionRecord/query"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryRequestSchema },
      },
      {
        success: { kind: "json", schema: executionRecordQueryResultSchema },
        errorFactory: Execution.QueryExecutionRecordsError,
      },
      options,
    );
  }
}

export namespace Execution {
  export type ExecuteProcessRequest = {
    body: ExecutionRequest;
  };

  export class ExecuteProcessError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExecuteProcessError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type QueryExecutionRecordsRequest = {
    body: QueryRequest;
  };

  export class QueryExecutionRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryExecutionRecordsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
