import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { body7Schema, type Body7 } from "../models/body7.js";
import { body8InternalSchema, type Body8 } from "../models/body8.js";
import { paginatedList10Schema, type PaginatedList10 } from "../models/paginated-list10.js";
import { sectionSyncViewSchema, type SectionSyncView } from "../models/section-sync-view.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

export class Sections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Archive Section
   *
   * @remarks
   * Marks a section as archived.
   *
   * @returns Successful Response
   *
   * @throws {@link Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveSectionApiV1SectionsSectionIdArchivePost(
    request: Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostRequest,
    options?: RequestOptions,
  ): ApiPromise<SectionSyncView, Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sections/{section_id}/archive"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "section_id", value: request.sectionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sectionSyncViewSchema },
        errorFactory: Sections.ArchiveSectionApiV1SectionsSectionIdArchivePostError,
      },
      options,
    );
  }

  /**
   * Create Section
   *
   * @remarks
   * Create a new section
   *
   * @returns Successful Response
   *
   * @throws {@link Sections.CreateSectionApiV1SectionsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSectionApiV1SectionsPost(
    request: Sections.CreateSectionApiV1SectionsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<SectionSyncView, Sections.CreateSectionApiV1SectionsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sections"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body7Schema },
      },
      {
        success: { kind: "json", schema: sectionSyncViewSchema },
        errorFactory: Sections.CreateSectionApiV1SectionsPostError,
      },
      options,
    );
  }

  /**
   * Delete Section
   *
   * @remarks
   * Delete the section and all of its tasks
   *
   * @returns No Content (what the live API returns)
   *
   * @throws {@link Sections.DeleteSectionApiV1SectionsSectionIdDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSectionApiV1SectionsSectionIdDelete(
    request: Sections.DeleteSectionApiV1SectionsSectionIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sections.DeleteSectionApiV1SectionsSectionIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/sections/{section_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "section_id", value: request.sectionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sections.DeleteSectionApiV1SectionsSectionIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Section
   *
   * @remarks
   * Return the section for the given section ID
   *
   * @returns Successful Response
   *
   * @throws {@link Sections.GetSectionApiV1SectionsSectionIdGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSectionApiV1SectionsSectionIdGet(
    request: Sections.GetSectionApiV1SectionsSectionIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<SectionSyncView, Sections.GetSectionApiV1SectionsSectionIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sections/{section_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "section_id", value: request.sectionId, schema: s.string() }],
        query: [{ name: "public_key", value: request.publicKey, schema: s.optionalNullable(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sectionSyncViewSchema },
        errorFactory: Sections.GetSectionApiV1SectionsSectionIdGetError,
      },
      options,
    );
  }

  /**
   * Get Sections
   *
   * @remarks
   * Get all active sections for the user, optionally filtered by project or workspace.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Sections.GetSectionsApiV1SectionsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSectionsApiV1SectionsGet(
    request: Sections.GetSectionsApiV1SectionsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList10, Sections.GetSectionsApiV1SectionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sections"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "project_id", value: request.projectId, schema: s.optionalNullable(s.string()) },
          { name: "workspace_id", value: request.workspaceId, schema: s.optionalNullable(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "public_key", value: request.publicKey, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList10Schema },
        errorFactory: Sections.GetSectionsApiV1SectionsGetError,
      },
      options,
    );
  }

  /**
   * Search Sections
   *
   * @remarks
   * Search active sections by name, optionally filtered by project or workspace.
   *
   * This is a paginated endpoint. See the [Pagination guide](#tag/Pagination) for details on using
   * cursor-based pagination.
   *
   * @returns Successful Response
   *
   * @throws {@link Sections.SearchSectionsApiV1SectionsSearchGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchSectionsApiV1SectionsSearchGet(
    request: Sections.SearchSectionsApiV1SectionsSearchGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedList10, Sections.SearchSectionsApiV1SectionsSearchGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sections/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "project_id", value: request.projectId, schema: s.optionalNullable(s.string()) },
          { name: "workspace_id", value: request.workspaceId, schema: s.optionalNullable(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedList10Schema },
        errorFactory: Sections.SearchSectionsApiV1SectionsSearchGetError,
      },
      options,
    );
  }

  /**
   * Unarchive Section
   *
   * @remarks
   * Marks a section as active again.
   *
   * @returns Successful Response
   *
   * @throws {@link Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unarchiveSectionApiV1SectionsSectionIdUnarchivePost(
    request: Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostRequest,
    options?: RequestOptions,
  ): ApiPromise<SectionSyncView, Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sections/{section_id}/unarchive"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "section_id", value: request.sectionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sectionSyncViewSchema },
        errorFactory: Sections.UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError,
      },
      options,
    );
  }

  /**
   * Update Section
   *
   * @remarks
   * Update a section.
   *
   * @returns Successful Response
   *
   * @throws {@link Sections.UpdateSectionApiV1SectionsSectionIdPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSectionApiV1SectionsSectionIdPost(
    request: Sections.UpdateSectionApiV1SectionsSectionIdPostRequest,
    options?: RequestOptions,
  ): ApiPromise<SectionSyncView, Sections.UpdateSectionApiV1SectionsSectionIdPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sections/{section_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "section_id", value: request.sectionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: body8InternalSchema },
      },
      {
        success: { kind: "json", schema: sectionSyncViewSchema },
        errorFactory: Sections.UpdateSectionApiV1SectionsSectionIdPostError,
      },
      options,
    );
  }
}

export namespace Sections {
  export type ArchiveSectionApiV1SectionsSectionIdArchivePostRequest = {
    sectionId: string;
  };

  export class ArchiveSectionApiV1SectionsSectionIdArchivePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveSectionApiV1SectionsSectionIdArchivePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type CreateSectionApiV1SectionsPostRequest = {
    body: Body7;
  };

  export class CreateSectionApiV1SectionsPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSectionApiV1SectionsPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type DeleteSectionApiV1SectionsSectionIdDeleteRequest = {
    sectionId: string;
  };

  export class DeleteSectionApiV1SectionsSectionIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSectionApiV1SectionsSectionIdDeleteError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetSectionApiV1SectionsSectionIdGetRequest = {
    sectionId: string;
    publicKey?: string | null;
  };

  export class GetSectionApiV1SectionsSectionIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSectionApiV1SectionsSectionIdGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type GetSectionsApiV1SectionsGetRequest = {
    projectId?: string | null;
    workspaceId?: number | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
    publicKey?: string | null;
  };

  export const getSectionsApiV1SectionsGetRequestSchema: Schema<GetSectionsApiV1SectionsGetRequest> =
    s.lazySchema(() =>
      s.object<GetSectionsApiV1SectionsGetRequest>({
        projectId: s.optionalNullable(s.string()),
        workspaceId: s.optionalNullable(s.int().check(s.gt(0))),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
        publicKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetSectionsApiV1SectionsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSectionsApiV1SectionsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type SearchSectionsApiV1SectionsSearchGetRequest = {
    query: string;
    projectId?: string | null;
    workspaceId?: number | null;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
  };

  export const searchSectionsApiV1SectionsSearchGetRequestSchema: Schema<SearchSectionsApiV1SectionsSearchGetRequest> =
    s.lazySchema(() =>
      s.object<SearchSectionsApiV1SectionsSearchGetRequest>({
        query: s.string().check(s.minLength(1), s.maxLength(1024)),
        projectId: s.optionalNullable(s.string()),
        workspaceId: s.optionalNullable(s.int().check(s.gt(0))),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
      }),
    );

  export class SearchSectionsApiV1SectionsSearchGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchSectionsApiV1SectionsSearchGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UnarchiveSectionApiV1SectionsSectionIdUnarchivePostRequest = {
    sectionId: string;
  };

  export class UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnarchiveSectionApiV1SectionsSectionIdUnarchivePostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }

  export type UpdateSectionApiV1SectionsSectionIdPostRequest = {
    sectionId: string;
    body: Body8;
  };

  export class UpdateSectionApiV1SectionsSectionIdPostError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSectionApiV1SectionsSectionIdPostError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
