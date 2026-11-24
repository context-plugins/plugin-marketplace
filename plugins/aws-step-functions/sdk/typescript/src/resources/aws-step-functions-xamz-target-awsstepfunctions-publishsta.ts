import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiSchema,
  type XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi,
} from "../models/xamz-target-aws-step-functions-aws-step-functions-xamz-target-awsstepfunctions-publishsta-api.js";
import type { Servers } from "../servers.js";

export class AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Publish State Machine Version
   *
   * @remarks
   * Creates a version from the current revision of a state machine. Use versions to create
   * immutable snapshots of your state machine. You can start executions from versions either
   * directly or with an alias. To create an alias, use CreateStateMachineAlias. You can publish up
   * to 1000 versions for each state machine. You must manually delete unused versions using the
   * DeleteStateMachineVersion API action. PublishStateMachineVersion is an idempotent API. It
   * doesn't create a duplicate state machine version if it already exists for the current revision.
   * Step Functions bases PublishStateMachineVersion's idempotency check on the stateMachineArn,
   * name, and revisionId parameters. Requests with the same parameters return a successful
   * idempotent response. If you don't specify a revisionId, Step Functions checks for a previously
   * published version of the state machine's current revision. Related operations:
   * DeleteStateMachineVersion ListStateMachineVersions
   *
   * @returns Success
   *
   * @throws {@link
   * AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  publishStateMachineVersion(
    request: AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#PublishStateMachineVersion"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta.PublishStateMachineVersionError,
      },
      options,
    );
  }
}

export namespace AwsStepFunctionsXAmzTargetAwsstepfunctionsPublishsta {
  export type PublishStateMachineVersionRequest = {
    xAmzTarget: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi;
  };

  export class PublishStateMachineVersionError extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"error400", undefined>
      | Declared<"error402", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublishStateMachineVersionError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
