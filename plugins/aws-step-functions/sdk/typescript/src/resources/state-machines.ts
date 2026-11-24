import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsStepFunctionsStateMachinesApiSchema,
  type XAmzTargetAwsStepFunctionsStateMachinesApi,
} from "../models/xamz-target-aws-step-functions-state-machines-api.js";
import {
  xAmzTarget1AwsStepFunctionsStateMachinesApiSchema,
  type XAmzTarget1AwsStepFunctionsStateMachinesApi,
} from "../models/xamz-target1-aws-step-functions-state-machines-api.js";
import {
  xAmzTarget2AwsStepFunctionsStateMachinesApiSchema,
  type XAmzTarget2AwsStepFunctionsStateMachinesApi,
} from "../models/xamz-target2-aws-step-functions-state-machines-api.js";
import {
  xAmzTarget3AwsStepFunctionsStateMachinesApiSchema,
  type XAmzTarget3AwsStepFunctionsStateMachinesApi,
} from "../models/xamz-target3-aws-step-functions-state-machines-api.js";
import {
  xAmzTarget4AwsStepFunctionsStateMachinesApiSchema,
  type XAmzTarget4AwsStepFunctionsStateMachinesApi,
} from "../models/xamz-target4-aws-step-functions-state-machines-api.js";
import {
  xAmzTarget5AwsStepFunctionsStateMachinesApiSchema,
  type XAmzTarget5AwsStepFunctionsStateMachinesApi,
} from "../models/xamz-target5-aws-step-functions-state-machines-api.js";
import type { Servers } from "../servers.js";

export class StateMachines {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create State Machine
   *
   * @remarks
   * Creates a state machine. A state machine consists of a collection of states that can do work
   * (Task states), determine to which states to transition next (Choice states), stop an execution
   * with an error (Fail states), and so on. State machines are specified using a JSON-based,
   * structured language. For more information, see Amazon States Language in the Step Functions
   * User Guide. If you set the publish parameter of this API action to true, it publishes version 1
   * as the first revision of the state machine. For additional control over security, you can
   * encrypt your data using a customer-managed key for Step Functions state machines. You can
   * configure a symmetric KMS key and data key reuse period when creating or updating a State
   * Machine. The execution history and state machine definition will be encrypted with the key
   * applied to the State Machine. This operation is eventually consistent. The results are best
   * effort and may not reflect very recent updates and changes. CreateStateMachine is an idempotent
   * API. Subsequent requests won’t create a duplicate resource if it was already created.
   * CreateStateMachine's idempotency check is based on the state machine name, definition, type,
   * Logging
   *
   * @returns Success
   *
   * @throws {@link StateMachines.CreateStateMachine2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createStateMachine2(
    request: StateMachines.CreateStateMachine2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, StateMachines.CreateStateMachine2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateStateMachine"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsStepFunctionsStateMachinesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StateMachines.CreateStateMachine2Error,
      },
      options,
    );
  }

  /**
   * Delete State Machine
   *
   * @remarks
   * Deletes a state machine. This is an asynchronous operation. It sets the state machine's status
   * to DELETING and begins the deletion process. A state machine is deleted only when all its
   * executions are completed. On the next state transition, the state machine's executions are
   * terminated. A qualified state machine ARN can either refer to a Distributed Map state defined
   * within a state machine, a version ARN, or an alias ARN. The following are some examples of
   * qualified and unqualified state machine ARNs: The following qualified state machine ARN refers
   * to a Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.
   * arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide
   * a qualified state machine ARN that refers to a Distributed Map state, the request fails with
   * ValidationException. The following unqualified state machine ARN refers to a state machine
   * named myStateMachine. arn:partition:states:region:account-id:stateMachine:myStateMachine This
   * API action also deletes all versions and aliases associated with a state machine. For EXPRESS
   * state machines, the deletion happens eventually (usually in less than a minute).
   *
   * @returns Success
   *
   * @throws {@link StateMachines.DeleteStateMachine2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteStateMachine2(
    request: StateMachines.DeleteStateMachine2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, StateMachines.DeleteStateMachine2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteStateMachine"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsStepFunctionsStateMachinesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StateMachines.DeleteStateMachine2Error,
      },
      options,
    );
  }

  /**
   * Describe State Machine
   *
   * @remarks
   * Provides information about a state machine's definition, its IAM role Amazon Resource Name
   * (ARN), and configuration. A qualified state machine ARN can either refer to a Distributed Map
   * state defined within a state machine, a version ARN, or an alias ARN. The following are some
   * examples of qualified and unqualified state machine ARNs: The following qualified state machine
   * ARN refers to a Distributed Map state with a label mapStateLabel in a state machine named
   * myStateMachine.
   * arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide
   * a qualified state machine ARN that refers to a Distributed Map state, the request fails with
   * ValidationException. The following qualified state machine ARN refers to an alias named PROD.
   * arn::states:::stateMachine: If you provide a qualified state machine ARN that refers to a
   * version ARN or an alias ARN, the request starts execution for that version or alias. The
   * following unqualified state machine ARN refers to a state machine named myStateMachine.
   * arn::states:::stateMachine: This API action returns the details for a state machine version if
   * the stateMachineArn you specify is a state machine version ARN. This operat
   *
   * @returns Success
   *
   * @throws {@link StateMachines.DescribeStateMachine2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeStateMachine2(
    request: StateMachines.DescribeStateMachine2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, StateMachines.DescribeStateMachine2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeStateMachine"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsStepFunctionsStateMachinesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StateMachines.DescribeStateMachine2Error,
      },
      options,
    );
  }

  /**
   * Describe State Machine For Execution
   *
   * @remarks
   * Provides information about a state machine's definition, its execution role ARN, and
   * configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon
   * Resource Name (ARN) in the response. The state machine returned is the state machine associated
   * with the Map Run. This operation is eventually consistent. The results are best effort and may
   * not reflect very recent updates and changes. This API action is not supported by EXPRESS state
   * machines.
   *
   * @returns Success
   *
   * @throws {@link StateMachines.DescribeStateMachineForExecution2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeStateMachineForExecution2(
    request: StateMachines.DescribeStateMachineForExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, StateMachines.DescribeStateMachineForExecution2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeStateMachineForExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsStepFunctionsStateMachinesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StateMachines.DescribeStateMachineForExecution2Error,
      },
      options,
    );
  }

  /**
   * List State Machines
   *
   * @remarks
   * Lists the existing state machines. If nextToken is returned, there are more results available.
   * The value of nextToken is a unique pagination token for each page. Make the call again using
   * the returned token to retrieve the next page. Keep all other arguments unchanged. Each
   * pagination token expires after 24 hours. Using an expired pagination token will return an HTTP
   * 400 InvalidToken error. This operation is eventually consistent. The results are best effort
   * and may not reflect very recent updates and changes.
   *
   * @returns Success
   *
   * @throws {@link StateMachines.ListStateMachines2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listStateMachines2(
    request: StateMachines.ListStateMachines2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, StateMachines.ListStateMachines2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListStateMachines"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsStepFunctionsStateMachinesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StateMachines.ListStateMachines2Error,
      },
      options,
    );
  }

  /**
   * Update State Machine
   *
   * @remarks
   * Updates an existing state machine by modifying its definition, roleArn, loggingConfiguration,
   * or EncryptionConfiguration. Running executions will continue to use the previous definition and
   * roleArn. You must include at least one of definition or roleArn or you will receive a
   * MissingRequiredParameter error. A qualified state machine ARN refers to a Distributed Map state
   * defined within a state machine. For example, the qualified state machine ARN
   * arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel refers to a
   * Distributed Map state with a label mapStateLabel in the state machine named stateMachineName. A
   * qualified state machine ARN can either refer to a Distributed Map state defined within a state
   * machine, a version ARN, or an alias ARN. The following are some examples of qualified and
   * unqualified state machine ARNs: The following qualified state machine ARN refers to a
   * Distributed Map state with a label mapStateLabel in a state machine named myStateMachine.
   * arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide
   * a qualified state machine ARN that refers to a Distributed Map state, the request fails with
   * Validation
   *
   * @returns Success
   *
   * @throws {@link StateMachines.UpdateStateMachine2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateStateMachine2(
    request: StateMachines.UpdateStateMachine2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, StateMachines.UpdateStateMachine2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateStateMachine"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget5AwsStepFunctionsStateMachinesApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StateMachines.UpdateStateMachine2Error,
      },
      options,
    );
  }
}

export namespace StateMachines {
  export type CreateStateMachine2Request = {
    xAmzTarget: XAmzTargetAwsStepFunctionsStateMachinesApi;
  };

  export class CreateStateMachine2Error extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateStateMachine2Error> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteStateMachine2Request = {
    xAmzTarget: XAmzTarget1AwsStepFunctionsStateMachinesApi;
  };

  export class DeleteStateMachine2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStateMachine2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeStateMachine2Request = {
    xAmzTarget: XAmzTarget2AwsStepFunctionsStateMachinesApi;
  };

  export class DescribeStateMachine2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeStateMachine2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeStateMachineForExecution2Request = {
    xAmzTarget: XAmzTarget3AwsStepFunctionsStateMachinesApi;
  };

  export class DescribeStateMachineForExecution2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeStateMachineForExecution2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListStateMachines2Request = {
    xAmzTarget: XAmzTarget4AwsStepFunctionsStateMachinesApi;
  };

  export class ListStateMachines2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListStateMachines2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateStateMachine2Request = {
    xAmzTarget: XAmzTarget5AwsStepFunctionsStateMachinesApi;
  };

  export class UpdateStateMachine2Error extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"error400", undefined>
      | Declared<"error402", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStateMachine2Error> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
