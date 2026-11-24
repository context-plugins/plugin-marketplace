import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  automateProjectsJsonRequestSchema,
  type AutomateProjectsJsonRequest,
} from "../models/automate-projects-json-request.js";
import { projectDetailSchema, type ProjectDetail } from "../models/project-detail.js";
import { projectSchema, type Project } from "../models/project.js";
import { statusMessageSchema, type StatusMessage } from "../models/status-message.js";
import type { Servers } from "../servers.js";

/**
 * Operations on Automate projects.
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
   * Delete project
   *
   * @remarks
   * Deletes an Automate project. The project must be empty of builds and sessions.
   *
   * @returns Deletion confirmation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProject(
    request: Projects.DeleteProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/automate/projects/{projectId}.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get project details
   *
   * @returns Project with associated builds
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProject(
    request: Projects.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectDetail, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/projects/{projectId}.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectDetailSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get project status badge key
   *
   * @returns Badge key string
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectBadgeKey(
    request: Projects.GetProjectBadgeKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/projects/{projectId}/badge_key"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List projects
   *
   * @returns Array of project objects
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjects(options?: RequestOptions): ApiPromise<Project[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/projects.json"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => projectSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update project
   *
   * @returns Updated project
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProject(
    request: Projects.UpdateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/automate/projects/{projectId}.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: automateProjectsJsonRequestSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type DeleteProjectRequest = {
    projectId: number;
  };

  export type GetProjectRequest = {
    projectId: number;
  };

  export type GetProjectBadgeKeyRequest = {
    projectId: number;
  };

  export type UpdateProjectRequest = {
    projectId: number;
    body: AutomateProjectsJsonRequest;
  };
}
