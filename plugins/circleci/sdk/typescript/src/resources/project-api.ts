import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { checkoutKeyListSchema, type CheckoutKeyList } from "../models/checkout-key-list.js";
import { checkoutKeySchema, type CheckoutKey } from "../models/checkout-key.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import {
  projectCheckoutKeyRequestSchema,
  type ProjectCheckoutKeyRequest,
} from "../models/project-checkout-key-request.js";
import {
  projectCircleciProjectApiInternalSchema,
  type ProjectCircleciProjectApi,
} from "../models/project-circleci-project-api.js";
import { projectEnvVarListSchema, type ProjectEnvVarList } from "../models/project-env-var-list.js";
import { projectEnvVarSchema, type ProjectEnvVar } from "../models/project-env-var.js";
import { projectEnvvarRequestSchema, type ProjectEnvvarRequest } from "../models/project-envvar-request.js";
import {
  projectProjectFollowResponseInternalSchema,
  type ProjectProjectFollowResponse,
} from "../models/project-project-follow-response.js";
import { project2InternalSchema, type Project2 } from "../models/project2.js";
import { vcsTypeSchema, type VcsType } from "../models/vcs-type.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for listing followed projects and managing project settings.
 */
export class ProjectApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a checkout key
   *
   * @remarks
   * Creates a new checkout key for the specified project. Only deploy keys and user keys are
   * supported.
   *
   * @returns Checkout key created successfully
   *
   * @throws {@link ProjectApi.CreateCheckoutKeyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCheckoutKey(
    request: ProjectApi.CreateCheckoutKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutKey, ProjectApi.CreateCheckoutKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{project-slug}/checkout-key"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectCheckoutKeyRequestSchema },
      },
      {
        success: { kind: "json", schema: checkoutKeySchema },
        errorFactory: ProjectApi.CreateCheckoutKeyError,
      },
      options,
    );
  }

  /**
   * Create a project environment variable
   *
   * @remarks
   * Creates a new environment variable for the specified project.
   *
   * @returns Environment variable created successfully
   *
   * @throws {@link ProjectApi.CreateProjectEnvironmentVariableError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectEnvironmentVariable(
    request: ProjectApi.CreateProjectEnvironmentVariableRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectEnvVar, ProjectApi.CreateProjectEnvironmentVariableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{project-slug}/envvar"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectEnvvarRequestSchema },
      },
      {
        success: { kind: "json", schema: projectEnvVarSchema },
        errorFactory: ProjectApi.CreateProjectEnvironmentVariableError,
      },
      options,
    );
  }

  /**
   * Delete a checkout key
   *
   * @remarks
   * Deletes a checkout key by its fingerprint.
   *
   * @returns Successfully deleted checkout key
   *
   * @throws {@link ProjectApi.DeleteCheckoutKeyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCheckoutKey(
    request: ProjectApi.DeleteCheckoutKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, ProjectApi.DeleteCheckoutKeyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/project/{project-slug}/checkout-key/{fingerprint}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "fingerprint", value: request.fingerprint, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: ProjectApi.DeleteCheckoutKeyError,
      },
      options,
    );
  }

  /**
   * Delete a project environment variable
   *
   * @remarks
   * Deletes an environment variable from the specified project.
   *
   * @returns Successfully deleted environment variable
   *
   * @throws {@link ProjectApi.DeleteProjectEnvironmentVariableError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProjectEnvironmentVariable(
    request: ProjectApi.DeleteProjectEnvironmentVariableRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, ProjectApi.DeleteProjectEnvironmentVariableError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/project/{project-slug}/envvar/{name}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: ProjectApi.DeleteProjectEnvironmentVariableError,
      },
      options,
    );
  }

  /**
   * Follow a project
   *
   * @remarks
   * Follows a project, adding it to the authenticated user's list of followed projects.
   *
   * @returns Project followed successfully
   *
   * @throws {@link ProjectApi.FollowProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  followProject(
    request: ProjectApi.FollowProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectProjectFollowResponse, ProjectApi.FollowProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/follow"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectProjectFollowResponseInternalSchema },
        errorFactory: ProjectApi.FollowProjectError,
      },
      options,
    );
  }

  /**
   * Get a checkout key
   *
   * @remarks
   * Returns a checkout key by its fingerprint.
   *
   * @returns Successfully retrieved checkout key
   *
   * @throws {@link ProjectApi.GetCheckoutKeyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCheckoutKey(
    request: ProjectApi.GetCheckoutKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutKey, ProjectApi.GetCheckoutKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{project-slug}/checkout-key/{fingerprint}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "fingerprint", value: request.fingerprint, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkoutKeySchema },
        errorFactory: ProjectApi.GetCheckoutKeyError,
      },
      options,
    );
  }

  /**
   * Get a project
   *
   * @remarks
   * Returns a project by its slug, which is a triplet of the VCS type, organization name, and
   * repository name.
   *
   * @returns Successfully retrieved project
   *
   * @throws {@link ProjectApi.GetProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProject(
    request: ProjectApi.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project2, ProjectApi.GetProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{project-slug}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: project2InternalSchema },
        errorFactory: ProjectApi.GetProjectError,
      },
      options,
    );
  }

  /**
   * Get a masked environment variable
   *
   * @remarks
   * Returns a masked environment variable by name for the specified project.
   *
   * @returns Successfully retrieved environment variable
   *
   * @throws {@link ProjectApi.GetProjectEnvironmentVariableError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectEnvironmentVariable(
    request: ProjectApi.GetProjectEnvironmentVariableRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectEnvVar, ProjectApi.GetProjectEnvironmentVariableError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{project-slug}/envvar/{name}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "project-slug", value: request.projectSlug, schema: s.string() },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectEnvVarSchema },
        errorFactory: ProjectApi.GetProjectEnvironmentVariableError,
      },
      options,
    );
  }

  /**
   * List checkout keys
   *
   * @remarks
   * Returns a paginated list of checkout keys for a given project.
   *
   * @returns Successfully retrieved checkout keys
   *
   * @throws {@link ProjectApi.ListCheckoutKeysError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCheckoutKeys(
    request: ProjectApi.ListCheckoutKeysRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutKeyList, ProjectApi.ListCheckoutKeysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{project-slug}/checkout-key"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkoutKeyListSchema },
        errorFactory: ProjectApi.ListCheckoutKeysError,
      },
      options,
    );
  }

  /**
   * List project environment variables
   *
   * @remarks
   * Returns a paginated list of masked environment variables for a given project.
   *
   * @returns Successfully retrieved environment variables
   *
   * @throws {@link ProjectApi.ListProjectEnvironmentVariablesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjectEnvironmentVariables(
    request: ProjectApi.ListProjectEnvironmentVariablesRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectEnvVarList, ProjectApi.ListProjectEnvironmentVariablesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{project-slug}/envvar"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-slug", value: request.projectSlug, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectEnvVarListSchema },
        errorFactory: ProjectApi.ListProjectEnvironmentVariablesError,
      },
      options,
    );
  }

  /**
   * List followed projects
   *
   * @remarks
   * Returns a list of all projects the authenticated user follows, including recent build summaries
   * for each project.
   *
   * @returns Successfully retrieved projects
   *
   * @throws {@link ProjectApi.ListProjectsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjects(
    options?: RequestOptions,
  ): ApiPromise<ProjectCircleciProjectApi[], ProjectApi.ListProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/projects"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => projectCircleciProjectApiInternalSchema)) },
        errorFactory: ProjectApi.ListProjectsError,
      },
      options,
    );
  }
}

export namespace ProjectApi {
  export type CreateCheckoutKeyRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    body: ProjectCheckoutKeyRequest;
  };

  export class CreateCheckoutKeyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCheckoutKeyError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateProjectEnvironmentVariableRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    body: ProjectEnvvarRequest;
  };

  export class CreateProjectEnvironmentVariableError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectEnvironmentVariableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteCheckoutKeyRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The fingerprint of the checkout key */
    fingerprint: string;
  };

  export class DeleteCheckoutKeyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCheckoutKeyError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteProjectEnvironmentVariableRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The name of the environment variable */
    name: string;
  };

  export class DeleteProjectEnvironmentVariableError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectEnvironmentVariableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FollowProjectRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
  };

  export class FollowProjectError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<FollowProjectError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type GetCheckoutKeyRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The fingerprint of the checkout key */
    fingerprint: string;
  };

  export class GetCheckoutKeyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCheckoutKeyError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
  };

  export class GetProjectError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectEnvironmentVariableRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
    /** The name of the environment variable */
    name: string;
  };

  export class GetProjectEnvironmentVariableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectEnvironmentVariableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCheckoutKeysRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
  };

  export class ListCheckoutKeysError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListCheckoutKeysError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListProjectEnvironmentVariablesRequest = {
    /**
     * The project slug in the form vcs-slug/org-name/repo-name (e.g.,
     * gh/CircleCI-Public/api-preview-docs)
     */
    projectSlug: string;
  };

  export class ListProjectEnvironmentVariablesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListProjectEnvironmentVariablesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class ListProjectsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListProjectsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
