import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { analyticsErrorSchema, type AnalyticsError } from "../models/analytics-error.js";
import { analyticsPrPageSchema, type AnalyticsPrPage } from "../models/analytics-pr-page.js";
import type { Servers } from "../servers.js";

export class Analytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List pull request analytics
   *
   * @remarks
   * Export metrics for merged pull requests reviewed by cubic.
   *
   * @returns A page of pull request analytics. nextCursor is null on the last page. Recent updates
   * may take a short time to appear due to read-replica lag.
   *
   * @throws {@link Analytics.ListPullRequestAnalyticsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CubicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPullRequestAnalytics(
    request: Analytics.ListPullRequestAnalyticsRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsPrPage, Analytics.ListPullRequestAnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/analytics/v1/prs"),
        auth: this.#auth.analyticsApiKey,
        pathParams: [],
        query: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "repo", value: request.repo, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.int(), 100) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsPrPageSchema },
        errorFactory: Analytics.ListPullRequestAnalyticsError,
      },
      options,
    );
  }
}

export namespace Analytics {
  export type ListPullRequestAnalyticsRequest = {
    /**
     * GitHub organization or owner whose pull request analytics you want to fetch. Surrounding
     * whitespace is trimmed before validation.
     */
    org: string;
    /**
     * Filter to one repository under the selected owner. Surrounding whitespace is trimmed before
     * validation; blank values are ignored.
     */
    repo?: string;
    /**
     * Start of the review date window. Accepts ISO 8601 timestamps or UTC date-only values such as
     * 2026-04-01. Surrounding whitespace is trimmed before validation; blank values are ignored. If
     * neither date bound is set, cubic uses the last 30 days, 7 days, or 24 hours based on the
     * installation's available history.
     */
    startDate?: string;
    /**
     * End of the review date window. A UTC date-only value includes the full day through
     * 23:59:59.999Z. Surrounding whitespace is trimmed before validation; blank values are ignored.
     */
    endDate?: string;
    /**
     * Number of results per page, from 1 to 100. Values outside this range return 400.
     *
     * @default 100
     */
    perPage?: number;
    /**
     * Copy nextCursor unchanged from the preceding response. Keep the same organization, filters,
     * and date window across pages. Surrounding whitespace is trimmed before validation; blank
     * values are ignored.
     */
    cursor?: string;
  };

  export const listPullRequestAnalyticsRequestSchema: Schema<ListPullRequestAnalyticsRequest> = s.lazySchema(
    () =>
      s.object<ListPullRequestAnalyticsRequest>({
        org: s.string().check(s.minLength(1), s.maxLength(255)),
        repo: s.optional(s.string().check(s.maxLength(255))),
        startDate: s.optional(s.string().check(s.maxLength(255))),
        endDate: s.optional(s.string().check(s.maxLength(255))),
        perPage: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
        cursor: s.optional(s.string().check(s.maxLength(255))),
      }),
  );

  export class ListPullRequestAnalyticsError extends ApiError {
    declare readonly payload:
      | Declared<"analyticsError", AnalyticsError>
      | Declared<"analyticsError2", AnalyticsError>
      | Declared<"analyticsError3", AnalyticsError>
      | Declared<"analyticsError4", AnalyticsError>
      | Declared<"analyticsError5", AnalyticsError>
      | Declared<"analyticsError6", AnalyticsError>
      | Declared<"analyticsError7", AnalyticsError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPullRequestAnalyticsError> = [
      { on: 400, kind: "analyticsError", decode: { kind: "json", schema: analyticsErrorSchema } },
      { on: 401, kind: "analyticsError2", decode: { kind: "json", schema: analyticsErrorSchema } },
      { on: 403, kind: "analyticsError3", decode: { kind: "json", schema: analyticsErrorSchema } },
      { on: 404, kind: "analyticsError4", decode: { kind: "json", schema: analyticsErrorSchema } },
      { on: 429, kind: "analyticsError5", decode: { kind: "json", schema: analyticsErrorSchema } },
      { on: 500, kind: "analyticsError6", decode: { kind: "json", schema: analyticsErrorSchema } },
      { on: 503, kind: "analyticsError7", decode: { kind: "json", schema: analyticsErrorSchema } },
    ];
  }
}
