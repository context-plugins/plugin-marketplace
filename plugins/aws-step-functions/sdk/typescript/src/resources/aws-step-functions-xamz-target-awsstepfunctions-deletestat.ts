import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiSchema,
  type XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi,
} from "../models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-deletestat-api.js";
import {
  xAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiSchema,
  type XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi,
} from "../models/xamz-target1-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-deletestat-api.js";
import type { Servers } from "../servers.js";

export class AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete State Machine Alias
   *
   * @remarks
   * Deletes a state machine alias. After you delete a state machine alias, you can't use it to
   * start executions. When you delete a state machine alias, Step Functions doesn't delete the
   * state machine versions that alias references. Related operations: CreateStateMachineAlias
   * DescribeStateMachineAlias ListStateMachineAliases UpdateStateMachineAlias
   *
   * @returns Success
   *
   * @throws {@link
   * AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteStateMachineAlias(
    request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteStateMachineAlias"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineAliasError,
      },
      options,
    );
  }

  /**
   * Delete State Machine Version
   *
   * @remarks
   * Deletes a state machine version. After you delete a version, you can't call StartExecution
   * using that version's ARN or use the version with a state machine alias. Deleting a state
   * machine version won't terminate its in-progress executions. You can't delete a state machine
   * version currently referenced by one or more aliases. Before you delete a version, you must
   * either delete the aliases or update them to point to another state machine version. Related
   * operations: PublishStateMachineVersion ListStateMachineVersions
   *
   * @returns Success
   *
   * @throws {@link
   * AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteStateMachineVersion(
    request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteStateMachineVersion"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat.DeleteStateMachineVersionError,
      },
      options,
    );
  }
}

export namespace AwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestat {
  export type DeleteStateMachineAliasRequest = {
    xAmzTarget: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi;
  };

  export class DeleteStateMachineAliasError extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStateMachineAliasError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteStateMachineVersionRequest = {
    xAmzTarget: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDeletestatApi;
  };

  export class DeleteStateMachineVersionError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStateMachineVersionError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
