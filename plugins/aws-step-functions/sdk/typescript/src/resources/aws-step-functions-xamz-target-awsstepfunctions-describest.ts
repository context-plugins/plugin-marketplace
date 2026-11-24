import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiSchema,
  type XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi,
} from "../models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-describest-api.js";
import type { Servers } from "../servers.js";

export class AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe State Machine Alias
   *
   * @remarks
   * Returns details about a state machine alias. Related operations: CreateStateMachineAlias
   * ListStateMachineAliases UpdateStateMachineAlias DeleteStateMachineAlias
   *
   * @returns Success
   *
   * @throws {@link
   * AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeStateMachineAlias(
    request: AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeStateMachineAlias"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest.DescribeStateMachineAliasError,
      },
      options,
    );
  }
}

export namespace AwsStepFunctionsXAmzTargetAwsstepfunctionsDescribest {
  export type DescribeStateMachineAliasRequest = {
    xAmzTarget: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsDescribestApi;
  };

  export class DescribeStateMachineAliasError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeStateMachineAliasError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
