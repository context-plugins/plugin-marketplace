import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  badRequestErrorResponseSchema,
  type BadRequestErrorResponse,
} from "../models/bad-request-error-response.js";
import {
  cannotDeleteLastItemErrorResponseSchema,
  type CannotDeleteLastItemErrorResponse,
} from "../models/cannot-delete-last-item-error-response.js";
import {
  conflictErrorResponseSchema,
  type ConflictErrorResponse,
} from "../models/conflict-error-response.js";
import { createProjectDtoInternalSchema, type CreateProjectDto } from "../models/create-project-dto.js";
import {
  featureStalenessEntitySchema,
  type FeatureStalenessEntity,
} from "../models/feature-staleness-entity.js";
import {
  notFoundErrorResponseSchema,
  type NotFoundErrorResponse,
} from "../models/not-found-error-response.js";
import { projectSchema, type Project } from "../models/project.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import { updateProjectDtoInternalSchema, type UpdateProjectDto } from "../models/update-project-dto.js";
import {
  updateProjectSettingsDtoSchema,
  type UpdateProjectSettingsDto,
} from "../models/update-project-settings-dto.js";
import {
  updateProtectedProjectSettingsDtoSchema,
  type UpdateProtectedProjectSettingsDto,
} from "../models/update-protected-project-settings-dto.js";
import type { Servers } from "../servers.js";

export class Projects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create project in the current organization
   *
   * @remarks
   * Creates a new project within the authed organization. The project key must be unique within the
   * organization. If this is called in an Organization that has permissions controlled via an
   * external IdP
   * (https://docs.devcycle.com/platform/security-and-guardrails/permissions#full-role-based-access-control-project-level-roles--enterprise-only)
   * - then no users will have permission to access this project.
   *
   * @returns The project has been successfully created
   *
   * @throws {@link Projects.ProjectsControllerCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectsControllerCreate(
    request: Projects.ProjectsControllerCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.ProjectsControllerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createProjectDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: Projects.ProjectsControllerCreateError,
      },
      options,
    );
  }

  /**
   * List Projects that the current API Token has permission to view
   *
   * @remarks
   * Lists all projects that the current API Token has permission to view.
   *
   * @throws {@link Projects.ProjectsControllerFindAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectsControllerFindAll(
    request: Projects.ProjectsControllerFindAllRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Project[], Projects.ProjectsControllerFindAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.float64(), 100) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "createdBy", value: request.createdBy, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => projectSchema)) },
        errorFactory: Projects.ProjectsControllerFindAllError,
      },
      options,
    );
  }

  /**
   * Get a Project
   *
   * @remarks
   * Get a Project by ID or key.
   *
   * @throws {@link Projects.ProjectsControllerFindOneError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectsControllerFindOne(
    request: Projects.ProjectsControllerFindOneRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.ProjectsControllerFindOneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{key}"),
        auth: noneAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: Projects.ProjectsControllerFindOneError,
      },
      options,
    );
  }

  /**
   * Get all stale Features for a Project
   *
   * @throws {@link Projects.ProjectsControllerGetStalenessError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectsControllerGetStaleness(
    request: Projects.ProjectsControllerGetStalenessRequest,
    options?: RequestOptions,
  ): ApiPromise<FeatureStalenessEntity[], Projects.ProjectsControllerGetStalenessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{key}/staleness"),
        auth: noneAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.float64(), 100) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "createdBy", value: request.createdBy, schema: s.optional(s.string()) },
          {
            name: "includeSilenced",
            value: request.includeSilenced,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => featureStalenessEntitySchema)) },
        errorFactory: Projects.ProjectsControllerGetStalenessError,
      },
      options,
    );
  }

  /**
   * Delete a Project
   *
   * @remarks
   * Delete a Project by ID or key
   *
   * @returns Project deleted successfully
   *
   * @throws {@link Projects.ProjectsControllerRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectsControllerRemove(
    request: Projects.ProjectsControllerRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Projects.ProjectsControllerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{key}"),
        auth: noneAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Projects.ProjectsControllerRemoveError,
      },
      options,
    );
  }

  /**
   * Update a Project
   *
   * @remarks
   * Update a Project by ID or key. Certain facets of the project settings require additional
   * permissions to update.
   *
   * @throws {@link Projects.ProjectsControllerUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectsControllerUpdate(
    request: Projects.ProjectsControllerUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.ProjectsControllerUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{key}"),
        auth: noneAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateProjectDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: Projects.ProjectsControllerUpdateError,
      },
      options,
    );
  }

  /**
   * Update Protected Settings for a Project
   *
   * @remarks
   * Update the Protect Settings for a Project by ID or key
   *
   * @throws {@link Projects.ProjectsControllerUpdateProtectedSettingsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectsControllerUpdateProtectedSettings(
    request: Projects.ProjectsControllerUpdateProtectedSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.ProjectsControllerUpdateProtectedSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{key}/settings/protected"),
        auth: noneAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateProtectedProjectSettingsDtoSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: Projects.ProjectsControllerUpdateProtectedSettingsError,
      },
      options,
    );
  }

  /**
   * Update Publisher Restricted Settings for a Project
   *
   * @remarks
   * Update a subset of settings for a Project that only requires publisher permissions
   *
   * @throws {@link Projects.ProjectsControllerUpdateSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  projectsControllerUpdateSettings(
    request: Projects.ProjectsControllerUpdateSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Project, Projects.ProjectsControllerUpdateSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{key}/settings"),
        auth: noneAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateProjectSettingsDtoSchema },
      },
      {
        success: { kind: "json", schema: projectSchema },
        errorFactory: Projects.ProjectsControllerUpdateSettingsError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type ProjectsControllerCreateRequest = {
    body: CreateProjectDto;
  };

  export class ProjectsControllerCreateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error403", undefined>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectsControllerCreateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }

  export type ProjectsControllerFindAllRequest = {
    /** @default 1 */
    page?: number;
    /** @default 100 */
    perPage?: number;
    /** @default SortBy.CreatedAt */
    sortBy?: SortBy;
    /** @default SortOrder.Desc */
    sortOrder?: SortOrder;
    search?: string;
    createdBy?: string;
  };

  export const projectsControllerFindAllRequestSchema: Schema<ProjectsControllerFindAllRequest> =
    s.lazySchema(() =>
      s.object<ProjectsControllerFindAllRequest>({
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        createdBy: s.optional(s.string()),
      }),
    );

  export class ProjectsControllerFindAllError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectsControllerFindAllError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type ProjectsControllerFindOneRequest = {
    /** A Project key or ID */
    key: string;
  };

  export class ProjectsControllerFindOneError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectsControllerFindOneError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type ProjectsControllerGetStalenessRequest = {
    /** A Project key or ID */
    key: string;
    /** @default 1 */
    page?: number;
    /** @default 100 */
    perPage?: number;
    /** @default SortBy.CreatedAt */
    sortBy?: SortBy;
    /** @default SortOrder.Desc */
    sortOrder?: SortOrder;
    search?: string;
    createdBy?: string;
    /** @default false */
    includeSilenced?: boolean;
  };

  export const projectsControllerGetStalenessRequestSchema: Schema<ProjectsControllerGetStalenessRequest> =
    s.lazySchema(() =>
      s.object<ProjectsControllerGetStalenessRequest>({
        key: s.string(),
        page: s.defaulted(s.float64().check(s.gte(1)), 1),
        perPage: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 100),
        sortBy: s.defaulted(sortBySchema, SortBy.CreatedAt),
        sortOrder: s.defaulted(sortOrderSchema, SortOrder.Desc),
        search: s.optional(s.string().check(s.minLength(3))),
        createdBy: s.optional(s.string()),
        includeSilenced: s.defaulted(s.boolean(), false),
      }),
    );

  export class ProjectsControllerGetStalenessError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectsControllerGetStalenessError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
    ];
  }

  export type ProjectsControllerRemoveRequest = {
    /** A Project key or ID */
    key: string;
  };

  export class ProjectsControllerRemoveError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"cannotDeleteLastItemErrorResponse", CannotDeleteLastItemErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectsControllerRemoveError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 405,
        kind: "cannotDeleteLastItemErrorResponse",
        decode: { kind: "json", schema: cannotDeleteLastItemErrorResponseSchema },
      },
    ];
  }

  export type ProjectsControllerUpdateRequest = {
    /** A Project key or ID */
    key: string;
    body: UpdateProjectDto;
  };

  export class ProjectsControllerUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectsControllerUpdateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }

  export type ProjectsControllerUpdateProtectedSettingsRequest = {
    /** A Project key or ID */
    key: string;
    body: UpdateProtectedProjectSettingsDto;
  };

  export class ProjectsControllerUpdateProtectedSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectsControllerUpdateProtectedSettingsError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }

  export type ProjectsControllerUpdateSettingsRequest = {
    /** A Project key or ID */
    key: string;
    body: UpdateProjectSettingsDto;
  };

  export class ProjectsControllerUpdateSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error403", undefined>
      | Declared<"notFoundErrorResponse", NotFoundErrorResponse>
      | Declared<"conflictErrorResponse", ConflictErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProjectsControllerUpdateSettingsError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      {
        on: 404,
        kind: "notFoundErrorResponse",
        decode: { kind: "json", schema: notFoundErrorResponseSchema },
      },
      {
        on: 409,
        kind: "conflictErrorResponse",
        decode: { kind: "json", schema: conflictErrorResponseSchema },
      },
    ];
  }
}
