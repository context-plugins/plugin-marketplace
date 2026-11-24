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
import {
  xAmzTarget20AmazonSimpleWorkflowServiceOperationsApiSchema,
  type XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi,
} from "../models/xamz-target20-amazon-simple-workflow-service-operations-api.js";
import {
  xAmzTarget21AmazonSimpleWorkflowServiceOperationsApiSchema,
  type XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi,
} from "../models/xamz-target21-amazon-simple-workflow-service-operations-api.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
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
   * @throws {@link Operations.CountClosedWorkflowExecutions2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countClosedWorkflowExecutions2(
    request: Operations.CountClosedWorkflowExecutions2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.CountClosedWorkflowExecutions2Error> {
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
        errorFactory: Operations.CountClosedWorkflowExecutions2Error,
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
   * @throws {@link Operations.CountOpenWorkflowExecutions2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countOpenWorkflowExecutions2(
    request: Operations.CountOpenWorkflowExecutions2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.CountOpenWorkflowExecutions2Error> {
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
        errorFactory: Operations.CountOpenWorkflowExecutions2Error,
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
   * @throws {@link Operations.CountPendingActivityTasks2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countPendingActivityTasks2(
    request: Operations.CountPendingActivityTasks2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.CountPendingActivityTasks2Error> {
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
        errorFactory: Operations.CountPendingActivityTasks2Error,
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
   * @throws {@link Operations.CountPendingDecisionTasks2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  countPendingDecisionTasks2(
    request: Operations.CountPendingDecisionTasks2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.CountPendingDecisionTasks2Error> {
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
        errorFactory: Operations.CountPendingDecisionTasks2Error,
      },
      options,
    );
  }

  /**
   * Delete Activity Type
   *
   * @remarks
   * Deletes the specified activity type. Note: Prior to deletion, activity types must first be
   * deprecated. After an activity type has been deleted, you cannot schedule new activities of that
   * type. Activities that started before the type was deleted will continue to run. Access Control
   * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
   * Use a Resource element with the domain name to limit the action to only specified domains. Use
   * an Action element to allow or deny permission to call this action. Constrain the following
   * parameters by using a Condition element with the appropriate keys. activityType.name: String
   * constraint. The key is swf:activityType.name. activityType.version: String constraint. The key
   * is swf:activityType.version. If the caller doesn't have sufficient permissions to invoke the
   * action, or the parameter values fall outside the specified constraints, the action fails. The
   * associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and
   * example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF
   * Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.DeleteActivityTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteActivityType(
    request: Operations.DeleteActivityTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DeleteActivityTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteActivityType"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget20AmazonSimpleWorkflowServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DeleteActivityTypeError,
      },
      options,
    );
  }

  /**
   * Delete Workflow Type
   *
   * @remarks
   * Deletes the specified workflow type. Note: Prior to deletion, workflow types must first be
   * deprecated. After a workflow type has been deleted, you cannot create new executions of that
   * type. Executions that started before the type was deleted will continue to run. Access Control
   * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
   * Use a Resource element with the domain name to limit the action to only specified domains. Use
   * an Action element to allow or deny permission to call this action. Constrain the following
   * parameters by using a Condition element with the appropriate keys. workflowType.name: String
   * constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key
   * is swf:workflowType.version. If the caller doesn't have sufficient permissions to invoke the
   * action, or the parameter values fall outside the specified constraints, the action fails. The
   * associated event attribute's cause parameter is set to OPERATION_NOT_PERMITTED. For details and
   * example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF
   * Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.DeleteWorkflowTypeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWorkflowType(
    request: Operations.DeleteWorkflowTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DeleteWorkflowTypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteWorkflowType"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget21AmazonSimpleWorkflowServiceOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DeleteWorkflowTypeError,
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
   * @throws {@link Operations.DeprecateActivityType2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deprecateActivityType2(
    request: Operations.DeprecateActivityType2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DeprecateActivityType2Error> {
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
        errorFactory: Operations.DeprecateActivityType2Error,
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
   * @throws {@link Operations.DeprecateDomain2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deprecateDomain2(
    request: Operations.DeprecateDomain2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DeprecateDomain2Error> {
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
        errorFactory: Operations.DeprecateDomain2Error,
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
   * @throws {@link Operations.DeprecateWorkflowType2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deprecateWorkflowType2(
    request: Operations.DeprecateWorkflowType2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DeprecateWorkflowType2Error> {
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
        errorFactory: Operations.DeprecateWorkflowType2Error,
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
   * @throws {@link Operations.PollForActivityTask2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pollForActivityTask2(
    request: Operations.PollForActivityTask2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.PollForActivityTask2Error> {
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
        errorFactory: Operations.PollForActivityTask2Error,
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
   * @throws {@link Operations.PollForDecisionTask2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pollForDecisionTask2(
    request: Operations.PollForDecisionTask2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.PollForDecisionTask2Error> {
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
        errorFactory: Operations.PollForDecisionTask2Error,
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
   * @throws {@link Operations.RecordActivityTaskHeartbeat2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recordActivityTaskHeartbeat2(
    request: Operations.RecordActivityTaskHeartbeat2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RecordActivityTaskHeartbeat2Error> {
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
        errorFactory: Operations.RecordActivityTaskHeartbeat2Error,
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
   * @throws {@link Operations.RequestCancelWorkflowExecution2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  requestCancelWorkflowExecution2(
    request: Operations.RequestCancelWorkflowExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RequestCancelWorkflowExecution2Error> {
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
        errorFactory: Operations.RequestCancelWorkflowExecution2Error,
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
   * @throws {@link Operations.RespondActivityTaskCanceled2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  respondActivityTaskCanceled2(
    request: Operations.RespondActivityTaskCanceled2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RespondActivityTaskCanceled2Error> {
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
        errorFactory: Operations.RespondActivityTaskCanceled2Error,
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
   * @throws {@link Operations.RespondActivityTaskCompleted2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  respondActivityTaskCompleted2(
    request: Operations.RespondActivityTaskCompleted2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RespondActivityTaskCompleted2Error> {
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
        errorFactory: Operations.RespondActivityTaskCompleted2Error,
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
   * @throws {@link Operations.RespondActivityTaskFailed2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  respondActivityTaskFailed2(
    request: Operations.RespondActivityTaskFailed2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RespondActivityTaskFailed2Error> {
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
        errorFactory: Operations.RespondActivityTaskFailed2Error,
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
   * @throws {@link Operations.RespondDecisionTaskCompleted2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  respondDecisionTaskCompleted2(
    request: Operations.RespondDecisionTaskCompleted2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RespondDecisionTaskCompleted2Error> {
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
        errorFactory: Operations.RespondDecisionTaskCompleted2Error,
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
   * @throws {@link Operations.SignalWorkflowExecution2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signalWorkflowExecution2(
    request: Operations.SignalWorkflowExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.SignalWorkflowExecution2Error> {
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
        errorFactory: Operations.SignalWorkflowExecution2Error,
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
   * @throws {@link Operations.TerminateWorkflowExecution2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  terminateWorkflowExecution2(
    request: Operations.TerminateWorkflowExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.TerminateWorkflowExecution2Error> {
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
        errorFactory: Operations.TerminateWorkflowExecution2Error,
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
   * @throws {@link Operations.UndeprecateActivityType2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  undeprecateActivityType2(
    request: Operations.UndeprecateActivityType2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UndeprecateActivityType2Error> {
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
        errorFactory: Operations.UndeprecateActivityType2Error,
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
   * @throws {@link Operations.UndeprecateDomain2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  undeprecateDomain2(
    request: Operations.UndeprecateDomain2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UndeprecateDomain2Error> {
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
        errorFactory: Operations.UndeprecateDomain2Error,
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
   * @throws {@link Operations.UndeprecateWorkflowType2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSwfError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  undeprecateWorkflowType2(
    request: Operations.UndeprecateWorkflowType2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UndeprecateWorkflowType2Error> {
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
        errorFactory: Operations.UndeprecateWorkflowType2Error,
      },
      options,
    );
  }
}

export namespace Operations {
  export type CountClosedWorkflowExecutions2Request = {
    xAmzTarget: XAmzTarget;
  };

  export class CountClosedWorkflowExecutions2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CountClosedWorkflowExecutions2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CountOpenWorkflowExecutions2Request = {
    xAmzTarget: XAmzTarget1;
  };

  export class CountOpenWorkflowExecutions2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CountOpenWorkflowExecutions2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CountPendingActivityTasks2Request = {
    xAmzTarget: XAmzTarget2;
  };

  export class CountPendingActivityTasks2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CountPendingActivityTasks2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CountPendingDecisionTasks2Request = {
    xAmzTarget: XAmzTarget3;
  };

  export class CountPendingDecisionTasks2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CountPendingDecisionTasks2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteActivityTypeRequest = {
    xAmzTarget: XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi;
  };

  export class DeleteActivityTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteActivityTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteWorkflowTypeRequest = {
    xAmzTarget: XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi;
  };

  export class DeleteWorkflowTypeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWorkflowTypeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeprecateActivityType2Request = {
    xAmzTarget: XAmzTarget4;
  };

  export class DeprecateActivityType2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeprecateActivityType2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeprecateDomain2Request = {
    xAmzTarget: XAmzTarget5;
  };

  export class DeprecateDomain2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeprecateDomain2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeprecateWorkflowType2Request = {
    xAmzTarget: XAmzTarget6;
  };

  export class DeprecateWorkflowType2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeprecateWorkflowType2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PollForActivityTask2Request = {
    xAmzTarget: XAmzTarget7;
  };

  export class PollForActivityTask2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PollForActivityTask2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type PollForDecisionTask2Request = {
    xAmzTarget: XAmzTarget8;
  };

  export class PollForDecisionTask2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PollForDecisionTask2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RecordActivityTaskHeartbeat2Request = {
    xAmzTarget: XAmzTarget9;
  };

  export class RecordActivityTaskHeartbeat2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RecordActivityTaskHeartbeat2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RequestCancelWorkflowExecution2Request = {
    xAmzTarget: XAmzTarget10;
  };

  export class RequestCancelWorkflowExecution2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RequestCancelWorkflowExecution2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RespondActivityTaskCanceled2Request = {
    xAmzTarget: XAmzTarget11;
  };

  export class RespondActivityTaskCanceled2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RespondActivityTaskCanceled2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RespondActivityTaskCompleted2Request = {
    xAmzTarget: XAmzTarget12;
  };

  export class RespondActivityTaskCompleted2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RespondActivityTaskCompleted2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RespondActivityTaskFailed2Request = {
    xAmzTarget: XAmzTarget13;
  };

  export class RespondActivityTaskFailed2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RespondActivityTaskFailed2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RespondDecisionTaskCompleted2Request = {
    xAmzTarget: XAmzTarget14;
  };

  export class RespondDecisionTaskCompleted2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RespondDecisionTaskCompleted2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type SignalWorkflowExecution2Request = {
    xAmzTarget: XAmzTarget15;
  };

  export class SignalWorkflowExecution2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SignalWorkflowExecution2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type TerminateWorkflowExecution2Request = {
    xAmzTarget: XAmzTarget16;
  };

  export class TerminateWorkflowExecution2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TerminateWorkflowExecution2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UndeprecateActivityType2Request = {
    xAmzTarget: XAmzTarget17;
  };

  export class UndeprecateActivityType2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UndeprecateActivityType2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UndeprecateDomain2Request = {
    xAmzTarget: XAmzTarget18;
  };

  export class UndeprecateDomain2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UndeprecateDomain2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UndeprecateWorkflowType2Request = {
    xAmzTarget: XAmzTarget19;
  };

  export class UndeprecateWorkflowType2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UndeprecateWorkflowType2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
