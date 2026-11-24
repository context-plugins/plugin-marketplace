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
import { xAmzTarget26Schema, type XAmzTarget26 } from "../models/xamz-target26.js";
import { xAmzTarget27Schema, type XAmzTarget27 } from "../models/xamz-target27.js";
import { xAmzTarget28Schema, type XAmzTarget28 } from "../models/xamz-target28.js";
import { xAmzTarget29Schema, type XAmzTarget29 } from "../models/xamz-target29.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget30Schema, type XAmzTarget30 } from "../models/xamz-target30.js";
import { xAmzTarget31Schema, type XAmzTarget31 } from "../models/xamz-target31.js";
import { xAmzTarget32Schema, type XAmzTarget32 } from "../models/xamz-target32.js";
import { xAmzTarget33Schema, type XAmzTarget33 } from "../models/xamz-target33.js";
import { xAmzTarget34Schema, type XAmzTarget34 } from "../models/xamz-target34.js";
import { xAmzTarget35Schema, type XAmzTarget35 } from "../models/xamz-target35.js";
import { xAmzTarget36Schema, type XAmzTarget36 } from "../models/xamz-target36.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class AmazonSimpleWorkflowService {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Count Closed Workflow Executions
   *
   * @remarks
   * Returns the number of closed workflow executions within the given domain that meet the
   * specified filtering criteria. This operation is eventually consistent. The results are best
   * effort and may not exactly reflect recent updates and changes. Access Control You can use IAM
   * policies to control this action's access to Amazon SWF resources as follows: Use a Resource
   * element with the domain name to limit the action to only specified domains. Use an Action
   * element to allow or deny permission to call this action. Constrain the following parameters by
   * using a Condition element with the appropriate keys. tagFilter.tag: String constraint. The key
   * is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
   * typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't
   * have sufficient permissions to invoke the action, or the parameter values fall outside the
   * specified constraints, the action fails. The associated event attribute's cause parameter is
   * set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
   * Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countClosedWorkflowExecutions(
    request: AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CountClosedWorkflowExecutions"),
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
        errorFactory: AmazonSimpleWorkflowService.CountClosedWorkflowExecutionsError,
      },
      options,
    );
  }

  /**
   * Count Open Workflow Executions
   *
   * @remarks
   * Returns the number of open workflow executions within the given domain that meet the specified
   * filtering criteria. This operation is eventually consistent. The results are best effort and
   * may not exactly reflect recent updates and changes. Access Control You can use IAM policies to
   * control this action's access to Amazon SWF resources as follows: Use a Resource element with
   * the domain name to limit the action to only specified domains. Use an Action element to allow
   * or deny permission to call this action. Constrain the following parameters by using a Condition
   * element with the appropriate keys. tagFilter.tag: String constraint. The key is
   * swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name.
   * typeFilter.version: String constraint. The key is swf:typeFilter.version. If the caller doesn't
   * have sufficient permissions to invoke the action, or the parameter values fall outside the
   * specified constraints, the action fails. The associated event attribute's cause parameter is
   * set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage
   * Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countOpenWorkflowExecutions(
    request: AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CountOpenWorkflowExecutions"),
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
        errorFactory: AmazonSimpleWorkflowService.CountOpenWorkflowExecutionsError,
      },
      options,
    );
  }

  /**
   * Count Pending Activity Tasks
   *
   * @remarks
   * Returns the estimated number of activity tasks in the specified task list. The count returned
   * is an approximation and isn't guaranteed to be exact. If you specify a task list that no
   * activity task was ever scheduled in then 0 is returned. Access Control You can use IAM policies
   * to control this action's access to Amazon SWF resources as follows: Use a Resource element with
   * the domain name to limit the action to only specified domains. Use an Action element to allow
   * or deny permission to call this action. Constrain the taskList.name parameter by using a
   * Condition element with the swf:taskList.name key to allow the action to access only certain
   * task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
   * parameter values fall outside the specified constraints, the action fails. The associated event
   * attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
   * policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.CountPendingActivityTasksError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countPendingActivityTasks(
    request: AmazonSimpleWorkflowService.CountPendingActivityTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.CountPendingActivityTasksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CountPendingActivityTasks"),
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
        errorFactory: AmazonSimpleWorkflowService.CountPendingActivityTasksError,
      },
      options,
    );
  }

  /**
   * Count Pending Decision Tasks
   *
   * @remarks
   * Returns the estimated number of decision tasks in the specified task list. The count returned
   * is an approximation and isn't guaranteed to be exact. If you specify a task list that no
   * decision task was ever scheduled in then 0 is returned. Access Control You can use IAM policies
   * to control this action's access to Amazon SWF resources as follows: Use a Resource element with
   * the domain name to limit the action to only specified domains. Use an Action element to allow
   * or deny permission to call this action. Constrain the taskList.name parameter by using a
   * Condition element with the swf:taskList.name key to allow the action to access only certain
   * task lists. If the caller doesn't have sufficient permissions to invoke the action, or the
   * parameter values fall outside the specified constraints, the action fails. The associated event
   * attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
   * policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.CountPendingDecisionTasksError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countPendingDecisionTasks(
    request: AmazonSimpleWorkflowService.CountPendingDecisionTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.CountPendingDecisionTasksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CountPendingDecisionTasks"),
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
        errorFactory: AmazonSimpleWorkflowService.CountPendingDecisionTasksError,
      },
      options,
    );
  }

  /**
   * Deprecate Activity Type
   *
   * @remarks
   * Deprecates the specified activity type. After an activity type has been deprecated, you cannot
   * create new tasks of that activity type. Tasks of this type that were scheduled before the type
   * was deprecated continue to run. Access Control You can use IAM policies to control this
   * action's access to Amazon SWF resources as follows: Use a Resource element with the domain name
   * to limit the action to only specified domains. Use an Action element to allow or deny
   * permission to call this action. Constrain the following parameters by using a Condition element
   * with the appropriate keys. activityType.name: String constraint. The key is
   * swf:activityType.name. activityType.version: String constraint. The key is
   * swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the
   * action, or the parameter values fall outside the specified constraints, the action fails. The
   * associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and
   * example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF
   * Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.DeprecateActivityTypeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deprecateActivityType(
    request: AmazonSimpleWorkflowService.DeprecateActivityTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.DeprecateActivityTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeprecateActivityType"),
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
        errorFactory: AmazonSimpleWorkflowService.DeprecateActivityTypeError,
      },
      options,
    );
  }

  /**
   * Deprecate Domain
   *
   * @remarks
   * Deprecates the specified domain. After a domain has been deprecated it cannot be used to create
   * new workflow executions or register new types. However, you can still use visibility actions on
   * this domain. Deprecating a domain also deprecates all activity and workflow types registered in
   * the domain. Executions that were started before the domain was deprecated continues to run.
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes. Access Control You can use IAM policies to control this
   * action's access to Amazon SWF resources as follows: Use a Resource element with the domain name
   * to limit the action to only specified domains. Use an Action element to allow or deny
   * permission to call this action. You cannot use an IAM policy to constrain this action's
   * parameters. If the caller doesn't have sufficient permissions to invoke the action, or the
   * parameter values fall outside the specified constraints, the action fails. The associated event
   * attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
   * policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Develope
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.DeprecateDomainError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deprecateDomain(
    request: AmazonSimpleWorkflowService.DeprecateDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.DeprecateDomainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeprecateDomain"),
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
        errorFactory: AmazonSimpleWorkflowService.DeprecateDomainError,
      },
      options,
    );
  }

  /**
   * Deprecate Workflow Type
   *
   * @remarks
   * Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot
   * create new executions of that type. Executions that were started before the type was deprecated
   * continues to run. A deprecated workflow type may still be used when calling visibility actions.
   * This operation is eventually consistent. The results are best effort and may not exactly
   * reflect recent updates and changes. Access Control You can use IAM policies to control this
   * action's access to Amazon SWF resources as follows: Use a Resource element with the domain name
   * to limit the action to only specified domains. Use an Action element to allow or deny
   * permission to call this action. Constrain the following parameters by using a Condition element
   * with the appropriate keys. workflowType.name: String constraint. The key is
   * swf:workflowType.name. workflowType.version: String constraint. The key is
   * swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the
   * action, or the parameter values fall outside the specified constraints, the action fails. The
   * associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and
   * example IAM policies, se
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.DeprecateWorkflowTypeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deprecateWorkflowType(
    request: AmazonSimpleWorkflowService.DeprecateWorkflowTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.DeprecateWorkflowTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeprecateWorkflowType"),
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
        errorFactory: AmazonSimpleWorkflowService.DeprecateWorkflowTypeError,
      },
      options,
    );
  }

  /**
   * Describe Activity Type
   *
   * @remarks
   * Returns information about the specified activity type. This includes configuration settings
   * provided when the type was registered and other general information about the type. Access
   * Control You can use IAM policies to control this action's access to Amazon SWF resources as
   * follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. Constrain the
   * following parameters by using a Condition element with the appropriate keys. activityType.name:
   * String constraint. The key is swf:activityType.name. activityType.version: String constraint.
   * The key is swf:activityType.version. If the caller doesn't have sufficient permissions to
   * invoke the action, or the parameter values fall outside the specified constraints, the action
   * fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For
   * details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the
   * Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.DescribeActivityTypeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeActivityType(
    request: AmazonSimpleWorkflowService.DescribeActivityTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.DescribeActivityTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeActivityType"),
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
        errorFactory: AmazonSimpleWorkflowService.DescribeActivityTypeError,
      },
      options,
    );
  }

  /**
   * Describe Domain
   *
   * @remarks
   * Returns information about the specified domain, including description and status. Access
   * Control You can use IAM policies to control this action's access to Amazon SWF resources as
   * follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. You cannot use
   * an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
   * permissions to invoke the action, or the parameter values fall outside the specified
   * constraints, the action fails. The associated event attribute's cause parameter is set to
   * OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access
   * to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.DescribeDomainError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeDomain(
    request: AmazonSimpleWorkflowService.DescribeDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.DescribeDomainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDomain"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget26Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.DescribeDomainError,
      },
      options,
    );
  }

  /**
   * Describe Workflow Execution
   *
   * @remarks
   * Returns information about the specified workflow execution including its type and some
   * statistics. This operation is eventually consistent. The results are best effort and may not
   * exactly reflect recent updates and changes. Access Control You can use IAM policies to control
   * this action's access to Amazon SWF resources as follows: Use a Resource element with the domain
   * name to limit the action to only specified domains. Use an Action element to allow or deny
   * permission to call this action. You cannot use an IAM policy to constrain this action's
   * parameters. If the caller doesn't have sufficient permissions to invoke the action, or the
   * parameter values fall outside the specified constraints, the action fails. The associated event
   * attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
   * policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.DescribeWorkflowExecutionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeWorkflowExecution(
    request: AmazonSimpleWorkflowService.DescribeWorkflowExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.DescribeWorkflowExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeWorkflowExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget29Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.DescribeWorkflowExecutionError,
      },
      options,
    );
  }

  /**
   * Describe Workflow Type
   *
   * @remarks
   * Returns information about the specified workflow type. This includes configuration settings
   * specified when the type was registered and other information such as creation date, current
   * status, etc. Access Control You can use IAM policies to control this action's access to Amazon
   * SWF resources as follows: Use a Resource element with the domain name to limit the action to
   * only specified domains. Use an Action element to allow or deny permission to call this action.
   * Constrain the following parameters by using a Condition element with the appropriate keys.
   * workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version:
   * String constraint. The key is swf:workflowType.version. If the caller doesn't have sufficient
   * permissions to invoke the action, or the parameter values fall outside the specified
   * constraints, the action fails. The associated event attribute's cause parameter is set to
   * OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access
   * to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.DescribeWorkflowTypeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeWorkflowType(
    request: AmazonSimpleWorkflowService.DescribeWorkflowTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.DescribeWorkflowTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeWorkflowType"),
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
        errorFactory: AmazonSimpleWorkflowService.DescribeWorkflowTypeError,
      },
      options,
    );
  }

  /**
   * Get Workflow Execution History
   *
   * @remarks
   * Returns the history of the specified workflow execution. The results may be split into multiple
   * pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by
   * the initial call. This operation is eventually consistent. The results are best effort and may
   * not exactly reflect recent updates and changes. Access Control You can use IAM policies to
   * control this action's access to Amazon SWF resources as follows: Use a Resource element with
   * the domain name to limit the action to only specified domains. Use an Action element to allow
   * or deny permission to call this action. You cannot use an IAM policy to constrain this action's
   * parameters. If the caller doesn't have sufficient permissions to invoke the action, or the
   * parameter values fall outside the specified constraints, the action fails. The associated event
   * attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM
   * policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkflowExecutionHistory(
    request: AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetWorkflowExecutionHistory"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget31Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.GetWorkflowExecutionHistoryError,
      },
      options,
    );
  }

  /**
   * List Activity Types
   *
   * @remarks
   * Returns information about all activities registered in the specified domain that match the
   * specified name and registration status. The result includes information like creation date,
   * current status of the activity, etc. The results may be split into multiple pages. To retrieve
   * subsequent pages, make the call again using the nextPageToken returned by the initial call.
   * Access Control You can use IAM policies to control this action's access to Amazon SWF resources
   * as follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. You cannot use
   * an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
   * permissions to invoke the action, or the parameter values fall outside the specified
   * constraints, the action fails. The associated event attribute's cause parameter is set to
   * OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access
   * to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.ListActivityTypesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listActivityTypes(
    request: AmazonSimpleWorkflowService.ListActivityTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.ListActivityTypesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListActivityTypes"),
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
        errorFactory: AmazonSimpleWorkflowService.ListActivityTypesError,
      },
      options,
    );
  }

  /**
   * List Closed Workflow Executions
   *
   * @remarks
   * Returns a list of closed workflow executions in the specified domain that meet the filtering
   * criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the
   * call again using the nextPageToken returned by the initial call. This operation is eventually
   * consistent. The results are best effort and may not exactly reflect recent updates and changes.
   * Access Control You can use IAM policies to control this action's access to Amazon SWF resources
   * as follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. Constrain the
   * following parameters by using a Condition element with the appropriate keys. tagFilter.tag:
   * String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is
   * swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.
   * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values
   * fall outside the specified constraints, the action fails. The associated event attribute's
   * cause parameter is set to OPERATION_NOT_PERMITTED. For details and e
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClosedWorkflowExecutions(
    request: AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListClosedWorkflowExecutions"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget32Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.ListClosedWorkflowExecutionsError,
      },
      options,
    );
  }

  /**
   * List Domains
   *
   * @remarks
   * Returns the list of domains registered in the account. The results may be split into multiple
   * pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by
   * the initial call. This operation is eventually consistent. The results are best effort and may
   * not exactly reflect recent updates and changes. Access Control You can use IAM policies to
   * control this action's access to Amazon SWF resources as follows: Use a Resource element with
   * the domain name to limit the action to only specified domains. The element must be set to
   * arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an
   * Action element to allow or deny permission to call this action. You cannot use an IAM policy to
   * constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke
   * the action, or the parameter values fall outside the specified constraints, the action fails.
   * The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
   * and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon
   * SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.ListDomainsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDomains(
    request: AmazonSimpleWorkflowService.ListDomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.ListDomainsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDomains"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget27Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.ListDomainsError,
      },
      options,
    );
  }

  /**
   * List Open Workflow Executions
   *
   * @remarks
   * Returns a list of open workflow executions in the specified domain that meet the filtering
   * criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the
   * call again using the nextPageToken returned by the initial call. This operation is eventually
   * consistent. The results are best effort and may not exactly reflect recent updates and changes.
   * Access Control You can use IAM policies to control this action's access to Amazon SWF resources
   * as follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. Constrain the
   * following parameters by using a Condition element with the appropriate keys. tagFilter.tag:
   * String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is
   * swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.
   * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values
   * fall outside the specified constraints, the action fails. The associated event attribute's
   * cause parameter is set to OPERATION_NOT_PERMITTED. For details and exa
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOpenWorkflowExecutions(
    request: AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListOpenWorkflowExecutions"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget33Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.ListOpenWorkflowExecutionsError,
      },
      options,
    );
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * List tags for a given domain.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.ListTagsForResourceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTagsForResource(
    request: AmazonSimpleWorkflowService.ListTagsForResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget34Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * List Workflow Types
   *
   * @remarks
   * Returns information about workflow types in the specified domain. The results may be split into
   * multiple pages that can be retrieved by making the call repeatedly. Access Control You can use
   * IAM policies to control this action's access to Amazon SWF resources as follows: Use a Resource
   * element with the domain name to limit the action to only specified domains. Use an Action
   * element to allow or deny permission to call this action. You cannot use an IAM policy to
   * constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke
   * the action, or the parameter values fall outside the specified constraints, the action fails.
   * The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
   * and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon
   * SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.ListWorkflowTypesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkflowTypes(
    request: AmazonSimpleWorkflowService.ListWorkflowTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.ListWorkflowTypesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListWorkflowTypes"),
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
        errorFactory: AmazonSimpleWorkflowService.ListWorkflowTypesError,
      },
      options,
    );
  }

  /**
   * Poll For Activity Task
   *
   * @remarks
   * Used by workers to get an ActivityTask from the specified activity taskList. This initiates a
   * long poll, where the service holds the HTTP connection open and responds as soon as a task
   * becomes available. The maximum time the service holds on to the request before responding is 60
   * seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty
   * result, in this context, means that an ActivityTask is returned, but that the value of
   * taskToken is an empty string. If a task is returned, the worker should use its type to identify
   * and process it correctly. Workers should set their client side socket timeout to at least 70
   * seconds (10 seconds higher than the maximum time service may hold the poll request). Access
   * Control You can use IAM policies to control this action's access to Amazon SWF resources as
   * follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. Constrain the
   * taskList.name parameter by using a Condition element with the swf:taskList.name key to allow
   * the action to access only certain task lists. If the caller doesn't have sufficient pe
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.PollForActivityTaskError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pollForActivityTask(
    request: AmazonSimpleWorkflowService.PollForActivityTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.PollForActivityTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#PollForActivityTask"),
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
        errorFactory: AmazonSimpleWorkflowService.PollForActivityTaskError,
      },
      options,
    );
  }

  /**
   * Poll For Decision Task
   *
   * @remarks
   * Used by deciders to get a DecisionTask from the specified decision taskList. A decision task
   * may be returned for any open workflow execution that is using the specified task list. The task
   * includes a paginated view of the history of the workflow execution. The decider should use the
   * workflow type and the history to determine how to properly handle the task. This action
   * initiates a long poll, where the service holds the HTTP connection open and responds as soon a
   * task becomes available. If no decision task is available in the specified task list before the
   * timeout of 60 seconds expires, an empty result is returned. An empty result, in this context,
   * means that a DecisionTask is returned, but that the value of taskToken is an empty string.
   * Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher
   * than the timeout). Because the number of workflow history events for a single workflow
   * execution might be very large, the result returned might be split up across a number of pages.
   * To retrieve subsequent pages, make additional calls to PollForDecisionTask using the
   * nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionH
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.PollForDecisionTaskError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pollForDecisionTask(
    request: AmazonSimpleWorkflowService.PollForDecisionTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.PollForDecisionTaskError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#PollForDecisionTask"),
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
        errorFactory: AmazonSimpleWorkflowService.PollForDecisionTaskError,
      },
      options,
    );
  }

  /**
   * Record Activity Task Heartbeat
   *
   * @remarks
   * Used by activity workers to report to the service that the ActivityTask represented by the
   * specified taskToken is still making progress. The worker can also specify details of the
   * progress, for example percent complete, using the details parameter. This action can also be
   * used by the worker as a mechanism to check if cancellation is being requested for the activity
   * task. If a cancellation is being attempted for the specified task, then the boolean
   * cancelRequested flag returned by the service is set to true. This action resets the
   * taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This
   * action doesn't in itself create an event in the workflow execution history. However, if the
   * task times out, the workflow execution history contains a ActivityTaskTimedOut event that
   * contains the information from the last heartbeat generated by the activity worker. The
   * taskStartToCloseTimeout of an activity type is the maximum duration of an activity task,
   * regardless of the number of RecordActivityTaskHeartbeat requests received. The
   * taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only
   * useful for long-lived activities to repor
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recordActivityTaskHeartbeat(
    request: AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RecordActivityTaskHeartbeat"),
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
        errorFactory: AmazonSimpleWorkflowService.RecordActivityTaskHeartbeatError,
      },
      options,
    );
  }

  /**
   * Register Activity Type
   *
   * @remarks
   * Registers a new activity type along with its configuration settings in the specified domain. A
   * TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change
   * any configuration settings of the type after its registration, and it must be registered as a
   * new version. Access Control You can use IAM policies to control this action's access to Amazon
   * SWF resources as follows: Use a Resource element with the domain name to limit the action to
   * only specified domains. Use an Action element to allow or deny permission to call this action.
   * Constrain the following parameters by using a Condition element with the appropriate keys.
   * defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String
   * constraint. The key is swf:name. version: String constraint. The key is swf:version. If the
   * caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
   * outside the specified constraints, the action fails. The associated event attribute's cause
   * parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using
   * IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RegisterActivityTypeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerActivityType(
    request: AmazonSimpleWorkflowService.RegisterActivityTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RegisterActivityTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RegisterActivityType"),
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
        errorFactory: AmazonSimpleWorkflowService.RegisterActivityTypeError,
      },
      options,
    );
  }

  /**
   * Register Domain
   *
   * @remarks
   * Registers a new domain. Access Control You can use IAM policies to control this action's access
   * to Amazon SWF resources as follows: You cannot use an IAM policy to control domain access for
   * this action. The name of the domain being registered is available as the resource of this
   * action. Use an Action element to allow or deny permission to call this action. You cannot use
   * an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
   * permissions to invoke the action, or the parameter values fall outside the specified
   * constraints, the action fails. The associated event attribute's cause parameter is set to
   * OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access
   * to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RegisterDomainError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerDomain(
    request: AmazonSimpleWorkflowService.RegisterDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RegisterDomainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RegisterDomain"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget28Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.RegisterDomainError,
      },
      options,
    );
  }

  /**
   * Register Workflow Type
   *
   * @remarks
   * Registers a new workflow type and its configuration settings in the specified domain. The
   * retention period for the workflow history is set by the RegisterDomain action. If the type
   * already exists, then a TypeAlreadyExists fault is returned. You cannot change the configuration
   * settings of a workflow type once it is registered and it must be registered as a new version.
   * Access Control You can use IAM policies to control this action's access to Amazon SWF resources
   * as follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. Constrain the
   * following parameters by using a Condition element with the appropriate keys.
   * defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name. name: String
   * constraint. The key is swf:name. version: String constraint. The key is swf:version. If the
   * caller doesn't have sufficient permissions to invoke the action, or the parameter values fall
   * outside the specified constraints, the action fails. The associated event attribute's cause
   * parameter is set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using
   * IAM to
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RegisterWorkflowTypeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerWorkflowType(
    request: AmazonSimpleWorkflowService.RegisterWorkflowTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RegisterWorkflowTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RegisterWorkflowType"),
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
        errorFactory: AmazonSimpleWorkflowService.RegisterWorkflowTypeError,
      },
      options,
    );
  }

  /**
   * Request Cancel Workflow Execution
   *
   * @remarks
   * Records a WorkflowExecutionCancelRequested event in the currently running workflow execution
   * identified by the given domain, workflowId, and runId. This logically requests the cancellation
   * of the workflow execution as a whole. It is up to the decider to take appropriate actions when
   * it receives an execution history with this event. If the runId isn't specified, the
   * WorkflowExecutionCancelRequested event is recorded in the history of the current open workflow
   * execution with the specified workflowId in the domain. Because this action allows the workflow
   * to properly clean up and gracefully close, it should be used instead of
   * TerminateWorkflowExecution when possible. Access Control You can use IAM policies to control
   * this action's access to Amazon SWF resources as follows: Use a Resource element with the domain
   * name to limit the action to only specified domains. Use an Action element to allow or deny
   * permission to call this action. You cannot use an IAM policy to constrain this action's
   * parameters. If the caller doesn't have sufficient permissions to invoke the action, or the
   * parameter values fall outside the specified constraints, the action fails. The associated event
   * attribute's cau
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  requestCancelWorkflowExecution(
    request: AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RequestCancelWorkflowExecution"),
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
        errorFactory: AmazonSimpleWorkflowService.RequestCancelWorkflowExecutionError,
      },
      options,
    );
  }

  /**
   * Respond Activity Task Canceled
   *
   * @remarks
   * Used by workers to tell the service that the ActivityTask identified by the taskToken was
   * successfully canceled. Additional details can be provided using the details argument. These
   * details (if provided) appear in the ActivityTaskCanceled event added to the workflow history.
   * Only use this operation if the canceled flag of a RecordActivityTaskHeartbeat request returns
   * true and if the activity can be safely undone or abandoned. A task is considered open from the
   * time that it is scheduled until it is closed. Therefore a task is reported as open while a
   * worker is processing it. A task is closed after it has been specified in a call to
   * RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the
   * task has timed out. Access Control You can use IAM policies to control this action's access to
   * Amazon SWF resources as follows: Use a Resource element with the domain name to limit the
   * action to only specified domains. Use an Action element to allow or deny permission to call
   * this action. You cannot use an IAM policy to constrain this action's parameters. If the caller
   * doesn't have sufficient permissions to invoke the action, or the parameter values fall outside
   * t
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RespondActivityTaskCanceledError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  respondActivityTaskCanceled(
    request: AmazonSimpleWorkflowService.RespondActivityTaskCanceledRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RespondActivityTaskCanceledError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RespondActivityTaskCanceled"),
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
        errorFactory: AmazonSimpleWorkflowService.RespondActivityTaskCanceledError,
      },
      options,
    );
  }

  /**
   * Respond Activity Task Completed
   *
   * @remarks
   * Used by workers to tell the service that the ActivityTask identified by the taskToken completed
   * successfully with a result (if provided). The result appears in the ActivityTaskCompleted event
   * in the workflow history. If the requested task doesn't complete successfully, use
   * RespondActivityTaskFailed instead. If the worker finds that the task is canceled through the
   * canceled flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and
   * then call RespondActivityTaskCanceled. A task is considered open from the time that it is
   * scheduled until it is closed. Therefore a task is reported as open while a worker is processing
   * it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted,
   * RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access
   * Control You can use IAM policies to control this action's access to Amazon SWF resources as
   * follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. You cannot use
   * an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient p
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RespondActivityTaskCompletedError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  respondActivityTaskCompleted(
    request: AmazonSimpleWorkflowService.RespondActivityTaskCompletedRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RespondActivityTaskCompletedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RespondActivityTaskCompleted"),
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
        errorFactory: AmazonSimpleWorkflowService.RespondActivityTaskCompletedError,
      },
      options,
    );
  }

  /**
   * Respond Activity Task Failed
   *
   * @remarks
   * Used by workers to tell the service that the ActivityTask identified by the taskToken has
   * failed with reason (if specified). The reason and details appear in the ActivityTaskFailed
   * event added to the workflow history. A task is considered open from the time that it is
   * scheduled until it is closed. Therefore a task is reported as open while a worker is processing
   * it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted,
   * RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access
   * Control You can use IAM policies to control this action's access to Amazon SWF resources as
   * follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. You cannot use
   * an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
   * permissions to invoke the action, or the parameter values fall outside the specified
   * constraints, the action fails. The associated event attribute's cause parameter is set to
   * OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access
   * to Amazon SWF W
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RespondActivityTaskFailedError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  respondActivityTaskFailed(
    request: AmazonSimpleWorkflowService.RespondActivityTaskFailedRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RespondActivityTaskFailedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RespondActivityTaskFailed"),
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
        errorFactory: AmazonSimpleWorkflowService.RespondActivityTaskFailedError,
      },
      options,
    );
  }

  /**
   * Respond Decision Task Completed
   *
   * @remarks
   * Used by deciders to tell the service that the DecisionTask identified by the taskToken has
   * successfully completed. The decisions argument specifies the list of decisions made while
   * processing the task. A DecisionTaskCompleted event is added to the workflow history. The
   * executionContext specified is attached to the event in the workflow execution history. Access
   * Control If an IAM policy grants permission to use RespondDecisionTaskCompleted, it can express
   * permissions for the list of decisions in the decisions parameter. Each of the decisions has one
   * or more parameters, much like a regular API call. To allow for policies to be as readable as
   * possible, you can express permissions on decisions as if they were actual API calls, including
   * applying conditions to some parameters. For more information, see Using IAM to Manage Access to
   * Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  respondDecisionTaskCompleted(
    request: AmazonSimpleWorkflowService.RespondDecisionTaskCompletedRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RespondDecisionTaskCompleted"),
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
        errorFactory: AmazonSimpleWorkflowService.RespondDecisionTaskCompletedError,
      },
      options,
    );
  }

  /**
   * Signal Workflow Execution
   *
   * @remarks
   * Records a WorkflowExecutionSignaled event in the workflow execution history and creates a
   * decision task for the workflow execution identified by the given domain, workflowId and runId.
   * The event is recorded with the specified user defined signalName and input (if provided). If a
   * runId isn't specified, then the WorkflowExecutionSignaled event is recorded in the history of
   * the current open workflow with the matching workflowId in the domain. If the specified workflow
   * execution isn't open, this method fails with UnknownResource. Access Control You can use IAM
   * policies to control this action's access to Amazon SWF resources as follows: Use a Resource
   * element with the domain name to limit the action to only specified domains. Use an Action
   * element to allow or deny permission to call this action. You cannot use an IAM policy to
   * constrain this action's parameters. If the caller doesn't have sufficient permissions to invoke
   * the action, or the parameter values fall outside the specified constraints, the action fails.
   * The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details
   * and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.SignalWorkflowExecutionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signalWorkflowExecution(
    request: AmazonSimpleWorkflowService.SignalWorkflowExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.SignalWorkflowExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#SignalWorkflowExecution"),
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
        errorFactory: AmazonSimpleWorkflowService.SignalWorkflowExecutionError,
      },
      options,
    );
  }

  /**
   * Start Workflow Execution
   *
   * @remarks
   * Starts an execution of the workflow type in the specified domain using the provided workflowId
   * and input data. This action returns the newly started workflow execution. Access Control You
   * can use IAM policies to control this action's access to Amazon SWF resources as follows: Use a
   * Resource element with the domain name to limit the action to only specified domains. Use an
   * Action element to allow or deny permission to call this action. Constrain the following
   * parameters by using a Condition element with the appropriate keys. tagList.member.0: The key is
   * swf:tagList.member.0. tagList.member.1: The key is swf:tagList.member.1. tagList.member.2: The
   * key is swf:tagList.member.2. tagList.member.3: The key is swf:tagList.member.3.
   * tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is
   * swf:taskList.name. workflowType.name: String constraint. The key is swf:workflowType.name.
   * workflowType.version: String constraint. The key is swf:workflowType.version. If the caller
   * doesn't have sufficient permissions to invoke the action, or the parameter values fall outside
   * the specified constraints, the action fails. The associated event attribute's cause parameter
   * is
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.StartWorkflowExecutionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startWorkflowExecution(
    request: AmazonSimpleWorkflowService.StartWorkflowExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.StartWorkflowExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartWorkflowExecution"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget30Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.StartWorkflowExecutionError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Add a tag to a Amazon SWF domain. Amazon SWF supports a maximum of 50 tags per resource.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.TagResourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tagResource(
    request: AmazonSimpleWorkflowService.TagResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget35Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.TagResourceError,
      },
      options,
    );
  }

  /**
   * Terminate Workflow Execution
   *
   * @remarks
   * Records a WorkflowExecutionTerminated event and forces closure of the workflow execution
   * identified by the given domain, runId, and workflowId. The child policy, registered with the
   * workflow type or specified when starting this execution, is applied to any open child workflow
   * executions of this workflow execution. If the identified workflow execution was in progress, it
   * is terminated immediately. If a runId isn't specified, then the WorkflowExecutionTerminated
   * event is recorded in the history of the current open workflow with the matching workflowId in
   * the domain. You should consider using RequestCancelWorkflowExecution action instead because it
   * allows the workflow to gracefully close while TerminateWorkflowExecution doesn't. Access
   * Control You can use IAM policies to control this action's access to Amazon SWF resources as
   * follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. You cannot use
   * an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
   * permissions to invoke the action, or the parameter values fall outside the specified con
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.TerminateWorkflowExecutionError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  terminateWorkflowExecution(
    request: AmazonSimpleWorkflowService.TerminateWorkflowExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.TerminateWorkflowExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TerminateWorkflowExecution"),
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
        errorFactory: AmazonSimpleWorkflowService.TerminateWorkflowExecutionError,
      },
      options,
    );
  }

  /**
   * Undeprecate Activity Type
   *
   * @remarks
   * Undeprecates a previously deprecated activity type. After an activity type has been
   * undeprecated, you can create new tasks of that activity type. This operation is eventually
   * consistent. The results are best effort and may not exactly reflect recent updates and changes.
   * Access Control You can use IAM policies to control this action's access to Amazon SWF resources
   * as follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. Constrain the
   * following parameters by using a Condition element with the appropriate keys. activityType.name:
   * String constraint. The key is swf:activityType.name. activityType.version: String constraint.
   * The key is swf:activityType.version. If the caller doesn't have sufficient permissions to
   * invoke the action, or the parameter values fall outside the specified constraints, the action
   * fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For
   * details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the
   * Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.UndeprecateActivityTypeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  undeprecateActivityType(
    request: AmazonSimpleWorkflowService.UndeprecateActivityTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.UndeprecateActivityTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UndeprecateActivityType"),
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
        errorFactory: AmazonSimpleWorkflowService.UndeprecateActivityTypeError,
      },
      options,
    );
  }

  /**
   * Undeprecate Domain
   *
   * @remarks
   * Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be
   * used to create new workflow executions or register new types. This operation is eventually
   * consistent. The results are best effort and may not exactly reflect recent updates and changes.
   * Access Control You can use IAM policies to control this action's access to Amazon SWF resources
   * as follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. You cannot use
   * an IAM policy to constrain this action's parameters. If the caller doesn't have sufficient
   * permissions to invoke the action, or the parameter values fall outside the specified
   * constraints, the action fails. The associated event attribute's cause parameter is set to
   * OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access
   * to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.UndeprecateDomainError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  undeprecateDomain(
    request: AmazonSimpleWorkflowService.UndeprecateDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.UndeprecateDomainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UndeprecateDomain"),
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
        errorFactory: AmazonSimpleWorkflowService.UndeprecateDomainError,
      },
      options,
    );
  }

  /**
   * Undeprecate Workflow Type
   *
   * @remarks
   * Undeprecates a previously deprecated workflow type. After a workflow type has been
   * undeprecated, you can create new executions of that type. This operation is eventually
   * consistent. The results are best effort and may not exactly reflect recent updates and changes.
   * Access Control You can use IAM policies to control this action's access to Amazon SWF resources
   * as follows: Use a Resource element with the domain name to limit the action to only specified
   * domains. Use an Action element to allow or deny permission to call this action. Constrain the
   * following parameters by using a Condition element with the appropriate keys. workflowType.name:
   * String constraint. The key is swf:workflowType.name. workflowType.version: String constraint.
   * The key is swf:workflowType.version. If the caller doesn't have sufficient permissions to
   * invoke the action, or the parameter values fall outside the specified constraints, the action
   * fails. The associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For
   * details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the
   * Amazon SWF Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  undeprecateWorkflowType(
    request: AmazonSimpleWorkflowService.UndeprecateWorkflowTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UndeprecateWorkflowType"),
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
        errorFactory: AmazonSimpleWorkflowService.UndeprecateWorkflowTypeError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Remove a tag from a Amazon SWF domain.
   *
   * @returns Success
   *
   * @throws {@link AmazonSimpleWorkflowService.UntagResourceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  untagResource(
    request: AmazonSimpleWorkflowService.UntagResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonSimpleWorkflowService.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget36Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonSimpleWorkflowService.UntagResourceError,
      },
      options,
    );
  }
}

export namespace AmazonSimpleWorkflowService {
  export type CountClosedWorkflowExecutionsRequest = {
    xAmzTarget: XAmzTarget;
  };

  export class CountClosedWorkflowExecutionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CountClosedWorkflowExecutionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CountOpenWorkflowExecutionsRequest = {
    xAmzTarget: XAmzTarget1;
  };

  export class CountOpenWorkflowExecutionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CountOpenWorkflowExecutionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CountPendingActivityTasksRequest = {
    xAmzTarget: XAmzTarget2;
  };

  export class CountPendingActivityTasksError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CountPendingActivityTasksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CountPendingDecisionTasksRequest = {
    xAmzTarget: XAmzTarget3;
  };

  export class CountPendingDecisionTasksError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CountPendingDecisionTasksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeprecateActivityTypeRequest = {
    xAmzTarget: XAmzTarget4;
  };

  export class DeprecateActivityTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeprecateActivityTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeprecateDomainRequest = {
    xAmzTarget: XAmzTarget5;
  };

  export class DeprecateDomainError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeprecateDomainError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeprecateWorkflowTypeRequest = {
    xAmzTarget: XAmzTarget6;
  };

  export class DeprecateWorkflowTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeprecateWorkflowTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeActivityTypeRequest = {
    xAmzTarget: XAmzTarget20;
  };

  export class DescribeActivityTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeActivityTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDomainRequest = {
    xAmzTarget: XAmzTarget26;
  };

  export class DescribeDomainError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDomainError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeWorkflowExecutionRequest = {
    xAmzTarget: XAmzTarget29;
  };

  export class DescribeWorkflowExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeWorkflowExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeWorkflowTypeRequest = {
    xAmzTarget: XAmzTarget23;
  };

  export class DescribeWorkflowTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeWorkflowTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetWorkflowExecutionHistoryRequest = {
    xAmzTarget: XAmzTarget31;
  };

  export class GetWorkflowExecutionHistoryError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowExecutionHistoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListActivityTypesRequest = {
    xAmzTarget: XAmzTarget21;
  };

  export class ListActivityTypesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListActivityTypesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListClosedWorkflowExecutionsRequest = {
    xAmzTarget: XAmzTarget32;
  };

  export class ListClosedWorkflowExecutionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListClosedWorkflowExecutionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListDomainsRequest = {
    xAmzTarget: XAmzTarget27;
  };

  export class ListDomainsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListDomainsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListOpenWorkflowExecutionsRequest = {
    xAmzTarget: XAmzTarget33;
  };

  export class ListOpenWorkflowExecutionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListOpenWorkflowExecutionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListTagsForResourceRequest = {
    xAmzTarget: XAmzTarget34;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListWorkflowTypesRequest = {
    xAmzTarget: XAmzTarget24;
  };

  export class ListWorkflowTypesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWorkflowTypesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PollForActivityTaskRequest = {
    xAmzTarget: XAmzTarget7;
  };

  export class PollForActivityTaskError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PollForActivityTaskError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PollForDecisionTaskRequest = {
    xAmzTarget: XAmzTarget8;
  };

  export class PollForDecisionTaskError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PollForDecisionTaskError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RecordActivityTaskHeartbeatRequest = {
    xAmzTarget: XAmzTarget9;
  };

  export class RecordActivityTaskHeartbeatError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RecordActivityTaskHeartbeatError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RegisterActivityTypeRequest = {
    xAmzTarget: XAmzTarget22;
  };

  export class RegisterActivityTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RegisterActivityTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RegisterDomainRequest = {
    xAmzTarget: XAmzTarget28;
  };

  export class RegisterDomainError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RegisterDomainError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RegisterWorkflowTypeRequest = {
    xAmzTarget: XAmzTarget25;
  };

  export class RegisterWorkflowTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RegisterWorkflowTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RequestCancelWorkflowExecutionRequest = {
    xAmzTarget: XAmzTarget10;
  };

  export class RequestCancelWorkflowExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RequestCancelWorkflowExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RespondActivityTaskCanceledRequest = {
    xAmzTarget: XAmzTarget11;
  };

  export class RespondActivityTaskCanceledError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RespondActivityTaskCanceledError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RespondActivityTaskCompletedRequest = {
    xAmzTarget: XAmzTarget12;
  };

  export class RespondActivityTaskCompletedError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RespondActivityTaskCompletedError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RespondActivityTaskFailedRequest = {
    xAmzTarget: XAmzTarget13;
  };

  export class RespondActivityTaskFailedError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RespondActivityTaskFailedError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RespondDecisionTaskCompletedRequest = {
    xAmzTarget: XAmzTarget14;
  };

  export class RespondDecisionTaskCompletedError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RespondDecisionTaskCompletedError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SignalWorkflowExecutionRequest = {
    xAmzTarget: XAmzTarget15;
  };

  export class SignalWorkflowExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SignalWorkflowExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartWorkflowExecutionRequest = {
    xAmzTarget: XAmzTarget30;
  };

  export class StartWorkflowExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartWorkflowExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type TagResourceRequest = {
    xAmzTarget: XAmzTarget35;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type TerminateWorkflowExecutionRequest = {
    xAmzTarget: XAmzTarget16;
  };

  export class TerminateWorkflowExecutionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TerminateWorkflowExecutionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UndeprecateActivityTypeRequest = {
    xAmzTarget: XAmzTarget17;
  };

  export class UndeprecateActivityTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UndeprecateActivityTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UndeprecateDomainRequest = {
    xAmzTarget: XAmzTarget18;
  };

  export class UndeprecateDomainError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UndeprecateDomainError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UndeprecateWorkflowTypeRequest = {
    xAmzTarget: XAmzTarget19;
  };

  export class UndeprecateWorkflowTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UndeprecateWorkflowTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UntagResourceRequest = {
    xAmzTarget: XAmzTarget36;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
