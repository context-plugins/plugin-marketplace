import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createWorkflowTemplateInputSchema,
  type CreateWorkflowTemplateInput,
} from "../models/create-workflow-template-input.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import {
  workflowTemplateOutputSchema,
  type WorkflowTemplateOutput,
} from "../models/workflow-template-output.js";
import {
  workflowTemplatesListingOutputRepSchema,
  type WorkflowTemplatesListingOutputRep,
} from "../models/workflow-templates-listing-output-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Workflows are in maintenance mode > > The workflows feature is in maintenance mode, and is
 * planned for future deprecation at a date not yet specified. We will work with existing customers
 * using workflows to migrate to a replacement solution when deprecation occurs.
 *
 * Workflow templates allow you to define a set of workflow stages that you can use as a starting
 * point for new workflows. You can create these workflows for any flag in any environment and any
 * project, and you can create as many workflows as you like from a given template.
 *
 * You can create workflow templates in two ways:
 * * by specifying the desired stages, using the `stages` property of the request body
 * * by specifying an existing workflow to save as a template, using the `workflowId` property of
 *   the request body
 *
 * You can use templates to create a workflow in any project, environment, or flag. However, when
 * you create a template, you must specify a particular project, environment, and flag. This means
 * that when you create a template using the `stages` property, you must also include `projectKey`,
 * `environmentKey`, and `flagKey` properties in the request body. When you create a template from
 * an existing workflow, it will use the project, environment, and flag of the existing workflow, so
 * those properties can be omitted from the request body.
 *
 * To learn more, read [Workflows
 * documentation](https://launchdarkly.com/docs/home/releases/workflows) and [Workflows API
 * documentation](https://launchdarkly.com/docs/api/workflows).
 */
export class WorkflowTemplates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create workflow template
   *
   * @remarks
   * > ### Workflows are in maintenance mode > > The workflows feature is in maintenance mode, and
   * is planned for future deprecation at a date not yet specified. We will work with existing
   * customers using workflows to migrate to a replacement solution when deprecation occurs.
   *
   * Create a template for a feature flag workflow.
   *
   * @returns Workflow template response JSON
   *
   * @throws {@link WorkflowTemplates.CreateWorkflowTemplateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createWorkflowTemplate(
    request: WorkflowTemplates.CreateWorkflowTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkflowTemplateOutput, WorkflowTemplates.CreateWorkflowTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/templates"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createWorkflowTemplateInputSchema },
      },
      {
        success: { kind: "json", schema: workflowTemplateOutputSchema },
        errorFactory: WorkflowTemplates.CreateWorkflowTemplateError,
      },
      options,
    );
  }

  /**
   * Delete workflow template
   *
   * @remarks
   * Delete a workflow template
   *
   * @returns Action completed successfully
   *
   * @throws {@link WorkflowTemplates.DeleteWorkflowTemplateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteWorkflowTemplate(
    request: WorkflowTemplates.DeleteWorkflowTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WorkflowTemplates.DeleteWorkflowTemplateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/templates/{templateKey}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "templateKey", value: request.templateKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WorkflowTemplates.DeleteWorkflowTemplateError,
      },
      options,
    );
  }

  /**
   * Get workflow templates
   *
   * @remarks
   * Get workflow templates belonging to an account, or can optionally return
   * templates_endpoints.workflowTemplateSummariesListingOutputRep when summary query param is true
   *
   * @returns Workflow templates list response JSON
   *
   * @throws {@link WorkflowTemplates.GetWorkflowTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getWorkflowTemplates(
    request: WorkflowTemplates.GetWorkflowTemplatesRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkflowTemplatesListingOutputRep, WorkflowTemplates.GetWorkflowTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/templates"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "summary", value: request.summary, schema: s.optional(s.boolean()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workflowTemplatesListingOutputRepSchema },
        errorFactory: WorkflowTemplates.GetWorkflowTemplatesError,
      },
      options,
    );
  }
}

export namespace WorkflowTemplates {
  export type CreateWorkflowTemplateRequest = {
    body: CreateWorkflowTemplateInput;
  };

  export class CreateWorkflowTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWorkflowTemplateError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type DeleteWorkflowTemplateRequest = {
    /** The template key */
    templateKey: string;
  };

  export class DeleteWorkflowTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWorkflowTemplateError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetWorkflowTemplatesRequest = {
    /** Whether the entire template object or just a summary should be returned */
    summary?: boolean;
    /** The substring in either the name or description of a template */
    search?: string;
  };

  export class GetWorkflowTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowTemplatesError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
