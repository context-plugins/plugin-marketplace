import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { customWorkflowInputSchema, type CustomWorkflowInput } from "../models/custom-workflow-input.js";
import { customWorkflowOutputSchema, type CustomWorkflowOutput } from "../models/custom-workflow-output.js";
import {
  customWorkflowsListingOutputSchema,
  type CustomWorkflowsListingOutput,
} from "../models/custom-workflows-listing-output.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Workflows are in maintenance mode > > The workflows feature is in maintenance mode, and is
 * planned for future deprecation at a date not yet specified. We will work with existing customers
 * using workflows to migrate to a replacement solution when deprecation occurs.
 *
 * A workflow is a set of actions that you can schedule in advance to make changes to a feature flag
 * at a future date and time. You can also include approval requests at different stages of a
 * workflow. To learn more, read [Workflows](https://launchdarkly.com/docs/home/releases/workflows).
 *
 * The actions supported are as follows:
 *
 * - Turning targeting `ON` or `OFF`
 * - Setting the default variation
 * - Adding targets to a given variation
 * - Creating a rule to target by segment
 * - Modifying the rollout percentage for rules
 *
 * You can create multiple stages of a flag release workflow. Unique stages are defined by their
 * conditions: either approvals and/or scheduled changes.
 *
 * Several of the endpoints in the workflows API require a workflow ID or one or more member IDs.
 * The workflow ID is returned as part of the [Create
 * workflow](https://launchdarkly.com/docs/api/workflows/post-workflow) and [Get
 * workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) responses. It is the `_id`
 * field, or the `_id` field of each element in the `items` array. The member ID is returned as part
 * of the [List account members](https://launchdarkly.com/docs/api/account-members/get-members)
 * response. It is the `_id` field of each element in the `items` array.
 */
export class Workflows {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete workflow
   *
   * @remarks
   * Delete a workflow from a feature flag.
   *
   * @returns Action completed successfully
   *
   * @throws {@link Workflows.DeleteWorkflowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteWorkflow(
    request: Workflows.DeleteWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Workflows.DeleteWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "workflowId", value: request.workflowId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Workflows.DeleteWorkflowError,
      },
      options,
    );
  }

  /**
   * Get custom workflow
   *
   * @remarks
   * Get a specific workflow by ID.
   *
   * @returns Workflow response
   *
   * @throws {@link Workflows.GetCustomWorkflowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCustomWorkflow(
    request: Workflows.GetCustomWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomWorkflowOutput, Workflows.GetCustomWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "workflowId", value: request.workflowId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customWorkflowOutputSchema },
        errorFactory: Workflows.GetCustomWorkflowError,
      },
      options,
    );
  }

  /**
   * Get workflows
   *
   * @remarks
   * Display workflows associated with a feature flag.
   *
   * @returns Workflows collection response
   *
   * @throws {@link Workflows.GetWorkflowsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getWorkflows(
    request: Workflows.GetWorkflowsRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomWorkflowsListingOutput, Workflows.GetWorkflowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customWorkflowsListingOutputSchema },
        errorFactory: Workflows.GetWorkflowsError,
      },
      options,
    );
  }

  /**
   * Create workflow
   *
   * @remarks
   * > ### Workflows are in maintenance mode > > The workflows feature is in maintenance mode, and
   * is planned for future deprecation at a date not yet specified. We will work with existing
   * customers using workflows to migrate to a replacement solution when deprecation occurs.
   *
   * Create a workflow for a feature flag. You can create a workflow directly, or you can apply a
   * template to create a new workflow.
   *
   * ### Creating a workflow
   *
   * You can use the create workflow endpoint to create a workflow directly by adding a `stages`
   * array to the request body.
   *
   * For each stage, define the `name`, `conditions` when the stage should be executed, and `action`
   * that describes the stage. For approval stages, only standard LaunchDarkly approvals are
   * permitted. Workflows of `kind` `integration-approval` cannot be used for custom workflows.
   *
   * <details> <summary>Click to expand example</summary>
   *
   * _Example request body_
   * ```json
   * {
   *   "name": "Progressive rollout starting in two days",
   *   "description": "Turn flag targeting on and increase feature rollout in 10% increments each day",
   *   "stages": [
   *     {
   *       "name": "10% rollout on day 1",
   *       "conditions": [
   *         {
   *           "kind": "schedule",
   *           "scheduleKind": "relative", // or "absolute"
   *               //  If "scheduleKind" is "absolute", set "executionDate";
   *               // "waitDuration" and "waitDurationUnit" will be ignored
   *           "waitDuration": 2,
   *           "waitDurationUnit": "calendarDay"
   *         },
   *         {
   *           "kind": "ld-approval",
   *           "notifyMemberIds": [ "507f1f77bcf86cd799439011" ],
   *           "notifyTeamKeys": [ "team-key-123abc" ]
   *         }
   *       ],
   *       "action": {
   *         "instructions": [
   *           {
   *             "kind": "turnFlagOn"
   *           },
   *           {
   *             "kind": "updateFallthroughVariationOrRollout",
   *             "rolloutWeights": {
   *               "452f5fb5-7320-4ba3-81a1-8f4324f79d49": 90000,
   *               "fc15f6a4-05d3-4aa4-a997-446be461345d": 10000
   *             }
   *           }
   *         ]
   *       }
   *     }
   *   ]
   * }
   * ```
   * </details>
   *
   * ### Creating a workflow by applying a workflow template
   *
   * You can also create a workflow by applying a workflow template. If you pass a valid workflow
   * template key as the `templateKey` query parameter with the request, the API will attempt to
   * create a new workflow with the stages defined in the workflow template with the corresponding
   * key.
   *
   * #### Applicability of stages
   * Templates are created in the context of a particular flag in a particular environment in a
   * particular project. However, because workflows created from a template can be applied to any
   * project, environment, and flag, some steps of the workflow may need to be updated in order to
   * be applicable for the target resource.
   *
   * You can pass a `dryRun` query parameter to tell the API to return a report of which steps of
   * the workflow template are applicable in the target project/environment/flag, and which will
   * need to be updated. When the `dryRun` query parameter is present the response body includes a
   * `meta` property that holds a list of parameters that could potentially be inapplicable for the
   * target resource. Each of these parameters will include a `valid` field. You will need to update
   * any invalid parameters in order to create the new workflow. You can do this using the
   * `parameters` property, which overrides the workflow template parameters.
   *
   * #### Overriding template parameters
   * You can use the `parameters` property in the request body to tell the API to override the
   * specified workflow template parameters with new values that are specific to your target
   * project/environment/flag.
   *
   * <details> <summary>Click to expand example</summary>
   *
   * _Example request body_
   * ```json
   * {
   * 	"name": "workflow created from my-template",
   * 	"description": "description of my workflow",
   * 	"parameters": [
   * 		{
   * 			"_id": "62cf2bc4cadbeb7697943f3b",
   * 			"path": "/clauses/0/values",
   * 			"default": {
   * 				"value": ["updated-segment"]
   * 			}
   * 		},
   * 		{
   * 			"_id": "62cf2bc4cadbeb7697943f3d",
   * 			"path": "/variationId",
   * 			"default": {
   * 				"value": "abcd1234-abcd-1234-abcd-1234abcd12"
   * 			}
   * 		}
   * 	]
   * }
   * ```
   * </details>
   *
   * If there are any steps in the template that are not applicable to the target resource, the
   * workflow will not be created, and the `meta` property will be included in the response body
   * detailing which parameters need to be updated.
   *
   * @returns Workflow response
   *
   * @throws {@link Workflows.PostWorkflowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postWorkflow(
    request: Workflows.PostWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomWorkflowOutput, Workflows.PostWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "featureFlagKey", value: request.featureFlagKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "templateKey", value: request.templateKey, schema: s.optional(s.string()) },
          { name: "dryRun", value: request.dryRun, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customWorkflowInputSchema },
      },
      {
        success: { kind: "json", schema: customWorkflowOutputSchema },
        errorFactory: Workflows.PostWorkflowError,
      },
      options,
    );
  }
}

export namespace Workflows {
  export type DeleteWorkflowRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The workflow id */
    workflowId: string;
  };

  export class DeleteWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWorkflowError> = [
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

  export type GetCustomWorkflowRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The workflow ID */
    workflowId: string;
  };

  export class GetCustomWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomWorkflowError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetWorkflowsRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /**
     * Filter results by workflow status. Valid status filters are `active`, `completed`, and
     * `failed`.
     */
    status?: string;
    /**
     * A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This
     * endpoint supports sorting by `creationDate` or `stopDate`.
     */
    sort?: string;
    /** The maximum number of workflows to return. Defaults to 20. */
    limit?: number;
    /**
     * Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset
     * of 10 skips the first ten items and then returns the next items in the list, up to the query
     * `limit`.
     */
    offset?: number;
  };

  export class GetWorkflowsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostWorkflowRequest = {
    /** The project key */
    projectKey: string;
    /** The feature flag key */
    featureFlagKey: string;
    /** The environment key */
    environmentKey: string;
    /** The template key to apply as a starting point for the new workflow */
    templateKey?: string;
    /** Whether to call the endpoint in dry-run mode */
    dryRun?: boolean;
    body: CustomWorkflowInput;
  };

  export class PostWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostWorkflowError> = [
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
}
