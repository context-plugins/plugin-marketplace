import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createTablesSchema, type CreateTables } from "../models/create-tables.js";
import { expandSchema, type Expand } from "../models/expand.js";
import { tablesListSchema, type TablesList } from "../models/tables-list.js";
import { tablesWithoutFieldsSchema, type TablesWithoutFields } from "../models/tables-without-fields.js";
import { docsTablesResponseSchema, type DocsTablesResponse } from "../models/unions/docs-tables-response.js";
import { updateTablesSchema, type UpdateTables } from "../models/update-tables.js";
import type { Servers } from "../servers.js";

/**
 * Documents are structured as a collection of tables.
 */
export class Tables {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add tables to a document
   *
   * @returns The table created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTables(
    request: Tables.AddTablesRequest,
    options?: RequestOptions,
  ): ApiPromise<TablesWithoutFields, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/tables"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTablesSchema },
      },
      {
        success: { kind: "json", schema: tablesWithoutFieldsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List tables in a document
   *
   * @returns The tables in a document
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTables(request: Tables.ListTablesRequest, options?: RequestOptions): ApiPromise<TablesList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/tables"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [{ name: "expand", value: request.expand, schema: s.optional(s.lazy(() => expandSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tablesListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify tables of a document
   *
   * @remarks
   * Modify metadata for existing tables. This endpoint is primarily useful for:
   * - Renaming tables (via the `tableId` field)
   * - Setting on-demand loading (via the `onDemand` field)
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyTables(
    request: Tables.ModifyTablesRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTablesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/tables"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [{ name: "docId", value: request.docId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTablesSchema },
      },
      {
        success: { kind: "json", schema: docsTablesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Tables {
  export type AddTablesRequest = {
    /** A string id (UUID) */
    docId: string;
    /** the tables to add */
    body: CreateTables;
  };

  export type ListTablesRequest = {
    /** A string id (UUID) */
    docId: string;
    /** Set to "column" to include column metadata for each table in the response. */
    expand?: Expand;
  };

  export type ModifyTablesRequest = {
    /** A string id (UUID) */
    docId: string;
    /** the tables to modify, identified by their current id */
    body: UpdateTables;
  };
}
