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
  pipelineCircleCiRestApiV2PipelineApiInternalSchema,
  type PipelineCircleCiRestApiV2PipelineApi,
} from "../models/pipeline-circle-ci-rest-api-v2-pipeline-api.js";
import { pipelineConfigSchema, type PipelineConfig } from "../models/pipeline-config.js";
import {
  pipelineContinueRequestSchema,
  type PipelineContinueRequest,
} from "../models/pipeline-continue-request.js";
import { pipelineCreationSchema, type PipelineCreation } from "../models/pipeline-creation.js";
import { pipelineListInternalSchema, type PipelineList } from "../models/pipeline-list.js";
import {
  triggerPipelineRequestSchema,
  type TriggerPipelineRequest,
} from "../models/trigger-pipeline-request.js";
import { workflowListSchema, type WorkflowList } from "../models/workflow-list.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for triggering, retrieving, and managing pipelines and their configurations.
 */
export class PipelineApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Continue a pipeline
   *
   * @remarks
   * Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.
   *
   * @returns Pipeline continued successfully
   *
   * @throws {@link PipelineApi.ContinuePipelineError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  continuePipeline(
    request: PipelineApi.ContinuePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, PipelineApi.ContinuePipelineError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/pipeline/continue"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelineContinueRequestSchema },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: PipelineApi.ContinuePipelineError,
      },
      options,
    );
  }

  /**
   * Get a pipeline by ID
   *
   * @remarks
   * Returns a pipeline by its unique identifier.
   *
   * @returns Successfully retrieved pipeline
   *
   * @throws {@link PipelineApi.GetPipelineError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPipeline(
    request: PipelineApi.GetPipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<PipelineCircleCiRestApiV2PipelineApi, PipelineApi.GetPipelineError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/pipeline/{pipeline-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "pipeline-id", value: request.pipelineId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineCircleCiRestApiV2PipelineApiInternalSchema },
        errorFactory: PipelineApi.GetPipelineError,
      },
      options,
    );
  }

  /**
   * Get a pipeline's configuration
   *
   * @remarks
   * Returns the configuration source for a given pipeline.
   *
   * @returns Successfully retrieved pipeline configuration
   *
   * @throws {@link PipelineApi.GetPipelineConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPipelineConfig(
    request: PipelineApi.GetPipelineConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<PipelineConfig, PipelineApi.GetPipelineConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/pipeline/{pipeline-id}/config"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "pipeline-id", value: request.pipelineId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineConfigSchema },
        errorFactory: PipelineApi.GetPipelineConfigError,
      },
      options,
    );
  }

  /**
   * List my project pipelines
   *
   * @remarks
   * Returns a paginated list of pipelines for a project filtered to those triggered by the current
   * user.
   *
   * @returns Successfully retrieved pipelines
   *
   * @throws {@link PipelineApi.ListMyProjectPipelinesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMyProjectPipelines(
    request: PipelineApi.ListMyProjectPipelinesRequest,
    options?: RequestOptions,
  ): ApiPromise<PipelineList, PipelineApi.ListMyProjectPipelinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/project/{project-slug}/pipeline/mine",
        ),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [{ name: "page-token", value: request.pageToken, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineListInternalSchema },
        errorFactory: PipelineApi.ListMyProjectPipelinesError,
      },
      options,
    );
  }

  /**
   * List workflows for a pipeline
   *
   * @remarks
   * Returns a paginated list of workflows associated with a given pipeline.
   *
   * @returns Successfully retrieved workflows
   *
   * @throws {@link PipelineApi.ListPipelineWorkflowsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPipelineWorkflows(
    request: PipelineApi.ListPipelineWorkflowsRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkflowList, PipelineApi.ListPipelineWorkflowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/pipeline/{pipeline-id}/workflow"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "pipeline-id", value: request.pipelineId, schema: s.string() }],
        query: [{ name: "page-token", value: request.pageToken, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workflowListSchema },
        errorFactory: PipelineApi.ListPipelineWorkflowsError,
      },
      options,
    );
  }

  /**
   * List pipelines
   *
   * @remarks
   * Returns all pipelines for the most recently built projects you follow in the organization.
   *
   * @returns Successfully retrieved pipelines
   *
   * @throws {@link PipelineApi.ListPipelinesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPipelines(
    request: PipelineApi.ListPipelinesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PipelineList, PipelineApi.ListPipelinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/pipeline"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "org-slug", value: request.orgSlug, schema: s.optional(s.string()) },
          { name: "mine", value: request.mine, schema: s.optional(s.boolean()) },
          { name: "page-token", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineListInternalSchema },
        errorFactory: PipelineApi.ListPipelinesError,
      },
      options,
    );
  }

  /**
   * List project pipelines
   *
   * @remarks
   * Returns a paginated list of pipelines for a given project.
   *
   * @returns Successfully retrieved pipelines
   *
   * @throws {@link PipelineApi.ListProjectPipelinesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjectPipelines(
    request: PipelineApi.ListProjectPipelinesRequest,
    options?: RequestOptions,
  ): ApiPromise<PipelineList, PipelineApi.ListProjectPipelinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/project/{project-slug}/pipeline"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [
          { name: "branch", value: request.branch, schema: s.optional(s.string()) },
          { name: "page-token", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineListInternalSchema },
        errorFactory: PipelineApi.ListProjectPipelinesError,
      },
      options,
    );
  }

  /**
   * Trigger a pipeline
   *
   * @remarks
   * Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision
   * to build. Pipeline parameters can also be provided.
   *
   * @returns Pipeline triggered successfully
   *
   * @throws {@link PipelineApi.TriggerPipelineError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerPipeline(
    request: PipelineApi.TriggerPipelineRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PipelineCreation, PipelineApi.TriggerPipelineError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/project/{project-slug}/pipeline"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => triggerPipelineRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: pipelineCreationSchema },
        errorFactory: PipelineApi.TriggerPipelineError,
      },
      options,
    );
  }
}

export namespace PipelineApi {
  export type ContinuePipelineRequest = {
    body: PipelineContinueRequest;
  };

  export class ContinuePipelineError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ContinuePipelineError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPipelineRequest = {
    /** The unique identifier of the pipeline */
    pipelineId: string;
  };

  export class GetPipelineError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPipelineError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetPipelineConfigRequest = {
    /** The unique identifier of the pipeline */
    pipelineId: string;
  };

  export class GetPipelineConfigError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetPipelineConfigError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListMyProjectPipelinesRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class ListMyProjectPipelinesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListMyProjectPipelinesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPipelineWorkflowsRequest = {
    /** The unique identifier of the pipeline */
    pipelineId: string;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class ListPipelineWorkflowsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListPipelineWorkflowsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListPipelinesRequest = {
    /** Organization slug in the form vcs-slug/org-name */
    orgSlug?: string;
    /** Filter to only pipelines triggered by the current user */
    mine?: boolean;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class ListPipelinesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListPipelinesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListProjectPipelinesRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** Filter pipelines by branch name */
    branch?: string;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class ListProjectPipelinesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListProjectPipelinesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TriggerPipelineRequestParams = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    body?: TriggerPipelineRequest;
  };

  export class TriggerPipelineError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerPipelineError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
