import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiSchema,
  type XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi,
} from "../models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-liststatem-api.js";
import {
  xAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiSchema,
  type XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi,
} from "../models/xamz-target1-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-liststatem-api.js";
import type { Servers } from "../servers.js";

export class AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List State Machine Aliases
   *
   * @remarks
   * Lists aliases for a specified state machine ARN. Results are sorted by time, with the most
   * recently created aliases listed first. To list aliases that reference a state machine version,
   * you can specify the version ARN in the stateMachineArn parameter. If nextToken is returned,
   * there are more results available. The value of nextToken is a unique pagination token for each
   * page. Make the call again using the returned token to retrieve the next page. Keep all other
   * arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination
   * token will return an HTTP 400 InvalidToken error. Related operations: CreateStateMachineAlias
   * DescribeStateMachineAlias UpdateStateMachineAlias DeleteStateMachineAlias
   *
   * @returns Success
   *
   * @throws {@link
   * AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listStateMachineAliases(
    request: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListStateMachineAliases"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineAliasesError,
      },
      options,
    );
  }

  /**
   * List State Machine Versions
   *
   * @remarks
   * Lists versions for the specified state machine Amazon Resource Name (ARN). The results are
   * sorted in descending order of the version creation time. If nextToken is returned, there are
   * more results available. The value of nextToken is a unique pagination token for each page. Make
   * the call again using the returned token to retrieve the next page. Keep all other arguments
   * unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will
   * return an HTTP 400 InvalidToken error. Related operations: PublishStateMachineVersion
   * DeleteStateMachineVersion
   *
   * @returns Success
   *
   * @throws {@link
   * AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listStateMachineVersions(
    request: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListStateMachineVersions"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem.ListStateMachineVersionsError,
      },
      options,
    );
  }
}

export namespace AwsStepFunctionsXAmzTargetAwsstepfunctionsListstatem {
  export type ListStateMachineAliasesRequest = {
    xAmzTarget: XAmzTarget1AwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi;
  };

  export class ListStateMachineAliasesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListStateMachineAliasesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListStateMachineVersionsRequest = {
    xAmzTarget: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsListstatemApi;
  };

  export class ListStateMachineVersionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListStateMachineVersionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
