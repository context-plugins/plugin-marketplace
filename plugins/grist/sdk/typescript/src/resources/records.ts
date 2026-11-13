import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cellFormatSchema, type CellFormat } from "../models/cell-format.js";
import { onmanySchema, type Onmany } from "../models/onmany.js";
import { recordsListSchema, type RecordsList } from "../models/records-list.js";
import { recordsWithRequireSchema, type RecordsWithRequire } from "../models/records-with-require.js";
import { recordsWithoutFieldsSchema, type RecordsWithoutFields } from "../models/records-without-fields.js";
import { recordsWithoutIdSchema, type RecordsWithoutId } from "../models/records-without-id.js";
import {
  docsTablesRecordsDeleteResponseSchema,
  type DocsTablesRecordsDeleteResponse,
} from "../models/unions/docs-tables-records-delete-response.js";
import {
  docsTablesRecordsResponseSchema,
  type DocsTablesRecordsResponse,
} from "../models/unions/docs-tables-records-response.js";
import type { Servers } from "../servers.js";

/**
 * Tables contain collections of records (also called rows).
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
   * Add records to a table
   *
   * @returns IDs of records added
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addRecords(
    request: Records.AddRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordsWithoutFields, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/records"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [{ name: "noparse", value: request.noparse, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recordsWithoutIdSchema },
      },
      {
        success: { kind: "json", schema: recordsWithoutFieldsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete records of a table
   *
   * @returns Nothing returned
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRecords(
    request: Records.DeleteRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTablesRecordsDeleteResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/records/delete"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.int()) },
      },
      {
        success: { kind: "json", schema: docsTablesRecordsDeleteResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch records from a table
   *
   * @returns Records from the table
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecords(
    request: Records.ListRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordsList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/records"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "hidden", value: request.hidden, schema: s.optional(s.boolean()) },
          {
            name: "cellFormat",
            value: request.cellFormat,
            schema: s.optional(s.lazy(() => cellFormatSchema)),
          },
        ],
        headers: [
          { name: "X-Sort", value: request.xSort, schema: s.optional(s.string()) },
          { name: "X-Limit", value: request.xLimit, schema: s.optional(s.float64()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recordsListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify records of a table
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyRecords(
    request: Records.ModifyRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTablesRecordsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/records"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [{ name: "noparse", value: request.noparse, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recordsListSchema },
      },
      {
        success: { kind: "json", schema: docsTablesRecordsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add or update records of a table
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceRecords(
    request: Records.ReplaceRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTablesRecordsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/records"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth2),
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [
          { name: "noparse", value: request.noparse, schema: s.optional(s.boolean()) },
          { name: "onmany", value: request.onmany, schema: s.optional(s.lazy(() => onmanySchema)) },
          { name: "noadd", value: request.noadd, schema: s.optional(s.boolean()) },
          { name: "noupdate", value: request.noupdate, schema: s.optional(s.boolean()) },
          { name: "allow_empty_require", value: request.allowEmptyRequire, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recordsWithRequireSchema },
      },
      {
        success: { kind: "json", schema: docsTablesRecordsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Records {
  export type AddRecordsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** Set to true to prohibit parsing strings according to the column type. */
    noparse?: boolean;
    /** the records to add */
    body: RecordsWithoutId;
  };

  export type DeleteRecordsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** the IDs of records to remove */
    body: number[];
  };

  export type ListRecordsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /**
     * This is a JSON object mapping column names to arrays of allowed values. For example, to
     * filter column `pet` for values `cat` and `dog`, the filter would be `{"pet": ["cat",
     * "dog"]}`. JSON contains characters that are not safe to place in a URL, so it is important to
     * url-encode them. For this example, the url-encoding is
     * `%7B%22pet%22%3A%20%5B%22cat%22%2C%20%22dog%22%5D%7D`. See
     * https://rosettacode.org/wiki/URL_encoding for how to url-encode a string, or
     * https://www.urlencoder.org/ to try some examples. Multiple columns can be filtered. For
     * example the filter for `pet` being either `cat` or `dog`, AND `size` being either `tiny` or
     * `outrageously small`, would be `{"pet": ["cat", "dog"], "size": ["tiny", "outrageously
     * small"]}`.
     */
    filter?: string;
    /**
     * Order in which to return results. If a single column name is given (e.g. `pet`), results are
     * placed in ascending order of values in that column. To get results in an order that was
     * previously prepared manually in Grist, use the special `manualSort` column name. Multiple
     * columns can be specified, separated by commas (e.g. `pet,age`). For descending order, prefix
     * a column name with a `-` character (e.g. `pet,-age`). To include additional sorting options
     * append them after a colon (e.g. `pet,-age:naturalSort;emptyLast,owner`). Available options
     * are: `orderByChoice`, `naturalSort`, `emptyLast`. Without the `sort` parameter, the order of
     * results is unspecified.
     */
    sort?: string;
    /** Return at most this number of rows. A value of 0 is equivalent to having no limit. */
    limit?: number;
    /** Set to true to include the hidden columns (like "manualSort") */
    hidden?: boolean;
    /**
     * With "typed", every cell value is returned in a self-describing typed form, e.g. a Date as
     * `["d", timestamp]` and a Reference as `["R", tableId, rowId]`, and formula errors are
     * returned inline as `["E", ...]` values. The default "normal" format uses compact values whose
     * interpretation depends on the column type. See [Grist data
     * format](https://github.com/gristlabs/grist-core/blob/main/documentation/grist-data-format.md)
     * for details.
     */
    cellFormat?: CellFormat;
    /** Same as `sort` query parameter. */
    xSort?: string;
    /** Same as `limit` query parameter. */
    xLimit?: number;
  };

  export type ModifyRecordsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** Set to true to prohibit parsing strings according to the column type. */
    noparse?: boolean;
    /** the records to change, with ids */
    body: RecordsList;
  };

  export type ReplaceRecordsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** Set to true to prohibit parsing strings according to the column type. */
    noparse?: boolean;
    onmany?: Onmany;
    noadd?: boolean;
    noupdate?: boolean;
    allowEmptyRequire?: boolean;
    /**
     * The records to add or update. Instead of an id, a `require` object is provided, with the same
     * structure as `fields`. If no query parameter options are set, then the operation is as
     * follows. First, we check if a record exists matching the values specified for columns in
     * `require`. If so, we update it by setting the values specified for columns in `fields`. If
     * not, we create a new record with a combination of the values in `require` and `fields`, with
     * `fields` taking priority if the same column is specified in both. The query parameters allow
     * for variations on this behavior.
     */
    body: RecordsWithRequire;
  };
}
