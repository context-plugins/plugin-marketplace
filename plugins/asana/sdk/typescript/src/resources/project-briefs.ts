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
import { projectBriefsRequestSchema, type ProjectBriefsRequest } from "../models/project-briefs-request.js";
import {
  projectBriefsResponseSchema,
  type ProjectBriefsResponse,
} from "../models/project-briefs-response.js";
import {
  projectBriefsResponse2Schema,
  type ProjectBriefsResponse2,
} from "../models/project-briefs-response2.js";
import {
  projectsProjectBriefsRequestSchema,
  type ProjectsProjectBriefsRequest,
} from "../models/projects-project-briefs-request.js";
import {
  projectsProjectBriefsResponseSchema,
  type ProjectsProjectBriefsResponse,
} from "../models/projects-project-briefs-response.js";
import type { Servers } from "../servers.js";

/**
 * A project brief object represents a rich text document that describes a project.
 *
 * Please note that this API is in *preview*, and is expected to change. This API is to be used for
 * development and testing only as an advance view into the upcoming rich text format experience in
 * the task description. For more information, see this post in the developer forum.
 */
export class ProjectBriefs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a project brief
   *
   * @remarks
   * Creates a new project brief.
   *
   * Returns the full record of the newly created project brief.
   *
   * @returns Successfully created a new project brief.
   *
   * @throws {@link ProjectBriefs.CreateProjectBriefError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectBrief(
    request: ProjectBriefs.CreateProjectBriefRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsProjectBriefsResponse, ProjectBriefs.CreateProjectBriefError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/project_briefs"),
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
        body: { kind: "json", value: request.body, schema: projectsProjectBriefsRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsProjectBriefsResponseSchema },
        errorFactory: ProjectBriefs.CreateProjectBriefError,
      },
      options,
    );
  }

  /**
   * Delete a project brief
   *
   * @remarks
   * Deletes a specific, existing project brief.
   *
   * Returns an empty data record.
   *
   * @returns Successfully deleted the specified project brief.
   *
   * @throws {@link ProjectBriefs.DeleteProjectBriefError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProjectBrief(
    request: ProjectBriefs.DeleteProjectBriefRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectBriefsResponse2, ProjectBriefs.DeleteProjectBriefError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/project_briefs/{project_brief_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_brief_gid", value: request.projectBriefGid, schema: s.string() }],
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
        success: { kind: "json", schema: projectBriefsResponse2Schema },
        errorFactory: ProjectBriefs.DeleteProjectBriefError,
      },
      options,
    );
  }

  /**
   * Get a project brief
   *
   * @remarks
   * Get the full record for a project brief.
   *
   * @returns Successfully retrieved the record for a project brief.
   *
   * @throws {@link ProjectBriefs.GetProjectBriefError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectBrief(
    request: ProjectBriefs.GetProjectBriefRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectBriefsResponse, ProjectBriefs.GetProjectBriefError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project_briefs/{project_brief_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_brief_gid", value: request.projectBriefGid, schema: s.string() }],
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
        success: { kind: "json", schema: projectBriefsResponseSchema },
        errorFactory: ProjectBriefs.GetProjectBriefError,
      },
      options,
    );
  }

  /**
   * Update a project brief
   *
   * @remarks
   * An existing project brief can be updated by making a PUT request on the URL for that project
   * brief. Only the fields provided in the `data` block will be updated; any unspecified fields
   * will remain unchanged.
   *
   * Returns the complete updated project brief record.
   *
   * @returns Successfully updated the project brief.
   *
   * @throws {@link ProjectBriefs.UpdateProjectBriefError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProjectBrief(
    request: ProjectBriefs.UpdateProjectBriefRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectBriefsResponse, ProjectBriefs.UpdateProjectBriefError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/project_briefs/{project_brief_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_brief_gid", value: request.projectBriefGid, schema: s.string() }],
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
        body: { kind: "json", value: request.body, schema: projectBriefsRequestSchema },
      },
      {
        success: { kind: "json", schema: projectBriefsResponseSchema },
        errorFactory: ProjectBriefs.UpdateProjectBriefError,
      },
      options,
    );
  }
}

export namespace ProjectBriefs {
  export type CreateProjectBriefRequest = {
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
    /** The project brief to create. */
    body: ProjectsProjectBriefsRequest;
  };

  export class CreateProjectBriefError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectBriefError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteProjectBriefRequest = {
    /** Globally unique identifier for the project brief. */
    projectBriefGid: string;
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

  export class DeleteProjectBriefError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectBriefError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectBriefRequest = {
    /** Globally unique identifier for the project brief. */
    projectBriefGid: string;
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

  export class GetProjectBriefError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Declared<"errorResponse8", ErrorResponse>
      | Declared<"errorResponse9", ErrorResponse>
      | Declared<"errorResponse10", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectBriefError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 424, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 501, kind: "errorResponse8", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse9", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 504, kind: "errorResponse10", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateProjectBriefRequest = {
    /** Globally unique identifier for the project brief. */
    projectBriefGid: string;
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
    /** The updated fields for the project brief. */
    body: ProjectBriefsRequest;
  };

  export class UpdateProjectBriefError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProjectBriefError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
