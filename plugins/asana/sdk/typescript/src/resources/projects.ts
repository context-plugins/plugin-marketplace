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
  projectsAddCustomFieldSettingRequestSchema,
  type ProjectsAddCustomFieldSettingRequest,
} from "../models/projects-add-custom-field-setting-request.js";
import {
  projectsAddCustomFieldSettingResponseSchema,
  type ProjectsAddCustomFieldSettingResponse,
} from "../models/projects-add-custom-field-setting-response.js";
import {
  projectsAddFollowersRequestSchema,
  type ProjectsAddFollowersRequest,
} from "../models/projects-add-followers-request.js";
import {
  projectsAddFollowersResponseSchema,
  type ProjectsAddFollowersResponse,
} from "../models/projects-add-followers-response.js";
import {
  projectsAddMembersRequestSchema,
  type ProjectsAddMembersRequest,
} from "../models/projects-add-members-request.js";
import {
  projectsAddMembersResponseSchema,
  type ProjectsAddMembersResponse,
} from "../models/projects-add-members-response.js";
import {
  projectsDuplicateRequestSchema,
  type ProjectsDuplicateRequest,
} from "../models/projects-duplicate-request.js";
import {
  projectsDuplicateResponseSchema,
  type ProjectsDuplicateResponse,
} from "../models/projects-duplicate-response.js";
import {
  projectsRemoveCustomFieldSettingRequestSchema,
  type ProjectsRemoveCustomFieldSettingRequest,
} from "../models/projects-remove-custom-field-setting-request.js";
import {
  projectsRemoveCustomFieldSettingResponseSchema,
  type ProjectsRemoveCustomFieldSettingResponse,
} from "../models/projects-remove-custom-field-setting-response.js";
import {
  projectsRemoveFollowersRequestSchema,
  type ProjectsRemoveFollowersRequest,
} from "../models/projects-remove-followers-request.js";
import {
  projectsRemoveFollowersResponseSchema,
  type ProjectsRemoveFollowersResponse,
} from "../models/projects-remove-followers-response.js";
import {
  projectsRemoveMembersRequestSchema,
  type ProjectsRemoveMembersRequest,
} from "../models/projects-remove-members-request.js";
import {
  projectsRemoveMembersResponseSchema,
  type ProjectsRemoveMembersResponse,
} from "../models/projects-remove-members-response.js";
import { projectsRequestSchema, type ProjectsRequest } from "../models/projects-request.js";
import { projectsResponseSchema, type ProjectsResponse } from "../models/projects-response.js";
import { projectsResponse1Schema, type ProjectsResponse1 } from "../models/projects-response1.js";
import { projectsResponse4Schema, type ProjectsResponse4 } from "../models/projects-response4.js";
import {
  projectsSaveAsTemplateRequestSchema,
  type ProjectsSaveAsTemplateRequest,
} from "../models/projects-save-as-template-request.js";
import {
  projectsSaveAsTemplateResponseSchema,
  type ProjectsSaveAsTemplateResponse,
} from "../models/projects-save-as-template-response.js";
import {
  projectsTaskCountsResponseSchema,
  type ProjectsTaskCountsResponse,
} from "../models/projects-task-counts-response.js";
import {
  tasksProjectsResponseSchema,
  type TasksProjectsResponse,
} from "../models/tasks-projects-response.js";
import { teamsProjectsRequestSchema, type TeamsProjectsRequest } from "../models/teams-projects-request.js";
import {
  teamsProjectsResponseSchema,
  type TeamsProjectsResponse,
} from "../models/teams-projects-response.js";
import {
  teamsProjectsResponse1Schema,
  type TeamsProjectsResponse1,
} from "../models/teams-projects-response1.js";
import {
  workspacesProjectsRequestSchema,
  type WorkspacesProjectsRequest,
} from "../models/workspaces-projects-request.js";
import {
  workspacesProjectsResponseSchema,
  type WorkspacesProjectsResponse,
} from "../models/workspaces-projects-response.js";
import {
  workspacesProjectsResponse1Schema,
  type WorkspacesProjectsResponse1,
} from "../models/workspaces-projects-response1.js";
import type { Servers } from "../servers.js";

/**
 * A project represents a prioritized list of tasks in Asana or a board with columns of tasks
 * represented as cards. A project exists in a single workspace or organization and is accessible to
 * a subset of users in that workspace or organization, depending on its permissions.
 *
 * Projects in organizations are shared with a single team. Currently, the team of a project cannot
 * be changed via the API. Non-organization workspaces do not have teams and so you should not
 * specify the team of project in a regular workspace.
 *
 * Followers of a project are a subset of the members of that project. Followers of a project will
 * receive all updates including tasks created, added and removed from that project. Members of the
 * project have access to and will receive status updates of the project. Adding followers to a
 * project will add them as members if they are not already, removing followers from a project will
 * not affect membership.
 *
 * **Note:** You can use certain project endpoints to operate on user task lists (My Tasks) by
 * substituting the `{project_gid}` with the `{user_task_list_gid}`. For example, you can perform
 * operations on the custom fields of a user task list by using the following projects endpoints:
 * Add a custom field to a project, Remove a custom field from a project and Get a project's custom
 * fields
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
   * Add a custom field to a project
   *
   * @remarks
   * Custom fields are associated with projects by way of custom field settings. This method creates
   * a setting for the project.
   *
   * @returns Successfully added the custom field to the project.
   *
   * @throws {@link Projects.AddCustomFieldSettingForProjectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addCustomFieldSettingForProject(
    request: Projects.AddCustomFieldSettingForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsAddCustomFieldSettingResponse, Projects.AddCustomFieldSettingForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/addCustomFieldSetting"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_gid", value: request.projectGid, schema: s.string() }],
        query: [{ name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectsAddCustomFieldSettingRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsAddCustomFieldSettingResponseSchema },
        errorFactory: Projects.AddCustomFieldSettingForProjectError,
      },
      options,
    );
  }

  /**
   * Add followers to a project
   *
   * @remarks
   * Adds the specified list of users as followers to the project. Followers are a subset of members
   * who have opted in to receive "tasks added" notifications for a project. Therefore, if the users
   * are not already members of the project, they will also become members as a result of this
   * operation. Returns the updated project record.
   *
   * @returns Successfully added followers to the project.
   *
   * @throws {@link Projects.AddFollowersForProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addFollowersForProject(
    request: Projects.AddFollowersForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsAddFollowersResponse, Projects.AddFollowersForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/addFollowers"),
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
        body: { kind: "json", value: request.body, schema: projectsAddFollowersRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsAddFollowersResponseSchema },
        errorFactory: Projects.AddFollowersForProjectError,
      },
      options,
    );
  }

  /**
   * Add users to a project
   *
   * @remarks
   * Adds the specified list of users as members of the project. Note that a user being added as a
   * member may also be added as a *follower* as a result of this operation. This is because the
   * user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings")
   * will override this endpoint's default behavior of setting "Tasks added" notifications to
   * `false`. Returns the updated project record.
   *
   * @returns Successfully added members to the project.
   *
   * @throws {@link Projects.AddMembersForProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addMembersForProject(
    request: Projects.AddMembersForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsAddMembersResponse, Projects.AddMembersForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/addMembers"),
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
        body: { kind: "json", value: request.body, schema: projectsAddMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsAddMembersResponseSchema },
        errorFactory: Projects.AddMembersForProjectError,
      },
      options,
    );
  }

  /**
   * Create a project
   *
   * @remarks
   * Create a new project in a workspace or team.
   *
   * Every project is required to be created in a specific workspace or organization, and this
   * cannot be changed once set. Note that you can use the `workspace` parameter regardless of
   * whether or not it is an organization.
   *
   * If the workspace for your project is an organization, you must also supply a `team` to share
   * the project with.
   *
   * Returns the full record of the newly created project.
   *
   * @returns Successfully retrieved projects.
   *
   * @throws {@link Projects.CreateProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProject(
    request: Projects.CreateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsResponse1, Projects.CreateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects"),
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
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectsRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsResponse1Schema },
        errorFactory: Projects.CreateProjectError,
      },
      options,
    );
  }

  /**
   * Create a project in a team
   *
   * @remarks
   * Creates a project shared with the given team.
   *
   * Returns the full record of the newly created project.
   *
   * @returns Successfully created the specified project.
   *
   * @throws {@link Projects.CreateProjectForTeamError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectForTeam(
    request: Projects.CreateProjectForTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamsProjectsResponse1, Projects.CreateProjectForTeamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/teams/{team_gid}/projects"),
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
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: teamsProjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: teamsProjectsResponse1Schema },
        errorFactory: Projects.CreateProjectForTeamError,
      },
      options,
    );
  }

  /**
   * Create a project in a workspace
   *
   * @remarks
   * Returns the compact project records for all projects in the workspace.
   *
   * If the workspace for your project is an organization, you must also supply a team to share the
   * project with.
   *
   * Returns the full record of the newly created project.
   *
   * @returns Successfully created a new project in the specified workspace.
   *
   * @throws {@link Projects.CreateProjectForWorkspaceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectForWorkspace(
    request: Projects.CreateProjectForWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesProjectsResponse1, Projects.CreateProjectForWorkspaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/workspaces/{workspace_gid}/projects"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "workspace_gid", value: request.workspaceGid, schema: s.string() }],
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
        body: { kind: "json", value: request.body, schema: workspacesProjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: workspacesProjectsResponse1Schema },
        errorFactory: Projects.CreateProjectForWorkspaceError,
      },
      options,
    );
  }

  /**
   * Delete a project
   *
   * @remarks
   * A specific, existing project can be deleted by making a DELETE request on the URL for that
   * project.
   *
   * Returns an empty data record.
   *
   * @returns Successfully deleted the specified project.
   *
   * @throws {@link Projects.DeleteProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProject(
    request: Projects.DeleteProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsResponse4, Projects.DeleteProjectError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/projects/{project_gid}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsResponse4Schema },
        errorFactory: Projects.DeleteProjectError,
      },
      options,
    );
  }

  /**
   * Duplicate a project
   *
   * @remarks
   * Creates and returns a job that will asynchronously handle the duplication.
   *
   * @returns Successfully created the job to handle duplication.
   *
   * @throws {@link Projects.DuplicateProjectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  duplicateProject(
    request: Projects.DuplicateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsDuplicateResponse, Projects.DuplicateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/duplicate"),
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
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => projectsDuplicateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: projectsDuplicateResponseSchema },
        errorFactory: Projects.DuplicateProjectError,
      },
      options,
    );
  }

  /**
   * Get a project
   *
   * @remarks
   * Returns the complete project record for a single project.
   *
   * @returns Successfully retrieved the requested project.
   *
   * @throws {@link Projects.GetProjectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProject(
    request: Projects.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsResponse1, Projects.GetProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/projects/{project_gid}"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsResponse1Schema },
        errorFactory: Projects.GetProjectError,
      },
      options,
    );
  }

  /**
   * Get multiple projects
   *
   * @remarks
   * Returns the compact project records for some filtered set of projects. Use one or more of the
   * parameters provided to filter the projects returned. *Note: This endpoint may timeout for large
   * domains. Try filtering by team!*
   *
   * @returns Successfully retrieved projects.
   *
   * @throws {@link Projects.GetProjectsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjects(
    request: Projects.GetProjectsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProjectsResponse, Projects.GetProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/projects"),
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
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
          { name: "workspace", value: request.workspace, schema: s.optional(s.string()) },
          { name: "team", value: request.team, schema: s.optional(s.string()) },
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsResponseSchema },
        errorFactory: Projects.GetProjectsError,
      },
      options,
    );
  }

  /**
   * Get projects a task is in
   *
   * @remarks
   * Returns a compact representation of all of the projects the task is in.
   *
   * @returns Successfully retrieved the projects for the given task.
   *
   * @throws {@link Projects.GetProjectsForTaskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectsForTask(
    request: Projects.GetProjectsForTaskRequest,
    options?: RequestOptions,
  ): ApiPromise<TasksProjectsResponse, Projects.GetProjectsForTaskError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tasks/{task_gid}/projects"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "task_gid", value: request.taskGid, schema: s.string() }],
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
        success: { kind: "json", schema: tasksProjectsResponseSchema },
        errorFactory: Projects.GetProjectsForTaskError,
      },
      options,
    );
  }

  /**
   * Get a team's projects
   *
   * @remarks
   * Returns the compact project records for all projects in the team.
   *
   * @returns Successfully retrieved the requested team's projects.
   *
   * @throws {@link Projects.GetProjectsForTeamError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectsForTeam(
    request: Projects.GetProjectsForTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamsProjectsResponse, Projects.GetProjectsForTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/teams/{team_gid}/projects"),
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
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamsProjectsResponseSchema },
        errorFactory: Projects.GetProjectsForTeamError,
      },
      options,
    );
  }

  /**
   * Get all projects in a workspace
   *
   * @remarks
   * Returns the compact project records for all projects in the workspace. *Note: This endpoint may
   * timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*
   *
   * @returns Successfully retrieved the requested workspace's projects.
   *
   * @throws {@link Projects.GetProjectsForWorkspaceError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectsForWorkspace(
    request: Projects.GetProjectsForWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesProjectsResponse, Projects.GetProjectsForWorkspaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspace_gid}/projects"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "workspace_gid", value: request.workspaceGid, schema: s.string() }],
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
          { name: "archived", value: request.archived, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesProjectsResponseSchema },
        errorFactory: Projects.GetProjectsForWorkspaceError,
      },
      options,
    );
  }

  /**
   * Get task count of a project
   *
   * @remarks
   * Get an object that holds task count fields. **All fields are excluded by default**. You must
   * opt in using `opt_fields` to get any information from this endpoint.
   *
   * This endpoint has an additional rate limit and each field counts especially high against our
   * cost limits.
   *
   * Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and
   * `num_completed_tasks` counts.
   *
   * @returns Successfully retrieved the requested project's task counts.
   *
   * @throws {@link Projects.GetTaskCountsForProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTaskCountsForProject(
    request: Projects.GetTaskCountsForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsTaskCountsResponse, Projects.GetTaskCountsForProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/projects/{project_gid}/task_counts"),
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
        success: { kind: "json", schema: projectsTaskCountsResponseSchema },
        errorFactory: Projects.GetTaskCountsForProjectError,
      },
      options,
    );
  }

  /**
   * Create a project template from a project
   *
   * @remarks
   * Creates and returns a job that will asynchronously handle the project template creation. Note
   * that while the resulting project template can be accessed with the API, it won't be visible in
   * the Asana UI until Project Templates 2.0 is launched in the app. See more in this forum post.
   *
   * @returns Successfully created the job to handle project template creation.
   *
   * @throws {@link Projects.ProjectSaveAsTemplateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectSaveAsTemplate(
    request: Projects.ProjectSaveAsTemplateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProjectsSaveAsTemplateResponse, Projects.ProjectSaveAsTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/saveAsTemplate"),
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
        body: { kind: "json", value: request.body, schema: projectsSaveAsTemplateRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsSaveAsTemplateResponseSchema },
        errorFactory: Projects.ProjectSaveAsTemplateError,
      },
      options,
    );
  }

  /**
   * Remove a custom field from a project
   *
   * @remarks
   * Removes a custom field setting from a project.
   *
   * @returns Successfully removed the custom field from the project.
   *
   * @throws {@link Projects.RemoveCustomFieldSettingForProjectError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeCustomFieldSettingForProject(
    request: Projects.RemoveCustomFieldSettingForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsRemoveCustomFieldSettingResponse, Projects.RemoveCustomFieldSettingForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/removeCustomFieldSetting"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "project_gid", value: request.projectGid, schema: s.string() }],
        query: [{ name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectsRemoveCustomFieldSettingRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsRemoveCustomFieldSettingResponseSchema },
        errorFactory: Projects.RemoveCustomFieldSettingForProjectError,
      },
      options,
    );
  }

  /**
   * Remove followers from a project
   *
   * @remarks
   * Removes the specified list of users from following the project, this will not affect project
   * membership status. Returns the updated project record.
   *
   * @returns Successfully removed followers from the project.
   *
   * @throws {@link Projects.RemoveFollowersForProjectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeFollowersForProject(
    request: Projects.RemoveFollowersForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsRemoveFollowersResponse, Projects.RemoveFollowersForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/removeFollowers"),
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
        body: { kind: "json", value: request.body, schema: projectsRemoveFollowersRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsRemoveFollowersResponseSchema },
        errorFactory: Projects.RemoveFollowersForProjectError,
      },
      options,
    );
  }

  /**
   * Remove users from a project
   *
   * @remarks
   * Removes the specified list of users from members of the project. Returns the updated project
   * record.
   *
   * @returns Successfully removed the members from the project.
   *
   * @throws {@link Projects.RemoveMembersForProjectError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeMembersForProject(
    request: Projects.RemoveMembersForProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsRemoveMembersResponse, Projects.RemoveMembersForProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_gid}/removeMembers"),
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
        body: { kind: "json", value: request.body, schema: projectsRemoveMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsRemoveMembersResponseSchema },
        errorFactory: Projects.RemoveMembersForProjectError,
      },
      options,
    );
  }

  /**
   * Update a project
   *
   * @remarks
   * A specific, existing project can be updated by making a PUT request on the URL for that
   * project. Only the fields provided in the `data` block will be updated; any unspecified fields
   * will remain unchanged.
   *
   * When using this method, it is best to specify only those fields you wish to change, or else you
   * may overwrite changes made by another user since you last retrieved the task.
   *
   * Returns the complete updated project record.
   *
   * @returns Successfully updated the project.
   *
   * @throws {@link Projects.UpdateProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProject(
    request: Projects.UpdateProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsResponse1, Projects.UpdateProjectError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/projects/{project_gid}"),
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
        body: { kind: "json", value: request.body, schema: projectsRequestSchema },
      },
      {
        success: { kind: "json", schema: projectsResponse1Schema },
        errorFactory: Projects.UpdateProjectError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type AddCustomFieldSettingForProjectRequest = {
    /** Globally unique identifier for the project. */
    projectGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /** Information about the custom field setting. */
    body: ProjectsAddCustomFieldSettingRequest;
  };

  export class AddCustomFieldSettingForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddCustomFieldSettingForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddFollowersForProjectRequest = {
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
    /** Information about the followers being added. */
    body: ProjectsAddFollowersRequest;
  };

  export class AddFollowersForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddFollowersForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddMembersForProjectRequest = {
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
    /** Information about the members being added. */
    body: ProjectsAddMembersRequest;
  };

  export class AddMembersForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddMembersForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateProjectRequest = {
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
    /** The project to create. */
    body: ProjectsRequest;
  };

  export class CreateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateProjectForTeamRequest = {
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
    /** The new project to create. */
    body: TeamsProjectsRequest;
  };

  export class CreateProjectForTeamError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectForTeamError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateProjectForWorkspaceRequest = {
    /** Globally unique identifier for the workspace or organization. */
    workspaceGid: string;
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
    /** The new project to create. */
    body: WorkspacesProjectsRequest;
  };

  export class CreateProjectForWorkspaceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectForWorkspaceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteProjectRequest = {
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
  };

  export class DeleteProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DuplicateProjectRequest = {
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
    /** Describes the duplicate's name and the elements that will be duplicated. */
    body?: ProjectsDuplicateRequest;
  };

  export class DuplicateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DuplicateProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectRequest = {
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
  };

  export class GetProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectsRequest = {
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
    /** The workspace or organization to filter projects on. */
    workspace?: string;
    /** The team to filter projects on. */
    team?: string;
    /** Only return projects whose `archived` field takes on the value of this parameter. */
    archived?: boolean;
  };

  export class GetProjectsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectsForTaskRequest = {
    /** The task to operate on. */
    taskGid: string;
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

  export class GetProjectsForTaskError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsForTaskError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectsForTeamRequest = {
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
    /** Only return projects whose `archived` field takes on the value of this parameter. */
    archived?: boolean;
  };

  export class GetProjectsForTeamError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsForTeamError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetProjectsForWorkspaceRequest = {
    /** Globally unique identifier for the workspace or organization. */
    workspaceGid: string;
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
    /** Only return projects whose `archived` field takes on the value of this parameter. */
    archived?: boolean;
  };

  export class GetProjectsForWorkspaceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsForWorkspaceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetTaskCountsForProjectRequest = {
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

  export class GetTaskCountsForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaskCountsForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ProjectSaveAsTemplateRequestParams = {
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
     * Describes the inputs used for creating a project template, such as the resulting project
     * template's name, which team it should be created in.
     */
    body: ProjectsSaveAsTemplateRequest;
  };

  export class ProjectSaveAsTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectSaveAsTemplateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveCustomFieldSettingForProjectRequest = {
    /** Globally unique identifier for the project. */
    projectGid: string;
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /** Information about the custom field setting being removed. */
    body: ProjectsRemoveCustomFieldSettingRequest;
  };

  export class RemoveCustomFieldSettingForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveCustomFieldSettingForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveFollowersForProjectRequest = {
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
    /** Information about the followers being removed. */
    body: ProjectsRemoveFollowersRequest;
  };

  export class RemoveFollowersForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveFollowersForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveMembersForProjectRequest = {
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
    /** Information about the members being removed. */
    body: ProjectsRemoveMembersRequest;
  };

  export class RemoveMembersForProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveMembersForProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateProjectRequest = {
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
    /** The updated fields for the project. */
    body: ProjectsRequest;
  };

  export class UpdateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProjectError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
