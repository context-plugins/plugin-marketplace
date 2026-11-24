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
  v3ContactsTablesColumnsResponseSchema,
  type V3ContactsTablesColumnsResponse,
} from "../models/v3-contacts-tables-columns-response.js";
import {
  v3ContactsTablesResponseSchema,
  type V3ContactsTablesResponse,
} from "../models/v3-contacts-tables-response.js";
import type { Servers } from "../servers.js";

/**
 * **Contacts Tables API:** Create and manage persistent tables of contacts inside Lusha.
 */
export class ContactsTables {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Entities to Contacts Table
   *
   * @remarks
   * Add up to 500 contact IDs to an existing table. `entityIds` accepts either the encrypted Lusha
   * token (`v{N}.…`, as returned by Search/Enrich/Get Entities) or the legacy numeric `personId` —
   * an ID that's neither returns `400`. Already-present IDs are reported as `alreadyPresent` and
   * not re-added; unresolvable IDs are not an error, they come back in `invalidIds` with a `200`.
   *
   * Optionally pass `companyIds` — one `lushaCompanyId` per contact, index-aligned with `entityIds`
   * — to help pair company-level enrichment to the right company for each contact.
   *
   * > **Billing:** Free.
   *
   * @returns Entities added
   *
   * @throws {@link ContactsTables.AddContactsTableEntitiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addContactsTableEntities(
    request: ContactsTables.AddContactsTableEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesAddResponse, ContactsTables.AddContactsTableEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}/entities"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: entitiesAddRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: entitiesAddResponseSchema },
        errorFactory: ContactsTables.AddContactsTableEntitiesError,
      },
      options,
    );
  }

  /**
   * Create Contacts Table
   *
   * @remarks
   * Create a new, empty contacts table, optionally seeded with an initial list of contact IDs.
   *
   * > **Billing:** Free.
   *
   * @returns Table created
   *
   * @throws {@link ContactsTables.CreateContactsTableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContactsTable(
    request: ContactsTables.CreateContactsTableRequest,
    options?: RequestOptions,
  ): ApiPromise<TableResponse, ContactsTables.CreateContactsTableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/tables"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tableCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tableResponseInternalSchema },
        errorFactory: ContactsTables.CreateContactsTableError,
      },
      options,
    );
  }

  /**
   * Delete Contacts Table
   *
   * @remarks
   * Permanently delete a table and all its data. This cannot be undone.
   *
   * > **Billing:** Free.
   *
   * @returns Table deleted
   *
   * @throws {@link ContactsTables.DeleteContactsTableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteContactsTable(
    request: ContactsTables.DeleteContactsTableRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ContactsTablesResponse, ContactsTables.DeleteContactsTableError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [{ name: "email", value: request.email, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3ContactsTablesResponseSchema },
        errorFactory: ContactsTables.DeleteContactsTableError,
      },
      options,
    );
  }

  /**
   * Get Contacts Table
   *
   * @remarks
   * Get a table's metadata and current processing status.
   *
   * > **Billing:** Free.
   *
   * @returns Successful response
   *
   * @throws {@link ContactsTables.GetContactsTableError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactsTable(
    request: ContactsTables.GetContactsTableRequest,
    options?: RequestOptions,
  ): ApiPromise<TableResponse, ContactsTables.GetContactsTableError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [{ name: "email", value: request.email, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tableResponseInternalSchema },
        errorFactory: ContactsTables.GetContactsTableError,
      },
      options,
    );
  }

  /**
   * Get Contacts Table Entities
   *
   * @remarks
   * Read a page of rows in the table, with all column values and per-cell status.
   *
   * > **Billing:** Charged per row returned via `export_api`.
   *
   * @returns Successful response
   *
   * @throws {@link ContactsTables.GetContactsTableEntitiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactsTableEntities(
    request: ContactsTables.GetContactsTableEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesGetResponse, ContactsTables.GetContactsTableEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}/entities"),
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
        errorFactory: ContactsTables.GetContactsTableEntitiesError,
      },
      options,
    );
  }

  /**
   * List Contacts Table Columns
   *
   * @remarks
   * List the columns on a table, with type and aggregated per-cell status counts.
   *
   * > **Billing:** Free.
   *
   * @returns Successful response
   *
   * @throws {@link ContactsTables.ListContactsTableColumnsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContactsTableColumns(
    request: ContactsTables.ListContactsTableColumnsRequest,
    options?: RequestOptions,
  ): ApiPromise<ColumnsListResponse, ContactsTables.ListContactsTableColumnsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}/columns"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [{ name: "email", value: request.email, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: columnsListResponseSchema },
        errorFactory: ContactsTables.ListContactsTableColumnsError,
      },
      options,
    );
  }

  /**
   * List Contacts Tables
   *
   * @remarks
   * List contacts tables owned by the given user, plus any tables shared with the account.
   *
   * > **Billing:** Free.
   *
   * @returns Successful response
   *
   * @throws {@link ContactsTables.ListContactsTablesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContactsTables(
    request: ContactsTables.ListContactsTablesRequest,
    options?: RequestOptions,
  ): ApiPromise<TableListResponse, ContactsTables.ListContactsTablesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/tables/list"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tableListRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tableListResponseInternalSchema },
        errorFactory: ContactsTables.ListContactsTablesError,
      },
      options,
    );
  }

  /**
   * Remove Column from Contacts Table
   *
   * @remarks
   * Remove a column and delete all of its cell data across the table. Default Lusha columns cannot
   * be removed.
   *
   * > **Billing:** Free.
   *
   * @returns Column removed
   *
   * @throws {@link ContactsTables.RemoveContactsTableColumnError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeContactsTableColumn(
    request: ContactsTables.RemoveContactsTableColumnRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ContactsTablesColumnsResponse, ContactsTables.RemoveContactsTableColumnError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}/columns/{column_id}"),
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
        success: { kind: "json", schema: v3ContactsTablesColumnsResponseSchema },
        errorFactory: ContactsTables.RemoveContactsTableColumnError,
      },
      options,
    );
  }

  /**
   * Remove Entities from Contacts Table
   *
   * @remarks
   * Remove specific contact IDs from a table.
   *
   * > **Billing:** Free.
   *
   * @returns Entities removed
   *
   * @throws {@link ContactsTables.RemoveContactsTableEntitiesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeContactsTableEntities(
    request: ContactsTables.RemoveContactsTableEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesRemoveResponse, ContactsTables.RemoveContactsTableEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}/entities"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: entitiesRemoveRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: entitiesRemoveResponseSchema },
        errorFactory: ContactsTables.RemoveContactsTableEntitiesError,
      },
      options,
    );
  }

  /**
   * Run Column on Contacts Table
   *
   * @remarks
   * Populate or refresh a column's data for some or all rows in the table. This is **asynchronous**
   * — the call returns immediately with `status: "processing"`; poll Get Contacts Table for
   * `isProcessing` and per-column row-status counts to know when it's done, then read the values
   * via Get Contacts Table Entities.
   *
   * **`runScope` values:**
   * - `all` — every row, including already-processed ones (re-runs / refreshes). Most expensive.
   * - `missing` — only rows that have never been run for this column. Cheapest, safe to call
   *   repeatedly.
   * - `specific` — only the `entityIds` you pass. Also how you implement "run for this page" —
   *   fetch the page via Get Contacts Table Entities, then pass those IDs here.
   *
   * > **Billing:** Charged per row processed, per the column's credit tier. Re-running with `all`
   * charges again for rows that already have data.
   *
   * @returns Column run started
   *
   * @throws {@link ContactsTables.RunContactsTableColumnError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  runContactsTableColumn(
    request: ContactsTables.RunContactsTableColumnRequest,
    options?: RequestOptions,
  ): ApiPromise<ColumnsRunResponse, ContactsTables.RunContactsTableColumnError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}/columns/{column_id}/run"),
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
        errorFactory: ContactsTables.RunContactsTableColumnError,
      },
      options,
    );
  }

  /**
   * Update Contacts Table
   *
   * @remarks
   * Rename a table, change its visibility, or reassign its owner. All fields except `owner` are
   * optional — send only what changes.
   *
   * > **Billing:** Free.
   *
   * @returns Table updated
   *
   * @throws {@link ContactsTables.UpdateContactsTableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContactsTable(
    request: ContactsTables.UpdateContactsTableRequest,
    options?: RequestOptions,
  ): ApiPromise<TableResponse, ContactsTables.UpdateContactsTableError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/contacts/tables/{table_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "table_id", value: request.tableId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tableUpdateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tableResponseInternalSchema },
        errorFactory: ContactsTables.UpdateContactsTableError,
      },
      options,
    );
  }
}

export namespace ContactsTables {
  export type AddContactsTableEntitiesRequest = {
    /** The table's ID. */
    tableId: string;
    body: EntitiesAddRequest;
  };

  export class AddContactsTableEntitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddContactsTableEntitiesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateContactsTableRequest = {
    body: TableCreateRequest;
  };

  export class CreateContactsTableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContactsTableError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteContactsTableRequest = {
    /** The table's ID. */
    tableId: string;
    /**
     * Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE
     * calls, which cannot carry a body.
     */
    email?: string;
  };

  export const deleteContactsTableRequestSchema: Schema<DeleteContactsTableRequest> = s.lazySchema(() =>
    s.object<DeleteContactsTableRequest>({
      tableId: s.string(),
      email: s.optional(s.string().check(s.email())),
    }),
  );

  export class DeleteContactsTableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteContactsTableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContactsTableRequest = {
    /** The table's ID. */
    tableId: string;
    /**
     * Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE
     * calls, which cannot carry a body.
     */
    email?: string;
  };

  export const getContactsTableRequestSchema: Schema<GetContactsTableRequest> = s.lazySchema(() =>
    s.object<GetContactsTableRequest>({
      tableId: s.string(),
      email: s.optional(s.string().check(s.email())),
    }),
  );

  export class GetContactsTableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactsTableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContactsTableEntitiesRequest = {
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

  export const getContactsTableEntitiesRequestSchema: Schema<GetContactsTableEntitiesRequest> = s.lazySchema(
    () =>
      s.object<GetContactsTableEntitiesRequest>({
        tableId: s.string(),
        email: s.optional(s.string().check(s.email())),
        page: s.defaulted(s.int().check(s.lte(100)), 0),
        size: s.defaulted(s.int(), 100),
      }),
  );

  export class GetContactsTableEntitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactsTableEntitiesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListContactsTableColumnsRequest = {
    /** The table's ID. */
    tableId: string;
    /**
     * Email of the user making the request. Used to scope ownership/visibility checks on GET/DELETE
     * calls, which cannot carry a body.
     */
    email?: string;
  };

  export const listContactsTableColumnsRequestSchema: Schema<ListContactsTableColumnsRequest> = s.lazySchema(
    () =>
      s.object<ListContactsTableColumnsRequest>({
        tableId: s.string(),
        email: s.optional(s.string().check(s.email())),
      }),
  );

  export class ListContactsTableColumnsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListContactsTableColumnsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListContactsTablesRequest = {
    body: TableListRequest;
  };

  export class ListContactsTablesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListContactsTablesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveContactsTableColumnRequest = {
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

  export const removeContactsTableColumnRequestSchema: Schema<RemoveContactsTableColumnRequest> =
    s.lazySchema(() =>
      s.object<RemoveContactsTableColumnRequest>({
        tableId: s.string(),
        columnId: s.string(),
        email: s.optional(s.string().check(s.email())),
      }),
    );

  export class RemoveContactsTableColumnError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveContactsTableColumnError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RemoveContactsTableEntitiesRequest = {
    /** The table's ID. */
    tableId: string;
    body: EntitiesRemoveRequest;
  };

  export class RemoveContactsTableEntitiesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveContactsTableEntitiesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RunContactsTableColumnRequest = {
    /** The table's ID. */
    tableId: string;
    /** The column's ID. */
    columnId: string;
    body: ColumnsRunRequest;
  };

  export class RunContactsTableColumnError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunContactsTableColumnError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateContactsTableRequest = {
    /** The table's ID. */
    tableId: string;
    body: TableUpdateRequest;
  };

  export class UpdateContactsTableError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContactsTableError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
