import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  projectStatusesResponseSchema,
  type ProjectStatusesResponse,
} from "../models/project-statuses-response.js";
import {
  projectStatusesResponse1Schema,
  type ProjectStatusesResponse1,
} from "../models/project-statuses-response1.js";
import {
  projectsProjectStatusesRequestSchema,
  type ProjectsProjectStatusesRequest,
} from "../models/projects-project-statuses-request.js";
import {
  projectsProjectStatusesResponseSchema,
  type ProjectsProjectStatusesResponse,
} from "../models/projects-project-statuses-response.js";
import {
  projectsProjectStatusesResponse1Schema,
  type ProjectsProjectStatusesResponse1,
} from "../models/projects-project-statuses-response1.js";
import type { Servers } from "../servers.js";

/**
 * *Deprecated: new integrations should prefer using status updates*
 *
 * A project status is an update on the progress of a particular project, and is sent out to all
 * project followers when created. These updates include both text describing the update and a color
 * code intended to represent the overall state of the project: "green" for projects that are on
 * track, "yellow" for projects at risk, "red" for projects that are behind, and "blue" for projects
 * on hold.
 *
 * Project statuses can be created and deleted, but not modified.
 */
export class ProjectStatuses {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a project status
   *
   * @remarks
   * *Deprecated: new integrations should prefer the `/status_updates` route.*
   *
   * Creates a new status update on the project.
   *
   * Returns the full record of the newly created project status update.
   *
   * @returns Successfully created a new story.
   *
   * @throws {@link ProjectStatuses.CreateProjectStatusForProjectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectStatusForProject(
    request: ProjectStatuses.CreateProjectStatusForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsProjectStatusesResponse1, ProjectStatuses.CreateProjectStatusForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/project_statuses"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_gid", value: request.projectGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectsProjectStatusesRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsProjectStatusesResponse1Schema },
        errorFactory: ProjectStatuses.CreateProjectStatusForProjectError,
      },
      options,
    );
  }

  /**
   * Delete a project status
   *
   * @remarks
   * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*
   *
   * Deletes a specific, existing project status update.
   *
   * Returns an empty data record.
   *
   * @returns Successfully deleted the specified project status.
   *
   * @throws {@link ProjectStatuses.DeleteProjectStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProjectStatus(
    request: ProjectStatuses.DeleteProjectStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectStatusesResponse1, ProjectStatuses.DeleteProjectStatusError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/project_statuses/{project_status_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_status_gid", value: request.projectStatusGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectStatusesResponse1Schema },
        errorFactory: ProjectStatuses.DeleteProjectStatusError,
      },
      options,
    );
  }

  /**
   * Get a project status
   *
   * @remarks
   * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*
   *
   * Returns the complete record for a single status update.
   *
   * @returns Successfully retrieved the specified project's status updates.
   *
   * @throws {@link ProjectStatuses.GetProjectStatusError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectStatus(
    request: ProjectStatuses.GetProjectStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectStatusesResponse, ProjectStatuses.GetProjectStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project_statuses/{project_status_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_status_gid", value: request.projectStatusGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectStatusesResponseSchema },
        errorFactory: ProjectStatuses.GetProjectStatusError,
      },
      options,
    );
  }

  /**
   * Get statuses from a project
   *
   * @remarks
   * *Deprecated: new integrations should prefer the `/status_updates` route.*
   *
   * Returns the compact project status update records for all updates on the project.
   *
   * @returns Successfully retrieved the specified project's status updates.
   *
   * @throws {@link ProjectStatuses.GetProjectStatusesForProjectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectStatusesForProject(
    request: ProjectStatuses.GetProjectStatusesForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsProjectStatusesResponse, ProjectStatuses.GetProjectStatusesForProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/projects/{project_gid}/project_statuses"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_gid", value: request.projectGid, schema: s.string() }],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsProjectStatusesResponseSchema },
        errorFactory: ProjectStatuses.GetProjectStatusesForProjectError,
      },
      options,
    );
  }
}

export namespace ProjectStatuses {
  export type CreateProjectStatusForProjectRequest = {
    /** Globally unique identifier for the project. */
    projectGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The project status to create. */
    body: ProjectsProjectStatusesRequest;
  };

  export class CreateProjectStatusForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectStatusForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteProjectStatusRequest = {
    /** The project status update to get. */
    projectStatusGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class DeleteProjectStatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectStatusError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectStatusRequest = {
    /** The project status update to get. */
    projectStatusGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
  };

  export class GetProjectStatusError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectStatusError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectStatusesForProjectRequest = {
    /** Globally unique identifier for the project. */
    projectGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /**
     * Results per page. The number of objects to return per page. The value must be between 1 and
     * 100.
     */
    limit?: number;
    /**
     * Offset token. An offset to the next page returned by the API. A pagination request will
     * return an offset token, which can be used as an input parameter to the next request. If an
     * offset is not passed in, the API will return the first page of results. 'Note: You can only
     * pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
  };

  export class GetProjectStatusesForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectStatusesForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
