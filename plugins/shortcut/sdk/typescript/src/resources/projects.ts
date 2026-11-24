import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createProjectInternalSchema, type CreateProject } from "../models/create-project.js";
import { projectInternalSchema, type Project } from "../models/project.js";
import { storySlimInternalSchema, type StorySlim } from "../models/story-slim.js";
import { updateProjectInternalSchema, type UpdateProject } from "../models/update-project.js";
import type { Servers } from "../servers.js";

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
   * Create Project
   *
   * @remarks
   * Create Project is used to create a new Shortcut Project.
   *
   * @returns Resource
   *
   * @throws {@link Projects.CreateProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProject(
    request: Projects.CreateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.CreateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/projects"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createProjectInternalSchema },
      },
      {
        success: { kind: "json", schema: projectInternalSchema },
        errorFactory: Projects.CreateProjectError,
      },
      options,
    );
  }

  /**
   * Delete Project
   *
   * @remarks
   * Delete Project can be used to delete a Project. Projects can only be deleted if all associated
   * Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive
   * a 422 response.
   *
   * @returns No Content
   *
   * @throws {@link Projects.DeleteProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.default("/api/v3/projects/{project-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-public-id", value: request.projectPublicId, schema: s.int() }],
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
   * Get Project
   *
   * @remarks
   * Get Project returns information about the selected Project.
   *
   * @returns Resource
   *
   * @throws {@link Projects.GetProjectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.default("/api/v3/projects/{project-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-public-id", value: request.projectPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectInternalSchema },
        errorFactory: Projects.GetProjectError,
      },
      options,
    );
  }

  /**
   * List Projects
   *
   * @remarks
   * List Projects returns a list of all Projects and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link Projects.ListProjectsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjects(options?: RequestOptions): ApiPromise<Project[], Projects.ListProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/projects"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => projectInternalSchema)) },
        errorFactory: Projects.ListProjectsError,
      },
      options,
    );
  }

  /**
   * List Stories
   *
   * @remarks
   * List Stories returns a list of all Stories in a selected Project and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link Projects.ListStoriesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStories(
    request: Projects.ListStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Projects.ListStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/projects/{project-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-public-id", value: request.projectPublicId, schema: s.int() }],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: Projects.ListStoriesError,
      },
      options,
    );
  }

  /**
   * Update Project
   *
   * @remarks
   * Update Project can be used to change properties of a Project.
   *
   * @returns Resource
   *
   * @throws {@link Projects.UpdateProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.default("/api/v3/projects/{project-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "project-public-id", value: request.projectPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateProjectInternalSchema },
      },
      {
        success: { kind: "json", schema: projectInternalSchema },
        errorFactory: Projects.UpdateProjectError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type CreateProjectRequest = {
    body: CreateProject;
  };

  export class CreateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteProjectRequest = {
    /** The unique ID of the Project. */
    projectPublicId: number;
  };

  export class DeleteProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetProjectRequest = {
    /** The unique ID of the Project. */
    projectPublicId: number;
  };

  export class GetProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListProjectsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListProjectsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListStoriesRequest = {
    /** The unique ID of the Project. */
    projectPublicId: number;
    /** A true/false boolean indicating whether to return Stories with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateProjectRequest = {
    /** The unique ID of the Project. */
    projectPublicId: number;
    body: UpdateProject;
  };

  export class UpdateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProjectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
