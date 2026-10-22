import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  deploymentCollectionRepSchema,
  type DeploymentCollectionRep,
} from "../models/deployment-collection-rep.js";
import { deploymentRepSchema, type DeploymentRep } from "../models/deployment-rep.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchOperationSchema, type PatchOperation } from "../models/patch-operation.js";
import {
  postDeploymentEventInputSchema,
  type PostDeploymentEventInput,
} from "../models/post-deployment-event-input.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import {
  validationFailedErrorRepSchema,
  type ValidationFailedErrorRep,
} from "../models/validation-failed-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * The deployments API provides access to deployment information in engineering insights. To learn
 * more, read [Deployments](https://launchdarkly.com/docs/home/observability/deployments).
 */
export class InsightsDeploymentsBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create deployment event
   *
   * @remarks
   * Create deployment event
   *
   * @returns Created
   *
   * @throws {@link InsightsDeploymentsBeta.CreateDeploymentEventError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createDeploymentEvent(
    request: InsightsDeploymentsBeta.CreateDeploymentEventRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, InsightsDeploymentsBeta.CreateDeploymentEventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/deployment-events"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: postDeploymentEventInputSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: InsightsDeploymentsBeta.CreateDeploymentEventError,
      },
      options,
    );
  }

  /**
   * Get deployment
   *
   * @remarks
   * Get a deployment by ID.
   *
   * The deployment ID is returned as part of the [List
   * deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments)
   * response. It is the `id` field of each element in the `items` array.
   *
   * ### Expanding the deployment response
   *
   * LaunchDarkly supports expanding the deployment response to include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `pullRequests` includes details on all of the pull requests associated with each deployment
   * * `flagReferences` includes details on all of the references to flags in each deployment
   *
   * For example, use `?expand=pullRequests` to include the `pullRequests` field in the response. By
   * default, this field is **not** included in the response.
   *
   * @returns Deployment response
   *
   * @throws {@link InsightsDeploymentsBeta.GetDeploymentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDeployment(
    request: InsightsDeploymentsBeta.GetDeploymentRequest,
    options?: RequestOptions,
  ): ApiPromise<DeploymentRep, InsightsDeploymentsBeta.GetDeploymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/deployments/{deploymentID}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "deploymentID", value: request.deploymentId, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deploymentRepSchema },
        errorFactory: InsightsDeploymentsBeta.GetDeploymentError,
      },
      options,
    );
  }

  /**
   * List deployments
   *
   * @remarks
   * Get a list of deployments
   *
   * ### Expanding the deployment collection response
   *
   * LaunchDarkly supports expanding the deployment collection response to include additional
   * fields.
   *
   * To expand the response, append the `expand` query parameter and include the following:
   *
   * * `pullRequests` includes details on all of the pull requests associated with each deployment
   * * `flagReferences` includes details on all of the references to flags in each deployment
   *
   * For example, use `?expand=pullRequests` to include the `pullRequests` field in the response. By
   * default, this field is **not** included in the response.
   *
   * @returns Deployment collection response
   *
   * @throws {@link InsightsDeploymentsBeta.GetDeploymentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDeployments(
    request: InsightsDeploymentsBeta.GetDeploymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeploymentCollectionRep, InsightsDeploymentsBeta.GetDeploymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/deployments"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "applicationKey", value: request.applicationKey, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "expand", value: request.expand, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "before", value: request.before, schema: s.optional(s.string()) },
          { name: "kind", value: request.kind, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deploymentCollectionRepSchema },
        errorFactory: InsightsDeploymentsBeta.GetDeploymentsError,
      },
      options,
    );
  }

  /**
   * Update deployment
   *
   * @remarks
   * Update a deployment by ID. Updating a deployment uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>The deployment
   * ID is returned as part of the [List
   * deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments)
   * response. It is the `id` field of each element in the `items` array.
   *
   * @returns Deployment response
   *
   * @throws {@link InsightsDeploymentsBeta.UpdateDeploymentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateDeployment(
    request: InsightsDeploymentsBeta.UpdateDeploymentRequest,
    options?: RequestOptions,
  ): ApiPromise<DeploymentRep, InsightsDeploymentsBeta.UpdateDeploymentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/engineering-insights/deployments/{deploymentID}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "deploymentID", value: request.deploymentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => patchOperationSchema)) },
      },
      {
        success: { kind: "json", schema: deploymentRepSchema },
        errorFactory: InsightsDeploymentsBeta.UpdateDeploymentError,
      },
      options,
    );
  }
}

export namespace InsightsDeploymentsBeta {
  export type CreateDeploymentEventRequest = {
    body: PostDeploymentEventInput;
  };

  export class CreateDeploymentEventError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDeploymentEventError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetDeploymentRequest = {
    /** The deployment ID */
    deploymentId: string;
    /** Expand properties in response. Options: `pullRequests`, `flagReferences` */
    expand?: string;
  };

  export class GetDeploymentError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDeploymentError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetDeploymentsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Comma separated list of application keys */
    applicationKey?: string;
    /** The number of deployments to return. Default is 20. Maximum allowed is 100. */
    limit?: number;
    /** Expand properties in response. Options: `pullRequests`, `flagReferences` */
    expand?: string;
    /** Unix timestamp in milliseconds. Default value is 7 days ago. */
    from?: number;
    /** Unix timestamp in milliseconds. Default value is now. */
    to?: number;
    /** Identifier used for pagination */
    after?: string;
    /** Identifier used for pagination */
    before?: string;
    /** The deployment kind */
    kind?: string;
    /** The deployment status */
    status?: string;
  };

  export class GetDeploymentsError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDeploymentsError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type UpdateDeploymentRequest = {
    /** The deployment ID */
    deploymentId: string;
    body: PatchOperation[];
  };

  export class UpdateDeploymentError extends ApiError {
    declare readonly payload:
      | Declared<"validationFailedErrorRep", ValidationFailedErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDeploymentError> = [
      {
        on: 400,
        kind: "validationFailedErrorRep",
        decode: { kind: "json", schema: validationFailedErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
