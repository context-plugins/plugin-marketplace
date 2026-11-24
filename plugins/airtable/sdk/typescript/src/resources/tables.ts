import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createTableRequestInternalSchema,
  createTableRequestSchema,
  type CreateTableRequest,
} from "../models/create-table-request.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  metaBasesTablesRequestSchema,
  type MetaBasesTablesRequest,
} from "../models/meta-bases-tables-request.js";
import { tableSchemaSchema, type TableSchema } from "../models/table-schema.js";
import type { Servers } from "../servers.js";

/**
 * Create and update table definitions within a base
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
   * Airtable Create a Table in a Base
   *
   * @remarks
   * Creates a new table within the specified base. The table must include a name and at least one
   * field definition. Optionally include a description for the table.
   *
   * @returns The newly created table with its schema.
   *
   * @throws {@link Tables.CreateTableError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTable(
    request: Tables.CreateTableRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TableSchema, Tables.CreateTableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/meta/bases/{baseId}/tables"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "baseId", value: request.baseId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTableRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tableSchemaSchema },
        errorFactory: Tables.CreateTableError,
      },
      options,
    );
  }

  /**
   * Airtable Update a Table
   *
   * @remarks
   * Updates the name and/or description of an existing table. Only the provided fields will be
   * modified.
   *
   * @returns The updated table schema.
   *
   * @throws {@link Tables.UpdateTableError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTable(
    request: Tables.UpdateTableRequest,
    options?: RequestOptions,
  ): ApiPromise<TableSchema, Tables.UpdateTableError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/meta/bases/{baseId}/tables/{tableId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: metaBasesTablesRequestSchema },
      },
      {
        success: { kind: "json", schema: tableSchemaSchema },
        errorFactory: Tables.UpdateTableError,
      },
      options,
    );
  }
}

export namespace Tables {
  export type CreateTableRequestParams = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    body: CreateTableRequest;
  };

  export const createTableRequestParamsSchema: Schema<CreateTableRequestParams> = s.lazySchema(() =>
    s.object<CreateTableRequestParams>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      body: createTableRequestSchema,
    }),
  );

  export class CreateTableError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTableError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateTableRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The unique identifier of the table (starts with 'tbl'). */
    tableId: string;
    body: MetaBasesTablesRequest;
  };

  export const updateTableRequestSchema: Schema<UpdateTableRequest> = s.lazySchema(() =>
    s.object<UpdateTableRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableId: s.string().check(s.pattern("^tbl[a-zA-Z0-9]+$")),
      body: metaBasesTablesRequestSchema,
    }),
  );

  export class UpdateTableError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTableError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
