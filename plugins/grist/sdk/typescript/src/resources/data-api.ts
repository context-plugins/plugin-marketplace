import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cellFormatSchema, type CellFormat } from "../models/cell-format.js";
import { dataSchema, type Data } from "../models/data.js";
import {
  docsTablesDataDeleteResponseSchema,
  type DocsTablesDataDeleteResponse,
} from "../models/unions/docs-tables-data-delete-response.js";
import type { Servers } from "../servers.js";

/**
 * Work with table data, using a (now deprecated) columnar format. We now recommend the `records`
 * endpoints.
 */
export class DataApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add rows to a table
   *
   * @remarks
   * Deprecated in favor of `records` endpoints. We have no immediate plans to remove these
   * endpoints, but consider `records` a better starting point for new projects.
   *
   * @returns IDs of rows added
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  addRows(request: DataApi.AddRowsRequest, options?: RequestOptions): ApiPromise<number[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/data"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [{ name: "noparse", value: request.noparse, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.array(s.int()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete rows of a table
   *
   * @returns Nothing returned
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deleteRows(
    request: DataApi.DeleteRowsRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsTablesDataDeleteResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/data/delete"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.int()) },
      },
      {
        success: { kind: "json", schema: docsTablesDataDeleteResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch data from a table
   *
   * @remarks
   * Deprecated in favor of `records` endpoints. We have no immediate plans to remove these
   * endpoints, but consider `records` a better starting point for new projects.
   *
   * @returns Cells from the table
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  getTableData(request: DataApi.GetTableDataRequest, options?: RequestOptions): ApiPromise<Data, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/data"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
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
        success: { kind: "json", schema: dataSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify rows of a table
   *
   * @remarks
   * Deprecated in favor of `records` endpoints. We have no immediate plans to remove these
   * endpoints, but consider `records` a better starting point for new projects.
   *
   * @returns IDs of rows modified
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  modifyRows(request: DataApi.ModifyRowsRequest, options?: RequestOptions): ApiPromise<number[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/docs/{docId}/tables/{tableId}/data"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "tableId", value: request.tableId, schema: s.string() },
        ],
        query: [{ name: "noparse", value: request.noparse, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dataSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.int()) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace DataApi {
  export type AddRowsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** Set to true to prohibit parsing strings according to the column type. */
    noparse?: boolean;
    /** the data to add */
    body: Record<string, unknown>;
  };

  export type DeleteRowsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** the IDs of rows to remove */
    body: number[];
  };

  export type GetTableDataRequest = {
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

  export type ModifyRowsRequest = {
    /** A string id (UUID) */
    docId: string;
    /** normalized table name (see `TABLE ID` in Raw Data) or numeric row ID in `_grist_Tables` */
    tableId: string;
    /** Set to true to prohibit parsing strings according to the column type. */
    noparse?: boolean;
    /** the data to change, with ids */
    body: Data;
  };
}
