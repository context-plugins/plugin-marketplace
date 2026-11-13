import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { columnsListSchema, type ColumnsList } from "../models/columns-list.js";
import { columnsWithoutFieldsSchema, type ColumnsWithoutFields } from "../models/columns-without-fields.js";
import { createColumnsSchema, type CreateColumns } from "../models/create-columns.js";
import {
  docsTablesColumnsColIdResponseSchema,
  type DocsTablesColumnsColIdResponse,
} from "../models/unions/docs-tables-columns-col-id-response.js";
import {
  docsTablesColumnsResponseSchema,
  type DocsTablesColumnsResponse,
} from "../models/unions/docs-tables-columns-response.js";
import { updateColumnsSchema, type UpdateColumns } from "../models/update-columns.js";
import type { Servers } from "../servers.js";

/**
 * Tables are structured as a collection of columns.
 */
export class Columns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add columns to a table
   *
   * @returns The columns created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addColumns(
    request: Columns.AddColumnsRequest,
    options?: RequestOptions,
  ): ApiPromise<ColumnsWithoutFields, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/columns"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createColumnsSchema },
      },
      {
        success: { kind: "json", schema: columnsWithoutFieldsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a column of a table
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteColumn(
    request: Columns.DeleteColumnRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTablesColumnsColIdResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/columns/{colId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
          { name: "colId", value: request.colId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsTablesColumnsColIdResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List columns in a table
   *
   * @returns The columns in a table
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listColumns(
    request: Columns.ListColumnsRequest,
    options?: RequestOptions,
  ): ApiPromise<ColumnsList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/columns"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [{ name: "hidden", value: request.hidden, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: columnsListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify columns of a table
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyColumns(
    request: Columns.ModifyColumnsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTablesColumnsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/columns"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateColumnsSchema },
      },
      {
        success: { kind: "json", schema: docsTablesColumnsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add or update columns of a table
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceColumns(
    request: Columns.ReplaceColumnsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTablesColumnsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/columns"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [
          { name: "noadd", value: request.noadd, schema: s.optional(s.boolean()) },
          { name: "noupdate", value: request.noupdate, schema: s.optional(s.boolean()) },
          { name: "replaceall", value: request.replaceall, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateColumnsSchema },
      },
      {
        success: { kind: "json", schema: docsTablesColumnsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Columns {
  export type AddColumnsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** the columns to add */
    body: CreateColumns;
  };

  export type DeleteColumnRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /**
     * The column id (without the starting `$`) as shown in the column configuration below the label
     */
    colId: string;
  };

  export type ListColumnsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** Set to true to include the hidden columns (like "manualSort") */
    hidden?: boolean;
  };

  export type ModifyColumnsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** the columns to change, with ids */
    body: UpdateColumns;
  };

  export type ReplaceColumnsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    noadd?: boolean;
    noupdate?: boolean;
    replaceall?: boolean;
    /**
     * The columns to add or update. We check whether the specified column ID exists: if so, the
     * column is updated with the provided data, otherwise a new column is created. Also note that
     * some query parameters alter this behavior.
     */
    body: UpdateColumns;
  };
}
