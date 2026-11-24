import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCodeBuildCommandExecutionApiSchema,
  type XAmzTargetAwsCodeBuildCommandExecutionApi,
} from "../models/xamz-target-aws-code-build-command-execution-api.js";
import {
  xAmzTarget1AwsCodeBuildCommandExecutionApiSchema,
  type XAmzTarget1AwsCodeBuildCommandExecutionApi,
} from "../models/xamz-target1-aws-code-build-command-execution-api.js";
import {
  xAmzTarget2AwsCodeBuildCommandExecutionApiSchema,
  type XAmzTarget2AwsCodeBuildCommandExecutionApi,
} from "../models/xamz-target2-aws-code-build-command-execution-api.js";
import type { Servers } from "../servers.js";

export class CommandExecutionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch Get Command Executions
   *
   * @remarks
   * Gets information about the command executions.
   *
   * @returns Success
   *
   * @throws {@link CommandExecutionApi.BatchGetCommandExecutionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchGetCommandExecutions(
    request: CommandExecutionApi.BatchGetCommandExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CommandExecutionApi.BatchGetCommandExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchGetCommandExecutions"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCodeBuildCommandExecutionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CommandExecutionApi.BatchGetCommandExecutionsError,
      },
      options,
    );
  }

  /**
   * List Command Executions For Sandbox
   *
   * @remarks
   * Gets a list of command executions for a sandbox.
   *
   * @returns Success
   *
   * @throws {@link CommandExecutionApi.ListCommandExecutionsForSandboxError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCommandExecutionsForSandbox(
    request: CommandExecutionApi.ListCommandExecutionsForSandboxRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CommandExecutionApi.ListCommandExecutionsForSandboxError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListCommandExecutionsForSandbox"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCodeBuildCommandExecutionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CommandExecutionApi.ListCommandExecutionsForSandboxError,
      },
      options,
    );
  }

  /**
   * Start Command Execution
   *
   * @remarks
   * Starts a command execution.
   *
   * @returns Success
   *
   * @throws {@link CommandExecutionApi.StartCommandExecutionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startCommandExecution(
    request: CommandExecutionApi.StartCommandExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CommandExecutionApi.StartCommandExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartCommandExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCodeBuildCommandExecutionApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CommandExecutionApi.StartCommandExecutionError,
      },
      options,
    );
  }
}

export namespace CommandExecutionApi {
  export type BatchGetCommandExecutionsRequest = {
    xAmzTarget: XAmzTargetAwsCodeBuildCommandExecutionApi;
  };

  export class BatchGetCommandExecutionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchGetCommandExecutionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListCommandExecutionsForSandboxRequest = {
    xAmzTarget: XAmzTarget1AwsCodeBuildCommandExecutionApi;
  };

  export class ListCommandExecutionsForSandboxError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCommandExecutionsForSandboxError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartCommandExecutionRequest = {
    xAmzTarget: XAmzTarget2AwsCodeBuildCommandExecutionApi;
  };

  export class StartCommandExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartCommandExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
