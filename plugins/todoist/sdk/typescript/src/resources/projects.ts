import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { body24InternalSchema, type Body24 } from "../models/body24.js";
import { body29InternalSchema, type Body29 } from "../models/body29.js";
import { body36InternalSchema, type Body36 } from "../models/body36.js";
import { body9Schema, type Body9 } from "../models/body9.js";
import { getDataV2ResponseInternalSchema, type GetDataV2Response } from "../models/get-data-v2-response.js";
import { paginatedList1Schema, type PaginatedList1 } from "../models/paginated-list1.js";
import { paginatedList2Schema, type PaginatedList2 } from "../models/paginated-list2.js";
import {
  projectImportCreateResponseWithObjectsSchema,
  type ProjectImportCreateResponseWithObjects,
} from "../models/project-import-create-response-with-objects.js";
import {
  projectImportCreateResponseSchema,
  type ProjectImportCreateResponse,
} from "../models/project-import-create-response.js";
import {
  projectImportResponseSchema,
  type ProjectImportResponse,
} from "../models/project-import-response.js";
import {
  roleToActionMappingViewSchema,
  type RoleToActionMappingView,
} from "../models/role-to-action-mapping-view.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import { projectObjectSchema, type ProjectObject } from "../models/unions/project-object.js";
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
   * Archive Project
   *
   * @remarks
   * Marks a project as archived. For personal projects, this will archive it just for the
   * initiating user (leaving it visible to any other collaborators). For workspace projects, this
   * will archive it for all workspace users, removing it from view.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveProjectApiV1ProjectsProjectIdArchivePost(
    request: Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectObject, Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}/archive"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectObjectSchema },
        errorFactory: Projects.ArchiveProjectApiV1ProjectsProjectIdArchivePostError,
      },
      options,
    );
  }

  /**
   * Create Project
   *
   * @remarks
   * Creates a new project and returns it
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.CreateProjectApiV1ProjectsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectApiV1ProjectsPost(
    request: Projects.CreateProjectApiV1ProjectsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectObject, Projects.CreateProjectApiV1ProjectsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body9Schema },
      },
      {
        success: { kind: "json", schema: projectObjectSchema },
        errorFactory: Projects.CreateProjectApiV1ProjectsPostError,
      },
      options,
    );
  }

  /**
   * Create Project From Csv
   *
   * @remarks
   * Create a project from CSV and return its ID and imported objects.
   *
   * Send a multipart file upload or raw CSV request body. For raw CSV, pass name and optional
   * workspace_id as query parameters. Invalid UTF-8 bytes are replaced.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.CreateProjectFromCsvApiV1ProjectsImportPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectFromCsvApiV1ProjectsImportPost(
    request: Projects.CreateProjectFromCsvApiV1ProjectsImportPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ProjectImportCreateResponseWithObjects,
    Projects.CreateProjectFromCsvApiV1ProjectsImportPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects/import"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.nameQuery, schema: s.optional(s.string()) },
          { name: "workspace_id", value: request.workspaceIdQuery, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "name", value: request.name, schema: s.string() },
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "workspace_id",
              value: request.workspaceId,
              schema: s.optionalNullable(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: projectImportCreateResponseWithObjectsSchema },
        errorFactory: Projects.CreateProjectFromCsvApiV1ProjectsImportPostError,
      },
      options,
    );
  }

  /**
   * Create Project From Template
   *
   * @remarks
   * Create a project from a template, returning only its ID and success status.
   *
   * Requires `data:read_write`. Setup templates are not supported. Workspace templates can only be
   * imported into their associated workspace. Calendar defaults are applied to the project
   * according to the destination plan.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectFromTemplateApiV1ProjectsFromTemplatePost(
    request: Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ProjectImportCreateResponse,
    Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects/from_template"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body24InternalSchema },
      },
      {
        success: { kind: "json", schema: projectImportCreateResponseSchema },
        errorFactory: Projects.CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError,
      },
      options,
    );
  }

  /**
   * Delete Project
   *
   * @remarks
   * Deletes a project and all of its sections and tasks.
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteProjectApiV1ProjectsProjectIdDelete(
    request: Projects.DeleteProjectApiV1ProjectsProjectIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.DeleteProjectApiV1ProjectsProjectIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Archived
   *
   * @remarks
   * Get the user's archived projects.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.GetArchivedApiV1ProjectsArchivedGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getArchivedApiV1ProjectsArchivedGet(
    request: Projects.GetArchivedApiV1ProjectsArchivedGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList1, Projects.GetArchivedApiV1ProjectsArchivedGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/projects/archived"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList1Schema },
        errorFactory: Projects.GetArchivedApiV1ProjectsArchivedGetError,
      },
      options,
    );
  }

  /**
   * Get Project
   *
   * @remarks
   * Returns a project object related to the given ID
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.GetProjectApiV1ProjectsProjectIdGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectApiV1ProjectsProjectIdGet(
    request: Projects.GetProjectApiV1ProjectsProjectIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectObject, Projects.GetProjectApiV1ProjectsProjectIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectObjectSchema },
        errorFactory: Projects.GetProjectApiV1ProjectsProjectIdGetError,
      },
      options,
    );
  }

  /**
   * Get Project Collaborators
   *
   * @remarks
   * Get all collaborators for a given project.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGet(
    request: Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedList2, Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}/collaborators"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "public_key", value: request.publicKey, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList2Schema },
        errorFactory: Projects.GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError,
      },
      options,
    );
  }

  /**
   * Get Projects
   *
   * @remarks
   * Get all active user projects, optionally filtered by folder or workspace.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.GetProjectsApiV1ProjectsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectsApiV1ProjectsGet(
    request: Projects.GetProjectsApiV1ProjectsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList1, Projects.GetProjectsApiV1ProjectsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/projects"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "folder_id", value: request.folderId, schema: s.optionalNullable(s.int()) },
          { name: "workspace_id", value: request.workspaceId, schema: s.optionalNullable(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList1Schema },
        errorFactory: Projects.GetProjectsApiV1ProjectsGetError,
      },
      options,
    );
  }

  /**
   * Import Project Csv
   *
   * @remarks
   * Import CSV into an existing project and return the imported objects.
   *
   * Send a multipart file upload or raw CSV request body. CSV is decoded as UTF-8, replacing
   * invalid bytes, and must include TYPE and CONTENT header columns.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importProjectCsvApiV1ProjectsProjectIdImportPost(
    request: Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectImportResponse, Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}/import"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: projectImportResponseSchema },
        errorFactory: Projects.ImportProjectCsvApiV1ProjectsProjectIdImportPostError,
      },
      options,
    );
  }

  /**
   * Import Project Template
   *
   * @remarks
   * Import a project template, returning tasks, comments, reminders and applied defaults.
   *
   * Requires `data:read_write` and permission to apply templates to the project. The project must
   * be active and unfrozen. Workspace templates can only be imported into their associated
   * workspace. Setup templates are rejected; use `/templates/{template_id}/use`. The `projects`
   * array is empty.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importProjectTemplateApiV1ProjectsProjectIdImportTemplatePost(
    request: Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ProjectImportResponse,
    Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}/import_template"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body29InternalSchema },
      },
      {
        success: { kind: "json", schema: projectImportResponseSchema },
        errorFactory: Projects.ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError,
      },
      options,
    );
  }

  /**
   * Join
   *
   * @remarks
   * _Only used for workspaces_
   *
   * This endpoint is used to join a workspace project by a workspace_user and is only usable by the
   * workspace user.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.JoinApiV1ProjectsProjectIdJoinPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  joinApiV1ProjectsProjectIdJoinPost(
    request: Projects.JoinApiV1ProjectsProjectIdJoinPostRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDataV2Response, Projects.JoinApiV1ProjectsProjectIdJoinPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}/join"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getDataV2ResponseInternalSchema },
        errorFactory: Projects.JoinApiV1ProjectsProjectIdJoinPostError,
      },
      options,
    );
  }

  /**
   * Permissions
   *
   * @remarks
   * Returns a list of all the available roles and the associated actions they can perform in a
   * project.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.PermissionsApiV1ProjectsPermissionsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  permissionsApiV1ProjectsPermissionsGet(
    options?: RequestOptions,
  ): ApiPromise<RoleToActionMappingView, Projects.PermissionsApiV1ProjectsPermissionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/projects/permissions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: roleToActionMappingViewSchema },
        errorFactory: Projects.PermissionsApiV1ProjectsPermissionsGetError,
      },
      options,
    );
  }

  /**
   * Search Projects
   *
   * @remarks
   * Search active user projects by name.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.SearchProjectsApiV1ProjectsSearchGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchProjectsApiV1ProjectsSearchGet(
    request: Projects.SearchProjectsApiV1ProjectsSearchGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedList1, Projects.SearchProjectsApiV1ProjectsSearchGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/projects/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList1Schema },
        errorFactory: Projects.SearchProjectsApiV1ProjectsSearchGetError,
      },
      options,
    );
  }

  /**
   * Unarchive Project
   *
   * @remarks
   * Marks a previously archived project as active again. For personal projects, this will make the
   * project visible again for the initiating user. For workspace projects, this will make the
   * project visible again for all applicable workspace users.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unarchiveProjectApiV1ProjectsProjectIdUnarchivePost(
    request: Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectObject, Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}/unarchive"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectObjectSchema },
        errorFactory: Projects.UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError,
      },
      options,
    );
  }

  /**
   * Update Project
   *
   * @remarks
   * Updates a project and returns it.
   *
   * @returns Successful Response
   *
   * @throws {@link Projects.UpdateProjectApiV1ProjectsProjectIdPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProjectApiV1ProjectsProjectIdPost(
    request: Projects.UpdateProjectApiV1ProjectsProjectIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectObject, Projects.UpdateProjectApiV1ProjectsProjectIdPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/projects/{project_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "project_id", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body36InternalSchema },
      },
      {
        success: { kind: "json", schema: projectObjectSchema },
        errorFactory: Projects.UpdateProjectApiV1ProjectsProjectIdPostError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type ArchiveProjectApiV1ProjectsProjectIdArchivePostRequest = {
    projectId: string;
  };

  export class ArchiveProjectApiV1ProjectsProjectIdArchivePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveProjectApiV1ProjectsProjectIdArchivePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type CreateProjectApiV1ProjectsPostRequest = {
    body: Body9;
  };

  export class CreateProjectApiV1ProjectsPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectApiV1ProjectsPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type CreateProjectFromCsvApiV1ProjectsImportPostRequest = {
    /**
     * Send in the query string for raw uploads, or the form for multipart uploads. Required for raw
     * uploads.
     */
    nameQuery?: string;
    /** Send in the query string for raw uploads, or the form for multipart uploads. */
    workspaceIdQuery?: string | null;
    /** Name of the new project. */
    name: string;
    file: FileInput;
    /** Workspace ID for the new project. Omit to create a personal project. */
    workspaceId?: string | null;
  };

  export class CreateProjectFromCsvApiV1ProjectsImportPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectFromCsvApiV1ProjectsImportPostError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type CreateProjectFromTemplateApiV1ProjectsFromTemplatePostRequest = {
    body: Body24;
  };

  export class CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectFromTemplateApiV1ProjectsFromTemplatePostError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteProjectApiV1ProjectsProjectIdDeleteRequest = {
    projectId: string;
  };

  export class DeleteProjectApiV1ProjectsProjectIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProjectApiV1ProjectsProjectIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetArchivedApiV1ProjectsArchivedGetRequest = {
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const getArchivedApiV1ProjectsArchivedGetRequestSchema: Schema<GetArchivedApiV1ProjectsArchivedGetRequest> =
    s.lazySchema(() =>
      s.object<GetArchivedApiV1ProjectsArchivedGetRequest>({
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class GetArchivedApiV1ProjectsArchivedGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetArchivedApiV1ProjectsArchivedGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetProjectApiV1ProjectsProjectIdGetRequest = {
    projectId: string;
  };

  export class GetProjectApiV1ProjectsProjectIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectApiV1ProjectsProjectIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetRequest = {
    projectId: string;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
    publicKey?: string | null;
  };

  export const getProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetRequestSchema: Schema<GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetRequest> =
    s.lazySchema(() =>
      s.object<GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetRequest>({
        projectId: s.string(),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
        publicKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectCollaboratorsApiV1ProjectsProjectIdCollaboratorsGetError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type GetProjectsApiV1ProjectsGetRequest = {
    folderId?: number | null;
    workspaceId?: number | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const getProjectsApiV1ProjectsGetRequestSchema: Schema<GetProjectsApiV1ProjectsGetRequest> =
    s.lazySchema(() =>
      s.object<GetProjectsApiV1ProjectsGetRequest>({
        folderId: s.optionalNullable(s.int().check(s.gt(0))),
        workspaceId: s.optionalNullable(s.int().check(s.gt(0))),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class GetProjectsApiV1ProjectsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsApiV1ProjectsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type ImportProjectCsvApiV1ProjectsProjectIdImportPostRequest = {
    projectId: string;
    file: FileInput;
  };

  export class ImportProjectCsvApiV1ProjectsProjectIdImportPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImportProjectCsvApiV1ProjectsProjectIdImportPostError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostRequest = {
    projectId: string;
    body: Body29;
  };

  export class ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImportProjectTemplateApiV1ProjectsProjectIdImportTemplatePostError> =
      [
        { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 503, kind: "error503", decode: { kind: "empty" } },
        { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type JoinApiV1ProjectsProjectIdJoinPostRequest = {
    projectId: string;
  };

  export class JoinApiV1ProjectsProjectIdJoinPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<JoinApiV1ProjectsProjectIdJoinPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export class PermissionsApiV1ProjectsPermissionsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<PermissionsApiV1ProjectsPermissionsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type SearchProjectsApiV1ProjectsSearchGetRequest = {
    query: string;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const searchProjectsApiV1ProjectsSearchGetRequestSchema: Schema<SearchProjectsApiV1ProjectsSearchGetRequest> =
    s.lazySchema(() =>
      s.object<SearchProjectsApiV1ProjectsSearchGetRequest>({
        query: s.string().check(s.minLength(1), s.maxLength(1024)),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class SearchProjectsApiV1ProjectsSearchGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchProjectsApiV1ProjectsSearchGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostRequest = {
    projectId: string;
  };

  export class UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnarchiveProjectApiV1ProjectsProjectIdUnarchivePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateProjectApiV1ProjectsProjectIdPostRequest = {
    projectId: string;
    body: Body36;
  };

  export class UpdateProjectApiV1ProjectsProjectIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProjectApiV1ProjectsProjectIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
