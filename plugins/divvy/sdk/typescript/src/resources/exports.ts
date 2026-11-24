import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  exportDownloadLinkResponseDtoSchema,
  type ExportDownloadLinkResponseDto,
} from "../models/export-download-link-response-dto.js";
import {
  listResponseDtoExportResponseDtoSchema,
  type ListResponseDtoExportResponseDto,
} from "../models/list-response-dto-export-response-dto.js";
import type { Servers } from "../servers.js";

export class Exports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get exported record download URL
   *
   * @remarks
   * Get the download URL for an exported record file.
   *
   * From the response, use `downloadLink` in a GET request to download the file.
   *
   * ```
   * curl '{downloadLink}' --output {file_name}
   * ```
   * See Export BILL records in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Get exported record download URL response
   *
   * @throws {@link Exports.GetDownloadLinkError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDownloadLink(
    request: Exports.GetDownloadLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<ExportDownloadLinkResponseDto, Exports.GetDownloadLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/exports/{exportId}/download-link"),
        auth: noneAuth,
        pathParams: [{ name: "exportId", value: request.exportId, schema: s.int() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: exportDownloadLinkResponseDtoSchema },
        errorFactory: Exports.GetDownloadLinkError,
      },
      options,
    );
  }

  /**
   * Get list of exported BILL records
   *
   * @remarks
   * Get a list of exported BILL records available for you to download. By default, you get 20
   * results on one page of results. Set `max` in your request to get up to 100 results on one page.
   *
   * From the response, use `exportId` to get the download URL for an exported record file with `GET
   * /v3/exports/{exportId}/download-link`.
   *
   * You can export records, such as vendors, customers, bills, and invoices. In addition, you can
   * export AP payments and AR payments. The **Import and export** section in the BILL web app
   * (**Settings > Import & export > Custom File Integration**) provides the complete list of
   * entities that you can export.
   *
   * See Export BILL records in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Get list of exported BILL records response
   *
   * @throws {@link Exports.ListExportsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExports(
    request: Exports.ListExportsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoExportResponseDto, Exports.ListExportsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/exports"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoExportResponseDtoSchema },
        errorFactory: Exports.ListExportsError,
      },
      options,
    );
  }
}

export namespace Exports {
  export type GetDownloadLinkRequest = {
    exportId: number;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetDownloadLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDownloadLinkError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListExportsRequest = {
    max?: number | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listExportsRequestSchema: Schema<ListExportsRequest> = s.lazySchema(() =>
    s.object<ListExportsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListExportsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListExportsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
