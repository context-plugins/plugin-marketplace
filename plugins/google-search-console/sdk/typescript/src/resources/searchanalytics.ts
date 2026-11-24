import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  searchAnalyticsQueryRequestSchema,
  type SearchAnalyticsQueryRequest,
} from "../models/search-analytics-query-request.js";
import {
  searchAnalyticsQueryResponseSchema,
  type SearchAnalyticsQueryResponse,
} from "../models/search-analytics-query-response.js";
import type { Servers } from "../servers.js";

export class Searchanalytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Query searchanalytics
   *
   * @remarks
   * Query your data with filters and parameters that you define. Returns zero or more rows grouped
   * by the row keys that you define. You must define a date range of one or more days. When date is
   * one of the group by values, any days without data are omitted from the result list. If you need
   * to know which days have data, issue a broad date range query grouped by date for any metric,
   * and see which day rows are returned.
   *
   * @returns Successful response
   *
   * @throws {@link Searchanalytics.WebmastersSearchanalyticsQueryError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  webmastersSearchanalyticsQuery(
    request: Searchanalytics.WebmastersSearchanalyticsQueryRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchAnalyticsQueryResponse, Searchanalytics.WebmastersSearchanalyticsQueryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webmasters/v3/sites/{siteUrl}/searchAnalytics/query"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "siteUrl", value: request.siteUrl, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchAnalyticsQueryRequestSchema },
      },
      {
        success: { kind: "json", schema: searchAnalyticsQueryResponseSchema },
        errorFactory: Searchanalytics.WebmastersSearchanalyticsQueryError,
      },
      options,
    );
  }
}

export namespace Searchanalytics {
  export type WebmastersSearchanalyticsQueryRequest = {
    /** The site's URL, including protocol. For example: `http://www.example.com/`. */
    siteUrl: string;
    body: SearchAnalyticsQueryRequest;
  };

  export class WebmastersSearchanalyticsQueryError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<WebmastersSearchanalyticsQueryError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
