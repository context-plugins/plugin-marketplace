import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import {
  rerunWorkflowResponseSchema,
  type RerunWorkflowResponse,
} from "../models/rerun-workflow-response.js";
import { workflowJobListSchema, type WorkflowJobList } from "../models/workflow-job-list.js";
import { workflowRerunRequestSchema, type WorkflowRerunRequest } from "../models/workflow-rerun-request.js";
import { workflowSchema, type Workflow } from "../models/workflow.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving workflow details, managing workflow status, and rerunning workflows.
 */
export class WorkflowApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Approve a workflow job
   *
   * @remarks
   * Approves a pending approval job in a workflow, allowing the workflow to continue execution.
   *
   * @returns Approval accepted
   *
   * @throws {@link WorkflowApi.ApproveWorkflowJobError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  approveWorkflowJob(
    request: WorkflowApi.ApproveWorkflowJobRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, WorkflowApi.ApproveWorkflowJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/workflow/{id}/approve/{approval_request_id}",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "approval_request_id", value: request.approvalRequestId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: WorkflowApi.ApproveWorkflowJobError,
      },
      options,
    );
  }

  /**
   * Cancel a workflow
   *
   * @remarks
   * Cancels a running workflow and all of its running jobs.
   *
   * @returns Workflow cancellation accepted
   *
   * @throws {@link WorkflowApi.CancelWorkflowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelWorkflow(
    request: WorkflowApi.CancelWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, WorkflowApi.CancelWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/workflow/{id}/cancel"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: WorkflowApi.CancelWorkflowError,
      },
      options,
    );
  }

  /**
   * Get a workflow by ID
   *
   * @remarks
   * Returns a workflow by its unique identifier, including its status, pipeline ID, and timing
   * information.
   *
   * @returns Successfully retrieved workflow
   *
   * @throws {@link WorkflowApi.GetWorkflowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkflow(
    request: WorkflowApi.GetWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<Workflow, WorkflowApi.GetWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/workflow/{id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workflowSchema },
        errorFactory: WorkflowApi.GetWorkflowError,
      },
      options,
    );
  }

  /**
   * List jobs for a workflow
   *
   * @remarks
   * Returns a list of jobs associated with a given workflow.
   *
   * @returns Successfully retrieved workflow jobs
   *
   * @throws {@link WorkflowApi.ListWorkflowJobsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkflowJobs(
    request: WorkflowApi.ListWorkflowJobsRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkflowJobList, WorkflowApi.ListWorkflowJobsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/workflow/{id}/job"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workflowJobListSchema },
        errorFactory: WorkflowApi.ListWorkflowJobsError,
      },
      options,
    );
  }

  /**
   * Rerun a workflow
   *
   * @remarks
   * Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be
   * enabled for debugging.
   *
   * @returns Workflow rerun accepted
   *
   * @throws {@link WorkflowApi.RerunWorkflowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rerunWorkflow(
    request: WorkflowApi.RerunWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<RerunWorkflowResponse, WorkflowApi.RerunWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/workflow/{id}/rerun"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => workflowRerunRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: rerunWorkflowResponseSchema },
        errorFactory: WorkflowApi.RerunWorkflowError,
      },
      options,
    );
  }
}

export namespace WorkflowApi {
  export type ApproveWorkflowJobRequest = {
    /** The unique identifier of the workflow */
    id: string;
    /** The ID of the approval request to approve */
    approvalRequestId: string;
  };

  export class ApproveWorkflowJobError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ApproveWorkflowJobError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CancelWorkflowRequest = {
    /** The unique identifier of the workflow */
    id: string;
  };

  export class CancelWorkflowError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<CancelWorkflowError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWorkflowRequest = {
    /** The unique identifier of the workflow */
    id: string;
  };

  export class GetWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListWorkflowJobsRequest = {
    /** The unique identifier of the workflow */
    id: string;
  };

  export class ListWorkflowJobsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListWorkflowJobsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RerunWorkflowRequest = {
    /** The unique identifier of the workflow */
    id: string;
    body?: WorkflowRerunRequest;
  };

  export class RerunWorkflowError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<RerunWorkflowError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
