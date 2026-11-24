import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { columnsListResponseSchema, type ColumnsListResponse } from "../models/columns-list-response.js";
import { columnsRunRequestInternalSchema, type ColumnsRunRequest } from "../models/columns-run-request.js";
import { columnsRunResponseSchema, type ColumnsRunResponse } from "../models/columns-run-response.js";
import { entitiesAddRequestInternalSchema, type EntitiesAddRequest } from "../models/entities-add-request.js";
import { entitiesAddResponseSchema, type EntitiesAddResponse } from "../models/entities-add-response.js";
import { entitiesGetResponseSchema, type EntitiesGetResponse } from "../models/entities-get-response.js";
import {
  entitiesRemoveRequestInternalSchema,
  type EntitiesRemoveRequest,
} from "../models/entities-remove-request.js";
import {
  entitiesRemoveResponseSchema,
  type EntitiesRemoveResponse,
} from "../models/entities-remove-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { tableCreateRequestInternalSchema, type TableCreateRequest } from "../models/table-create-request.js";
import { tableListRequestInternalSchema, type TableListRequest } from "../models/table-list-request.js";
import { tableListResponseInternalSchema, type TableListResponse } from "../models/table-list-response.js";
import { tableResponseInternalSchema, type TableResponse } from "../models/table-response.js";
import { tableUpdateRequestInternalSchema, type TableUpdateRequest } from "../models/table-update-request.js";
import {
  v3CompaniesTablesColumnsResponseSchema,
  type V3CompaniesTablesColumnsResponse,
} from "../models/v3-companies-tables-columns-response.js";
import {
  v3CompaniesTablesResponseSchema,
  type V3CompaniesTablesResponse,
} from "../models/v3-companies-tables-response.js";
import type { Servers } from "../servers.js";

/**
 * **Companies Tables API:** Create and manage persistent tables of companies inside Lusha.
 */
export class CompaniesTables {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Entities to Companies Table
   *
   * @remarks
   * Add up to 500 company IDs to an existing table. `entityIds` accepts either the encrypted Lusha
   * token (`v{N}.…`, as returned by Search/Enrich/Get Entities) or the legacy numeric
   * `lushaCompanyId` — an ID that's neither returns `400`. Already-present IDs are reported as
   * `alreadyPresent` and not re-added; unresolvable IDs are not an error, they come back in
   * `invalidIds` with a `200`.
   *
   * > **Billing:** Charges `reveal_company` per newly-added company, deduped via row-count delta —
   * duplicates and already-present companies aren't charged again.
   *
   * @returns Entities added
   *
   * @throws {@link CompaniesTables.AddCompaniesTableEntitiesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addCompaniesTableEntities(
    request: CompaniesTables.AddCompaniesTableEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesAddResponse, CompaniesTables.AddCompaniesTableEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}/entities"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: entitiesAddRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: entitiesAddResponseSchema },
        errorFactory: CompaniesTables.AddCompaniesTableEntitiesError,
      },
      options,
    );
  }

  /**
   * Create Companies Table
   *
   * @remarks
   * Create a new, empty companies table, optionally seeded with an initial list of company IDs.
   *
   * > **Billing:** Free.
   *
   * @returns Table created
   *
   * @throws {@link CompaniesTables.CreateCompaniesTableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCompaniesTable(
    request: CompaniesTables.CreateCompaniesTableRequest,
    options?: RequestOptions,
  ): ApiPromise<TableResponse, CompaniesTables.CreateCompaniesTableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/tables"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tableCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tableResponseInternalSchema },
        errorFactory: CompaniesTables.CreateCompaniesTableError,
      },
      options,
    );
  }

  /**
   * Delete Companies Table
   *
   * @remarks
   * Permanently delete a table and all its data. This cannot be undone.
   *
   * > **Billing:** Free.
   *
   * @returns Table deleted
   *
   * @throws {@link CompaniesTables.DeleteCompaniesTableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCompaniesTable(
    request: CompaniesTables.DeleteCompaniesTableRequest,
    options?: RequestOptions,
  ): ApiPromise<V3CompaniesTablesResponse, CompaniesTables.DeleteCompaniesTableError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [{ name: "email", value: request.email, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3CompaniesTablesResponseSchema },
        errorFactory: CompaniesTables.DeleteCompaniesTableError,
      },
      options,
    );
  }

  /**
   * Get Companies Table
   *
   * @remarks
   * Get a table's metadata and current processing status.
   *
   * > **Billing:** Free.
   *
   * @returns Successful response
   *
   * @throws {@link CompaniesTables.GetCompaniesTableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesTable(
    request: CompaniesTables.GetCompaniesTableRequest,
    options?: RequestOptions,
  ): ApiPromise<TableResponse, CompaniesTables.GetCompaniesTableError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [{ name: "email", value: request.email, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tableResponseInternalSchema },
        errorFactory: CompaniesTables.GetCompaniesTableError,
      },
      options,
    );
  }

  /**
   * Get Companies Table Entities
   *
   * @remarks
   * Read a page of rows in the table, with all column values and per-cell status.
   *
   * > **Billing:** Charged per row returned via `export_api`.
   *
   * @returns Successful response
   *
   * @throws {@link CompaniesTables.GetCompaniesTableEntitiesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesTableEntities(
    request: CompaniesTables.GetCompaniesTableEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesGetResponse, CompaniesTables.GetCompaniesTableEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}/entities"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "size", value: request.size, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entitiesGetResponseSchema },
        errorFactory: CompaniesTables.GetCompaniesTableEntitiesError,
      },
      options,
    );
  }

  /**
   * List Companies Table Columns
   *
   * @remarks
   * List the columns on a table, with type and aggregated per-cell status counts.
   *
   * > **Billing:** Free.
   *
   * @returns Successful response
   *
   * @throws {@link CompaniesTables.ListCompaniesTableColumnsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCompaniesTableColumns(
    request: CompaniesTables.ListCompaniesTableColumnsRequest,
    options?: RequestOptions,
  ): ApiPromise<ColumnsListResponse, CompaniesTables.ListCompaniesTableColumnsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}/columns"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [{ name: "email", value: request.email, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: columnsListResponseSchema },
        errorFactory: CompaniesTables.ListCompaniesTableColumnsError,
      },
      options,
    );
  }

  /**
   * List Companies Tables
   *
   * @remarks
   * List companies tables owned by the given user, plus any tables shared with the account.
   *
   * > **Billing:** Free.
   *
   * @returns Successful response
   *
   * @throws {@link CompaniesTables.ListCompaniesTablesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCompaniesTables(
    request: CompaniesTables.ListCompaniesTablesRequest,
    options?: RequestOptions,
  ): ApiPromise<TableListResponse, CompaniesTables.ListCompaniesTablesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/tables/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tableListRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tableListResponseInternalSchema },
        errorFactory: CompaniesTables.ListCompaniesTablesError,
      },
      options,
    );
  }

  /**
   * Remove Column from Companies Table
   *
   * @remarks
   * Remove a column and delete all of its cell data across the table. Default Lusha columns cannot
   * be removed.
   *
   * > **Billing:** Free.
   *
   * @returns Column removed
   *
   * @throws {@link CompaniesTables.RemoveCompaniesTableColumnError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeCompaniesTableColumn(
    request: CompaniesTables.RemoveCompaniesTableColumnRequest,
    options?: RequestOptions,
  ): ApiPromise<V3CompaniesTablesColumnsResponse, CompaniesTables.RemoveCompaniesTableColumnError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}/columns/{column_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "table_id", value: request.tableId, schema: s.string() },
          { name: "column_id", value: request.columnId, schema: s.string() },
        ],
        query: [{ name: "email", value: request.email, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3CompaniesTablesColumnsResponseSchema },
        errorFactory: CompaniesTables.RemoveCompaniesTableColumnError,
      },
      options,
    );
  }

  /**
   * Remove Entities from Companies Table
   *
   * @remarks
   * Remove specific company IDs from a table.
   *
   * > **Billing:** Free.
   *
   * @returns Entities removed
   *
   * @throws {@link CompaniesTables.RemoveCompaniesTableEntitiesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeCompaniesTableEntities(
    request: CompaniesTables.RemoveCompaniesTableEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesRemoveResponse, CompaniesTables.RemoveCompaniesTableEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}/entities"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: entitiesRemoveRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: entitiesRemoveResponseSchema },
        errorFactory: CompaniesTables.RemoveCompaniesTableEntitiesError,
      },
      options,
    );
  }

  /**
   * Run Column on Companies Table
   *
   * @remarks
   * Populate or refresh a column's data for some or all rows in the table. This is **asynchronous**
   * — the call returns immediately with `status: "processing"`; poll Get Companies Table for
   * `isProcessing` and per-column row-status counts to know when it's done, then read the values
   * via Get Companies Table Entities.
   *
   * **`runScope` values:**
   * - `all` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
   * - `missing` — only rows that have never been run for this column. Cheapest, safe to call
   *   repeatedly.
   * - `specific` — only the `entityIds` you pass. Also how you implement "run for this page" —
   *   fetch the page via Get Companies Table Entities, then pass those IDs here.
   *
   * > **Billing:** Charged per row processed, per the column's credit tier. Company enrichment
   * charges once per company per table — re-runs on an already-paid company in the same table are
   * free.
   *
   * @returns Column run started
   *
   * @throws {@link CompaniesTables.RunCompaniesTableColumnError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  runCompaniesTableColumn(
    request: CompaniesTables.RunCompaniesTableColumnRequest,
    options?: RequestOptions,
  ): ApiPromise<ColumnsRunResponse, CompaniesTables.RunCompaniesTableColumnError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}/columns/{column_id}/run"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "table_id", value: request.tableId, schema: s.string() },
          { name: "column_id", value: request.columnId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: columnsRunRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: columnsRunResponseSchema },
        errorFactory: CompaniesTables.RunCompaniesTableColumnError,
      },
      options,
    );
  }

  /**
   * Update Companies Table
   *
   * @remarks
   * Rename a table, change its visibility, or reassign its owner. All fields except `owner` are
   * optional — send only what changes.
   *
   * > **Billing:** Free.
   *
   * @returns Table updated
   *
   * @throws {@link CompaniesTables.UpdateCompaniesTableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCompaniesTable(
    request: CompaniesTables.UpdateCompaniesTableRequest,
    options?: RequestOptions,
  ): ApiPromise<TableResponse, CompaniesTables.UpdateCompaniesTableError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/companies/tables/{table_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tableUpdateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tableResponseInternalSchema },
        errorFactory: CompaniesTables.UpdateCompaniesTableError,
      },
      options,
    );
  }
}

export namespace CompaniesTables {
  export type AddCompaniesTableEntitiesRequest = {
    /** The table's ID. */
    tableId: string;
    body: EntitiesAddRequest;
  };

  export class AddCompaniesTableEntitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddCompaniesTableEntitiesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateCompaniesTableRequest = {
    body: TableCreateRequest;
  };

  export class CreateCompaniesTableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCompaniesTableError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteCompaniesTableRequest = {
    /** The table's ID. */
    tableId: string;
    /**
     * Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE
     * calls, which cannot carry a body.
     */
    email?: string;
  };

  export const deleteCompaniesTableRequestSchema: Schema<DeleteCompaniesTableRequest> = s.lazySchema(() =>
    s.object<DeleteCompaniesTableRequest>({
      tableId: s.string(),
      email: s.optional(s.string().check(s.email())),
    }),
  );

  export class DeleteCompaniesTableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCompaniesTableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesTableRequest = {
    /** The table's ID. */
    tableId: string;
    /**
     * Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE
     * calls, which cannot carry a body.
     */
    email?: string;
  };

  export const getCompaniesTableRequestSchema: Schema<GetCompaniesTableRequest> = s.lazySchema(() =>
    s.object<GetCompaniesTableRequest>({
      tableId: s.string(),
      email: s.optional(s.string().check(s.email())),
    }),
  );

  export class GetCompaniesTableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesTableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesTableEntitiesRequest = {
    /** The table's ID. */
    tableId: string;
    /**
     * Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE
     * calls, which cannot carry a body.
     */
    email?: string;
    /** @default 0 */
    page?: number;
    /** @default 100 */
    size?: number;
  };

  export const getCompaniesTableEntitiesRequestSchema: Schema<GetCompaniesTableEntitiesRequest> =
    s.lazySchema(() =>
      s.object<GetCompaniesTableEntitiesRequest>({
        tableId: s.string(),
        email: s.optional(s.string().check(s.email())),
        page: s.defaulted(s.int().check(s.lte(100)), 0),
        size: s.defaulted(s.int(), 100),
      }),
    );

  export class GetCompaniesTableEntitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesTableEntitiesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCompaniesTableColumnsRequest = {
    /** The table's ID. */
    tableId: string;
    /**
     * Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE
     * calls, which cannot carry a body.
     */
    email?: string;
  };

  export const listCompaniesTableColumnsRequestSchema: Schema<ListCompaniesTableColumnsRequest> =
    s.lazySchema(() =>
      s.object<ListCompaniesTableColumnsRequest>({
        tableId: s.string(),
        email: s.optional(s.string().check(s.email())),
      }),
    );

  export class ListCompaniesTableColumnsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCompaniesTableColumnsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCompaniesTablesRequest = {
    body: TableListRequest;
  };

  export class ListCompaniesTablesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCompaniesTablesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveCompaniesTableColumnRequest = {
    /** The table's ID. */
    tableId: string;
    /** The column's ID. */
    columnId: string;
    /**
     * Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE
     * calls, which cannot carry a body.
     */
    email?: string;
  };

  export const removeCompaniesTableColumnRequestSchema: Schema<RemoveCompaniesTableColumnRequest> =
    s.lazySchema(() =>
      s.object<RemoveCompaniesTableColumnRequest>({
        tableId: s.string(),
        columnId: s.string(),
        email: s.optional(s.string().check(s.email())),
      }),
    );

  export class RemoveCompaniesTableColumnError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveCompaniesTableColumnError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveCompaniesTableEntitiesRequest = {
    /** The table's ID. */
    tableId: string;
    body: EntitiesRemoveRequest;
  };

  export class RemoveCompaniesTableEntitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveCompaniesTableEntitiesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RunCompaniesTableColumnRequest = {
    /** The table's ID. */
    tableId: string;
    /** The column's ID. */
    columnId: string;
    body: ColumnsRunRequest;
  };

  export class RunCompaniesTableColumnError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunCompaniesTableColumnError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateCompaniesTableRequest = {
    /** The table's ID. */
    tableId: string;
    body: TableUpdateRequest;
  };

  export class UpdateCompaniesTableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCompaniesTableError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
