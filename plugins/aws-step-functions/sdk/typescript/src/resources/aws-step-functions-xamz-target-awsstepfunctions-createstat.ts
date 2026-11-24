import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiSchema,
  type XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi,
} from "../models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-createstat-api.js";
import type { Servers } from "../servers.js";

export class AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create State Machine Alias
   *
   * @remarks
   * Creates an alias for a state machine that points to one or two versions of the same state
   * machine. You can set your application to call StartExecution with an alias and update the
   * version the alias uses without changing the client's code. You can also map an alias to split
   * StartExecution requests between two versions of a state machine. To do this, add a second
   * RoutingConfig object in the routingConfiguration parameter. You must also specify the
   * percentage of execution run requests each version should receive in both RoutingConfig objects.
   * Step Functions randomly chooses which version runs a given execution based on the percentage
   * you specify. To create an alias that points to a single version, specify a single RoutingConfig
   * object with a weight set to 100. You can create up to 100 aliases for each state machine. You
   * must delete unused aliases using the DeleteStateMachineAlias API action.
   * CreateStateMachineAlias is an idempotent API. Step Functions bases the idempotency check on the
   * stateMachineArn, description, name, and routingConfiguration parameters. Requests that contain
   * the same values for these parameters return a successful idempotent response without creating a
   * duplicate r
   *
   * @returns Success
   *
   * @throws {@link
   * AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createStateMachineAlias(
    request: AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateStateMachineAlias"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat.CreateStateMachineAliasError,
      },
      options,
    );
  }
}

export namespace AwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestat {
  export type CreateStateMachineAliasRequest = {
    xAmzTarget: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsCreatestatApi;
  };

  export class CreateStateMachineAliasError extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error402", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStateMachineAliasError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
