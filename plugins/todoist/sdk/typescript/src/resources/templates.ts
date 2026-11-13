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
import { body12InternalSchema, type Body12 } from "../models/body12.js";
import { body26Schema, type Body26 } from "../models/body26.js";
import { body27InternalSchema, type Body27 } from "../models/body27.js";
import { body37InternalSchema, type Body37 } from "../models/body37.js";
import { body6Schema, type Body6 } from "../models/body6.js";
import { categoriesResponseSchema, type CategoriesResponse } from "../models/categories-response.js";
import {
  createFromTemplateIdResponseInternalSchema,
  type CreateFromTemplateIdResponse,
} from "../models/create-from-template-id-response.js";
import {
  createUserTemplateResponseSchema,
  type CreateUserTemplateResponse,
} from "../models/create-user-template-response.js";
import { fileUrlResponseInternalSchema, type FileUrlResponse } from "../models/file-url-response.js";
import {
  generateDescriptionResponseSchema,
  type GenerateDescriptionResponse,
} from "../models/generate-description-response.js";
import { paginatedList9Schema, type PaginatedList9 } from "../models/paginated-list9.js";
import {
  previewFromFileResponseSchema,
  type PreviewFromFileResponse,
} from "../models/preview-from-file-response.js";
import {
  projectImportCreateResponseWithObjectsSchema,
  type ProjectImportCreateResponseWithObjects,
} from "../models/project-import-create-response-with-objects.js";
import {
  projectImportResponseSchema,
  type ProjectImportResponse,
} from "../models/project-import-response.js";
import {
  projectTemplatePreviewResponseSchema,
  type ProjectTemplatePreviewResponse,
} from "../models/project-template-preview-response.js";
import { publicTemplateSchema, type PublicTemplate } from "../models/public-template.js";
import { TemplateSource3, templateSource3Schema } from "../models/template-source3.js";
import { TemplateType10, templateType10Schema } from "../models/template-type10.js";
import { templateType7Schema, type TemplateType7 } from "../models/template-type7.js";
import { TemplateType9, templateType9Schema } from "../models/template-type9.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import { apiColorId2Schema, type ApiColorId2 } from "../models/unions/api-color-id2.js";
import {
  templatePreviewResponseInternalSchema,
  type TemplatePreviewResponse,
} from "../models/unions/template-preview-response.js";
import {
  updateUserTemplateResponseSchema,
  type UpdateUserTemplateResponse,
} from "../models/update-user-template-response.js";
import type { Servers } from "../servers.js";

/**
 * Templates allow exporting of a project's tasks to a file or URL, and then importing of the task
 * list to a new or existing project.
 *
 * Availability of project templates functionality is dependent on the current user plan. This
 * values is indicated by the `templates` property of the [user plan
 * limits](#tag/Sync/User/User-plan-limits) object.
 *
 * Workspace-owned templates retain task assignments only to current admins, members and guests of
 * that workspace. Saving replacement content or moving a personal template into a workspace clears
 * ineligible task assignees and their assignment actors. Comment authors and reminder recipients
 * are preserved. When a person leaves a workspace, their task assignments in its saved templates
 * are cleared asynchronously. If they rejoin before the cleanup runs, their assignments are kept.
 *
 * ## Preview a template
 *
 * Use `GET /api/v1/templates/{template_id}/preview` for a curated slug or a saved template ID
 * beginning with `UT_`. Curated previews allow anonymous access. Saved templates require
 * `data:read` and retain their personal or workspace visibility rules. `locale` selects curated
 * content. For setup templates, `for_workspace=true` previews workspace projects and folders.
 *
 * Use `GET /api/v1/templates/preview?project_id=...` to preview an existing project. This requires
 * `data:read` and permission to export that project.
 *
 * Previews resolve dates by default. For project templates, `resolve_dates=false` returns raw due,
 * deadline and absolute-reminder strings, such as `{"string":"in 3 days","lang":"en"}`, for use in
 * a template editor. Project previews also include the calendar snapshot, reminders and comment
 * attachments in `notes[].file_attachment` and `project_notes[].file_attachment`. Project IDs in a
 * preview are temporary graph references. Setup templates reject `resolve_dates=false`.
 *
 * ## Use a template
 *
 * `POST /api/v1/templates/{template_id}/use` creates a project or a complete setup and requires
 * `data:read_write`. It accepts `locale` and an optional destination `workspace_id`. A saved
 * workspace template can only be used in its associated workspace. Project templates also accept
 * `folder_id`, which requires `workspace_id`. Setup templates reject `folder_id`.
 *
 * The response contains the created graph using the existing Sync API names: tasks are `items`,
 * task comments are `notes`, and project comments are `project_notes`. `project_ids` contains
 * objects shaped as `{"project_id":"..."}`. The graph includes reminders and user view options.
 * Project use returns empty label and filter lists. This response does not include
 * `discarded_fields` or `project_view_options_defaults`.
 *
 * ## Export a project
 *
 * `GET /api/v1/templates/file?project_id=...` requires `data:read` and returns UTF-8 CSV bytes with
 * a download filename. `GET /api/v1/templates/url?project_id=...` requires `data:read_write`
 * because it publishes a stored, publicly accessible CSV artifact. No expiry is set on the returned
 * URL. Both routes retain project export permissions and plan checks, and accept
 * `use_relative_dates` (default `true`).
 */
export class Templates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Categories
   *
   * @remarks
   * List curated template categories. Authentication is not required.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.CategoriesApiV1TemplatesCategoriesGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  categoriesApiV1TemplatesCategoriesGet(
    request: Templates.CategoriesApiV1TemplatesCategoriesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CategoriesResponse, Templates.CategoriesApiV1TemplatesCategoriesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/templates/categories"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "template_type",
            value: request.templateType,
            schema: s.defaulted(templateType9Schema, TemplateType9.Project),
          },
          { name: "locale", value: request.locale, schema: s.defaulted(s.string(), "en") },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoriesResponseSchema },
        errorFactory: Templates.CategoriesApiV1TemplatesCategoriesGetError,
      },
      options,
    );
  }

  /**
   * Create Project From File
   *
   * @remarks
   * A template can be imported in an existing project, or in a newly created one.
   *
   * Upload a file suitable to be passed as a template to be imported into a project.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProjectFromFileApiV1TemplatesCreateProjectFromFilePost(
    request: Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ProjectImportCreateResponseWithObjects,
    Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/templates/create_project_from_file"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
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
        errorFactory: Templates.CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError,
      },
      options,
    );
  }

  /**
   * Create User Template
   *
   * @remarks
   * Creates a template from a project or a content graph. Requires `data:read_write`.
   *
   * Task assignments are retained only when the resulting template belongs to a workspace.
   *
   * `project_id` is always required. With `content` unset, its content is exported as-is. With
   * `content` set, project_id is only used to check access, set the template's source project, and
   * (with `for_workspace`) derive the workspace to associate the template with - the content graph
   * is used for the template's content instead of an export of the project.
   *
   * If workspace membership repeatedly changes during saving, retry the same request after the 409
   * `WORKSPACE_TEMPLATE_MEMBERSHIP_CHANGED` response.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.CreateUserTemplateApiV1TemplatesUserPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUserTemplateApiV1TemplatesUserPost(
    request: Templates.CreateUserTemplateApiV1TemplatesUserPostRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateUserTemplateResponse, Templates.CreateUserTemplateApiV1TemplatesUserPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/templates/user"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body37InternalSchema },
      },
      {
        success: { kind: "json", schema: createUserTemplateResponseSchema },
        errorFactory: Templates.CreateUserTemplateApiV1TemplatesUserPostError,
      },
      options,
    );
  }

  /**
   * Discover Template
   *
   * @remarks
   * Get one template. A `UT_` ID requires `data:read`; invisible or missing IDs return 404.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  discoverTemplateApiV1TemplatesTemplateIdGet(
    request: Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicTemplate, Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/templates/{template_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [{ name: "locale", value: request.locale, schema: s.defaulted(s.string(), "en") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicTemplateSchema },
        errorFactory: Templates.DiscoverTemplateApiV1TemplatesTemplateIdGetError,
      },
      options,
    );
  }

  /**
   * Discover Templates
   *
   * @remarks
   * Discover templates or look up a bounded batch of IDs.
   *
   * Curated templates are anonymous. Personal/workspace sources and any `UT_` ID require
   * `data:read`. Pages prioritize personal, workspace, then curated templates, and rank each page
   * by the query. Keep all filters when continuing.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.DiscoverTemplatesApiV1TemplatesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  discoverTemplatesApiV1TemplatesGet(
    request: Templates.DiscoverTemplatesApiV1TemplatesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList9, Templates.DiscoverTemplatesApiV1TemplatesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/templates"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "template_type",
            value: request.templateType,
            schema: s.defaulted(templateType10Schema, TemplateType10.Project),
          },
          {
            name: "template_source",
            value: request.templateSource,
            schema: s.defaulted(templateSource3Schema, TemplateSource3.Todoist),
          },
          { name: "locale", value: request.locale, schema: s.defaulted(s.string(), "en") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "query", value: request.query, schema: s.optionalNullable(s.string()) },
          { name: "category_id", value: request.categoryId, schema: s.optionalNullable(s.string()) },
          { name: "ids", value: request.ids, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList9Schema },
        errorFactory: Templates.DiscoverTemplatesApiV1TemplatesGetError,
      },
      options,
    );
  }

  /**
   * Export As File
   *
   * @remarks
   * Download a project as UTF-8 CSV. Requires `data:read` and project export permission.
   *
   * On v1.6+, dated tasks also get `DATE_TYPE` and `DATE_TIME` columns, and `TIMEZONE` holds the
   * task's own timezone only for `fixed_datetime` dues. Older versions write the exporting user's
   * timezone on every row. With `use_relative_dates=false`, non-recurring dues are ISO 8601 values.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.ExportAsFileApiV1TemplatesFileGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportAsFileApiV1TemplatesFileGet(
    request: Templates.ExportAsFileApiV1TemplatesFileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Templates.ExportAsFileApiV1TemplatesFileGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/templates/file"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          {
            name: "use_relative_dates",
            value: request.useRelativeDates,
            schema: s.defaulted(s.boolean(), true),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Templates.ExportAsFileApiV1TemplatesFileGetError,
      },
      options,
    );
  }

  /**
   * Export As Url
   *
   * @remarks
   * Publish a project as a shareable template URL. Requires `data:read_write` and project export
   * permission.
   *
   * This stores a publicly accessible CSV artifact. No expiry is set on this URL. Pass it to
   * `https://todoist.com/api/v1/import/project_from_url?t_url=<url>` to share the template.
   *
   * On v1.6+, dated tasks also get `DATE_TYPE` and `DATE_TIME` columns, and `TIMEZONE` holds the
   * task's own timezone only for `fixed_datetime` dues. Older versions write the exporting user's
   * timezone on every row. With `use_relative_dates=false`, non-recurring dues are ISO 8601 values.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.ExportAsUrlApiV1TemplatesUrlGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportAsUrlApiV1TemplatesUrlGet(
    request: Templates.ExportAsUrlApiV1TemplatesUrlGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FileUrlResponse, Templates.ExportAsUrlApiV1TemplatesUrlGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/templates/url"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          {
            name: "use_relative_dates",
            value: request.useRelativeDates,
            schema: s.defaulted(s.boolean(), true),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fileUrlResponseInternalSchema },
        errorFactory: Templates.ExportAsUrlApiV1TemplatesUrlGetError,
      },
      options,
    );
  }

  /**
   * Generate Description
   *
   * @remarks
   * Generates an AI description from a project or saved template. Supply `project_id` or
   * `template_id`. Requires `data:read_write`, access to the source and the AI template
   * descriptions feature.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateDescriptionApiV1TemplatesGenerateDescriptionPost(
    request: Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GenerateDescriptionResponse,
    Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/templates/generate_description"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body6Schema },
      },
      {
        success: { kind: "json", schema: generateDescriptionResponseSchema },
        errorFactory: Templates.GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError,
      },
      options,
    );
  }

  /**
   * Import Into Project From File
   *
   * @remarks
   * A template can be imported in an existing project, or in a newly created one.
   *
   * Upload a file suitable to be passed as a template to be imported into a project.
   *
   * @returns Successful Response
   *
   * @throws {@link
   * Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePost(
    request: Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ProjectImportResponse,
    Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/templates/import_into_project_from_file"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "project_id", value: request.projectId, schema: s.string() },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "json", schema: projectImportResponseSchema },
        errorFactory: Templates.ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError,
      },
      options,
    );
  }

  /**
   * Import Into Project From Template Id
   *
   * @remarks
   * Import a saved template into an existing project.
   *
   * The target project must exist and must not be frozen. The response includes the imported
   * objects so clients can update local state immediately. Tasks imported from personal templates
   * are unassigned.
   *
   * @returns Successful Response
   *
   * @throws {@link
   * Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPost(
    request: Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ProjectImportResponse,
    Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/templates/import_into_project_from_template_id"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body26Schema },
      },
      {
        success: { kind: "json", schema: projectImportResponseSchema },
        errorFactory:
          Templates.ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError,
      },
      options,
    );
  }

  /**
   * Import User Template From File
   *
   * @remarks
   * Creates a personal template from CSV or a content graph. Requires `data:read_write`.
   *
   * Task assignees and assignment actors are discarded from personal templates.
   *
   * With `content` unset, the request's file (either a multipart `file` or a previously-uploaded
   * `uploaded_file_name`, or a raw CSV body) becomes the template's content. Send content graphs in
   * an `application/json` body. With `content` set, an uploaded file is ignored and
   * `uploaded_file_name` must be unset. Import creates a personal template; update it to associate
   * a workspace.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importUserTemplateFromFileApiV1TemplatesUserImportPost(
    request: Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CreateUserTemplateResponse,
    Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/templates/user/import"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "template_type",
            value: request.templateTypeQuery,
            schema: s.optional(s.lazy(() => templateType7Schema)),
          },
          { name: "name", value: request.nameQuery, schema: s.optional(s.string()) },
          { name: "description", value: request.descriptionQuery, schema: s.optional(s.string()) },
          { name: "color", value: request.colorQuery, schema: s.optional(s.lazy(() => apiColorId2Schema)) },
          {
            name: "uploaded_file_name",
            value: request.uploadedFileNameQuery,
            schema: s.optionalNullable(s.string()),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "template_type", value: request.templateType, schema: templateType7Schema },
            { kind: "text", name: "name", value: request.name, schema: s.string() },
            { kind: "text", name: "description", value: request.description, schema: s.string() },
            { kind: "text", name: "color", value: request.color, schema: apiColorId2Schema },
            {
              kind: "text",
              name: "uploaded_file_name",
              value: request.uploadedFileName,
              schema: s.optionalNullable(s.string()),
            },
            { kind: "file", name: "file", value: request.file },
          ],
        },
      },
      {
        success: { kind: "json", schema: createUserTemplateResponseSchema },
        errorFactory: Templates.ImportUserTemplateFromFileApiV1TemplatesUserImportPostError,
      },
      options,
    );
  }

  /**
   * Preview Project
   *
   * @remarks
   * Preview a project's template graph. Requires `data:read` and project export permission.
   *
   * Set `resolve_dates=false` to preserve raw date strings for a template editor.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.PreviewProjectApiV1TemplatesPreviewGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewProjectApiV1TemplatesPreviewGet(
    request: Templates.PreviewProjectApiV1TemplatesPreviewGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectTemplatePreviewResponse, Templates.PreviewProjectApiV1TemplatesPreviewGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/templates/preview"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "project_id", value: request.projectId, schema: s.string() },
          { name: "resolve_dates", value: request.resolveDates, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectTemplatePreviewResponseSchema },
        errorFactory: Templates.PreviewProjectApiV1TemplatesPreviewGetError,
      },
      options,
    );
  }

  /**
   * Preview Template
   *
   * @remarks
   * Preview a project or setup template without importing it.
   *
   * Curated templates support anonymous access and use a valid `data:read` actor when available.
   * Any `UT_` ID requires `data:read` and the saved template's existing visibility permissions. Raw
   * date strings are supported only for project templates.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewTemplateApiV1TemplatesTemplateIdPreviewGet(
    request: Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TemplatePreviewResponse, Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/templates/{template_id}/preview"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [
          { name: "locale", value: request.locale, schema: s.defaulted(s.string(), "en") },
          { name: "for_workspace", value: request.forWorkspace, schema: s.defaulted(s.boolean(), false) },
          { name: "resolve_dates", value: request.resolveDates, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: templatePreviewResponseInternalSchema },
        errorFactory: Templates.PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError,
      },
      options,
    );
  }

  /**
   * Preview User Template
   *
   * @remarks
   * Stages and previews a project CSV sent as multipart `file` or a raw CSV body.
   *
   * Requires `data:read_write` because the upload is stored. The response includes the filename for
   * a subsequent import and the graph for editing; project names come from the filename or the
   * `X-File-Name` header for raw bodies.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  previewUserTemplateApiV1TemplatesUserPreviewPost(
    request: Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostRequest,
    options?: RequestOptions,
  ): ApiPromise<PreviewFromFileResponse, Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/templates/user/preview"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "resolve_dates", value: request.resolveDatesQuery, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "resolve_dates",
              value: request.resolveDates,
              schema: s.defaulted(s.boolean(), true),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: previewFromFileResponseSchema },
        errorFactory: Templates.PreviewUserTemplateApiV1TemplatesUserPreviewPostError,
      },
      options,
    );
  }

  /**
   * Update User Template
   *
   * @remarks
   * Updates a template's metadata and, optionally, its content.
   *
   * Task assignments in replacement content are retained only for workspace templates.
   *
   * Requires `data:read_write` and template edit permission. Omitted metadata stays unchanged.
   * Supply `content` or `project_id` to replace the graph. A shared workspace template can be
   * edited by its author or a workspace admin; restricted templates remain author-only, and only
   * the author may change sharing.
   *
   * If workspace membership repeatedly changes during saving, retry the same request after the 409
   * `WORKSPACE_TEMPLATE_MEMBERSHIP_CHANGED` response.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUserTemplateApiV1TemplatesUserTemplateIdPut(
    request: Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutRequest,
    options?: RequestOptions,
  ): ApiPromise<
    UpdateUserTemplateResponse,
    Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/templates/user/{template_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body27InternalSchema },
      },
      {
        success: { kind: "json", schema: updateUserTemplateResponseSchema },
        errorFactory: Templates.UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError,
      },
      options,
    );
  }

  /**
   * Use Template
   *
   * @remarks
   * Create a project or a complete setup from a template. Requires `data:read_write`.
   *
   * Saved workspace templates can only be used in their associated workspace. Returns the created
   * sync-style graph, with tasks in `items` and comments in `notes`.
   *
   * @returns Successful Response
   *
   * @throws {@link Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  useTemplateApiV1TemplatesTemplateIdUsePost(
    request: Templates.UseTemplateApiV1TemplatesTemplateIdUsePostRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateFromTemplateIdResponse, Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/templates/{template_id}/use"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "template_id", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body12InternalSchema },
      },
      {
        success: { kind: "json", schema: createFromTemplateIdResponseInternalSchema },
        errorFactory: Templates.UseTemplateApiV1TemplatesTemplateIdUsePostError,
      },
      options,
    );
  }
}

export namespace Templates {
  export type CategoriesApiV1TemplatesCategoriesGetRequest = {
    /** @default TemplateType9.Project */
    templateType?: TemplateType9;
    /** @default "en" */
    locale?: string;
  };

  export class CategoriesApiV1TemplatesCategoriesGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CategoriesApiV1TemplatesCategoriesGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostRequest = {
    name: string;
    file: FileInput;
    workspaceId?: string | null;
  };

  export class CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectFromFileApiV1TemplatesCreateProjectFromFilePostError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type CreateUserTemplateApiV1TemplatesUserPostRequest = {
    body: Body37;
  };

  export class CreateUserTemplateApiV1TemplatesUserPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUserTemplateApiV1TemplatesUserPostError> = [
      { on: 409, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DiscoverTemplateApiV1TemplatesTemplateIdGetRequest = {
    templateId: string;
    /** @default "en" */
    locale?: string;
  };

  export class DiscoverTemplateApiV1TemplatesTemplateIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DiscoverTemplateApiV1TemplatesTemplateIdGetError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DiscoverTemplatesApiV1TemplatesGetRequest = {
    /** @default TemplateType10.Project */
    templateType?: TemplateType10;
    /** @default TemplateSource3.Todoist */
    templateSource?: TemplateSource3;
    /** @default "en" */
    locale?: string;
    /** @default 50 */
    limit?: number;
    cursor?: string | null;
    query?: string | null;
    categoryId?: string | null;
    ids?: string | null;
  };

  export const discoverTemplatesApiV1TemplatesGetRequestSchema: Schema<DiscoverTemplatesApiV1TemplatesGetRequest> =
    s.lazySchema(() =>
      s.object<DiscoverTemplatesApiV1TemplatesGetRequest>({
        templateType: s.defaulted(templateType10Schema, TemplateType10.Project),
        templateSource: s.defaulted(templateSource3Schema, TemplateSource3.Todoist),
        locale: s.defaulted(s.string(), "en"),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        query: s.optionalNullable(s.string()),
        categoryId: s.optionalNullable(s.string()),
        ids: s.optionalNullable(s.string()),
      }),
    );

  export class DiscoverTemplatesApiV1TemplatesGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DiscoverTemplatesApiV1TemplatesGetError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type ExportAsFileApiV1TemplatesFileGetRequest = {
    projectId: string;
    /** @default true */
    useRelativeDates?: boolean;
  };

  export class ExportAsFileApiV1TemplatesFileGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExportAsFileApiV1TemplatesFileGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type ExportAsUrlApiV1TemplatesUrlGetRequest = {
    projectId: string;
    /** @default true */
    useRelativeDates?: boolean;
  };

  export class ExportAsUrlApiV1TemplatesUrlGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExportAsUrlApiV1TemplatesUrlGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GenerateDescriptionApiV1TemplatesGenerateDescriptionPostRequest = {
    body: Body6;
  };

  export class GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GenerateDescriptionApiV1TemplatesGenerateDescriptionPostError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostRequest = {
    projectId: string;
    file: FileInput;
  };

  export class ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImportIntoProjectFromFileApiV1TemplatesImportIntoProjectFromFilePostError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostRequest = {
    body: Body26;
  };

  export class ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImportIntoProjectFromTemplateIdApiV1TemplatesImportIntoProjectFromTemplateIdPostError> =
      [
        { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
        { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      ];
  }

  export type ImportUserTemplateFromFileApiV1TemplatesUserImportPostRequest = {
    /**
     * Send in the query string for raw uploads, or the form for multipart uploads. Required for raw
     * uploads.
     */
    templateTypeQuery?: TemplateType7;
    /**
     * Send in the query string for raw uploads, or the form for multipart uploads. Required for raw
     * uploads.
     */
    nameQuery?: string;
    /**
     * Send in the query string for raw uploads, or the form for multipart uploads. Required for raw
     * uploads.
     */
    descriptionQuery?: string;
    /**
     * Send in the query string for raw uploads, or the form for multipart uploads. Required for raw
     * uploads.
     */
    colorQuery?: ApiColorId2;
    /** Send in the query string for raw uploads, or the form for multipart uploads. */
    uploadedFileNameQuery?: string | null;
    /** Saved templates support project content only. */
    templateType: TemplateType7;
    /** Saved template name, up to 255 characters. */
    name: string;
    /** Saved template description, up to 1,000 characters. */
    description: string;
    /** Template color. */
    color: ApiColorId2;
    /**
     * Staged filename from /templates/user/preview, owned by the caller. Mutually exclusive with
     * content.
     */
    uploadedFileName?: string | null;
    file?: FileInput;
  };

  export class ImportUserTemplateFromFileApiV1TemplatesUserImportPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImportUserTemplateFromFileApiV1TemplatesUserImportPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type PreviewProjectApiV1TemplatesPreviewGetRequest = {
    projectId: string;
    /** @default true */
    resolveDates?: boolean;
  };

  export class PreviewProjectApiV1TemplatesPreviewGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<PreviewProjectApiV1TemplatesPreviewGetError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type PreviewTemplateApiV1TemplatesTemplateIdPreviewGetRequest = {
    templateId: string;
    /** @default "en" */
    locale?: string;
    /** @default false */
    forWorkspace?: boolean;
    /** @default true */
    resolveDates?: boolean;
  };

  export const previewTemplateApiV1TemplatesTemplateIdPreviewGetRequestSchema: Schema<PreviewTemplateApiV1TemplatesTemplateIdPreviewGetRequest> =
    s.lazySchema(() =>
      s.object<PreviewTemplateApiV1TemplatesTemplateIdPreviewGetRequest>({
        templateId: s.string(),
        locale: s.defaulted(s.string().check(s.maxLength(10)), "en"),
        forWorkspace: s.defaulted(s.boolean(), false),
        resolveDates: s.defaulted(s.boolean(), true),
      }),
    );

  export class PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<PreviewTemplateApiV1TemplatesTemplateIdPreviewGetError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type PreviewUserTemplateApiV1TemplatesUserPreviewPostRequest = {
    /**
     * Send in the query string for raw uploads, or the form for multipart uploads.
     *
     * @default true
     */
    resolveDatesQuery?: boolean;
    file: FileInput;
    /**
     * Resolve due dates and deadlines. Use false for an editor to receive raw date strings for the
     * supported content graph projection. On v1.6+, raw typed dues also include date_type, time and
     * timezone to preserve their meaning when saved.
     *
     * @default true
     */
    resolveDates?: boolean;
  };

  export class PreviewUserTemplateApiV1TemplatesUserPreviewPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<PreviewUserTemplateApiV1TemplatesUserPreviewPostError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateUserTemplateApiV1TemplatesUserTemplateIdPutRequest = {
    templateId: string;
    body: Body27;
  };

  export class UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateUserTemplateApiV1TemplatesUserTemplateIdPutError> = [
      { on: 409, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UseTemplateApiV1TemplatesTemplateIdUsePostRequest = {
    templateId: string;
    body: Body12;
  };

  export class UseTemplateApiV1TemplatesTemplateIdUsePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"error503", undefined>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Declared<"todoistError5", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UseTemplateApiV1TemplatesTemplateIdUsePostError> = [
      { on: 429, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 400, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError5", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
