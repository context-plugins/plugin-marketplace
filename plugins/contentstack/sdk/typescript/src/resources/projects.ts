import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createProjectRequestSchema, type CreateProjectRequest } from "../models/create-project-request.js";
import {
  createProjectRequest2Schema,
  type CreateProjectRequest2,
} from "../models/create-project-request2.js";
import { errorSchema, type Error } from "../models/error.js";
import { projectListSchema, type ProjectList } from "../models/project-list.js";
import { projectList2Schema, type ProjectList2 } from "../models/project-list2.js";
import { projectSchema, type Project } from "../models/project.js";
import { project2Schema, type Project2 } from "../models/project2.js";
import type { Servers } from "../servers.js";

/**
 * Automation projects are containers for automations within a Contentstack organization. Each
 * project groups related automations and can have its own variables and account connections.
 */
export class Projects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a project
   *
   * @remarks
   * Creates a new automation project within the specified organization. Projects serve as
   * organizational containers for automations and shared configuration.
   *
   * @returns The newly created project.
   *
   * @throws {@link Projects.CreateProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProject(
    request: Projects.CreateProjectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.CreateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackProjectsApi(
          "/v1/organizations/{organization_uid}/projects",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createProjectRequestSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: Projects.CreateProjectError,
      },
      options,
    );
  }

  /**
   * Delete a project
   *
   * @remarks
   * Permanently deletes an automation project and all its automations, variables, and
   * configuration. This action is irreversible.
   *
   * @returns Project deleted successfully.
   *
   * @throws {@link Projects.DeleteProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProject(
    request: Projects.DeleteProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.DeleteProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackProjectsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.DeleteProjectError,
      },
      options,
    );
  }

  /**
   * Delete a project
   *
   * @remarks
   * Permanently deletes a Launch project and all its environments and deployment history. This
   * action is irreversible.
   *
   * @returns Project deleted successfully.
   *
   * @throws {@link Projects.DeleteProjectsByProjectUidError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProjectsByProjectUid(
    request: Projects.DeleteProjectsByProjectUidRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.DeleteProjectsByProjectUidError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackProjectsApi("/projects/{project_uid}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "project_uid", value: request.projectUid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.DeleteProjectsByProjectUidError,
      },
      options,
    );
  }

  /**
   * Get all projects
   *
   * @remarks
   * Retrieves all automation projects within the specified organization. Each project contains
   * automations, variables, and external service account connections.
   *
   * @returns A list of automation projects in the organization.
   *
   * @throws {@link Projects.GetAllProjectsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllProjects(
    request: Projects.GetAllProjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectList, Projects.GetAllProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackProjectsApi(
          "/v1/organizations/{organization_uid}/projects",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectListSchema },
        errorFactory: Projects.GetAllProjectsError,
      },
      options,
    );
  }

  /**
   * Get a project
   *
   * @remarks
   * Retrieves details for a specific automation project including its metadata, creation date, and
   * current status.
   *
   * @returns The requested project details.
   *
   * @throws {@link Projects.GetProjectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProject(
    request: Projects.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.GetProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackProjectsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: Projects.GetProjectError,
      },
      options,
    );
  }

  /**
   * Get all projects
   *
   * @remarks
   * Retrieves all Launch projects accessible to the authenticated user or organization. Returns
   * project metadata including names, creation dates, and environment counts.
   *
   * @returns A list of Launch projects.
   *
   * @throws {@link Projects.GetProjectsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjects(options?: RequestOptions): ApiPromise<ProjectList2, Projects.GetProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackProjectsApi("/projects"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectList2Schema },
        errorFactory: Projects.GetProjectsError,
      },
      options,
    );
  }

  /**
   * Get a project
   *
   * @remarks
   * Retrieves the details of a specific Launch project including its configuration, current status,
   * and linked Contentstack stack.
   *
   * @returns The requested Launch project.
   *
   * @throws {@link Projects.GetProjectsByProjectUidError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectsByProjectUid(
    request: Projects.GetProjectsByProjectUidRequest,
    options?: RequestOptions,
  ): ApiPromise<Project2, Projects.GetProjectsByProjectUidError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackProjectsApi("/projects/{project_uid}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "project_uid", value: request.projectUid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: project2Schema },
        errorFactory: Projects.GetProjectsByProjectUidError,
      },
      options,
    );
  }

  /**
   * Create a project
   *
   * @remarks
   * Creates a new Launch project for deploying a web application. Projects serve as the top-level
   * container for environments and deployments.
   *
   * @returns The newly created Launch project.
   *
   * @throws {@link Projects.PostProjectsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postProjects(
    request: Projects.PostProjectsRequest,
    options?: RequestOptions,
  ): ApiPromise<Project2, Projects.PostProjectsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackProjectsApi("/projects"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createProjectRequest2Schema },
      },
      {
        success: { kind: "json", schema: project2Schema },
        errorFactory: Projects.PostProjectsError,
      },
      options,
    );
  }

  /**
   * Update a project
   *
   * @remarks
   * Updates the configuration of an existing Launch project such as its name, description, or
   * framework settings.
   *
   * @returns The updated Launch project.
   *
   * @throws {@link Projects.PutProjectsByProjectUidError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putProjectsByProjectUid(
    request: Projects.PutProjectsByProjectUidRequest,
    options?: RequestOptions,
  ): ApiPromise<Project2, Projects.PutProjectsByProjectUidError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackProjectsApi("/projects/{project_uid}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "project_uid", value: request.projectUid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createProjectRequest2Schema },
      },
      {
        success: { kind: "json", schema: project2Schema },
        errorFactory: Projects.PutProjectsByProjectUidError,
      },
      options,
    );
  }

  /**
   * Update a project
   *
   * @remarks
   * Updates the name or description of an existing automation project.
   *
   * @returns The updated project.
   *
   * @throws {@link Projects.UpdateProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProject(
    request: Projects.UpdateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.UpdateProjectError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackProjectsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createProjectRequestSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: Projects.UpdateProjectError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type CreateProjectRequestParams = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    body: CreateProjectRequest;
  };

  export class CreateProjectError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteProjectRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
  };

  export class DeleteProjectError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteProjectsByProjectUidRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
  };

  export class DeleteProjectsByProjectUidError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectsByProjectUidError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllProjectsRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class GetAllProjectsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllProjectsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
  };

  export class GetProjectError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetProjectsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProjectsByProjectUidRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
  };

  export class GetProjectsByProjectUidError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsByProjectUidError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostProjectsRequest = {
    body: CreateProjectRequest2;
  };

  export class PostProjectsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<PostProjectsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PutProjectsByProjectUidRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    body: CreateProjectRequest2;
  };

  export class PutProjectsByProjectUidError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<PutProjectsByProjectUidError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateProjectRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
    body: CreateProjectRequest;
  };

  export class UpdateProjectError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProjectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
