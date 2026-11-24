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
import {
  xAmzTarget1AwsStepFunctionsOperationsApiSchema,
  type XAmzTarget1AwsStepFunctionsOperationsApi,
} from "../models/xamz-target1-aws-step-functions-operations-api.js";
import {
  xAmzTarget2AwsStepFunctionsOperationsApiSchema,
  type XAmzTarget2AwsStepFunctionsOperationsApi,
} from "../models/xamz-target2-aws-step-functions-operations-api.js";
import {
  xAmzTarget3AwsStepFunctionsOperationsApiSchema,
  type XAmzTarget3AwsStepFunctionsOperationsApi,
} from "../models/xamz-target3-aws-step-functions-operations-api.js";
import type { Servers } from "../servers.js";

export class Operations {
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
   * @throws {@link Operations.PublishStateMachineVersion2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  publishStateMachineVersion2(
    request: Operations.PublishStateMachineVersion2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.PublishStateMachineVersion2Error> {
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
        errorFactory: Operations.PublishStateMachineVersion2Error,
      },
      options,
    );
  }

  /**
   * Redrive Execution
   *
   * @remarks
   * Restarts unsuccessful executions of Standard workflows that didn't complete successfully in the
   * last 14 days. These include failed, aborted, or timed out executions. When you redrive an
   * execution, it continues the failed execution from the unsuccessful step and uses the same
   * input. Step Functions preserves the results and execution history of the successful steps, and
   * doesn't rerun these steps when you redrive an execution. Redriven executions use the same state
   * machine definition and execution ARN as the original execution attempt. For workflows that
   * include an Inline Map or Parallel state, RedriveExecution API action reschedules and redrives
   * only the iterations and branches that failed or aborted. To redrive a workflow that includes a
   * Distributed Map state whose Map Run failed, you must redrive the parent workflow. The parent
   * workflow redrives all the unsuccessful states, including a failed Map Run. If a Map Run was not
   * started in the original execution attempt, the redriven parent workflow starts the Map Run.
   * This API action is not supported by EXPRESS state machines. However, you can restart the
   * unsuccessful executions of Express child workflows in a Distributed Map by redrivin
   *
   * @returns Success
   *
   * @throws {@link Operations.RedriveExecutionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  redriveExecution(
    request: Operations.RedriveExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RedriveExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RedriveExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsStepFunctionsOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.RedriveExecutionError,
      },
      options,
    );
  }

  /**
   * Test State
   *
   * @remarks
   * Accepts the definition of a single state and executes it. You can test a state without creating
   * a state machine or updating an existing state machine. Using this API, you can test the
   * following: A state's input and output processing data flow An Amazon Web Services service
   * integration request and response An HTTP Task request and response You can call this API on
   * only one state at a time. The states that you can test include the following: All Task types
   * except Activity Pass Wait Choice Succeed Fail The TestState API assumes an IAM role which must
   * contain the required IAM permissions for the resources your state is accessing. For information
   * about the permissions a state might need, see IAM permissions to test a state. The TestState
   * API can run for up to five minutes. If the execution of a state exceeds this duration, it fails
   * with the States.Timeout error. TestState only supports the following when a mock is specified:
   * Activity tasks, .sync or .waitForTaskToken service integration patterns, Parallel, or Map
   * states.
   *
   * @returns Success
   *
   * @throws {@link Operations.TestStateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  testState(
    request: Operations.TestStateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.TestStateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TestState"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsStepFunctionsOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.TestStateError,
      },
      options,
    );
  }

  /**
   * Validate State Machine Definition
   *
   * @remarks
   * Validates the syntax of a state machine definition specified in Amazon States Language (ASL), a
   * JSON-based, structured language. You can validate that a state machine definition is correct
   * without creating a state machine resource. Suggested uses for ValidateStateMachineDefinition:
   * Integrate automated checks into your code review or Continuous Integration (CI) process to
   * check state machine definitions before starting deployments. Run validation from a Git
   * pre-commit hook to verify the definition before committing to your source repository.
   * Validation will look for problems in your state machine definition and return a result and a
   * list of diagnostic elements. The result value will be OK when your workflow definition can be
   * successfully created or updated. Note the result can be OK even when diagnostic warnings are
   * present in the response. The result value will be FAIL when the workflow definition contains
   * errors that would prevent you from creating or updating your state machine. The list of
   * ValidateStateMachineDefinitionDiagnostic data elements can contain zero or more WARNING and/or
   * ERROR elements. The ValidateStateMachineDefinition API might add new diagnostics in the future,
   * a
   *
   * @returns Success
   *
   * @throws {@link Operations.ValidateStateMachineDefinitionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  validateStateMachineDefinition(
    request: Operations.ValidateStateMachineDefinitionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ValidateStateMachineDefinitionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ValidateStateMachineDefinition"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsStepFunctionsOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ValidateStateMachineDefinitionError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type PublishStateMachineVersion2Request = {
    xAmzTarget: XAmzTargetAwsStepFunctionsAwsStepFunctionsXAmzTargetAwsstepfunctionsPublishstaApi;
  };

  export class PublishStateMachineVersion2Error extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"error400", undefined>
      | Declared<"error402", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublishStateMachineVersion2Error> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type RedriveExecutionRequest = {
    xAmzTarget: XAmzTarget1AwsStepFunctionsOperationsApi;
  };

  export class RedriveExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RedriveExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type TestStateRequest = {
    xAmzTarget: XAmzTarget2AwsStepFunctionsOperationsApi;
  };

  export class TestStateError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TestStateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ValidateStateMachineDefinitionRequest = {
    xAmzTarget: XAmzTarget3AwsStepFunctionsOperationsApi;
  };

  export class ValidateStateMachineDefinitionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ValidateStateMachineDefinitionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
