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
  projectTemplatesInstantiateProjectRequestSchema,
  type ProjectTemplatesInstantiateProjectRequest,
} from "../models/project-templates-instantiate-project-request.js";
import {
  projectTemplatesInstantiateProjectResponseSchema,
  type ProjectTemplatesInstantiateProjectResponse,
} from "../models/project-templates-instantiate-project-response.js";
import {
  projectTemplatesResponseSchema,
  type ProjectTemplatesResponse,
} from "../models/project-templates-response.js";
import {
  projectTemplatesResponse1Schema,
  type ProjectTemplatesResponse1,
} from "../models/project-templates-response1.js";
import {
  teamsProjectTemplatesResponseSchema,
  type TeamsProjectTemplatesResponse,
} from "../models/teams-project-templates-response.js";
import type { Servers } from "../servers.js";

/**
 * A project template is an object that allows new projects to be created with a predefined setup,
 * which may include tasks, sections, rules, etc. It simplifies the process of running a workflow
 * that involves a similar set of work every time.
 *
 * Project templates in organizations are shared with a single team. Currently, the team of a
 * project template cannot be changed via the API.
 */
export class ProjectTemplates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a project template
   *
   * @remarks
   * Returns the complete project template record for a single project template.
   *
   * @returns Successfully retrieved the requested project template.
   *
   * @throws {@link ProjectTemplates.GetProjectTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectTemplate(
    request: ProjectTemplates.GetProjectTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectTemplatesResponse, ProjectTemplates.GetProjectTemplateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project_templates/{project_template_gid}"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_template_gid", value: request.projectTemplateGid, schema: s.string() }],
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
        success: { kind: "json", schema: projectTemplatesResponseSchema },
        errorFactory: ProjectTemplates.GetProjectTemplateError,
      },
      options,
    );
  }

  /**
   * Get multiple project templates
   *
   * @remarks
   * Returns the compact project template records for all project templates in the given team or
   * workspace.
   *
   * @returns Successfully retrieved the requested team's or workspace's project templates.
   *
   * @throws {@link ProjectTemplates.GetProjectTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectTemplates(
    request: ProjectTemplates.GetProjectTemplatesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProjectTemplatesResponse1, ProjectTemplates.GetProjectTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project_templates"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
          { name: "workspace", value: request.workspace, schema: s.optional(s.string()) },
          { name: "team", value: request.team, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectTemplatesResponse1Schema },
        errorFactory: ProjectTemplates.GetProjectTemplatesError,
      },
      options,
    );
  }

  /**
   * Get a team's project templates
   *
   * @remarks
   * Returns the compact project template records for all project templates in the team.
   *
   * @returns Successfully retrieved the requested team's project templates.
   *
   * @throws {@link ProjectTemplates.GetProjectTemplatesForTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectTemplatesForTeam(
    request: ProjectTemplates.GetProjectTemplatesForTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamsProjectTemplatesResponse, ProjectTemplates.GetProjectTemplatesForTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/teams/{team_gid}/project_templates"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "team_gid", value: request.teamGid, schema: s.string() }],
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
        success: { kind: "json", schema: teamsProjectTemplatesResponseSchema },
        errorFactory: ProjectTemplates.GetProjectTemplatesForTeamError,
      },
      options,
    );
  }

  /**
   * Instantiate a project from a project template
   *
   * @remarks
   * Creates and returns a job that will asynchronously handle the project instantiation.
   *
   * To form this request, it is recommended to first make a request to get a project template.
   * Then, from the response, copy the `gid` from the object in the `requested_dates` array. This
   * `gid` should be used in `requested_dates` to instantiate a project.
   *
   * _Note: The body of this request will differ if your workspace is an organization. To determine
   * if your workspace is an organization, use the is_organization parameter._
   *
   * @returns Successfully created the job to handle project instantiation.
   *
   * @throws {@link ProjectTemplates.InstantiateProjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  instantiateProject(
    request: ProjectTemplates.InstantiateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectTemplatesInstantiateProjectResponse, ProjectTemplates.InstantiateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project_templates/{project_template_gid}/instantiateProject"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_template_gid", value: request.projectTemplateGid, schema: s.string() }],
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
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => projectTemplatesInstantiateProjectRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: projectTemplatesInstantiateProjectResponseSchema },
        errorFactory: ProjectTemplates.InstantiateProjectError,
      },
      options,
    );
  }
}

export namespace ProjectTemplates {
  export type GetProjectTemplateRequest = {
    /** Globally unique identifier for the project template. */
    projectTemplateGid: string;
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

  export class GetProjectTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectTemplateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectTemplatesRequest = {
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
    /** The workspace to filter results on. */
    workspace?: string;
    /** The team to filter projects on. */
    team?: string;
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

  export class GetProjectTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectTemplatesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectTemplatesForTeamRequest = {
    /** Globally unique identifier for the team. */
    teamGid: string;
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

  export class GetProjectTemplatesForTeamError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectTemplatesForTeamError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type InstantiateProjectRequest = {
    /** Globally unique identifier for the project template. */
    projectTemplateGid: string;
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
     * Describes the inputs used for instantiating a project, such as the resulting project's name,
     * which team it should be created in, and values for date variables.
     */
    body?: ProjectTemplatesInstantiateProjectRequest;
  };

  export class InstantiateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<InstantiateProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
