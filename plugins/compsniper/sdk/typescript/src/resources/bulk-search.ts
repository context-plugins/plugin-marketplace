import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  bulkSearchRequestInternalSchema,
  bulkSearchRequestSchema,
  type BulkSearchRequest,
} from "../models/bulk-search-request.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class BulkSearch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Stream multiple keyword searches
   *
   * @remarks
   * Search up to 20 unique keywords with at most three concurrent workers. If only part of the
   * input fits the selected billing balance, the first keywords run and the remainder receive
   * per-keyword quota_exceeded result events. Each successful keyword consumes one request;
   * failures do not. Results stream as Server-Sent Events and may complete out of order.
   *
   * @returns SSE stream containing start, result, and complete events.
   *
   * @throws {@link BulkSearch.BulkSearchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkSearch(
    request: BulkSearch.BulkSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EventStream<string>, BulkSearch.BulkSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/bulk-search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Credit-Source",
            value: request.xCreditSource,
            schema: s.optional(s.lazy(() => xCreditSourceSchema)),
          },
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) },
        ],
        body: { kind: "json", value: request.body, schema: bulkSearchRequestInternalSchema },
      },
      {
        success: { kind: "eventStreamText", dataSchema: s.string() },
        errorFactory: BulkSearch.BulkSearchError,
      },
      options,
    );
  }

  /**
   * Download bulk-search CSV
   *
   * @remarks
   * Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires
   * the same account's bearer credential.
   *
   * @returns CSV export.
   *
   * @throws {@link BulkSearch.DownloadBulkSearchCsvError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadBulkSearchCsv(
    request: BulkSearch.DownloadBulkSearchCsvRequest,
    options?: RequestOptions,
  ): ApiPromise<string, BulkSearch.DownloadBulkSearchCsvError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bulk-search/{runId}/download.csv"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "runId", value: request.runId, schema: s.string() }],
        query: [{ name: "index", value: request.index, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: BulkSearch.DownloadBulkSearchCsvError,
      },
      options,
    );
  }
}

export namespace BulkSearch {
  export type BulkSearchRequestParams = {
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
    /**
     * Replay a completed run with the identical request body without repeating searches or
     * consuming quota.
     */
    idempotencyKey?: string;
    body: BulkSearchRequest;
  };

  export const bulkSearchRequestParamsSchema: Schema<BulkSearchRequestParams> = s.lazySchema(() =>
    s.object<BulkSearchRequestParams>({
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
      idempotencyKey: s.optional(s.string().check(s.maxLength(200))),
      body: bulkSearchRequestSchema,
    }),
  );

  export class BulkSearchError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkSearchError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 409, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type DownloadBulkSearchCsvRequest = {
    runId: string;
    /** Original zero-based keyword index. Omit for a combined CSV. */
    index?: number;
  };

  export const downloadBulkSearchCsvRequestSchema: Schema<DownloadBulkSearchCsvRequest> = s.lazySchema(() =>
    s.object<DownloadBulkSearchCsvRequest>({
      runId: s.string(),
      index: s.optional(s.int().check(s.gte(0))),
    }),
  );

  export class DownloadBulkSearchCsvError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadBulkSearchCsvError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 409, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
