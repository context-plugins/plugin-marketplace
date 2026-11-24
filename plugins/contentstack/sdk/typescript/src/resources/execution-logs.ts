import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { executionLogListSchema, type ExecutionLogList } from "../models/execution-log-list.js";
import { executionLogSchema, type ExecutionLog } from "../models/execution-log.js";
import type { Servers } from "../servers.js";

/**
 * Execution logs record each time an automation runs, including the trigger context, steps
 * executed, and success or failure status.
 */
export class ExecutionLogs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get all execution logs
   *
   * @remarks
   * Retrieves a list of execution log entries for all automations in the project, showing each run
   * with its trigger context, status, and completion time.
   *
   * @returns A list of execution log entries.
   *
   * @throws {@link ExecutionLogs.GetAllExecutionLogsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllExecutionLogs(
    request: ExecutionLogs.GetAllExecutionLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<ExecutionLogList, ExecutionLogs.GetAllExecutionLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/executions",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: executionLogListSchema },
        errorFactory: ExecutionLogs.GetAllExecutionLogsError,
      },
      options,
    );
  }

  /**
   * Get an execution log
   *
   * @remarks
   * Retrieves the full details of a specific automation execution log entry, including step-by-step
   * results and any error messages encountered.
   *
   * @returns The requested execution log entry.
   *
   * @throws {@link ExecutionLogs.GetExecutionLogError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExecutionLog(
    request: ExecutionLogs.GetExecutionLogRequest,
    options?: RequestOptions,
  ): ApiPromise<ExecutionLog, ExecutionLogs.GetExecutionLogError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/executions/{execution_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "execution_uid", value: request.executionUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: executionLogSchema },
        errorFactory: ExecutionLogs.GetExecutionLogError,
      },
      options,
    );
  }
}

export namespace ExecutionLogs {
  export type GetAllExecutionLogsRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
  };

  export class GetAllExecutionLogsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllExecutionLogsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetExecutionLogRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
    /** The unique identifier of the execution log entry. */
    executionUid: string;
  };

  export class GetExecutionLogError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetExecutionLogError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
