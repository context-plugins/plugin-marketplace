import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cellFormatSchema, type CellFormat } from "../models/cell-format.js";
import { errorSchema, type Error } from "../models/error.js";
import { recordDeletedSchema, type RecordDeleted } from "../models/record-deleted.js";
import { recordIdRequestSchema, type RecordIdRequest } from "../models/record-id-request.js";
import { recordIdRequest1Schema, type RecordIdRequest1 } from "../models/record-id-request1.js";
import { recordListSchema, type RecordList } from "../models/record-list.js";
import { recordModelSchema, type RecordModel } from "../models/record-model.js";
import { requestInternalSchema, requestSchema, type Request } from "../models/request.js";
import { responseSchema, type Response } from "../models/response.js";
import { sortSchema, type Sort } from "../models/sort.js";
import type { Servers } from "../servers.js";

/**
 * Create, read, update, and delete records in a table
 */
export class Records {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Airtable Create Records in a Table
   *
   * @remarks
   * Creates up to 10 records in the specified table. Each record must include a fields object
   * mapping field names (or IDs) to values. If typecast is enabled, the API will attempt to convert
   * string values to the appropriate cell value.
   *
   * @returns The created records.
   *
   * @throws {@link Records.CreateRecordsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRecords(
    request: Records.CreateRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<Response, Records.CreateRecordsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: requestInternalSchema },
      },
      {
        success: { kind: "json", schema: responseSchema },
        errorFactory: Records.CreateRecordsError,
      },
      options,
    );
  }

  /**
   * Airtable Delete a Record
   *
   * @remarks
   * Deletes a single record from the specified table. The record is permanently removed and cannot
   * be recovered through the API.
   *
   * @returns Confirmation of deletion.
   *
   * @throws {@link Records.DeleteRecordError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRecord(
    request: Records.DeleteRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordDeleted, Records.DeleteRecordError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}/{recordId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recordDeletedSchema },
        errorFactory: Records.DeleteRecordError,
      },
      options,
    );
  }

  /**
   * Airtable Retrieve a Single Record
   *
   * @remarks
   * Retrieves a single record by its ID from the specified table. Returns the record's fields,
   * creation time, and ID.
   *
   * @returns The requested record.
   *
   * @throws {@link Records.GetRecordError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecord(
    request: Records.GetRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordModel, Records.GetRecordError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}/{recordId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [
          {
            name: "returnFieldsByFieldId",
            value: request.returnFieldsByFieldId,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recordModelSchema },
        errorFactory: Records.GetRecordError,
      },
      options,
    );
  }

  /**
   * Airtable List Records in a Table
   *
   * @remarks
   * Returns a paginated list of records in the specified table. Records can be filtered using an
   * Airtable formula, sorted by specific fields, and limited to specific fields. The maximum page
   * size is 100 records. Use the offset parameter from the response to fetch the next page.
   *
   * @returns A paginated list of records.
   *
   * @throws {@link Records.ListRecordsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecords(
    request: Records.ListRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordList, Records.ListRecordsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
        ],
        query: [
          { name: "fields[]", value: request.fields, schema: s.optional(s.array(s.string())) },
          { name: "filterByFormula", value: request.filterByFormula, schema: s.optional(s.string()) },
          { name: "maxRecords", value: request.maxRecords, schema: s.optional(s.int()) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 100) },
          { name: "sort", value: request.sort, schema: s.optional(s.array(s.lazy(() => sortSchema))) },
          { name: "view", value: request.view, schema: s.optional(s.string()) },
          {
            name: "cellFormat",
            value: request.cellFormat,
            schema: s.optional(s.lazy(() => cellFormatSchema)),
          },
          { name: "timeZone", value: request.timeZone, schema: s.optional(s.string()) },
          { name: "userLocale", value: request.userLocale, schema: s.optional(s.string()) },
          {
            name: "returnFieldsByFieldId",
            value: request.returnFieldsByFieldId,
            schema: s.optional(s.boolean()),
          },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recordListSchema },
        errorFactory: Records.ListRecordsError,
      },
      options,
    );
  }

  /**
   * Airtable Update a Record (full Replacement)
   *
   * @remarks
   * Replaces all fields of an existing record. Fields that are not included in the request body
   * will be cleared. This is a destructive update that overwrites the entire record.
   *
   * @returns The replaced record.
   *
   * @throws {@link Records.ReplaceRecordError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceRecord(
    request: Records.ReplaceRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordModel, Records.ReplaceRecordError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}/{recordId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recordIdRequest1Schema },
      },
      {
        success: { kind: "json", schema: recordModelSchema },
        errorFactory: Records.ReplaceRecordError,
      },
      options,
    );
  }

  /**
   * Airtable Update a Record (partial)
   *
   * @remarks
   * Updates specific fields of an existing record. Only the fields included in the request body
   * will be updated; all other fields will remain unchanged. Up to 10 records can be updated in a
   * single request when using the batch endpoint.
   *
   * @returns The updated record.
   *
   * @throws {@link Records.UpdateRecordError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRecord(
    request: Records.UpdateRecordRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordModel, Records.UpdateRecordError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/{baseId}/{tableIdOrName}/{recordId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "baseId", value: request.baseId, schema: s.string() },
          { name: "tableIdOrName", value: request.tableIdOrName, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recordIdRequestSchema },
      },
      {
        success: { kind: "json", schema: recordModelSchema },
        errorFactory: Records.UpdateRecordError,
      },
      options,
    );
  }
}

export namespace Records {
  export type CreateRecordsRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    body: Request;
  };

  export const createRecordsRequestSchema: Schema<CreateRecordsRequest> = s.lazySchema(() =>
    s.object<CreateRecordsRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      body: requestSchema,
    }),
  );

  export class CreateRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRecordsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteRecordRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** The unique identifier of the record (starts with 'rec'). */
    recordId: string;
  };

  export const deleteRecordRequestSchema: Schema<DeleteRecordRequest> = s.lazySchema(() =>
    s.object<DeleteRecordRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      recordId: s.string().check(s.pattern("^rec[a-zA-Z0-9]+$")),
    }),
  );

  export class DeleteRecordError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteRecordError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetRecordRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** The unique identifier of the record (starts with 'rec'). */
    recordId: string;
    /** If true, the response will use field IDs as keys instead of field names. */
    returnFieldsByFieldId?: boolean;
  };

  export const getRecordRequestSchema: Schema<GetRecordRequest> = s.lazySchema(() =>
    s.object<GetRecordRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      recordId: s.string().check(s.pattern("^rec[a-zA-Z0-9]+$")),
      returnFieldsByFieldId: s.optional(s.boolean()),
    }),
  );

  export class GetRecordError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecordError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListRecordsRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** Only return data for the specified field names or IDs. */
    fields?: string[];
    /**
     * An Airtable formula used to filter records. The formula is evaluated for each record, and if
     * the result is not 0, false, "", NaN, [], or #Error!, the record will be included in the
     * response.
     */
    filterByFormula?: string;
    /** The maximum total number of records that will be returned. */
    maxRecords?: number;
    /**
     * The number of records returned in each request. Must be less than or equal to 100. Default is
     * 100.
     *
     * @default 100
     */
    pageSize?: number;
    /**
     * A list of sort objects that specifies how the records will be ordered. Each sort object must
     * have a field key and an optional direction key (asc or desc).
     */
    sort?: Sort[];
    /**
     * The name or ID of a view in the table. If set, only the records in that view will be
     * returned.
     */
    view?: string;
    /**
     * The format that should be used for cell values. Supported values are json (default) and
     * string.
     */
    cellFormat?: CellFormat;
    /** The time zone to use for formatting dates when using string cell format. */
    timeZone?: string;
    /** The user locale to use for formatting dates when using string cell format. */
    userLocale?: string;
    /** If true, the response will use field IDs as object keys instead of field names. */
    returnFieldsByFieldId?: boolean;
    /**
     * A pagination cursor returned from a previous request. Pass this value to fetch the next page
     * of results.
     */
    offset?: string;
  };

  export const listRecordsRequestSchema: Schema<ListRecordsRequest> = s.lazySchema(() =>
    s.object<ListRecordsRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      fields: s.optional(s.array(s.string())),
      filterByFormula: s.optional(s.string()),
      maxRecords: s.optional(s.int().check(s.gte(1))),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
      sort: s.optional(s.array(s.lazy(() => sortSchema))),
      view: s.optional(s.string()),
      cellFormat: s.optional(s.lazy(() => cellFormatSchema)),
      timeZone: s.optional(s.string()),
      userLocale: s.optional(s.string()),
      returnFieldsByFieldId: s.optional(s.boolean()),
      offset: s.optional(s.string()),
    }),
  );

  export class ListRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRecordsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ReplaceRecordRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** The unique identifier of the record (starts with 'rec'). */
    recordId: string;
    body: RecordIdRequest1;
  };

  export const replaceRecordRequestSchema: Schema<ReplaceRecordRequest> = s.lazySchema(() =>
    s.object<ReplaceRecordRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      recordId: s.string().check(s.pattern("^rec[a-zA-Z0-9]+$")),
      body: recordIdRequest1Schema,
    }),
  );

  export class ReplaceRecordError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceRecordError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateRecordRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /** The name or unique identifier (starts with 'tbl') of the table. */
    tableIdOrName: string;
    /** The unique identifier of the record (starts with 'rec'). */
    recordId: string;
    body: RecordIdRequest;
  };

  export const updateRecordRequestSchema: Schema<UpdateRecordRequest> = s.lazySchema(() =>
    s.object<UpdateRecordRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      tableIdOrName: s.string(),
      recordId: s.string().check(s.pattern("^rec[a-zA-Z0-9]+$")),
      body: recordIdRequestSchema,
    }),
  );

  export class UpdateRecordError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRecordError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
