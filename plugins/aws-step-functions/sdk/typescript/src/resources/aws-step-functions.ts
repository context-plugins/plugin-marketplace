import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget10Schema, type XAmzTarget10 } from "../models/xamz-target10.js";
import { xAmzTarget11Schema, type XAmzTarget11 } from "../models/xamz-target11.js";
import { xAmzTarget12Schema, type XAmzTarget12 } from "../models/xamz-target12.js";
import { xAmzTarget13Schema, type XAmzTarget13 } from "../models/xamz-target13.js";
import { xAmzTarget14Schema, type XAmzTarget14 } from "../models/xamz-target14.js";
import { xAmzTarget15Schema, type XAmzTarget15 } from "../models/xamz-target15.js";
import { xAmzTarget16Schema, type XAmzTarget16 } from "../models/xamz-target16.js";
import { xAmzTarget17Schema, type XAmzTarget17 } from "../models/xamz-target17.js";
import { xAmzTarget18Schema, type XAmzTarget18 } from "../models/xamz-target18.js";
import { xAmzTarget19Schema, type XAmzTarget19 } from "../models/xamz-target19.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget20Schema, type XAmzTarget20 } from "../models/xamz-target20.js";
import { xAmzTarget21Schema, type XAmzTarget21 } from "../models/xamz-target21.js";
import { xAmzTarget22Schema, type XAmzTarget22 } from "../models/xamz-target22.js";
import { xAmzTarget23Schema, type XAmzTarget23 } from "../models/xamz-target23.js";
import { xAmzTarget24Schema, type XAmzTarget24 } from "../models/xamz-target24.js";
import { xAmzTarget25Schema, type XAmzTarget25 } from "../models/xamz-target25.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class AwsStepFunctions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Activity
   *
   * @remarks
   * Creates an activity. An activity is a task that you write in any programming language and host
   * on any machine that has access to Step Functions. Activities must poll Step Functions using the
   * GetActivityTask API action and respond using SendTask* API actions. This function lets Step
   * Functions know the existence of your activity and returns an identifier for use in a state
   * machine and when polling from the activity. This operation is eventually consistent. The
   * results are best effort and may not reflect very recent updates and changes. CreateActivity is
   * an idempotent API. Subsequent requests won’t create a duplicate resource if it was already
   * created. CreateActivity's idempotency check is based on the activity name. If a following
   * request has different tags values, Step Functions will ignore these differences and treat it as
   * an idempotent request of the previous. In this case, tags will not be updated, even if they are
   * different.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.CreateActivityError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createActivity(
    request: AwsStepFunctions.CreateActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.CreateActivityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateActivity"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.CreateActivityError,
      },
      options,
    );
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
   * @throws {@link AwsStepFunctions.CreateStateMachineError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createStateMachine(
    request: AwsStepFunctions.CreateStateMachineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.CreateStateMachineError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateStateMachine"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.CreateStateMachineError,
      },
      options,
    );
  }

  /**
   * Delete Activity
   *
   * @remarks
   * Deletes an activity.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.DeleteActivityError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteActivity(
    request: AwsStepFunctions.DeleteActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.DeleteActivityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteActivity"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.DeleteActivityError,
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
   * @throws {@link AwsStepFunctions.DeleteStateMachineError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteStateMachine(
    request: AwsStepFunctions.DeleteStateMachineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.DeleteStateMachineError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteStateMachine"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.DeleteStateMachineError,
      },
      options,
    );
  }

  /**
   * Describe Activity
   *
   * @remarks
   * Describes an activity. This operation is eventually consistent. The results are best effort and
   * may not reflect very recent updates and changes.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.DescribeActivityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeActivity(
    request: AwsStepFunctions.DescribeActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.DescribeActivityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeActivity"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.DescribeActivityError,
      },
      options,
    );
  }

  /**
   * Describe Execution
   *
   * @remarks
   * Provides information about a state machine execution, such as the state machine associated with
   * the execution, the execution input and output, and relevant execution metadata. If you've
   * redriven an execution, you can use this API action to return information about the redrives of
   * that execution. In addition, you can use this API action to return the Map Run Amazon Resource
   * Name (ARN) if the execution was dispatched by a Map Run. If you specify a version or alias ARN
   * when you call the StartExecution API action, DescribeExecution returns that ARN. This operation
   * is eventually consistent. The results are best effort and may not reflect very recent updates
   * and changes. Executions of an EXPRESS state machine aren't supported by DescribeExecution
   * unless a Map Run dispatched them.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.DescribeExecutionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeExecution(
    request: AwsStepFunctions.DescribeExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.DescribeExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget10Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.DescribeExecutionError,
      },
      options,
    );
  }

  /**
   * Describe Map Run
   *
   * @remarks
   * Provides information about a Map Run's configuration, progress, and results. If you've redriven
   * a Map Run, this API action also returns information about the redrives of that Map Run. For
   * more information, see Examining Map Run in the Step Functions Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.DescribeMapRunError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeMapRun(
    request: AwsStepFunctions.DescribeMapRunRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.DescribeMapRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeMapRun"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget14Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.DescribeMapRunError,
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
   * @throws {@link AwsStepFunctions.DescribeStateMachineError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeStateMachine(
    request: AwsStepFunctions.DescribeStateMachineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.DescribeStateMachineError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeStateMachine"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.DescribeStateMachineError,
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
   * @throws {@link AwsStepFunctions.DescribeStateMachineForExecutionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeStateMachineForExecution(
    request: AwsStepFunctions.DescribeStateMachineForExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.DescribeStateMachineForExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeStateMachineForExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget7Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.DescribeStateMachineForExecutionError,
      },
      options,
    );
  }

  /**
   * Get Activity Task
   *
   * @remarks
   * Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled
   * for execution by a running state machine. This initiates a long poll, where the service holds
   * the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of
   * a task of this type is needed.) The maximum time the service holds on to the request before
   * responding is 60 seconds. If no task is available within 60 seconds, the poll returns a
   * taskToken with a null string. Workers should set their client side socket timeout to at least
   * 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).
   * Polling with GetActivityTask can cause latency in some implementations. See Avoid Latency When
   * Polling for Activity Tasks in the Step Functions Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.GetActivityTaskError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getActivityTask(
    request: AwsStepFunctions.GetActivityTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.GetActivityTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetActivityTask"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget17Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.GetActivityTaskError,
      },
      options,
    );
  }

  /**
   * Get Execution History
   *
   * @remarks
   * Returns the history of the specified execution as a list of events. By default, the results are
   * returned in ascending order of the timeStamp of the events. Use the reverseOrder parameter to
   * get the latest events first. If nextToken is returned, there are more results available. The
   * value of nextToken is a unique pagination token for each page. Make the call again using the
   * returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination
   * token expires after 24 hours. Using an expired pagination token will return an HTTP 400
   * InvalidToken error. This API action is not supported by EXPRESS state machines.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.GetExecutionHistoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getExecutionHistory(
    request: AwsStepFunctions.GetExecutionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.GetExecutionHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetExecutionHistory"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget18Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.GetExecutionHistoryError,
      },
      options,
    );
  }

  /**
   * List Activities
   *
   * @remarks
   * Lists the existing activities. If nextToken is returned, there are more results available. The
   * value of nextToken is a unique pagination token for each page. Make the call again using the
   * returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination
   * token expires after 24 hours. Using an expired pagination token will return an HTTP 400
   * InvalidToken error. This operation is eventually consistent. The results are best effort and
   * may not reflect very recent updates and changes.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.ListActivitiesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listActivities(
    request: AwsStepFunctions.ListActivitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.ListActivitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListActivities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.ListActivitiesError,
      },
      options,
    );
  }

  /**
   * List Executions
   *
   * @remarks
   * Lists all executions of a state machine or a Map Run. You can list all executions related to a
   * state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a
   * Map Run by specifying a Map Run ARN. Using this API action, you can also list all redriven
   * executions. You can also provide a state machine alias ARN or version ARN to list the
   * executions associated with a specific alias or version. Results are sorted by time, with the
   * most recent execution first. Running executions are sorted by their startDate or redriveDate,
   * and other executions are sorted by their stopDate. If nextToken is returned, there are more
   * results available. The value of nextToken is a unique pagination token for each page. Make the
   * call again using the returned token to retrieve the next page. Keep all other arguments
   * unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will
   * return an HTTP 400 InvalidToken error. This operation is eventually consistent. The results are
   * best effort and may not reflect very recent updates and changes. This API action is not
   * supported by EXPRESS state machines. However, you may list EXPRESS children started by a map
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.ListExecutionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listExecutions(
    request: AwsStepFunctions.ListExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.ListExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListExecutions"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget11Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.ListExecutionsError,
      },
      options,
    );
  }

  /**
   * List Map Runs
   *
   * @remarks
   * Lists all Map Runs that were started by a given state machine execution. Use this API action to
   * obtain Map Run ARNs, and then call DescribeMapRun to obtain more information, if needed.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.ListMapRunsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listMapRuns(
    request: AwsStepFunctions.ListMapRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.ListMapRunsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListMapRuns"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget15Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.ListMapRunsError,
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
   * @throws {@link AwsStepFunctions.ListStateMachinesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listStateMachines(
    request: AwsStepFunctions.ListStateMachinesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.ListStateMachinesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListStateMachines"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget8Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.ListStateMachinesError,
      },
      options,
    );
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * List tags for a given resource. Tags may only contain Unicode letters, digits, white space, or
   * these symbols: _ . : / = + - \@.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.ListTagsForResourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTagsForResource(
    request: AwsStepFunctions.ListTagsForResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget19Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * Send Task Failure
   *
   * @remarks
   * Used by activity workers, Task states using the callback pattern, and optionally Task states
   * using the job run pattern to report that the task identified by the taskToken failed. For an
   * execution with encryption enabled, Step Functions will encrypt the error and cause fields using
   * the KMS key for the execution role. A caller can mark a task as fail without using any KMS
   * permissions in the execution role if the caller provides a null value for both error and cause
   * fields because no data needs to be encrypted.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.SendTaskFailureError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  sendTaskFailure(
    request: AwsStepFunctions.SendTaskFailureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.SendTaskFailureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SendTaskFailure"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget20Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.SendTaskFailureError,
      },
      options,
    );
  }

  /**
   * Send Task Heartbeat
   *
   * @remarks
   * Used by activity workers and Task states using the callback pattern, and optionally Task states
   * using the job run pattern to report to Step Functions that the task represented by the
   * specified taskToken is still making progress. This action resets the Heartbeat clock. The
   * Heartbeat threshold is specified in the state machine's Amazon States Language definition
   * (HeartbeatSeconds). This action does not in itself create an event in the execution history.
   * However, if the task times out, the execution history contains an ActivityTimedOut entry for
   * activities, or a TaskTimedOut entry for tasks using the job run or callback pattern. The
   * Timeout of a task, defined in the state machine's Amazon States Language definition, is its
   * maximum allowed duration, regardless of the number of SendTaskHeartbeat requests received. Use
   * HeartbeatSeconds to configure the timeout interval for heartbeats.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.SendTaskHeartbeatError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  sendTaskHeartbeat(
    request: AwsStepFunctions.SendTaskHeartbeatRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.SendTaskHeartbeatError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SendTaskHeartbeat"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget21Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.SendTaskHeartbeatError,
      },
      options,
    );
  }

  /**
   * Send Task Success
   *
   * @remarks
   * Used by activity workers, Task states using the callback pattern, and optionally Task states
   * using the job run pattern to report that the task identified by the taskToken completed
   * successfully.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.SendTaskSuccessError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  sendTaskSuccess(
    request: AwsStepFunctions.SendTaskSuccessRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.SendTaskSuccessError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SendTaskSuccess"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget22Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.SendTaskSuccessError,
      },
      options,
    );
  }

  /**
   * Start Execution
   *
   * @remarks
   * Starts a state machine execution. A qualified state machine ARN can either refer to a
   * Distributed Map state defined within a state machine, a version ARN, or an alias ARN. The
   * following are some examples of qualified and unqualified state machine ARNs: The following
   * qualified state machine ARN refers to a Distributed Map state with a label mapStateLabel in a
   * state machine named myStateMachine.
   * arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel If you provide
   * a qualified state machine ARN that refers to a Distributed Map state, the request fails with
   * ValidationException. The following qualified state machine ARN refers to an alias named PROD.
   * arn::states:::stateMachine: If you provide a qualified state machine ARN that refers to a
   * version ARN or an alias ARN, the request starts execution for that version or alias. The
   * following unqualified state machine ARN refers to a state machine named myStateMachine.
   * arn::states:::stateMachine: If you start an execution with an unqualified state machine ARN,
   * Step Functions uses the latest revision of the state machine for the execution. To start
   * executions of a state machine version, call StartExecution and provide
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.StartExecutionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startExecution(
    request: AwsStepFunctions.StartExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.StartExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget12Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.StartExecutionError,
      },
      options,
    );
  }

  /**
   * Start Sync Execution
   *
   * @remarks
   * Starts a Synchronous Express state machine execution. StartSyncExecution is not available for
   * STANDARD workflows. StartSyncExecution will return a 200 OK response, even if your execution
   * fails, because the status code in the API response doesn't reflect function errors. Error codes
   * are reserved for errors that prevent your execution from running, such as permissions errors,
   * limit errors, or issues with your state machine code and configuration.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.StartSyncExecutionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startSyncExecution(
    request: AwsStepFunctions.StartSyncExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.StartSyncExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartSyncExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget23Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.StartSyncExecutionError,
      },
      options,
    );
  }

  /**
   * Stop Execution
   *
   * @remarks
   * Stops an execution. This API action is not supported by EXPRESS state machines. For an
   * execution with encryption enabled, Step Functions will encrypt the error and cause fields using
   * the KMS key for the execution role. A caller can stop an execution without using any KMS
   * permissions in the execution role if the caller provides a null value for both error and cause
   * fields because no data needs to be encrypted.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.StopExecutionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopExecution(
    request: AwsStepFunctions.StopExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.StopExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget13Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.StopExecutionError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Add a tag to a Step Functions resource. An array of key-value pairs. For more information, see
   * Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide,
   * and Controlling Access Using IAM Tags. Tags may only contain Unicode letters, digits, white
   * space, or these symbols: _ . : / = + - \@.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.TagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  tagResource(
    request: AwsStepFunctions.TagResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget24Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.TagResourceError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Remove a tag from a Step Functions resource
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.UntagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  untagResource(
    request: AwsStepFunctions.UntagResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget25Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.UntagResourceError,
      },
      options,
    );
  }

  /**
   * Update Map Run
   *
   * @remarks
   * Updates an in-progress Map Run's configuration to include changes to the settings that control
   * maximum concurrency and Map Run failure.
   *
   * @returns Success
   *
   * @throws {@link AwsStepFunctions.UpdateMapRunError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateMapRun(
    request: AwsStepFunctions.UpdateMapRunRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.UpdateMapRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateMapRun"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget16Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.UpdateMapRunError,
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
   * @throws {@link AwsStepFunctions.UpdateStateMachineError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStepFunctionsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateStateMachine(
    request: AwsStepFunctions.UpdateStateMachineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsStepFunctions.UpdateStateMachineError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateStateMachine"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget9Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsStepFunctions.UpdateStateMachineError,
      },
      options,
    );
  }
}

export namespace AwsStepFunctions {
  export type CreateActivityRequest = {
    xAmzTarget: XAmzTarget;
  };

  export class CreateActivityError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateActivityError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateStateMachineRequest = {
    xAmzTarget: XAmzTarget4;
  };

  export class CreateStateMachineError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateStateMachineError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteActivityRequest = {
    xAmzTarget: XAmzTarget1;
  };

  export class DeleteActivityError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteActivityError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteStateMachineRequest = {
    xAmzTarget: XAmzTarget5;
  };

  export class DeleteStateMachineError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStateMachineError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeActivityRequest = {
    xAmzTarget: XAmzTarget2;
  };

  export class DescribeActivityError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeActivityError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeExecutionRequest = {
    xAmzTarget: XAmzTarget10;
  };

  export class DescribeExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeMapRunRequest = {
    xAmzTarget: XAmzTarget14;
  };

  export class DescribeMapRunError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeMapRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeStateMachineRequest = {
    xAmzTarget: XAmzTarget6;
  };

  export class DescribeStateMachineError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeStateMachineError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeStateMachineForExecutionRequest = {
    xAmzTarget: XAmzTarget7;
  };

  export class DescribeStateMachineForExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeStateMachineForExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetActivityTaskRequest = {
    xAmzTarget: XAmzTarget17;
  };

  export class GetActivityTaskError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetActivityTaskError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetExecutionHistoryRequest = {
    xAmzTarget: XAmzTarget18;
  };

  export class GetExecutionHistoryError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetExecutionHistoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListActivitiesRequest = {
    xAmzTarget: XAmzTarget3;
  };

  export class ListActivitiesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListActivitiesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListExecutionsRequest = {
    xAmzTarget: XAmzTarget11;
  };

  export class ListExecutionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListExecutionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMapRunsRequest = {
    xAmzTarget: XAmzTarget15;
  };

  export class ListMapRunsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListMapRunsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListStateMachinesRequest = {
    xAmzTarget: XAmzTarget8;
  };

  export class ListStateMachinesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListStateMachinesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListTagsForResourceRequest = {
    xAmzTarget: XAmzTarget19;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type SendTaskFailureRequest = {
    xAmzTarget: XAmzTarget20;
  };

  export class SendTaskFailureError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SendTaskFailureError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SendTaskHeartbeatRequest = {
    xAmzTarget: XAmzTarget21;
  };

  export class SendTaskHeartbeatError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SendTaskHeartbeatError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SendTaskSuccessRequest = {
    xAmzTarget: XAmzTarget22;
  };

  export class SendTaskSuccessError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SendTaskSuccessError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartExecutionRequest = {
    xAmzTarget: XAmzTarget12;
  };

  export class StartExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartSyncExecutionRequest = {
    xAmzTarget: XAmzTarget23;
  };

  export class StartSyncExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartSyncExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StopExecutionRequest = {
    xAmzTarget: XAmzTarget13;
  };

  export class StopExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StopExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type TagResourceRequest = {
    xAmzTarget: XAmzTarget24;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UntagResourceRequest = {
    xAmzTarget: XAmzTarget25;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateMapRunRequest = {
    xAmzTarget: XAmzTarget16;
  };

  export class UpdateMapRunError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMapRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateStateMachineRequest = {
    xAmzTarget: XAmzTarget9;
  };

  export class UpdateStateMachineError extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"error400", undefined>
      | Declared<"error402", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStateMachineError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
