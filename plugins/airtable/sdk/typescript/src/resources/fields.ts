import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createFieldRequestSchema, type CreateFieldRequest } from "../models/create-field-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { fieldSchemaSchema, type FieldSchema } from "../models/field-schema.js";
import {
  metaBasesTablesFieldsFieldIdRequestSchema,
  type MetaBasesTablesFieldsFieldIdRequest,
} from "../models/meta-bases-tables-fields-field-id-request.js";
import type { Servers } from "../servers.js";

/**
 * Create and update field definitions within a table
 */
export class Fields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Airtable Create a Field in a Table
   *
   * @remarks
   * Creates a new field in the specified table. The field must include a name and type. Some field
   * types (like singleSelect, multipleSelects) accept additional options for configuration. Note
   * that formula and some computed field types cannot be created via the API.
   *
   * @returns The newly created field definition.
   *
   * @throws {@link Fields.CreateFieldError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createField(
    request: Fields.CreateFieldRequestParams,
    options?: RequestOptions,
  ): ApiPromise<FieldSchema, Fields.CreateFieldError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/meta/bases/{baseId}/tables/{tableId}/fields"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createFieldRequestSchema },
      },
      {
        success: { kind: "json", schema: fieldSchemaSchema },
        errorFactory: Fields.CreateFieldError,
      },
      options,
    );
  }

  /**
   * Airtable Update a Field
   *
   * @remarks
   * Updates the name, description, or configuration options of an existing field. Only the provided
   * properties will be modified. Not all field properties can be updated after creation.
   *
   * @returns The updated field definition.
   *
   * @throws {@link Fields.UpdateFieldError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateField(
    request: Fields.UpdateFieldRequest,
    options?: RequestOptions,
  ): ApiPromise<FieldSchema, Fields.UpdateFieldError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/meta/bases/{baseId}/tables/{tableId}/fields/{fieldId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
          { name: "fieldId", value: request.fieldId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: metaBasesTablesFieldsFieldIdRequestSchema },
      },
      {
        success: { kind: "json", schema: fieldSchemaSchema },
        errorFactory: Fields.UpdateFieldError,
      },
      options,
    );
  }
}

export namespace Fields {
  export type CreateFieldRequestParams = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The unique identifier of the table (starts with 'tbl'). */
    tableId: string;
    body: CreateFieldRequest;
  };

  export const createFieldRequestParamsSchema: Schema<CreateFieldRequestParams> = s.lazySchema(() =>
    s.object<CreateFieldRequestParams>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableId: s.string().check(s.pattern("^tbl[a-zA-Z0-9]+$")),
      body: createFieldRequestSchema,
    }),
  );

  export class CreateFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFieldError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateFieldRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The unique identifier of the table (starts with 'tbl'). */
    tableId: string;
    /** The unique identifier of the field (starts with 'fld'). */
    fieldId: string;
    body: MetaBasesTablesFieldsFieldIdRequest;
  };

  export const updateFieldRequestSchema: Schema<UpdateFieldRequest> = s.lazySchema(() =>
    s.object<UpdateFieldRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableId: s.string().check(s.pattern("^tbl[a-zA-Z0-9]+$")),
      fieldId: s.string().check(s.pattern("^fld[a-zA-Z0-9]+$")),
      body: metaBasesTablesFieldsFieldIdRequestSchema,
    }),
  );

  export class UpdateFieldError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFieldError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
